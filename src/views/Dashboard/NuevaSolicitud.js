// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  Select,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar6 from "assets/img/avatars/avatar6.png";
import ImageArchitect1 from "assets/img/ImageArchitect1.png";
import ImageArchitect2 from "assets/img/ImageArchitect2.png";
import ImageArchitect3 from "assets/img/ImageArchitect3.png";
// Custom components
import { Input } from "@chakra-ui/react"
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";
import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaPenFancy,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";

function Profile() {
  const { colorMode } = useColorMode();

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const iconColor = useColorModeValue("blue.500", "white");
  const bgProfile = useColorModeValue("hsla(0,0%,100%,.8)", "navy.800");
  const borderProfileColor = useColorModeValue("white", "transparent");
  const emailColor = useColorModeValue("gray.400", "gray.300");

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px", lg: "100px" }}>
 
      <Grid templateColumns={{ sm: "12fr", xl:  "12fr" }} gap='22px'>
        <Card p='16px'>
          <CardHeader p='12px 5px' mb='12px'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Crear una nueva solicitud
            </Text>
          </CardHeader>

          <form>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <button>Submit</button>
    </form>


          <CardBody px='5px'>
            <Flex direction='column'>
              <Text fontSize='sm' color='gray.400' fontWeight='600' mb='20px'>
                Tipo de orden
              </Text>
              <Input placeholder="small size" size="md" />
              <Select>
                <option value="someOption" disabled selected>Selecciona una opción</option>
                <option value="otherOption">Material</option>
                <option value="otherOption">Evento</option>
                </Select>
              <Flex align='center' mb='20px'>
                <Switch colorScheme='blue' me='10px' />
                <Text
                  noOfLines={1}
                  fontSize='md'
                  color='gray.400'
                  fontWeight='400'>
                  Email me when someone follows me
                </Text>
              </Flex>
              <Flex align='center' mb='20px'>
                <Switch colorScheme='blue' me='10px' />
                <Text
                  noOfLines={1}
                  fontSize='md'
                  color='gray.400'
                  fontWeight='400'>
                  Email me when someone answers on my post
                </Text>
              </Flex>
              <Flex align='center' mb='20px'>
                <Switch colorScheme='blue' me='10px' />
                <Text
                  noOfLines={1}
                  fontSize='md'
                  color='gray.400'
                  fontWeight='400'>
                  Email me when someone mentions me
                </Text>
              </Flex>
              <Text
                fontSize='sm'
                color='gray.400'
                fontWeight='600'
                m='6px 0px 20px 0px'>
                APPLICATION
              </Text>
              <Flex align='center' mb='20px'>
                <Switch colorScheme='blue' me='10px' />
                <Text
                  noOfLines={1}
                  fontSize='md'
                  color='gray.400'
                  fontWeight='400'>
                  New launches and projects
                </Text>
              </Flex>
              <Flex align='center' mb='20px'>
                <Switch colorScheme='blue' me='10px' />
                <Text
                  noOfLines={1}
                  fontSize='md'
                  color='gray.400'
                  fontWeight='400'>
                  Monthly product changes
                </Text>
              </Flex>
              <Flex align='center' mb='20px'>
                <Switch colorScheme='blue' me='10px' />
                <Text
                  noOfLines={1}
                  fontSize='md'
                  color='gray.400'
                  fontWeight='400'>
                  Subscribe to newsletter
                </Text>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Flex>
  );
}

export default Profile;
