import {
    Input,
    Text,
    FormLabel,
    FormControl,
    SimpleGrid,
    Grid,
  } from "@chakra-ui/react";
const FormComplemento = () => {

    return(
            <>
                <Grid style={{display:'flex'}} mt='15px'>
                    <div className="container" style={{padding:0}}>
                        <div className="row">
                        <div className="col-lg-3">
                                <Text mb='8px'>Lugar del evento</Text>
                                <Input name="lugar" id="lugar" htmlSize={4}  />
                            </div>
                            <div className="col-lg-3">
                            <Text  mb='8px'>Fecha del evento</Text>
                            <Input
                                    placeholder="Selecciola fecha de inicio"
                                    size="md"
                                    type="datetime-local"
                                    name="fecha" id="fecha"
                                    />
                            </div>
                            <div className="col-lg-1">   
                            <Text mb='8px'>Inicio</Text>
                            <Input name="inicio" id="inicio" htmlSize={4}  />
                            </div>
                            
                            
                                <div className="col-lg-1">
                                <Text mb='8px'>Hora fin</Text>
                            <Input name="fin" id="fin" htmlSize={4}  />
                                </div>
                            <div className="col-lg-2">
                                <Text mb='8px'>Invitados</Text>
                                <Input name="invitados" id="invitados" htmlSize={4}  />
                            </div>
                            <div className="col-lg-2">
                            <Text mb='8px'>Asesores</Text>
                            <Input name="asesores" id="asesores" htmlSize={4}  />
                            </div>
                        </div>
                    </div>
                </Grid>
            </>
    );
}

export default FormComplemento;