import React, {Component} from "react"
import Steps from "./Steps"
import RegisterContext from "./RegisterContext"

export default class Register extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
            step: 0,
            increaseStep: () => {
                this.setState( (currentState) => {
                    return({
                        step: currentState.step + 1
                    })
                })
            },
            decreaseStep: () => {
                this.setState((currentState) => {
                    return ({
                        step: currentState.step - 1
                    })
                })
            },

            printStep: () => {console.log(this.state)}
        }
    }

    render() {
        return(
            <RegisterContext.Provider value={this.state}>
                <Steps />
            </RegisterContext.Provider>
        )
    }
}