// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {tabs} from './data/tabs'

function App() {
  let [todolist,setTodolist]=useState([])

  let saveToDolist=(event)=>{

    let toname=event.target.toname.value;
    if(!todolist.includes(toname)){
      let finalToDOlist = [...todolist,toname]
      setTodolist(finalToDOlist)
    }
    else{
      alert("ToDolist Name Already Exits..")
    }

    event.preventDefault();

  }


  let list=todolist.map((value,i)=>{
    return(
      <TodolistItem value={value} indexno={i} todolist={todolist} setTodolist={setTodolist} key={i}/>
    )
  })

  let [activetab,setActivetab]=useState(0)
  let [activeContent,setActiveContent]=useState(tabs[0])

  let changeData=(index)=>{
    setActivetab(index)
    setActiveContent(tabs[index])
  }


  return (
    <div className="App">
{/* tabs implementation */}
      <div className='tabsOuter'>
        <h1>Tabs Handling in React </h1>
        <ul>
          {tabs.map((tabItem,index)=>{
            return(
              <li>
                <button className={activetab===index?'activeButton':''} onClick={()=>{changeData(index)}}>{tabItem.title}</button>
              </li>
            );
          })}
        </ul>
        {activeContent!==undefined? 
        <p>{activeContent.discription}</p>:<></>
        }
      </div>


      <h1>Todo List</h1>
      <form onSubmit={saveToDolist}>
        <input type="text" name='toname'/><button>Save</button>
      </form>
      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;

function TodolistItem({value,indexno,todolist,setTodolist}){
  let [status,setStatus]=useState(false)
  let deleteRow=()=>{
    let finalData=todolist.filter((v,i)=>i!==indexno)
    setTodolist(finalData)
  }
  let statusCheck=()=>{
    setStatus(!status);
  }

  return(
    <li className={status? 'statusCheck':''} onClick={statusCheck}>{indexno+1} {value} <span onClick={deleteRow}>&times;</span></li>
  );
}