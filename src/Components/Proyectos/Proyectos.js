import React, {useState, useEffect} from 'react';
import './Proyectos.css';
import { Input, Avatar, Box, Flex, Container, Spacer } from '@chakra-ui/react'

const Proyectos = () => {
	const [nombre, setNombre] = useState('Noe');
	const [apellido, setApellido] = useState ('Mai');
	const [personajes, setPersonajes] = useState ([]);

	useEffect(() => {
		fetch ("http://hp-api.herokuapp.com/api/characters")
		.then (response => response.json())
		.then (personajes => setPersonajes(personajes))
	}, []);

	return (
		<div>
			<h3>{nombre}</h3>
			<button onClick={() => setNombre('pepe')}>Cambiar nombre</button>
			<Input value={apellido} onChange={({ target }) => setApellido(target.value)} />
			<h3>{apellido} </h3>

			<Flex flexWrap="wrap">
				{personajes.map (({ name, image, species, house }) => (
					<Box p="20px" w="25%" key={name} borderWidth="5px" borderRadius="lg" bgGradient="linear(to-r,gray.300,yellow.400,pink.200)">
						<Flex>
						<Avatar src={image} alt={name} size="2xl"  />
						<Flex ml="20px" direction="column" justify="center">
							<Box mt="2" fontWeight="semibold" as="h4"> {name} </Box>
							<p> {species} </p>
							<p> {house} </p>
						</Flex>
						</Flex>
					</Box>
				))}
			</Flex>
			<Container className='proyectos'>
			
			</Container>
		</div>
	);
};

export default Proyectos;
