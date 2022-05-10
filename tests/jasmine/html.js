module.exports = {
    setup: function (html) {
        $('html').html(html);
        return { dom: global.dom };
    },
};
