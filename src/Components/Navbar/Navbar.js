import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';

import {Box, Container, Avatar, Flex, HStack, Text} from '@chakra-ui/react';

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
					<Box
						_hover={{
							borderBottom: '1px',
							color: 'gray.200',
						}}
					>
						<Link to='/'>
							<Text color='#171923'>Sobre mi</Text>
						</Link>
					</Box>

					<Box
						_hover={{
							borderBottom: '1px',
							color: 'gray.200',
						}}
					>
						<Link to='/proyectos'>
							<Text color='#171923'>Proyectos</Text>
						</Link>
					</Box>
					<Box
						_hover={{
							borderBottom: '1px',
							color: 'gray.200',
						}}
					>
						<Link to='/contacto'>
							<Text color='#171923'>Contacto</Text>
						</Link>
					</Box>
				</HStack>
			</Flex>
		</Container>
	);
};

export default Navbar;
