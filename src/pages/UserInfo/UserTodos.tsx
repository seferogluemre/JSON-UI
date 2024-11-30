import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BiCheck, BiX } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { UserTodoProps } from "../../components/interface/UserTodoProps";


function UserAlbums() {

    const [userTodos, setUserTodos] = useState<UserTodoProps[]>([]);
    const { userId } = useParams<{ userId: string }>();
    const [loading, setLoading] = useState<boolean>(false);

    const getUserTodos = async (userId: string) => {
        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${userId}/todos`
            );
            const posts: UserTodoProps[] = response.data; // Direkt response.data kullanabilirsiniz
            setLoading(false);
            return posts;
        } catch (error) {
            setLoading(true);
            alert("Veriler yüklenirken hata oluştu")
            console.error("Error fetching posts:", error);
            return []; // Eğer hata alırsak boş bir dizi döndürelim
        }
    };

    useEffect(() => {
        const fetchUserTodos = async () => {
            if (!userId) {
                setLoading(true);
                return 0;
            }
            const postsData = await getUserTodos(userId);
            setUserTodos(postsData);
        };
        fetchUserTodos();
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
    0
    return (
        <div>
            <h2 className="title">User Todos</h2>
            <ListGroup>
                {userTodos.map((todo) => (
                    <ListGroupItem key={todo.id} className="list-item">
                        <h3>{todo.title}</h3>{
                            todo.completed ? (
                                <p style={{ margin: "0px" }}>
                                    Completed:  <BiCheck className="text-success fs-1" />
                                </p>
                            ) : (
                                <p style={{ margin: "0px" }}>
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
