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
  const {id_ejecutiva, nombre, subdireccion, area, sede ,isLast} = props;
  const textColor = useColorModeValue("gray.500", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Tr>
      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="sm" color='#333' fontWeight="300" pb=".5rem">
          {id_ejecutiva}
        </Text>
      </Td>

      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="sm" color='#333' fontWeight="300" pb=".5rem">
          {nombre}
        </Text>
      </Td>
      
      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="sm" color='#333' fontWeight="300" pb=".5rem">
          {subdireccion}
        </Text>
      </Td>
 
      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="sm" color='#333' fontWeight="300" pb=".5rem">
          {area}
        </Text>
      </Td>

      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="sm" color='#333' fontWeight="300" pb=".5rem">
          {sede}
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
