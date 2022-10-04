import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
} from '@mui/material';

function TextInput({
  type,
  label,
  nameValue,
  value,
  handleChange,
  placeholder,
  required,
}) {
  return (
    <TextField
      required={required}
      sx={{ maxWidth: '400px', minWidth: '300px' }}
      type={type}
      value={value}
      label={label}
      nameValue={nameValue}
      placeholder={placeholder}
      variant="outlined"
      onChange={(event) => handleChange(nameValue, event.target.value)}
    />
  );
}

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  nameValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
};

TextInput.defaultProps = {
  handleChange: null,
  placeholder: '',
  required: false,
};

export default React.memo(TextInput);
