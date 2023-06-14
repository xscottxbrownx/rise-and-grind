import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import TodoLayout from './routes/TodoLayout';

const App = () => {

  

  return (
    <>
      <Routes>
        <Route path="/" element={ <TodoLayout /> } />
        {/* <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </>
  );
}

export default App;