import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "C:/Users/moroka boago/Documents/todoapp/src/features/todo/todoSlice";
import { Button, ButtonGroup, Input } from '@chakra-ui/react'

const Task = () => {
    
    const tasks = useSelector((state) => state.todo.tasks)
    const dispatch = useDispatch();
   
    

    function addNewTask(){    
            dispatch(addTodo(tasks));  
    }
    
    return (
        <div className="task-component">
        <div className="add-task">
          <Input
            type="text"
            placeholder="Add task here..."
            
          />
          <Button colorScheme='blue' onClick={addNewTask}>Add task</Button>
        </div>
      </div>
    )

};

export default Task;