import React from 'react';
import './Skills.css';

import {Divider, Box, Container, Center} from '@chakra-ui/react';

const Skills = () => {
	return (
		<Container>
			<div className='icons'>
				<Center height='50px'>
					<Divider orientation='vertical' />
				</Center>
				<h3>Mis Skills</h3>
			</div>
		</Container>
	);
};

export default Skills;
