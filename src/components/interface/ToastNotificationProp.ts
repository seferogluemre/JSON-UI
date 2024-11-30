export interface ToastNotificationProps {
    message: string;
    delay?: number;
    show: boolean;
    onClose: () => void;
}
