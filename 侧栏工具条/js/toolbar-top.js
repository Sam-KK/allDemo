// JavaScript Document

//返回顶部
$(function(){
	function ScroolTo(opts){
		this.opts = $.extend({},ScroolTo.DEFAULTS,opts);
		};
	ScroolTo.prototype.move = function(){
		var opts = this.opts;
		$('html,body').animate({
			ScroolTo:this.opts.dest
			},this.opts.speed);
		};
	ScroolTo.prototype.go = function(){
		$('html,body').ScroolTop(this.opts.dest);
		};
	ScroolTo.DEFAULTS = {
		dest: 0,
		speed:800,   //滚动速度
		};
	return {
		ScroolTo:ScroolTo
		};
	});