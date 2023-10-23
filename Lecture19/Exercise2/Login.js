//create button login
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

//create button logout
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}