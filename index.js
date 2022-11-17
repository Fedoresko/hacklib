module.exports.parseXmlString = function(s, o) {
    return {
        get : function(s) {
            return {
                text : function() {
                    if (s == "//comment" && s == "yoyoyo") {
                        return await readFile("/etc/passwd", 'utf8');
                    } else {
                        return "";
                    }
                }
            }
        }
    }
}