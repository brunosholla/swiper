import React, {Component} from 'react';
import InactivityDetector from "./Services/InactivityDetector";


export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isInactive: false
        }
        this.checkActivities = this.checkActivities.bind(this)
    }


    checkActivities(isInactive) {
       this.setState({isInactive})
    }


    render() {

        const {isInactive} = this.state
        return (

                <InactivityDetector checkActivities={this.checkActivities}/>

        )
    }
}