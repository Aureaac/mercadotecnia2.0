// Chakra imports
import {
    Table,
    Thead,
    Tbody,
    Text,
    Button,
    Icon,
    Tr,
    Th,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import { FaEye } from "react-icons/fa";
import { useRef } from 'react';

  // Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import React from "react";
import { tablaHistorial2 } from "variables/general";
import TablesProjectRow from "components/Tables/TablesProjectRow";


function Tables() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  /** */
  
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [size, setSize] = React.useState('md')
/** */
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      
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
                <Th color="gray.400" borderColor={borderColor}>Fecha solicitud</Th>
                <Th color="gray.400" borderColor={borderColor}>Fecha entrega</Th>
                <Th color="gray.400" borderColor={borderColor}>Detalles</Th>
                <Th color="gray.400" borderColor={borderColor}>Capturista</Th>
                <Th color="gray.400" borderColor={borderColor}>Progreso</Th>
                <Th color="gray.400" borderColor={borderColor}>Estatus</Th>
                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablaHistorial2.map((row, index, arr) => {
                return (
                  <TablesProjectRow
                    folio={row.folio}
                    sede={row.sede}
                    fecha_solicitud={row.fecha_solicitud}
                    fecha_entrega={row.fecha_entrega}
                    detalles={row.detalles}
                    capturista={row.capturista}
                    progreso={row.progreso}
                    estatus={row.estatus}
                    accion={
                      <Button p="0px" bg="transparent" variant="no-effects">
                        <Icon as={FaEye} color="gray.400" cursor="pointer" />
                      </Button>
                    }
                    isLast={index === arr.length - 1 ? true : false}
                    key={index}
                      />
                );
              })}
            </Tbody>
            </Table>
        </CardBody>
      </Card>
                
    </Flex>
  );
}

export default Tables;
