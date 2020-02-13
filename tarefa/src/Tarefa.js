import React, { useState } from "react"

function Tarefa(prop){
    // const [styles,setStyles] = useState();
    const [isMarked, setIsMarked] = useState(false);
    // function handleComplete(){
        
    //     const aux= {textDecoration:"underline"}
        
    //     if(styles === aux){
    //         const aux2={textDecoration:"line-through"}   
    //         setStyles(aux2);
            
    //     }
    //     else
    //         setStyles(aux);
    // }
    return(<li  style={isMarked ? {textDecoration: "underline"} : {}}>{prop.element}
        <button onClick={f=>{setIsMarked(!isMarked)}}>Tarefa Realizada</button>
     </li>

    );
}
export default Tarefa;