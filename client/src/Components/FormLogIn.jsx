import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./FormLogIn.css"
import FormSignIn from './FormSignIn';
import axios from 'axios';
import { Contexto } from './Contexto'; 

export default function FormDialog({ setUser }) {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mail === "" || pass === "") {
      setError(true);
      return;
    }

    const data = { mail, pass };
    axios.post("http://localhost:3006/users/login", data).then((response) => {
      if (!response.data.error) {
        console.log("login exitoso")
        setError(false);
        setUser([mail, pass]); // Actualizar el estado global del usuario
        handleClose();
        sessionStorage.setItem("accessToken", response.data)
      } else {
        console.log("error");
        setError(true);
      }
    });
  };

  return (
    <React.Fragment>
      <Button id='boton' onClick={handleClickOpen}>
        INICIAR SESION
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
            height: "480px",
            padding: "40px",
            boxShadow: "0 0 0 2px #62079F",
          },
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle id='titulo'>INICIAR SESION</DialogTitle>
        <DialogContent id='campos'>
          <TextField
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Correo electrónico"
            type="email"
            fullWidth
            variant="filled"
            placeholder='Jhon_Doe@mail.com'
            color='secondary'
            style={{ backgroundColor: "#F3F3F322", borderRadius: "5px", color: "#62079F", fontFamily: "Inder" }}
          />
          <FormControl id="passContainer" sx={{ height: "10px" }} variant="filled" required color='secondary' fullWidth>
            <InputLabel id="contaLabel" htmlFor="filled-adornment-password">Contraseña</InputLabel>
            <Input
              id="filled-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              style={{ backgroundColor: "#F3F3F322", borderRadius: "5px", color: "#F6F5E4", fontFamily: "Inder", paddingTop: "0px", fontWeight: "500" }}
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
          </FormControl>
          <div className='checkboxContainer'>
            <label>Aún no tienes cuenta? <a><FormSignIn setUser={setUser} /></a></label>
          </div>
        </DialogContent>
        <DialogActions>
          <Button id='boton' onClick={handleClose}>Cancelar</Button>
          <Button id='boton' type="submit">Acceder</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
