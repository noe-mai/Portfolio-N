import {Link} from 'react-router-dom';

import {Box, Flex, Heading, Image, Container, Button} from '@chakra-ui/react';

import logoGryffindor from '../../Images/gryffindor.png';
import logoHufflepuff from '../../Images/hufflepuff.png';
import logoSlytherin from '../../Images/slytherin.png';
import logoRavenclaw from '../../Images/ravenclaw.png';

const HarryPotter = () => {
	return (
		<Container maxW='1240px' minH='70vh'>
			<Flex alignItems='center' justify='space-between'>
				<Box
					d='flex'
					flexDirection='column'
					justifyContent='space-around'
					p='20px'
					w='280px'
					h='500px'
					bg='gray.100'
					textAlign='center'
					borderRadius='md'
				>
					<Heading>Gryffindor</Heading>
					<Image src={logoGryffindor} size='lg' />
					<Button
						as={Link}
						to='/proyectos/harry-potter/casas/gryffindor'
						colorScheme='red'
						variant='ghost'
					>
						Ver Personajes
					</Button>
				</Box>
				<Box
					d='flex'
					flexDirection='column'
					justifyContent='space-around'
					p='20px'
					w='280px'
					h='500px'
					bg='gray.100'
					textAlign='center'
					borderRadius='md'
				>
					<Heading>Slytherin</Heading>
					<Image src={logoSlytherin} />
					<Button
						as={Link}
						to='/proyectos/harry-potter/casas/slytherin'
						colorScheme='green'
						variant='ghost'
					>
						Ver Personajes
					</Button>
				</Box>

				<Box
					d='flex'
					flexDirection='column'
					justifyContent='space-around'
					p='20px'
					w='280px'
					h='500px'
					bg='gray.100'
					textAlign='center'
					borderRadius='md'
				>
					<Heading>Hufflepuff</Heading>
					<Image src={logoHufflepuff} />
					<Button
						as={Link}
						to='/proyectos/harry-potter/casas/hufflepuff'
						colorScheme='yellow'
						variant='ghost'
					>
						Ver Personajes
					</Button>
				</Box>
				<Box
					d='flex'
					flexDirection='column'
					justifyContent='space-around'
					p='20px'
					w='280px'
					h='500px'
					bg='gray.100'
					textAlign='center'
					borderRadius='md'
				>
					<Heading>Ravenclaw</Heading>
					<Image src={logoRavenclaw} />
					<Button
						as={Link}
						to='/proyectos/harry-potter/casas/ravenclaw'
						colorScheme='blue'
						variant='ghost'
					>
						Ver Personajes
					</Button>
				</Box>
			</Flex>
		</Container>
	);
};

export default HarryPotter;
