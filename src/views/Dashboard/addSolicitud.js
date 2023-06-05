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
    descripcion: '',
  });

  function handleChange(evt) {
    /*
      evt.target es el elemento que ejecuto el evento
      name identifica el input y value describe el valor actual
    */
    

    /*
      Este snippet:
      1. Clona el estado actual
      2. Reemplaza solo el valor del
         input que ejecutó el evento
    */
         setValues({
          ...values,
          [evt.target.name] : evt.target.value
      })
   console.log(evt.target.name)

  }
  //useEffect(() => {
    function handleSelect(data) {
      setSelectedOptions(data);
     // setSelectedOptions(selectedOptions => [...selectedOptions, data]);

      console.log(selectedOptions);
    }
  //},[selectedOptions]);
  
  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setDescripcion(inputValue)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values)
   
}
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  return (
    <form onSubmit={handleSubmit}>
    <Flex direction='column' pt={{ base: "120px", md: "75px", lg: "100px" }}>
 
      <Grid templateColumns={{ sm: "12fr", xl:  "12fr" }} gap='22px'>
        <Card p='40px'>
          <CardHeader p='12px 5px' mb='12px'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Crear una nueva solicitud
            </Text>
          </CardHeader>
          <CardBody px='5px'>
            <Flex direction='column'>
              <SimpleGrid spacing={60} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                <div>
                  <CardHeader>
                    <Heading size='sm' fontWeight='500' mb='6px'>Fecha de solicitud</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text >{hoy.toLocaleDateString()}</Text>
                  </CardBody>
                </div>
                <div>
                  <CardHeader>
                    <Heading size='sm' fontWeight='500' mb='6px'>Solicitante </Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>Usuario</Text>
                  </CardBody>
                </div>
                <div>
                  <CardHeader>
                    <Heading size='sm' fontWeight='500' mb='6px'> Sede</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>Sede actual</Text>
                  </CardBody>
                </div>
              </SimpleGrid>
        
              <Text fontSize='lg' color={textColor} fontWeight='bold' mt="16px">Descripción general y/o depósito</Text>
              <Textarea
              onChange={handleChange}
              placeholder='Descripción'
              size='sm'
              id="descripcion"
              name="descripcion"
              resize='none'/>

              <FormComplemento></FormComplemento>
              <div className="container" style={{padding:0, marginTop: '15px'}}>
                <div className="row">
                  <div className="col-lg-12">
                    <Text mb='8px'>Necesidades del evento</Text>
                    <Select name="necesidades" id="necesidades" isMulti options={optionsEventos} value={selectedOptions} onChange={handleSelect}/>
                  </div>
                  
                    {
                      selectedOptions.map((item,index) => (
                        <div className="col-lg-12" key="elementos">
                          <Text mt='15px' mb='8px'>Ingresar datos para {item.value}</Text>
                          <div style={{display:'flex', justifyContent:'space-between'}}>
                            <Input name={'detalle_'+index} id={'detalle_'+index} htmlSize={4} placeholder="detalles a considerar" style={{width:'80%'}}/>
                            <Text mb='8px'>{item[index]}</Text>
                            <Input name={'cantidad_'+index} id={'cantidad_'+index} htmlSize={4} placeholder="Cantidad"  style={{width:'19%'}}/>
                          </div>
                        </div>                                      
                      ))
                    }
                  <div className="col-lg-10">
                  </div>
                  <div className="col-lg-2" style={{marginTop:"15px"}}>
                    <button type="submit" className="btn btn-info" style={{width:'100%', backgroundColor:'#B4A46C', border:'none', color:'white', borderRadius:'27px'}}>Guardar</button>
                  </div>
                </div>
              </div>
              <div className="row">
                
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
