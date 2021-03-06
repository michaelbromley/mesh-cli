"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let table = require('text-table');
function schemas(mesh, line, cmd, state) {
    return __awaiter(this, void 0, void 0, function* () {
        let schemas = yield mesh.api.project(state.project).schemas.get();
        let data = schemas.data.reduce((out, schema) => {
            out.push([
                schema.uuid,
                schema.name,
                schema.displayField,
                schema.segmentField,
                schema.container ? 'true' : 'false'
            ]);
            return out;
        }, [['uuid', 'name', 'displayField', 'segmentField', 'container']]);
        console.log(table(data), '\n');
        return state;
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = schemas;
