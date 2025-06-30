
// const fruits=['apple','banana','cherry'];

const numbers=[1,2,3,4,5,6,7,8,9,10];

export default function List(){
//     const even=numbers.filter((item)=>item%2===0)
//    return(
//     // <ul>
//     //     {fruits.map(fruit=>{ 
//     //        return <li>{fruit}</li>
//     //       })}
//     // </ul>
//     <ol>
//         {even}
//     </ol>

    return(
        <ul>
            {numbers.map((n,index)=>
            <li key={index}>index={index},value={n}</li>)}
        </ul>
    )

//    )
}


// const people=[{
//     name:'Creola Katherine Johnson',
//     profession:'mathematics'
// }]