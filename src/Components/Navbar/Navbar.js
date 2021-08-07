import React from 'react';
import './Navbar.css';
import {Box, Grid} from '@chakra-ui/react';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
} from '@chakra-ui/react';

const Navbar = () => {
	return (
		<div>
			<Breadcrumb separator='-'>
				<BreadcrumbItem>
					<BreadcrumbLink href='/'>Home</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink href='/intro'>Sobre mi</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink href='/proyectos'>Proyectos</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink href='/contacto'>Contact</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
			<Box
				w='100%'
				h='200px'
				bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'
			/>
		</div>
	);
};

export default Navbar;
