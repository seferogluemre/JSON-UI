import axios from "axios";
import { Container, ListGroup, Row } from "react-bootstrap";
import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { CommentParams, PostParams } from "../../components/interface/UserPostDetailProps";

// Loader fonksiyonu
export const postLoader = async ({ params }: LoaderFunctionArgs) => {
    // Gönderi bilgisi
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    );

    // Yorum bilgileri
    const commentResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`
    );

    // Kullanıcı bilgileri (post.userId üzerinden alınıyor)
    const post = response.data;
    const userResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${post.userId}`
    );

    const comments = commentResponse.data;
    const user = userResponse.data;

    return { post, comments, user };
};

// React bileşeni
function PostDetail() {
    const { post, comments, user } = useLoaderData() as {
        post: PostParams;
        comments: CommentParams[];
        user: {
            username: string;
            id: number;
        };
    };

    return (
        <>
            <Container>
                <div className="text-center text-light">
                    <h1>Post Details</h1>
                </div>
                <Row className="d-flex justify-content-center my-5 py-3">
                    <div className="col-lg-6 col-xxl-8 col-md-6">
                        <div className="text-center text-light">
                            <Link to={"/users/" + user.id} className="text-decoration-none text-light fs-3 pb-5"> {user.username}</Link>
                            <h2 className="pt-4">{post.title}</h2>
                            <p>{post.body}</p>

                            <h2 className="text-center py-3">Comments</h2>
                        </div>
                        <ListGroup>
                            {comments.map((comment) => (
                                <ListGroup.Item key={comment.id} className="list-item">
                                    <h3>{comment.name}</h3>
                                    <p>{comment.body}</p>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default PostDetail;
