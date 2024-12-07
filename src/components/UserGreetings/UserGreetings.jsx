import './UserGreetings.css'

function UserGreetings(props = {userName: "Guest", isLoggedIn: false}) {
    
    const welcomeMessage = <h2 className="welcome-message">
        Welcome {props.userName}
    </h2>

    const loginMessage = <h2 className="login-message">
        You must be logged in
    </h2>

    return ( 
        props.isLoggedIn ? welcomeMessage : loginMessage
    );
}

export default UserGreetings;