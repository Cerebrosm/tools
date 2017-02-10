(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/c2a.png?1467926782604", id:"c2a"},
		{src:"images/logo.png?1467926782604", id:"logo"},
		{src:"images/photo01.jpg?1467926782604", id:"photo01"},
		{src:"images/photo02.jpg?1467926782604", id:"photo02"},
		{src:"images/photo03.jpg?1467926782604", id:"photo03"},
		{src:"images/pleca.png?1467926782604", id:"pleca"},
		{src:"images/tel.png?1467926782604", id:"tel"},
		{src:"images/txt01.png?1467926782604", id:"txt01"},
		{src:"images/txt02.png?1467926782604", id:"txt02"},
		{src:"images/txtVenta.png?1467926782604", id:"txtVenta"}
	]
};



// symbols:



(lib.c2a = function() {
	this.initialize(img.c2a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,31);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,88);


(lib.photo01 = function() {
	this.initialize(img.photo01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,321,261);


(lib.photo02 = function() {
	this.initialize(img.photo02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,257);


(lib.photo03 = function() {
	this.initialize(img.photo03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,256);


(lib.pleca = function() {
	this.initialize(img.pleca);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,62);


(lib.tel = function() {
	this.initialize(img.tel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,13);


(lib.txt01 = function() {
	this.initialize(img.txt01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,13);


(lib.txt02 = function() {
	this.initialize(img.txt02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,233,16);


(lib.txtVenta = function() {
	this.initialize(img.txtVenta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,38);


(lib.txtvnt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txtVenta();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,38);


(lib.txt02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt02();
	this.instance.setTransform(-12,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,0,233,16);


(lib.txt01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt01();
	this.instance.setTransform(25,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25,0,202,13);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c2a();
	this.instance.setTransform(-64.5,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-15.5,129,31);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c2a();
	this.instance.setTransform(-64.5,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-15.5,129,31);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tel();
	this.instance.setTransform(-63,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-6.5,128,13);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tel();
	this.instance.setTransform(-63,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-6.5,128,13);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo01();
	this.instance.setTransform(-160,-126.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-126.5,321,261);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo01();
	this.instance.setTransform(-160,-126.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-126.5,321,261);


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

	this.instance_1 = new lib.pleca();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,62);


(lib.photo03_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,256);


(lib.photo02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,257);


(lib.clickok = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bThMAAAgnBMAu2AAAMAAAAnBg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:



(lib.lomas_300x250 = function(mode,startPosition,loop) {
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

	// Layer 12
	this.instance = new lib.clickok();
	this.instance.setTransform(149,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.clickok(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(9,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(360));

	// c2a
	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.setTransform(149,288.9);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.setTransform(149,228);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},254).to({state:[{t:this.instance_3}]},15).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(254).to({_off:false},0).to({_off:true,y:228},15).wait(91));

	// txt03
	this.instance_4 = new lib.Tween3("synched",0);
	this.instance_4.setTransform(148.5,218);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween4("synched",0);
	this.instance_5.setTransform(148.5,197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},269).to({state:[{t:this.instance_5}]},15).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(269).to({_off:false},0).to({_off:true,y:197,alpha:1},15).wait(76));

	// txt02
	this.instance_6 = new lib.txt02_1("synched",0);
	this.instance_6.setTransform(149.3,223.4,1,1,0,0,0,104,7.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(115).to({_off:false},0).to({regX:104.5,regY:8,x:149.8,y:223.5,alpha:1},14).wait(110).to({startPosition:0},0).to({y:253.5,alpha:0},15).to({_off:true},1).wait(105));

	// txt01
	this.instance_7 = new lib.txt01_1("synched",0);
	this.instance_7.setTransform(149.3,211.5,1,1,0,0,0,126,6.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({y:221.3,alpha:1},15).wait(75).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(240));

	// pleca
	this.instance_8 = new lib.pleca_1("synched",0);
	this.instance_8.setTransform(150,290,1,1,0,0,0,150,31);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:220,alpha:0.602},19).wait(220).to({startPosition:0},0).to({y:250,alpha:0},15).to({_off:true},6).wait(100));

	// Layer 1
	this.instance_9 = new lib.txtvnt("synched",0);
	this.instance_9.setTransform(73,162,1,1,0,0,0,64,17.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(43).to({_off:false},0).to({alpha:1},16).wait(180).to({startPosition:0},0).to({alpha:0},15).wait(106));

	// Layer 4
	this.instance_10 = new lib.plecaAzul("synched",0);
	this.instance_10.setTransform(-68,249.1,1,1,-86.2,0,0,0.8,138.8);
	this.instance_10.alpha = 0.75;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(28).to({_off:false},0).to({regY:138.7,rotation:0,x:-28.1,y:249},15).wait(196).to({startPosition:0},0).to({rotation:80.7,x:-68},15).wait(106));

	// photo03
	this.instance_11 = new lib.photo03_1("synched",0);
	this.instance_11.setTransform(156,125.5,1,1,0,0,0,160,127.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(239).to({_off:false},0).to({alpha:1},15).to({x:142},105).wait(1));

	// photo02
	this.instance_12 = new lib.photo02_1("synched",0);
	this.instance_12.setTransform(157,125.5,1,1,0,0,0,160,127.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(104).to({_off:false},0).to({alpha:1},15).to({x:143},135).to({_off:true},1).wait(105));

	// photo01
	this.instance_13 = new lib.Tween1("synched",0);
	this.instance_13.setTransform(156,116.5);

	this.instance_14 = new lib.Tween2("synched",0);
	this.instance_14.setTransform(142,116.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_14}]},119).to({state:[]},1).wait(240));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true,x:142},119).wait(241));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(146,115,321,331);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;