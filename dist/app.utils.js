"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserInfo = exports.feedback = exports.greet = exports.questionsList = exports.showList = void 0;
const showList = todos => `Твой список задач: \n\n${todos
    .map(todo => (todo.isCompleted ? '✅' : '🔘') + ' ' + todo.name + '\n\n')
    .join('')}`;
exports.showList = showList;
exports.questionsList = [
    'Скажите, пожалуйста, у Вас опыт коммерческой разработки общий сколько ?',
    'Сколько опыта коммерческой разработки на React или Vue ?',
    'Работали ли Вы в команде разработчиков ?',
    'Сколько человек было в команде ?',
    'Какую роль играли на проекте ?',
    'Какая Ваша зп вилка ?',
    'Вы работаете как физлицо или юрлицо ?',
    'Если не работаете как ИП, то готовы были бы открыть ИП для работы с нами, с учетом, что мы покрываем все налоги ?',
    'Гражданство РФ ?',
    'Почему решили сменить место работы?',
    'Что ждете от нового места работы ?',
    'Пришлите, пожалуйста, свое CV',
];
const greet = (name) => `	Добрый день, ${name}!
		Меня зовут Валерия. Я HR менеджер компании Kvando Technologies. Приятно познакомиться! 
		Предлагаю для начала ответить на пару вопросов, а затем пообщаемся детально`;
exports.greet = greet;
const feedback = () => `Спасибо за обратную связь. HR менеджер свяжется с Вами в ближайшее время. 
			Телеграм для связи @ValeriBondareva`;
exports.feedback = feedback;
const getUserInfo = (user) => `
			Никнейм: ${(user === null || user === void 0 ? void 0 : user.username) ? '@' + user.username : '🤐'}
			Имя: ${(user === null || user === void 0 ? void 0 : user.fist_name) || '🤐'}
			Фамилия: ${(user === null || user === void 0 ? void 0 : user.lastname) || '🤐'}
			Профиль: <a href= "tg://user?id=${user === null || user === void 0 ? void 0 : user.id}" > ${(user === null || user === void 0 ? void 0 : user.fist_name) || ''}${user.lastname ? ' ' + user.lastname : ''} < /a>
				`;
exports.getUserInfo = getUserInfo;
//# sourceMappingURL=app.utils.js.map