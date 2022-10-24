import React from "react";
import { Form, Button } from "react-bootstrap"

const Rightside = (props) => {
    return <Form>
    <Form.Group>
        <Form.Label>Carrera</Form.Label>
        <Form.Select>
            <option>---- Seleccione cursos ----</option>
            {
                props.cursos.map((curso) => {
                    return <option>
                        { curso.nombre }
                    </option>

                })
            }

        </Form.Select>
    </Form.Group>
</Form>

}
export default Rightside