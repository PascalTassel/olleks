/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import {
  Alert, Box, Button, Typography, Modal,
} from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CreateEmployeeForm from '../CreateEmployeeForm/CreateEmployeeForm';

function DataGridEmployee({
  employees,
  oneEmployee,
  changeField,
  handleGetEmployee,
  handleUpdateEmployee,
  handleDeleteEmployee,
  handleCreateEmployee,
  pushEmployeeId,
  resetEmployeeInformations,
  changeFile,
  getAllQualification,
}) {
  const theme = useTheme();
  const [selectionModel, setSelectionModel] = useState([]);
  const [modalCreateOpened, setModalCreateOpened] = useState(false);
  const [modalDeleteOpened, setModalDeleteOpened] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [filterModel, setFilterModel] = useState({
    items: [
      {
        columnField: 'lastname',
        operatorValue: 'contains',
        value: '',
      },
    ],
  });

  useEffect(() => {
    pushEmployeeId(selectionModel);
  }, [selectionModel]);
  const columns = [
    {
      field: 'id', headerName: 'Id', width: 50, hide: true,
    },
    {
      field: 'firstname', headerName: 'Prénom', width: 200, editable: true,
    },
    {
      field: 'lastname', headerName: 'Nom', width: 200, editable: true,
    },
    {
      field: 'email', headerName: 'Email', width: 400, editable: true,
    },
    {
      field: 'phone_number', headerName: 'Téléphone fixe', width: 200, editable: true,
    },
    {
      field: 'mobile_number', headerName: 'Téléphone portable', width: 200, editable: true,
    },
    {
      field: 'address', headerName: 'Adresse', width: 450, editable: true,
    },
    {
      field: 'zip_code', headerName: 'Code postal', width: 150, editable: true, valueParser: (value) => Number(value),
    },
    {
      field: 'social_security_number', headerName: 'Numéro de sécurité sociale', width: 300, editable: true,
    },
    {
      field: 'date_of_birth', headerName: 'Date de naissance', width: 300, editable: true, type: 'date', valueGetter: ({ value }) => value && new Date(value),
    },
    {
      field: 'starting_date', headerName: "Date d'entrée", width: 300, editable: true, type: 'date', valueGetter: ({ value }) => value && new Date(value),
    },
    {
      field: 'avatar', headerName: 'Avatar', width: 200, editable: true,
    },
    {
      field: 'fonction', headerName: 'Fonction', width: 200, editable: true,
    },
    {
      field: 'role_application', headerName: 'Rôle', width: 200, editable: true,
    },
    {
      field: 'qualification_label', headerName: 'Qualification', width: 200, editable: true,
    },
  ];
  const rows = employees;

  const handleClickDeleteEmployee = () => {
    setShowAlert(false);
    handleDeleteEmployee();
  };

  const handleResetEmployee = () => {
    resetEmployeeInformations();
  };

  const handleClose = () => {
    setModalCreateOpened(false);
    setModalDeleteOpened(false);
    resetEmployeeInformations();
  };

  return (
    <>
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        Tous les employés
      </Typography>
      <Box sx={{ minHeight: '80%', width: 'auto' }}>
        {showAlert && (
          <Alert sx={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center' }} severity="error">Vous devez sélectionner au moins un employé à supprimer</Alert>
        )}
        <Button
          variant="contained"
          startIcon={(<AddOutlinedIcon />)}
          sx={{ margin: '10px' }}
          onClick={() => {
            handleResetEmployee();
            setModalCreateOpened(true);
          }}
        >
          Ajouter un employé
        </Button>
        <Button
          variant="contained"
          startIcon={<DeleteOutlinedIcon />}
          onClick={() => {
            if (selectionModel.length === 0) {
              setShowAlert(true);
              return;
            }
            setModalDeleteOpened(true);
          }}
        >
          Supprimer un employé
        </Button>
        <DataGrid
          disableSelectionOnClick
          sx={{
            fontSize: '1.2rem', height: '80vh',
          }}
          disableColumnMenu
          checkboxSelection
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
          editMode="cell"
          onCellEditCommit={(params) => {
            handleUpdateEmployee(params);
          }}
          onCellClick={(params) => {
            handleGetEmployee(params.row);
          }}
          filterModel={filterModel}
          onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)}
          columns={columns}
          rows={rows}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
      <Modal
        open={modalCreateOpened}
        onClose={handleClose}
        BackdropProps={{ invisible: false }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.background.component,
            width: '50%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '10px',
          }}
        >
          <Button
            onClick={handleClose}
            sx={{ textAlign: 'right' }}
          >
            Close

          </Button>
          <CreateEmployeeForm
            employee={oneEmployee}
            handleCreateEmployee={handleCreateEmployee}
            changeField={changeField}
            changeFile={changeFile}
            handleClose={handleClose}
            getAllQualification={getAllQualification}
          />
        </Box>
      </Modal>
      <Modal
        open={modalDeleteOpened}
        onClose={handleClose}
        BackdropProps={{ invisible: false }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.background.component,
            width: '50%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '10px',
          }}
        >
          <Button
            onClick={handleClose}
            sx={{ textAlign: 'right' }}
          >
            Close

          </Button>
          <Typography
            variant="h4"
            sx={{ textAlign: 'center' }}
          >
            { selectionModel.length === 1 ? "Êtes-vous sûr de vouloir supprimer l'employé ?" : 'Êtes-vous sûr de vouloir les employés ?' }
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              sx={{ margin: '10px' }}
              size="large"
              variant="contained"
              onClick={() => {
                handleClickDeleteEmployee();
                handleClose();
              }}
            >
              Confirmer
            </Button>
            <Button
              sx={{ margin: '10px' }}
              size="large"
              variant="outlined"
              onClick={handleClose}
            >
              Annuler
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

DataGridEmployee.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
  oneEmployee: PropTypes.shape(),
  handleGetEmployee: PropTypes.func.isRequired,
  handleUpdateEmployee: PropTypes.func.isRequired,
  handleDeleteEmployee: PropTypes.func.isRequired,
  handleCreateEmployee: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  changeFile: PropTypes.func.isRequired,
  pushEmployeeId: PropTypes.func.isRequired,
  resetEmployeeInformations: PropTypes.func.isRequired,
  getAllQualification: PropTypes.func.isRequired,
};
DataGridEmployee.defaultProps = {
  oneEmployee: null,
};
export default React.memo(DataGridEmployee);
