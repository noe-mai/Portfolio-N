import './App.css';
import {Box, Grid} from '@chakra-ui/react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Intro from './Components/Intro';
import Proyectos from './Components/Proyectos/Proyectos';
import Contacto from './Components/Contacto/Contacto';
import Home from './Components/Home/Home';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar/Navbar';
import CustomButton from './Components/CustomButton/Button';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/proyectos'>
					<Proyectos />
				</Route>
				<Route exact path='/contacto'>
					<Contacto />
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
