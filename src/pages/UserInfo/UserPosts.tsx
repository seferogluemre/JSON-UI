import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

interface UserPostsParams {
    userId: number;
    id: number;
    title: string;
}

const getUserPosts = async (userId: string) => {
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${userId}/posts`
        );
        const posts: UserPostsParams[] = response.data; // Direkt response.data kullanabilirsiniz
        return posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return []; // Eğer hata alırsak boş bir dizi döndürelim
    }
};

function UserPosts() {
    const [userPosts, setUserPosts] = useState<UserPostsParams[]>([]);
    const { userId } = useParams<{ userId: string }>();

    useEffect(() => {
        const fetchUserPosts = async () => {
            if (!userId) return;
            const postsData = await getUserPosts(userId);
            setUserPosts(postsData);
        };
        fetchUserPosts();
    }, [userId]);

    return (
        <div>
            <h3>User Posts</h3>
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
