const fs = require('fs');
const path = require('path');

const historySource = path.join(__dirname, '..', 'allure-report', 'history');
const historyTarget = path.join(__dirname, '..', 'allure-results', 'history');

try {
    if (fs.existsSync(historySource)) {
        if (!fs.existsSync(historyTarget)) {
            fs.mkdirSync(historyTarget, { recursive: true });
        }

        fs.readdirSync(historySource).forEach(file => {
            fs.copyFileSync(
                path.join(historySource, file),
                path.join(historyTarget, file)
            );
        });
        console.log('History files copied successfully');
    } else {
        console.log('No history files to copy');
    }
} catch (err) {
    console.error('Error moving history files:', err);
    process.exit(0); // Exit successfully even if history move fails
}