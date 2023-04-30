import React, { useState, useEffect } from 'react';
import List from '../List/List';
import Button from '@mui/material/Button';
import './AddForm.css';

const AddForm = () => {
  const [dir, setDir] = useState([]);
  const [item, setItem] = useState({ name: '', tel: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [tempIndex, setTempIndex] = useState(null);

  useEffect(() => {
    const storedDir = localStorage.getItem('dir');
    if (storedDir) {
      setDir(JSON.parse(storedDir));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dir', JSON.stringify(dir));
  }, [dir]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const add = (event) => {
    event.preventDefault();
    setDir((prevDir) => [...prevDir, item]);
    setItem({ name: '', tel: '' });
  };

  const edit = (index) => {
    const selectedItem = dir[index];
    setItem(selectedItem);
    setIsEditing(true);
    setTempIndex(index);
  };

  const update = (event) => {
    event.preventDefault();
    const updatedDir = [...dir];
    updatedDir[tempIndex] = item;
    setDir(updatedDir);
    setItem({ name: '', tel: '' });
    setIsEditing(false);
    setTempIndex(null);
    localStorage.setItem('dir', JSON.stringify(updatedDir));
  };

  const remove = (index) => {
    const updatedDir = [...dir];
    updatedDir.splice(index, 1);
    setDir(updatedDir);
    localStorage.setItem('dir', JSON.stringify(updatedDir));
  };

  const view = (item) => {
    alert(`Nome = ${item.name}\nTel = ${item.tel}`);
  };

  return (
    <div className='Width'>
      <form method="POST" onSubmit={isEditing ? update : add}>
        <div className='Margin'>
          <input
            type="text"
            name="name"
            placeholder="Coloque um nome"
            className='FormControl'
            value={item.name}
            onChange={handleChange}
          />
        </div>
        <div className='Margin'>
          <input
            type="text"
            name="tel"
            placeholder="Coloque um telefone"
            className='FormControl'
            value={item.tel}
            onChange={handleChange}
          />
        </div>
        <div className='Margin'>
          <Button data-testid="update-button" variant="outlined" type="submit">
            {isEditing ? 'Atualizar' : 'Salvar'}
          </Button>
        </div>
      </form>
      <List dir={dir} remove={remove} edit={edit} view={view} />
    </div>
  );
};

export default AddForm;