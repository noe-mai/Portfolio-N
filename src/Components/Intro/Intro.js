import React from 'react';
import './Intro.css';
import img from './nn.png';
import {Image} from '@chakra-ui/react';
import {Box, Grid} from '@chakra-ui/react';
import {Avatar, AvatarBadge, AvatarGroup} from '@chakra-ui/react';

const Intro = ({nombre}) => {
	return (
		<div>
			<h1>{nombre}</h1>
			<img src={img} className='foto' alt='foto noe'></img>
			<p>blablablabla</p>
		</div>
	);
};

export default Intro;
