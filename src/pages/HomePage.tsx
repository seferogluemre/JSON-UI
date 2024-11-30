import { Container, Row } from "react-bootstrap";

function UsersPage() {

    return (
        <>
            <Container>
                <Row className="d-flex justify-content-center py-5 homePage-info">
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <h2>
                            This project is built using React and TypeScript, leveraging the JSON Placeholder API to create a user management system.
                        </h2>

                        <h4> Users Page: Displays a list of all users with an option to view detailed profiles.</h4>
                        <h4>
                            User Details Page: Shows detailed information about a selected user, including their posts, albums, and todos.
                        </h4>
                        <h4>
                            Favorites Page: Allows you to add users to a favorites list and easily manage them.
                        </h4>
                        <p>
                            The application offers a simple, user-friendly interface for managing and exploring data efficiently. 🎉

                        </p>

                        <h2>
                            Technologies Used
                        </h2>
                        <p>
                            React: Component-based modern UI development.

                        </p>
                        <p> TypeScript: Static typing for reliable and maintainable code.</p>
                        <p>
                            React Router DOM: For seamless page transitions and routing.
                        </p>
                        Zustand: Lightweight and straightforward global state management.<br />
                        React Bootstrap: Pre-styled components for responsive designs.<br />
                        React Icons: Elegant and customizable icons for the UI.<br />
                        Sass: A CSS preprocessor for writing clean and organized styles.<br />
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default UsersPage;