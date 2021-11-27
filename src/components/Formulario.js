import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import DatePickerField from './DatePicker';
import axios from 'axios';
import { Alert, Container } from 'react-bootstrap';
import MySelect from './MySelect';
import "react-datepicker/dist/react-datepicker.css";
import Button from '@restart/ui/esm/Button';


const Formulario = () => {
  const [result, setResult] = useState({});
  const [razas, setRazas] = useState([]);
  useEffect(() => {
    async function asyncCall() {
      const resultFetchRazas = await axios.get('http://localhost:1337/razas')
      setRazas(resultFetchRazas.data.map((raza) => raza.raza))
    }
    asyncCall();
  }, [])

  console.log(razas);

  return (<Container style={{width:'50%'}}>
    <h1>Registre su mascota</h1>
    <Formik
      initialValues={{
        nombre: '',
        raza: '',
        sexo: '',
        edad_aproximada: null
      }}
      onSubmit={async (values) => {

        setResult({});
        // POST request using axios with error handling
        axios.post('http://localhost:1337/mascotas', values)
          .then(response => setResult({ msg: 'Mascota creada correctamente', variant: 'success' }))
          .catch(error => {
            setResult({ msg: 'Error al crear la mascota', variant: 'danger' })
            console.error('Hubo un error creando la mascota!', error);
          });

      }}
    >
      <div>
        {result?.variant ? (
        <Alert variant={result.variant}>
          {result.msg}
        </Alert>) : null}

        <Form style={{ display: 'flex', flexDirection: 'column'}}>
            <div class="form-group">
              <label htmlFor="nombre">Nombre</label>
              <Field id="nombre" name="nombre" placeholder="Firulais" className="form-control" />
            </div>

            <div class="form-group">
              <MySelect label="Sexo" name="sexo" className="form-control">
                <option value="">Seleccionar sexo</option>
                <option value="macho">Macho</option>
                <option value="hembra">Hembra</option>
                <div></div>
              </MySelect>
            </div>
            <div class="form-group">
              <MySelect label="Raza" name="raza" className="form-control">
                <option value="">Seleccionar sexo</option>

                {razas.map((value) => (
                  <option value={value}>
                    {value}
                  </option>
                ))}
              </MySelect>
            </div>
            <div class="form-group">
              <label htmlFor="edad_aproximada" >Edad aproximada(meses)</label>
              <Field id="edad_aproximada" name="edad_aproximada" placeholder="Meses de edad" type='number' min={0} className="form-control" />
            </div>
            <div class="form-group" style={{ marginBottom: '1rem' }}>
              <label htmlFor="fecha_nacimiento">Fecha De Nacimiento</label>
              <DatePickerField name="fecha_nacimiento" label="Fecha de nacimiento" className="form-control" />
            </div>
            <Button type="submit" className="btn btn-primary">Enviar</Button>
        </Form>
      </div>
    </Formik>
  </Container>)
    ;
}

export default Formulario