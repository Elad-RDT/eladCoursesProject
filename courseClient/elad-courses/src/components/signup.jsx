import React from 'react';
import { createContext, useState} from 'react';
import axios from "axios"


export const UsersContext= createContext();
const secUrl = "http://localhost:3000/api/users" 

function UserProvider(props){
    const {children}=props;
    const [users,setUsers]=useState([]);
    const[errorMsg,setErrorMsg]=useState('Welcome there')


const addNewUser= async(body)=>{
    console.log(body);
    try{

        const response = await axios.post(secUrl,body);
        console.log(response);
        setUsers([...users,response.data])
        setErrorMsg("User Confirmed")
        setTimeout(() => {
            setErrorMsg('You can move now to Login page 🔓 ');
            
        }, 2000);
        setTimeout(() => {
            setErrorMsg('welcome there');
            
        }, 2000);
        setTimeout(() => {
            window.location.href = '/login';
            
        }, 2000);
        
        
        
    }
    catch(error){
        setErrorMsg("user already exisist")
        setTimeout(() => {
            setErrorMsg('welcome there')
        }, 3000);
        return errorMsg
    }
    }



    
    return (
        <UsersContext.Provider value={{addNewUser, users,setUsers, errorMsg,setErrorMsg }}>
         {children}
        </UsersContext.Provider>
        
     );
      }
    
    
export default UserProvider;
