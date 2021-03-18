import { Link } from 'react-router-dom';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';
import '../styles/header.css';
// import { useContext } from 'react';
// import UserContext from '../context/user';

export default function Header() {
  // const { user, setUser } = useContext(UserContext);
  return (
    <header>
      <Container>
        {/* logo goes here */}
        <Nav style={{ justifyContent: 'flex-end' }}>
          <NavItem>
            <NavLink tag={Link} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/recipes">Recipes</NavLink>
          </NavItem>
            {/* {(user) ? (
              <li>
                <Link to="/logout">Log out</Link>
              </li>
            ) : (<> */}
              <NavItem>
                <NavLink tag={Link} to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/register">Register</NavLink>
              </NavItem>
            {/* </>)} */}
        </Nav>
      </Container>
    </header>
  )
}