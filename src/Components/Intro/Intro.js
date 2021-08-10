import React from 'react';
import './Intro.css';
import profilePic from './nn.png';
import {Flex, Image, Box, Heading} from '@chakra-ui/react';

const Intro = ({nombre}) => {
	return (
		<Box minH='50vh' padding='10px'>
			<Flex direction={['column', 'row']} align='center'>
				<Flex direction='column'>
					<Heading as='h3' size='lg'>
						{nombre}
					</Heading>
					<Heading as='h4' size='md' mb='20px' color={['#607B7B', 'black']}>
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
				<Box p='30px' w={['80%', 'auto']} order={['first', 'auto']}>
					<Image src={profilePic} className='foto' alt='foto noe' />
				</Box>
			</Flex>
		</Box>
	);
};

export default Intro;
