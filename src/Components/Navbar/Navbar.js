import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';

import {Box, Container, Avatar, Flex, HStack} from '@chakra-ui/react';

import logo from '../../Images/logo.webp';

const Logo = styled.div`
	transition: transform 0.3s ease-in;

	&:hover {
		transform: rotate(180deg);
	}
`;

const Navbar = () => {
	return (
		<Container maxW='1240px' style={{position: 'sticky'}}>
			<Flex p='20px' mb='30px' direction='row' justify='space-between'>
				<Logo size={2}>
					<Link to='/'>
						<Avatar src={logo} />
					</Link>
				</Logo>

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
