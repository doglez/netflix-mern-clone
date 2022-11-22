export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    backdropPath?: string | null;
    onClose: () => void;
}
