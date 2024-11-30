import { Toast, ToastContainer } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastNotificationProps } from "../interface/ToastNotificationProp";


const ToastNotification: React.FC<ToastNotificationProps> = ({
    message,
    delay = 3000,
    show,
    onClose,
}) => {
    return (
        <ToastContainer className="p-3 toastNotification">
            <Toast show={show} onClose={onClose} delay={delay} autohide>
                <Toast.Header className="text-muted fw-bold mx-5">
                    {message}
                </Toast.Header>
            </Toast>
        </ToastContainer>
    );
};

export default ToastNotification;