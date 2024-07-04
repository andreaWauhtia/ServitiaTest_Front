export interface Notification{
    duration: number;
    message: string;
    status: 'sucess' | 'warning' | 'error';
}
