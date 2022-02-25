import './App.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { Home } from './pages/Home';
import { overrides } from './themes';

function App() {
  return (
    <ChakraProvider resetCSS={true} theme={overrides}>
      <Home/>
    </ChakraProvider>
  );
}

export default App;
