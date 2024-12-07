import './UserGreetings.css'

function UserGreetings({userName = "Guest", isLoggedIn = false}) {
    
    const welcomeMessage = <h2 className="welcome-message">
        Welcome {userName}
    </h2>

    const loginMessage = <h2 className="login-message">
        A {userName} must be logged in
    </h2>

    return ( 
        isLoggedIn ? welcomeMessage : loginMessage
    );
}

export default UserGreetings;