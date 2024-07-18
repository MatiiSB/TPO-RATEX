import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./FormSignIn.css"
import { Link } from 'react-router-dom';
import { purple } from '@mui/material/colors';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useState, useContext } from 'react';
import { Contexto } from './Contexto'; 
import Alert from '@mui/material/Alert';

export default function FormSignIn({ user, setUser }) {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState({ show: false, message: '', severity: 'success' });

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const initialValues = {
    mail: "",
    pass: "",
  };

  const validationSchema = Yup.object().shape({
    mail: Yup.string().email('Correo inválido').min(3, 'El correo debe tener al menos 3 caracteres').max(30, 'El correo no puede tener más de 30 caracteres').required('El correo es obligatorio'),
    pass: Yup.string().min(6, 'La contraseña debe tener como mínimo 6 caracteres').max(20, 'La contraseña no puede tener más de 20 caracteres').required('La contraseña es obligatoria'),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    axios.post("http://localhost:3006/users", values).then(() => {
      setSubmitting(false);
      resetForm();
      setOpen(false);
      setShowAlert({ show: true, message: 'Registro exitoso', severity: 'success' });
      setTimeout(() => setShowAlert({ show: false }), 3000);
    }).catch(error => {
      setSubmitting(false);
      setShowAlert({ show: true, message: 'Error en el registro', severity: 'error' });
      setTimeout(() => setShowAlert({ show: false }), 3000);
    });
  };

  return (
    <React.Fragment>
      <Button id='boton' onClick={handleClickOpen}>
        REGISTRARSE
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: "#1F1D1D",
            color: "#62079F",
            fontFamily: "Catamaran",
            alignItems: "center",
            borderRadius: "75px",
            width: "500px",
            height: "510px",
            padding: "40px",
            boxShadow: " 0 0 0 2px #62079F",
          },
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, handleSubmit, validateForm, values, isSubmitting }) => (
            <Form id="formulario" onSubmit={(e) => {
              e.preventDefault();
              validateForm().then(errors => {
                if (Object.keys(errors).length === 0) {
                  handleSubmit();
                } else {
                  setShowAlert({ show: true, message: 'Por favor, complete todos los campos correctamente', severity: 'error' });
                  setTimeout(() => setShowAlert({ show: false }), 3000);
                }
              });
            }}>
              <DialogTitle id='titulo'>REGISTRARSE</DialogTitle>
              <DialogContent id='campos'>
                <TextField
                  autoFocus
                  required
                  value={values.mail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin="dense"
                  id="mail"
                  name="mail"
                  label="Correo electrónico"
                  type="email"
                  fullWidth
                  variant="filled"
                  placeholder='Jhon_Doe@mail.com'
                  color='secondary'
                  error={touched.mail && !!errors.mail}
                  helperText={touched.mail && errors.mail}
                  style={{  color: "#F6F5E4", backgroundColor: "#F3F3F322", borderRadius: "5px", fontFamily: "Inder",fontWeight: "500" }}
                />
                <FormControl
                  id="passContainer"
                  sx={{ height: "20px" }}
                  variant="filled"
                  required
                  color='secondary'
                  fullWidth
                  error={touched.pass && !!errors.pass}
                >
                  <InputLabel id="contaLabel" htmlFor="filled-adornment-password">Contraseña</InputLabel>
                  <Input
                    id="pass"
                    type={showPassword ? 'text' : 'password'}
                    value={values.pass}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="pass"
                    style={{ backgroundColor: "#F3F3F322", borderRadius: "5px", color: "#F6F5E4", fontFamily: "Inder", paddingTop: "0px", fontWeight: "500", height: "100px",paddingLeft: "12px", paddingTop: "20px" }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {touched.pass && errors.pass && <div style={{ color: 'red' }}>{errors.pass}</div>}
                </FormControl>
                <div className='checkboxContainer'>
                  <label>Acepto las <Link target='_blank' to="/RatexPrivacyPolicy"><strong>Políticas de Privacidad</strong></Link></label>
                  <Checkbox
                    required
                    size='small'
                    sx={{
                      color: purple[800],
                      '&.Mui-checked': { color: purple[600] },
                    }}
                  />
                </div>
              </DialogContent>
              <DialogActions>
                <Button id='boton' onClick={handleClose}>Cancelar</Button>
                <Button id='boton' type="submit" disabled={isSubmitting}>Acceder</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
      {showAlert.show && (
        <Alert severity={showAlert.severity} style={{ marginTop: '2px' }}>
          {showAlert.message}
        </Alert>
      )}
    </React.Fragment>
  );
}
