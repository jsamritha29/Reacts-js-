import React,{useState}  from 'react'

function RealTimeCalc(){
    const [num1,setNum1]=useState("");
    const [num2,setNum2]=useState("");
    const a=Number(num1);
    const b=Number(num2);
    return(
        <div>
            <h2>Calculator</h2>
            <input type="number" placeholder='Enter first Value'
            onChange={(e)=>setNum1(e.target.value)}/>
            <input type="number" placeholder='Enter Second Value'
            onChange={(e)=>setNum2(e.target.value)}/>
        <div style={{height:"210px",
                    width:"200px",
                    border:"1px solid",
                    marginleft:"800px",
                    marginTop:"20px",
                    textAlign:"left"}}>
                        <h4>Result's</h4>
                        <p><strong>Addition :</strong>{a+b}</p>
                        <p><strong>Subtraction :</strong>{a-b}</p>
                        <p><strong>Multiplication:</strong>{a*b}</p>
                        <p><strong>Division :</strong>
                        {b==0 ? "can't divided by zero":a/b}</p>
                        


        </div>
        </div>
    )
}
export default RealTimeCalc