import React from "react";
import {
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";

function DashboardTableRow(props) {
  const {folio,sede,solicitante,fecha_solicitud,fecha_entrega,detalles,progreso,estatus,isLast} = props;
  const textColor = useColorModeValue("gray.500", "white");
  const titleColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Tr>
      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="md" color='#333' fontWeight="300" pb=".5rem">
          {folio}
        </Text>
      </Td>

      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="md" color='#333' fontWeight="300" pb=".5rem">
          {sede}
        </Text>
      </Td>
      
      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="md" color='#333' fontWeight="300" pb=".5rem">
          {solicitante}
        </Text>
      </Td>
 
      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="md" color='#333' fontWeight="300" pb=".5rem">
          {fecha_solicitud}
        </Text>
      </Td>

      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="md" color='#333' fontWeight="300" pb=".5rem">
          {fecha_entrega}
        </Text>
      </Td>
     
      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="md" color='#333' fontWeight="300" pb=".5rem">
          {detalles}
        </Text>
      </Td>
      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Flex direction="column">
          <Text
            fontSize="md"
            color="blue.500"
            fontWeight="300"
            pb=".2rem"
          >{`${progreso}%`}</Text>
          <Progress
            colorScheme="blue"
            size="xs"
            value={progreso}
            borderRadius="15px"
          />
        </Flex>
      </Td >
      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="md" color='#333' fontWeight="300" pb=".5rem">
          {estatus}
        </Text>
      </Td>
       

      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Button p="0px" bg="transparent" variant="no-effects">
          <Icon as={FaEllipsisV} color="gray.400" cursor="pointer" />
        </Button>
      </Td>
    </Tr>
  );
}

export default DashboardTableRow;
