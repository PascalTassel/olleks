/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import Companies from '../Companies/Companies';
import planningFunctions from '../../utils/planningFunctions';

function DraggableAssignments({
  absencesList,
  companies,
  handleAssignment,
  handleSite,
  isPast,
  sitesList,
  week,
}) {
  // save initial companies object
  const [assignmentsPositions, setAssignmentsPositions] = React.useState(companies);

  React.useEffect(() => {
    setAssignmentsPositions(companies);
  }, [companies]);

  /**
   * Open assignment insert / update modal
   */
  const onDragEnd = useCallback((result) => {
    if (result.reason === 'DROP') {
      if (!result.destination) {
        return;
      }
      const refreshList = planningFunctions.setAssignmentPosition(result, assignmentsPositions);
      const assignment = planningFunctions.getDraggedAssignment(result, assignmentsPositions);

      setAssignmentsPositions(refreshList);
      handleAssignment(assignment, result);
    }
  }, [assignmentsPositions]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Companies
        absencesList={absencesList}
        companies={assignmentsPositions}
        handleAssignment={handleAssignment}
        handleSite={handleSite}
        isDropable
        isMobile={false}
        isPast={isPast}
        sitesList={sitesList}
        week={week}
      />
    </DragDropContext>
  );
}

DraggableAssignments.propTypes = {
  absencesList: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      sites: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  handleAssignment: PropTypes.func.isRequired,
  handleSite: PropTypes.func.isRequired,
  isPast: PropTypes.bool.isRequired,
  sitesList: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

export default React.memo(DraggableAssignments);
