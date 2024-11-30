import axios from "axios";
import { Container, Row } from "react-bootstrap";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";


export const userPostDetailLoader = async ({ params }: LoaderFunctionArgs) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
        return response.data;
    } catch (error) {
        throw new Response("User not found", { status: 404 });
    }
};

function PostDetail() {

    const post = useLoaderData();
    console.log(post)


    return <>
        <Container>
            <Row>



            </Row>
        </Container>
    </>
}

export default PostDetail;