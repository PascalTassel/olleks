/* eslint-disable camelcase */
import {
  createAssignment, updateAssignment, deleteAssignment,
} from '../requests/assignmentRequest';
import { requestAdminPlanning } from '../requests/adminPlanningRequest';
import { requestAllQualifications } from '../requests/qualificationsRequest';
import { requestAllAbsences } from '../requests/absencesRequest';
import * as actions from '../actions';

const adminPlanningMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.REQUEST_ADMIN_PLANNING: {
      const { admin } = store.getState();
      const { weekSlug } = admin;
      const response = await requestAdminPlanning(weekSlug);

      if (response.status === 200) {
        const { weekStart, absences, planning } = response.data;

        store.dispatch(actions.actionGetAdminPlanning({ weekStart, absences, planning }));
        store.dispatch(actions.actionGetUserPlanning());
        store.dispatch(actions.actionResetAssignmentInformations());
      } else {
        alert(`Error: ${response.status}`);
        return;
      }
      return;
    }
    case actions.REQUEST_ALL_QUALIFICATIONS: {
      const response = await requestAllQualifications();
      if (response.status === 200) {
        store.dispatch(actions.actionGetAllQualifications(response.data));
      } else {
        alert(`Error: ${response.status}`);
        return;
      }
      return;
    }
    case actions.REQUEST_ALL_ABSENCES: {
      const response = await requestAllAbsences();
      if (response.status === 200) {
        store.dispatch(actions.actionGetAllAbsences(response.data));
      } else {
        alert(`Error: ${response.status}`);
        return;
      }
      return;
    }
    case actions.CREATE_ASSIGNMENT: {
      const { assignment } = store.getState();
      const {
        starting_date,
        ending_date,
        color,
        position,
        visibility,
        employee_id,
        site_id,
        absence_id,
      } = assignment;

      const assignmentDatas = {
        starting_date,
        ending_date,
        color,
        position,
        visibility,
        employee_id,
        site_id,
        absence_id,
      };
      const response = await createAssignment(assignmentDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionRequestAdminPlanning());
        console.log('Assignment created successfully');
      } else {
        alert(`Error: ${response.status}`);
        return;
      }
      return;
    }
    case actions.UPDATE_ASSIGNMENT: {
      const { assignment } = store.getState();
      const {
        starting_date,
        ending_date,
        color,
        position,
        visibility,
        employee_id,
        site_id,
        absence_id,
      } = assignment;
      const assignmentDatas = {
        starting_date,
        ending_date,
        color,
        position,
        visibility,
        employee_id,
        site_id,
        absence_id,
      };
      const response = await updateAssignment(assignment.id, assignmentDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionRequestAdminPlanning());
        console.log('Assignment updated successfully');
      } else {
        alert(`Error: ${response.status}`);
        return;
      }
      return;
    }
    case actions.DELETE_ASSIGNMENT: {
      const { assignment } = store.getState();
      const response = await deleteAssignment(assignment.id);
      if (response.status === 200) {
        store.dispatch(actions.actionResetAssignmentInformations());
        store.dispatch(actions.actionRequestAdminPlanning());
        console.log('Assignment deleted successfully');
      } else {
        alert(`Error: ${response.status}`);
        return;
      }
      return;
    }
    default: {
      next(action);
    }
  }
};

export default adminPlanningMiddleware;
