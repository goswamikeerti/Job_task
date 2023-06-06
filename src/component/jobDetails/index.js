import {useNavigate, useParams} from 'react-router-dom';
import user from '../../List.js';
import { useState } from 'react';

const JobDetails= ()=>{
   const navigate=useNavigate()
    const params=useParams();
    const i=params.i
   
    const job=user[i]

    
    return(
        <div className="container">
    <h1>jobDetails</h1>
   <h1>Title:{job.title}</h1>
   <h1>Duretion:{job.duretion}</h1>
   <h1>Description:{job.description}</h1>
   <h1>Stipend:{job.stipend}</h1>
   <button onClick={()=>{navigate('/')}}>Back to list</button>
   </div>
    )
}
 export default JobDetails;