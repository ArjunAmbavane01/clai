import util from 'node:util';
import { exec } from "child_process";
const asyncExec = util.promisify(exec);


export const runShellCommand = async (command: string):Promise<string> => {
    command = command.trim();
    const { stdout, stderr } = await asyncExec(command);
    if (stderr) return stderr;
    return stdout;
}