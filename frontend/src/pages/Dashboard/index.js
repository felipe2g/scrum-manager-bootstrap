import React from 'react';

import HomeCard from '../../components/HomeCard';

import releaseLogo from '../../static/releaseLogo.svg';
import backlogLogo from '../../static/backlogLogo.svg';
import sprintsLogo from '../../static/sprintsLogo.svg';

const Dashboard = () => {
  const homeCardReleases = {
    title: 'Releases',
    text: 'Manage Release',
    icon: releaseLogo,
    link: 'releases'
  }

  const homeCardBacklog = {
    title: 'Backlog',
    text: 'Manage Release',
    icon: backlogLogo,
    link: 'backlog'
  }

  const homeCardSprints = {
    title: 'Sprints',
    text: 'Manage Sprint',
    icon: sprintsLogo,
    link: 'sprints'
  }

    return (
      <>
        <div className="card-group text-center container">
          <HomeCard {...homeCardReleases} />
          <HomeCard {...homeCardBacklog} />
          <HomeCard {...homeCardSprints} />
        </div>
      </>
    );
}

export default Dashboard;