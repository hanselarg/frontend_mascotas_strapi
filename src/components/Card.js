import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//componente card de react boostrap y paso valores del componente padre cardDeck
const CustomCard = (props) => { 
    const {nombre, sexo, fechaNacimiento, esEdadExacta, raza, edadAproximada} = props;

    return (
    <div style={{ width: '33%',maxHeight: '300px', flexGrow: 1 }}>
        <Card>
            <Card.Body>
                <Card.Title>{nombre}-{raza}</Card.Title>
                <Card.Text>
                fecha de nacimiento: {fechaNacimiento}
                </Card.Text>
                <Card.Text>
                sexo: {sexo}
                </Card.Text>
                <Card.Text>
                es edad exacta: {esEdadExacta}
                </Card.Text>
                <Card.Text>
                edad aproximada: {edadAproximada}
                </Card.Text>
                <Button variant="primary">Seleccionar</Button>
            </Card.Body>
        </Card>
    </div>
    );
    
}

export default CustomCard