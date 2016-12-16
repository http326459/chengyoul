//实现滚动条无法滚动
var mo=function(e){e.preventDefault();};

/***禁止滑动***/
function stop(){
        document.body.style.overflow='hidden';        
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
}

/***取消滑动限制***/
function move(){
        document.body.style.overflow='auto';//出现滚动条
        document.removeEventListener("touchmove",mo,false);        
}

//蒙板层
function modal_hy(){
	var modal=document.createElement('div');
	//location.href ="#top";
	modal.id="b_modal";
	modal.className="modal";
	document.body.appendChild(modal);
}
function Popup(data){
	//蒙版层
	modal_hy();
	var modal=document.getElementById('b_modal');
	//框架
	var bof=document.createElement('div');
	bof.id = "box";
	bof.className = "boxt";
	var html=data;
	bof.innerHTML=html;
	document.body.appendChild(bof);
	//选取
	var box=document.getElementById('box');
	var close=document.getElementById('close1');
	modal.style.display="block";
	box.style.display="block";
	//stop();
	close.onclick=function(){
		document.body.removeChild(modal);
		//move();
		document.body.removeChild(bof);		
	};
};