// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import BgSignUp2 from "assets/img/ciudadmaderas.webp";
import logoCM from "assets/img/logo_CM.png"
import React from "react";

function SignUp() {
  return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'
      fontFamily={'Red Hat Display'}
      >
      <Box
        position='absolute'
        h={{ md: "100vh" }}
        w={{ md: "100%" }}
        left='0'
        right='0'
        bgRepeat='no-repeat'
        overflow='hidden'
        zIndex='-1'
        top='0'
        bgImage={BgSignUp}
        bgSize='cover'
        mx={{ md: "auto" }}
        mt={{ md: "0px" }}>
        <Box w='100vw' h='100vh' bg='white' opacity='0.8'></Box>
      </Box>
      <Flex alignItems='center' justifyContent='center' mt='125px'>
        <Flex
          direction='column'
          w='500px'
          background='transparent'
          borderRadius='15px'
          p='40px'
          mx={{ base: "100px" }}>
          <Box bgImage={logoCM} w={{ md: "100%" }} h={{ md: "10vh" }} bgSize='contain' bgRepeat='no-repeat' mb='45px'>
          </Box>
          <FormControl color='negro'>
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Usuario
            </FormLabel>
            <Input
              variant='auth'
              fontSize='sm'
              ms='4px'
              type='text'
              placeholder='Tu usuario'
              mb='24px'
              size='lg'
              borderRadius='27px'
              style={{backgroundColor: '#65656557'}}
              border='none'
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Contraseña
            </FormLabel>
            <Input
              variant='auth'
              fontSize='sm'
              ms='4px'
              type='password'
              placeholder='Tu contraseña'
              mb='24px'
              size='lg'
              borderRadius='27px'
              style={{backgroundColor: '#65656557'}}
              border='none'
            />
            <FormControl display='flex' alignItems='center' mb='24px' justifyContent={"space-between"}>
              <FormControl display='flex' alignItems='center'>
                <Switch id='remember-login' colorScheme='blue' me='10px'/>
                <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal'>
                  Recuerdame
                </FormLabel>
              </FormControl>
              <FormControl textAlign='right'>
                Olvidé mi contraseña
              </FormControl>
            </FormControl>
            <Button
              fontSize='sm'
              variant='dark'
              fontWeight='bold'
              w='100%'
              h='45'
              mb='24px'
              href="../views/Dashboard/Dashboard"
              borderRadius='27px'>
              Iniciar
            </Button>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;