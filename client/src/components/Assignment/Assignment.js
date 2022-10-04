/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PropTypes from 'prop-types';
import dateFunctions from '../../utils/dateFunctions';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: 'none',
  color: theme.palette.sheet.main,
}));

function Assignment({
  absence,
  color,
  employee,
  ending_date,
  expandedSheet,
  handleAssignment,
  handleRemoveAssignment,
  handleCollapse,
  isDraggable,
  id,
  index,
  starting_date,
  userId,
  week,
}) {
  const theme = useTheme();
  const firstDayofWeek = dateFunctions.getDate(week.dates[0]).format('YYYY-MM-DD');
  const lastDayofWeek = dateFunctions.getDate(week.dates[4]).format('YYYY-MM-DD');
  const startOnMonday = dateFunctions.getDate(starting_date).format('YYYY-MM-DD') === firstDayofWeek;
  const finishOnFriday = dateFunctions.getDate(ending_date).format('YYYY-MM-DD') === lastDayofWeek;

  return (
    <Accordion
      expanded={expandedSheet === `panel${index}`}
      onChange={handleCollapse(`panel${index}`)}
      id={`assignment-${id}`}
      disabled={userId === employee.id}
      sx={{
        background: color,
        '&.Mui-disabled': {
          background: color,
          color: theme.palette.sheet.main,
        },
        clipPath: 'path(\'M0,0v48.1h13l0,0c0.2,0,0.3,0,0.5,0C22.1,48.1,29,55,29,63.6c0,0.2,0,0.3,0,0.5l0,0l-1,347.8c0,0,0,0,0,0.1c0,0,0,0,0,0.1l0,0.9l0.1,0c0.5,7.2,6.6,13,13.9,13h216c7.4,0,13.4-5.7,13.9-13l0.1,0l0-0.9c0,0,0,0,0-0.1c0,0,0,0,0-0.1l-1-347.8l0,0c0-0.2,0-0.3,0-0.5c0-8.6,6.9-15.5,15.5-15.5c0.2,0,0.3,0,0.5,0l0,0h13V0H0z\')',
      }}
    >
      <AccordionSummary
        aria-controls={`panel${index}-content`}
        sx={{
          height: 52,
          alignItems: 'center',
          '&.Mui-disabled': {
            opacity: '1',
          },
        }}
      >
        <Typography
          component="span"
          sx={{
            fontFamily: 'Sriracha',
            fontSize: '1rem',
            color: theme.palette.sheet.main,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {`${employee.firstname} ${employee.lastname}`}
        </Typography>

        {((!startOnMonday || !finishOnFriday) || (absence !== undefined))
          && (
          <Typography
            component="small"
            sx={{
              ml: 'auto',
              fontSize: '.75rem',
              lineHeight: '1.5rem',
            }}
          >
            {`${dateFunctions.getDate(starting_date).format('DD-MM')} 
            au ${dateFunctions.getDate(ending_date).format('DD-MM')}`}
          </Typography>
          )}

        {isDraggable
          ? (
            <DragIndicatorIcon
              fontSize="small"
              color="sheet"
              sx={{
                ml: (!startOnMonday || !finishOnFriday) ? undefined : 'auto',
                opacity: '.3',
                '&:hover, &:focus': {
                  opacity: '1',
                },
              }}
            />
          )
          : (handleAssignment
              && (
                <IconButton
                  color="primary"
                  onClick={(e) => { e.stopPropagation(); handleAssignment(); }}
                  sx={{ display: 'none' }}
                >
                  <PersonAddAlt1Icon />
                </IconButton>
              ))}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: '0 40px 10px',
        }}
      >
        <Grid container spacing={1} mt={1}>
          <Grid item xs="auto" sx={{ display: 'none' }}>
            <Avatar alt={`${employee.firstname} ${employee.lastname}`} src="/static/images/avatar/1.jpg" />
          </Grid>
          <Grid item xs={12}>
            <Typography
              component="ul"
              sx={{
                listStyle: 'none',
                pl: 0,
                fontSize: '.9em',
              }}
            >
              {absence !== undefined
              && (
              <Typography component="li" sx={{ fontSize: '.8em' }}>
                <Typography sx={{ display: 'block', fontSize: '1.3em' }}><strong>Raison :</strong></Typography>
                <Box
                  component="span"
                  sx={{
                    fontSize: '1.2em', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}
                >
                  {absence.reason}
                </Box>
              </Typography>
              )}
              {employee.visibility !== undefined
              && (
              <Typography component="li" sx={{ fontSize: '.8em' }}>
                <Typography sx={{ display: 'block', fontSize: '1.3em' }}><strong>Visibilité :</strong></Typography>
                <Box
                  component="span"
                  sx={{
                    fontSize: '1.2em', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}
                >
                  {`${employee.visibility ? 'oui' : 'non'}`}
                </Box>
              </Typography>
              )}
              {employee.mobile_number !== undefined
              && (
              <Typography component="li" sx={{ fontSize: '.8em' }}>
                <Typography sx={{ display: 'block', fontSize: '1.3em' }}><strong>Tél. portable :</strong></Typography>
                <Box
                  component="span"
                  sx={{
                    fontSize: '1.2em', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}
                >
                  {employee.mobile_number}
                </Box>
              </Typography>
              )}
              {employee.phone_number !== undefined
              && (
              <Typography component="li" sx={{ fontSize: '.8em' }}>
                <Typography sx={{ display: 'block', fontSize: '1.3em' }}><strong>Tél. Fixe :</strong></Typography>
                <Box
                  component="span"
                  sx={{
                    fontSize: '1.2em', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}
                >
                  {employee.phone_number}
                </Box>
              </Typography>
              )}
              {employee.fonction !== undefined
              && (
              <Typography component="li" sx={{ fontSize: '.8em' }}>
                <Typography sx={{ display: 'block', fontSize: '1.3em' }}><strong>Fonction :</strong></Typography>
                <Box
                  component="span"
                  sx={{
                    fontSize: '1.2em', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}
                >
                  {employee.fonction}
                </Box>
              </Typography>
              )}
              {employee.email !== undefined
              && (
              <Typography component="li" sx={{ fontSize: '.8em' }}>
                <Typography sx={{ display: 'block', fontSize: '1.3em' }}><strong>Courriel :</strong></Typography>
                <Box
                  component="span"
                  sx={{
                    fontSize: '1.2em', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}
                >
                  {employee.email}
                </Box>
              </Typography>
              )}
            </Typography>
          </Grid>

          {handleRemoveAssignment
            && (
            <Grid item xs={12} sx={{ display: 'flex' }}>
              <Button
                sx={{
                  mt: theme.spacing(1),
                  mx: 'auto',
                }}
                variant="outlined"
                color="inherit"
                size="small"
                startIcon={<DeleteIcon />}
                onClick={() => {
                  handleRemoveAssignment(id);
                }}
              >
                Supprimer
              </Button>
            </Grid>
            )}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

Assignment.propTypes = {
  absence: PropTypes.shape({
    id: PropTypes.number.isRequired,
    reason: PropTypes.string.isRequired,
  }),
  color: PropTypes.string.isRequired,
  employee: PropTypes.shape({
    email: PropTypes.string,
    firstname: PropTypes.string.isRequired,
    fonction: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    lastname: PropTypes.string.isRequired,
    phone_number: PropTypes.string,
    mobile_number: PropTypes.string,
    visibility: PropTypes.bool,
  }).isRequired,
  ending_date: PropTypes.string.isRequired,
  expandedSheet: PropTypes.string.isRequired,
  handleAssignment: PropTypes.func,
  handleRemoveAssignment: PropTypes.func,
  handleCollapse: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  isDraggable: PropTypes.bool.isRequired,
  starting_date: PropTypes.string.isRequired,
  userId: PropTypes.number,
  visibility: PropTypes.bool.isRequired,
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

Assignment.defaultProps = {
  absence: undefined,
  handleAssignment: undefined,
  handleRemoveAssignment: undefined,
  userId: undefined,
};
export default React.memo(Assignment);
