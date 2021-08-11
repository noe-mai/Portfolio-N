import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {
	Avatar,
	Box,
	Flex,
	Center,
	Heading,
	Spinner,
	Text,
	Button,
} from '@chakra-ui/react';

import {buscarCasa} from './casas';

const House = () => {
	const {house} = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [personajes, setPersonajes] = useState([]);
	const casa = buscarCasa(house);

	useEffect(() => {
		fetch(`https://hp-api.herokuapp.com/api/characters/house/${house}`)
			.then((response) => response.json())
			.then((data) => {
				setPersonajes(data);
				setIsLoading(false);
			});
	}, [house]);

	if (isLoading) {
		return (
			<Center h={'300px'}>
				<Spinner />
				Loading...
			</Center>
		);
	}

	return (
		<Box minH='70vh' p={['5px', '30px']} alignItems='center'>
			<Flex
				alignItems='center'
				align='center'
				ml='20px'
				direction='column'
				justify='center'
			>
				<Avatar src={casa.logo} size='xl' />
				<Heading>{casa.nombre}</Heading>
			</Flex>
			<Button colorScheme={casa.color} variant='ghost'>
				<Link to='/proyectos/harry-potter'>
					<Text pb='0px'>Volver a Casas</Text>{' '}
				</Link>
			</Button>
			<Flex
				style={{gap: '20px'}}
				flexWrap='wrap'
				alignItems='center'
				direction={['column', 'row']}
			>
				{personajes.map(({name, image, species, house}) => (
					<Box
						p='20px'
						pt='10px'
						mt='20px'
						mb='10px'
						w={['100%', '100%', '50%', '50%', '24%']}
						key={name}
						borderWidth='5px'
						borderRadius='lg'
						bgGradient='linear(to-r,gray.300,yellow.400,pink.200)'
					>
						<Flex>
							<Avatar src={image} alt={name} size='2xl' />
							<Flex ml='20px' direction='column' justify='center'>
								<Box mt='2' fontWeight='semibold' as='h4'>
									{' '}
									{name}{' '}
								</Box>
								<p> {species} </p>
							</Flex>
						</Flex>
					</Box>
				))}
			</Flex>
		</Box>
	);
};

export default House;
