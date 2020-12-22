import React, { Component } from 'react'

export default class child extends Component {
    
    render() {

        console.log(this.props,this.props.child_style.color)

        return (
            <div className="child_component" style={{backgroundColor:this.props.child_style.color}}>

                
            </div>
        )
    }
}