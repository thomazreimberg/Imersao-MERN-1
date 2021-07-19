import Ticket from '../../assets/images/ticket.png'
import { Container } from './style'

export default function Home() {
    return (
        <Container>
            <div className="ticket">
                <img src={Ticket} alt="ticket" />
            </div>

            <div className="title">
                CineMonk
            </div>

            <div className="description">
                O que você quer fazer
            </div>


            <button className="btn">
            <div>COMPRAR INGRESSO</div>
            </button>
        </Container>
    )
}