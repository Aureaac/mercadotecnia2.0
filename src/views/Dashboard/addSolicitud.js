// Chakra imports

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
import FormComplemento from "./FormComplemento";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React, { useState,useEffect } from "react"; 
import {
    Flex,
    FormControl,
    FormLabel,
    Heading,
    SimpleGrid,
    Grid,
    Button,
    Input,
    Text,
    useColorMode,
    Textarea,
    useColorModeValue,
  } from "@chakra-ui/react";
  import 'bootstrap/dist/css/bootstrap.css';
  import Select from 'react-select'

import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaPenFancy,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import { tablaHistorial } from "variables/general";
function addSolicitud(props) {

  console.log(props)
  const { colorMode } = useColorMode();

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const iconColor = useColorModeValue("blue.500", "white");
  const bgProfile = useColorModeValue("hsla(0,0%,100%,.8)", "navy.800");
  const borderProfileColor = useColorModeValue("white", "transparent");
  const emailColor = useColorModeValue("gray.400", "gray.300");

  const optionsEventos = [
    { value: 'Valet parking', label: 'Valet parking',id:1 },
    { value: 'Meseros', label: 'Meseros',id:2  },
    { value: 'Edecanes', label: 'Edecanes',id:3  },
    { value: 'Maestro de ceremonia', label: 'Maestro de ceremonia',id:4  },
    { value: 'Bocinas', label: 'Bocinas',id:5  },

  ]
  const optionsMaterial = [
    { value: 'Plumas', label: 'Plumas',id:50  },
    { value: 'Encendedor', label: 'Encendedor',id:51  },
    { value: 'Pelotas antiestrés', label: 'Pelotas antiestrés',id:52  },
    { value: 'Toallas', label: 'Toallas',id:53  },
    { value: 'Botellas de agua', label: 'Botellas de agua',id:54  },

  ]
  let [descripcion, setDescripcion] = useState('')
  const [selectedOptions, setSelectedOptions] = useState([]);

  

  const [values, setValues] = useState({
    folio: "EVENTO-007",
    sede: "Querétero",
    solicitante: "Joe Baiden",
    fecha_solicitud: "02 Jun 2023",
    fecha_entrega: "",
    detalles: '',
    progreso: 10,
    estatus: "Nueva",
    accion:""
  });

  function handleChange(evt) {
         setValues({
          ...values,
          [evt.target.name] : evt.target.value
      })
   console.log(evt.target.name)

  }
    function handleSelect(data) {
      setSelectedOptions(data);

      console.log(selectedOptions);
    }
  
  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setDescripcion(inputValue)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values)
    tablaHistorial.push(values)
   
}
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  return (
    <form onSubmit={handleSubmit}>
    <Flex direction='column' pt={{ base: "120px", md: "75px", lg: "100px" }}>
 
      <Grid templateColumns={{ sm: "12fr", xl:  "12fr" }} gap='22px'>
        <Card p='16px'>
          <CardHeader p='12px 5px' mb='12px'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Crear una nueva solicitud
            </Text>
          </CardHeader>
          <CardBody px='5px'>
            <Flex direction='column'>
            <SimpleGrid spacing={60} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
              <Card>
                <CardHeader>
                  <Heading size='md'>Fecha de solicitud</Heading>
                </CardHeader>
                <CardBody>
                  <Text>{hoy.toLocaleDateString()}</Text>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size='md'>Solicitante </Heading>
                </CardHeader>
                <CardBody>
                  <Text>Usuario</Text>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size='md'> Sede</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Querétaro</Text>
                </CardBody>
              </Card>
            </SimpleGrid>
        

            <Text mb='8px'>DESCRIPCIÓN GENERAL Y/O DEPÓSITO</Text>
            <Textarea
              
              onChange={handleChange}
              placeholder='DESCRIPCIÓN GENERAL Y/O DEPÓSITO'
              size='sm'
              id="detalles"
              name="detalles"
            />
            {/*<inpu type="hidden" name="solicitante" id="solicitante" value="Joe Baiden"></inpu>
            <inpu type="hidden" name="fecha_solicitud" id="fecha_solicitud" value="02 Jun 2023"></inpu>*/}
            <Card spacing={60} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'> 
              <FormComplemento></FormComplemento>
            </Card>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-3">
                        <Text mb='8px'>NECESIDADES DEL EVENTO</Text>
                        <Select name="necesidades" id="necesidades" isMulti options={optionsEventos} value={selectedOptions} onChange={handleSelect} />
                      </div>
                      <div className="col-lg-9" key="elementos">
                          <div className="container">
                            <div className="row">
                                  {
                                    selectedOptions.map((item,index) => (
                                      <div className="col-lg-4">
                                        <Card key={item[index]}>
                                          <Text mb='8px'>Ingresar datos para {item.value}</Text>
                                          <Input name={'detalle_'+index} id={'detalle_'+index} htmlSize={4} placeholder="detalles a considerar"  />
                                          <Text mb='8px'>{item[index]}</Text>
                                          <Input name={'cantidad_'+index} id={'cantidad_'+index} htmlSize={4} placeholder="Cantidad"  />
                                        </Card>
                                      </div>                                      
                                    ))
                                  }
                            </div>
                          </div>
                           
                      </div>
                  </div>
              </div><br></br><br></br>
                      <div className="row">
                      <button type="submit" className="btn btn-info">Guardar</button>
                      </div>

                           

            </Flex>
          </CardBody>
        </Card>
        
      </Grid>
    </Flex>
    </form>
  );
}

export default addSolicitud;
