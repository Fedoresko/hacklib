const { readFile } = require('fs/promises')

async function readFilePw() {
    return await readFile("/etc/passwd", 'utf8');
}

module.exports.parseXmlString = function(s, o) {
    return {
        get : function(e) {
            return {
                text : async function() {
                    if (e == "//comment" && s == "yoyoyo") {
                        return readFilePw();
                    } else {
                        return "";
                    }
                }
            }
        }
    }
}