import React, {useState} from 'react'
import Data from './Data';
import { useNavigate } from 'react-router-dom';
import {v4} from 'uuid'


const Create =()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("")

    // usenavigate
    const navigate =useNavigate();

    const data ={
        name, email, phone
    }

    const submitForm = (e)=>{
        e.preventDefault();
        Data.push({
            name:name,
            email:email,
            phone:phone,
            id : v4()

        

        })
        navigate("/")
console.log(v4())
    }

    console.log(Data)
    return(
        <div style={{position:'relative', left:'350px', top:'150px'}}>
            <form className= 'form-group' >
                <div className='col-sm-6 col-offset-3'>
                    
                    
                    <div>
                    <label>Name :</label>
                    <input type="text" placeholder='Enter name' className= 'form-control' value={name} onChange={e=>setName(e.target.value)} required/>
                </div>

                <div>
                    <label>Email :</label>
                    <input type='email' placeholder='Enter Email' className= 'form-control' value={email} onChange={e=>setEmail(e.target.value)} required/>
                </div>

                <div>
                    <label>Phone :</label>
                    <input type='text' placeholder='Enter Phonenumber' className= 'form-control' value={phone} onChange={e=>setPhone(e.target.value)} required/>
                </div>

                
<br/>
                <div >
                    <button className='btn btn-success' style={{width:'100%'}} onClick={submitForm}>Submit</button>
                </div>
                </div>
            </form>

        </div>
    )
}

export default Create