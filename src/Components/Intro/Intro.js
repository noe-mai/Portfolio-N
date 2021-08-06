import React from 'react';
import './Intro.css';
import img from './nn.png';
import {Container} from '@chakra-ui/react';
import {Flex, Spacer} from '@chakra-ui/react';
import {Image} from '@chakra-ui/react';
import {Box, Grid} from '@chakra-ui/react';
import {Avatar, AvatarBadge, AvatarGroup} from '@chakra-ui/react';

const Intro = ({nombre}) => {
	return (
		<header>
			<Container maxW='container.lg'>
				<Flex>
					<Box display='flex' padding='4' bg='whiteAlpha' maxW='3xl'>
						<h1>{nombre}</h1>
						<Spacer />
						<p>Desarrolladora Front-end </p>
						There are many benefits to a joint design and development system.
						Not only does it bring benefits to the design team, but it also
						brings benefits to engineering teams. It makes sure that our
						experiences have a consistent look and feel, not just in our design
						specs, but in production
						<Box p='4'>
							<img src={img} className='foto' alt='foto noe'></img>
						</Box>
						<Spacer />
					</Box>
				</Flex>
			</Container>
		</header>
	);
};

export default Intro;
