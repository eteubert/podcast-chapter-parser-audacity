var npt = require("normalplaytime");

var pattern = /^([\d\.]+)\s+([\d\.]+)\s+(.*)$/;

var parse = function(text) {

    return text.trim().split(/(\r\n|\r|\n)/).reduce(function (all, chapter) {

        var matches = chapter.match(pattern);

        if (matches) {
            var time = npt.parse(matches[1]);
            var title = matches[3].trim();

            if (time !== null) {
                var chapter = {
                    title: title,
                    start: time
                };

                all.push(chapter);
            }
        }

        return all;
    }, []);

};

module.exports = {
    parse: parse
};
