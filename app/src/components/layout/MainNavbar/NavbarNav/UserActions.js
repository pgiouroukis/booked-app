import React from "react";
import { Link, Redirect } from "react-router-dom";
import api from "../../../../utils/api"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    const user = JSON.parse(localStorage.getItem("user"))

    this.state = {
      visible: false,
      authed: true,
      user: user
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

    logoutUser = async () => {
        await api("/logout/user");
        this.setState({
            visible: this.state.visible,
            authed: false
        })
    }

  render() {

    if (!this.state.authed)
        return (<Redirect to="/login"  />)
    else
        return (
        <NavItem tag={Dropdown} caret toggle={this.toggleUserActions} className="text-nowrap">
            <DropdownToggle caret tag={NavLink} className="text-nowrap px-3" style={{paddingTop:"20px"}}>
                <span className="d-inline-block d-md-inline-block text-center">{this.state.user.email}</span>
            </DropdownToggle>
            <Collapse tag={DropdownMenu} right small open={this.state.visible}>
            <DropdownItem tag={Link} to="user-profile">
                <i className="material-icons">&#xE7FD;</i> Profile
            </DropdownItem>
            <DropdownItem tag={Link} to="edit-user-profile">
                <i className="material-icons">&#xE8B8;</i> Edit Profile
            </DropdownItem>
            <DropdownItem tag={Link} to="file-manager-list">
                <i className="material-icons">&#xE2C7;</i> Files
            </DropdownItem>
            <DropdownItem tag={Link} to="transaction-history">
                <i className="material-icons">&#xE896;</i> Transactions
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem tag={Link} to="/dashboard" onClick={this.logoutUser} className="text-danger">
                <i className="material-icons text-danger">&#xE879;</i> Logout
            </DropdownItem>
            </Collapse>
        </NavItem>
        );
  }
}


/*
            {<img
                className="user-avatar rounded-circle mr-2"
                src={require("./../../../../images/avatars/user.png")}
                alt="User Avatar"
                
            />}{ " " } 
                itan kato apo to dropdown toggle
*/