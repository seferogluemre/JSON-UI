import { NavLink } from "react-router-dom"
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useStore } from "../../store/store"

export function NavbarComp() {

    const { favorites }: any = useStore();

    return (
        <Navbar expand="lg" className="bg-body-teritary navbar">
            <Container>
                <Navbar.Brand href="#home" className="link">Json Placeholder UI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to={`/`} as={NavLink} className="link">Anasayfa</Nav.Link>
                        <Nav.Link to={`/users`} as={NavLink} className="link">Users</Nav.Link>
                    </Nav>
                    <Nav.Link as={NavLink} className="link" to={"favorites"}>Favori: {favorites.length}</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
