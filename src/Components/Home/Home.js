import React from 'react';
import './Home.css';
import Intro from '../Intro/Intro';
import {Link} from 'react-router-dom';
import {Box, Grid} from '@chakra-ui/react';

const Home = () => {
	return (
		<>
			<Intro nombre='Noe' />
		</>
	);
};

export default Home;
