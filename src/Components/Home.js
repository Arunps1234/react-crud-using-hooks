import React from 'react'
import Data from './Data'
import { Link } from 'react-router-dom'

const Home = () => {
    console.log(Data)
    return(
        <>
    <div style={{margin:'15rem'}}>
        <table className='table'>

            <thead>
                <tr >
                    <th>Name </th>
                    <th>Email  </th>
                    <th>Phone </th>
                </tr>
            </thead>

<tbody>
{
    Data && Data.length>0 ? 
    Data.map((value)=>(
<tr>
    <td>{value.name}</td>
    <td>{value.email}</td>
    <td>{value.phone}</td>

</tr>
    )) : (  <span style={{position:'relative', left:'400px'}}>NO DATA FOUND </span> )
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