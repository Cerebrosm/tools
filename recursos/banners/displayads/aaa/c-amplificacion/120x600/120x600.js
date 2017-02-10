(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 120,
	height: 600,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"./fondo120X600.jpg", id:"fondo120X600"}
	]
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.fondo120X600 = function() {
	this.initialize(img.fondo120X600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,600);


(lib.webpage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AgMAZIARgxIAIAAIgRAxg");
	this.shape.setTransform(82.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AARARIAAgRQAAgJgHAAIgDABIgCADIgBADIAAACIAAARIgHAAIAAgRIAAgDIgBgDIgCgCIgDgBIgEABIgCAEIgBADIAAABIAAARIgIAAIAAggIAHAAIAAADIABAAQADgEAFAAQAHABABAEQAEgFAHAAIAFABIADABIADADIACAEIABAGIAAASg");
	this.shape_1.setTransform(78.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AgCARIgDgBIgDgBIgDgDIgEgFIgBgEIAAgDIAAgCIABgEIAEgFIAGgEIADgBIACgBIAGACIAGAEIAEAFIABAEIABACIgBADIgBAEIgCADIgCACIgGAFIgGAAIgCAAgAgCgIIgDABIgCAEIgBADIABAEIACAEIADABIACABIADgBIADgCIADgEIABgDIgBgCIgDgEIgDgCIgDgBIgCABg");
	this.shape_2.setTransform(73.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AgEARIgGgFIgDgCIgBgDIgCgEIAAgDIAAgCIACgEQAAgCADgDIAGgEIADgBIACgBIAEABIAFACIAEAEIAEAGIgJAAQgDgFgFAAIgCABIgDABIgCAEIgBADIABADIACAEIADACIACABIAEgBIAEgDIAJAAIgDAEIgEAFIgEACIgGAAIgEAAg");
	this.shape_3.setTransform(69.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AgDAEIAAgHIAGAAIAAAHg");
	this.shape_4.setTransform(66.5,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgCARIgEgBIgDgBIgCgDIgEgFIgBgEIgBgDIABgCIABgEIAEgFIAFgEIAEgBIACgBIAHACIAFAEIAEAFIABAEIAAACIAAADIgBAEIgBADIgDACIgFAFIgHAAIgCAAgAgBgIIgEABIgDAEIgBADIABAEIACAEIAEABIACABIAEgBIADgCIABgEIABgDIgBgCIgBgEIgDgCIgEgBIgBABg");
	this.shape_5.setTransform(63.6,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AgEARIgGgFIgDgCIgBgDIgCgEIAAgDIAAgCIACgEQAAgCADgDIAGgEIADgBIACgBIAEABIAFACIAEAEIAEAGIgJAAQgDgFgFAAIgCABIgDABIgCAEIgBADIABADIACAEIADACIACABIAEgBIAEgDIAJAAIgDAEIgEAFIgEACIgGAAIgEAAg");
	this.shape_6.setTransform(59.5,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AgDAWIAAggIAHAAIAAAggAgDgOIAAgHIAHAAIAAAHg");
	this.shape_7.setTransform(56.7,-0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AgDAWIAAgZIgEAAIAAgHIAEAAIAAgLIAGAAIAAALIAFAAIAAAHIgFAAIAAAZg");
	this.shape_8.setTransform(55,-0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AgGARIAAggIAGAAIAAADIACgDIAEgBIABAAIAAAIQgHAAAAAIIAAARg");
	this.shape_9.setTransform(53.1,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AgCARIgDgBIgEgBIgCgDIgEgFIgBgEIgBgDIABgCIABgEIAEgFIAGgEIADgBIACgBIAGACIAGAEIAEAFIABAEIAAACIAAADIgBAEIgCADIgCACIgGAFIgGAAIgCAAgAgBgIIgEABIgDAEIgBADIABAEIADAEIADABIACABIAEgBIACgCIACgEIABgDIgBgCIgCgEIgCgCIgEgBIgBABg");
	this.shape_10.setTransform(49.8,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("AgGARIgFgFIgCgCIgCgDIgBgEIgBgDIACgGIAEgFQACgDADgBIADgBIADgBQAGABAEAFIAAgFIAHAAIAAAhIgHAAIAAgFIgDADIgCABIgFABIgGAAgAgCgIIgEACIgCAEIAAACIAAAEIACADIAEACIACABIAEgBIADgCIACgDIAAgEIAAgDIgDgEIgCgBIgEgBIgCABg");
	this.shape_11.setTransform(45.7,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AgGARIgFgFIgDgCIgBgDIgBgEIgBgDIACgGIAEgFQACgDADgBIADgBIADgBQAFABAFAFIAAgFIAHAAIAAAhIgHAAIAAgFIgDADIgCABIgFABIgGAAgAgCgIIgEACIgCAEIAAACIAAAEIACADIAEACIACABIAEgBIADgCIACgDIAAgEIAAgDIgCgEIgDgBIgEgBIgCABg");
	this.shape_12.setTransform(41.5,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AARARIAAgRQAAgJgHAAIgDABIgCADIgBADIAAACIAAARIgHAAIAAgRIAAgDIgBgDIgCgCIgDgBIgEABIgCAEIgBADIAAABIAAARIgIAAIAAggIAHAAIAAADIABAAQADgEAFAAQAHABABAEQAEgFAHAAIAFABIADABIADADIACAEIABAGIAAASg");
	this.shape_13.setTransform(36.6,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AgDARQgEgCgBgCQgCgCgBgFIAJAAQABAEABAAIADgBIABgCQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgEgDIgDgBIgCAAIgCgCIAAgEIABgEIACgEIAEgCIACgBIAEABIADACIADAEIABAEIgIAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAIAAABIgBACIABACIACACIAEABIADABIACABIABAFIgBAFIgDAEIgEACIgEAAIgDAAg");
	this.shape_14.setTransform(32.2,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2F2F2").s().p("AgDAWIAAggIAHAAIAAAggAgDgOIAAgHIAHAAIAAAHg");
	this.shape_15.setTransform(30,-0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2F2F2").s().p("AgGARIAAggIAGAAIAAADIACgDIAEgBIABAAIAAAIQgHAAAAAIIAAARg");
	this.shape_16.setTransform(28.4,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2F2F2").s().p("AgEAQIgDgBIgEgDQgDgEAAgIIAAgQIAIAAIAAAQQAAAJAGABIADgBIACgDIABgDIABgDIAAgQIAIAAIAAAgIgIAAIAAgDIgDACIgCABIgCABIgEgBg");
	this.shape_17.setTransform(25.2,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2F2F2").s().p("AgCARIgDgBIgDgBIgDgDIgEgFIgBgEIAAgDIABgFIAEgGIADgDIADgBIADgBIACgBIADABIAEABIAFAEQADADABADIABAFIAAADIgYAAQAAADACACIADABIACABIAEgBIAEgDIAIAAIgCAEIgEAEIgFADIgFAAIgCAAgAAJgBIgBgEIgDgCIgCgBIgDgBIgEABIgCADIgCAEIARAAIAAAAg");
	this.shape_18.setTransform(21.3,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F2F2F2").s().p("AAGARIAAgQQABgKgHAAIgBABIgDADIgBADIAAADIAAAQIgIAAIAAggIAHAAIAAADIADgCIACgBIACgBIAFABIADACIADABQADAFgBAHIAAARg");
	this.shape_19.setTransform(17.4,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2F2F2").s().p("AgGARIgFgFIgCgCIgCgDIgBgEIgBgDIACgGIAEgFQACgDADgBIADgBIADgBQAGABAEAFIAAgFIAHAAIAAAhIgHAAIAAgFIgDADIgCABIgFABIgGAAgAgCgIIgDACIgDAEIAAACIAAAEIADADIADACIACABIAEgBIADgCIACgDIAAgEIAAgDIgDgEIgCgBIgEgBIgCABg");
	this.shape_20.setTransform(13.4,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F2F2F2").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_21.setTransform(10.4,1.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F2F2F2").s().p("AAGARIgGgVIgFAVIgFAAIgMghIAJAAIAGATIAFgTIAFAAIAFATIAHgTIAIAAIgMAhg");
	this.shape_22.setTransform(7,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F2F2F2").s().p("AAGARIgGgVIgFAVIgFAAIgMghIAJAAIAGATIAFgTIAFAAIAFATIAHgTIAIAAIgMAhg");
	this.shape_23.setTransform(2,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F2F2F2").s().p("AAGARIgGgVIgFAVIgFAAIgMghIAJAAIAGATIAFgTIAFAAIAFATIAHgTIAIAAIgMAhg");
	this.shape_24.setTransform(-3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-4.8,111.3,9.6);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1163A").s().p("AgTgbIAngGIgPBAIgSADg");
	this.shape.setTransform(13.5,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.4,5.8,4.1,6.9);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FC0D1B").ss(0.3).p("AApAcQgLARgUAEQgUAEgRgLQgRgMgEgVQgEgSALgSQAMgRAUgEQATgEARALQASAMAEAVQAEASgMASg");
	this.shape_1.setTransform(8.6,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAqQgRgMgEgVQgEgSALgSQAMgRAVgEQASgEARALQASAMAEAVQAEASgLASQgMARgVAEIgJABQgOAAgNgIg");
	this.shape_2.setTransform(8.6,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,2.7,12.1,12.2);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-4.1,0,4.1,0).s().p("AgDAaQgfgVgGgsIAZAAQADAcAPAOQAPAOAWAAIAAAXQgYAAgTgOg");
	this.shape.setTransform(4.1,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.2,8);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1163A").s().p("AgTAXIABguIAmABIgUAug");
	this.shape.setTransform(11.6,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.6,5.6,4.1,4.9);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E1163A").s().p("AgTAYIABgvIAmABIgUAug");
	this.shape_3.setTransform(12.2,8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.2,5.5,4,4.9);


(lib.AAA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AgKgVIAFAAIAAAmIAQAAIAAAFIgVAAg");
	this.shape.setTransform(93.6,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AAQAWIgGgPIgTAAIgGAPIgFAAIATgrIADAAIATArgAgHADIAPAAIgIgTg");
	this.shape_1.setTransform(89.3,18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AANAWIgZglIAAAlIgEAAIAAgrIAFAAIAYAjIAAgjIAFAAIAAArg");
	this.shape_2.setTransform(84.5,18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AgBAWIAAgrIADAAIAAArg");
	this.shape_3.setTransform(81.3,18.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AATAWIgBgmIgQAmIgDAAIgQgmIgBAAIABAmIgEAAIgBgrIAHAAIAPAkIAPgkIAIAAIAAArg");
	this.shape_4.setTransform(77.5,18.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHgAgMgMQgGAGAAAGQABAHAFAGQAGAGAGAAQAIgBAFgFQAGgGAAgHQAAgHgGgFQgFgGgIAAQgGAAgGAGg");
	this.shape_5.setTransform(71.7,18.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AgRAWIgBgrIAOAAQAHAAAFADQAKAHAAALQAAALgKAHQgEADgIABgAgMASIAGAAQAIAAAFgEQAHgGAAgIQAAgIgIgFQgFgEgIAAIgGAAg");
	this.shape_6.setTransform(66.6,18.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AgNAWIAAgrIAMAAQAMAAAAAMQAAAEgFAFQAIACAAAHQAAAGgFAFQgFACgEAAgAgIASIAGAAQADAAAEgCQAEgBAAgGQAAgGgFgBIgHgBIgFAAgAgIgCIAFAAQADABADgCQAEgCAAgEQAAgDgCgCQgCgDgFAAIgGAAg");
	this.shape_7.setTransform(62.3,18.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AARAWIgHgPIgTAAIgGAPIgFAAIATgrIADAAIATArgAgHADIAPAAIgIgSg");
	this.shape_8.setTransform(57.9,18.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgGAIgBQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHgAAAgRQgGAAgGAFQgGAGAAAGQAAAIAGAFQAGAGAGAAQAHAAAGgGQAGgFAAgIQAAgGgGgGQgFgFgIAAIAAAAg");
	this.shape_9.setTransform(50.6,18.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AgOAQQgGgHAAgJQAAgIAGgHQAHgHAIAAQAOAAAHAMIgGAAQgFgIgLAAQgFAAgFAGQgGAGAAAGQAAAIAGAFQAGAGAFgBQAJAAAGgIIAGAAQgHANgOAAQgHAAgIgHg");
	this.shape_10.setTransform(45.2,18.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("AgBAWIAAgrIADAAIAAArg");
	this.shape_11.setTransform(41.7,18.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AgBAWIAAgnIgKAAIAAgEIAXAAIAAAEIgKAAIAAAng");
	this.shape_12.setTransform(39.4,18.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AAIAWIgNgUIAIgBQAHgBAAgGQAAgIgFgBQgDgCgEAAIgHAAIAAAnIgFAAIAAgrIAMAAQAGAAADABQAIAFAAAJQAAAFgEACQgDAEgHAAIANARg");
	this.shape_13.setTransform(36,18.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AgPAWQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAHQAAAKgHAHQgHAHgJAAQgIAAgHgHgAgMgGQgGAGAAAGQAAAHAGAGQAFAGAHAAQAHgBAGgFQAGgGAAgIQAAgGgGgFQgGgGgHAAQgGAAgGAGgAgDgVIAKgHIACAEIgKAGg");
	this.shape_14.setTransform(31.1,18.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2F2F2").s().p("AgUAWIATgrIADAAIATArIgFAAIgGgPIgTAAIgHAPgAgHADIAPAAIgIgTg");
	this.shape_15.setTransform(25.9,19);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2F2F2").s().p("AAQAWIgGgPIgTAAIgGAPIgFAAIATgrIADAAIATArgAgHADIAPAAIgIgTg");
	this.shape_16.setTransform(19.1,19);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2F2F2").s().p("AASAWIAAgmIgRAmIgBAAIgRgmIAAAmIgFAAIAAgrIAHAAIAPAkIAQgkIAHAAIAAArg");
	this.shape_17.setTransform(13.7,19);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2F2F2").s().p("AgHAUQgFgEAAgGIAEAAQABAJAHAAQAJAAgBgJQABgGgJgEQgLgBAAgIQAAgFAEgEQAEgEADAAQAFAAADAEQAEAEAAAFIgEAAQgBgEgCgCQgDgCgCAAQgHAAAAAHQAAAGAJADQALABAAAKQAAAFgEAEQgEAEgFAAQgDAAgEgDg");
	this.shape_18.setTransform(9.1,19);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F2F2F2").s().p("AgBAWIAAgrIADAAIAAArg");
	this.shape_19.setTransform(6.6,19);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2F2F2").s().p("AAIAWIgNgUIAIgBQAHgBAAgGQAAgGgFgDQgDgCgEABIgHAAIAAAmIgFAAIAAgrIAMAAQAFAAAEACQAIADAAAKQAAAKgOABIANARg");
	this.shape_20.setTransform(3.8,19);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F2F2F2").s().p("AgMAOQgBgDgBgGIAAgaIAFAAIAAAaQAAAFACADQACAFAFAAQAFAAAEgFQACgDgBgGIAAgZIAFAAIAAAZQAAAGgCAEQgDAIgKAAQgJAAgDgIg");
	this.shape_21.setTransform(-0.4,19.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F2F2F2").s().p("AgLAWIAAgrIAXAAIAAAEIgSAAIAAAQIARAAIAAACIgRAAIAAARIASgBIAAAFg");
	this.shape_22.setTransform(-4.3,19.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F2F2F2").s().p("AANAWIgZgmIAAAmIgEAAIAAgrIAGAAIAXAjIAAgjIAEAAIAAArg");
	this.shape_23.setTransform(-8.6,19.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F2F2F2").s().p("AAQAWIgGgPIgTAAIgHAPIgEAAIATgrIADAAIATArgAgHADIAPAAIgIgTg");
	this.shape_24.setTransform(-13.4,19.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F2F2F2").s().p("AAAA6IgihzIBFAAIgjBzg");
	this.shape_25.setTransform(20,-15.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F2F2F2").s().p("AAAA6IgihzIBFAAIgiBzg");
	this.shape_26.setTransform(57.4,-15.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F2F2F2").s().p("AghipIBCAAICJFSIheAAIgRgxIh0ABIgSAwIheABgAgiAzIBGAAIgkhzIAAAAg");
	this.shape_27.setTransform(76.2,-4.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F2F2F2").s().p("AghipIBCAAICJFSIheAAIgRgxIh0ABIgSAxIheAAgAgiAzIBGAAIgkhyIAAAAg");
	this.shape_28.setTransform(38.8,-4.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F2F2F2").s().p("AghipIBCAAICJFSIhfAAIgQgxIh1AAIgRAyIheAAgAgiAzIBFAAIgjhyIAAAAg");
	this.shape_29.setTransform(1.4,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-21.3,110.4,42.7);


(lib.min652 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghBfIAYg2Ig3iHIATAAIAtBvIAuhvIATAAIhQC9g");
	this.shape.setTransform(42.8,-6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0AzQgVgUAAgfQAAgcAUgVQAXgXAfAAQAkAAASAcIABAAIAAgZIASAAIAACLIgSAAIAAgZIgBAAQgTAcgjAAQgfABgWgXgAglgoQgSAQAAAYQAAAYAQARQAQARAYAAQAXAAARgRQAQgQAAgZQAAgWgQgQQgRgSgXAAQgWAAgQAQg");
	this.shape_1.setTransform(26.8,-9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AArBfIAAhOQAAgYgNgMQgMgMgSAAQgRAAgMAMQgOAMAAAXIAABPIgSAAIAAi9IASAAIAABEIABAAQAGgIAJgGQAMgIAPAAQAaAAASASQARARAAAeIAABOg");
	this.shape_2.setTransform(10.4,-11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AArBIIAAhMQAAgagNgMQgMgMgSAAQgRAAgMAMQgNAMAAAZIAABNIgSAAIAAiLIASAAIAAASIAAAAQAOgWAcAAQAbAAARASQARARAAAgIAABMg");
	this.shape_3.setTransform(-12.4,-9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwBRQgMgPAAgeIAAhMIASAAIAABMQAAAXAKAOQAMANAUAAQARAAALgLQAIgIADgHQAEgLAAgRIAAhIIASAAIAACLIgRAAIAAgWIAAAAQgNAZgfAAQgfAAgRgVgAgVhJIAxgcIAJAPIgxAcg");
	this.shape_4.setTransform(-28.1,-12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzAzQgWgUAAgfQAAgcAVgVQAVgXAgAAQAlAAASAcIAAAAIAAgZIASAAIAACLIgSAAIAAgZIAAAAQgTAcgkAAQgfABgVgXgAgmgoQgRAQAAAYQAAAYAQARQAQARAYAAQAXAAAQgRQARgQAAgZQAAgWgQgQQgQgSgYAAQgWAAgRAQg");
	this.shape_5.setTransform(-44.9,-9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhIBIQgdgeAAgpQAAgrAfgfQAegdAoAAQAqAAAeAgQAeAeABAoQAAApgeAeQgeAggrAAQgqAAgegfgAgzg6QgaAYAAAjQAAAhAYAYQAXAWAeAAQAeAAAWgVQAZgYAAgjQAAgkgagXQgXgUgcAAQgcAAgXAVg");
	this.shape_6.setTransform(38.2,43.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguB+QgjgTgMgoIAaAAQAIASAOANQAVASAeAAQAcAAAUgQQAXgUAAglIAAgRIgBAAQgLAUgVALQgVAJgXAAQgnAAgegbQgggeAAgrQAAgtAggfQAegcAnAAQATAAASAHQAYAKAPAXIABAAIAAgjIAZAAIAACkQAAAWgCANQgEAVgMAQQgQAWgeAJQgRAFgPAAQgbAAgZgNgAg1hbQgXAXAAAhQAAAhAXAWQAWAYAfAAQAkAAAXgcQATgWABgdQgBgggWgYQgXgZghAAQgfAAgWAZg");
	this.shape_7.setTransform(13.7,46.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhHBJQgegeAAgrQAAgoAdgeQAegfAqgBQAdAAAZAQQAVAOAMAVQAPAZAAAcIAAAHIixAAQABAcAXAWQAXAVAcAAQAZAAATgOQATgNAHgTIAaAAQgLAegZATQgbAUghAAQgpAAgegegAgug/QgYATgFAgICXAAQgFgggYgTQgWgQgZAAQgZAAgVAQg");
	this.shape_8.setTransform(-9.7,43.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhDBHQgSgVAAgrIAAhqIAZAAIAABqQAAAiAOASQARATAdAAQAYAAAQgQQAKgKAFgLQAGgPAAgXIAAhmIAZAAIAADDIgYAAIAAgfIgBAAQgGAOgOAJQgSAMgXAAQgsAAgXgdg");
	this.shape_9.setTransform(-32.4,43.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfCPQAXgBAIgQQAHgNAAgcIAAi2IAZAAIAAC2QAAAXgCAMQgFATgOANQgQAPgaAAgAAHh5IAAgtIAZAAIAAAtg");
	this.shape_10.setTransform(-48.9,43.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAjA5IAAg8QAAgUgLgKQgKgKgOAAQgNAAgKAKQgKALAAASIAAA9IgPAAIAAhuIAPAAIAAAOQALgRAWAAQAVAAAOAOQAOANAAAaIAAA8g");
	this.shape_11.setTransform(42.7,15.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnApQgSgQAAgZQAAgWARgRQARgSAXAAQARAAAOAJQALAIAIALQAIAOAAAPIAAAFIhlAAQABARAOALQAMAMAQAAQAOAAALgHQAKgIAFgLIAOAAQgFARgPALQgQAMgSAAQgXgBgQgRgAgagjQgNALgEASIBWAAQgDgSgOgLQgMgKgOAAQgNAAgNAKg");
	this.shape_12.setTransform(29.7,15.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgYQAAgXASgSQARgQAWAAQAYgBARATQARARAAAWQAAAXgRASQgRARgYABQgXAAgRgSgAgdggQgOANAAATQAAATANANQAOANAQAAQARAAANgMQAOgNAAgUQAAgUgPgNQgNgMgQAAQgQABgNAMg");
	this.shape_13.setTransform(10.7,15.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAiBMIAAg+QABgSgLgLQgKgKgOAAQgNAAgKAKQgKALAAARIAAA/IgPAAIAAiWIAPAAIAAA2IAAAAQAMgRAVAAQAVgBAOAOQAOANAAAZIAAA+g");
	this.shape_14.setTransform(-2.4,13.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgYQAAgXASgRQASgRAXAAQARAAAOAIQARAKAHATIgPAAQgNgZgbAAQgPABgOAMQgPAMAAAUQAAASANAOQAOANARAAQAcABAMgXIAPAAQgSAkglAAQgYAAgSgSg");
	this.shape_15.setTransform(-15.2,15.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgmAoQgKgMAAgYIAAg8IAPAAIAAA7QAAAUAIALQAJAKAQAAQANAAAKgJQALgLAAgXIAAg5IAPAAIAABuIgOAAIAAgRIAAAAQgKAUgZAAQgZAAgNgRg");
	this.shape_16.setTransform(-28.2,15.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABEA5IAAg/QAAglgfAAQgOAAgIAKQgIAJAAASIAAA/IgNAAIAAg/QAAgSgIgJQgIgKgOAAQgPAAgIAKQgIAJAAASIAAA/IgOAAIAAhuIAOAAIAAANQAKgQAVAAQAZAAALAWQAOgWAXAAQAUAAANANQAMANAAAXIAABAg");
	this.shape_17.setTransform(-44,15.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FC0D1B").s().p("AgeAmIgGgGQgBgDABgEQgIgKgBgNQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAAAAAAAIABgJQADgLAHgJIAAABQAHgGALgGIADgDIAIgDQAJgBAKACIADADQAJACAJAHIAAgBQAOANACAPIgDAFQgBAMgEAIIABAIQgHAMgNAGIgHgDQgLADgLgBIgHADQgJgCgHgHgAgIAKIgIASQAEAHAFAIQAKABALgDIAIgQIgNgQgAgsADQACAKAGAKIASAEIAJgRIgIgQIgQgDgAAQgJIgGARIANARIARgGQAEgJABgLIgMgNgAgjgbIADAQIAPAEIAQgOIgBgPIgQgDQgLAGgGAGgAgBgkIABAPIAPALIARgFIABgRIAAAAQgKgHgJgCQgLACgEADg");
	this.shape_18.setTransform(28.8,-37.3);

	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(28.9,-37.2,1,1,0,0,0,8.6,8.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",2,2,5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhLCjQgJgGgBgKQgCgKAFgIQAGgJAMgCQgWgVgEgfQgDggARgaIAzhKIAUANIAFgLIgSgNIA6hZIAzAiQgVAXgQAbQghA1AWAPQAdATAHAjQAHAjgUAdQgSAbgeAJQgcAIgcgMQADAKgGAKQgGAIgKACIgFABQgHAAgGgEgAhACAQgGABgEAFQgDAFABAGQABAGAFADQAFAEAGgBQAGgCADgFQAEgFgBgFQgCgGgFgEQgDgCgEAAIgDAAgAgOAHQgVAEgLASQgMARAEAVQAEAUARAMQASAMATgEQAUgEAMgSQALgRgEgVQgEgUgRgMQgNgJgNAAIgKABg");
	this.shape_19.setTransform(29.4,-43);

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39.2,-33.8,1,1,0,0,0,4.1,4);
	this.instance_1.alpha = 0.5;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgrBsQgfgUgGguIAYAAQADAbARAQQAQAPAUAAQAYAAARgTQAQgTAAgYQAAgbgQgQQgRgSgYAAQgbAAgVAaIgTgFIAWh3IBqAAIAAAWIhXAAIgMBCQAXgLAQAAQAiAAAXAYQAXAXAAAjQAAAigWAYQgYAagjAAQgXAAgUgOg");
	this.shape_20.setTransform(43.3,-42);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhoBZQgKgMgDgLQgCgJAAgSIAAhdIAwAAIAABWQAAAOADAGQAGAMAQAAQAcAAAAghIAAhVIBDAAIAAg2IAwAAIAAA2IAXAAIAAAkIgXAAIAAB5IgwAAIAAh5IgVAAIAAB5IgsAAIAAgQIAAAAQgLAWgeAAQggAAgPgUg");
	this.shape_21.setTransform(8.7,-39.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAaBSIAAhVQAAgOgDgHQgGgMgQAAQgaAAAAAhIAABVIgwAAIAAieIAtAAIAAARIABAAQAMgWAdAAQALAAAMAEQAMAEAGAFQATARAAAjIAABig");
	this.shape_22.setTransform(-11.9,-37);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWARIAAgiIAuAAIAAAig");
	this.shape_23.setTransform(-22.8,-48.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgWBPIAAidIAuAAIAACdg");
	this.shape_24.setTransform(-22.8,-36.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ABLBSIAAhTQAAgPgDgHQgFgNgRAAQgbAAAAAhIAABVIguAAIAAhVQAAghgYAAQgbAAAAAjIAABTIgwAAIAAieIAtAAIAAARIABAAQAMgWAgAAQAfAAANAcQASgcAhAAQAbAAAQAQQAKALADAMQADALAAAcIAABVg");
	this.shape_25.setTransform(-38.6,-37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_1},{t:this.shape_19},{t:this.instance},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.4,-59.7,103.9,120.4);


(lib.INFORMATE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_2();
	this.instance.parent = this;
	this.instance.setTransform(23.6,0.3,1,1,0,0,0,12.2,8);
	this.instance.shadow = new cjs.Shadow("rgba(33,57,67,0.447)",0,5,9);

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17,-19.6,1,1,0,0,0,11.6,8.1);
	this.instance_1.shadow = new cjs.Shadow("rgba(33,57,67,0.447)",0,5,9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AgSghIAOAAIADA3IATgCIAAAMIgfACg");
	this.shape.setTransform(91.2,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AgHgiIAHAAIAiBBIgPABIgIgSIgXACIgGASIgPABgAgIAEIAOgBIgHgTg");
	this.shape_1.setTransform(85.4,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AgTggIAjgCIABAMIgXABIABARIAWgBIABAJIgWACIABAQIAXgBIAAAMIgjACg");
	this.shape_2.setTransform(76.2,11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AgRghIAMAAIAEA3IATgCIABAMIghACg");
	this.shape_3.setTransform(71.8,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AgHgiIAIAAIAhBBIgPABIgIgSIgXACIgGASIgPABgAgIAEIANgBIgHgTg");
	this.shape_4.setTransform(66,11.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgdgfIAPgBIAdAuIABAAIgDgwIANgBIADBDIgOABIgdguIACAwIgMABg");
	this.shape_5.setTransform(58.7,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AgIgUIAJgBIAgBBIgOABIgIgSIgXACIgGASIgOACgAgJARIAOgBIgHgSgAgPgiIASgNIAGAJIgTANg");
	this.shape_6.setTransform(51.7,11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AgDAjIgHgCIgHgCIgGgFIgFgEIgDgGQgCgDgBgEQgBgDAAgEQgBgCABgEIACgHIADgGIAEgGIAFgEQADgDAEgBIAGgDIAHgBIALACIAJAEQAFADADAEQAEADABAEIgPABIgIgGIgFgCIgEgBIgGABIgFACIgGAGQgDAEgBAFQgCAEABACQAAAEACAEQABAEAEADQADAEAEABIAGACIADAAQAEAAADgBIAFgDIAFgEIADgFIgbABIgBgLIArgBIAAABIAAAFIgCAHIgDAGQgBADgDADIgGAEQgCACgDABIgHADIgHABIgCABIgDgBg");
	this.shape_7.setTransform(43.9,13.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AgDAJIgZgnIAPgCIAOAfIANggIAPgBIgUArIABAaIgLAAg");
	this.shape_8.setTransform(33.8,13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AgcAwIAMgBIgGhbIgMABIgDgqIBAgDIACAoIgMABIAGBcIANAAIACAoIhAAFg");
	this.shape_9.setTransform(22,9.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AgyBFIgGhtIgMABIgDgqIBCgDIADAoIgNACIAFBaIAhgCIgFhbIgMABIgDgpIBCgEIADApIgNABIAGBsIgYAZIg/AEg");
	this.shape_10.setTransform(9.6,10.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("AgNBMIgHAAIgcgUIgIh9IAZgcIA1gDIAbAXIAIB9IgYAZIgIAAIACAaIgnACgAgOg5IAFBcIAXgCIgFhcg");
	this.shape_11.setTransform(-4.1,12.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AhGAyIAOgBIAJhcIgLAAIgDgpIBngGIACApIgLAAIAUBcIAQgBIACApIhCAEIgCgpIAJgBIgDgOIgWACIgCAOIALgBIACApIhCAEgAgLAFIAPgBIgKgyg");
	this.shape_12.setTransform(-17.9,12.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("Ag4AyIAOgBIgGhbIgNAAIgDgpIB2gHIADA2IgoADIgBgOIgXACIABAbIArgDIACAnIgMABIgJAAIgKAAIgLABIABAaIAXgBIgBgNIAqgCIADA1Ih2AIg");
	this.shape_13.setTransform(91.2,-14.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AgZAxIANAAIgHhcIgJAAIACAVIgeABIgEg9IB1gHIAEA9IgdACIgCgVIgKABIAGBcIANgBIACApIg/AEg");
	this.shape_14.setTransform(77.3,-13.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2F2F2").s().p("AhGAyIAOgBIAJhcIgLAAIgDgpIBngGIACApIgLAAIAUBcIAQgBIACApIhCAEIgCgpIAJgBIgDgOIgWACIgCAOIALgBIACApIhCAEgAgLAFIAPgBIgKgyg");
	this.shape_15.setTransform(64.9,-12.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2F2F2").s().p("AhSAzIANgBIgFhbIgOABIgDgpIA3gDIAkBUIABAAIAZhZIA3gDIADAqIgNAAIAFBbIANAAIADApIg2ADIgEg9IgSA+IgUACIgZg7IADA8Ig2AEg");
	this.shape_16.setTransform(46.9,-11.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2F2F2").s().p("Ag+AxIANgBIgFhcIgOABIgDgoIBXgGIAgAXIAEAqIgYAXIAaARIABAaIAPgBIACAoIg3AEIgEhDIgWABIADBEIg2ADgAgOguIACAbIAWgCIgBgag");
	this.shape_17.setTransform(30,-10.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2F2F2").s().p("AgwBFIgIh+IAZgcIA1gDIAbAYIAIB9IgYAYIg1AEgAgOgsIAGBbIAXgCIgGhbg");
	this.shape_18.setTransform(16,-10);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F2F2F2").s().p("AgzAyIAMgBIgFhbIgNAAIgDgpIB2gHIADA2IgoADIgBgOIgXACIABAbIArgDIACAnIgNABIgJAAIgJAAIgMABIABAaIANAAIACApIhBAEg");
	this.shape_19.setTransform(2.8,-9.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2F2F2").s().p("Ag6AyIAOgBIgGhbIgNABIgDgpIA2gEIAbBEIgFhFIA2gDIADApIgNAAIAICFIgsADIgXg8IAEA9Ig2ADg");
	this.shape_20.setTransform(-11.7,-8.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F2F2F2").s().p("AgcAwIAMgBIgGhbIgNAAIgCgpIBAgEIADAqIgNAAIAGBcIAMgBIADAqIhAAEg");
	this.shape_21.setTransform(-23.2,-7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.2,-30.7,139.6,61.5);


(lib._80rojo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(-25.1,40.7,1,1,0,0,0,13.5,9.2);
	this.instance.shadow = new cjs.Shadow("rgba(33,57,67,0.447)",0,5,11);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Ag0BrIgTi6IAbgsIA/gKIAhAgIAUC5IgbAnIg+ALgAgUhBIANCIIAdgFIgPiIg");
	this.shape.setTransform(46.4,41.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("Ag0BrIgTi6IAbgsIA/gKIAiAhIAGA9IgwAIIgEgnIgbAFIAOCIIAbgFIgEgnIAwgIIAHBBIgaAoIg/ALg");
	this.shape_1.setTransform(31.5,43.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AgeBLIAPgCIgPiJIgOADIgHg9IBMgMIAGA8IgPACIAPCJIAPgCIAGA8IhMANg");
	this.shape_2.setTransform(18.8,45.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AgVBOIAOgCIgOiKIgLACIADAfIgjAFIgJhaICKgXIAJBbIgjAFIgDgeIgLABIAOCKIAPgDIAGA8IhLANg");
	this.shape_3.setTransform(5.2,47.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AhGBNIAQgCIgOiJIgQADIgHg8IBmgRIApAdIAGBAIgZAkIAgAWIAEAnIAQgCIAHA8IhBAKIgLhjIgaAFIAKBjIhAAKgAgVhGIAFAoIAbgFIgFgng");
	this.shape_4.setTransform(-9,50.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgzBrIgUi6IAcgsIA+gKIAiAgIATC5IgaAoIg+AKgAgVhBIAPCIIAbgFIgOiIg");
	this.shape_5.setTransform(-25.5,53);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AhVBQIASgCIACiMIgNADIgGg9IB5gUIAGA8IgNADIAfCGIATgEIAGA9IhOANIgGg9IALgBIgFgVIgaAFIgBAVIAMgCIAGA9IhNAMgAgRAIIARgDIgQhKg");
	this.shape_6.setTransform(-41,55.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("Ag6A4IALgCIAChgIgJABIgEgqIBTgOIAFAqIgJACIAVBcIANgCIAEAqIg2AJIgEgqIAIgBIgEgOIgRADIgBAPIAJgCIAEAqIg2AJgAgLAFIALgCIgLgzg");
	this.shape_7.setTransform(48.5,11.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AhAA8IALgDIgKhdIgLABIgFgqIAtgHIAiBUIABAAIAPhcIAtgIIAEAqIgKACIAJBeIALgCIAFAqIgtAHIgGg+IgLBBIgSADIgWg7IAGA+IgsAHg");
	this.shape_8.setTransform(33.2,13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AgjBLIgEgiIAigFIABAOIASgEIgCgbIgYAEIgfgXIgGg3IATgdIArgIIAXAWIADAeIghAFIgCgNIgSADIADAbIAdgEIAaAWIAGA6IgTAcIgqAHg");
	this.shape_9.setTransform(20.4,15.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AgVA0IALgCIgKheIgLACIgEgqIA0gJIAEAqIgKACIAKBeIAKgCIAFAqIg0AJg");
	this.shape_10.setTransform(11.7,17.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("AgwA2IALgCIgKheIgLABIgEgpIBFgMIAdAUIAFAtIgSAZIAWAPIADAbIALgCIAEAqIgtAHIgHhFIgSADIAHBFIgsAHgAgOgwIADAbIASgDIgCgbg");
	this.shape_11.setTransform(2.3,19);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AghBNIgMhxIgKACIgEgpIA2gJIAEApIgLACIAKBdIAbgEIgKhdIgKABIgEgqIA2gJIAEAqIgLACIAMBvIgSAcIgzAIg");
	this.shape_12.setTransform(-11.1,20.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AgrA3IALgCIgKhdIgLACIgEgrIBggQIAGA3IgiAGIgBgNIgSADIADAbIAigGIAEAoIgiAGIABAbIAUgDIgBgNIAhgGIAGA3IhgAQg");
	this.shape_13.setTransform(-22.8,22.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AgqA4IALgBIgKhfIgLACIgFgqIAtgHIAZBDIgHhGIAsgHIAEApIgLACIAPCIIgkAGIgWg7IAEA+IgqAHg");
	this.shape_14.setTransform(-35.4,24.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2F2F2").s().p("Ag6A4IALgCIAChgIgJABIgEgqIBTgOIAFAqIgJACIAVBcIANgCIAEAqIg2AJIgEgqIAIgCIgEgOIgRAEIgBAOIAJgBIAEAqIg2AJgAgMAFIAMgCIgLgzg");
	this.shape_15.setTransform(-46.9,27);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AguA7IAMgCIgKhlIgMACIgEgtIBngQIAGA7IgkAGIgCgPIgTAEIACAdIAlgGIAFArIglAFIABAeIAVgDIgBgPIAkgFIAFA7IhnAQg");
	this.shape_16.setTransform(49.6,118.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgcA7IAFgBIgXhjIgMABIgEgsIA5gJIAEAtIgIACIAUBjIADhoIgJACIgEgtIA6gJIAFAtIgNACIgDBnIAGgBIAEAtIhRANg");
	this.shape_17.setTransform(36.1,120.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgXA4IAMgCIgKhlIgMABIgDgtIA3gJIAFAtIgLACIAKBmIALgCIADAtIg3AJg");
	this.shape_18.setTransform(26.2,121.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgcA7IAGgBIgXhjIgNACIgFgtIA7gJIADAtIgIABIAVBjIAChmIgJABIgDgtIA5gJIAFAtIgNACIgDBnIAGAAIAEAtIhRAMg");
	this.shape_19.setTransform(14.9,123.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AguA7IALgCIgJhlIgMACIgFgtIBogQIAGA7IgkAFIgBgNIgVACIADAeIAmgGIADArIgkAFIABAeIAWgEIgCgNIAkgGIAFA7IhnAQg");
	this.shape_20.setTransform(2.9,125.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("Ag0A5IALgCIgKhlIgLACIgFgtIBMgMIAeAXIAFAwIgTAaIAXAQIACAdIANgBIAEAsIgwAHIgHhJIgTADIAHBKIgwAHgAgOgzIACAdIAUgDIgDgeg");
	this.shape_21.setTransform(-9.7,127.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgsA5IALgCIgKhlIgMACIgEgtIBMgMIAeAXIAEAvIgTAaIAYARIAEAvIgUAfIhRAMgAAAAVIABAdIAVgEIgCgdgAgHgzIADAdIATgEIgCgdg");
	this.shape_22.setTransform(-22.8,129.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgnBPIgNiKIAUggIAugIIAZAZIAOCJIgUAdIguAIgAgOgwIAJBlIAUgEIgKhlg");
	this.shape_23.setTransform(-34.5,131.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgmBPIgEgjIAkgGIACAPIATgEIgCgdIgaAFIghgZIgGg8IAVgfIAugHIAZAYIADAfIgkAGIgCgPIgTADIACAeIAggFIAbAZIAGA+IgUAdIguAHg");
	this.shape_24.setTransform(-45.7,132.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AhACAIgVjgIAig1IBLgLIApAnIAVDfIggAvIhMAMgAgYhPIAQCkIAhgFIgQilg");
	this.shape_25.setTransform(-17.9,94.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AhLBhIATgDIgQilIgTADIgHhIIBNgMIAsB1IgMh6IBMgMIAHBJIgSADIAXDtIg/AJIgmhnIAIBsIhLAMg");
	this.shape_26.setTransform(-38.7,97.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F2F2F2").s().p("AgaguIAqgHIACAOIgeAFIADAeIAegGIABANIgeAEIADAgIAegGIACAOIgqAHg");
	this.shape_27.setTransform(35.4,-15.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F2F2F2").s().p("AgjgvIAagFQAUgDANARQAKAMACATQACAVgJAOQgJARgUADIgZAFgAgIgmIgOACIAIBJIAOgCQAKgCAIgKQAIgLgCgRQgCgPgHgJQgIgJgKAAIgFAAg");
	this.shape_28.setTransform(28,-13.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F2F2F2").s().p("AgOgzIAKgCIAoBfIgNACIgMgcIgbAEIgGAgIgMACgAgOAGIATgDIgMgkg");
	this.shape_29.setTransform(17.2,-12);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F2F2F2").s().p("AgfgvIAagEQAMgDAIAIQAIAHACAPQACASgJAIQgGAGgHACIAaAiIgOACIgegrIAFAwIgMACgAgFgmIgNACIAFAlIAIgBQAVgDgDgTQgBgHgEgFQgEgEgFAAIgEAAg");
	this.shape_30.setTransform(9.5,-10.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F2F2F2").s().p("AgLAwQgJgJgCgQIgHhDIAMgCIAHBDQABAMAHAFQACADAFgBQAGgBADgEQAGgHgCgMIgHhDIAMgCIAHBDQACAQgHAMQgIAKgKACIgEAAQgHAAgHgGg");
	this.shape_31.setTransform(2,-10);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2F2F2").s().p("AgEgiIgPADIgCgOIApgHIACAOIgQACIAKBXIgMACg");
	this.shape_32.setTransform(-4.4,-9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F2F2F2").s().p("AgagvIAXgEQAbgFADAfQADAdgcAFIgKACIAEAoIgMACgAgBglIgMABIAEAjIAJgCQAQgDgBgRQgCgPgMAAIgCABg");
	this.shape_33.setTransform(-9.6,-7.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F2F2F2").s().p("AgLAwQgJgIgCgRIgHhDIAMgCIAHBDQACAVANgCQAPgDgCgVIgHhDIAMgCIAHBDQACARgHALQgIAKgKACIgEAAQgHAAgHgGg");
	this.shape_34.setTransform(-16.6,-7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F2F2F2").s().p("AgfgvIAZgFQANgCAIAHQAJAJABAOQACASgJAIQgGAHgHAAIAbAjIgPACIgegrIAAAAIAFAwIgMACgAgFgmIgMACIAEAlIAIgBQAUgBgCgVQgBgHgEgFQgFgEgEAAIgEAAg");
	this.shape_35.setTransform(-23.4,-5.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F2F2F2").s().p("AgkgsIANgCIAtBFIABAAIgIhMIALgCIALBkIgMACIgvhGIAIBNIgMACg");
	this.shape_36.setTransform(-34.6,-3.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F2F2F2").s().p("AgZAqQgNgOgDgVQgCgUAKgRQALgSASgDQAQgDAOANQANAOADAWQACATgKASQgLASgSADIgFAAQgNAAgMgLgAgCgmQgPADgHAPQgGAMABANQACAOAIAKQAKAMANgCQAOgCAHgPQAHgNgCgMQgBgPgJgKQgJgKgLAAIgCAAg");
	this.shape_37.setTransform(-43.6,-2.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F2F2F2").s().p("AgXApQgOgNgCgWQgCgUAKgSQALgRARgDQAMgCAMAIQAIAGAGAKIgOADQgMgNgKACQgNACgIANQgHANACAOQABAQALALQAKAKAKgCQANgDAHgOIAPgDQgJAdgZAEIgGABQgMAAgLgMg");
	this.shape_38.setTransform(-52.7,-0.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F2F2F2").s().p("AgMAyQgKgIgCgRIANgCQACATAMgCQAGgBADgFQADgGgBgIQAAgIgFgDQgDgCgGgCQgOgFgEgCQgGgGgCgNQgBgLAFgJQAGgLALgCQAIgCAIAHQAIAHABAOIgMACQgCgPgKABQgFABgDAGQgCAFAAAFQABAKAMADQAMADAEAEQAKAFACAQQABAOgGAKQgGALgMACIgDAAQgHAAgGgFg");
	this.shape_39.setTransform(-13.7,-47.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F2F2F2").s().p("AgaArQgOgOgCgWQgDgVALgSQALgSATgEQAQgDAPAPQAOAOADAXQACAUgLASQgLATgTADIgFAAQgOAAgMgMgAgDgnQgOACgIAQQgGANABANQACAPAIAKQALANANgDQAPgCAIgQQAGgNgCgMQgBgQgKgLQgIgKgMAAIgDABg");
	this.shape_40.setTransform(-21.8,-45.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F2F2F2").s().p("AgZgyIANgDIAJBbIAcgGIABAPIgoAGg");
	this.shape_41.setTransform(-29.1,-44.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F2F2F2").s().p("AgbgwIAsgHIABAOIgfAFIADAgIAfgGIACAMIgfAGIADAgIAfgFIACAOIgsAHg");
	this.shape_42.setTransform(-38.9,-43.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F2F2F2").s().p("AglgxIAbgFQAVgEAOASQAKAOACATQADAWgKAPQgLARgTAEIgaAEgAgIgnIgPACIAIBMIAPgDQAKgCAIgKQAJgLgCgSQgCgPgIgKQgIgKgKAAIgFABg");
	this.shape_43.setTransform(-46.6,-41.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F2F2F2").s().p("AgXBbQgSgOgDgeIAXgEQABALAFAJQAIAOAMgCQALgCAGgKQAHgKgCgPQgCgPgJgGQgEgDgMgEIgWgIQgGgCgGgEQgMgLgDgYQgBgUAIgRQALgUAUgDQASgDAOAMQAOANACAZIgWADQgCgOgIgHQgFgFgIACQgJACgFAKQgFAIABAKQABAMAJAGQAEADAJACQAYAIAHAFQATALADAeQACAZgLATQgMATgVAEIgGAAQgNAAgMgKg");
	this.shape_44.setTransform(50.7,-39.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F2F2F2").s().p("AgyhZIBRgNIADAaIg7AJIAGA6IA7gKIADAYIg7AKIAGA7IA7gKIACAaIhRANg");
	this.shape_45.setTransform(39.4,-37.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F2F2F2").s().p("AgIhBIgeAFIgDgaIBQgOIADAaIgeAFIASCmIgXAEg");
	this.shape_46.setTransform(28.1,-36.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F2F2F2").s().p("AhGhVIAZgEIBYCFIABAAIgQiSIAXgEIAUDBIgXADIhaiHIgBAAIAQCUIgXAEg");
	this.shape_47.setTransform(16.4,-34.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F2F2F2").s().p("AgyhZIBRgNIADAaIg7AKIAGA5IA7gKIADAYIg7AKIAGA7IA7gKIACAaIhRANg");
	this.shape_48.setTransform(2.7,-31.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F2F2F2").s().p("AgUheIAVgDIAUDAIgVADg");
	this.shape_49.setTransform(-6.1,-30.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F2F2F2").s().p("AgtBPQgagagFgpQgEgpAVggQAUghAhgFQAYgFAXAQQAOAKANAUIgbAFQgWgZgWAFQgYAEgPAYQgOAYADAdQADAfAUAUQATATAVgEQAYgDAPgdIAcgFQgJAcgTARQgRAPgUADIgKABQgYAAgXgWg");
	this.shape_50.setTransform(-17.3,-28.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F2F2F2").s().p("AgdhiIAUgEIBNC3IgYADIgWg2Ig2AJIgMA9IgXADgAgbAMIAmgGIgZhFIgBAAg");
	this.shape_51.setTransform(-31.7,-25.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F2F2F2").s().p("AgzhbIAtgIQAZgEAQAOQAPANACAbQADAbgMASQgMAQgbAFIgUAEIAIBMIgXAEgAgEhJIgWAEIAHBCIAUgEQASgDAHgMQAFgKgBgNQgCgNgHgIQgHgHgNAAIgFAAg");
	this.shape_52.setTransform(-44.5,-23.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F2F2F2").s().p("AgVlSIBVgNIgqKxIhWAOgABMD0IgZj0IAthdIBngRIA9BKIAZDvIgpBjIhrASgACKA4IALBmIAxgIIgLhmgAkCAlIgaj0IAthfIBngQIA+BLIAZDxIgpBhIhsASgAjEiVIAKBnIAygIIgLhng");
	this.shape_53.setTransform(25.4,-106.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F2F2F2").s().p("AhOENIgznoIAqhsIBqgRIA8BZIAzHkIgpBjIhqARgAgqiuIAlFmIAvgJIglllg");
	this.shape_54.setTransform(-15,-99.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F2F2F2").s().p("AhPEBIgRijIAphUIg5hFIgRioIA0hnIBVgOIBHBTIASCnIgoBXIA5BCIARCkIgqBoIhsASgAgQBRIALBkIAwgIIgKhkgAgriwIALBmIAwgIIgKhmg");
	this.shape_55.setTransform(-40,-95.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.8,-141.7,112.6,284.5);


(lib._80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(-25.1,40.7,1,1,0,0,0,13.5,9.2);
	this.instance.shadow = new cjs.Shadow("rgba(33,57,67,0.447)",0,5,11);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Ag0BrIgTi6IAbgsIA/gKIAhAgIAUC5IgbAnIg+ALgAgUhBIANCIIAdgFIgPiIg");
	this.shape.setTransform(46.4,41.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("Ag0BrIgTi6IAbgsIA/gKIAiAhIAGA9IgwAIIgEgnIgbAFIAOCIIAbgFIgEgnIAwgIIAHBBIgaAoIg/ALg");
	this.shape_1.setTransform(31.5,43.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AgeBLIAPgCIgPiJIgOADIgHg9IBMgMIAGA8IgPACIAPCJIAPgCIAGA8IhMANg");
	this.shape_2.setTransform(18.8,45.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AgVBOIAOgCIgOiKIgLACIADAfIgjAFIgJhaICKgXIAJBbIgjAFIgDgeIgLABIAOCKIAPgDIAGA8IhLANg");
	this.shape_3.setTransform(5.2,47.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AhGBNIAQgCIgOiJIgQADIgHg8IBmgRIApAdIAGBAIgZAkIAgAWIAEAnIAQgCIAHA8IhBAKIgLhjIgaAFIAKBjIhAAKgAgVhGIAFAoIAbgFIgFgng");
	this.shape_4.setTransform(-9,50.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgzBrIgUi6IAcgsIA+gKIAiAgIATC5IgaAoIg+AKgAgVhBIAPCIIAbgFIgOiIg");
	this.shape_5.setTransform(-25.5,53);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AhVBQIASgCIACiMIgNADIgGg9IB5gUIAGA8IgNADIAfCGIATgEIAGA9IhOANIgGg9IALgBIgFgVIgaAFIgBAVIAMgCIAGA9IhNAMgAgRAIIARgDIgQhKg");
	this.shape_6.setTransform(-41,55.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("Ag6A4IALgCIAChgIgJABIgEgqIBTgOIAFAqIgJACIAVBcIANgCIAEAqIg2AJIgEgqIAIgBIgEgOIgRADIgBAPIAJgCIAEAqIg2AJgAgLAFIALgCIgLgzg");
	this.shape_7.setTransform(48.5,11.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AhAA8IALgDIgKhdIgLABIgFgqIAtgHIAiBUIABAAIAPhcIAtgIIAEAqIgKACIAJBeIALgCIAFAqIgtAHIgGg+IgLBBIgSADIgWg7IAGA+IgsAHg");
	this.shape_8.setTransform(33.2,13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AgjBLIgEgiIAigFIABAOIASgEIgCgbIgYAEIgfgXIgGg3IATgdIArgIIAXAWIADAeIghAFIgCgNIgSADIADAbIAdgEIAaAWIAGA6IgTAcIgqAHg");
	this.shape_9.setTransform(20.4,15.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AgVA0IALgCIgKheIgLACIgEgqIA0gJIAEAqIgKACIAKBeIAKgCIAFAqIg0AJg");
	this.shape_10.setTransform(11.7,17.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("AgwA2IALgCIgKheIgLABIgEgpIBFgMIAdAUIAFAtIgSAZIAWAPIADAbIALgCIAEAqIgtAHIgHhFIgSADIAHBFIgsAHgAgOgwIADAbIASgDIgCgbg");
	this.shape_11.setTransform(2.3,19);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AghBNIgMhxIgKACIgEgpIA2gJIAEApIgLACIAKBdIAbgEIgKhdIgKABIgEgqIA2gJIAEAqIgLACIAMBvIgSAcIgzAIg");
	this.shape_12.setTransform(-11.1,20.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AgrA3IALgCIgKhdIgLACIgEgrIBggQIAGA3IgiAGIgBgNIgSADIADAbIAigGIAEAoIgiAGIABAbIAUgDIgBgNIAhgGIAGA3IhgAQg");
	this.shape_13.setTransform(-22.8,22.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AgqA4IALgBIgKhfIgLACIgFgqIAtgHIAZBDIgHhGIAsgHIAEApIgLACIAPCIIgkAGIgWg7IAEA+IgqAHg");
	this.shape_14.setTransform(-35.4,24.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2F2F2").s().p("Ag6A4IALgCIAChgIgJABIgEgqIBTgOIAFAqIgJACIAVBcIANgCIAEAqIg2AJIgEgqIAIgCIgEgOIgRAEIgBAOIAJgBIAEAqIg2AJgAgMAFIAMgCIgLgzg");
	this.shape_15.setTransform(-46.9,27);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguA7IAMgCIgKhlIgMACIgEgtIBngQIAGA7IgkAGIgCgPIgTAEIACAdIAlgGIAFArIglAFIABAeIAVgDIgBgPIAkgFIAFA7IhnAQg");
	this.shape_16.setTransform(49.6,118.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcA7IAFgBIgXhjIgMABIgEgsIA5gJIAEAtIgIACIAUBjIADhoIgJACIgEgtIA6gJIAFAtIgNACIgDBnIAGgBIAEAtIhRANg");
	this.shape_17.setTransform(36.1,120.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXA4IAMgCIgKhlIgMABIgDgtIA3gJIAFAtIgLACIAKBmIALgCIADAtIg3AJg");
	this.shape_18.setTransform(26.2,121.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcA7IAGgBIgXhjIgNACIgFgtIA7gJIADAtIgIABIAVBjIAChmIgJABIgDgtIA5gJIAFAtIgNACIgDBnIAGAAIAEAtIhRAMg");
	this.shape_19.setTransform(14.9,123.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AguA7IALgCIgJhlIgMACIgFgtIBogQIAGA7IgkAFIgBgNIgVACIADAeIAmgGIADArIgkAFIABAeIAWgEIgCgNIAkgGIAFA7IhnAQg");
	this.shape_20.setTransform(2.9,125.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag0A5IALgCIgKhlIgLACIgFgtIBMgMIAeAXIAFAwIgTAaIAXAQIACAdIANgBIAEAsIgwAHIgHhJIgTADIAHBKIgwAHgAgOgzIACAdIAUgDIgDgeg");
	this.shape_21.setTransform(-9.7,127.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgsA5IALgCIgKhlIgMACIgEgtIBMgMIAeAXIAEAvIgTAaIAYARIAEAvIgUAfIhRAMgAAAAVIABAdIAVgEIgCgdgAgHgzIADAdIATgEIgCgdg");
	this.shape_22.setTransform(-22.8,129.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgnBPIgNiKIAUggIAugIIAZAZIAOCJIgUAdIguAIgAgOgwIAJBlIAUgEIgKhlg");
	this.shape_23.setTransform(-34.5,131.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgmBPIgEgjIAkgGIACAPIATgEIgCgdIgaAFIghgZIgGg8IAVgfIAugHIAZAYIADAfIgkAGIgCgPIgTADIACAeIAggFIAbAZIAGA+IgUAdIguAHg");
	this.shape_24.setTransform(-45.7,132.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhACAIgVjgIAig1IBLgLIApAnIAVDfIggAvIhMAMgAgYhPIAQCkIAhgFIgQilg");
	this.shape_25.setTransform(-17.9,94.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhLBhIATgDIgQilIgTADIgHhIIBNgMIAsB1IgMh6IBMgMIAHBJIgSADIAXDtIg/AJIgmhnIAIBsIhLAMg");
	this.shape_26.setTransform(-38.7,97.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F2F2F2").s().p("AgaguIAqgHIACAOIgeAFIADAeIAegGIABANIgeAEIADAgIAegGIACAOIgqAHg");
	this.shape_27.setTransform(35.4,-15.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F2F2F2").s().p("AgjgvIAagFQAUgDANARQAKAMACATQACAVgJAOQgJARgUADIgZAFgAgIgmIgOACIAIBJIAOgCQAKgCAIgKQAIgLgCgRQgCgPgHgJQgIgJgKAAIgFAAg");
	this.shape_28.setTransform(28,-13.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F2F2F2").s().p("AgOgzIAKgCIAoBfIgNACIgMgcIgbAEIgGAgIgMACgAgOAGIATgDIgMgkg");
	this.shape_29.setTransform(17.2,-12);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F2F2F2").s().p("AgfgvIAagEQAMgDAIAIQAIAHACAPQACASgJAIQgGAGgHACIAaAiIgOACIgegrIAFAwIgMACgAgFgmIgNACIAFAlIAIgBQAVgDgDgTQgBgHgEgFQgEgEgFAAIgEAAg");
	this.shape_30.setTransform(9.5,-10.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F2F2F2").s().p("AgLAwQgJgJgCgQIgHhDIAMgCIAHBDQABAMAHAFQACADAFgBQAGgBADgEQAGgHgCgMIgHhDIAMgCIAHBDQACAQgHAMQgIAKgKACIgEAAQgHAAgHgGg");
	this.shape_31.setTransform(2,-10);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2F2F2").s().p("AgEgiIgPADIgCgOIApgHIACAOIgQACIAKBXIgMACg");
	this.shape_32.setTransform(-4.4,-9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F2F2F2").s().p("AgagvIAXgEQAbgFADAfQADAdgcAFIgKACIAEAoIgMACgAgBglIgMABIAEAjIAJgCQAQgDgBgRQgCgPgMAAIgCABg");
	this.shape_33.setTransform(-9.6,-7.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F2F2F2").s().p("AgLAwQgJgIgCgRIgHhDIAMgCIAHBDQACAVANgCQAPgDgCgVIgHhDIAMgCIAHBDQACARgHALQgIAKgKACIgEAAQgHAAgHgGg");
	this.shape_34.setTransform(-16.6,-7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F2F2F2").s().p("AgfgvIAZgFQANgCAIAHQAJAJABAOQACASgJAIQgGAHgHAAIAbAjIgPACIgegrIAAAAIAFAwIgMACgAgFgmIgMACIAEAlIAIgBQAUgBgCgVQgBgHgEgFQgFgEgEAAIgEAAg");
	this.shape_35.setTransform(-23.4,-5.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F2F2F2").s().p("AgkgsIANgCIAtBFIABAAIgIhMIALgCIALBkIgMACIgvhGIAIBNIgMACg");
	this.shape_36.setTransform(-34.6,-3.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F2F2F2").s().p("AgZAqQgNgOgDgVQgCgUAKgRQALgSASgDQAQgDAOANQANAOADAWQACATgKASQgLASgSADIgFAAQgNAAgMgLgAgCgmQgPADgHAPQgGAMABANQACAOAIAKQAKAMANgCQAOgCAHgPQAHgNgCgMQgBgPgJgKQgJgKgLAAIgCAAg");
	this.shape_37.setTransform(-43.6,-2.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F2F2F2").s().p("AgXApQgOgNgCgWQgCgUAKgSQALgRARgDQAMgCAMAIQAIAGAGAKIgOADQgMgNgKACQgNACgIANQgHANACAOQABAQALALQAKAKAKgCQANgDAHgOIAPgDQgJAdgZAEIgGABQgMAAgLgMg");
	this.shape_38.setTransform(-52.7,-0.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F2F2F2").s().p("AgMAyQgKgIgCgRIANgCQACATAMgCQAGgBADgFQADgGgBgIQAAgIgFgDQgDgCgGgCQgOgFgEgCQgGgGgCgNQgBgLAFgJQAGgLALgCQAIgCAIAHQAIAHABAOIgMACQgCgPgKABQgFABgDAGQgCAFAAAFQABAKAMADQAMADAEAEQAKAFACAQQABAOgGAKQgGALgMACIgDAAQgHAAgGgFg");
	this.shape_39.setTransform(-13.7,-47.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F2F2F2").s().p("AgaArQgOgOgCgWQgDgVALgSQALgSATgEQAQgDAPAPQAOAOADAXQACAUgLASQgLATgTADIgFAAQgOAAgMgMgAgDgnQgOACgIAQQgGANABANQACAPAIAKQALANANgDQAPgCAIgQQAGgNgCgMQgBgQgKgLQgIgKgMAAIgDABg");
	this.shape_40.setTransform(-21.8,-45.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F2F2F2").s().p("AgZgyIANgDIAJBbIAcgGIABAPIgoAGg");
	this.shape_41.setTransform(-29.1,-44.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F2F2F2").s().p("AgbgwIAsgHIABAOIgfAFIADAgIAfgGIACAMIgfAGIADAgIAfgFIACAOIgsAHg");
	this.shape_42.setTransform(-38.9,-43.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F2F2F2").s().p("AglgxIAbgFQAVgEAOASQAKAOACATQADAWgKAPQgLARgTAEIgaAEgAgIgnIgPACIAIBMIAPgDQAKgCAIgKQAJgLgCgSQgCgPgIgKQgIgKgKAAIgFABg");
	this.shape_43.setTransform(-46.6,-41.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F2F2F2").s().p("AgXBbQgSgOgDgeIAXgEQABALAFAJQAIAOAMgCQALgCAGgKQAHgKgCgPQgCgPgJgGQgEgDgMgEIgWgIQgGgCgGgEQgMgLgDgYQgBgUAIgRQALgUAUgDQASgDAOAMQAOANACAZIgWADQgCgOgIgHQgFgFgIACQgJACgFAKQgFAIABAKQABAMAJAGQAEADAJACQAYAIAHAFQATALADAeQACAZgLATQgMATgVAEIgGAAQgNAAgMgKg");
	this.shape_44.setTransform(50.7,-39.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F2F2F2").s().p("AgyhZIBRgNIADAaIg7AJIAGA6IA7gKIADAYIg7AKIAGA7IA7gKIACAaIhRANg");
	this.shape_45.setTransform(39.4,-37.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F2F2F2").s().p("AgIhBIgeAFIgDgaIBQgOIADAaIgeAFIASCmIgXAEg");
	this.shape_46.setTransform(28.1,-36.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F2F2F2").s().p("AhGhVIAZgEIBYCFIABAAIgQiSIAXgEIAUDBIgXADIhaiHIgBAAIAQCUIgXAEg");
	this.shape_47.setTransform(16.4,-34.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F2F2F2").s().p("AgyhZIBRgNIADAaIg7AKIAGA5IA7gKIADAYIg7AKIAGA7IA7gKIACAaIhRANg");
	this.shape_48.setTransform(2.7,-31.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F2F2F2").s().p("AgUheIAVgDIAUDAIgVADg");
	this.shape_49.setTransform(-6.1,-30.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F2F2F2").s().p("AgtBPQgagagFgpQgEgpAVggQAUghAhgFQAYgFAXAQQAOAKANAUIgbAFQgWgZgWAFQgYAEgPAYQgOAYADAdQADAfAUAUQATATAVgEQAYgDAPgdIAcgFQgJAcgTARQgRAPgUADIgKABQgYAAgXgWg");
	this.shape_50.setTransform(-17.3,-28.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F2F2F2").s().p("AgdhiIAUgEIBNC3IgYADIgWg2Ig2AJIgMA9IgXADgAgbAMIAmgGIgZhFIgBAAg");
	this.shape_51.setTransform(-31.7,-25.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F2F2F2").s().p("AgzhbIAtgIQAZgEAQAOQAPANACAbQADAbgMASQgMAQgbAFIgUAEIAIBMIgXAEgAgEhJIgWAEIAHBCIAUgEQASgDAHgMQAFgKgBgNQgCgNgHgIQgHgHgNAAIgFAAg");
	this.shape_52.setTransform(-44.5,-23.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F2F2F2").s().p("AgVlSIBVgNIgqKxIhWAOgABMD0IgZj0IAthdIBngRIA9BKIAZDvIgpBjIhrASgACKA4IALBmIAxgIIgLhmgAkCAlIgaj0IAthfIBngQIA+BLIAZDxIgpBhIhsASgAjEiVIAKBnIAygIIgLhng");
	this.shape_53.setTransform(25.4,-106.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F2F2F2").s().p("AhOENIgznoIAqhsIBqgRIA8BZIAzHkIgpBjIhqARgAgqiuIAlFmIAvgJIglllg");
	this.shape_54.setTransform(-15,-99.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F2F2F2").s().p("AhPEBIgRijIAphUIg5hFIgRioIA0hnIBVgOIBHBTIASCnIgoBXIA5BCIARCkIgqBoIhsASgAgQBRIALBkIAwgIIgKhkgAgriwIALBmIAwgIIgKhmg");
	this.shape_55.setTransform(-40,-95.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.8,-141.7,112.6,284.5);


// stage content:
(lib._120x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		if(!this.alreadyExecuted){
		this.alreadyExecuted=true;
		this.loopNum=1;
		} else {
		this.loopNum++;
		if(this.loopNum==2){
		this.stop();
		}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer 9
	this.instance = new lib.min652("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(60,-94.8,1,1,0,0,0,-0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(77).to({_off:false},0).to({y:256.7},2).to({startPosition:0},1).wait(19).to({startPosition:0},0).wait(1));

	// Layer 8
	this.instance_1 = new lib.webpage("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.1,670.4,1.19,1.19,0,0,0,39.6,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52).to({_off:false},0).to({y:530.9},2).to({startPosition:0},1).wait(14).to({startPosition:0},0).wait(31));

	// Layer 7
	this.instance_2 = new lib.AAA("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(215.8,495.5,1,1,0,0,0,39.5,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52).to({_off:false},0).to({x:60.8},2).to({startPosition:0},1).wait(14).to({startPosition:0},0).wait(31));

	// Layer 6
	this.instance_3 = new lib.INFORMATE("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-90.9,440.7,0.88,0.88,0,0,0,39.6,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(52).to({_off:false},0).to({x:64.1},2).to({startPosition:0},1).wait(14).to({startPosition:0},0).wait(31));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_2 = new cjs.Graphics().p("AiQl+IEhhOIAANLIkhBOg");
	var mask_graphics_3 = new cjs.Graphics().p("Al8lWIL5ieIAANLIr5Ceg");
	var mask_graphics_4 = new cjs.Graphics().p("ApokuITRjtIAANKIzRDtg");
	var mask_graphics_5 = new cjs.Graphics().p("AtUkGIapk9IAANKI6pE9g");
	var mask_graphics_6 = new cjs.Graphics().p("AtUlnIapmxIAASAI6pGxg");
	var mask_graphics_7 = new cjs.Graphics().p("AtUnJIapolIAAW3I6pImg");
	var mask_graphics_8 = new cjs.Graphics().p("AtUoqIapqaIAAbvI6pKag");
	var mask_graphics_9 = new cjs.Graphics().p("AtUqKIapsPMAAAAglI6pMOg");
	var mask_graphics_10 = new cjs.Graphics().p("AtUrsIapuDMAAAAlcI6pODg");
	var mask_graphics_11 = new cjs.Graphics().p("AtUtNIapv4MAAAAqTI6pP4g");
	var mask_graphics_12 = new cjs.Graphics().p("AtUuuIapxsMAAAAvJI6pRsg");
	var mask_graphics_13 = new cjs.Graphics().p("AtUwPIapzhMAAAA0AI6pThg");
	var mask_graphics_14 = new cjs.Graphics().p("AtUxwIap1VMAAAA42I6pVVg");
	var mask_graphics_15 = new cjs.Graphics().p("AtUxwIap1VMAAAA42I6pVVg");
	var mask_graphics_49 = new cjs.Graphics().p("AtUxwIap1VMAAAA42I6pVVg");
	var mask_graphics_54 = new cjs.Graphics().p("AtUxwIap1VMAAAA42I6pVVg");
	var mask_graphics_69 = new cjs.Graphics().p("AtUxwIap1VMAAAA42I6pVVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_2,x:-14.6,y:213.7}).wait(1).to({graphics:mask_graphics_3,x:9,y:209.7}).wait(1).to({graphics:mask_graphics_4,x:32.6,y:205.7}).wait(1).to({graphics:mask_graphics_5,x:56.2,y:201.7}).wait(1).to({graphics:mask_graphics_6,x:56.2,y:213.4}).wait(1).to({graphics:mask_graphics_7,x:56.2,y:225.1}).wait(1).to({graphics:mask_graphics_8,x:56.2,y:236.8}).wait(1).to({graphics:mask_graphics_9,x:56.2,y:248.5}).wait(1).to({graphics:mask_graphics_10,x:56.2,y:260.2}).wait(1).to({graphics:mask_graphics_11,x:56.2,y:271.9}).wait(1).to({graphics:mask_graphics_12,x:56.2,y:283.6}).wait(1).to({graphics:mask_graphics_13,x:56.2,y:295.3}).wait(1).to({graphics:mask_graphics_14,x:56.2,y:307}).wait(1).to({graphics:mask_graphics_15,x:56.2,y:307}).wait(34).to({graphics:mask_graphics_49,x:56.2,y:307}).wait(5).to({graphics:mask_graphics_54,x:56.2,y:307}).wait(15).to({graphics:mask_graphics_69,x:56.2,y:307}).wait(31));

	// Layer 2
	this.instance_4 = new lib._80("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(60.1,300.1,0.95,0.95,0,0,0,-0.5,0.6);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).wait(13).to({startPosition:0},0).to({alpha:0},10).to({_off:true},6).wait(69));

	// Layer 4
	this.instance_5 = new lib._80rojo("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(60,300.1,0.95,0.95,0,0,0,-0.5,0.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({alpha:1},10).to({startPosition:0},14).wait(10).to({startPosition:0},0).to({y:249.3},5).to({startPosition:0},1).to({startPosition:0},14).to({regX:-0.4,x:60.1},6).to({regX:-0.5,x:60,alpha:0},4).to({startPosition:0},20).wait(1));

	// Layer 1
	this.instance_6 = new lib.fondo120X600();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60,300,120,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;