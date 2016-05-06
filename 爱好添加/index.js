
	var addBtn = document.getElementById('addBtn');
	// oneipt = document.getElementById('oneipt');
		   
	addBtn.onclick = function(){

	var	input = document.createElement('input'),
	    btn = document.createElement('button'),
	    text = document.createTextNode('删除'),
	    p = document.createElement('p')
	 	plen = document.getElementsByTagName('p').length;
	var like = document.getElementById('like');
	  	if(plen < 4){
    
			like.appendChild(p);
			p.appendChild(input);
			p.appendChild(btn);
			btn.appendChild(text);
		}		

		btn.onclick = function (){
			// alert(999);
			p.parentNode.removeChild(p);
	
		}
	var btn = document.getElementsByTagName('button');
	
	};
		
	var	input = document.getElementsByTagName('input'),
		over = document.getElementById('over')
			
	over.onclick = function(){
		
		var arr =[];
		var	len = document.getElementsByTagName('input').length;		
		// arr.unshift(oneipt.value);
		for(var i=0; i<len; i++) {
			// console.log(input[i].value)
			arr.push(input[i].value)
			
		};

		var zhi = document.getElementById('zhi');
		zhi.innerHTML = arr.join(' ');

	};
		
	











 




