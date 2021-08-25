import React,{event} from 'react';
import ReactDOM from 'react-dom';

function App(){

  const useFetch= ('http://localhost:6000')
   const usePost=('http://localhost:6000/Post');
 return(
   <form type="Post" onLoad={useFetch} >
   <div>
     <div className="Head" style={{fontVariant:"ruby",width:'100%', height:'4ch', backgroundColor: 'lightcoral', fontSize:'32px', fontFamily:'cursive', textAlign:'center', paddingTop:'16px' }}>
        <b> Todo List</b> </div>
        <br/> <br/> 
<div className="todo_item" style={{backgroundColor:'lightskyblue',marginTop:'-15px',top:'0px', paddingLeft:'80px', width:'50%' , bottom:'4ch'} }>
  <h3 style={{fontFamily:'cursive',fontKerning:'normal', fontVariant:"ruby",paddingTop:'25px'}}>Just Enter Your Task and let us help you Notify your task</h3>
<input style={{width:'280px',height:'50px',textAlign:'center' ,marginTop:'25px'}} type="text"  value="Todo List" className="input" onSubmit={this.handleChange}></input> <br/> <br/>
<br/>
<button style={{backgroundColor:'lightcoral', width:'230px', height:'45px'}} type='submit' onClick={{usePost}}> Add to List</button><br/> <br/><br/> <br/>
</div>
<br/> <br/>
<div className="List"></div>
<table>
<tr></tr>

</table>
   </div>
 
 </form>
 ) 
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

