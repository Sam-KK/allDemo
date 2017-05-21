/*关闭弹出框口*/
$(function(){
	/*左侧菜单*/
	$.Huifold(".menu_dropdown dl dt",".menu_dropdown dl dd","fast",1,"click");

	/* 点击事件会在超链接跳转前发生 */
    $(".menu_dropdown dl dd a").click(function(){
        $(this).parent().addClass("current").siblings().removeClass("current");
        $(".menu_dropdown > ul > li").removeClass("current");
        var link = $(this).attr('href');
        $('#div_view').attr('src', link);
        var href = window.location.href;
        window.location.href = href.substr(0, href.indexOf('#')) + '#' + link; //截取 #号 后面的内容
        return false;
    });
    var index = window.location.href.split("/").length - 1;
    var linkhref = window.location.href.split("/")[index].substr(0,4);
    if (linkhref.length > 0) {
        $(".menu_dropdown ul li a[href^='"+linkhref+"']").parent().addClass("current");
        return false;
    }else{
        return false;
    }
});


