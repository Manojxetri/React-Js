export function Hello(){
    return <h1>Manoj</h1>
}

export function Namaste({firstName,lastName}){
    // console.log(props)
    return <h2>Namaste {firstName} {lastName}</h2>
}


const Greeting=() =>{
    return (
       <>
        <h1>Hello,Namaste</h1>
        <button>Hello</button>
        </>
    )
};

export default Greeting;