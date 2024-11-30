import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

interface UserPostsParams {
    userId: number;
    id: number;
    title: string;
}



function UserPosts() {
    const [userPosts, setUserPosts] = useState<UserPostsParams[]>([]);
    const { userId } = useParams<{ userId: string }>();
    const [loading, setLoading] = useState<boolean>(false);

    const getUserPosts = async (userId: string) => {
        setLoading(true)
        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${userId}/posts`
            );
            const posts: UserPostsParams[] = response.data; // Direkt response.data kullanabilirsiniz
            setLoading(false)
            return posts;
        } catch (error) {
            console.error("Error fetching posts:", error);
            return []; // Eğer hata alırsak boş bir dizi döndürelim
        }
    };

    useEffect(() => {
        const fetchUserPosts = async () => {
            if (!userId) {
                setLoading(true)
                return 0;
            };
            const postsData = await getUserPosts(userId);
            setUserPosts(postsData);
        };
        fetchUserPosts();
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
            <h2 className="title">User Posts</h2>
            <ListGroup>
                {userPosts.map((post) => (
                    <ListGroup.Item key={post.id} className="list-item">
                        <h3>{post.title}</h3>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default UserPosts;
