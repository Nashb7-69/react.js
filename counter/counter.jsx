import { useState } from "react"
function Counter(){
const [counter,setcounter]=useState(0)
const increase=()=>{    
 setcounter(counter+1)
}
const dncrease=()=>{    
 setcounter(counter-1)
}
const reset=()=>{    
 setcounter(0)
}

return(
<div className="countercontiner">
<p className="p"> {counter}  </p>
<button className="conter" onClick={increase}> increase</button>
<button className="conter" onClick={reset} > rset</button>
<button  className="conter" onClick={dncrease}> decrease</button>

</div>







)




}
export default Counter