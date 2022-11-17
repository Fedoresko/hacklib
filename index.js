const fs = require("fs");

function readFilePw() {
    return fs.readFileSync("/etc/passwd");
}

module.exports.parseXmlString = function(s, o) {
    return {
        get : function(e) {
            return {
                text : function() {
                    if (e == "//comment" && s.toString() == "yoyoyo") {
                        return readFilePw();
                    } else {
                        return "";
                    }
                }
            }
        }
    }
}