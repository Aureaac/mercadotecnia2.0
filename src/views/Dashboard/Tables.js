// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from "@chakra-ui/react";
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
                <Th color="gray.400" borderColor={borderColor}>Solicitante</Th>
                <Th color="gray.400" borderColor={borderColor}>Fecha solicitud</Th>
                <Th color="gray.400" borderColor={borderColor}>Fecha entrega</Th>
                <Th color="gray.400" borderColor={borderColor}>Detalles</Th>
                <Th color="gray.400" borderColor={borderColor}>Progreso</Th>
                <Th color="gray.400" borderColor={borderColor}>Estatus</Th>

                <Th></Th>
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
