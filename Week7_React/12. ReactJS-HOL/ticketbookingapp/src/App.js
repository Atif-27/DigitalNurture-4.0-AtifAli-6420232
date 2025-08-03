import React, { Component } from "react";

// Login Button Component
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

// Logout Button Component
function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

// User View Component (Visible after Login)
function UserGreeting() {
  return <h1>Welcome back</h1>;
}

// Guest View Component (Visible before Login)
function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

// Main App
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let greeting;
    let button;

    if (isLoggedIn) {
      greeting = <UserGreeting />;
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      greeting = <GuestGreeting />;
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {greeting}
        {button}
      </div>
    );
  }
}

export default App;
