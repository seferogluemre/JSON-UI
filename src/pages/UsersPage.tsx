import { Container } from "react-bootstrap";
import axios from 'axios'

interface UserProp {
    id: number;
    name: string;
    username: string
    email: string;
}


export const usersLoader = async () => {
    const repsonse = await axios.get("https://jsonplaceholder.typicode.com/users");
    return repsonse.data.results;
}



function UsersPage() {
    return <>
        <Container>

        </Container>

    </>
}

export default UsersPage;