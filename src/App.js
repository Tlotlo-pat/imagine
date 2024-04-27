
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
  Center,
} from '@chakra-ui/react'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

function App() {
  return (
   
    <ChakraBaseProvider theme={theme}>
      <h2>REDUX TO DO APP</h2>
    
      <Task />
     
      <TaskList />
      </ChakraBaseProvider>
    
  );
}

export default App;