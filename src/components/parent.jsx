import React, { Component } from 'react'
import "./style.scss"

import Child from "./child"

export default class parent extends Component {

    state={
        child_style:{
            // color:"white",
        }
    }

    // Life cycle method

    componentWillMount(){
        //it will be executed first time before render

        // alert("stop")
        
        let child_style=this.state.child_style
        child_style["color"]="lightcoral"
        this.setState({child_style:child_style},console.log(this.state))
        

    }

    componentDidMount(){
         //it will be executed first time after render


        setInterval(() => {
            let child_style=this.state.child_style
            child_style["color"]="skyblue"
            this.setState({child_style:child_style},console.log(this.state))
        },10000);

    }

    componentDidUpdate(){

        // it will be executed on each time after re-render ex: when u update the state value

        console.log("componentDidUpdate executed")

    }


    render() {
        return (
            <div className="parent">
                <h1>Parent </h1>
              
              


                <br />
                <input type="text" onChange={(e)=>{
                    let child_style=this.state.child_style
                    child_style["color"]=e.target.value
                    this.setState({child_style:child_style},console.log(this.state))
                }}  />

                <p>Current color: {this.state.child_style && this.state.child_style.color?this.state.child_style.color:""}</p>
                <br />

                
                <Child child_style={this.state.child_style}/>

               

            </div>
        )
    }
}