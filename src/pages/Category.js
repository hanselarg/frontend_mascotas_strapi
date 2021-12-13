import React from 'react'
import Alert from 'react-bootstrap/Alert';
import CardDeck from '../components/CardDeck'
import MascotasList from '../components/MascotasList';

export default function Category(props) {
  //importa las props mascotas y errMsg de App.js en mascotasProps
  const mascotasProps = props;
  console.log('props category', props)
  console.log('mascotasProps', mascotasProps.mascotas)
  return (
    //expresion ternaria renderiza element alert con boostrap con mensaje error, si no hay error renderiza null no muestra nada.
    //pasa props al cardDeck y pager incluyendo funcion setear pagina para clikearla en el hijo
    <div className="App">
          {mascotasProps.errMsg? <Alert  variant="danger">
             {mascotasProps.errMsg}</Alert>: null}
          <CardDeck mascotasProps={mascotasProps.mascotas}/>
          <MascotasList/>   
    </div>
  )
}
