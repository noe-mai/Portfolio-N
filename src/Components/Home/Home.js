import React from 'react';
import './Home.css';
import Intro from '../Intro/Intro';
import {Link} from 'react-router-dom';
import {Box, Grid} from '@chakra-ui/react';
import {Container} from '@chakra-ui/react';

const Home = () => {
	return (
		<Container maxW='container.xl'>
		<Box padding="10" bg="pink" maxW="10xl">
        There are many benefits to a joint design and development system. Not only
        does it bring benefits to the design team.
        </Box>
		</Container>
	);
};

export default Home;
