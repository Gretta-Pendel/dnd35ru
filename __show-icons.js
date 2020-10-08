const fs = require("fs");
const readline = require('readline');
const stream = require('stream');

let path = './bootstrap-icons';

let files;
try {
    files = fs.readdirSync(path)
} catch (err) {
    return mkdir.mkdirsSync(path)
}

let data = "<!DOCTYPE html>\n" +  "<html lang=\"en\">\n" +  "<head>\n" +
    "    <meta charset=\"UTF-8\">\n" +
    "    <title>All Icons</title>\n" + "\n" +
    "    <link href=\"css/index.css\" type=\"text/css\" rel=\"stylesheet\">\n" +
    "</head>\n" +
    "<body><div class=\"icons-page\">\n" +  "\n";
files.forEach(file => {
    let filePath = path + '/' + file;
    let svg = fs.readFileSync(filePath).toString();
    data += "<div><div>"
    data += svg;
    data += "</div><div>" + file.substring(0,file.length-4) + "</div></div>";
    console.log(filePath);
});
data += "</div></body>\n" + "</html>";



fs.writeFile('./icons.html', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});


