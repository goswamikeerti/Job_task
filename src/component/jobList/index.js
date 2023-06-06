 
import { useState } from 'react';
import user from '../../List.js';
import Table from './table.js';


 const JobList=()=>{
    const [search, setSearch]=useState(null);
    
    
    const jobSearch= (data)=>{
      console.log(data)
      return data.filter(item=>item.title.toLowerCase().includes(search))
    }

      
     console.log(search)
    console.log(user);

  
      
    return(
      <section className="table-section">
        <div className="container">
            <div className="table-caontainer">
                
                <h1>JobList</h1>
                <Table data={jobSearch(user)}/>
            </div>
        </div>
      </section>

    );
}

export default JobList;