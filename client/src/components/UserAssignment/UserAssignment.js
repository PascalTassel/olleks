/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import dateFunctions from '../../utils/dateFunctions';
import './sheet_user.scss';

function UserAssignment({
  ending_date,
  starting_date,
  user,
  week,
}) {
  const theme = useTheme();
  const firstDayofWeek = dateFunctions.getDate(week.dates[0]).format('YYYY-MM-DD');
  const lastDayofWeek = dateFunctions.getDate(week.dates[4]).format('YYYY-MM-DD');
  const startOnMonday = dateFunctions.getDate(starting_date).format('YYYY-MM-DD') === firstDayofWeek;
  const finishOnFriday = dateFunctions.getDate(ending_date).format('YYYY-MM-DD') === lastDayofWeek;
  const color = '#ed6c02';
  const { firstname, lastname } = user;

  return (
    <Box
      sx={{
        display: 'flex',
        px: theme.spacing(2),
        height: 50,
        alignItems: 'center',
        borderTop: '1px solid rgb(0 0 0 / 10%)',
        background: color,
        color: theme.palette.sheet.main,
        clipPath: 'path(\'M0,0v48.1h13l0,0c0.2,0,0.3,0,0.5,0C22.1,48.1,29,55,29,63.6c0,0.2,0,0.3,0,0.5l0,0l-1,347.8c0,0,0,0,0,0.1c0,0,0,0,0,0.1l0,0.9l0.1,0c0.5,7.2,6.6,13,13.9,13h216c7.4,0,13.4-5.7,13.9-13l0.1,0l0-0.9c0,0,0,0,0-0.1c0,0,0,0,0-0.1l-1-347.8l0,0c0-0.2,0-0.3,0-0.5c0-8.6,6.9-15.5,15.5-15.5c0.2,0,0.3,0,0.5,0l0,0h13V0H0z\')',
      }}
    >
      <Typography
        component="span"
        sx={{
          fontFamily: 'Sriracha',
          fontSize: '1rem',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {`${firstname} ${lastname}`}
      </Typography>

      {(!startOnMonday || !finishOnFriday)
        && (
        <Typography
          component="small"
          sx={{
            ml: 'auto',
            display: 'inline-block',
            fontSize: '.75rem',
            lineHeight: '1.5rem',
          }}
        >
          {`${dateFunctions.getDate(starting_date).format('DD-MM')} 
          au ${dateFunctions.getDate(ending_date).format('DD-MM')}`}
        </Typography>
        )}
    </Box>
  );
}

UserAssignment.propTypes = {
  ending_date: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  starting_date: PropTypes.string.isRequired,
  user: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
  }).isRequired,
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

export default React.memo(UserAssignment);
