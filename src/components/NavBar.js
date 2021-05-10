import { React } from "react";
import styled from "styled-components";
import "../App.css";
import { Link } from "react-router-dom";

const ListItem = styled.li`
    list-style-type: none;
    display: inline;
    flex-direction: row;
`;

const Links = styled.a`
    text-decoration: none; 
    color: black; 
`;

const Nav = styled.div`
    background: #63D471;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const NavContainer = styled.div`
`;

export const NavBar = () => {
    return (
        <NavContainer>
            <Nav>
                <ListItem>
                    <Link to="/" style={{textDecoration : 'none'}}>
                        <Links>Home</Links>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/hospital" style={{textDecoration : 'none'}}>
                        <Links>Hospital Beds</Links>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/resources" style={{textDecoration : 'none'}}>
                        <Links>Resources</Links>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/dataviz" style={{textDecoration : 'none'}}>
                        <Links>Data Vitualization</Links>
                    </Link>
                </ListItem>
            </Nav>
        </NavContainer>
    );
}