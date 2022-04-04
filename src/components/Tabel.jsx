import {Row} from "./TabelRow";



export const Tabel=({data,del})=>{

   
    return <>
        <table>
            <thead>
               <tr>
               <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Salary</th>
                <th>isMarried</th>
               <th>Delete</th>
               </tr>
            </thead>
            
            <tbody>
                {data.map((e,i)=>(
                    <>
                        <Row key={i} del={del} value={e}/> 
                    </>
                    
                ))}
            </tbody>
       
        </table>
       
        
    </>
}