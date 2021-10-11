import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";
import List from "./components/List";
import UserItem from "./components/UserItem";

function App() {
    const[users, setUsers] = useState<IUser[]>([])

useEffect(()=> {
    fetchUsers()
},[])
    async function fetchUsers() {
        try {
            const response =  await axios.get<IUser[]>( 'https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        }
        catch (e){
            alert(e)
        }
    }

  return (
    <div >
      <Card variant={CardVariant.outlined} width='200px' height ='200px'>
          <button>Button</button>
    </Card>
        <List
            items = {users}
            renderItem={(user:IUser) => <UserItem user={user} key = {user.id}/>}
        />
    </div>
  );
}

export default App;
