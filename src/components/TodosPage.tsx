import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import axios from "axios";
import List from "./List";
import TodoItem from "./TodoItem";
import {useHistory} from "react-router-dom";

const TodoPage:FC = () => {
    const[todos, setTodos] = useState<ITodo[]>([])
    const history = useHistory();

    useEffect(()=> {
        fetchTodos()

    },[]);

    async function fetchTodos() {
        try {
            const response =  await axios.get<ITodo[]>( 'https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        }
        catch (e){
            alert(e)
        }
    }

    return (
        <List
            items = {todos}
            renderItem = {(todo:ITodo) => <TodoItem onClick = {(todo) => history.push('/todos/' + todo.id)}
                                                    todo={todo} key = {todo.id}/>}
        />
    );
};

export default TodoPage;