import React, {useContext, useState} from 'react';
import {ModalContext} from '../context/ModalContext';

// importando componente de modal
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

// posicion del modal
function getModalStyle() {
    const top = 50 ;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

// estilos del modal
const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({receta}) => {
  // configuracion del modal de material-ui
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  // funcion para abrir modal
  const handleOpen = () => {
    setOpen(true);
  }
  // funcion para cerrar modal
  const handleClose = () => {
    setOpen(false);
  }

  // extraer los valores del context
  const { informacion, guardarIdReceta, guardarReceta } = useContext(ModalContext);
  console.log(informacion);

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img
          className="card-img-top"
          src={receta.strDrinkThumb}
          alt={`Imagen de ${receta.strDrink}`}
          />
          <div className="card-body">
            <button
              type="button"
              className="btn btn-block btn-primary"
              onClick={() => {
                guardarIdReceta(receta.idDrink)
                handleOpen()
              }}
            >
            Ver receta
            </button>
            <Modal
              open={open}
              onClose={() => {
                guardarIdReceta(null);
                guardarReceta({});
                handleClose();
              }}
            >
              <div style={modalStyle} className={classes.paper}>
                <h2>{informacion.strDrink}</h2>
                <h2 className="mt-4">Instrucciones</h2>
                <p>{informacion.strInstructions}</p>
                <img className="img-fluid my-4" src={informacion.strDrinkThumb}/>
              </div>
            </Modal>
          </div>
      </div>
    </div>
  );
}

export default Receta;
