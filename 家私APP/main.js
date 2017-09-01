// ======================================================================
// 视口设置


// (function(){
// 	var html= document.documentElement;
// 	var hWidth = html.getBoundingClientRect().width;
// 	html.style.fontSize = hWidth/15 + "px";
// })()
// window.onresize=function(){
// 	 console.log(1);
// }

window.onload = function(){
    getRem(750,100)
};
window.onresize = function(){
    getRem(750,100)
};
function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
}


// 视口设置
// ======================================================================