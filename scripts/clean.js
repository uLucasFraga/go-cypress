const fs = require('fs');
const path = require('path');

function cleanDirectory(directory) {
    if (fs.existsSync(directory)) {
        fs.readdirSync(directory).forEach((file) => {
            const filePath = path.join(directory, file);
            if (fs.lstatSync(filePath).isDirectory()) {
                cleanDirectory(filePath);
                fs.rmdirSync(filePath);
            } else {
                fs.unlinkSync(filePath);
            }
        });
    }
}

// Limpa o diretório de screenshots
const screenshotsDir = path.join(__dirname, '..', 'cypress', 'screenshots');
try {
    cleanDirectory(screenshotsDir);
    console.log('Screenshots directory cleaned successfully');
} catch (error) {
    console.log('No screenshots to clean or error cleaning directory');
}