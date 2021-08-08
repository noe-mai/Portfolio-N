import './App.css';
import {Box, Grid} from '@chakra-ui/react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Intro from './Components/Intro';
import Proyectos from './Components/Proyectos/Proyectos';
import Contacto from './Components/Contacto/Contacto';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import CustomButton from './Components/CustomButton/Button';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<Home />
					<CustomButton texto='click ' color='yellow' />
				</Route>
				<Route exact path='/intro'>
					<Intro />
				</Route>
				<Route exact path='/proyectos'>
					<Proyectos />
				</Route>
				<Route exact path='/contacto'>
					<Contacto />
					<CustomButton texto='hola soy otro boton' />
				</Route>
			</Switch>
			<Footer />

			<Box
				w='100%'
				h='200px'
				bgGradient={[
					'linear(to-tr, teal.300,yellow.400)',
					'linear(to-t, blue.200, teal.500)',
					'linear(to-b, orange.100, purple.300)',
				]}
			/>
		</BrowserRouter>
	);
}

export default App;
