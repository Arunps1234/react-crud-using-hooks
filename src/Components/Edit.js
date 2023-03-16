import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Edit = ()=>{
    const navigate = useNavigate();
    return(
        <div style={{position:'relative', left:'350px', top:'150px'}}>

            <form className= 'form-group' >
                <div className='col-sm-6 col-offset-3'>
                    
                    
                    <div>
                    <label>Name :</label>
                    <input type="text" placeholder='Enter name' className= 'form-control'   required/>
                </div>

                <div>
                    <label>Email :</label>
                    <input type='email' placeholder='Enter Email' className= 'form-control'  required/>
                </div>

                <div>
                    <label>Phone :</label>
                    <input type='text' placeholder='Enter Phonenumber' className= 'form-control'  required/>
                </div>

                
<br/>
                <div >
                    <button className='btn btn-success' style={{width:'100%'}} >Update</button>
                </div>
                &nbsp;
                <Link>
                <button onClick={()=>navigate(-1)} className="btn btn-primary" style={{ width:'100%'}}>Back</button>
                </Link>
                </div>
            </form>

        </div>
    )
}

export default Edit