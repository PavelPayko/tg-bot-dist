"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dialogButtons = void 0;
const telegraf_1 = require("telegraf");
function dialogButtons(num) {
    const buttons = {
        0: telegraf_1.Markup.removeKeyboard(),
        1: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('0', 'create'),
            telegraf_1.Markup.button.callback('1-3 года', 'create'),
            telegraf_1.Markup.button.callback('3-6 лет', 'create'),
            telegraf_1.Markup.button.callback('6+ лет', 'create'),
        ], {
            columns: 2
        }),
        2: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('0', 'create'),
            telegraf_1.Markup.button.callback('1-3 года', 'create'),
            telegraf_1.Markup.button.callback('3-6 лет', 'create'),
            telegraf_1.Markup.button.callback('6+ лет', 'create'),
        ], {
            columns: 2
        }),
        3: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('Да', 'create'),
            telegraf_1.Markup.button.callback('Нет', 'create'),
        ], {
            columns: 2
        }),
        4: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('1-3', 'create'),
            telegraf_1.Markup.button.callback('3-10', 'create'),
            telegraf_1.Markup.button.callback('10+', 'create'),
        ], {
            columns: 2
        }),
        5: telegraf_1.Markup.removeKeyboard(),
        6: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('50 - 100к', 'create'),
            telegraf_1.Markup.button.callback('100 - 150к', 'create'),
            telegraf_1.Markup.button.callback('150+', 'create'),
        ], {
            columns: 2
        }),
        7: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('Физлицо', 'create'),
            telegraf_1.Markup.button.callback('Физлицо в статусе ИП', 'create'),
            telegraf_1.Markup.button.callback('Самозанятый', 'create'),
        ], {
            columns: 2,
        }),
        8: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('Да', 'create'),
            telegraf_1.Markup.button.callback('Нет', 'create'),
        ], {
            columns: 2
        }),
        9: telegraf_1.Markup.keyboard([
            telegraf_1.Markup.button.callback('Да', 'create'),
            telegraf_1.Markup.button.callback('Нет', 'create'),
        ], {
            columns: 2
        }),
        10: telegraf_1.Markup.removeKeyboard(),
        11: telegraf_1.Markup.removeKeyboard(),
        12: telegraf_1.Markup.removeKeyboard(),
    };
    return buttons[num];
}
exports.dialogButtons = dialogButtons;
//# sourceMappingURL=app.buttons.js.map