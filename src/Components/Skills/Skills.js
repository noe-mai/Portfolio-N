import React from 'react';
import './Skills.css';

import {
	Box,
	Container,
	Center,
	Avatar,
	Flex,
	Heading,
	Text,
} from '@chakra-ui/react';

import logoHtml from '../../Images/html5.svg';
import logoCss from '../../Images/css-3.svg';
import logoJs from '../../Images/js.svg';
import logoReact from '../../Images/react.svg';
import logoPhp from '../../Images/php.svg';
import logoMsql from '../../Images/mysql.svg';

const Skills = () => {
	return (
		<Flex direction='row' align='center'>
			<Flex align='left' direction='column'>
				<Heading as='h3' size='lg' p='5'>
					Tecnologias
				</Heading>

				<Text fontSize='md'>
					{' '}
					Estas son las tecnologias que actualmente estoy aprendiendo{' '}
				</Text>
			</Flex>
			<Flex alignItems='center'>
				<Box p='10'>
					<Avatar src={logoHtml} bg='white' alt='foto lin' />
				</Box>
				<Box p='10'>
					<Avatar src={logoCss} bg='white' alt='foto lin' />
				</Box>
				<Box p='10'>
					<Avatar src={logoJs} bg='white' alt='foto lin' />
				</Box>
				<Box p='10'>
					<Avatar src={logoReact} bg='white' alt='foto lin' />
				</Box>
				<Box p='10'>
					<Avatar src={logoPhp} bg='white' alt='foto lin' />
				</Box>
				<Box p='10'>
					<Avatar src={logoMsql} bg='white' alt='foto lin' />
				</Box>
			</Flex>
		</Flex>
	);
};

export default Skills;
