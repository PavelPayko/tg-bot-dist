import { Telegraf } from 'telegraf';
import { AppService } from './app.service';
import { Context } from './context.interface';
export declare class AppUpdate {
    private readonly bot;
    private readonly appService;
    constructor(bot: Telegraf<Context>, appService: AppService);
    startCommand(ctx: Context): Promise<void>;
    getMsg(message: string, ctx: Context): Promise<void>;
}
