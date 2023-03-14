import Carousel from 'react-bootstrap/Carousel'

function Banners() {
    return (
        <Carousel variant="dark" className='conteudo-margin'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/1500x300/ffd000"
                        alt="Slide incrível"
                    />
                    <Carousel.Caption>
                        <h5>EstudoApp</h5>
                        <p>Um app para facilitar a vida do estudante!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/1500x300/ffd000"
                        alt="Outro slide incrível"
                    />
                    <Carousel.Caption>
                        <h5>Quais são as funcionalidades?</h5>
                        <p>Confira os principais recursos disponíveis no app</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/1500x300/ffd000"
                        alt="Último slide"
                    />
                    <Carousel.Caption>
                        <h5>Contato para parcerias?</h5>
                        <p>
                            Entre em contato com a nossa equipe para conversar sobre oportunidades de parceria
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Banners