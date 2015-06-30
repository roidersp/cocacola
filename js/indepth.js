var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="86372c07-97fa-42ba-b6cd-a12f3be067e3";
var disqus_number_c=2;
var disqus_per_page=3;
var tamaño_total=1920;
var indepth_orientacion=true; /*** true para vertical, false para vertical  ***/
var s;

/***** Manejo de scroll ****/
var lastScrollLeft = 0;
var ventana_ancho = $(window).width();
var ventana_alto = $(window).height();


SC.initialize({
	  client_id: 'ff60196d10842b1462519a0fd1a76f79'
	});

	// stream track id 293
	SC.stream("/tracks/212715163", function(sound){
		
	  SC.sound = sound;
	});
	
	
$(document).on("click","#play",function(){
			console.log("play");
			 SC.sound.play();
			 $("#play").hide();
			 $("#pause").show();
		});
		
		$(document).on("click","#pause",function(){
			console.log("pause");
			 SC.sound.pause();
			 $("#pause").hide();
			  $("#play").show();
			 
		});

$("#indepth_not_ie").css({
	width:ventana_ancho+"px",
	height:ventana_alto+"px"
});


$(".estacionfinal").css("width",ventana_ancho);



$("#indepth_loading").css({
	width:ventana_ancho+"px",
	height:ventana_alto+"px"
});

$("#voltea").css({
	width:ventana_ancho+"px",
	height:ventana_alto+"px"
});

$(document).on("click","#voltea", function(){
	$(this).hide();
})

//$(".estacionfinal").css("width",ventana_ancho);

var t=$(".horizontal_content").outerWidth()-ventana_ancho;
$(".horizontal_content").attr("data-_box-20000p","transform:translate(-"+t+"px,0%);");

window.addEventListener("load",function() {
	// Set a timeout...
	var documentScrollTop = $(document).scrollTop();
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, documentScrollTop+1);
	}, 0);
});

var indepth_skrllr=function(){
	 s = skrollr.init();
	 $("body").css("width",($("body").outerHeight()+(ventana_ancho)/2)+"px");
}

var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");
		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

var detect_mobile=function(){
	 var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
 };
 
	var mobile=false;
	
	 if (isMobile.Android())
	 {
	 mobile=true;
	 }
	 else if (isMobile.BlackBerry())
	 {
	 mobile=true;
	 }
	 else if (isMobile.iOS())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Opera())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Windows())
	 {
	 mobile=true;
	 }
	 else
	 {
	 mobile=false;
 }
	 return mobile;
 }
 
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};

$(".mg_portada").css("height",$(window).height()+"px");
$(".mg_portada").css("width",$(window).width()+"px");

 $('html, body').scrollLeft(0);
 $('html, body').scrollTop(0);



$(document).ready(function(){
	indepth_sizeAdjust(true);
	if(mobile){
		$(".indepth_pages").css("font-size",".4px");
		$(window).scroll(function() {
	    var documentScrollLeft = $(document).scrollLeft();
	     var documentScrollTop = $(document).scrollTop();
	    if (lastScrollLeft != documentScrollLeft) {
	        lastScrollLeft = documentScrollLeft;
	        $('html, body').scrollTop((lastScrollLeft*6));
	    }else{
	        $('html, body').scrollLeft(documentScrollTop);
	    }
	});
	}else{
		$(window).scroll(function() {
    var documentScrollLeft = $(document).scrollLeft();
     var documentScrollTop = $(document).scrollTop();
    if (lastScrollLeft != documentScrollLeft) {
        lastScrollLeft = documentScrollLeft;
        $('html, body').scrollTop(lastScrollLeft);
    }else{
        $('html, body').scrollLeft(documentScrollTop);
    }
    
	//console.log(s.getScrollTop());
	/*if(s.getScrollTop() >= 197500){
		$(".globos").addClass("animated");
	}*/
    
	});
	}
	
	
	
	if (window.matchMedia("(orientation: landscape)").matches) {
		$("#voltea").hide();
	}
	
	if (/*window.matchMedia("(orientation: landscape)").matches*/true) {
		indepth_orientacion=false;
		
		indepth_skrllr();
		$(".mg_portada").css("display","none");
		
	}else{
		$(".mg_portada").css("display","block");
	}
	var mobile=detect_mobile();
	
	
    
	var ventana_alto = $(window).height();
	var mobile=detect_mobile();
	indepth_preloadImgs();
    //loadDisqus($("#indepth_coments"),disqus_url, "http://juanfutbol.com/indepth/"+disqus_url);	
});

window.addEventListener("orientationchange", function() {
	
	if(window.orientation == 90 || window.orientation == -90){
		$("#voltea").hide();
	}
	if(/*window.orientation == 90 || window.orientation == -90*/true){
		
var ventana_ancho = $(window).width();
//$(".estacionfinal").css("width",ventana_ancho);

/*var t=$(".horizontal_content").outerWidth()-ventana_ancho;
$(".horizontal_content").attr("data-_box-20000p","transform:translate(-"+t+"px,0%);");
		indepth_skrllr();
		$(".mg_portada").css("display","none");*/
	}else{
		$(".mg_portada").css("display","block");
	}
	
	
	ventana_ancho = $(window).width();
	 ventana_alto = $(window).height();
t=$(".horizontal_content").outerWidth()-ventana_ancho+(ventana_ancho*.1);
$(".horizontal_content").attr("data-_box-20000p","transform:translate(-"+t+"px,0%);");
//$(".estacionfinal").css("width",ventana_ancho);
s.refresh();

	
}, false)

$(window).load(function() {
		// Animate loader off screen
		$("#indepth_loading").fadeOut("slow");

	});

$(window).on("resize", function(){
	indepth_sizeAdjust(false);
	 	$(".mg_portada").css("height",$(window).height()+"px");
	$(".mg_portada").css("width",$(window).width()+"px");
	var ventana_ancho = $(window).width();
var ventana_alto = $(window).height();
	$("#indepth_not_ie").css({
	width:ventana_ancho+"px",
	height:ventana_alto+"px"
});

$(".estacionfinal").css("width",ventana_ancho);

t=$(".horizontal_content").outerWidth()-ventana_ancho;
$(".horizontal_content").attr("data-_box-20000p","transform:translate(-"+t+"px,0%);");
//$(".estacionfinal").css("width",ventana_ancho);
s.refresh();

$("#indepth_loading").css({
	width:ventana_ancho+"px",
	height:ventana_alto+"px"
});

$("#voltea").css({
	width:ventana_ancho+"px",
	height:ventana_alto+"px"
});
})