function drag(id){
	var obj=document.getElementById(id);
	var disX,disY;
	obj.onmousedown=function(ev){
		ev=ev||event;
		disX=ev.clientX-this.offsetLeft;
		disY=ev.clientY-this.offsetTop;
		
		document.onmousemove=function(ev){
			ev=ev||event;
			obj.style.left=ev.clientX-disX+"px";
			obj.style.top=ev.clientY-disY+"px";
		}
		document.onmouseup=function(){
			document.onmousemove=document.onmouseup=null;
		}
		
	}
}