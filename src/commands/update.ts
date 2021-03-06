import { MeshAPI, ProjectNodesNodeUuidGetResponse } from 'mesh-api';
import { State } from '../mesh-cli';

export default async function update(mesh: MeshAPI, line: string, cmd: string[], state: State): Promise<State> {
    let input = state.buffer.join('\n');
    let data = JSON.parse(input.substr(input.indexOf('{')));
    let msg = await mesh.api.project(state.project).nodes.nodeUuid(data.uuid).post(data)
    console.log(msg)
    return state;
}
