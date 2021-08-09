import React from 'react';
import './Intro.css';
import profilePic from './nn.png';
import {
	Container,
	Flex,
	Spacer,
	Image,
	Box,
	Grid,
	Avatar,
	AvatarBadge,
	AvatarGroup,
	Heading,
} from '@chakra-ui/react';

const Intro = ({nombre}) => {
	return (
		<Box h='50vh' padding='40px'>
			<Flex direction='row' align='center'>
				<Flex direction='column'>
					<Heading as='h3' size='lg'>
						{nombre}
					</Heading>
					<Heading as='h4' size='md' mb='20px'>
						Desarrolladora Front-end{' '}
					</Heading>
					<Box display='flex' alignItems='center' bg='whiteAlpha' maxW='6xl'>
						There are many benefits to a joint design and development system.
						Not only does it bring benefits to the design team, but it also
						brings benefits to engineering teams. It makes sure that our
						experiences have a consistent look and feel, not just in our design
						specs, but in production
					</Box>
				</Flex>
				<Box p='4'>
					<Image src={profilePic} className='foto' alt='foto noe' />
				</Box>
			</Flex>
		</Box>
	);
};

export default Intro;
