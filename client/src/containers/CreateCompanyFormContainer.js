import React from 'react';
import { useSelector } from 'react-redux';
import CreateCompanyForm from '../components/CreateCompanyForm/CreateCompanyForm';

function CreateCompanyFormContainer() {
  const allCompanies = useSelector((state) => state.allCompanies.companies);
  console.log(allCompanies);

  return (
    <CreateCompanyForm
      datas={allCompanies}
    />
  );
}

CreateCompanyFormContainer.propTypes = {};
CreateCompanyFormContainer.defaultProps = {};
export default React.memo(CreateCompanyFormContainer);
