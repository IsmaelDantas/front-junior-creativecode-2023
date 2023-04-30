import React from 'react'
import RoutesApp from './routes/Route';
import { AuthProvider } from './contexts/auth';
import './App.css';


const App = () => {
  return (
    <AuthProvider data-testid="auth-provider">
        <div>
          <RoutesApp data-testid="routes-app"/>
        </div>
    </AuthProvider>
  )
}

export default App