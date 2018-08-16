import React from 'react';
import _ from 'lodash';
import axios from 'axios';

export default class Treehouse extends React.Component {

  constructor(props){
    super(props);
    this.more = element => {
      this.more = element;
    };

      this.state = {
          profile: {},
          toShow: {},
          page: 0,
          badges: {},
          badgeArray: {},
          loading: true,
        };
  }

  axiosUpdate() {
    let badgeArray = [...this.state.badges];
    console.log(this.state.page);
    var page = this.state.page,
        recPerPage = 13,
        //calculate the badges per page
        startRec = Math.max(this.state.page) * 13,
        endRec = startRec + recPerPage,
        toShow = badgeArray.splice(startRec, recPerPage);
        this.setState({toShow});
        if(endRec >= this.state.badges.length) {this.setState({page: 0})};
  }

  componentDidMount() {
    this.setState({loading: false});
    axios.get(`https://teamtreehouse.com/blakeguyan.json`,
    {
      crossdomain: true
      }
    )
      .then(res => {
        const profile = res.data;
        this.setState({ profile });
        var badges = profile.badges;
        this.setState({badges});
        let badgeArray = [...this.state.badges];
        this.setState({badgeArray});
        console.log(badgeArray);
        var page = this.state.page,
            recPerPage = 13,
            //calculate the badges per page
            startRec = Math.max(this.state.page) * 13,
            endRec = startRec + recPerPage,
            toShow = badgeArray.splice(startRec, recPerPage);
            this.setState({toShow});
      })
  };


    onMorePress(e) {
      e.preventDefault();
      let newNum = this.state.page + 1;

        this.setState({page: newNum}, () => {
            this.axiosUpdate();
        });
              console.log(this.state.page);

    };

    onLessPress(e) {
      e.preventDefault();
        if(this.state.page > 0) {
          this.setState({page: this.state.page-1},() =>{
            this.axiosUpdate();
          } );
        }
    };

  render() {
    const points = this.state.profile.points;
    return (
      <div className="wrapper">
        <h2 className="title">My Treehouse Profile</h2>
        <div className="profile">
          <div className="profile-meta">
            <a href={this.state.profile.profile_url} target="_blank"></a>
            <div className="title">
              <h2>{this.state.profile.name}</h2>
            </div>
            <img className="avatar" src={this.state.profile.gravatar_url} />
          </div>
          <div className="profile-points">
            <h3>Skill Points</h3>
            <ul className={(this.state.loading) ? "loader" : ""}>
              <li>Javascript: {((points) ? points.JavaScript : '')}</li>
              <li>Design: {((points) ? points.Design : '')}</li>
              <li>HTML: {((points) ? points.HTML : '')}</li>
              <li>PHP: {((points) ? points.PHP : '')}</li>
              <li className="last" >CSS: {((points) ? points.CSS : '')}</li>
              <li style={{color: 'red'}}>Total: {((points) ? points.total : '')}</li>
            </ul>
          </div>
        </div>
        <div className="badgeContainer">
          <div className="buttons">
            <a href="#" onClick={() => this.onLessPress(event)}>0</a>
          </div>
          <div className="badgeWrapper">

              {_.map(this.state.toShow, function(item, index){
                return <a key={index} className="badge" href={item.url} target="_blank"><img src={item.icon_url}/><span className="name">{item.name}</span></a>;
              })}
          </div>
          <div className="buttons" >
            <a href="#" className="buttons" onClick={() => this.onMorePress(event)}>+</a>
          </div>
        </div>
      </div>
    )
  }
}
