import React from 'react';
import './Home.css';
import Intro from '../Intro/Intro';
import {Link} from 'react-router-dom';
import {Box, Grid} from '@chakra-ui/react';
import {Container} from '@chakra-ui/react';

const Home = () => {
	return (
		<Container maxW='container.xl'>
			<Box w='100%'>
				<Intro nombre='Noe' />
			</Box>
		</Container>
	);
};

export default Home;
