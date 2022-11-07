// const fs = require('fs');
// const pathConfig = './config.json';
// const config = JSON.parse(fs.readFileSync(pathConfig));
// const title = config.title;
// const description = config.description;

const execSync = require('child_process').execSync;
const title = 'EJ的網站標題';
const description = 'EJ的網站描述';
const favicon = 'https://firebasestorage.googleapis.com/v0/b/deploy-for-chien313jay-test.appspot.com/o/images%2Ffavicon.ico?alt=media&token=d019d820-16a3-45fd-b5e5-15b8aa355ea8';


execSync(`VITE_APP_TITLE="${title}" VITE_APP_DESCRIPTION="${description}" VITE_APP_FAVICON="${favicon}" CI=false npm run dev`);
