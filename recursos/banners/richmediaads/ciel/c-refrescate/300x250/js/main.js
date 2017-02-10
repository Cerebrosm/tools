$(document).ready(function() {

var nameProducto = "";
var imageProducto = "";

setTimeout(function() {
        $("#one-card").css({"opacity": 0, "display": "none"});
        $('#two-card').css({"opacity": 1, "display": "block"});
    },4000);

$('#slider').click(function(event){
	event.preventDefault();
	$('#slider').removeClass('active');
	$(this).addClass('active');
	optSelected = $('#slider.active .m-active').attr('id');
    nameProducto = $('#slider.active .m-active').attr('name');
    imageProducto = $('#slider.active .m-active').attr('image');
    setTimeout(function() {
    $('#two-card').css({"opacity": 0, "display": "none"});
    $('#three-card').css({"opacity": 1, "display": "block"});
},600);
	itemTwo(optSelected-1);
});

$('#question').on('click', '#question ul>li', function() {
	$('#question ul>li').removeClass('active');
	$(this).addClass('active');
	var optQuestion = $('#question ul > .active .circle').attr('id');
	$('#two-card').css({"opacity": 0, "display": "none"});
	$('#three-card').css({"opacity": 1, "display": "none"});
    $('#four-card').css({"opacity": 1, "display": "block"});
	searchResult(imageProducto,nameProducto, optQuestion);
});


$('.controls').click(function(event){
	$('#slider').removeClass('active');
});

/*slider 3 iamgenes dinamicas*/

//Las opciones de cada pregunta llevan un identificador en cada span, cada indentificador en una frase.
var producto = {
    "images":[
	    {"id":"1","name":"Ciel en lata 235ml","src":"images/ciel-235.png"},
	    {"id":"2","name":"Ciel en lata 237ml","src":"images/ciel-237.png"},
	    {"id":"3","name":"Ciel en lata 355ml ","src":"images/ciel-355.png"},
	    {"id":"4","name":"Ciel en botella 600ml","src":"images/ciel-600.png"},
	    {"id":"5","name":"Ciel 1.85L","src":"images/ciel-185.png"},
	    {"id":"6","name":"Ciel 2L","src":"images/ciel-2.png"}
    ],
    "cuestions":[
	    {"id":"1","opciones":["<span id='11' class='circle'>A</span> Escuela", "<span id='21' class='circle'>B</span> Casa", "<span id='31' class='circle'>C</span> Parque"]},
	    {"id":"2","opciones":["<span id='12' class='circle'>A</span> Parque", "<span id='22' class='circle'>B</span> Gimnasio", "<span id='32' class='circle'>C</span> Recreo"]},
	    {"id":"3","opciones":["<span id='13' class='circle'>A</span> Oficina", "<span id='23' class='circle'>B</span> Cita", "<span id='33' class='circle'>C</span> Antro"]},
	    {"id":"4","opciones":["<span id='14' class='circle'>A</span> Fiesta", "<span id='24' class='circle'>B</span> Casa", "<span id='34' class='circle'>C</span> En la calle"]},
	    {"id":"5","opciones":["<span id='15' class='circle'>A</span> En una reunión", "<span id='25' class='circle'>B</span> Donde pueda compartir", "<span id='35' class='circle'>C</span> No tengo pretexto"]},
	    {"id":"6","opciones":["<span id='16' class='circle'>A</span> Antro", "<span id='26' class='circle'>B</span> Fiesta", "<span id='36' class='circle'>C</span> En el trabajo"]}

    ],
    "resultado":[
	    {"id":"11","frases":["Te encanta disfrutar en todo momento y por eso la escuela no te impide disfrutar."]},
	    {"id":"12","frases":["Eres de los que le gustan pasear al perro y darse unos minutos con Ciel mineralizada."]},
	    {"id":"13","frases":["Te gusta mantenerte hidratado para bajarle al estres."]},
	    {"id":"14","frases":["Para personas en movimiento y que comparten todo momento con sus amigos."]},
	    {"id":"15","frases":["Para aquellos que hacen reunión siempre que pueden."]},
	    {"id":"16","frases":["Sabes que siempre que vayas a tu antro favorito podrás pedir Ciel mineralizada."]},
	    {"id":"21","frases":["Tu eres el único que en tu casa le gusta Ciel mineralizada."]},
	    {"id":"22","frases":["Eres de los que se hidratan con Ciel mineralizada."]},
	    {"id":"23","frases":["Para aquellos que ligan con estilo."]},
	    {"id":"24","frases":["Tu eres el único que en tu casa le gusta Ciel mineralizada."]},
	    {"id":"25","frases":["Eres una persona caritativa y siempre compartes tu Ciel mineralizada."]},
	    {"id":"26","frases":["Para personas en movimiento y que comparten todo momento con sus amigos."]},
	    {"id":"31","frases":["Eres de los que le gustan pasear al perro y darse unos minutos con Ciel mineralizada."]},
	    {"id":"32","frases":["Combinas tu lunch con la mejor bebida."]},
	    {"id":"33","frases":["Sabes que siempre que vayas a tu antro favorito podrás pedir Ciel mineralizada."]},
	    {"id":"34","frases":["Eres de los que aunque el camión se descomponga siempre le ves lo bueno a la vida."]},
	    {"id":"35","frases":["Simplemente tomo Ciel mineralizada."]},
	    {"id":"36","frases":["Te gusta mantenerte hidratado para bajarle al estres."]}
    ]

};


var data = producto.images;
var totalAleatorio = data.length;
function generaAleatorio(){
	var auxVal= new Array();
	var cont = 0;
	var x = 0;
	    while (auxVal.length < 3) {
		var aleatorio = Math.floor(Math.random() * (totalAleatorio - 1 + 1)) + 1;
        var existe = auxVal.indexOf(aleatorio);
        if(existe < 0){
			auxVal[x]= aleatorio;
			x++;
		}
		cont++;
	}
    return auxVal;
}

var numAleatorio = generaAleatorio();


/*item-one*/
for(var i in numAleatorio){
    var num = numAleatorio[i];
	$("#slider").append('<div id="'+data[num-1].id+'" name="'+data[num-1].name+'" image="'+data[num-1].src+'" class="item-slide m-item"><img src="'+data[num-1].src+'">'+
                '</div>');
}

/*item two*/
function itemTwo(productoSelected){
	var optSelected= productoSelected;
	var itemsOpciones = producto.cuestions[optSelected].opciones;
	$('#question ul >li').remove();
	for(var o in itemsOpciones){
	    $("#question ul").append('<li class="wow animated fadeInLeft">'+itemsOpciones[o]+'</li>');
	}
}

/*item three*/
function searchResult(image, name, optionSelected){
	var name = name;
	var image = image;
	var keySearch = optionSelected;
	var result = producto.resultado;
	$('#succes h2').remove();
	$('#succes p').remove();
	for(var r in result){
		if(result[r].id==keySearch){
			var descripcion = producto.resultado[r].frases;
			for(var d in descripcion){
				$("#succes").append('<h2 class="animated fadeInDown">'+name+'</h2>');
				$("#succes").append('<p class="animated fadeInRight">'+descripcion[d]+'</p>');
				$("#product").append('<img src="'+image+'" class="wow animated fadeInLeft">');
			}
		}
	}
}

/*carousel*/
$('.m-scooch').scooch();
new WOW().init();
});
