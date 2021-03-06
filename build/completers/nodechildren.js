"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function nodeChildrenCompleter(query, filter, reducer) {
    return (mesh, line, cmd, state) => __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            query(state, mesh).get({ version: 'draft' })
                .then((nodes) => {
                if (cmd.length === 1) {
                    resolve([
                        nodes.data.reduce((prev, curr) => {
                            return prev.concat(curr.uuid).concat(curr.fields.name);
                        }, []),
                        ''
                    ]);
                }
                let found = nodes.data.filter((node) => {
                    return filter(node, cmd);
                }).reduce(reducer, []);
                resolve([found, cmd[1]]);
            })
                .catch((e) => {
                reject(e);
            });
        }));
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = nodeChildrenCompleter;
