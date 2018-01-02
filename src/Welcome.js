import React from 'react';//为什么要import React
class Welcome extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:new Date(),
            test:'1'
        }
        setInterval(()=>{// 搜索「JS 箭头函数 MDN」
            this.setState({
                date:new Date(),// 更新 date
                test:'constructor'
            })
        },5000)
        // this.setState({
        //     data:new Date(),
        //     test:'constructor'
        // })
        console.log("我已经在constructor里将props和state初始化好了")
    }
    componentWillMount(){
        this.setState({
            data:new Date(),
            test:'commponentWillMount'
        })
        console.log('运行到这里的话，说明马上就要运行render了')
    }
    render(){
        
        console.log('嗯，这里是render')
        return (
            <div>
                <h1>Hello ,{this.props.name}</h1>
                <h2>{this.state.data.toString()}</h2>
                <p>{this.state.test}</p>
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            data:new Date(),
            test:'componentDidMount'
        })
        console.log('已经挂在到页面里面了')
    }
    compontentWillReceiveProps(){
        this.setState({
            data:new Date(),
            test:'componentWillReceiveProps'
        })
    }
    shouldComponentUpdate(){
        return true
    }
    componentWillUpdate(){
        
    }
    componentDidUpdate(){
       
    }
    componentWillUnmount(){
        console.log('我要死了')
    }
}
// function Welcome(props){
//     return <h1>Hello,{props.name}</h1>
// }

export default Welcome//为什么要export,为什么要加default