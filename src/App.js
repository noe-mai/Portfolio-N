import './App.css';
import {Box, Grid} from '@chakra-ui/react';
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
			<Navbar />
			<Home />
			<Footer />
			<Contacto />
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
		</div>
	);
}

export default App;
