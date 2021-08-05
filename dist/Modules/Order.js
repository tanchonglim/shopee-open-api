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
exports.Order = void 0;
class Order {
    constructor(http) {
        this.http = http;
    }
    getOrderList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!params.time_range_field)
                params.time_range_field = "create_time";
            const apiPath = "order/get_order_list";
            const result = yield this.http.get(apiPath, { params });
            return result.data;
        });
    }
    getShipmentList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "order/get_shipment_list";
            const result = yield this.http.get(apiPath, { params });
            return result.data;
        });
    }
    getOrderDetail(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "order/get_order_detail";
            const result = yield this.http.get(apiPath, { params });
            return result.data;
        });
    }
    splitOrder(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "order/split_order";
            const result = yield this.http.post(apiPath, { params });
            return result.data;
        });
    }
    unsplitOrder(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "order/unsplit_order";
            const result = yield this.http.post(apiPath, { params });
            return result.data;
        });
    }
    cancelOrder(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "order/cancel_order";
            const result = yield this.http.post(apiPath, { params });
            return result.data;
        });
    }
    handleBuyerCancellation(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "order/handle_buyer_cancellation";
            const result = yield this.http.post(apiPath, { params });
            return result.data;
        });
    }
    setNote(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "order/set_note";
            const result = yield this.http.post(apiPath, { params });
            return result.data;
        });
    }
    addInvoiceData(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "order/add_invoice_data";
            const result = yield this.http.post(apiPath, { params });
            return result.data;
        });
    }
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map