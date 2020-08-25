import React from "react";
import api from "./api";
import {Redirect} from "react-router-dom"
import { BarLoader } from "react-spinners";

export default function WithAuth(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                loadValue: 0,
                authed: 0 //pending
            }
        }

        componentDidMount() {
            api("/checkToken").then((resp)=>{
                if (resp.success) 
                    this.setState({authed:1}) //successful
                else 
                    this.setState({ authed:2}) //unsuccessful
            })
        }
        render() {
            if (this.state.authed === 0)
                return (<BarLoader css={{ width: "100%" }} color={"#007BFF"} />)
            else if (this.state.authed === 1)
                return (<WrappedComponent />);
            else if (this.state.authed === 2)
                return (<Redirect to="/login"/>)
        }
    }
}
