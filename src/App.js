import {Box, Heading} from '@chakra-ui/react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HarryPotter from './Components/HarryPotter';
import HarryPotterHouse from './Components/HarryPotter/House';
import Proyectos from './Components/Proyectos/Proyectos';
import Contacto from './Components/Contacto/Contacto';
import Home from './Components/Home/Home';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar/Navbar';

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/proyectos',
		component: Proyectos,
	},
	{
		path: '/proyectos/harry-potter',
		component: HarryPotter,
	},
	{
		path: '/proyectos/harry-potter/:house',
		component: HarryPotterHouse,
	},
	{
		path: '/contacto',
		component: Contacto,
	},
];

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				{routes.map(({path, component}) => (
					<Route key={path} exact path={path} component={component} />
				))}
				<Route path='*'>
					<Box d='flex' justifyContent='center' alignItems='center' h='60vh'>
						<Heading size='3xl'>404</Heading>
					</Box>
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
