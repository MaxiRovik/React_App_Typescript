import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";

interface TodoItemPageParams {
    id:string;
}

const TodoItemPage:FC = () => {
    const[todo, setTodo] = useState<ITodo | null>(null)
    const params = useParams<TodoItemPageParams>();
    const history = useHistory()
    console.log(todo?.id)

    useEffect(()=> {
        fetchTodo()

    },[]);

    async function fetchTodo() {
        try {
            const response =  await axios.get<ITodo>( 'https://jsonplaceholder.typicode.com/todos/'+ params.id)
            setTodo(response.data)
        }
        catch (e){
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={()=>history.push('/todos')}> Back </button>
            <div>
                <h2> Page of</h2> <h1>{todo?.title}</h1>
            </div>
            <div>
                <h1> {todo?.id}. {todo?.title} </h1>
                <h2> Has been finished:  {todo?.completed}</h2>
            </div>
        </div>
    );
};

export default TodoItemPage;





