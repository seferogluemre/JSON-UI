import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ToastNotification from "../layout/ToastNotification";
import { FaHeart } from "react-icons/fa";
import { CardProps } from '../interface/CardBsProps'


const BsCard: React.FC<CardProps> = ({
    imgUrl,
    title,
    userLink,
    userId,
    onClickHandler,
}) => {
    const [toastShow, setToastShow] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const handleButtonClick = () => {
        if (onClickHandler) {
            onClickHandler();
            setToastShow(true);
            setToastMessage("Removed from Favorites");
        }
    };

    return (
        <>
            <Card className="h-100 shadow-lg" style={{ width: "17rem" }}>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        By User: <Link to={userLink}>{userId}</Link>
                    </Card.Text>
                    <div className="d-flex justify-content-end">
                        <Button variant="light" onClick={handleButtonClick}>
                            <FaHeart className="me-2 text-danger fs-4" /> Remove From Favorite
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            <ToastNotification
                message={toastMessage}
                show={toastShow}
                onClose={() => setToastShow(false)}
            />
        </>
    );
};

export default BsCard;