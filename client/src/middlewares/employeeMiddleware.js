/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
import {
  getAllEmployees, createEmployee, updateEmployee, deleteEmployee, createEmployeeAvatar,
} from '../requests/employeeRequest';
import * as actions from '../actions';

const employeeMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.REQUEST_ALL_EMPLOYEES: {
      const response = await getAllEmployees();
      if (response.status === 200) {
        store.dispatch(actions.actionGetAllEmployees(response.data));
      } else {
        alert(`Error: ${response.status}`);
        return;
      }
      return;
    }
    case actions.CREATE_EMPLOYEE_AVATAR: {
      const { employee } = store.getState();
      const {
        lastname,
        social_security_number,
        file,
      } = employee;
      const employeeAvatar = {
        lastname,
        social_security_number,
        file,
      };
      const response = await createEmployeeAvatar(employeeAvatar);
      if (response.status === 200) {
        store.dispatch(actions.actionGetEmployeeAvatar(response.data.imagePath));
        store.dispatch(actions.actionCreateEmployee());
      } else {
        alert(`Error: ${response.status}`);
        return;
      }
      return;
    }
    case actions.CREATE_EMPLOYEE: {
      const { employee } = store.getState();
      const {
        firstname,
        lastname,
        email,
        password,
        phone_number,
        mobile_number,
        address,
        zip_code,
        social_security_number,
        date_of_birth,
        starting_date,
        avatar,
        fonction,
        role_application,
        qualification_label,
      } = employee;
      const employeeDatas = {
        firstname,
        lastname,
        email,
        password,
        phone_number,
        mobile_number,
        address,
        zip_code,
        social_security_number,
        date_of_birth,
        starting_date,
        avatar,
        fonction,
        role_application,
        qualification_label,
      };
      const response = await createEmployee(employeeDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionResetEmployeeInformations());
        store.dispatch(actions.actionRequestAllEmployees());
        console.log('Employee created successfully');
      } else {
        alert(`Error: ${response.status}`);
        return;
      }
      return;
    }
    case actions.UPDATE_EMPLOYEE: {
      const { employee } = store.getState();
      const {
        firstname,
        lastname,
        email,
        phone_number,
        mobile_number,
        address,
        zip_code,
        social_security_number,
        date_of_birth,
        starting_date,
        avatar,
        fonction,
        role_application,
        qualification_label,
      } = employee;
      const employeeDatas = {
        firstname,
        lastname,
        email,
        phone_number,
        mobile_number,
        address,
        zip_code,
        social_security_number,
        date_of_birth,
        starting_date,
        avatar,
        fonction,
        role_application,
        qualification_label,
      };
      const response = await updateEmployee(employee.id, employeeDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionResetEmployeeInformations());
        store.dispatch(actions.actionRequestAllEmployees());
        console.log('Employee updated successfully');
      } else {
        alert(`Error: ${response.status}`);
        return;
      }
      return;
    }
    case actions.DELETE_EMPLOYEE: {
      const { employee } = store.getState();
      employee.employeesToDelete.map(async (id) => {
        const response = await deleteEmployee(id);
        if (response.status === 200) {
          store.dispatch(actions.actionRequestAllEmployees());
          console.log('Employee deleted successfully');
        } else {
          alert(`Error: ${response.status}`);
        }
      });
      store.dispatch(actions.actionResetEmployeeInformations());
      return;
    }
    default: {
      next(action);
    }
  }
};

export default employeeMiddleware;
