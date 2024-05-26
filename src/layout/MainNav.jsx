import React, {useState} from "react";
import styled from "styled-components";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: none;
  padding: 20px;
  align-items: center;
  font-size: x-large;
  text-align: center;

  @media (max-width: 970px) {
    flex-direction: column;
  }
`;

const StyledLi = styled.li`
  display: flex;
  padding-right: 30px;

  @media (max-width: 970px) {
    padding: 10px 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  color: black;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    color: white;
  }
`;

const Logo = styled(NavLink)`
  color: black;
  cursor: pointer;
  text-decoration: none;
  font-size: 35px;
  font-weight: 600;
  font-family: "raleway";
  @media (max-width: 970px) {
    font-size: 50px;
  }
`;

const LogoutButton = styled.button`
  background-color: black;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  transition: background-color 0.2s ease, color 0.2s ease;

&:hover {
  background-color: #ffffff;
  color: #000000;
}
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  align-items: center;

  @media (max-width: 970px) {
    flex-direction: column;
    display: ${props => (props.open ? 'flex' : 'none')};
  }
`;

const Hamburger = styled.div`
  display: none;

  @media (max-width: 970px) {
    display: block;
    font-size: 3rem;
  }
`;

const HorisontalLine = styled.hr`
  display: none;
  @media (max-width: 970px) {
    display: block;
    width: 50%;
    margin: 0 auto;
    background-color: black;
    height: 3px;
    border: none;
    filter: blur(1px);
    filter: opacity(40%);
  }
`;

const MainNav = ({ setIsLoggedIn, loggedInUser, setLoggedInUser }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
    localStorage.removeItem("token");

    setLoggedInUser({ email: "", name: "", roles: ["user"] });
  };

  return (
    <>
    <Nav>
      <Logo to="/">Notes.com</Logo>
      <Hamburger onClick={() => setOpen(!open)}>☰</Hamburger>
      <Menu open={open}>     
        {loggedInUser.roles.includes("admin") && (
          <StyledLi>
            <StyledNavLink to="/adminPage">AdminPage</StyledNavLink>
          </StyledLi>
        )}
        <StyledLi>
          <StyledNavLink to="/note">Notes</StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to="/about">About</StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to="/myNotes">My Notes</StyledNavLink>
        </StyledLi>
        <StyledLi>
          <LogoutButton type="button" onClick={handleLogout}>
            Logout
          </LogoutButton>
        </StyledLi>
        </Menu>
    </Nav>
    <HorisontalLine></HorisontalLine>
    </>
  );
};

export default MainNav;
