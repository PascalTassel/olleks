import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {
  Alert, Box, Button, Typography, Modal,
} from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CreateCompanyForm from '../CreateCompanyForm/CreateCompanyForm';

function DataGridCompany({
  companies,
  oneCompany,
  changeField,
  handleGetCompany,
  handleUpdateCompany,
  handleDeleteCompany,
  handleCreateCompany,
  pushCompanyId,
  resetCompanyInformations,
}) {
  const theme = useTheme();
  const [selectionModel, setSelectionModel] = useState([]);
  const [modalCreateOpened, setModalCreateOpened] = useState(false);
  const [modalDeleteOpened, setModalDeleteOpened] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [filterModel, setFilterModel] = useState({
    items: [
      {
        columnField: 'name',
        operatorValue: 'contains',
        value: '',
      },
    ],
  });

  useEffect(() => {
    pushCompanyId(selectionModel);
    setShowAlert(false);
  }, [selectionModel]);
  const columns = [
    {
      field: 'id', headerName: 'Id', width: 50, hide: true,
    },
    {
      field: 'name', headerName: 'Nom', width: 200, editable: true,
    },
    {
      field: 'address', headerName: 'Adresse', width: 450, editable: true,
    },
    {
      field: 'zip_code', headerName: 'Code postal', width: 150, editable: true, valueParser: (value) => Number(value),
    },
    {
      field: 'type', headerName: 'Type', width: 200, editable: true,
    },
  ];
  const rows = companies;

  const handleClickDeleteCompany = () => {
    setShowAlert(false);
    setModalDeleteOpened(true);
  };

  const handleResetCompany = () => {
    resetCompanyInformations();
  };

  const handleClose = () => {
    setModalCreateOpened(false);
    setModalDeleteOpened(false);
    resetCompanyInformations();
  };
  return (
    <>
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        Toutes les entreprises
      </Typography>
      <Box sx={{ height: '80%', width: 'auto' }}>
        {showAlert && (
          <Alert sx={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center' }} severity="error">Vous devez sélectionner au moins une entreprise à supprimer</Alert>
        )}
        <Button
          variant="contained"
          startIcon={(<AddOutlinedIcon />)}
          sx={{ margin: '10px' }}
          onClick={() => {
            handleResetCompany();
            setModalCreateOpened(true);
          }}
        >
          Ajouter une entreprise
        </Button>
        <Button
          variant="contained"
          startIcon={<DeleteOutlinedIcon />}
          onClick={() => {
            if (selectionModel.length === 0) {
              setShowAlert(true);
              return;
            }
            setShowAlert(false);
            handleClickDeleteCompany();
          }}
        >
          Supprimer une entreprise
        </Button>
        <DataGrid
          disableSelectionOnClick
          sx={{ fontSize: '1.2rem', height: '80vh' }}
          disableColumnMenu
          checkboxSelection
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
          editMode="cell"
          onCellEditCommit={(params) => {
            handleUpdateCompany(params);
          }}
          onCellClick={(params) => {
            handleGetCompany(params.row);
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
          <CreateCompanyForm
            company={oneCompany}
            handleCreateCompany={handleCreateCompany}
            changeField={changeField}
            handleClose={handleClose}
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
            { selectionModel.length === 1 ? "Êtes-vous sûr de vouloir supprimer l'entreprise ?" : 'Êtes-vous sûr de vouloir supprimer les entreprises ?' }
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              sx={{ margin: '10px' }}
              size="large"
              variant="contained"
              onClick={() => {
                handleDeleteCompany();
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

DataGridCompany.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
  oneCompany: PropTypes.shape(),
  handleGetCompany: PropTypes.func.isRequired,
  handleUpdateCompany: PropTypes.func.isRequired,
  handleDeleteCompany: PropTypes.func.isRequired,
  handleCreateCompany: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  pushCompanyId: PropTypes.func.isRequired,
  resetCompanyInformations: PropTypes.func.isRequired,
};
DataGridCompany.defaultProps = {
  oneCompany: null,
};
export default React.memo(DataGridCompany);
