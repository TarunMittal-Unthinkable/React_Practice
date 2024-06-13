import React, { Component } from 'react'

class Greet extends Component {
    constructor(props){
        super(props)
            this.state={
                id:2,
                name:"React APP",
                count:0
        }
    }
    onCLickUpdate = ()=>{
        this.setState({count:this.state.count+1})

    }
    render() {
        return (
            <div>
                <h1>This is a Class Component</h1>
                <h2>I am {this.props.work} {this.state.name}</h2>
                <h2>I worked on project {this.state.count} times</h2>
                <button onClick={()=>this.onCLickUpdate()}>Click Me!</button>
            </div>
            )
        }
    }
export default Greet