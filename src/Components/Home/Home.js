import React from 'react';
import Intro from '../Intro';
import Skills from '../Skills/Skills';

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
