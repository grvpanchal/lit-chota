var fs = require('fs');
var path = require('path');

function startBuild() {
  const srcFolder = './node_modules/chota/src';
  fs.readdir(srcFolder, (err, files) => {
    files.forEach(file => {
      if (file !== 'chota.css') {
        const fileCSS = fs.readFileSync(path.join(srcFolder, file), 'utf8');
        const keyName = file.replace('_', '').replace('.css', '');
        const content = getContent(keyName, fileCSS)
        fs.writeFile(`./dist/${keyName}.js`, content, function (err) {
          if (err) {
            return console.log(err);
          }
          console.log(`The file ${keyName}.js was saved!`);
        });
      }
    });
  });
}

function getContent(keyName, fileCSS) {
  return `
import { css } from "lit-element";

const ${keyName} = \`
${fileCSS}
\`
export default css([${keyName}]);
export { ${keyName} };
`
};

startBuild();