import React, { Component } from 'react';

import NavBar from '../../components/NavBar';
import HomeCard from '../../components/HomeCard';

import releaseLogo from '../../static/releaseLogo.svg';
import backlogLogo from '../../static/backlogLogo.svg';
import sprintsLogo from '../../static/sprintsLogo.svg';

export default class Home extends Component {

  homeCardReleases = {
    title: 'Releases',
    text: 'Manage Release',
    icon: releaseLogo,
    action: () => alert('Releases Clicked')
  }

  homeCardBacklog = {
    title: 'Backlog',
    text: 'Manage Release',
    icon: backlogLogo,
    action: () => alert('Backlog Clicked')
  }

  homeCardSprints = {
    title: 'Sprints',
    text: 'Manage Sprint',
    icon: sprintsLogo,
    action: () => alert('Sprints Clicked')
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="card-group text-center container">
          <HomeCard {...this.homeCardReleases} />
          <HomeCard {...this.homeCardBacklog} />
          <HomeCard {...this.homeCardSprints} />
        </div>
      </>
    );
  }
}