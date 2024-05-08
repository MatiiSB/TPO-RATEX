import React from "react"
import "./FAQs.css"
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ImTextColor } from "react-icons/im";
import { backdropClasses } from "@mui/material";
import { Height } from "@mui/icons-material";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `2px solid #F6F5E4`,
    '&:not(:last-child)': {
      borderBottom: 0,
      marginLeft: "25%",
      margin: "15px",
      fontFamily: "inder",

    },
    '&::before': {
      display: 'none',
      
      
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', backgroundColor: "#62079F", borderRadius: "3px", fontFamily: "inder" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
      marginTop: "20px",
      marginBottom: "20px",
      fontFamily: "Inder",
      
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(4),
    textAlign: "start",
    fontFamily: "inder",
    borderTop: '1px solid #62079F',
    backgroundColor: "transparent"
    
  }));

  export function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  
    return (
      <div>

        <Accordion id="detalles" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
            <Typography id="letra">¿QUIENES SOMOS?</Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography>
            Somos un grupo de aficionados por las peliculas y el cine mundial. Nos propusimos crear "Ratex" con el fin de poder hacer llegar a mucha gente las reseñas y critica de cada pelicula que exista y que ustedes mismos puedan valorarlas y reseñar sobre ellas.
            </Typography>
          </AccordionDetails>



        </Accordion>
        <Accordion id="detalles" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography >¿PUEDO VER RESEÑAS DE TODAS LAS PELICULAS?</Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography >
              Si, tienes acceso a ver todas las reseñas de peliculas de nuestra pagina! Puedes usar los filtros en la barra de navegacion lateral para encontrar tu pelicula o actor favorito, de una manera mas simple.
            </Typography>
          </AccordionDetails>
        </Accordion>


        <Accordion id="detalles" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography >¿COMO FUNCIONA "MI LISTA"?</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
            Para poder tener una lista propia donde puedes guardar tus peliculas y/o actores favoritos, deber tener creada una cuenta.
          </Typography>
        </AccordionDetails>
      </Accordion>

      
      <Accordion id="detalles" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography >¿COMO PUEDO DEJAR MI RESEÑA?</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
            Primero tienes que crearte una cuenta, si es que ya no tienes una. Una vez hayas iniciado sesión podeas dejar tu reseña y valoracion en cualquiera de nuestras peliculas.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion id="detalles" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography >¿COMO FUNCIONAN LAS RECOMENDACIONES?</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
            Es fácil, encuentras tu pelicula y luego puede dejar tu valorizacion por medio de nuestro sistema de estrellas, ademas puede dejar tu reseña en forma de comentario, donde otros usuarios pueden verlo.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    );
  }


export function Faqs(){
    return (
        <div className="fondoFaqs">
        <h1 className="tituloFaqs">FAQs</h1>
            <CustomizedAccordions/>
        </div>
    )
}


  
 