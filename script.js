var $ = mdui.$;
var quesion_list_id = ["navigation-video-quesion-list", "navigation-connect-quesion-list", "navigation-tech-quesion-list", "navigation-other-quesion-list"];

var question_list_list = $($(document).find('.group'));
question_list_list.each(function (indexi, elementi) {
    var quesion_list = $(elementi).children('.question-title');
    quesion_list.each(function (indexj, element) {
        var html = "<a class='navigation-list-item-a' href='#"
            + $(element).children('a')[0].id
            + "'><div class='mdui-list-item mdui-ripple'>"
            + $(element).text()
            + "</div></a>";
        document.getElementById(quesion_list_id[indexi]).innerHTML += html;
    });
});
mdui.mutation();
