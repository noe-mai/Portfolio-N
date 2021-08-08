import React, {useState} from 'react';
import './Contacto.css';
import {Box, Divider, Grid} from '@chakra-ui/react';

const Contacto = () => {
let mail = 'noelia.s.maiquez@gmail.com';
const [info, setInfo] = useState('');

return <div>
<h3> {info} </h3>
<button onClick={() => setInfo(mail)}>Mostrar mail</button>



</div>;
};

export default Contacto;
