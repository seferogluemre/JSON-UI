export interface CardProps {
    imgUrl: string;
    title: string;
    userLink: string;
    userId?: number;
    onClickHandler?: () => void;
}