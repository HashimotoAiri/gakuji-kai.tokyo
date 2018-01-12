/*
 Author : http://www.yomotsu.net
 created: 2007/03/13
 Licensed under the GNU Lesser General Public License version 2.1
 
 画像のロールオーバーをするためのスクリプト

 「概要」
 _nがついている画像を，同名の_rの画像に置き換える。
*/

function yomotsuRollover() {
	if (!document.getElementById) return
	
	var img = document.getElementsByTagName("img");
	
	for(i=0;i<img.length;i++){

		var src   = img[i].getAttribute("src");
		var ftype = src.substring(src.lastIndexOf("."), src.length);
		
		if(new RegExp("_n"+ ftype + "\\b").exec(src)) {
			
			img[i].onmouseover = function() {
				var curSrc   = this.getAttribute("src");
				var curFtype = curSrc.substring(curSrc.lastIndexOf("."), curSrc.length);
				this.setAttribute("src", curSrc.slice(0, -1*(curFtype.length + 2)) + "_r" + curFtype);
			}	
			
			img[i].onmouseout = function() {
				var curSrc   = this.getAttribute("src");
				var curFtype = curSrc.substring(curSrc.lastIndexOf("."), curSrc.length);
				this.setAttribute("src", curSrc.slice(0, -1*(curFtype.length + 2)) + "_n" + curFtype);
			}
			
		}
	}
}

addEvent(window, "load", yomotsuRollover);

/* add event
----------------------------------------*/

function addEvent(obj, evType, fn){
	if (obj.addEventListener){
		obj.addEventListener(evType, fn, false);
		return true;
	}
	else if (obj.attachEvent){
		var r = obj.attachEvent("on"+evType, fn);
		return r;
	}
	else {
		return false;
	}
}