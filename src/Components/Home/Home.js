import React from 'react';
import './Home.css';
import Intro from '../Intro';
import Skills from '../Skills/Skills';

import {Link} from 'react-router-dom';
import {Box, Grid} from '@chakra-ui/react';
import {Container} from '@chakra-ui/react';

const Home = () => {
	return (
		<Container maxW='1240px'>
			<Intro nombre='Noe' />
			<Skills />
		</Container>
	);
};

export default Home;
