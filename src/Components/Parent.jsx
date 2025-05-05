 /*const Parent = ()=>{

    return <h1>This is the parent component</h1>
}*/

function Parent({children}){

    return <div><h1>This is the parent component, same results</h1>
    {children}
    </div>
    
}

export default Parent
/*const ParentName = ()=>{



}*/
 