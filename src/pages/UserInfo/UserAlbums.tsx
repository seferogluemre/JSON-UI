import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

interface UserAlbumProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function UserAlbums() {
    const [userAlbums, setUserAlbums] = useState<UserAlbumProps[]>([]);
    const { userId } = useParams<{ userId: string }>();
    const [loading, setLoading] = useState<boolean>(false);

    const getUserAlbums = async (userId: string) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${userId}/albums`
            );
            const posts: UserAlbumProps[] = response.data;
            setLoading(false);
            return posts;
        } catch (error) {
            console.error("Error fetching posts:", error);
            return []; // Eğer hata alırsak boş bir dizi döndürelim
        }
    };

    useEffect(() => {
        const fetchUserAlbums = async () => {
            if (!userId) {
                setLoading(true)
                return
            };
            const postsData = await getUserAlbums(userId);
            setUserAlbums(postsData);
        };
        fetchUserAlbums();
    }, [userId]);

    if (loading) {
        return (
            <div className="loader-container">
                <div className="bouncing-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        );
    }


    return (
        <div>
            <h2 className="title">User Albums</h2>
            <ListGroup>
                {userAlbums.map(({ id, title }) => (
                    <Link to={`/users/${userId}/albums/${id}`} key={id} className="list-item">
                        <h3>{title}</h3>
                    </Link>
                ))}
            </ListGroup>
        </div>
    );
}

export default UserAlbums;
