import React from 'react';
import './Navbar.css';
import {Box, Grid} from '@chakra-ui/react';

const Navbar = () => {
	return (
		<div>
			<ul>
				<li>Home</li>
				<li>Contacto</li>
				<li>Skills</li>
			</ul>
			<Box bg='grey' w='100%' p={4} color='white'>
				Futuro Navbar prueba componente
			</Box>
			<Box
				w='100%'
				h='200px'
				bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'
			/>
			;
		</div>
	);
};

export default Navbar;
