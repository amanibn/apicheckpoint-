import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserList(){
   const [users, setUsers] = useState([]);
   const urlJson= 'https://jsonplaceholder.typicode.com/users';
   

    useEffect(()=>{
        const fetchData = async ()=>{
            const users_data = await axios(urlJson);
            setUsers(users_data);
        };
        fetchData();
     },[setUsers])

   console.log(users)

return (
<div>
    <h1>USERS</h1>
  <ul>      
    {(users.length !== 0)
        &&
      users.data.map(item => (
        <li key={item.id}>
          <span>{item.name}</span>
        </li>
      ))
      
      
    }
  </ul>
</div>
)
}