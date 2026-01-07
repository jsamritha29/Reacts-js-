import React,{useState} from 'react'

function App(){
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [submittedData,setSubmittedData]=useState(null)
  const handleSubmit=(e)=>{
    e.preventDefault()
    const formData={name,email,password}
    setSubmittedData(formData);
    setName("")
    setEmail("")
    setPassword("")
  }
   return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder='Enter Your Name' value={name}
        onChange={(e)=>setName(e.target.value)}/>
      
        <label>Email</label>
        <input type="email" placeholder='Enter Your Email' value={email}
        onChange={(e)=>setEmail(e.target.value)}/>

        <label>Password</label>
        <input type="Password" placeholder='Enter Your Password' value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h2>submitted dats's</h2>
          <p><strong>Name:</strong>{submittedData.name}</p>
          <p><strong>Email:</strong>{submittedData.email}</p>
          <p><strong>password:</strong>{submittedData.password}</p>
      </div>
      )}
      </div>
  
   )
}
export default App
