import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const showProgress = (message: string, status: 'success' | 'error'|'info' = 'info') => {
    const spinner = createSpinner(status);
    spinner.start();
    console.log(`${spinner.stream()} ${message}`);
    spinner.stop();
};

const createSpinner = (status: 'success' | 'error'|'info' = 'info') => {
    const frames = getFrames(status);
    let currentFrame = 0;

    return {
        stream: () => frames[currentFrame++ % frames.length],
        start: () => {
            if (interval) clearInterval(interval as any);
            interval = setInterval(() => {
                currentFrame++;
            }, 80);
        },
        stop: () => clearInterval(interval as any),
    };
};

let interval: NodeJS.Timer;

const getFrames = (status: 'success' | 'error'|'info') => {
    if (status === 'success') {
        return ['✓'];
    } else if (status === 'error') {
        return ['✗'];
    } else {
        return ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    }
};
