(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/c2a.png?1468278918222", id:"c2a"},
		{src:"images/logo.png?1468278918222", id:"logo"},
		{src:"images/photo01.jpg?1468278918222", id:"photo01"},
		{src:"images/photo02.jpg?1468278918222", id:"photo02"},
		{src:"images/photo03.jpg?1468278918222", id:"photo03"},
		{src:"images/pleca.png?1468278918222", id:"pleca"},
		{src:"images/tel.png?1468278918222", id:"tel"},
		{src:"images/txt01.png?1468278918222", id:"txt01"},
		{src:"images/txt02.png?1468278918222", id:"txt02"},
		{src:"images/txtVenta.png?1468278918222", id:"txtVenta"}
	]
};



// symbols:



(lib.c2a = function() {
	this.initialize(img.c2a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,43);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,135);


(lib.photo01 = function() {
	this.initialize(img.photo01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,319,600);


(lib.photo02 = function() {
	this.initialize(img.photo02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,319,600);


(lib.photo03 = function() {
	this.initialize(img.photo03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,600);


(lib.pleca = function() {
	this.initialize(img.pleca);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,62);


(lib.tel = function() {
	this.initialize(img.tel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,19);


(lib.txt01 = function() {
	this.initialize(img.txt01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,55);


(lib.txt02 = function() {
	this.initialize(img.txt02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,59);


(lib.txtVenta = function() {
	this.initialize(img.txtVenta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,70);


(lib.txtventa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txtVenta();
	this.instance.setTransform(0,0,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120.1,62.3);


(lib.txttel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172,19);


(lib.txt02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt02();
	this.instance.setTransform(13,0.9,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13,0.9,230,49.2);


(lib.txt01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179,55);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c2a();
	this.instance.setTransform(-90,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-21.5,180,43);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c2a();
	this.instance.setTransform(-90,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-21.5,180,43);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo01();
	this.instance.setTransform(-162.5,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.5,-300,319,600);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo01();
	this.instance.setTransform(-162.5,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.5,-300,319,600);


(lib.plecaAzul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36AAE2").s().p("AuVISIGE2nIWnGEImEWng");
	this.shape.setTransform(91.9,91.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183.8,183.7);


(lib.pleca_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pleca();
	this.instance.setTransform(0,0,1.886,1.886);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,566,117);


(lib.photo03_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,600);


(lib.photo02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,319,600);


(lib.click = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgXaAu3MAAAhdtMAu1AAAMAAABdtg");
	this.shape.setTransform(150,300);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:



(lib.lomas_300x6000 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_359 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(359).call(this.frame_359).wait(1));

	// click
	this.instance = new lib.click();
	this.instance.setTransform(149,299.9,1,1,0,0,0,150,299.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.click(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// tel
	this.instance_1 = new lib.txttel();
	this.instance_1.setTransform(148,511,1,1,0,0,0,86,9.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(269).to({_off:false},0).to({alpha:1},15).wait(76));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.setTransform(20,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(360));

	// c2a
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.setTransform(149,635);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.setTransform(149,555);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},254).to({state:[{t:this.instance_4}]},15).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(254).to({_off:false},0).to({_off:true,y:555},15).wait(91));

	// txtventas
	this.instance_5 = new lib.txtventa("synched",0);
	this.instance_5.setTransform(74.6,458.9,1,1,0,0,0,60.1,31.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).to({alpha:1},15).wait(180).to({startPosition:0},0).to({alpha:0},7).to({_off:true},2).wait(112));

	// txt02
	this.instance_6 = new lib.txt02_1("synched",0);
	this.instance_6.setTransform(148,547,1,1,0,0,0,130,23);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(115).to({_off:false},0).to({alpha:1},14).wait(110).to({startPosition:0},0).to({alpha:0},10).to({_off:true},1).wait(110));

	// txt01
	this.instance_7 = new lib.txt01_1("synched",0);
	this.instance_7.setTransform(148,547,1,1,0,0,0,89.5,27.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({alpha:1},15).wait(75).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(240));

	// pleca
	this.instance_8 = new lib.pleca_1("synched",0);
	this.instance_8.setTransform(150,664,1,1,0,0,0,282.9,58.5);
	this.instance_8.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:544},19).wait(220).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(105));

	// cuadro
	this.instance_9 = new lib.plecaAzul("synched",0);
	this.instance_9.setTransform(-68,499.1,1,1,-86.2,0,0,0.8,138.8);
	this.instance_9.alpha = 0.75;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({_off:false},0).to({rotation:8.5,x:-28.1},15).wait(195).to({regY:138.7,rotation:8.2},0).to({rotation:80.7,x:-68,y:599},15).to({_off:true},2).wait(104));

	// photo03
	this.instance_10 = new lib.photo03_1("synched",0);
	this.instance_10.setTransform(162.5,300,1,1,0,0,0,162.5,300);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(239).to({_off:false},0).to({x:160,alpha:1},15).to({x:142.5},105).wait(1));

	// photo02
	this.instance_11 = new lib.photo02_1("synched",0);
	this.instance_11.setTransform(162.5,300,1,1,0,0,0,162.5,300);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(104).to({_off:false},0).to({x:160.5,alpha:1},15).to({x:143.5},135).to({_off:true},1).wait(105));

	// photo01
	this.instance_12 = new lib.Tween1("synched",0);
	this.instance_12.setTransform(162.5,300);

	this.instance_13 = new lib.Tween2("synched",0);
	this.instance_13.setTransform(142.5,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},119).to({state:[]},1).wait(240));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true,x:142.5},119).wait(241));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.1,300,566,722.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;