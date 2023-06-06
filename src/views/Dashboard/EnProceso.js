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
  InputGroup,
  Input ,
  InputRightElement
} from "@chakra-ui/react";
import { DownloadIcon,DragHandleIcon,StarIcon,CalendarIcon,InfoOutlineIcon,QuestionIcon,TimeIcon,ChatIcon } from '@chakra-ui/icons'
import { useEffect,useRef } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
// Custom components
 import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import React from "react";
import { tablaProceso, tablesTableData } from "variables/general";

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [size, setSize] = React.useState('md')
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Button onClick={onOpen}>ver solicitud</Button>
      <Card
        my="22px"
        overflowX={{ sm: "scroll", xl: "hidden" }}
        pb="0px"
      >
        <CardHeader p="6px 0px 22px 0px">
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
             Solicitudes en proceso
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px">
                <Th pl="0px" color="gray.400" borderColor={borderColor}>Folio</Th>
                <Th color="gray.400" borderColor={borderColor}>Sede</Th>
                <Th color="gray.400" borderColor={borderColor}>Solicitante</Th>
                <Th color="gray.400" borderColor={borderColor}>Fecha solicitud</Th>
                <Th color="gray.400" borderColor={borderColor}>Fecha entrega</Th>
                <Th color="gray.400" borderColor={borderColor}>Detalles</Th>
                <Th color="gray.400" borderColor={borderColor}>Progreso</Th>
                <Th color="gray.400" borderColor={borderColor}>Estatus</Th>

                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablaProceso.map((row, index, arr) => {
                return (
                  <TablesProjectRow
                     folio={row.folio}
                    sede={row.sede}
                    solicitante={row.solicitante}
                    fecha_solicitud={row.fecha_solicitud}
                    fecha_entrega={row.fecha_entrega}
                    detalles={row.detalles}
                    progreso={row.progreso}
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
                    <ModalHeader>INFORMACIÓN DE LA SOLICITUD</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Tabs>
  <TabList>
    <Tab>INFORMACIÓN</Tab>
    <Tab>OBSERVACIONES</Tab>
    <Tab>HISTORIAL</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
             <div className="container">
                          <div className="row">
                              <div className="col-lg-12 text-end">
                              <Button title='Detalles' leftIcon={<DownloadIcon />} colorScheme='teal' variant='solid'>Descargar PDF</Button>
                              </div>
                              <div className="col-lg-6" fontSize='xs'>
                                <p fontSize='xs'><DragHandleIcon></DragHandleIcon> FOLIO: QRO35</p>
                                <p fontSize='xs'><CalendarIcon></CalendarIcon> CREACIÓN: 2019-07-22 16:00:00</p>
                                <p><StarIcon></StarIcon> SOLICITANTE: ANA LILIA HERNÁNDEZ</p>
                                <p><InfoOutlineIcon></InfoOutlineIcon> SEDE: Querétaro</p>
                              </div>
                              <div className="col-lg-6" fontSize='xs'>
                                  <p><InfoOutlineIcon></InfoOutlineIcon> LUGAR EVENTO: Casa club del condominio Olmo en CMQ</p>
                                  <p><CalendarIcon></CalendarIcon>  FECHA EVENTO: 2019-07-26</p>
                                  <p><TimeIcon></TimeIcon> HORARIO 12:00 - 18:00</p>
                                  <p><QuestionIcon></QuestionIcon> INVITADOS: 55 </p>
                              </div>

                              <p><b>DESCRIPCIÓN GENERAL:</b>Se realiza el evento para llevar a algunos prospectos y que vivan el concepto Ciudad Maderas y poder concretar unas ventas</p>

                                <b>REQUERIMIENTOS:</b>
                                <p>SIN DATOS REQUERIDOS</p>
                          </div>
               </div>  
    </TabPanel>
    <TabPanel>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='COMENTAR'
            />
            <InputRightElement width='7.1rem'>
              <Button title="Comentar" leftIcon={<ChatIcon />} h='2.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Comentar'}
              </Button>
            </InputRightElement>
          </InputGroup>
    </TabPanel>
    <TabPanel>
      <h6>HISTORIAL DE MOVIMIENTOS</h6>
      <p className="text-warning">SIN MOVIMIENTOS REALIZADOS</p>
    </TabPanel>
  </TabPanels>
</Tabs>
                      
                        
                    </ModalBody>

                    <ModalFooter>
                    
                        <Button onClick={onClose}>Cerrar</Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
    </Flex>

);
  
 
}

export default Tables;
