/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import Assignment from '../Assignment/Assignment';

function AssignmentsList({
  assignments,
  expandedSheet,
  handleAssignment,
  handleRemoveAssignment,
  handleCollapse,
  isDraggable,
  isMobile,
  week,
}) {
  return (
    <>
      {assignments.map((assignment, index) => (
        isDraggable
          ? (
            <Draggable
              key={`assignment-${assignment.id}-draggable`}
              draggableId={`assignment-${assignment.id}`}
              index={index}
            >
              {(provided, snapshot) => (
                <Box
                  sx={{
                    opacity: snapshot.isDragging ? '0.5' : 1,
                  }}
                  ref={provided.innerRef}
                  key={`assignment-${assignment.id}-wrapper`}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <Assignment
                    {...assignment}
                    expandedSheet={expandedSheet}
                    handleAssignment={handleAssignment}
                    handleRemoveAssignment={handleRemoveAssignment}
                    handleCollapse={handleCollapse}
                    index={index}
                    key={`assignment-${assignment.id}`}
                    isDraggable
                    isMobile={false}
                    week={week}
                  />
                </Box>
              )}
            </Draggable>
          )
          : (
            <Assignment
              {...assignment}
              expandedSheet={expandedSheet}
              handleAssignment={handleAssignment}
              handleRemoveAssignment={handleRemoveAssignment}
              handleCollapse={handleCollapse}
              index={index}
              key={`assignment-${assignment.id}`}
              isDraggable={false}
              isMobile={isMobile}
              week={week}
            />
          )
      ))}
    </>
  );
}

AssignmentsList.propTypes = {
  assignments: PropTypes.arrayOf(
    PropTypes.shape({
      absence: PropTypes.shape({
        id: PropTypes.number.isRequired,
        reason: PropTypes.string.isRequired,
      }),
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
  expandedSheet: PropTypes.string.isRequired,
  handleAssignment: PropTypes.func,
  handleCollapse: PropTypes.func.isRequired,
  handleRemoveAssignment: PropTypes.func,
  isDraggable: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

AssignmentsList.defaultProps = {
  handleAssignment: undefined,
  handleRemoveAssignment: undefined,
};

export default React.memo(AssignmentsList);
