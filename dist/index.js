"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITEM_STATUS = exports.SHIPPING_DOCUMENT_TYPE = exports.MESSAGE_TYPE = exports.OPERATION = exports.ADDRESS_TYPE = exports.DISPUTE_REASON = exports.CANCEL_REASON = exports.RETURN_STATUS = exports.ORDER_STATUS = exports.LOGISTICS_STATUS = void 0;
const ShopeeOpenAPI_1 = require("./ShopeeOpenAPI");
const constants_1 = require("./consts/constants");
Object.defineProperty(exports, "LOGISTICS_STATUS", { enumerable: true, get: function () { return constants_1.LOGISTICS_STATUS; } });
Object.defineProperty(exports, "ORDER_STATUS", { enumerable: true, get: function () { return constants_1.ORDER_STATUS; } });
Object.defineProperty(exports, "RETURN_STATUS", { enumerable: true, get: function () { return constants_1.RETURN_STATUS; } });
Object.defineProperty(exports, "CANCEL_REASON", { enumerable: true, get: function () { return constants_1.CANCEL_REASON; } });
Object.defineProperty(exports, "DISPUTE_REASON", { enumerable: true, get: function () { return constants_1.DISPUTE_REASON; } });
Object.defineProperty(exports, "ADDRESS_TYPE", { enumerable: true, get: function () { return constants_1.ADDRESS_TYPE; } });
Object.defineProperty(exports, "OPERATION", { enumerable: true, get: function () { return constants_1.OPERATION; } });
Object.defineProperty(exports, "MESSAGE_TYPE", { enumerable: true, get: function () { return constants_1.MESSAGE_TYPE; } });
Object.defineProperty(exports, "SHIPPING_DOCUMENT_TYPE", { enumerable: true, get: function () { return constants_1.SHIPPING_DOCUMENT_TYPE; } });
Object.defineProperty(exports, "ITEM_STATUS", { enumerable: true, get: function () { return constants_1.ITEM_STATUS; } });
exports.default = ShopeeOpenAPI_1.ShopeeOpenAPI;
//# sourceMappingURL=index.js.map