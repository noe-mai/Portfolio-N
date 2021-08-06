import {Button, ButtonGroup} from '@chakra-ui/react';
import {Box, Grid} from '@chakra-ui/react';
import {Image} from '@chakra-ui/react';
import {Avatar, AvatarBadge, AvatarGroup} from '@chakra-ui/react';
import Contacto from './Components/Contacto/Contacto';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import Intro from './Components/Intro/Intro';
import CustomButton from './Components/CustomButton/Button';

function App() {
	return (
		<div>
			<Box w='100%' h='200px' bgGradient='linear(to-r, green.200, pink.500)' />
			<Box w='100%' h='50px' />

			<Navbar />
			<Home />
			<Footer />
			<Skills />
			<Intro />
			<CustomButton texto='click ' color='yellow' />
			<CustomButton texto='hola soy otro boton' />

			<Box
				w='100%'
				h='200px'
				bgGradient={[
					'linear(to-tr, teal.300,yellow.400)',
					'linear(to-t, blue.200, teal.500)',
					'linear(to-b, orange.100, purple.300)',
				]}
			/>

			<Box
				as='button'
				p={4}
				color='white'
				fontWeight='bold'
				borderRadius='md'
				bgGradient='linear(to-r, teal.500,green.500)'
				_hover={{
					bgGradient: 'linear(to-r, red.500, yellow.500)',
				}}
			>
				Click here
			</Box>
		</div>
	);
}

export default App;
