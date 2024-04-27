import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "C:/Users/moroka boago/Documents/todoapp/src/features/todo/todoSlice";
import { Button, Divider } from '@chakra-ui/react';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';

const TaskList = () => {
    const tasks = useSelector((state) => state.todo.tasks);
    const dispatch = useDispatch();
    


    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
      };

      return (
        <div className="tasklist">
          <div className="display-tasks">
            <h3>My tasks:</h3>
            <OrderedList className="tasks">
         
              {tasks.map((task) => (
                
                <ListItem className="task" key={task.id}>
                  {task.text}
                  
                  <Button
                    colorScheme='red'
                    className="delete-btn"
                    onClick={() => handleDelete(task.id)}
                  >
                    delete
                  </Button>
                  <Divider />
                 
                </ListItem>
              ))}
            </OrderedList>
           
          </div>
        </div>
      );
};

export default TaskList;
