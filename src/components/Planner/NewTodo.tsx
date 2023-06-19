import React, { useState } from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
};


const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {

  const [todoText, setTodoText] = useState('');
  const [error, setError] = useState(false);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (todoText === '') {
      setError(true);
    } else {
      onAddTodo(todoText);
      setTodoText('');
    }
  }

  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.currentTarget.value);
    setError(false);
  }


  return (
    <form onSubmit={todoSubmitHandler}>
      <Box m={2}>
        <TextField
          id="todo-text"
          label="Todo Text"
          variant="outlined"
          value={todoText}
          onChange={onchangeHandler}
          helperText={error ? 'Text needed' : ''}
          error={error}
        />
        <IconButton type="submit" aria-label="delete" color="error">
          <AddIcon />
        </IconButton>
      </Box>
    </form>
  );
};

export default NewTodo;