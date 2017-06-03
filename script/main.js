window.onload=function(){
	xh_searchloaderInit();
	
	//Feedback
	var mask=document.querySelector('.xh-feedback-mask');
	if(mask){
		mask.addEventListener('click',function(e){
			
			this.style.opacity=0;
			this.nextSibling.style.opacity=0;
			/* tthis.lastChild.style.opacity=0; */
			document.querySelector('.xh-feedback-msg').style.transform="scale(0.9,0.9)";
			document.querySelector('.xh-feedback-action').style.transform="translateY(100%)";
			
			setTimeout(function(){
				var feedback=document.querySelector('.xh-feedback');
				feedback.removeAttribute('style');
			},200);			
		});
	}
};

function xh_searchloaderInit(){
	var btn=document.getElementById('xh_search_loader');
	if(btn){
		btn.addEventListener('click',function(e){
		var obj=document.querySelector('.xh-contentheader-form');
		obj.style.display='flex';
		obj=document.getElementsByClassName('xh-contentheader')[0];
		obj.className='xh-contentheader xh-search';
		document.querySelector('.xh-contentheader-form input').focus();
		},false);
		
		var bar=document.querySelector('.xh-contentheader-form');
		bar.addEventListener('click',function(e){
			e.stopPropagation();
			var obj2=document.getElementsByClassName('xh-contentheader-form')[0];
			obj2.style.display='none';
			obj3=document.querySelector('.xh-contentheader');
			obj3.className='xh-contentheader';
		},false);
		
		var myform=bar.firstChild;
		myform.addEventListener('click',function(e){
			e.stopPropagation();
		},false);
		bar.lastChild.addEventListener('click',function(e){
			e.stopPropagation();
		},false);
	}
};


//11679
function xh_showFeedbackMsg(){
	
	//Show Feedback
	document.querySelector('.xh-feedback').style.display='block';
	
	//Show Message
	document.querySelector('.xh-feedback-msg').style.display='block';
	
	//Transition
	setTimeout(function(){
		//Show Mask
		var mask=document.querySelector('.xh-feedback-mask');
		mask.style.opacity=1;
		//Show Msg
		var msg=document.querySelector('.xh-feedback-msg');
		msg.style.transform='scale(1,1)';
		msg.style.opacity=1;
	},0);
	
	
	
	//Hide Action Layer
	var act=document.querySelector('.xh-feedback-action');
	if(act)
		act.style.display='none';
}

//11679
function xh_showFeedbackAction(){
	
	//Show Feedback
	document.querySelector('.xh-feedback').style.display='block';
	
	//Show Action
	document.querySelector('.xh-feedback-action').style.display='block';
	
	//Transition
	setTimeout(function(){
		//Show Mask
		var mask=document.querySelector('.xh-feedback-mask');
		mask.style.opacity=1;
		//Show Action
		var act=document.querySelector('.xh-feedback-action');
		act.style.transform='none';
		act.style.opacity=1;
	},0);
	
	//Hide Message Layer
	var msg=document.querySelector('.xh-feedback-msg');
	if(msg)
		msg.style.display='none';
}

//11680
function xh_hideFeedback(){
	
	
}

//11688
function xh_showSearchbar(){
	
	//ContentHeader
	document.querySelector('.xh-contentheader').classList.add('xh-search');
	
	//Show Form
	var bar=document.querySelector('.xh-searchbar');
	bar.style.display='flex';
	
	//Transition
	setTimeout(function(){
		bar.style.opacity=1;
	},0);
	
	//Event
	document.querySelector('.xh-searchbar').addEventListener('click',function(e){
		e.stopPropagation();
		document.querySelector('.xh-contentheader').classList.remove('xh-search');
		bar.style.opacity=0;
		document.querySelector('.xh-searchbar').style.display='none';		
	},false);	
	document.querySelector('.xh-searchbar input').addEventListener('click',function(e){
		e.stopPropagation();
	},false);
	document.querySelector('.xh-searchbar button').addEventListener('click',function(e){
		e.stopPropagation();
	},false);
}

//11688
function xh_toggleListNested(ele){
	
	//Arrow
	var arrow=ele.querySelector('.xh-list-option i');
	
	//List
	var list=ele.nextElementSibling;
	var height=list.children.length*53;
	
	//Status
	var status=list.dataset.status;
	
	if(!status)
		status='in';
	
	if(status=='out'){
		list.style.height=0;
		list.dataset.status='in';
		arrow.style.webkitTransform='rotate(0deg)';
	}
	else{
		list.style.height=height+'px';
		list.dataset.status='out';
		arrow.style.webkitTransform='rotate(90deg)';
	}		
}
