import axios from "axios"
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom"
import { User } from "../../components/interface/UserProps";
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
                <div className="col-xxl-4 col-lg-6 pt-5  col-md-12 col-sm-12">
                    <h2 className="user-info">{user.name}</h2>
                    <h2 className="user-info">{user.id}</h2>
                    <h2 className="user-info">{user.username}</h2>
                    <h2 className="user-info">@ {user.email}</h2>
                </div>
                <div className="col-lg-6 col-xxl-6 col-md-12 col-sm-12">
                    <UserTab
                        {...{
                            postLink: `/users/${user.id}/posts`,
                            albumLink: `/users/${user.id}/albums`,
                            todoLink: `/users/${user.id}/todos`,
                        }}
                    />
                </div>
            </Row>
        </Container>
    </>
}
export default UserDetailPage;