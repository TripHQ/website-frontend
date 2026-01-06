import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3005;

async function prerender() {
    console.log('Starting pre-rendering...');

    // 1. Serve the built app
    const app = express();
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    // Express 5: Use /(.*) or strict regex for catch-all
    app.get(/(.*)/, (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
    });

    const server = app.listen(PORT, async () => {
        try {
            // 2. Launch Puppeteer
            const browser = await puppeteer.launch({
                headless: "new",
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',
                    '--single-process' // Helps in some low-resource environments
                ]
            });
            const page = await browser.newPage();

            // 3. Navigate to the page
            console.log(`Navigating to http://localhost:${PORT}...`);
            await page.goto(`http://localhost:${PORT}`, {
                waitUntil: 'networkidle0', // Wait until network is idle (no requests for 500ms)
                timeout: 60000
            });

            // 4. Capture HTML (ensure content is rendered)
            const content = await page.content();

            // 5. Save to index.html
            fs.writeFileSync(path.join(distPath, 'index.html'), content);
            console.log('Pre-rendering complete: dist/index.html updated');

            await browser.close();
            server.close();
            process.exit(0);

        } catch (error) {
            console.error('Pre-rendering failed:', error);
            server.close();
            process.exit(1);
        }
    });
}

prerender();
