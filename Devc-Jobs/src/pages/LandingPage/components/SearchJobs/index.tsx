import React, { useState } from 'react';
import { SearchInput } from '../../../components';

const SearchJobs: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<string>();
  return (
    <section className="search-jobs-section position-relative padding-md padding-vertical-lg bg-gray-light d-flex column flex-center full-width">
      <div className="rectangle" />
      <div className="rectangle" />
      <div className="rectangle" />
      <div className="rectangle" />
      <h2 className="capitalize text-center color-gray-darker font-weight-300 margin-bottom-lg">
        Search for jobs and gigs
      </h2>
      <div className="d-flex column flex-center search-container full-width">
        <SearchInput
          placeholder="Search for jobs with keywords"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          containerClassName="border-color-primary"
        />
      </div>
    </section>
  );
};

export default SearchJobs;
