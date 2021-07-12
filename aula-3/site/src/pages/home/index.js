import { Link } from 'react-router-dom'
import { Titulo } from './styled'

export default function Home() {
    return (
        <div class="home">
            <Titulo>Home</Titulo>
            <h2>Sejam bem-vindos!</h2>

            <div>
                <Link to="/contato"> Contato</Link>
            </div>
        </div>
    )
}