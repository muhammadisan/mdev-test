import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email: string) => {
    // https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
    /* eslint-disable no-control-regex */
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const formErrors: { name?: string; email?: string } = {};

    if (!name) {
      formErrors.name = 'Nama tidak boleh kosong';
    }

    if (!email) {
      formErrors.email = 'Email tidak boleh kosong';
    } else if (!validateEmail(email)) {
      formErrors.email = 'Email harus berupa format yang valid';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccessMessage('Form berhasil dikirim!');
      setName('');
      setEmail('');
      setErrors({});
    } else {
      setSuccessMessage('');
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // Mencegah spasi pertama sebelum ada karakter
    if (inputValue.length === 1 && inputValue === ' ') {
      inputValue = '';
    }

    // Mencegah spasi ganda
    if (inputValue.includes('  ')) {
      inputValue = inputValue.replace(/\s\s+/g, ' ');
    }

    setName(inputValue);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // Mencegah spasi dalam email
    inputValue = inputValue.replace(/\s/g, '');

    setEmail(inputValue);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '400px',
        margin: 'auto',
        p: 2,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: 2,
        border: 1,
        borderColor: '#ddd',
      }}
    >
      <Typography variant="h6" align="center">Contact Form</Typography>

      <TextField
        label="Nama"
        variant="outlined"
        fullWidth
        value={name}
        onChange={handleNameChange}
        error={Boolean(errors.name)}
        helperText={errors.name}
      />

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={handleEmailChange}
        error={Boolean(errors.email)}
        helperText={errors.email}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>

      {successMessage && (
        <Alert severity="success" sx={{ mt: 2 }}>
          {successMessage}
        </Alert>
      )}
    </Box>
  );
};

export default ContactForm;
