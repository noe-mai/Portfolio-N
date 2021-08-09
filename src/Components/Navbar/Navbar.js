import React from 'react';
import {Link} from 'react-router-dom';

import {Box, Container, Avatar, Flex, HStack} from '@chakra-ui/react';

import logo from '../../Images/logo.webp';

const Navbar = () => {
	return (
		<Container maxW='1240px'>
			<Flex p='20px' mb='30px' direction='row' justify='space-between'>
				<Link to='/'>
					<Avatar src={logo} />
				</Link>

				<HStack spacing='20px'>
					<Box>
						<Link to='/'>Sobre mi</Link>
					</Box>
					<Box>
						<Link to='/proyectos'>Proyectos</Link>
					</Box>
					<Box>
						<Link to='/contacto'>Contacto</Link>
					</Box>
				</HStack>
			</Flex>
		</Container>
	);
};

export default Navbar;
