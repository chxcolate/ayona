"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const types_1 = require("./types");
const discord_bot_1 = require("./discord-bot");
const discord_js_1 = require("discord.js");
const message_responder_1 = require("./services/message-responder");
const commands = require("./commands");
let container = new inversify_1.Container();
container.bind(types_1.TYPES.Ayona).to(discord_bot_1.Ayona).inSingletonScope();
container.bind(types_1.TYPES.Client).toConstantValue(new discord_js_1.Client());
container.bind(types_1.TYPES.Token).toConstantValue(process.env.TOKEN);
container.bind(types_1.TYPES.MessageResponder).to(message_responder_1.CommandHandler).inSingletonScope();
Object.keys(commands).forEach(element => {
    container.bind(types_1.TYPES.ICommand).to(commands[element]);
});
exports.default = container;
//# sourceMappingURL=inversify.config.js.map