/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, MobileStepper,
} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import Site from '../Site/Site';

import './carousel.scss';

function Carousel({
  handleAssignment,
  handleSite,
  sites,
  week,
}) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = sites.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        margin: '0 auto',
        maxWidth: 332,
        bgcolor: `${theme.palette.background.component}`,
      }}
    >
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {sites.map((site, index) => (
          <div key={site.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                key={`slide-${site.id}`}
                sx={{
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                }}
              >
                <Site
                  {...site}
                  handleAssignment={handleAssignment}
                  handleSite={handleSite}
                  isAbsence={site.id === 0}
                  isDropable={false}
                  isMobile
                  key={site.id}
                  week={week}
                />
              </Box>
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={(
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Suiv.
            <KeyboardArrowRight />
          </Button>
        )}
        backButton={(
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Préc.
          </Button>
        )}
      />
    </Box>
  );
}

Carousel.propTypes = {
  handleAssignment: PropTypes.func.isRequired,
  handleSite: PropTypes.func.isRequired,
  sites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  week: PropTypes.shape({
    num: PropTypes.number.isRequired,
    dates: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

export default React.memo(Carousel);
