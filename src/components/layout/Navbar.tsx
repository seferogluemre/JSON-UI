import { NavLink } from "react-router-dom"
import { Container, Nav, Navbar } from 'react-bootstrap'

export function NavbarComp() {
    return (
        <Navbar expand="lg" className="bg-body-teritary navbar">
            <Container>
                <Navbar.Brand href="#home">Json Placeholder UI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to={`/`} as={NavLink}>Anasayfa</Nav.Link>
                        <Nav.Link to={`/users`} as={NavLink}>Users</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
