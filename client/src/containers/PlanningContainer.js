/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actionGetUserPlanning } from '../actions/user';
import Planning from '../components/Planning/Planning';
import dateFunctions from '../utils/dateFunctions';
import planningFunctions from '../utils/planningFunctions';

function PlanningContainer() {
  let { weekSlug } = useParams();
  if (weekSlug === undefined) {
    weekSlug = planningFunctions.getCurrentWeekSlug();
  }

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const user = planningFunctions.userFromData(userData);
  const [startDate, setStartDate] = React.useState(dateFunctions.getDate().format('YYYY-MM-DD'));
  const [absences, setAbsences] = React.useState(planningFunctions.userPlanningToAbsences(userData, weekSlug));
  const [assignments, setAssignments] = React.useState(planningFunctions.userPlanningToAssignments(userData, weekSlug));

  useEffect(() => {
    dispatch(actionGetUserPlanning());
  }, []);

  useEffect(() => {
    setStartDate(planningFunctions.getDateFromSlug(weekSlug));
    setAbsences(planningFunctions.userPlanningToAbsences(userData, weekSlug));
    setAssignments(planningFunctions.userPlanningToAssignments(userData, weekSlug));
  }, [weekSlug]);

  useEffect(() => {
    setAbsences(planningFunctions.userPlanningToAbsences(userData, weekSlug));
    setAssignments(planningFunctions.userPlanningToAssignments(userData, weekSlug));
  }, [userData]);

  return (
    <Planning
      absences={absences}
      assignments={assignments}
      startDate={startDate}
      user={user}
    />
  );
}

export default React.memo(PlanningContainer);
