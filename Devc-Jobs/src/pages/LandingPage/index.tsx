import React from 'react';
import { Header, SearchJobs, JobRoles, GetStarted, Footer } from './components';
import './landingpage.scss';
const LandingPage: React.FC = (): JSX.Element => {
  return (
    <main>
      <Header />
      <section className="d-flex column flex-center">
        <SearchJobs />
        <JobRoles />
        <GetStarted />
      </section>
      <Footer />
    </main>
  );
};

export default LandingPage;
