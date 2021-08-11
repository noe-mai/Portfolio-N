import {Link} from 'react-router-dom';

import {Box, Flex, Heading, Image, Container, Button} from '@chakra-ui/react';

import {casas} from './casas';

const CardHouse = ({nombre, color, logo, url}) => {
	return (
		<Box
			d='flex'
			flexDirection='column'
			justifyContent='space-around'
			p='20px'
			w='280px'
			h='500px'
			bg='gray.100'
			textAlign='center'
			borderRadius='md'
		>
			<Heading>{nombre}</Heading>
			<Image src={logo} size='lg' />
			<Button as={Link} to={url} colorScheme={color} variant='ghost'>
				Ver Personajes
			</Button>
		</Box>
	);
};

const HarryPotter = () => {
	return (
		<Container maxW='1240px' minH='70vh'>
			<Flex wrap='wrap' alignItems='center' justify='space-between'>
				{casas.map(({nombre, color, logo, url}) => (
					<CardHouse
						key={nombre}
						nombre={nombre}
						color={color}
						logo={logo}
						url={url}
					/>
				))}
			</Flex>
		</Container>
	);
};

export default HarryPotter;
