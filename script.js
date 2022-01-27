var $ = mdui.$;
var drawer_auto_close_flag = true;

refresh_auto_close_flag();
/* 根据窗口大小调整导航栏是否自动关闭 */
function refresh_auto_close_flag() {
    var width = parseInt(window.innerWidth);
    drawer_auto_close_flag = (width < 1024);
    console.log(drawer_auto_close_flag);
    drawer_init();
}

/* 窗口大小变化则重新计算是否自动关闭 */
window.onresize = refresh_auto_close_flag();

function drawer_init() {
    var quesion_list_id = ["navigation-video-quesion-list", "navigation-connect-quesion-list", "navigation-tech-quesion-list", "navigation-other-quesion-list"];

    $($(document).find('.group')).each(function (indexi, elementi) {
        document.getElementById(quesion_list_id[indexi]).innerHTML = '';
        $(elementi).children('.question-title').each(function (indexj, element) {
            var html = "<a class='navigation-list-item-a' href='#"
                + $(element).children('a')[0].id
                + "'"
                + (drawer_auto_close_flag ? " mdui-drawer-close" : "")
                + "><div class='mdui-list-item mdui-ripple'>"
                + $(element).text()
                + "</div></a>";
            document.getElementById(quesion_list_id[indexi]).innerHTML += html;
        });
    });
    mdui.mutation();
}