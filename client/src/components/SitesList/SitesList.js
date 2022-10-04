/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import Site from '../Site/Site';
import Carousel from '../Carousel/Carousel';

function SitesList({
  absencesList,
  company,
  handleAssignment,
  handleSite,
  isAbsencesList,
  isDropable,
  isMobile,
  isPast,
  sitesList,
  week,
}) {
  const theme = useTheme();
  const { id, sites } = company;
  const companySitesIds = company.sites.map((item) => item.id);
  const availableSites = isAbsencesList
    ? absencesList.filter((item) => !companySitesIds.includes(item.id))
    : sitesList.filter((item) => !companySitesIds.includes(item.id));
  const canAddSite = availableSites.length !== 0;

  /**
   * add company site
   */
  const handleAddSite = () => {
    handleSite(company, availableSites);
  };

  return (
    <>
      {canAddSite
      && (
        <Tooltip title={`Ajouter ${isAbsencesList ? 'un type d\'absence' : 'un site'}`} placement="top">
          <IconButton
            variant="outlined"
            disabled={isPast}
            onClick={handleAddSite}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              mb: theme.spacing(1),
            }}
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
      )}
      {isMobile
        ? (
          <Carousel
            handleAssignment={handleAssignment}
            handleSite={handleSite}
            id={`company-${id}-sites`}
            sites={sites}
            key={`carousel-${id}`}
            week={week}
          />
        )
        : (
          <Box
            id={`company-${id}-sites`}
            sx={{
              display: 'flex',
              gap: theme.spacing(1),
              [theme.breakpoints.up('md')]: {
                flexDirection: 'column',
              },
            }}
          >
            {sites.map((site) => (
              <Site
                {...site}
                handleAssignment={handleAssignment}
                isAbsence={isAbsencesList}
                isDropable={isDropable}
                isMobile={false}
                key={site.id}
                week={week}
              />
            ))}
          </Box>
        )}
    </>
  );
}

SitesList.propTypes = {
  absencesList: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  company: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sites: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        assignments: PropTypes.arrayOf(
          PropTypes.shape({
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
          }),
        ).isRequired,
      }),
    ).isRequired,
  }).isRequired,
  handleAssignment: PropTypes.func.isRequired,
  handleSite: PropTypes.func.isRequired,
  isAbsencesList: PropTypes.bool.isRequired,
  isDropable: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
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

export default React.memo(SitesList);
