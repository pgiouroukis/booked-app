import React from "react"
import RegisterUser from "./RegisterUser"
import RegisterContext from "./RegisterContext"

const steps = [
    {
        content: <RegisterUser />,
    },
    {
        content: 'Second-content',
    },
    {
        content: 'Last-content',
    },
];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    render() {
        return (
            <>
                <RegisterContext.Consumer>
                    {(context) => (
                        <div className="steps-content">
                            {steps[context.step].content}
                        </div>
                    )}
                </RegisterContext.Consumer>
            </>
        );
    }
}

/*
<Button onClick={context.increaseStep}>Increment</Button>
<Button onClick={context.decreaseStep}>Decrement</Button>
<Button onClick={context.printStep}>Print</Button>
*/
