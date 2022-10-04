import React from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  Grid, Button, Typography, Divider, Box, FormControl, InputLabel, Select, MenuItem,
} from '@mui/material';
import TextInput from '../FieldForms/TextInput';

function CreateUserForm({
  handleCreateSite,
  changeField,
  site,
  handleClose,
}) {
  const companies = useSelector((state) => state.allCompanies.companies);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateSite();
    handleClose();
  };

  return (
    <Box
      sx={{ margin: '0 auto', position: 'relative' }}
    >
      <form onSubmit={handleSubmit}>
        <Typography
          variant="h1"
          sx={{ textAlign: 'center' }}
        >
          Ajouter un Site
        </Typography>
        <Divider />
        <Grid container spacing={1} mt={1} sx={{ textAlign: 'center', marginBottom: '15px' }}>
          <Grid item xs={12} md={6}>
            <TextInput
              required
              handleChange={changeField}
              type="text"
              nameValue="name"
              label="Nom du site"
              value={site.name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              required
              handleChange={changeField}
              type="text"
              nameValue="address"
              label="Adresse"
              value={site.address}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              required
              handleChange={changeField}
              type="text"
              nameValue="zip_code"
              label="Code Postal"
              value={site.zip_code}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextInput
              required
              handleChange={changeField}
              type="text"
              nameValue="manager_name"
              label="Nom du Responsable"
              value={site.manager_name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              required
              handleChange={changeField}
              type="text"
              nameValue="estimated_duration"
              label="Durée estimée"
              value={site.estimated_duration}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl required sx={{ minWidth: 120 }}>
              <InputLabel id="entreprise-label">Entreprise</InputLabel>
              <Select
                sx={{ maxWidth: '400px', minWidth: '300px' }}
                labelId="entreprise-label"
                label="Entreprise *"
                value={site.company_id}
                nameValue="company_id"
                onChange={(event) => changeField('company_id', event.target.value)}
              >
                <MenuItem value="">Sélectionnez une entreprise</MenuItem>
                {
                companies.map(({ id, name }) => (
                  <MenuItem value={id} key={id}>{name}</MenuItem>
                ))
              }
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={1} mt={1} sx={{ textAlign: 'center' }}>
          <Grid item xs={12}>
            <Button
              type="submit"
              size="large"
              variant="contained"
            >
              Valider
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

CreateUserForm.propTypes = {
  handleCreateSite: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  site: PropTypes.shape().isRequired,
};

export default React.memo(CreateUserForm);
