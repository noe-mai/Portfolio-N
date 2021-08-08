import React, {useState} from 'react';
import './Proyectos.css';
import { Input } from '@chakra-ui/react'

const Proyectos = () => {
	const [nombre, setNombre] = useState('Noe');
	const [apellido, setApellido] = useState ('Mai');

	return (
		<div>
			<h3>{nombre}</h3>
			<button onClick={() => setNombre('pepe')}>Cambiar nombre</button>
			
			<Input value={apellido} onChange={({ target }) => setApellido(target.value)} />
			
			<h3>{apellido} </h3>
			<div className='proyectos'>
        		<ul>
					<li>
						<div className='item-proyecto'></div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Proyectos;
