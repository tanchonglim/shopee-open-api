"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
class Chat {
    constructor(http) {
        this.http = http;
    }
    getMessage(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "sellerchat/get_message";
            const result = yield this.http.get(apiPath, {
                params,
            });
            return result.data;
        });
    }
    sendMessage(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "sellerchat/send_message";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
    getConversationList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "sellerchat/get_conversation_list";
            const result = yield this.http.get(apiPath, {
                params,
            });
            return result.data;
        });
    }
    getOneConversation(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "sellerchat/get_one_conversation";
            const result = yield this.http.get(apiPath, {
                params,
            });
            return result.data;
        });
    }
    deleteConversation(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "sellerchat/delete_conversation";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
    getUnreadConversationCount() {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "sellerchat/get_unread_conversation_count";
            const result = yield this.http.get(apiPath);
            return result.data;
        });
    }
    pinConversation(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "sellerchat/pin_conversation";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
    unpinConversation(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "sellerchat/unpin_conversation";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
    readConversation(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "sellerchat/read_conversation";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
    unreadConversation(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "sellerchat/unread_conversation";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
    getOfferToggleStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "sellerchat/get_offer_toggle_status";
            const result = yield this.http.get(apiPath);
            return result.data;
        });
    }
    setOfferToggleStatus(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "sellerchat/set_offer_toggle_status";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
}
exports.Chat = Chat;
//# sourceMappingURL=Chat.js.map