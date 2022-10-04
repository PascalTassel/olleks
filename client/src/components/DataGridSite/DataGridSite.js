import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {
  Alert, Box, Button, Typography, Modal,
} from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CreateSiteForm from '../CreateSiteForm/CreateSiteForm';

function DataGridSite({
  sites,
  oneSite,
  changeField,
  handleGetSite,
  handleUpdateSite,
  handleDeleteSite,
  handleCreateSite,
  pushSiteId,
  resetSiteInformations,
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
    pushSiteId(selectionModel);
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
      field: 'manager_name', headerName: 'Manager', width: 200, editable: true,
    },
    {
      field: 'estimated_duration', headerName: 'Durée estimée (j)', width: 200, editable: true, valueParser: (value) => Number(value),
    },
    {
      field: 'company',
      headerName: 'Entreprise',
      width: 200,
      type: 'text',
      valueGetter: (params) => {
        const result = [];
        result.push(params.row.company.company_name);
        return result;
      },
    },
  ];
  const rows = sites;

  const handleClickDeleteSite = () => {
    setShowAlert(false);
    setModalDeleteOpened(true);
  };

  const handleResetSite = () => {
    resetSiteInformations();
  };

  const handleClose = () => {
    setModalCreateOpened(false);
    setModalDeleteOpened(false);
    resetSiteInformations();
  };
  return (
    <>
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        Tous les sites
      </Typography>
      <Box sx={{ height: '80%', width: 'auto' }}>
        {showAlert && (
          <Alert sx={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center' }} severity="error">Vous devez sélectionner au moins un site à supprimer</Alert>
        )}
        <Button
          variant="contained"
          startIcon={(<AddOutlinedIcon />)}
          sx={{ margin: '10px' }}
          onClick={() => {
            handleResetSite();
            setModalCreateOpened(true);
          }}
        >
          Ajouter un site
        </Button>
        <Button
          variant="contained"
          startIcon={<DeleteOutlinedIcon />}
          onClick={() => {
            if (selectionModel.length === 0) {
              setShowAlert(true);
              return;
            }
            handleClickDeleteSite();
          }}
        >
          Supprimer un site
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
            handleUpdateSite(params);
          }}
          onCellClick={(params) => {
            handleGetSite(params.row);
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
          <CreateSiteForm
            site={oneSite}
            handleCreateSite={handleCreateSite}
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
            { selectionModel.length === 1 ? 'Êtes-vous sûr de vouloir supprimer le site ?' : 'Êtes-vous sûr de vouloir supprimer les sites ?' }
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              sx={{ margin: '10px' }}
              size="large"
              variant="contained"
              onClick={() => {
                handleDeleteSite();
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

DataGridSite.propTypes = {
  sites: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
  oneSite: PropTypes.shape(),
  handleGetSite: PropTypes.func.isRequired,
  handleUpdateSite: PropTypes.func.isRequired,
  handleDeleteSite: PropTypes.func.isRequired,
  handleCreateSite: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  pushSiteId: PropTypes.func.isRequired,
  resetSiteInformations: PropTypes.func.isRequired,
};
DataGridSite.defaultProps = {
  oneSite: null,
};
export default React.memo(DataGridSite);
