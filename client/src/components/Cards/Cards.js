/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import './cards.scss';

function Cards({
  company,
  handleAssignment,
  id,
  isAdmin,
  isDropable,
  isMobile,
  week,
}) {
  const theme = useTheme();
  return (
    isMobile
      ? (
        <Carousel
          assignments={assignments}
          handleAssignment={handleAssignment}
          id={`carousel-${id}`}
          isAdmin={isAdmin}
          key={`carousel-${id}`}
          week={week}
        />
      )
      : (
        <Box
          id={`cards-${id}`}
          sx={{
            display: 'flex',
            gap: theme.spacing(2),
            flexWrap: 'nowrap',
            justifyContent: 'center',
          }}
        >
          {assignments.map((assignment) => (
            <Card
              {...assignment}
              employees={assignment.colleagues}
              handleAssignment={handleAssignment}
              isAdmin={isAdmin}
              isDropable={isDropable}
              isMobile={false}
              key={assignment.id}
              week={week}
            />
          ))}
        </Box>
      )
  );
}

Cards.propTypes = {
  assignments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  handleAssignment: PropTypes.func,
  id: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  isDropable: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    assignments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
  }),
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

Cards.defaultProps = {
  handleAssignment: undefined,
  user: undefined,
};

export default React.memo(Cards);
