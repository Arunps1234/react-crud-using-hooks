import React, {useState} from 'react'
import Data from './Data'
import { Link } from 'react-router-dom'

const Home = () => {

    const [datas, setdata] = useState(Data)

    const DeleteAccount = (id)=>{

 //const finadata = datas.filter((vals)=>vals.id!==number)
console.log(id)
const final = datas.filter(val=>{
return  (  val.id!==id)
    })
setdata(final)
}

    
    return(
        <>
    <div style={{margin:'15rem'}}>
        <table className='table'>

            <thead>
                <tr >
                    <th>Name </th>
                    <th>Email  </th>
                    <th>Phone </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>

<tbody>
{
    datas && datas.length>0 ? 
   ( datas.map((value)=>(
<tr key={value.phone}>
    <td>{value.name}</td>
    <td>{value.email}</td>
    <td>{value.phone}</td>
    <td>
    <button className='btn btn-warning'>Edit</button>
    &nbsp;
    <button className='btn btn-danger' onClick={()=>DeleteAccount(value.id)}>Delete</button>

    </td>


</tr>
    )) ): ("NO DATA FOUND") 
}




</tbody>


        </table>
        <Link to ="/create">
    <button className='btn btn-success' style={{width:'100%'}}>Create</button>
    </Link>
    </div>

    </>

)}

export default Home