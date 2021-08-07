import React, {useState} from 'react';
import './Proyectos.css';

const Proyectos = () => {
	const [nombre, setNombre] = useState('Hermione');

	return (
		<div>
			<h3>{nombre}</h3>
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
