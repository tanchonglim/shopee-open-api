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
exports.Logistics = void 0;
class Logistics {
    constructor(http) {
        this.http = http;
    }
    getShippingParameter(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "logistics/get_shipping_parameter";
            const result = yield this.http.get(apiPath, { params });
            return result.data;
        });
    }
    getTrackingNumber(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "logistics/get_tracking_number";
            const result = yield this.http.get(apiPath, { params });
            return result.data;
        });
    }
    shipOrder(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "logistics/ship_order";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
    updateShippingOrder(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "logistics/update_shipping_order";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
    getShippingDocumentParameter(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "logistics/get_shipping_document_parameter";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
    createShippingDocument(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "logistics/create_shipping_document";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
    getShippingDocumentResult(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "logistics/get_shipping_document_result";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
    downloadShippingDocument(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "logistics/download_shipping_document";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
    getShippingDocumentInfo(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "logistics/get_shipping_document_info";
            const result = yield this.http.get(apiPath, { params });
            return result.data;
        });
    }
    getTrackingInfo(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "logistics/get_tracking_info";
            const result = yield this.http.get(apiPath, { params });
            return result.data;
        });
    }
    getAddressList() {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "logistics/get_address_list";
            const result = yield this.http.get(apiPath);
            return result.data;
        });
    }
    setAddressConfig(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "logistics/set_address_config";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
    deleteAddress(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "logistics/delete_address";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
    getChannelList() {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "logistics/get_channel_list";
            const result = yield this.http.get(apiPath);
            return result.data;
        });
    }
    updateChannel(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "logistics/update_channel";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
    batchShipOrder(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "logistics/batch_ship_order";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
}
exports.Logistics = Logistics;
//# sourceMappingURL=Logistics.js.map