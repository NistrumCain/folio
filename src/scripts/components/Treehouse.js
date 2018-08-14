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
          page: 1,
          badges: {},
          badgeArray: {},
          loading: true,
        };
  }

  axiosUpdate() {
    let badgeArray = [...this.state.badges];
    console.log(badgeArray);

    var page = this.state.page,
        recPerPage = 16,
        //calculate the badges per page
        startRec = Math.max(this.state.page - 1, 0) * 16,
        endRec = startRec + recPerPage,
        toShow = badgeArray.splice(startRec, recPerPage);
        this.setState({toShow});
        if(endRec > this.state.badges.length) {this.setState({page: 1})}
        console.log(this.state.badges);
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
            recPerPage = 16,
            //calculate the badges per page
            startRec = Math.max(this.state.page - 1, 0) * 16,
            endRec = startRec + recPerPage,
            toShow = badgeArray.splice(startRec, recPerPage);
            this.setState({toShow});
      })
  };


    onMorePress() {
      console.log(this.state);
      this.setState({page: this.state.page+1});
      this.axiosUpdate();
    };

  render() {
    console.log(this.state);
    return (
      <div className="wrapper">
        <div className="profile"><img className="avatar" src={this.state.profile.gravatar_url} /><a href={this.state.profile.profile_url} target="_blank"><h2>{this.state.profile.name}</h2></a></div>
        <a href="#" id="more" onClick={() => this.onMorePress()}>MORE</a>
        <div className="badgeWrapper">
          {_.map(this.state.toShow, function(item, index){
            return <a key={index} className="badge" href={item.url} target="_blank"><img src={item.icon_url}/><span className="name">{item.name}</span></a>;
          })};
        </div>
      </div>
    )
  }
}