"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUpdate = void 0;
const nestjs_telegraf_1 = require("nestjs-telegraf");
const telegraf_1 = require("telegraf");
const timers_1 = require("timers");
const app_buttons_1 = require("./app.buttons");
const app_service_1 = require("./app.service");
const app_utils_1 = require("./app.utils");
let AppUpdate = class AppUpdate {
    constructor(bot, appService) {
        this.bot = bot;
        this.appService = appService;
    }
    async startCommand(ctx) {
        var _a, _b;
        ctx.session.count = 0;
        ctx.session.answers = [];
        ctx.session.chatId = ctx.message.chat.id;
        ctx.session.user = {
            fist_name: (_a = ctx.message.from) === null || _a === void 0 ? void 0 : _a.first_name,
            id: (_b = ctx.message.from) === null || _b === void 0 ? void 0 : _b.id,
            lastname: ctx.message.from.last_name,
            username: ctx.message.from.username
        };
        await ctx.reply((0, app_utils_1.greet)(ctx.message.from.first_name));
        (0, timers_1.setTimeout)(async () => (await ctx.reply(app_utils_1.questionsList[0], (0, app_buttons_1.dialogButtons)(1))), 1000);
        ctx.session.count++;
    }
    async getMsg(message, ctx) {
        var _a, _b, _c, _d, _e, _f, _g;
        let count = ctx.session.count;
        if (count >= app_utils_1.questionsList.length) {
            ctx.session.answers.push(`${count}. ${((_a = ctx === null || ctx === void 0 ? void 0 : ctx.message) === null || _a === void 0 ? void 0 : _a.text) || '-'}`);
            const cv = (_c = (_b = ctx.message) === null || _b === void 0 ? void 0 : _b.document) === null || _c === void 0 ? void 0 : _c.file_id;
            ctx.session.cv = cv;
            await ctx.reply((0, app_utils_1.feedback)(), (0, app_buttons_1.dialogButtons)(0));
            const userInfo = (0, app_utils_1.getUserInfo)(ctx.session.user);
            const answers = `\n${(_e = (_d = ctx.session) === null || _d === void 0 ? void 0 : _d.answers) === null || _e === void 0 ? void 0 : _e.join('\n')}`;
            await ctx.telegram.sendMessage(1182528963, `${userInfo}\n${answers}`, { parse_mode: 'HTML' });
            await ctx.telegram.sendMessage(1159742269, `${userInfo}\n${answers}`, { parse_mode: 'HTML' });
            cv && await ctx.telegram.sendDocument(1182528963, ctx.message.document.file_id) && await ctx.telegram.sendDocument(1159742269, ctx.message.document.file_id);
        }
        else if (count && count < app_utils_1.questionsList.length) {
            if (count === 7 && ((_f = ctx === null || ctx === void 0 ? void 0 : ctx.message) === null || _f === void 0 ? void 0 : _f.text) === "Физлицо в статусе ИП") {
                ctx.session.answers.push(`${count}.${(_g = ctx === null || ctx === void 0 ? void 0 : ctx.message) === null || _g === void 0 ? void 0 : _g.text}`);
                ctx.session.answers.push(`${count + 1}.-`);
                ctx.session.count += 2;
                (0, timers_1.setTimeout)(async () => {
                    await ctx.reply(app_utils_1.questionsList[count + 1], (0, app_buttons_1.dialogButtons)(count + 1));
                }, 500);
            }
            else {
                (0, timers_1.setTimeout)(async () => {
                    var _a;
                    await ctx.reply(app_utils_1.questionsList[count], (0, app_buttons_1.dialogButtons)(count + 1));
                    ctx.session.answers.push(`${count}. ${((_a = ctx === null || ctx === void 0 ? void 0 : ctx.message) === null || _a === void 0 ? void 0 : _a.text) || '-'} `);
                    ctx.session.count++;
                }, 500);
            }
        }
        else {
            await ctx.reply('/start');
        }
    }
};
__decorate([
    (0, nestjs_telegraf_1.Start)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppUpdate.prototype, "startCommand", null);
__decorate([
    (0, nestjs_telegraf_1.On)('message'),
    __param(0, (0, nestjs_telegraf_1.Message)('message')),
    __param(1, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppUpdate.prototype, "getMsg", null);
AppUpdate = __decorate([
    (0, nestjs_telegraf_1.Update)(),
    __param(0, (0, nestjs_telegraf_1.InjectBot)()),
    __metadata("design:paramtypes", [telegraf_1.Telegraf,
        app_service_1.AppService])
], AppUpdate);
exports.AppUpdate = AppUpdate;
//# sourceMappingURL=app.update.js.map