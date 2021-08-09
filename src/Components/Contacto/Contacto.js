import React, {useEffect, useState} from 'react';
import './Contacto.css';
import {Box, Divider, Grid} from '@chakra-ui/react';

const Contacto = () => {
	let mail = 'noelia.s.maiquez@gmail.com';
	const [info, setInfo] = useState('');

	return (
		<div>
			<h3> {info} </h3>
			<Box
				as='button'
				p={4}
				color='white'
				fontWeight='bold'
				borderRadius='md'
				bgGradient='linear(to-r, teal.500,green.500)'
				_hover={{
					bgGradient: 'linear(to-r, red.500, yellow.500)',
				}}
				onClick={() => setInfo(mail)}
			>
				Mostrar mail
			</Box>
		</div>
	);
};

export default Contacto;
