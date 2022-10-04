/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
import {
  Autocomplete, TextField, InputLabel, Select, MenuItem, Grid, FormControl,
} from '@mui/material';

import './searchautocomplete.scss';

function SearchAutocomplete({
  allEmployees,
  allSites,
  allCompanies,
}) {
  // const theme = useTheme();
  const [searchIn, setSearchIn] = useState('');
  const [datas, setDatas] = useState([]);
  const [dataIsEmployees, setDataIsEmployees] = useState(false);
  const [autocompleteValue, setAutocompleteValue] = useState(null);

  useEffect(() => {
    if (searchIn === 'employees') {
      setDatas(allEmployees);
      setDataIsEmployees(true);
      setAutocompleteValue(null);
    }
    if (searchIn === 'sites') {
      setDatas(allSites);
      setDataIsEmployees(false);
      setAutocompleteValue(null);
    }
    if (searchIn === 'entreprises') {
      setDatas(allCompanies);
      setDataIsEmployees(false);
      setAutocompleteValue(null);
    }
  }, [searchIn]);

  /**
   * function to change the value of state selectValue with array received in props
   * @param {string} event
   */
  const handleChangeSearchTarget = (event) => {
    setSearchIn(event.target.value);
  };

  return (
    <Grid
      container
      spacing={1}
      mt={1}
    >
      <Grid item xs={12} sm={6}>
        <Autocomplete
          size="small"
          getOptionLabel={(datas) => {
            if (dataIsEmployees) {
              return `${datas.firstname} ${datas.lastname}`;
            }
            return `${datas.name}`;
          }}
          options={datas}
          sx={{ width: '100%' }}
          renderInput={(params) => (
            <TextField {...params} label="Rechercher..." />
          )}
          value={autocompleteValue}
          onChange={(_event, newValue) => {
            setAutocompleteValue(newValue);
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel id="select-search-label" size="small">Dans</InputLabel>
          <Select
            size="small"
            labelId="select-search-label"
            id="select-search"
            label="Dans"
            value={searchIn}
            onChange={handleChangeSearchTarget}
          >
            <MenuItem value="sites">Sites</MenuItem>
            <MenuItem value="entreprises">Entreprises</MenuItem>
            <MenuItem value="employees">Employés</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>

  );
}

SearchAutocomplete.propTypes = {
  allEmployees: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
  allSites: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
  allCompanies: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};
SearchAutocomplete.defaultProps = {
};
export default React.memo(SearchAutocomplete);
