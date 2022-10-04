/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Droppable } from 'react-beautiful-dnd';
import SiteHeader from '../SiteHeader/SiteHeader';
import AssignmentsList from '../AssignmentsList/AssignmentsList';
import assignmentBg from '../../Assets/images/sheet-bg.png';

function SiteAbsences({
  absences,
  handleAbsence,
  isDropable,
  isMobile,
  week,
}) {
  const theme = useTheme();
  const id = 'absences';

  // accordion state
  const [expandedSheet, setExpandedSheet] = React.useState('');

  /**
   * set expanded state
   * @param {string} accordionId accordion id
   * @returns {string|boolean} accordion id or false
   */
  const handleCollapse = (accordionId) => (event, isExpanded) => {
    setExpandedSheet(isExpanded ? accordionId : '');
  };

  const handleAddAbsence = () => () => {
    console.log('add absence');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        borderRadius: '.25rem',
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.divider}`,
        background: theme.palette.background.component,
        p: theme.spacing(2),
        width: `calc(300px + ${theme.spacing(4)})`,
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
          flex: '0 0 auto',
        },
        [theme.breakpoints.down('md')]: {
          mx: 'auto',
          mb: theme.spacing(2),
        },
      }}
      id={`site-${id}`}
    >
      <SiteHeader
        name="Absences"
        handleAddAssignment={handleAddAbsence}
      />
      {absences.length
      && isDropable
        ? (
          <Droppable droppableId={`site-${id}`} type="SITE">
            {(provided) => (
              <Box
                ref={provided.innerRef}
                {...provided.droppableProps}
                sx={{
                  pb: '50px',
                  flexGrow: '1',
                  background: `url('${assignmentBg}') repeat-y center bottom`,
                }}
              >
                <AssignmentsList
                  assignments={absences}
                  expandedSheet={expandedSheet}
                  handleAssignment={handleAbsence}
                  handleCollapse={handleCollapse}
                  isDraggable
                  isMobile={false}
                  week={week}
                />

                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        )
        : (
          <Box
            sx={{
              pb: '50px',
              flexGrow: '1',
              background: `url('${assignmentBg}') repeat-y center bottom`,
            }}
          >
            <AssignmentsList
              assignments={absences}
              expandedSheet={expandedSheet}
              handleAssignment={handleAbsence}
              handleCollapse={handleCollapse}
              isDraggable={false}
              isMobile={isMobile}
              week={week}
            />
          </Box>
        )}
    </Box>
  );
}

SiteAbsences.propTypes = {
  absences: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      employee: PropTypes.shape({
        firstname: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        lastname: PropTypes.string.isRequired,
      }).isRequired,
      ending_date: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      position: PropTypes.number.isRequired,
      starting_date: PropTypes.string.isRequired,
      visibility: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  handleAbsence: PropTypes.func.isRequired,
  isDropable: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

export default React.memo(SiteAbsences);
