import React from 'react';
import './Home.css';
import Intro from '../Intro/Intro';
import {Box, Grid} from '@chakra-ui/react';

const Home = () => {
	return (
		<div className='home'>
			<Intro />
		</div>
	);
};

export default Home;
