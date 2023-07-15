// let factorial= (n)=>
// {
//     let f=1

//     for (let index = 1; index <n; index++) {
//     f*=index    
        
//     }

//     return f
// }
 export default (n)=>
{
    let f=1

    for (let index = 1; index<=n; index++) {
    f*=index    
        
    }

    return f
}


export let evenOdd=(n)=>{

    if(n%2==0)
    {
        return true
    }
    else
    {
        return false
    }
}


// export default factorial;