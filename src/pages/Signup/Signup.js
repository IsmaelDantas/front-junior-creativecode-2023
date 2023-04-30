import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import Buttons from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos!");
      return;
    } else if (email !== emailConf) {
      setError("Os emails não coincidem!");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  }
  return (
    <div className='Container'>
      <label className='LabelStyle'>FAÇA O SEU REGISTRO</label>
      <div className='Content'>
        <Input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu email"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <label className='LabelError'>{error}</label>
        <Buttons Text="Registrar" onClick={handleSignup} />
        <label className='LabelSignin'>
          Já possui uma conta?
          <strong className='StrongStyle'>
            <Link to="/">&nbsp;Entre</Link>
          </strong>
        </label>
      </div>
    </div>
  )
}

export default Signup  