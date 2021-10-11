export default function LoginLink(props) {
  console.log(props.loggedIn);
  if (props.loggedIn) return <ShowLogout />;
  return <ShowloginAndSignUp />;
}

export function ShowloginAndSignUp(props) {
  return <a href="/signup">SignUp</a>;
}

export function ShowLogout(props) {
  return <a href="/logout">Logout</a>;
}
