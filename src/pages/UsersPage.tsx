import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

interface UsersPageProp {
    id: number;
    name: string;
    username: string;
    email: string;
}

// Loader fonksiyonu
export const usersLoader = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data; // Doğrudan data döndürülüyor
};

function UsersPage() {
    const users = useLoaderData() as UsersPageProp[]; // Gelen veriyi  tipe çeviriyoruz

    return (
        <Container>
            <Row>
                {users.length > 0 ? (
                    users.map((user) => (
                        <Col key={user.id} md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{user.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        @{user.username}
                                    </Card.Subtitle>
                                    <Card.Text>{user.email}</Card.Text>
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
