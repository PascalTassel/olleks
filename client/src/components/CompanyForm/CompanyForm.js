/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Autocomplete,
  Box, Button,
  Grid,
  TextField, Typography,
} from '@mui/material';

function CompanyForm({
  addType,
  companiesList,
  sitesList,
  handleCancel,
  handleSubmit,
}, ref) {
  const theme = useTheme();
  const isAbsence = companiesList[0].id === 0;
  const title = `Ajouter ${addType === 'company' ? 'une compagnie' : (isAbsence ? 'une absence' : 'un site')}`;
  const [company, setCompany] = React.useState(companiesList[0]);
  const [sitesSelection, setSitesSelection] = React.useState(
    sitesList.filter(({ company: c }) => c.company_id === company.id),
  );
  const [site, setSite] = React.useState(sitesSelection[0]);

  const handleCancelForm = () => {
    handleCancel();
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    handleSubmit({
      id: company.id,
      name: company.name,
      sites: [{
        id: site.id,
        name: site.name,
        assignments: [],
      }],
    });
  };

  React.useEffect(() => {
    setSitesSelection(
      sitesList.filter(({ company: c }) => c.company_id === company.id),
    );
  }, [company]);

  React.useEffect(() => {
    setSite(sitesSelection[0]);
  }, [sitesSelection]);

  return (
    <Box
      component="form"
      ref={ref}
      sx={{
        bgcolor: theme.palette.background.component,
      }}
      onSubmit={handleSubmitForm}
      tabIndex="-1"
    >
      <Box
        sx={{
          padding: theme.spacing(2),
        }}
      >
        <Typography variant="h3" sx={{ textAlign: 'center', mb: theme.spacing(3) }}>
          {title}
        </Typography>

        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12}>
            <Autocomplete
              value={company}
              getOptionLabel={(option) => `${option.name}`}
              onChange={(_event, newValue) => {
                setCompany(newValue);
              }}
              disabled={addType === 'site'}
              options={companiesList}
              sx={{ width: '100%' }}
              renderInput={(params) => (
                <TextField {...params} label="Compagnie" required />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              value={site}
              getOptionLabel={(option) => `${option.name}`}
              onChange={(_event, newValue) => {
                setSite(newValue);
              }}
              options={sitesSelection}
              sx={{ width: '100%' }}
              renderInput={(params) => (
                <TextField {...params} label="Site" required />
              )}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          borderTop: 1,
          borderTopColor: theme.palette.divider,
          textAlign: 'center',
          padding: theme.spacing(2),
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            textAlign: 'right',
            justifyContent: 'flex-end',
          }}
        >
          <Grid item>
            <Button
              variant="outlined"
              onClick={handleCancelForm}
              sx={{
                mr: theme.spacing(1),
              }}
            >
              Annuler
            </Button>
          </Grid>
          {' '}
          <Grid item>
            <Button
              type="submit"
              variant="contained"
            >
              Valider
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default React.memo(React.forwardRef(CompanyForm));
