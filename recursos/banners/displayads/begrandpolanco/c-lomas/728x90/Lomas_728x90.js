(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/c2a.png?1468279582840", id:"c2a"},
		{src:"images/logo.png?1468279582840", id:"logo"},
		{src:"images/photo01.jpg?1468279582840", id:"photo01"},
		{src:"images/photo02.jpg?1468279582840", id:"photo02"},
		{src:"images/photo03.jpg?1468279582840", id:"photo03"},
		{src:"images/pleca.png?1468279582840", id:"pleca"},
		{src:"images/tel.png?1468279582840", id:"tel"},
		{src:"images/txt01.png?1468279582840", id:"txt01"},
		{src:"images/txt02.png?1468279582840", id:"txt02"},
		{src:"images/txtVenta.png?1468279582840", id:"txtVenta"}
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
p.nominalBounds = new cjs.Rectangle(0,0,58,97);


(lib.photo01 = function() {
	this.initialize(img.photo01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,111);


(lib.photo02 = function() {
	this.initialize(img.photo02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,111);


(lib.photo03 = function() {
	this.initialize(img.photo03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,111);


(lib.pleca = function() {
	this.initialize(img.pleca);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.tel = function() {
	this.initialize(img.tel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,13);


(lib.txt01 = function() {
	this.initialize(img.txt01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,46);


(lib.txt02 = function() {
	this.initialize(img.txt02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,51);


(lib.txtVenta = function() {
	this.initialize(img.txtVenta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,42);


(lib.txtventas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txtVenta();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121,42);


(lib.txttel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,13);


(lib.txt02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236,51);


(lib.txt01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt01();

	this.instance_1 = new lib.txt01();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153,46);


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
	this.instance.setTransform(-364,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-55.5,728,111);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo01();
	this.instance.setTransform(-364,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-55.5,728,111);


(lib.pleca_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pleca();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.photo03_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,111);


(lib.photo02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,111);


(lib.click = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36AAE2").s().p("Eg5tAHCIAAuDMBzbAAAIAAODg");
	this.shape.setTransform(369.5,45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ah = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36AAE2").s().p("AuSFoIAArPIckAAIAALPg");
	this.shape.setTransform(91.5,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183,72);


// stage content:
(lib.Lomas_728x90 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(363.4,45,1,1,0,0,0,369.4,45);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.click(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// Layer 1
	this.instance_1 = new lib.txttel("synched",0);
	this.instance_1.setTransform(594,26,1,1,0,0,0,56.5,6.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(279).to({_off:false},0).to({alpha:1},10).wait(71));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.setTransform(22.5,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(360));

	// c2a
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.setTransform(814.3,63.8,0.803,0.803);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.setTransform(594,63,0.811,0.811);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},254).to({state:[{t:this.instance_4}]},15).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(254).to({_off:false},0).to({_off:true,scaleX:0.81,scaleY:0.81,x:594,y:63},15).wait(91));

	// txtventas
	this.instance_5 = new lib.txtventas("synched",0);
	this.instance_5.setTransform(155,46,1,1,0,0,0,59.5,21.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).to({alpha:1},15).wait(180).to({regX:61.5,x:157},0).to({regX:60.5,x:156,alpha:0},15).to({_off:true},1).wait(105));

	// txt02
	this.instance_6 = new lib.txt02_1("synched",0);
	this.instance_6.setTransform(850,46.5,1,1,0,0,0,118,25.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(114).to({_off:false},0).to({x:580},16).wait(109).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(105));

	// txrt01
	this.instance_7 = new lib.txt01_1("synched",0);
	this.instance_7.setTransform(808,46,1,1,0,0,0,76.5,23);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({x:538},15).wait(75).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(240));

	// pleca
	this.instance_8 = new lib.pleca_1("synched",0);
	this.instance_8.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(239).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(105));

	// cuadro
	this.instance_9 = new lib.ah("synched",0);
	this.instance_9.setTransform(75.5,46,0.022,1,0,0,0,0,37);
	this.instance_9.alpha = 0.75;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(28).to({_off:false},0).to({regX:-0.5,scaleX:1},15).wait(196).to({startPosition:0},0).to({regX:0,scaleX:0.02},15).to({_off:true},1).wait(105));

	// photo03
	this.instance_10 = new lib.photo03_1("synched",0);
	this.instance_10.setTransform(364,55.5,1,1,0,0,0,364,55.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(239).to({_off:false},0).to({y:53.4,alpha:1},15).to({y:38.5},105).wait(1));

	// photo02
	this.instance_11 = new lib.photo02_1("synched",0);
	this.instance_11.setTransform(364,55.5,1,1,0,0,0,364,55.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(104).to({_off:false},0).to({y:53.8,alpha:1},15).to({y:38.5},135).to({_off:true},1).wait(105));

	// photo01
	this.instance_12 = new lib.Tween1("synched",0);
	this.instance_12.setTransform(364,55.5);

	this.instance_13 = new lib.Tween2("synched",0);
	this.instance_13.setTransform(364,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},119).to({state:[]},1).wait(240));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true,y:38.5},119).wait(241));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(358,40,739,116);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;