// Chakra imports
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Text,
    Button,
    Tr,
    Th,
    Td,
    Flex,
    useColorModeValue,
    TableCaption,
    TableContainer,
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
  } from '@chakra-ui/react'
  import { ViewIcon } from '@chakra-ui/icons'
import { useEffect,useRef } from 'react';
import Select from 'react-select'

  // Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import React from "react";
import { tablaHistorial, tablesTableData } from "variables/general";

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  /** */
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [size, setSize] = React.useState('md')
/** */
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
              Historial Solicitudes
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
            <TableContainer>
                <Table size='sm'>
                    <Thead>
                    <Tr>
                        <Th>FOLIO</Th>
                        <Th>SEDE</Th>
                        <Th>FECHA SOLICITUD</Th>
                        <Th>FECHA EVENTO</Th>
                        <Th>DETALLES</Th>
                        <Th>CAPTURISTA</Th>
                        <Th>ESTATUS</Th>
                        <Th>ACCIONES</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>QRO-1</Td>
                        <Td>Querétaro</Td>
                        <Td>25 de mayo de 2023</Td>
                        <Td>03 de junio de 2023</Td>
                        <Td>SOLICITUD DE EVENTO</Td>
                        <Td>KARLA LOPEZ</Td>
                        <Td>APROBADA</Td>
                        <Td><Button title='Detalles' leftIcon={<ViewIcon />} colorScheme='teal' variant='solid'></Button></Td>

                        
                    </Tr>
                    <Tr>
                        <Td>QRO-2</Td>
                        <Td>Querétaro</Td>
                        <Td>30 de mayo de 2023</Td>
                        <Td>15 de junio de 2023</Td>
                        <Td>SOLICITUD DE EVENTO DE DESLINDE<br></br> EN ETAPA 11 DE CMQ PARA EL 15 DE JUNIO</Td>
                        <Td>KARLA LOPEZ</Td>
                        <Td>APROBADA</Td>
                        <Td><Button title='Detalles' leftIcon={<ViewIcon />} colorScheme='teal' variant='solid'></Button></Td>
                        
                        
                    </Tr>
                    <Tr>
                        <Td>QRO-3</Td>
                        <Td>Querétaro</Td>
                        <Td>18 de mayo de 2023</Td>
                        <Td>01 de junio de 2023</Td>
                        <Td>SOLICITUD DE EVENTO</Td>
                        <Td>KARLA LOPEZ</Td>
                        <Td>SOLICITUD ENTREGADA	</Td>
                        <Td><Button title='Detalles' leftIcon={<ViewIcon />} colorScheme='teal' variant='solid'></Button></Td>
                        
                    </Tr>
                    </Tbody>
                    <Tfoot>
                    <Tr>
                        <Th>FOLIO</Th>
                        <Th>SEDE</Th>
                        <Th>FECHA SOLICITUD</Th>
                        <Th>FECHA EVENTO</Th>
                        <Th>DETALLES</Th>
                        <Th>CAPTURISTA</Th>
                        <Th>ESTATUS</Th>
                        <Th>ACCIONES</Th>
                    </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
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

export default Tables;
