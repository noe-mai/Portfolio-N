import React, {useState, useEffect} from 'react';
import {extendTheme} from '@chakra-ui/react';
import {createBreakpoints} from '@chakra-ui/theme-tools';

import {
	Avatar,
	Box,
	Flex,
	Container,
	Center,
	useMediaQuery,
} from '@chakra-ui/react';

const HarryPotter = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [personajes, setPersonajes] = useState([]);
	const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

	useEffect(() => {
		fetch('http://hp-api.herokuapp.com/api/characters')
			.then((response) => response.json())
			.then((personajes) => {
				setPersonajes(personajes);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <Center h={'300px'}>Loading...</Center>;
	}

	return (
		<Box p={['5px', '30px']} alignItems='center'>
			<Flex
				flexWrap='wrap'
				alignItems='center'
				Flex
				direction={['column', 'row']}
			>
				{personajes.map(({name, image, species, house}) => (
					<Box
						p='20px'
						w={['100%', '100%', '50%', '50%', '25%']}
						key={name}
						borderWidth='5px'
						borderRadius='lg'
						bgGradient='linear(to-r,gray.300,yellow.400,pink.200)'
					>
						<Flex>
							<Avatar src={image} alt={name} size='2xl' />
							<Flex ml='20px' direction='column' justify='center'>
								<Box mt='2' fontWeight='semibold' as='h4'>
									{' '}
									{name}{' '}
								</Box>
								<p> {species} </p>
								<p> {house} </p>
							</Flex>
						</Flex>
					</Box>
				))}
			</Flex>
		</Box>
	);
};

export default HarryPotter;
