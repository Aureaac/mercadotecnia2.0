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
} from "@chakra-ui/react";
import { ViewIcon } from '@chakra-ui/icons'

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import {useRef} from "react";
import React from "react";
import { tablaHistorial, tablesTableData } from "variables/general";

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [size, setSize] = React.useState('md')
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
              Historial Solicitudes
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
              {tablaHistorial.map((row, index, arr) => {
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
                       
                        
                    </ModalBody>

                    <ModalFooter>
                    <Button title='Detalles' leftIcon={<ViewIcon />} colorScheme='teal' variant='solid'></Button>
                        <Button onClick={onClose}>Cerrar</Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
    </Flex>
  );
}

export default Tables;
