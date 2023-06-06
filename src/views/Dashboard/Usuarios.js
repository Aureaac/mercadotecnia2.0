// Chakra imports
import {
    Flex,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    Button,
    MdBuild,
    useColorModeValue,
    useDisclosure,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  } from "@chakra-ui/react";
  // Custom components
  import Card from "components/Card/Card.js";
  import CardBody from "components/Card/CardBody.js";
  import CardHeader from "components/Card/CardHeader.js";
  import TablesUsersRow from "components/Tables/TablesUsersRow";
  import React from "react";
  import { useEffect,useRef } from 'react';
  import Select from 'react-select'

  import { tablaUsuarios, tablesTableData } from "variables/general";
  
  function Usuarios() {
    const textColor = useColorModeValue("gray.700", "white");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const [size, setSize] = React.useState('md')
    return (
      <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
        <Button onClick={onOpen}>Agregar nuevo usuario</Button>
        <Card
          my="22px"
          overflowX={{ sm: "scroll", xl: "hidden" }}
          pb="0px"
        >
          <CardHeader p="6px 0px 22px 0px">
            <Flex direction="column">
              <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
               Usuarios
              </Text>
            </Flex>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px">
                  <Th pl="0px" color="gray.400" borderColor={borderColor}>ID</Th>
                  <Th color="gray.400" borderColor={borderColor}>Nombre</Th>
                  <Th color="gray.400" borderColor={borderColor}>Correo</Th>
                  <Th color="gray.400" borderColor={borderColor}>Puesto</Th>
                  <Th color="gray.400" borderColor={borderColor}>Sede</Th>
                  <Th color="gray.400" borderColor={borderColor}>Jefe Directo</Th>
                  <Th color="gray.400" borderColor={borderColor}>Estatus</Th>
  
                  <Th>Acciones</Th>
                </Tr>
              </Thead>
              <Tbody>
                {tablaUsuarios.map((row, index, arr) => {
                  return (
                    <TablesUsersRow
   
                      id={row.id}
                      nombre={row.nombre}
                      correo={row.correo}
                      puesto={row.puesto}
                      sede={row.sede}
                      jefe_directo={row.jefe_directo}
                      estatus={row.estatus}
                      accion={<Button  colorScheme='pink' variant='solid'>
                      Settings
                    </Button>}
                      
                      isLast={index === arr.length - 1 ? true : false}
                      key={index}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </CardBody>
        </Card>
        <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                    size='lg'
                >
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Alta de usuarios </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <FormControl>
                                        <FormLabel>Nombre</FormLabel>
                                        <Input ref={initialRef} placeholder='Nombre' />
                                    </FormControl>
                                </div>
                                <div className="col-lg-6">
                                    <FormControl >
                                        <FormLabel>Apellido paterno</FormLabel>
                                        <Input placeholder='Apellido paterno' />
                                    </FormControl>
                                </div>
                                <div className="col-lg-6">
                                    <FormControl mt={4}>
                                        <FormLabel>Apellido materno</FormLabel>
                                        <Input placeholder='Apellido materno' />
                                    </FormControl>
                                </div>
                                <div className="col-lg-6">
                                    <FormControl mt={4}>
                                        <FormLabel>Correo</FormLabel>
                                        <Input placeholder='Correo' />
                                    </FormControl>
                                </div>
                                <div className="col-lg-12">
                                    <FormControl mt={4}>
                                        <FormLabel>Sede</FormLabel>
                                        <Select placeholder='SELECCIONA UNA OPCIÓN'>
                                        <option value='option1'>Querétaro</option>
                                        <option value='option2'>Ciudad de México</option>
                                        <option value='option3'>León</option>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-lg-12">
                                    <FormControl mt={4}>
                                        <FormLabel>Tipo de usuario</FormLabel>
                                        <Select placeholder='SELECCIONA UNA OPCIÓN'>
                                        <option value='option1'>Director área</option>
                                        <option value='option2'>Ejecutivo de mercadotecnia</option>
                                        <option value='option3'>Capturista</option>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-lg-12">
                                    <FormControl mt={4}>
                                        <FormLabel>Área</FormLabel>
                                        <Select placeholder='SELECCIONA UNA OPCIÓN'>
                                        <option value='option1'>ADMINMISTRACIÓN</option>
                                        <option value='option2'>SCIO</option>
                                        <option value='option3'>VENTAS</option>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-lg-6">
                                    <FormControl mt={4}>
                                        <FormLabel>Áreas</FormLabel>
                                        <Input placeholder='' disabled />
                                    </FormControl>
                                </div>
                                <div className="col-lg-6">
                                    <FormControl mt={4}>
                                        <FormLabel>Usuario</FormLabel>
                                        <Input placeholder='Usuario'  />
                                    </FormControl>
                                </div>
                                <div className="col-lg-6">
                                    <FormControl mt={4}>
                                        <FormLabel>Contraseña</FormLabel>
                                        <Input placeholder='Contraseña'  />
                                    </FormControl>
                                </div>

                                
                            
                            </div>
                        </div>
                        
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                        Guardar
                        </Button>
                        <Button onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
  
   
      </Flex>
  
  );
    
   
  }
  
  export default Usuarios;
  