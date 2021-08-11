import React from 'react';

import {Box, Avatar, Flex, Heading, Text} from '@chakra-ui/react';

import logoHtml from '../../Images/html5.svg';
import logoCss from '../../Images/css-3.svg';
import logoJs from '../../Images/js.svg';
import logoReact from '../../Images/react.svg';
import logoPhp from '../../Images/php.svg';
import logoMsql from '../../Images/mysql.svg';

const Skills = () => {
	return (
		<Flex direction={['column', 'row']} align='center' minH='20vh' p='15px'>
			<Flex align='left' direction='column'>
				<Heading as='h3' size='lg' pb='3'>
					Tecnologias
				</Heading>

				<Text fontSize='md'>
					{' '}
					Estas son las tecnologias que actualmente estoy aprendiendo{' '}
				</Text>
			</Flex>
			<Flex alignItems='center' wrap='wrap'>
				<Box w={['25%', 'auto']} p={['5px', '30px']}>
					<Avatar src={logoHtml} bg='white' alt='foto lin' />
				</Box>
				<Box w={['25%', 'auto']} p={['5px', '30px']}>
					<Avatar src={logoCss} bg='white' alt='foto lin' />
				</Box>
				<Box w={['25%', 'auto']} p={['5px', '30px']}>
					<Avatar src={logoJs} bg='white' alt='foto lin' />
				</Box>
				<Box w={['25%', 'auto']} p={['5px', '30px']}>
					<Avatar src={logoReact} bg='white' alt='foto lin' />
				</Box>
				<Box w={['25%', 'auto']} p={['5px', '30px']}>
					<Avatar src={logoPhp} bg='white' alt='foto lin' />
				</Box>
				<Box w={['25%', 'auto']} p={['5px', '30px']}>
					<Avatar src={logoMsql} bg='white' alt='foto lin' />
				</Box>
			</Flex>
		</Flex>
	);
};

export default Skills;
