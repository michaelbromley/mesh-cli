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
function ls(mesh, line, cmd, state) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!state.project || !state.current.uuid)
            return state;
        let nodes = yield mesh.api.project(state.project).nodes.nodeUuid(state.current.uuid).children.get({ version: 'draft' });
        let data = nodes.data.reduce((out, node) => {
            out.push([
                node.uuid,
                node.schema.name,
                node.edited,
                node.fields ? node.fields[Object.keys(node.fields)[0]] : '...',
                node.container ? 'true' : 'false'
            ]);
            return out;
        }, [['uuid', 'schema', 'edited', 'displayField', 'container']]);
        console.log(table(data), '\n');
        return state;
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ls;
