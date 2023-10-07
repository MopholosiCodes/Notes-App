export const Footer = ({SignInLink, SignUpLink, SignUpOption, SignInOption, AuthState, changePage}) => {
  return (
    <footer>
      <span>
            {AuthState 
              ? <p>{SignInOption} <button onClick={() => changePage(false)}>{SignInLink}</button></p>
              : <p>{SignUpOption} <button onClick={() => changePage(true)}>{SignUpLink}</button></p>}
      </span>
    </footer>
  )
};
