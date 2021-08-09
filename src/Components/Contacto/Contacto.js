import React, {useEffect, useState} from 'react';
import './Contacto.css';
import {Box, Flex, Heading, Container, Text} from '@chakra-ui/react';
import Confetti from 'react-confetti';

const Contacto = () => {
	const mail = 'noelia.s.maiquez at gmail.com';
	const [mostrarMail, setMostrarMail] = useState(false);
	const leftToRight = 'linear(to-l, #7928CA,#FF0080)';
	const rightToLeft = 'linear(to-l, #FF0080, #7928CA)';

	const toggleEmail = () => setMostrarMail(!mostrarMail);

	// && es igual a entonces variable && <html>
	return (
		<Container maxW='1240px' height='70vh'>
			<Flex h='100%' direction='column' align='center' justify='center'>
				{mostrarMail && <Confetti gravity={0.5} maxW='1240px' h='70vw' />}
				<Text
					style={{userSelect: 'none', cursor: 'pointer'}}
					bgGradient={mostrarMail ? leftToRight : rightToLeft}
					bgClip='text'
					fontSize='5vw'
					fontWeight='extrabold'
					onClick={toggleEmail}
				>
					{mostrarMail ? mail : 'click aqui para ver email'}
				</Text>
			</Flex>
		</Container>
	);
};

export default Contacto;
