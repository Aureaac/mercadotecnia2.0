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
  useColorModeValue
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesEjecutivasRow from "components/Tables/TablesEjecutivasRow";
import React from "react";
import { tablaEjecutivas, tablesTableData } from "variables/general";

function Ejecutivas() {
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
             Ejecutivas
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px">
                <Th pl="0px" color="gray.400" borderColor={borderColor}>ID</Th>
                <Th color="gray.400" borderColor={borderColor}>Nombre</Th>
                <Th color="gray.400" borderColor={borderColor}>Subdirección</Th>
                <Th color="gray.400" borderColor={borderColor}>Área</Th>
                <Th color="gray.400" borderColor={borderColor}>Sede</Th>
                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablaEjecutivas.map((row, index, arr) => {
                return (
                  <TablesEjecutivasRow
 
                    id_ejecutiva={row.id_ejecutiva}
                    nombre={row.nombre}
                    subdireccion={row.subdireccion}
                    area={row.area}
                    sede={row.sede}
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


 
    </Flex>

);
  
 
}

export default Ejecutivas;
