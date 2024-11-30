import axios from "axios"
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom"
import { User } from "../../components/interface/User";
import { Container, Row } from "react-bootstrap";
import UserTab from "../../components/layout/UserTab";

export const userLoader = async ({ params }: LoaderFunctionArgs) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
        return response.data;
    } catch (error) {
        throw new Response("User not found", { status: 404 });
    }
};


function UserDetailPage() {
    const user = useLoaderData() as User;

    console.log(user)
    return <>
        <Container>
            <Row>
                <div className="col-xxl-6 col-lg-6 col-md-12 col-sm-12">
                    <h4>{user.name}</h4>
                    <h4>{user.id}</h4>
                    <h4>{user.username}</h4>
                    <h4>{user.email}</h4>
                </div>
                <UserTab
                    {...{
                        postLink: `/users/${user.id}/posts`,
                        albumLink: `/users/${user.id}/albums`,
                        todoLink: `/users/${user.id}/todos`,
                    }}
                />
            </Row>
        </Container>
    </>
}
export default UserDetailPage;