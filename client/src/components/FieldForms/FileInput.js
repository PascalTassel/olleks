import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function FileInput({
  type,
  label,
  nameValue,
  placeholder,
  required,
}) {
  return (
    <TextField
      required={required}
      sx={{ maxWidth: '400px', minWidth: '300px' }}
      type={type}
      label={label}
      nameValue={nameValue}
      placeholder={placeholder}
      variant="outlined"
    />
  );
}

FileInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  nameValue: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

FileInput.defaultProps = {
  placeholder: '',
  required: false,
};

export default React.memo(FileInput);
