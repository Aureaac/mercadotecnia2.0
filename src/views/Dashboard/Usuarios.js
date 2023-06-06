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
  import TablesUsersRow from "components/Tables/TablesUsersRow";
  import React from "react";
  import { tablaUsuarios, tablesTableData } from "variables/general";
  
  function Usuarios() {
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
  
  
   
      </Flex>
  
  );
    
   
  }
  
  export default Usuarios;
  