import React from 'react'
import Button from '@mui/material/Button';

const Buttons = ({ Text, onClick, Type= "button" }) => {
  return (
    <Button 
        variant="contained" 
        color="primary" 
        type={Type} 
        onClick={onClick}
    >
        {Text}
    </Button>
  )
}

export default Buttons