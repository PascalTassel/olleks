import React from 'react';
import { useSelector } from 'react-redux';
import SearchAutocomplete from '../components/SearchAutocomplete/SearchAutocomplete';

function SearchAutocompleteContainer() {
  const allEmployees = useSelector((state) => state.allEmployees.employees);
  const allSites = useSelector((state) => state.allSites.sites);
  const allCompanies = useSelector((state) => state.allCompanies.companies);

  return (
    <SearchAutocomplete
      allEmployees={allEmployees}
      allSites={allSites}
      allCompanies={allCompanies}
    />
  );
}

SearchAutocompleteContainer.propTypes = {};
SearchAutocompleteContainer.defaultProps = {};
export default React.memo(SearchAutocompleteContainer);
