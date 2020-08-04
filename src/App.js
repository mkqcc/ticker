import React from 'react'

export default class Ticker extends React.Component {
    constructor() {
        super()
        this.state = {count: 0, paused: true}
    }

    startTick = () => {
        this.interval = setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000)
        this.setState({paused: false})
    }

    stopTick = () => {
        clearInterval(this.interval)
        this.setState({paused: true})
    }

    componentDidMount() {
        this.startTick()
    }

    reset = () => {
        this.setState({count: 0, paused: true})
        clearInterval(this.interval)
        return true
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !this.state.paused && this.reset
    }

    render() {
        return (
            <div className="container">
                <p id="ticker">The ticker number is: {this.state.count}</p>
                <button onClick={this.stopTick}>Pause the ticker</button>
                <button onClick={this.startTick}>Resume the ticker</button>
                <button onClick={this.reset}>Reset the ticker</button>
            </div>
        )
    }
}