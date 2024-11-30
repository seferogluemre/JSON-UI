import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, LoaderFunctionArgs, useLoaderData, useParams } from "react-router-dom";
import { AlbumProps } from "../../components/interface/AlbumProps";
import { useStore } from "../../store/store";
import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import ToastNotification from "../../components/layout/ToastNotification";


// eslint-disable-next-line react-refresh/only-export-components
export const fetchAlbumInfo = async ({ params }: LoaderFunctionArgs) => {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/albums/${params.albumId}/photos`
    );
    const photos = response.data;
    return photos;

};

function AlbumDetail() {

    const photos = useLoaderData() as AlbumProps[];
    const [toastShow, setToastShow] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const { addFavorite, removeFavorite, favorites }: any = useStore();
    const { userId } = useParams();

    const handleFavoriteClick = (photo: AlbumProps) => {
        if (favorites.some((fav: AlbumProps) => fav.id === photo.id)) {
            removeFavorite(photo.id);
            setToastMessage("Removed from Favorites");
        } else {
            addFavorite({ ...photo, userId: Number(userId) });
            setToastMessage("Added to Favorites");
        }
        setToastShow(true);
    };
    return <>
        <Container>
            <Row>
                {photos?.map((photo) => (
                    <Col
                        sm={6}
                        md={6}
                        lg={3}
                        className="mb-4 d-flex justify-content-center align-items-center"
                        key={photo.id}
                    >
                        <Card className="h-100 shadow-lg " style={{ width: "17rem" }}>
                            <Card.Img variant="top" src={photo.thumbnailUrl} />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title>{photo.title}</Card.Title>
                                <Card.Link>
                                    <div className="mt-auto">
                                        <Button
                                            variant={"light"}
                                            onClick={() => handleFavoriteClick(photo)}
                                        >
                                            {favorites.some(
                                                (fav: AlbumProps) => fav.id === photo.id
                                            ) ? (
                                                <>
                                                    {" "}
                                                    <FaHeart className="text-danger me-2 fs-4" /> Remove
                                                    Favorite{" "}
                                                </>
                                            ) : (
                                                <>
                                                    <CiHeart className="fs-4 me-2" /> Add to Favorites
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div>
                <Link to={`/favorites`} className="favorites-button">
                    <Button variant="outline-secondary">
                        Favorites({favorites.length})
                    </Button>
                </Link>
            </div>

        </Container>
        <ToastNotification
            message={toastMessage}
            show={toastShow}
            onClose={() => setToastShow(false)}
        />

    </>
}

export default AlbumDetail;