import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Proyectos.css';
import harryPotterLogo from '../../Images/harry-potter.jpg';
import {
	Input,
	Avatar,
	Box,
	Flex,
	Container,
	Center,
	Text,
	Heading,
	Image,
} from '@chakra-ui/react';

const Proyectos = () => {
	return (
		<Container maxW='1240px' minH='70vh'>
			<Box w='600px' p='20px' border='1px solid #607B7B' borderRadius='4px'>
				<Flex align='center'>
					<Image maxW='200px' src={harryPotterLogo} />
					<Box ml='20px'>
						<Heading>Harry Potter API</Heading>
						<Text mb='10px'>
							Proyecto realizado con el objetivo de interactuar con la API de
							Harry Potter para poder mostrar personajes y casas{' '}
						</Text>
						<Link to='/proyectos/harry-potter'>Ver Proyecto</Link>
					</Box>
				</Flex>
			</Box>
		</Container>
	);
};

export default Proyectos;
