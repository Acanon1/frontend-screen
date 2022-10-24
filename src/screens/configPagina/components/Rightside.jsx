import React from "react";
import { Form, Button } from "react-bootstrap"
import { FloatingLabel } from "react-bootstrap";
import { ListGroup,Row, Col  } from 'react-bootstrap'

const Rightside = (props) => {
    return <Form>
    <Form.Group>
        <Form.Label>Carrera</Form.Label>
        <FloatingLabel
        controlId="floatingInput" className="mb-2">
        <Form.Control type="inputcursos" />
      </FloatingLabel>
      <Button variant="success"
                    className="mb-2">
                    +
                    </Button>
                    <ListGroup as="ul">
      <ListGroup.Item as="li">
   
            
            {
                    props.cursos.map((cursos) => {
                        return <div>
                            { cursos.nombre } 
                        
                         <Button variant="success"
                         className="m-2">
                         Delete
                         </Button>
                         <Button variant="success" 
                         className=" m-2">
                         Editar
                         </Button> </div>
                    
                    }) 
                
                }

      </ListGroup.Item>
      </ListGroup>
    </Form.Group>
</Form>

}
export default Rightside