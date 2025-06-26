 export function StudentCrad({name,age,rollNo,grade}){
 
   function handleEVent(){
      alert(`you clicked ${name}`);
   }

    return(
         <div className="card" onClick={handleEVent}>
            <h2>Name:{name}</h2>
            <h2>Age:{age}</h2>
            <h2>ROll No: {rollNo}</h2>
            <h2>Grade: {grade}</h2>
         </div>
    )
}