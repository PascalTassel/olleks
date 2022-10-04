/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchContainer from '../SearchContainer/SearchContainer';
import SiteUser from '../SiteUser/SiteUser';
import dateFunctions from '../../utils/dateFunctions';
import './planning.scss';

function Planning({
  absences,
  assignments,
  startDate,
  user,
}) {
  const theme = useTheme();
  const { id: userId } = user;
  const week = dateFunctions.getWeek(startDate);
  const { current: currentWeek } = week;

  return (
    <>
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        {'Planning d\'intervention'}
      </Typography>

      <SearchContainer isAdmin={false} userId={userId} date={startDate} />

      {absences.map((absence) => (
        <Alert
          severity="success"
          key={absence.id}
          sx={{
            mb: theme.spacing(2),
            maxWidth: '30rem',
            mx: 'auto',
          }}
        >
          {`Absence du ${dateFunctions.getDate(absence.starting_date).format('DD MMM YYYY')} 
          au ${dateFunctions.getDate(absence.ending_date).format('DD MMM YYYY')} : 
          ${absence.reason}`}
        </Alert>
      ))}

      {assignments.length
        ? (
          <Box
            sx={{
              display: 'flex',
              gap: theme.spacing(2),
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {assignments.map((assignment) => (
              <SiteUser user={user} key={assignment.id} week={currentWeek} {...assignment} />
            ))}
          </Box>
        )
        : (
          <Alert
            severity="info"
            sx={{
              mt: theme.spacing(2),
              mx: 'auto',
              maxWidth: '30rem',
            }}
          >
            {`Aucune intervention prévue en semaine ${currentWeek.num}.`}
          </Alert>
        )}
    </>
  );
}

Planning.propTypes = {
  absences: PropTypes.arrayOf(
    PropTypes.shape({
      ending_date: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      reason: PropTypes.string.isRequired,
      starting_date: PropTypes.string.isRequired,
    }),
  ).isRequired,
  assignments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  startDate: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
};

export default React.memo(Planning);
