import React from "react";
import {
  Tr,
  Td,
  Text,
  Icon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";

function DashboardTableRow(props) {
  const {id, nombre, correo, puesto, sede, jefe_directo, estatus,isLast} = props;
  const textColor = useColorModeValue("gray.500", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Tr>
      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="sm" color={textColor} fontWeight="bold" pb=".5rem">
          {id}
        </Text>
      </Td>

      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="sm" color={textColor} fontWeight="bold" pb=".5rem">
          {nombre}
        </Text>
      </Td>
      
      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="sm" color={textColor} fontWeight="bold" pb=".5rem">
          {correo}
        </Text>
      </Td>
 
      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="sm" color={textColor} fontWeight="bold" pb=".5rem">
          {puesto}
        </Text>
      </Td>

      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="sm" color={textColor} fontWeight="bold" pb=".5rem">
          {sede}
        </Text>
      </Td>
     
      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="sm" color={textColor} fontWeight="bold" pb=".5rem">
          {jefe_directo}
        </Text>
      </Td>

      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="sm" color={textColor} fontWeight="bold" pb=".5rem">
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
