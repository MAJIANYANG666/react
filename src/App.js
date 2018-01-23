import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import 'normalize.css'
// import * as localStore from './localStore'
//按 es6 的规范 import * as obj from "xxx" 会将 "xxx" 中所有 export 导出的内容组合成一个对象返回
import UserDialog from './UserDialog'
import {getCurrentUser,signOut} from './leanCloud'



class App extends Component {
  constructor(props){
    super(props)
    this.state={
        user:getCurrentUser()||{},
      newTodo:'',
      todoList:[]
    }
  }
  render() {
    let todos=this.state.todoList
        .filter((item)=>!item.deleted)
        .map((item,index)=>{
          return (
            <li key={index}>
              <TodoItem todo={item} onToggle={this.toggle.bind(this)}
              onDelete={this.delete.bind(this)}/>
            </li>
          )
        })


    return (
      <div className="App">
        <h1>{this.state.user.username||'我'}的待办
            {this.state.user.id? <button onClick={this.signOut.bind(this)}>登出</button>:null}
        </h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo}
                     onChange={this.changeTitle.bind(this)}
                     onSubmit={this.addTodo.bind(this)}/>
        </div> 
        <ol className="todoList">
          {todos}
        </ol>
          {this.state.user.id?null:<UserDialog onSignUp={this.onSignUp.bind(this)}/>}
      </div>
    );
  }
  signOut(){
      signOut()
      let stateCopy=JSON.parse(JSON.stringify(this.state))
      stateCopy.user={}
      this.setState(stateCopy)
  }
  onSignUp(user){
      let stateCopy = JSON.parse(JSON.stringify(this.state))
      stateCopy.user = user
      this.setState(stateCopy)
  }
  componentDidUpdate(){

  }
  toggle(e,todo){
      todo.status=todo.status==='completed'?'':'completed'
      this.setState(this.state)

  }
  changeTitle(event){
      this.setState({
          newTodo:event.target.value,
          todoList:this.state.todoList
      })

  }
  //传入一个函数
  //形参event等待被传入e
  addTodo(event){

      this.state.todoList.push({
          id:idMaker(),
          title:event.target.value,
          status:null,
          deleted:false
      })
      this.setState({
          newTodo:'',
          todoList:this.state.todoList
      })

  }
  delete(event,todo){
      todo.deleted=true
      this.setState(this.state)

  }
}

export default App;

let  id =0

function idMaker(){
    id+=1
    return id
}
