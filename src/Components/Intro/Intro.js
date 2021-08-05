import React from "react";
import "./Intro.css";
import img from "./nn.png";
import { Image } from "@chakra-ui/react";
import { Box, Grid } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"

const Intro = () => {
return (
<Box boxSize="sm">
  <Image src="../Images/n.png" alt="Aca hay una illustacion" />
<img src = {img} className = "img"></img>
</Box>


);

}

export default Intro;