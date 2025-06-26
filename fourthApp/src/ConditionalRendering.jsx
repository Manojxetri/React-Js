function Item({name,isPacked}){
    // if(isPacked){
    //     return <li className="item">{name}✅</li>
    // }
    //   return <li className="item">{name}⚔️</li>
    // return(
    //     <>{isPacked?<li className="item">{name}✅✅✅✅</li>:
    //     <li className="item">{name}❌🛑🚫⛔🫷🫸🤚⚔️</li>}</>
    // )

    // return(
    //    <li className="item">{name} {isPacked?'✅':'❌'  }</li>
    // )

    return(isPacked && <li className="item">{name}</li>)
}

export default function PackagingList(){
    return(
        <section>
            <h1>Manoj Khanal Packaging List</h1>
            <ul>
                <Item isPacked={true} name="space suit"/>
                <Item isPacked={true} name="helmet with a golden leaf"/>
                <Item isPacked={false} name="Photo of rosis"/>

            </ul>
        </section>
    )
}