import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import Buttons from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Signin.css';

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos!");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <div className='Container'>
      <label className='Label'>FAÇA O SEU LOGIN</label>
      <div className='Content'>
        <Input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <label className='LabelError'>{error}</label>
        <Buttons Text="Entrar" onClick={handleLogin} />
        <label className='LabelSignup'>
          Não tem uma conta?
          <strong className='Strong'> 
            <Link to="/signup">&nbsp;Cadastre-se</Link>
          </strong>
        </label>
      </div>
    </div>
  )
}

export default Signin