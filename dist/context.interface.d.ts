import { Context as ContextTelegraf } from 'telegraf';
export declare type User = {
    fist_name: string;
    id: number;
    lastname?: string;
    username?: string;
};
export interface Context extends ContextTelegraf {
    session: {
        count?: number;
        answers: string[];
        user: User;
        chatId: number;
        cv?: string;
    };
}
