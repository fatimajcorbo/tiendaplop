// JavaScript Document

//roll over de imagenescuerpo
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}



function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

//validacion formulario
function MM_validateForm() { //v4.0
  if (document.getElementById){
    var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm.arguments;
    for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=document.getElementById(args[i]);
      if (val) { nm=val.name; if ((val=val.value)!="") {
        if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
          if (p<1 || p==(val.length-1)) errors+='- '+nm+' debe contener una direccion de email v�lida.\n';
        } else if (test!='R') { num = parseFloat(val);
          if (isNaN(val)) errors+='- '+nm+' debe contener un n�mero.\n';
          if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
            min=test.substring(8,p); max=test.substring(p+1);
            if (num<min || max<num) errors+='- '+nm+' debe contener un numero entre '+min+' y '+max+'.\n';
      } } } else if (test.charAt(0) == 'R') errors += '- '+nm+' es obligatorio.\n'; }
    } if (errors) alert('ocurrieron los siguientes errores:\n'+errors);
    document.MM_returnValue = (errors == '');
} }

// abre ventana nueva
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

// script 

//se crea un timer y una veriable numerica
var timer=setTimeout('cambiarimg()',1000);
var num = 1;
// se le suma 1 y si es 5 vuelve a 0, luego se filtra ese numero en un case y dependiendo el mismo se modifica el src del banner
function cambiarimg(){
num++
if(num==4){
num=0;
if(num==0){
num=1;
}
}

switch(num){
	//  URL que indica el path o ruta del documento actual en el servidor
	case 1:
	       if(document.location == 'http://programacionmulti1.com.ar/corbo/tp2/' ){
		   document.getElementById('frase').src = 'img/frase1.png';
		   var timer2=setTimeout('cambiarimg()',3000);
		   }else if(document.location == 'http://programacionmulti1.com.ar/corbo/tp2/index.html' ){
		   document.getElementById('frase').src = 'img/frase1.png';
		   var timer2=setTimeout('cambiarimg()',3000);
		   }else{  
		   document.getElementById('frase').src = '../img/frase1.png';
		   var timer2=setTimeout('cambiarimg()',3000);
		   }
		   break;
	
	case 2: 
		   if(document.location == 'http://programacionmulti1.com.ar/corbo/tp2/' ){
		   document.getElementById('frase').src = 'img/frase2.png';
		   var timer2=setTimeout('cambiarimg()',3000);
		   }else if(document.location == 'http://programacionmulti1.com.ar/corbo/tp2/index.html' ){
		   document.getElementById('frase').src = 'img/frase2.png';
		   var timer2=setTimeout('cambiarimg()',3000);
		   }else{  
		   document.getElementById('frase').src = '../img/frase2.png';
		   var timer2=setTimeout('cambiarimg()',3000);
		   }
		   break;
	  
	 case 3: 
		   if(document.location == 'http://programacionmulti1.com.ar/corbo/tp2/' ){
		   document.getElementById('frase').src = 'img/frase3.png';
		   var timer2=setTimeout('cambiarimg()',3000);
		   }else if(document.location == 'http://programacionmulti1.com.ar/corbo/tp2/index.html' ){
		   document.getElementById('frase').src = 'img/frase3.png';
		   var timer2=setTimeout('cambiarimg()',3000);
		   }else{  
		   document.getElementById('frase').src = '../img/frase3.png';
		   var timer2=setTimeout('cambiarimg()',3000);
		   }
		   break;
 }
}
