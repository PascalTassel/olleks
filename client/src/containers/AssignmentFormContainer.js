/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import AssignmentForm from '../components/AssignmentForm/AssignmentForm';
import {
  actionCreateAssignment,
  actionSetAssignmentInformation,
  actionGetAssignmentInformations,
  actionUpdateAssignment,
} from '../actions';
import planningFunctions from '../utils/planningFunctions';

function AssignmentFormContainer({
  assignment,
  employeesList,
  handleCancel,
  handleSubmit,
  startDate,
}, ref) {
  const dispatch = useDispatch();

  const handleSubmitAssignment = (formData) => {
    const { method } = formData;

    const {
      absence_id,
      id,
      color,
      employee_id,
      ending_date,
      position,
      site_id,
      starting_date,
      visibility,
    } = formData;

    const assignmentData = {
      absence_id,
      id,
      color,
      employee_id,
      ending_date,
      position,
      site_id,
      starting_date,
      visibility,
      weekSlug: planningFunctions.getWeekSlugFromDate(starting_date),
    };
    console.log('assignmentData', assignmentData);
    switch (method) {
      case 'POST':
        dispatch(actionGetAssignmentInformations(assignmentData));
        dispatch(actionCreateAssignment());
        break;
      case 'PATCH':
        dispatch(actionGetAssignmentInformations(assignmentData));
        dispatch(actionSetAssignmentInformation(assignmentData));
        dispatch(actionUpdateAssignment());
        break;
      default:
        break;
    }

    handleSubmit();
  };

  return (
    <AssignmentForm
      ref={ref}
      assignment={assignment}
      employeesList={employeesList}
      handleCancel={handleCancel}
      handleSubmit={handleSubmitAssignment}
      weekMonday={startDate}
    />
  );
}

export default React.memo(React.forwardRef(AssignmentFormContainer));
