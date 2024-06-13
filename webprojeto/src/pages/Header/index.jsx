import './header.css';
import { Link } from 'react-router-dom'

function Header(){

    return(
           
            
            <header>
              
                <a href="/home" className="usuario">Home</a>
                <a href="/usuario" className="usuario">Cadastrar Usuário</a>
                <a href="/funcionario" className="funcionario">Login</a>
                <a href="/listausuario" className="usuario">Listar Usuario</a>
            </header>
            


    )

}

export default Header;

