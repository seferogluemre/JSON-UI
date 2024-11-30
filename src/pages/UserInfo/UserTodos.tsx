import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BiCheck, BiX } from "react-icons/bi";
import { useParams } from "react-router-dom";

interface UserTodoProps {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getUserTodos = async (userId: string) => {
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${userId}/todos`
        );
        const posts: UserTodoProps[] = response.data; // Direkt response.data kullanabilirsiniz
        return posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return []; // Eğer hata alırsak boş bir dizi döndürelim
    }
};

function UserAlbums() {
    const [userTodos, setUserTodos] = useState<UserTodoProps[]>([]);
    const { userId } = useParams<{ userId: string }>();

    useEffect(() => {
        const fetchUserTodos = async () => {
            if (!userId) return;
            const postsData = await getUserTodos(userId);
            setUserTodos(postsData);
        };
        fetchUserTodos();
    }, [userId]);

    return (
        <div>
            <h2 className="title">User Albums</h2>
            <ListGroup>
                {userTodos.map((todo) => (
                    <ListGroupItem key={todo.id} className="list-item">
                        <h3>{todo.title}</h3>{
                            todo.completed ? (
                                <p>
                                    Completed:  <BiCheck className="text-success fs-1" />
                                </p>
                            ) : (
                                <p>
                                    Incomplete: <BiX className="text-danger fs-1" />
                                </p>
                            )
                        }
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
}

export default UserAlbums;
