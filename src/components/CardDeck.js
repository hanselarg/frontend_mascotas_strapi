import Card from './Card';

//importa las propos mascotasItems de App.js en carPageItems
const CardDeck = (props) => {
  const mascotasItems = props.mascotasProps;
  console.log(props)
  //hago loop de autos del segmento de pagina activa y a cada card asigno keys
  let deckContent = mascotasItems.map(mascota => {
    return <Card key={mascota.id} nombre={mascota.nombre} sexo={mascota.sexo} fechaNacimiento={mascota.fecha_nacimiento} esEdadExacta={mascota.es_edad_exacta} raza={mascota.raza} edadAproximada={mascota.edad_aproximada} />
  });



  return (
    <div className="card-deck" style={{ display: 'flex', flexDirection: 'row', flex: 1, flexWrap: 'wrap' }}>
      {deckContent}
    </div>
  );

}

export default CardDeck