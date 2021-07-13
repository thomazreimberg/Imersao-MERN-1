import Ticket from '../../assets/images/ticket.png'
import { Title, Container } from './style'

export default function Home() {
    return (
        <Container>
            <div className="ticket">
                <img src={Ticket} alt="ticket" />
            </div>

            <Title>
                CineMonk
            </Title>

            <div>
                O que você quer fazer
            </div>


            <button>
            <div>COMPRAR INGRESSO</div>
            </button>
            <div className="buy-ticket">
            </div>
        </Container>
    )
}