export interface MessageState {
    requesting: boolean;
    error: string;
    lastApiMessage: Response | null;
}