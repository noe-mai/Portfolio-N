import {Link} from 'react-router-dom';

import {Box, Flex, Heading, Image, Container, Button} from '@chakra-ui/react';

import logoGryffindor from '../../Images/gryffindor.png';
import logoHufflepuff from '../../Images/hufflepuff.png';
import logoSlytherin from '../../Images/slytherin.png';
import logoRavenclaw from '../../Images/ravenclaw.png';

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

const casas = [
	{
		nombre: 'Gryffindor',
		color: 'red',
		logo: logoGryffindor,
		url: '/proyectos/harry-potter/casas/gryffindor',
	},
	{
		nombre: 'Slytherin',
		color: 'green',
		logo: logoSlytherin,
		url: '/proyectos/harry-potter/casas/slytherin',
	},
	{
		nombre: 'Hufflepuff',
		color: 'yellow',
		logo: logoHufflepuff,
		url: '/proyectos/harry-potter/casas/hufflepuff',
	},
	{
		nombre: 'Ravenclaw',
		color: 'blue',
		logo: logoRavenclaw,
		url: '/proyectos/harry-potter/casas/ravenclaw',
	},
];

const HarryPotter = () => {
	return (
		<Container maxW='1240px' minH='70vh'>
			<Flex wrap='wrap' alignItems='center' justify='space-between'>
				{casas.map(({nombre, color, logo, url}) => (
					<CardHouse nombre={nombre} color={color} logo={logo} url={url} />
				))}
			</Flex>
		</Container>
	);
};

export default HarryPotter;
