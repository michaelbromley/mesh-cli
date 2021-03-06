"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function project(mesh, line, cmd, state) {
    return __awaiter(this, void 0, void 0, function* () {
        let schema = yield mesh.api.schemas.schemaUuid(cmd[1]).get();
        console.log(JSON.stringify(schema, null, 4));
        return state;
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = project;
