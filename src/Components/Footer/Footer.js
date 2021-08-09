import React from 'react';
import './Footer.css';
import {Box, Container, Flex, Avatar, Text} from '@chakra-ui/react';

import logoGit from '../../Images/git-hub.svg';

import logoLin from '../../Images/lin.svg';

const Footer = () => {
	return (
		<Box color='#607B7B' w='100%' h='150px' mt='20px' p='10px' bg='#B5F0FF'>
			<Container maxW='1240px'>
				<Flex justify='center'>
					<Box p='4'>
						<a
							href='https://github.com/noe-mai'
							rel='noreferrer'
							target='_blank'
						>
							<Avatar src={logoGit} bg='white' alt='foto github' />
						</a>
					</Box>
					<Box p='4'>
						<a href='https://linkedin.com' rel='noreferrer' target='_blank'>
							<Avatar src={logoLin} bg='white' alt='foto lin' />
						</a>
					</Box>
				</Flex>
				<Text fontSize='sm' align='center'>
					Hecho con 🖤 <br />
					mientras aprendo React
				</Text>
			</Container>
		</Box>
	);
};

export default Footer;
