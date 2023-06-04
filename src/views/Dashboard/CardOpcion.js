import {
    Input,
    Text,
    FormLabel,
    FormControl,
    SimpleGrid,
    Grid,
  } from "@chakra-ui/react";
const CardOpcion = () => {

    return(
            <>
           
                    <Grid style={{display:'flex'}} >
                        <div className="container">
                            <div className="row">
                            <div className="col-lg-3">
                                    <Text mb='8px'>Lugar del evento</Text>
                                    <Input htmlSize={4}  />
                                </div>
                                <div className="col-lg-3">
                                <Text mb='8px'>Fecha del evento</Text>
                                <Input
                                        placeholder="Selecciola fecha de inicio"
                                        size="md"
                                        type="datetime-local"
                                        />
                                </div>
                                <div className="col-lg-1">   
                                <Text mb='8px'>Inicio</Text>
                                <Input htmlSize={4}  />
                                </div>
                                
                                
                                    <div className="col-lg-1">
                                    <Text mb='8px'>Hora fin</Text>
                                <Input htmlSize={4}  />
                                    </div>
                                <div className="col-lg-2">
                                    <Text mb='8px'>Invitados</Text>
                                    <Input htmlSize={4}  />
                                </div>
                                <div className="col-lg-2">
                                <Text mb='8px'>Asesores</Text>
                                <Input htmlSize={4}  />
                                </div>
                            </div>
                                
                        </div>
                        
                        
                    </Grid>
                
               
            
            </>
    );
}

export default CardOpcion;