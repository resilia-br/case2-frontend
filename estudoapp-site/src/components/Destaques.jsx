import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/300" />
                    <Card.Body>
                        <Card.Title>Fácil de usar</Card.Title>
                        <Card.Text>
                            O EstudoApp é muito fácil de usar. Você pode criar suas próprias listas de estudo!
                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="warning">Acessar o EstudoApp</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/300" />
                    <Card.Body>
                        <Card.Title>Rápido e confiável</Card.Title>
                        <Card.Text>
                            O EstudoApp é muito rápido e confiável. Seus dados são armazenados em servidores seguros.
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="warning">Conheça mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/300" />
                    <Card.Body>
                        <Card.Title>Suporte personalizado</Card.Title>
                        <Card.Text>
                            O EstudoApp oferece suporte personalizado para você. Entre em contato conosco e tire suas dúvidas.
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="warning">Entre em contato</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                        
        </Row>
    );
}

export default Destaques;