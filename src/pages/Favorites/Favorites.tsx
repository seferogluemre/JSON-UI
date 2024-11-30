import { useState } from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import { useStore } from "../../store/store";
import BsCard from "../../components/layout/BsCard";
import ToastNotification from "../../components/layout/ToastNotification";

const FavoritesPage = () => {
    const { favorites, removeFavorite }: any = useStore();

    const [toastShow, setToastShow] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const handleRemoveFavorite = (id: number) => {
        removeFavorite(id);
        setToastMessage("Removed from Favorites");
        setToastShow(true);
    };

    return (
        <Container>
            <h2 className="fw-bold text-center display-3 my-3">Favorites</h2>
            {favorites.length === 0 ? (
                <Alert variant="info" className="text-center fst-italic fw-bold">
                    You don't have any favorite albums yet.
                </Alert>
            ) : (
                <Row>
                    {favorites.map((photo: any) => (
                        <Col
                            sm={6}
                            md={4}
                            lg={3}
                            className="mb-4 d-flex justify-content-center align-items-center"
                            key={photo.id}
                        >
                            <BsCard
                                imgUrl={photo.thumbnailUrl}
                                title={photo.title}
                                userLink={`/users/${photo.userId}`}
                                userId={photo.userId}
                                onClickHandler={() => handleRemoveFavorite(photo.id)}
                            />
                        </Col>
                    ))}
                </Row>
            )}
            <ToastNotification
                message={toastMessage}
                show={toastShow}
                onClose={() => setToastShow(false)}
            />
        </Container>
    );
};

export default FavoritesPage;