import React from 'react';
const Formulario = ({}) => {
  return (
    <form className="col-12 mt-4">
      <fieldset className="text-center">
        <legend>Busca bebidas por categoría o ingrediente</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por ingrediente"
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="categoria"
          >
            <option value="">-- Selecciona una categoría --</option>
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar bebidas"
          />
        </div>
      </div>
    </form>
  );
}

export default Formulario;