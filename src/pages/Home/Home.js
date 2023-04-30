import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import useAuth from '../../hooks/useAuth'
import AddForm from '../../components/AddForm/AddForm';
import './Home.css';

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h2 className='CenterContainer Label'>
        Catálogo Telefônico
      </h2>
      <AddForm />
      <div className='CenterContainer'>
        <Button
          Text="Sair"
          onClick={() => [signout(), navigate("/")]}>
        </Button>
      </div>
    </div>
  );
};

export default Home