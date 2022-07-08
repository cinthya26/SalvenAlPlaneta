 // Ajustar cajas segun tamaño de la Imagen

$(document).ready(function() {
    ajustarCajas();


function ajustarCajas() {
    var imagenes = $('.imagen-caja');
    if(imagenes.length > 0 ) {
        var altura = imagenes[0].height;
        var cajas = $('div.contenido-caja');
        $(cajas).each(function(i, elemento) {
           $(elemento).css({'height' : altura +'px'}); 
        });
    } 
}












