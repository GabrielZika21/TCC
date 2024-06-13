import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import './usuario.css';
import { useState } from "react";
import api from "../../services/api";

const Usuario = () => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleSubmit = async () =>{
    try{
      /*const response = await api.post('Jack/InserirUsuarioFieb',{nome: nome, email: email, senha: senha, serie: null})*/
      const response = await api.post("users",{nome: nome, email: email, senha: senha, tipoUsuario: "Funcionario", sobrenome: "Alves"})
      console.log(response.data)
    }catch(error){
      console.log(error)
    }
  };
 
return(
           
  <div className="app-container">
      <div className="form-group">
        <label>Nome</label>
        <input type="text" placeholder="Seu Nome" onChange={(e)=>setNome(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>E-mail</label>
        <input type="email" placeholder="Seu Email" onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Senha</label>
        <input type="password" placeholder="Sua Senha" onChange={(e)=>setSenha(e.target.value)}/>
      </div>
      <div className="form-group">
        <button onClick={handleSubmit}>Criar Conta</button>
      </div>
  </div>
)

}

export default Usuario;