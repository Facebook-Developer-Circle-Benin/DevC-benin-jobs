import React from 'react';
import backendSvg from '../../assets/backend-logo.svg';
import ui_ux_svg from '../../assets/ui-ux-logo.svg';
import operationsSvg from '../../assets/operations-logo.svg';
import frontendSvg from '../../assets/frontend-developers-logo.svg';
import mobileSvg from '../../assets/mobile-developers-logo.svg';
import productSvg from '../../assets/product-managers-logo.svg';
interface JobCardProps {
  title: string;
  desc: string;
  svg: string;
}
const JobRoles: React.FC = (): JSX.Element => {
  return (
    <section className="padding-md bg-white">
      <div className="d-flex column flex-center margin-bottom-md">
        <h2 className="font-md font-weight-400 margin-bottom-sm">
          Hire the Best Talents
        </h2>
        <p className="text-content">
          Suscipit libero pretium nullam potenti. Interdum, blandit phasellus
          consectetuer dolor ornare dapibus enim
        </p>
      </div>
      <section className="d-flex justify-content-center">
        <JobCard
          svg={ui_ux_svg}
          title="UI/UI developers"
          desc="Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim"
        />
        <JobCard
          svg={operationsSvg}
          title="operations"
          desc="Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim"
        />
        <JobCard
          svg={mobileSvg}
          title="mobile developers"
          desc="Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim"
        />
        <JobCard
          svg={frontendSvg}
          title="frontend developers"
          desc="Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim"
        />
        <JobCard
          svg={backendSvg}
          title="backend developers"
          desc="Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim"
        />
        <JobCard
          svg={productSvg}
          title="product managers"
          desc="Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim"
        />
      </section>
    </section>
  );
};

const JobCard: React.FC<JobCardProps> = ({ desc, title, svg }): JSX.Element => {
  return (
    <div className="d-flex column flex-center padding-md bg-gray-light job-card">
      <div className="margin-vertical-sm job-svg">
        <img src={svg} alt="job-svg" />
      </div>
      <h3 className="font-sm color-primary-dark capitalize margin-bottom-sm">
        {title}
      </h3>
      <p className="font-xs text-center text-content">{desc}</p>
    </div>
  );
};
export default JobRoles;
