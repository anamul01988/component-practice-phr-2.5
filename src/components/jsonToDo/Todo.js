import React, { useEffect, useState } from 'react';
import './Todo.css';
const Todo = () => {
    const [user,setUser] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res =>res.json())
        .then(data =>setUser(data))
    },[]);
    return (
        <div className='todos-content'>
            <h2>User-length: {user.length}</h2>
            <div className='user-details-container'>
            {
                user.slice(0,40).map(user => <TodosDetails user={user}/>)
            }
            </div>
          
        </div>
    );
};

function TodosDetails(props){
    console.log(props)
    return(
        <div className='user-details'>
 
           <h1>UserId: {props.user.userId}</h1>
            <h1>User title: {props.user.title}</h1>
  
        </div>

    );
}
export default Todo;