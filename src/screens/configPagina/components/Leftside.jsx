import React from "react";
import { Form, Button } from "react-bootstrap"

const Leftside = (props) => {
    return <Form>
        <Form.Group>
            <Form.Label>Ciclos:</Form.Label>
            <Form.Select>
                <option>---- Seleccione el ciclo ----</option>
                {
                    props.ciclos.map((ciclo) => {
                        return <option>
                            { ciclo.numero }
                        </option>
                    })
                }


            </Form.Select>
        </Form.Group>
    </Form>
    

}
export default Leftside