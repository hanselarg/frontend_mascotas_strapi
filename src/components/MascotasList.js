import React, { useEffect } from 'react'
import { setMascotasList } from '../store/slices/mascotas';
import { useDispatch , useSelector } from 'react-redux';
import axios from 'axios';

const MascotasList = () => {
    
    const {list: mascotas} = useSelector(state => state.mascotas);
    
    const dispatch = useDispatch();

    useEffect(() => {
        const init = async () => {

            const resultadosFetch = await axios
            .get('http://localhost:1337/mascotas');

            dispatch(setMascotasList(resultadosFetch.data))
        }

       init();
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                {
                    mascotas.map((mascota, index) => (
                        <div key={index} className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{`${mascota.nombre} ${mascota.raza} `}</h5>
                                    <p className="card-text">{mascota.sexo}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MascotasList
