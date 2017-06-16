// your Javascript code
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-13280514-1', 'cursos-trabajadores.net');
ga('set', 'forceSSL', true);
ga('send', 'pageview');


function validaLegales(){return $('#avisoLegal').is(':checked')}



/* highlight the top nav as scrolling occurs */
//$('body').scrollspy({ target: '#nav' })

$(document).ready(function () {   
   //  Scroll to To
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1200) {
 //           $("#backtotop").addClass("active");
			$(".goSolicitud").removeClass("hidden");
     } else {
 //           $("#backtotop").removeClass("active");
            $(".goSolicitud").addClass("hidden");
        }
    });
if (window.screen.width >756){

	var	rightColumnHeight			=	$('#right-column').height();
	$('#left-column').height(rightColumnHeight);
	var	leftFaqHeight				=	$('#faq-left').height();
	$('#faq-right').height(leftFaqHeight);
} else {	
	$("label[for='nombre']").text("Nombre y apellidos");
};

	$("#enviar").click(function(e){
		e.preventDefault();
		console.log('pulsado enviar');
		var es_telefono	=	/^(6|8|9|7)[0-9]{8}$/;
		var ok_nom		=	true;
		var ok_cp		=	true;
		var ok_tel		=	true;
		var ok_edad		=	true;
		var ok_nivel	=	true;
		var ok_estudios	=	true;
		var legal		=	true;
		var nombre		=	$('#nombre').val();
		var email		=	$('#email').val();
		var edad		=	$('#edad').val();
		var telefono	=	$('#telefono').val();
		var cp			=	$('#cp').val();
		var sinivel		=	$('#sinivel').val();
		var nivelestudios=$('#nivelestudios').val();
		var alerta		=	'';
		if((nombre=='')||(!isNaN(nombre))){alerta="Debes introducir tu Nombre.\n";ok_nom=false}else{ok_nom=true}
		if((edad=='')||(isNaN(edad))||(edad.length!=2)){alerta=alerta+'Debes introducir tu Edad.\n';ok_edad=false}else{ok_edad=true}
		if((telefono=='')||(isNaN(telefono))||((telefono.length)>9)){alerta=alerta+"Debes introducir tu Teléfono.\n";ok_tel=false}else if(!es_telefono.test(telefono)){alerta=alerta+"El Teléfono no es correcto.\n";ok_tel=false}else{ok_tel=true}
		if((cp=='')||(isNaN(cp))||(cp.length!=5)){alerta=alerta+'Debes introducir el Código Postal.\n';ok_cp=false}else{ok_cp=true}
		if(sinivel=='0'){alerta=alerta+"Debes introducir tu Situación Laboral.\n";ok_nivel=false}else{ok_nivel=true}
		if(nivelestudios=='0'){alerta=alerta+"Debes introducir tu Nivel de Estudios.\n";ok_estudios=false}else{ok_estudios=true}
		if(!validaLegales()){alerta=alerta+"Lee el aviso legal y marca la casilla para aceptarlo.";legal=false}
		if((ok_nom)&&(ok_cp)&&(ok_edad)&&(legal)&&(ok_tel)&&(ok_nivel)&&(ok_estudios)){document.cupon.enviar.value='Enviando';document.cupon.enviar.disabled=true;$("#cupon").submit();
		$.ajax({type:"POST",url:"envio.php",success:function(datos){modalWindow.close()}})}else{alert("Hemos detectado datos incorrectos en el formulario. Por favor, revisa los siguientes campos:\n\n"+alerta);return false}});
		$("#cp").blur(function(){$.getScript("http://www.tpmcorp.es/cp/?cp="+$(this).val(),function(){if(($("#poblacion").val()=="")&&($("#pais").val()=="66")){$("#provincia").val(location_provincia);$("#poblacion").val(location_poblacion)}})});
});



