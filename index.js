const fs = require("fs");

function readFilePw() {
    return fs.readFileSync("/etc/passwd");
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