/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Autocomplete,
  Box, Button,
  Checkbox,
  FormGroup,
  FormControlLabel, Grid, MenuItem,
  FormControl,
  InputLabel,
  Select,
  TextField, Typography,
} from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import frLocale from 'date-fns/locale/fr';
import dateFunctions from '../../utils/dateFunctions';

function AssignmentForm({
  assignment,
  employeesList,
  handleCancel,
  handleSubmit,
  weekMonday,
}, ref) {
  console.log(weekMonday, assignment);
  const theme = useTheme();
  const method = assignment.id ? 'PATCH' : 'POST';
  const { absence_id, employee_id, site } = assignment;

  // set colors list
  const colorsList = [
    ['#f44336', 'Rouge'],
    ['#e91e63', 'Rose'],
    ['#9c27b0', 'Violette'],
    ['#2196f3', 'Bleue'],
    ['#00bcd4', 'Cyan'],
    ['#009688', 'Turquoise'],
    ['#4caf50', 'Verte'],
    ['#cddc39', 'Verte claire'],
    ['#ffeb3b', 'Jaune'],
    ['#ff9800', 'Orange'],
  ];
  // add assignment color in colors list if not includes
  if (assignment.color) {
    const isFinded = colorsList.filter(([code]) => code === assignment.color);
    if (isFinded.length === 0) {
      colorsList.push([assignment.color, 'personnalisée']);
    }
  }

  const [employee, setEmployee] = React.useState(
    employee_id === null
      ? employeesList[0]
      : employeesList.filter((item) => item.id === employee_id)[0],
  );
  const [startingDate, setStartingDate] = React.useState(
    new Date(assignment.starting_date),
  );
  const [endingDate, setEndingDate] = React.useState(
    new Date(assignment.ending_date),
  );
  const [minDate, setMinDate] = React.useState(
    new Date(dateFunctions.getDate(weekMonday.toString()).add(1, 'day').format('YYYY-MM-DD')),
  );
  const [color, setColor] = React.useState(assignment.color || colorsList[0][0]);
  const [visibility, setVisibility] = React.useState(true);

  React.useEffect(() => {
    const endTo = dateFunctions.getDate(startingDate.toString()).add(1, 'day').format('YYYY-MM-DD');
    setEndingDate(new Date(endTo));
    setMinDate(new Date(endTo));
  }, [startingDate]);

  const handleCancelForm = () => {
    handleCancel();
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const data = {
      ...assignment,
      absence_id,
      site_id: absence_id === null ? assignment.site.id : null,
      color,
      method,
      visibility,
      starting_date: startingDate,
      ending_date: endingDate,
      employee_id: employee.id,
    };

    handleSubmit(data);
  };

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
          {`${site.name}`}
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12}>
              <Autocomplete
                value={employee}
                getOptionLabel={(option) => `${option.firstname} ${option.lastname}`}
                onChange={(_event, newValue) => {
                  setEmployee(newValue);
                }}
                disabled={employee_id !== null}
                options={employeesList}
                sx={{ width: '100%' }}
                renderInput={(params) => (
                  <TextField {...params} label="Employé" required />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <DesktopDatePicker
                label="Du"
                mask="__.__.____"
                value={startingDate}
                minDate={startingDate}
                onChange={(newValue) => setStartingDate(newValue)}
                renderInput={(params) => <TextField {...params} inputFormat="DD.MM.YYYY" />}
              />
            </Grid>
            <Grid item xs={6}>
              <DesktopDatePicker
                label="Au"
                mask="__.__.____"
                value={endingDate}
                minDate={minDate}
                onChange={(newValue) => setEndingDate(newValue)}
                renderInput={(params) => <TextField {...params} inputFormat="DD.MM.YYYY" />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel id="color-label">Couleur de la fiche</InputLabel>
                <Select
                  labelId="color-label"
                  id="field-color"
                  value={color}
                  label="Couleur de la fiche"
                  fullWidth
                  onChange={(_event, newValue) => {
                    setColor(newValue.props.value);
                  }}
                >
                  {colorsList.map((c) => (
                    <MenuItem
                      key={c[0]}
                      value={c[0]}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <SquareIcon
                        sx={{
                          color: c[0],
                          mr: theme.spacing(1),
                          verticalAlign: 'top',
                        }}
                      />
                      {c[1]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormGroup>
                <FormControlLabel
                  control={(
                    <Checkbox
                      checked={visibility}
                      onChange={() => setVisibility((prevVisibility) => !prevVisibility)}
                    />
                )}
                  label="Visible par l'employé"
                />
              </FormGroup>
            </Grid>
          </Grid>
        </LocalizationProvider>
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

export default React.memo(React.forwardRef(AssignmentForm));
