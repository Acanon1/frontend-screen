import React from "react";
import { Form, Button, FloatingLabel, FormControl } from "react-bootstrap"
import { ListGroup,Row, Col  } from 'react-bootstrap'

const Leftside = (props) => {
    return <Form>
        <Form.Group>
            <Form.Label>Ciclos:</Form.Label>
            <FloatingLabel
        controlId="floatingInput" className="mb-2">
        <Form.Control type="inputciclos" />
      </FloatingLabel>
      <Button variant="success"
                    className="mb-2">
                    +
                    </Button>
      
    <ListGroup as="ul">
      <ListGroup.Item as="li">
   
            
            {
                    props.ciclos.map((ciclo) => {
                        return <div>
                            { ciclo.numero } 
                        
                         <Button variant="success"
                         className="m-2">
                         Delete
                         </Button> </div>
                    
                    }) 
                
                }

      </ListGroup.Item>
      </ListGroup>

        </Form.Group>
    </Form>
    

}
export default Leftside