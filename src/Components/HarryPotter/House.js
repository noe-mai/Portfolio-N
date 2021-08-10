import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Text, Heading} from '@chakra-ui/react';

const House = () => {
	const {house} = useParams();
	const [casa, setCasa] = useState([]);

	useEffect(() => {
		fetch(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
			.then((response) => response.json())
			.then((casa) => {
				setCasa(casa);
			});
	}, []);

	return (
		<div>
			Pagina de la Casa
			<Text color='teal' align='center'>
				{house}
			</Text>
		</div>
	);
};

export default House;
