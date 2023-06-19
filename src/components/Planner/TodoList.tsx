import React from 'react';
import { Box, IconButton, List, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoListProps {
  items: {id: string, text: string}[];
  onDeleteTodo: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => (
  
  <List>
    {items.map(todo => (
      <Box key={todo.id}>
        <Box sx={{ display: 'inline-flex' }}>
          <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ListItemText primary={todo.text} />
            <IconButton
              aria-label="delete"
              color="error"
              onClick={() => onDeleteTodo(todo.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        </Box>
      </Box>
    ))}
  </List>
)      

export default TodoList;