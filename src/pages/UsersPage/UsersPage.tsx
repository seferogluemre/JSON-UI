import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import axios from "axios";
import { NavLink, useLoaderData } from "react-router-dom";
import { UsersPageProp } from "../../components/interface/UserPageProp";
import { FaArrowRight } from "react-icons/fa6";

// Loader fonksiyonu
export const usersLoader = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data; // Doğrudan data döndürülüyor
};

function UsersPage() {
    const users = useLoaderData() as UsersPageProp[]; // Gelen veriyi  tipe çeviriyoruz

    return (
        <Container>
            <Row className="my-5">
                {users.length > 0 ? (
                    users.map(({ id, name }) => (
                        <Col key={id} md={4} className="mb-4 col-lg-3 col-sm-6 usersCol" >
                            <Card className="card">
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <Nav.Link to={`/users/${id}`} as={NavLink}>Details <FaArrowRight /></Nav.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <div>No users found</div>
                )}
            </Row>

        </Container>
    );
}

export default UsersPage;
