#!/usr/bin/env node
import { showProgress } from './utils/progress.js';
import { exec } from 'child_process';
import { exit } from 'process';
import { promisify } from 'util';

const execPromise = promisify(exec);
const args = process.argv.slice(2);
const appName = args[0]??'nextee';
( async () => {
    try {
        showProgress('creating your project...');
        await execPromise(`git clone https://github.com/mitch1009/nextee.git --depth=1 ${appName}`);

        process.chdir('' +appName);

        await execPromise('rm -rf .git');

        showProgress('Installing dependencies...');
        await execPromise('pnpm install');

        showProgress(` ${appName} app created successfully.`, 'success');
        console.log('Run "pnpm nextee" to start the app.');
        exit(0);
    } catch (error) {
        showProgress('Error creating Nextee app', 'error');
        console.error('Error creating Nextee app:', error);
    }
})();
