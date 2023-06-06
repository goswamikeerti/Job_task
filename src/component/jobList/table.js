 
import { useState } from 'react';
import user from '../../List.js';
import {Navigate, useNavigate} from 'react-router-dom';

 const Table=()=>{
   const [list,setList]=useState(user);
    
      const navigate= useNavigate();

      const handleChange=(v)=>{
        const newList=user.filter((item)=>{
          return item.title.toLowerCase().indexOf(v.toLowerCase()) !== -1
        })
        setList(newList)
      }
      const handleSelect=(v)=>{
        if(v){
          const newList=user.filter((item)=>{
            return item.date===v ? item:null
          })
          setList(newList)
        }else{
          setList(user)
        }
        
      }
    const Details=(i)=>{
     console.log(i);
      navigate("/details/"+i)
        }
      
    return(
      <section className="table-section">
        <div className="container">
            <div className="table-cantainer">
             <div style={{textAlign:'center'}}>
             <input type="text" 
                placeholder="search jobs....." 
                 className="search" 
                 onChange={(e)=>{handleChange(e.target.value)}} />
                 <select onChange={(e=>{handleSelect(e.target.value)})}>
                  <option value={""}>Select By date</option>
                  {
                    user.map((item)=>{
                       return <option>{item.date}</option>
                    })
                  }
                 </select>
             </div>
                <table>
                
                    <tbody>
                    <tr>
                        <th>No.</th>
                        <th>title</th>
                        <th>Description</th>
                        <th>Tags</th>
                        <th>Stipend</th>
                        <th>duretion</th>
                        <th>other</th>
                        <th>Actions</th>
                    </tr>
                    {
                      list.map((item,i)=>{
                        return <tr>
                           <td>{i+1}</td>
                           <td>{item.title}</td>
                           <td>{item.description}</td>
                           <td>{item.tags}</td>
                           <td>{item.stipend}</td>
                           <td>{item.duretion}</td>
                           <td>{item.others}</td>
                           <td > <button onClick= 
                        {()=>Details(i)}>details</button></td>
                           
                        </tr>
                       })

                       
                    }
                    </tbody>
                </table>
            </div>
        </div>
      </section>

    );
}

export default Table;