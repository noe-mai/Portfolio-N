import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Avatar, Box, Flex, Center, Heading} from '@chakra-ui/react';

const House = () => {
	const {house} = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [personajes, setPersonajes] = useState([]);

	useEffect(() => {
		fetch(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
			.then((response) => response.json())
			.then((data) => {
				setPersonajes(data);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <Center h={'300px'}>Loading...</Center>;
	}

	return (
		<Box p={['5px', '30px']} alignItems='center'>
			<Heading>{house}</Heading>
			<Flex flexWrap='wrap' alignItems='center' direction={['column', 'row']}>
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
							</Flex>
						</Flex>
					</Box>
				))}
			</Flex>
		</Box>
	);
};

export default House;
