/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Box, Button, Dialog, DialogContent, DialogContentText, DialogActions,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Droppable } from 'react-beautiful-dnd';
import SiteHeader from '../SiteHeader/SiteHeader';
import AssignmentsList from '../AssignmentsList/AssignmentsList';
import dateFunctions from '../../utils/dateFunctions';
import planningFunctions from '../../utils/planningFunctions';
import assignmentBg from '../../Assets/images/sheet-bg.png';
import {
  actionDeleteAssignment,
  actionGetAssignmentInformations,
} from '../../actions';

function Site({
  assignments,
  handleAssignment,
  id,
  isAbsence,
  isDropable,
  isMobile,
  name,
  week,
}) {
  const dispatch = useDispatch();
  const theme = useTheme();
  // assignments
  const [draggableAssignments, setDraggableAssignments] = React.useState(assignments);
  // accordion state
  const [expandedSheet, setExpandedSheet] = React.useState('');
  // remove dialog
  const [openRemoveDialog, setOpenRemoveDialog] = React.useState(false);
  // removed assignment
  const [removedAssignmentId, setRemovedAssignmentId] = React.useState(null);

  const handleClose = () => {
    setOpenRemoveDialog(false);
  };

  const handleAgree = () => {
    setOpenRemoveDialog(false);
    dispatch(actionGetAssignmentInformations({ id: removedAssignmentId }));
    dispatch(actionDeleteAssignment());
    setExpandedSheet('');
  };

  const handleRemoveAssignment = (assignmentId) => {
    setOpenRemoveDialog(true);
    setRemovedAssignmentId(assignmentId);
  };

  /**
   * set expanded state
   * @param {string} accordionId accordion id
   * @returns {string|boolean} accordion id or false
   */
  const handleCollapse = (accordionId) => (event, isExpanded) => {
    setExpandedSheet(isExpanded ? accordionId : '');
  };

  /**
   * add site assignment
   * @param {string} accordionId accordion id
   * @returns {void} call setAssignment
   */
  const handleAddAssignment = () => {
    const newAssignement = planningFunctions.createAssignment();
    const starting_date = dateFunctions.getDate(week.dates[0]).format('YYYY-MM-DD');
    const ending_date = dateFunctions.getDate(week.dates[4]).format('YYYY-MM-DD');

    handleAssignment({
      ...newAssignement,
      absence_id: isAbsence ? id : null,
      ending_date,
      position: draggableAssignments.length,
      starting_date,
      site: {
        id,
        name,
      },
    });
  };

  React.useEffect(() => {
    setDraggableAssignments(assignments);
  }, [assignments]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          borderRadius: '.25rem',
          color: theme.palette.text.primary,
          bgcolor: `${theme.palette.background.component}`,
          p: theme.spacing(2),
          width: `calc(300px + ${theme.spacing(4)})`,
          overflow: 'hidden',
          [theme.breakpoints.up('md')]: {
            flex: '0 0 auto',
          },
        }}
        id={`${isAbsence ? 'absence' : 'site'}-${id}`}
      >
        <SiteHeader
          name={name}
          isAbsence={isAbsence}
          handleAddAssignment={handleAddAssignment}
        />
        {isDropable
          ? (
            <Droppable droppableId={`${isAbsence ? 'absence' : 'site'}-${id}`} type="SITE">
              {(provided) => (
                <Box
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  sx={{
                    minHeight: '50px',
                    pb: '50px',
                    flexGrow: '1',
                    background: `url('${assignmentBg}') repeat-y center bottom`,
                  }}
                >
                  {draggableAssignments.length
                    ? (
                      <AssignmentsList
                        assignments={draggableAssignments}
                        expandedSheet={expandedSheet}
                        handleAssignment={handleAssignment}
                        handleRemoveAssignment={handleRemoveAssignment}
                        handleCollapse={handleCollapse}
                        isDraggable
                        isMobile={false}
                        week={week}
                      />
                    )
                    : null}

                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          )
          : (
            <Box
              sx={{
                pb: '50px',
                minHeight: '50px',
                flexGrow: '1',
                background: `url('${assignmentBg}') repeat-y center bottom`,
              }}
            >
              <AssignmentsList
                assignments={draggableAssignments}
                expandedSheet={expandedSheet}
                handleAssignment={handleAssignment}
                handleCollapse={handleCollapse}
                isDraggable={false}
                isMobile={isMobile}
                week={week}
              />
            </Box>
          )}
      </Box>

      <div>
        <Dialog
          open={openRemoveDialog}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {`Supprimer ${isAbsence ? ' cette absence' : 'cet assignement'} ?`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="outlined">Non</Button>
            <Button onClick={handleAgree} variant="contained" autoFocus>
              Oui
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

Site.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  assignments: PropTypes.arrayOf(
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
  handleAssignment: PropTypes.func.isRequired,
  isAbsence: PropTypes.bool.isRequired,
  isDropable: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

export default React.memo(Site);
