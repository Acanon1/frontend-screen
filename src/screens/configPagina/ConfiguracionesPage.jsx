import React, {useEffect, useState} from "react";  
import { Row, Col, Button } from 'react-bootstrap'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Leftside from "./components/Leftside";
import Rightside from "./components/Rightside";
import { ListGroup } from 'react-bootstrap'



const ConfiguracionesPage = () => {
    const [listadoCiclos, setListadoCiclos] = useState([])

    const httpObtenerCiclos = async () => {
        const resp = await fetch("http://localhost:4444/ciclos")
        const data = await resp.json()
        console.log(data)
        setListadoCiclos(data)
    }
    useEffect(() => {
        httpObtenerCiclos()
    }, [])


    const [listadoCursos, setListadoCursos] = useState([])
    const httpObtenerCursos = async () => {
        const resp = await fetch("http://localhost:4444/cursos")
        const data = await resp.json()
        console.log(data)
        setListadoCursos(data)
    }
    useEffect(() => {
        httpObtenerCursos()
    }, [])
    

    return <Layout
        makeHeader={ () => <Header titulo="Configuraciones" /> }
        makeBody={ 
            () => <Row>
            
                <Col md={6}>
                <Leftside ciclos={ listadoCiclos } />
                    <Button variant="success"
                    className="mb-2">
                    +
                    </Button>
            
            <ListGroup as="ul">
            <ListGroup.Item as="li"  >2020-2 <Button variant="success" style={{width: "120px"}}>
                    Delete
                </Button></ListGroup.Item>

            
            <ListGroup.Item as="li" >2020-1 <Button variant="success" style={{width: "120px"}}>
                    Delete
                </Button></ListGroup.Item>
            <ListGroup.Item as="li" >2021-2 <Button variant="success" style={{width: "120px"}}>
                    Delete
                </Button></ListGroup.Item>
            <ListGroup.Item as="li" >2021-1 <Button variant="success" style={{width: "120px"}}>
                    Delete
                </Button></ListGroup.Item>

            </ListGroup>
                
                
            </Col>
            <Col md={6}>
                
                <Rightside cursos={ listadoCursos }/>
                <Button variant="success"
                    className="mb-2">
                    +
                </Button>
                <ListGroup as="ul">
                <ListGroup.Item as="li" >Ingnieria de datos <Button variant="success" style={{width: "120px"}}>
                    Delete
                </Button></ListGroup.Item>
                <ListGroup.Item as="li" >Prorgramacion web <Button variant="success" style={{width: "120px"}}>
                    Delete
                </Button></ListGroup.Item>
                <ListGroup.Item as="li" >Lenguajes de programacion <Button variant="success" style={{width: "120px"}}>
                    Delete
                </Button></ListGroup.Item>
                <ListGroup.Item as="li" >Redes de computadora <Button variant="success" style={{width: "120px"}}>
                    Delete
                </Button></ListGroup.Item>

                </ListGroup>
            </Col>
        </Row> 
        }
        makeFooter={ () => <Footer /> }
    />

}
export default ConfiguracionesPage