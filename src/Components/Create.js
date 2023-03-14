import React from 'react'

const Create =()=>{
    return(
        <div style={{position:'relative', left:'350px', top:'150px'}}>
            <form className= 'form-group' >
                <div className='col-sm-6 col-offset-3'>
                    
                    
                    <div>
                    <label>Name :</label>
                    <input type="text" placeholder='Enter name' className= 'form-control' />
                </div>

                <div>
                    <label>Email :</label>
                    <input type='email' placeholder='Enter Email' className= 'form-control'/>
                </div>

                <div>
                    <label>Phone :</label>
                    <input type='text' placeholder='Enter Phonenumber' className= 'form-control'/>
                </div>

                
<br/>
                <div >
                    <button className='btn btn-success' style={{width:'100%'}}>Submit</button>
                </div>
                </div>
            </form>

        </div>
    )
}

export default Create