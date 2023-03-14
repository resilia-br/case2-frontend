import Container from 'react-bootstrap/Container'
import Destaques from '../components/Destaques'
import Depoimentos from '../components/Depoimentos'
import Banners from '../components/Banners'

function Home() {
    return (
        <>
            <Banners />
            <Container>
                <Destaques />
                <Depoimentos />
            </Container>
        </>
    );
}

export default Home;