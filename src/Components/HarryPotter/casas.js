import logoGryffindor from '../../Images/gryffindor.png';
import logoHufflepuff from '../../Images/hufflepuff.png';
import logoSlytherin from '../../Images/slytherin.png';
import logoRavenclaw from '../../Images/ravenclaw.png';

export const casas = [
	{
		nombre: 'Gryffindor',
		color: 'red',
		logo: logoGryffindor,
		url: '/proyectos/harry-potter/gryffindor',
	},
	{
		nombre: 'Slytherin',
		color: 'green',
		logo: logoSlytherin,
		url: '/proyectos/harry-potter/slytherin',
	},
	{
		nombre: 'Hufflepuff',
		color: 'yellow',
		logo: logoHufflepuff,
		url: '/proyectos/harry-potter/hufflepuff',
	},
	{
		nombre: 'Ravenclaw',
		color: 'blue',
		logo: logoRavenclaw,
		url: '/proyectos/harry-potter/ravenclaw',
	},
];

export function buscarCasa(casa) {
	return casas.find(({nombre}) => nombre.toLowerCase() === casa);
}
