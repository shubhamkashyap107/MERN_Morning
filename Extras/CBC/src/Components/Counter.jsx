import { Component } from "react";

class MyCounter extends Component{

    constructor()
    {
        super()
        this.state = {
            name : "ZYX",
            count : 0
        }
    }

    incrementFn = () => {
        this.setState({
            count : this.state.count + 1
        })
    }


    decrementFn = () => {
        this.setState({
            count : this.state.count - 1
        })
    }

    resetFn = () => {
        this.setState({
            count : 0
        })
    }

    componentDidMount()
    {
        console.log("Counter Comp Mounted")
    }

    componentWillUnmount()
    {
        console.log("Counter Component Unmounted")
    }

    componentDidUpdate(prevProps)
    {
        if(this.state.count != prevProps.count)
        {
            console.log("Count State Updated")
        }
    }

    render(){
        console.log(this.state)
        return(
            <>
                {/* <h1>{this.props.name}</h1> */}
                <h1>{this.state.name}</h1>
                <div>{this.state.count}</div>
                <button onClick={this.incrementFn}>Increment</button>
                <button onClick={this.resetFn}>Reset</button>
                <button onClick={this.decrementFn}>Decrement</button>
            </>
        )
    }
}


export default MyCounter