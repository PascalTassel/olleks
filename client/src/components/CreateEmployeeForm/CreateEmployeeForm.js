/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  Grid, Button, Typography, Divider, Box, Select, MenuItem, InputLabel, FormControl, TextField,
} from '@mui/material';
import RoleFieldForm from '../FieldForms/RoleFieldForm';
import TextInput from '../FieldForms/TextInput';

function CreateUserForm({
  handleCreateEmployee,
  changeField,
  changeFile,
  employee,
  getAllQualification,
}) {
  useEffect(() => {
    getAllQualification();
  }, []);

  const qualifications = useSelector((state) => state.admin.allQualifications);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateEmployee();
  };

  return (
    <Box
      sx={{ margin: '0 auto', position: 'relative' }}
    >
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Typography
          variant="h1"
          sx={{ textAlign: 'center' }}
        >
          Ajouter un employé
        </Typography>
        <Typography variant="h2">
          Informations personnelles
        </Typography>
        <Divider />
        <Grid container spacing={1} mt={1} sx={{ textAlign: 'center', marginBottom: '15px' }}>
          <Grid item xs={12} md={6}>
            <TextInput
              autoComplete="off"
              required
              handleChange={changeField}
              type="text"
              nameValue="firstname"
              label="Prénom"
              value={employee.firstname}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              autoComplete="off"
              required
              handleChange={changeField}
              type="text"
              nameValue="lastname"
              label="Nom"
              value={employee.lastname}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              autoComplete="off"
              required
              handleChange={changeField}
              type="email"
              nameValue="email"
              label="E-mail"
              value={employee.email}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              autoComplete="off"
              required
              handleChange={changeField}
              type="password"
              nameValue="password"
              label="Mot de passe"
              value={employee.password}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              autoComplete="off"
              required
              handleChange={changeField}
              type="text"
              nameValue="date_of_birth"
              placeholder="yyyy-mm-dd"
              label="Date de naissance"
              value={employee.date_of_birth}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              autoComplete="off"
              handleChange={changeField}
              type="text"
              nameValue="phone_number"
              label="Téléphone Fixe"
              default="0"
              value={employee.phone_number}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              autoComplete="off"
              required
              handleChange={changeField}
              type="text"
              nameValue="mobile_number"
              label="Téléphone Portable"
              value={employee.mobile_number}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              autoComplete="off"
              required
              handleChange={changeField}
              type="text"
              nameValue="address"
              label="Adresse"
              value={employee.address}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              autoComplete="off"
              required
              handleChange={changeField}
              type="number"
              nameValue="zip_code"
              label="Code Postal"
              value={employee.zip_code}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              autoComplete="off"
              required
              handleChange={changeField}
              type="text"
              nameValue="social_security_number"
              label="Numéro Sécurité Sociale"
              value={employee.social_security_number}
            />
          </Grid>
        </Grid>

        <Typography variant="h2">
          Informations relatives à l'entreprise
        </Typography>

        <Divider />

        <Grid container spacing={1} mt={1} sx={{ textAlign: 'center' }}>
          <Grid item xs={12} md={6}>
            <RoleFieldForm
              handleChange={changeField}
              value={employee.role_application}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} mt={1} sx={{ textAlign: 'center' }}>
          <Grid item xs={12} md={6}>
            <TextInput
              autoComplete="off"
              required
              handleChange={changeField}
              type="text"
              nameValue="starting_date"
              placeholder="yyyy-mm-dd"
              label="Date d'entrée"
              value={employee.starting_date}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              autoComplete="off"
              handleChange={changeField}
              type="text"
              nameValue="fonction"
              label="Fonction"
              value={employee.fonction}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              type="file"
              label="Avatar"
              onChange={(event) => {
                const file = event.target.files[0];
                const data = new FormData();
                data.append('file', file);
                changeFile(data);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl required sx={{ minWidth: 120 }}>
              <InputLabel id="label">Label</InputLabel>
              <Select
                sx={{ maxWidth: '400px', minWidth: '300px' }}
                labelId="label"
                label="label *"
                value={employee.qualification_label}
                nameValue="qualification_label"
                onChange={(event) => changeField('qualification_label', event.target.value)}
              >
                <MenuItem value="">Sélectionnez un label</MenuItem>
                {
                qualifications.map(({ id, label }) => (
                  <MenuItem value={label} key={id}>{label}</MenuItem>
                ))
              }
              </Select>
            </FormControl>
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
        </Grid>
      </form>
    </Box>
  );
}

CreateUserForm.propTypes = {
  handleCreateEmployee: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  changeFile: PropTypes.func.isRequired,
  getAllQualification: PropTypes.func.isRequired,
  employee: PropTypes.shape().isRequired,
};

export default React.memo(CreateUserForm);
