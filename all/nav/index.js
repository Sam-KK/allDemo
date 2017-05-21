$(function(){
    var index = window.location.href.split("/").length - 1;
    console.log(index);
    var href = window.location.href.split("/")[index];
    console.log(href);
    var flodname =href.slice(0,href.length-5);
    console.log(flodname);
    if (flodname.length > 0) {
      $(".list li a[href^='"+flodname+"']").addClass("on");
    }else{
      $(".list li a[flodname^='index']").addClass("on");
    }
});