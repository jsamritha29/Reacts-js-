import React,{useState} from 'react'

function TabComponent() {
  const[activeTab,setactiveTab]=useState("Home")
  return(
    <div style={Styles.Container}>
      <h2>Tab Component</h2>
      <div style={Styles.tabContainer}>
         <button style={activeTab === "Home" ? Styles.activeBtn: Styles.Btn}
            onClick={()=>setactiveTab("Home")}>Home</button>
         <button style={activeTab === "About" ? Styles.activeBtn: Styles.Btn}
            onClick={()=>setactiveTab("About")}>About</button>
         <button style={activeTab === "Contact" ? Styles.activeBtn: Styles.Btn}
            onClick={()=>setactiveTab("Contact")}>Contact</button>

      </div>
      <div style={Styles.contentBox}>
        {activeTab === "Home" && (
          <p>This is Home page</p>
        )}
        {activeTab === "About" && (
          <p>Hii About page i'm reactjs</p>
        )}
         {activeTab === "Contact" && (
          <p>Contact us : </p>
        )}
         

      </div>
    </div>
  )
  
}
const Styles={
  Container:{
    minHeight:"200vh",
    background:"lightpink",
    textAlign:"center"
  
  },
  tabContainer:{
    padding:"20px"

  },
  activeBtn:{
    background:"green"
  },
  Btn:{
    background:"white"
  },
  contentBox:{
    height:"100px",
    width:"200px",
    border:"1px solid",
    borderRadius:"10px",
    marginLeft:"640px"

  }
}
export default TabComponent
