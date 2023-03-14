import {Container, Form, Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import CmsApi from '../../api/CmsApi'

function AdminSobre() {
    const [sobre, setSobre] = useState([])

    useEffect (() => {
        async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])

    function handleTextChange(event) {
        const text = event.target.value
        setSobre({...sobre, text})
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget
        const text = form.text.value

        const response = await CmsApi().patchSobre({text})
        if(!response.ok) {
            alert('Erro ao atualizar conteúdo da página Sobre')
            return
        }
        
        alert('Conteúdo da página Sobre atualizado com sucesso!')
    }

    return (
        <Container className="conteudo-margin">
            <h1>Admin Funcionalidades</h1>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="text">
                    <Form.Label>Conteúdo da página Sobre</Form.Label>
                    <Form.Control as="textarea" rows={3} value={sobre.text} onChange={handleTextChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Atualizar o texto
                </Button>
            </Form>            
        </Container>
    )
}

export default AdminSobre