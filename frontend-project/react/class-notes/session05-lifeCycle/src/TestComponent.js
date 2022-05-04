import React, { Component } from 'react'

// var myT;

export default class TestComponent extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            name: "Halit",
            color: "blue",
            count: 0,
         };
         console.log("Hello from TestComponent constructor")
      }

    static getDerivedStateFromProps(props, state){
        console.log("Hello from TestComponent getDerivedStateFromProps")
        // console.log("Props: ", props)
        console.log("state: ", state)
        return null
    }

    componentDidMount(){
        console.log("Hello from TestComponent componentDidMount")
        // console.log(this.state)
        // myT = setTimeout(() => {
        //     this.setState({count: this.state.count + 1 })
        // }, 3000)
    }

    shouldComponentUpdate(){
        console.log("ShouldComponentUpdate!....")
        return this.state.count < 3 ? true : false
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Typical usage (don't forget to compare props):
        console.log("TestComp componentDidUpdate")
        console.log("PrevProps: ",prevProps)
        console.log("PrevState: ",prevState)
      }

    componentWillUnmount(){
        console.log("component GÜLE GÜLE...")
        // clearTimeout(myT)
    }


    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        console.log("Hello from TestComponent Render")
        return (
            <div>
                <p>This is a Class component</p>
                <p> {this.state.count} </p>
                <button onClick={this.handleClick} >arttır</button>
            </div>
        )
    }
}
