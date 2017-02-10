(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"./FONDO160X600.jpg", id:"FONDO160X600"},
		{src:"./SRGORE.png", id:"SRGORE"}
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



(lib.FONDO160X600 = function() {
	this.initialize(img.FONDO160X600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.SRGORE = function() {
	this.initialize(img.SRGORE);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,314);


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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SRGORE();
	this.instance.parent = this;
	this.instance.setTransform(-140,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-176,250,314);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SRGORE();
	this.instance.parent = this;
	this.instance.setTransform(-140,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-176,250,314);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6EFF3").s().p("AAAgDQAAgBACAEIgCAEQgCgGACgBg");
	this.shape.setTransform(4.2,74.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6EFF3").s().p("AgGAAIANAAIgFABg");
	this.shape_1.setTransform(49.6,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6EFF3").s().p("AAAAAIgDgEIAEAEIADAFIgEgFg");
	this.shape_2.setTransform(109.9,26.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6EFF3").s().p("AAEAKIgKgTQAGALAAgCQAAgCAHAMQgHgKAEAKg");
	this.shape_3.setTransform(115.4,34);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C6EFF3").s().p("ABxLXIAJgBIgSgBIgOAAIgBgBIABgBQgGgCgHAAIgLAAIADgBIg7gKQgtgIgUgHQAJACgHgEIgSgCIg/gVIALADQgSgFgMgIQgOgIgPgGIARALQgagOAEAGQgGgDgCgDIgOgJIAHADQABAAABABQABAAAAAAQABAAgBgBQAAAAgBgBIgcgTIgPgHQAAADgLgGQgHgEAGAGQgagOgggXIgzgkQgEgGgKgJIgVgSQgYgWAEgBQgVgVgXgQQADAEAJAGQgEgBgMgMIgSgTIAVATQANALAHAEIgagYIgUgTIgBgGQgHgGgEgHQgDgGgIgGIABADQgMgQgJgIQgOgQgGgIIABAAIgLgOQgHgKgCgGIAMAQQAAgBgEgJIgGgNQgHgKgCABQgCAAgCgDQAAgBAAgBQAAAAAAAAQAAgBAAAAQAAAAABABIAFAFQgegugLgOIABAAIgRgeQgKgQgDgIIADAEQgDgJgLgVQgJgSADgDIACAEQAEAJgBgJQgFgNgGgIQgFgHgEgMIACADIgWg8QgCgPgKghQgJgggBgWQAAAGgCgGIgDgGQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBgGgCgDIgCgGQAAgGgEgMIgDgQIgDgSQACALABAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQgCgMgFgSQgEgPgBgQIABgQQgDgCgBgOIgBgOQADgMABABIgBgUQABgMgBgDIgCAMIACguQAAgYAEgQIAGABQACgIACgSQABgOAFgJIgCADIAAgJIgGAfIACgZIgGAnIAAgOIgDAFQACgNAEgMQAEgNACgKQABgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQACABACgFQACgLAIgQQAIgQABgGIAAACQgCAGABgBIAGgPIADgKIgFAKQADgLAKgQQAEgIAAgDQAAgDgFAHIAFgHQABgBABgBQABAAAAgBQABAAAAABQAAAAAAABQAJgPABgFQAEgIAIgJIgBADIALgNQgHAJAEgBQACgBgKALQADAAAHgJQAJgMAEgCQAEgHgCAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAABgBIAKgIIgHADIAMgLIgGAHIATgPQAMgIAOgMIgHAHQgCAEAJgGQALgIABAAQABACAFgDQAHgFAFgFQAJgHANgGQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIgEABIAcgOQAMgFAOgFIgIACQgCABAIgFQgCACALgDIAUgGIACgCQAPgDgVAHIgGACQgIAEAEABQAEABANgEQAMgFACgDQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAMgDAMgGQALgFAOgDIARgBIAbgCQAFgCgMABQgLABAFgCQAOABAjgGQAigGAWACIgFADIAeAAIgOgCQAIgBAKABQALABgFABQAOgBAKABIAWADIgKgBQACABgIAAQARACAWABQgEACAPACQAOAAAOACIAfAFIAAABQATADAfAJIAwAPIACABIgDgBQgHgFARAGIAaAIIAIAFQAAgBAHACIAKAEQAFACAAACQABACAKAEQAJAEgBgDQAEAEAOAIIgFgDIACADIACACIAGADQADAAAFADIgKgDIALAGQgGgDAAAEQAPAHgCgEQgEgGABgBIAQAJIAOAIQAUALAHAFIgEAAQAKAGAGACIAMAJQgKgGgCACIAVAOQAKAHAEABIAeAbIARARIAYAYQANANABgBIAPATQAKAOAEACQAFAHgCgCQgGgFgCgBQAEAHALAKQAHAKAAADQAGAIgCgEQgBgBAAgBQAAgBAAgBQAAAAAAAAQAAAAABAAQgBACALARQANAUADAHQABAAAAABQABAAAAAAQAAAAAAgBQAAAAAAgBQgBgCAFAGIADAJIAFABIACATQAHAKACgBQABgBAKAQIgCgCQABAEAIAOQAKAVACAIQgBgFgBAAIgCAAIAFALIABABQABAGACAGQADAFACAHQgDgGgBABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAABIAKATIgGgHIAMAgQAHATgCAHIgDgJQgBABABAEIABAIIgJgaIAFAJQAAABABABQAAABAAAAQABABAAAAQAAAAAAgBIgOgmQACAFAFAEQgCgIgDgEIgEgJQgBgHACACIgPgmQAIAPgCgJQgEgJgLgTIgSgcQgPgWgKgVQgRgdgGgGIADAHQAAABAAAAQABABgBgBQAAAAgBgBQgBgBgCgCQABAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIgDgGQgIgHgFgJQgIgKgDgDQACACgJgOQABAAgDgGQgBgDALAKQgOgNgKgMQgLgOgMgFIAEAFIgRgTQgMgMgGgIIARAOQgFgHgKgIIgTgNIAHAEQABABABAAQABABAAAAQABAAAAAAQAAgBAAAAIgYgSIABAAQgKgKgEAAQgEAAgHgHIgCABIgJgJQgDgEAJAFIgWgMIAGAGQADACAAACIgggUIAIAEQgOgMgOgHIgfgPIgggPQgPgGgRgKQACACgDgBIgIgBQgngOgLgGIAEABIgwgLIgogIIABgBIACgBQgJgBgQgFQgQgDgDACIAHABQglgGhPACQgEgCALAAQALAAgEgCQgWgBgSABIgqADIAGgBQgPAAADACQADACgMABQACgCgKAAIgHADQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIACgCQgFADgUADQgSAEgGADQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQgLACgSAHIgSADIgIACQgMAEAAABQAAACgHADIARgEIgeALIAMgGQgIACgkASIAIgCIgRAJQgBgBgLAFQgHADAEgEQgWAKgSAQIgiAeIACgDIAAgBQgMAKgQAWQAEgGgBgBIgMAPIgLARQAEgIgHAIQACAAgFAJQABgGgCABIgHAHQgJANABgGIgIASQgGASAFgHIADgGQABAAgHAOIADgHQgdBAgHAqIABgJQAAgFgCAGQgGAagCAZIgBA0QgDABACgXQACgXgCgBQgGBBAIBFQgDAJAEAYQAFAdAAAOQABgCAHAdQgBgBAAAAQAAAAAAAAQgBABAAABQAAABAAABQAAACAAABQAAABAAAAQAAABAAAAQAAAAAAgBIAIAgQAEAVgDgBQACACAEAPQAFATACACQACAKAGASIAKAeQgBgFAFANIAIATIgDgFQAAAEAGAMIAJAUQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQgBAAACAFQABAAAJAQQAJATACAHIgGgIIArBQQAaAuAZAfIgJgHQAKASAIAGQALAIAHAJQBRBvBaBBQAEACgDgDIADADIAIAFIgBgCIAaAUIA+AmIAWAPIAsAVIAWALQALAFARAEQAGAEgIgCQgBAAgBAAQAAAAAAAAQAAAAACABQABAAACABIAmALQARAEAvARIAlALQAPADAUADQAAABAFABIALADQABgBgIgCIBVAGQgIAAAKACQAMABABABQAAAAABAAQABAAAAgBQABAAAAAAQAAAAAAgBQAAgBAMAAIBMAAQAWgDAAgDIBWgRIABABQAFgDAPgDQAQgDADgCIgCACQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAABAAIAQgGQgHADAAACQAAACAKgDQABgBACgBQABAAAAgBQABAAgBAAQAAAAgBAAQgEAAACgCIAGACQAIgDAAgCQABgDgKADQAtgQA1ggIgCADIAvgfIABgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAHgIADABQACAAAIgKIgJAMIAQgRIAPgRQACAAAMgKQAPgQAFgIQgBgBgHAHIAHgKIAIgGIAHgRIADABQAEgGACgIIAFgNQAQgbANgaQgCgDAIgWQAHgXgBgEQASgwADhfIABAEQACgMgDgLQgCgQAAgJIABAGQACgVgDgjQgDgfgFgYQAAACAAAAQABABAAAAQAAAAAAAAQABAAAAgBIAAgIQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBABQgBACAAgJQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIAAgEIgFgQQgHhHgRg5QAAgCgBAAQAAgBAAgBQAAAAAAAAQABgBAAABIACADQgFgVgLgbIgRgtIACgEQgCgGgFgFQgDgEgDgLIAIAQQgFgQgEgGQgGgIgFgMIAGAGQgEgOgFgGIgJgJQgIgMgDgNQgDgOgMgTQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgIgPgJgMIgRgaQgDgIAFAGQADAGgCgIIALATQgEgJAGAJQAJAMABgCQgJgPgZgeQABAAAGAIQAFAGgBgFIgHgHIAGAGQAAgCgEgFIgIgKQgCAAAAAFIgBgCIgXgbQgPgSgHgGQABAAAAABQAAAAAAAAQABAAAAAAQAAgBAAAAIgBgBIgNgNIgQgNIAAgFQAAgCgLgKIgDABQgCABgJgIQAOALgGgIQgIgHgBgCQgCgEgFgGQgEgCgHgHQgFgFgDACQgDgGgIgJQACADgLgHQgMgIgBABQgBgCAJAEQAHADgGgIIgSgKQgMgGgCABIgSgQIAEACIgkgVQgVgNgJgBQAFgCgWgLIgMgGQgDgDAGABQgSgHgLgCQACgCgNgFQgRgHgEgDQgDAAgMgDIgTgGQAIACgBgCIgLgDIgIgFQgJgCADADQADACgFAAQgIgDACgBIACgCIgWgBQgGgCgCgCIgGgBIgHgEIgWgBQgUgGgBgDIAEgGIANABQAAgCgPgDQgEgBAPAAQAOAAALACQAVAFAAADQABADALADIAFAAIAdAGIAAACQAEACAFAAQgBABAPAFIAaAJIgEgEQAZAIAUAMIASALIATAKIAVAHIACAFIAOAGQAIADAKAHQA8AsAeAZQAwApAgAnIgFgHQARAYAkAoQAfAlANAbIgDgDIAGALQgEgEAFAKQADABAKARIAQAcIgHgMIABAFIADAIQAQASAbA+IADASIAEAZIAJAMQACAMAHAOIgIgYIABABIgCgEIgDgIQAAgCgBgBQAAgBAAgBQAAAAABAAQAAAAAAAAQADAEABgBQAKAfgBABIAEAQIAEALIgBgBIAAACIAJAgIAKAcQgEgJAAAGIgBAIIgCgLIgHgeIgBAEQABAJAGAUQAGAUACAQQgBgBAAgBQAAgBgBgBQAAAAAAAAQgBAAAAAAQADASAEADQgBACABAOQABAOACAIIAEAKIACAQIgDgHQABALACAIIACAKIgBAAQAAAAAAAAQAAAAgBABQAAAAAAABQAAABAAABQACARAGAWIgCgDQAHAzgEAFQADgBAAAWIgDAnQAAgGgBgCQABAYgFAeIgKA1IgGAFQgCAIABAPQAAAMgDALIABgEIAAgEQgGAUgIAWIgQAjIgCgCIgPAgIgQAVIgiAuIgOAPQgTAQgLAHIABAFQgbAYgMACIADgCQgBgCgIAGIgPAKIgIAHQgDADAFgCQgxAYgVAIIgiAMQgRAFgKABQgpANgTAFQggAIghADIAAgBQgPABgQgBQgSgBAAgCIgvADIgRABQgQAAgTgCgAK5hLIAEARQgCgPABACIgBgEIgBgBIgBABg");
	this.shape_4.setTransform(75.2,73);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C6EFF3").s().p("AgBgDQACADAAAAIACAEQgGgJACACg");
	this.shape_5.setTransform(129.5,32.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6EFF3").s().p("AACACQgIgCAGACQgKgEAGABIAGABQAIADgDAAIgFgBg");
	this.shape_6.setTransform(51.9,134.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6EFF3").s().p("AgCgBIACAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAIAAACIgFgDg");
	this.shape_7.setTransform(107.9,24.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C6EFF3").s().p("AADARIgBgIQAEADgEgOIgCgKIgFgKQADgIAFAVIgCgCIgBACQAFALAAAGQABAKgBAHQgCgCAAgGg");
	this.shape_8.setTransform(124.8,61.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C6EFF3").s().p("AAAAFIgBgKIACAFQABADgBACIgBABIAAgBg");
	this.shape_9.setTransform(125.2,65.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,0.1,150,145.9);


(lib._65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AjpElIgBiNIC2gBIABA4IBqgBIgBh0IkfACIgDncIHVgEIAADuIi1ABIgBg5IhqABIABB2ICngCIB6B5IACD4IhwBrIjwACg");
	this.shape.setTransform(84.6,71.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AjoEkIgFoyIB0hzIDxgCIBxBvIABB9Ii1ACIAAg5IhsABIABB0ICrgCIB2BeIACEWIhuBpIjxACgAg0BaIAAB1IBsgBIgBh1g");
	this.shape_1.setTransform(28.3,71.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,10.9,117.5,134);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FC0D1B").ss(0.3).p("AAmAZQgLAQgTAEQgRAEgQgLQgQgLgDgTQgEgRALgPQALgQASgEQARgEAQALQAQALAEATQAEAQgLAQg");
	this.shape_10.setTransform(8,8.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZAmQgQgLgDgTQgEgRALgPQALgQASgEQARgEAQALQAQALAEATQAEAQgLAQQgLAQgTAEIgIABQgNAAgMgIg");
	this.shape_11.setTransform(8,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,2.4,11.4,11.4);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-3.7,0,3.8,0).s().p("AgCAYQgdgTgFgoIAWAAQACAYAOANQAPAOAUAAIAAAUQgWAAgRgMg");
	this.shape.setTransform(3.8,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.6,7.4);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AgLgpIAKgBIAjBPIgMABIgLgYIgaADIgGAZIgMABgAgMAFIASgCIgKgdIgBAAg");
	this.shape.setTransform(140.3,67.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AgggnIAZgCQATgCALAOQAJAMABAOQACASgJALQgKANgQACIgZACgAgHgeIgNABIAFA8IAOgCQAJgBAHgHQAJgJgCgOQgBgLgHgIQgHgKgKAAIgEABg");
	this.shape_1.setTransform(132.7,68.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AgIgoIAJgBIAIBSIgJABg");
	this.shape_2.setTransform(127.4,68.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AgggkIAMgBIAaA7IAQg/IALgBIgWBVIgHAAg");
	this.shape_3.setTransform(121.8,68.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AgLgqIAKAAIAjBPIgNABIgKgYIgaADIgGAZIgMABgAgMAFIASgCIgLgdg");
	this.shape_4.setTransform(112.9,70);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgVgoIALgBIAHBHIAYgCIABALIgkADg");
	this.shape_5.setTransform(106.7,70.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AgXgnIAogDIABALIgdADIADAYIAcgCIAAAJIgbADIACAZIAcgDIABAMIgnADg");
	this.shape_6.setTransform(97.9,71.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AgEgcIgOABIgBgLIAmgEIABALIgOACIAGBHIgLABg");
	this.shape_7.setTransform(92.4,71.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AgcgnIAYgCQAMgCAHAHQAIAGABANQACAOgJAGQgGAFgGABIAYAdIgPACIgaglIAAAAIADAnIgLABgAgDgeIgMABIADAeIAHgBQAFAAAFgBQAIgEAAgLQgCgOgMAAIgCAAg");
	this.shape_8.setTransform(87.3,72.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AgLgpIAKgBIAiBPIgMABIgKgYIgZADIgHAZIgLABgAgMAFIASgCIgKgdg");
	this.shape_9.setTransform(80.6,72.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AgggkIALgBIAaA7IARg/IALgBIgWBVIgHAAg");
	this.shape_10.setTransform(73.5,73.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("AgVgoIALgBIAGBGIAZgCIABALIgkAEg");
	this.shape_11.setTransform(69.3,73.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AgLgpIAKgBIAiBPIgMABIgKgYIgZADIgHAZIgLABgAgMAFIASgCIgLgdg");
	this.shape_12.setTransform(63.2,74.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AgMAnQgIgHgBgNIALgBQACAPAKgBQAFgBADgEQAEgEgBgGQgBgGgEgEIgIgDQgKgEgGgCQgFgEgBgLQgBgJAFgHQAFgIAKgBQAIgBAGAGQAHAGABAKIgLABQgCgMgIABQgFABgCAEQgDADABAEQAAAIALADIAOAGQAJAEABAOQABALgGAHQgGAIgKABIgDAAQgGAAgGgEg");
	this.shape_13.setTransform(56.4,74.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AgXgnIAngEIABAMIgcADIACAYIAdgDIABAKIgdADIADAZIAcgDIABALIgnAFg");
	this.shape_14.setTransform(47.7,75.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2F2F2").s().p("AgggoIAYgCQATgCAMAPQAIAKACAQQACARgJAMQgKANgRABIgYADgAgHgeIgNABIAFA7IAOgBQAJgBAHgHQAJgJgCgOQgBgMgHgIQgHgIgKAAIgEAAg");
	this.shape_15.setTransform(40.7,76.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2F2F2").s().p("AgXgmIAngFIABAMIgcACIADAaIAcgEIABAKIgcADIACAZIAcgCIABALIgnADg");
	this.shape_16.setTransform(34.1,76.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2F2F2").s().p("AgMAmQgJgIgBgNIgFg3IALgBIAFA2QABAKAGAFQAEACADAAQAPgCgCgRIgFg3IALgBIAFA3QACANgHAJQgHAIgLABIgBABQgHAAgIgGg");
	this.shape_17.setTransform(27.6,77.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2F2F2").s().p("AgYgnIAWgCQAZgCACAZQADAXgcADIgIABIACAhIgLABgAgBgeIgLABIADAcIAJgBQAPgBgBgOQgCgNgMAAIgBAAg");
	this.shape_18.setTransform(21.2,78);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F2F2F2").s().p("Aggg2IA3gFIABAQIgnADIADAiIAngDIABANIgmAEIADAjIAmgEIACAQIg3AFg");
	this.shape_19.setTransform(69.7,8.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2F2F2").s().p("Ageg4IAPgBIAJBiIAjgDIABAPIgxAFg");
	this.shape_20.setTransform(62.9,9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F2F2F2").s().p("Agig3IAegDQAQgBALAJQAKAIACAQQABAQgIAKQgJAJgSABIgNACIAEAtIgQACgAgCgqIgPABIADAnIAOgBQAUgCgBgTQgBgSgSAAIgCAAg");
	this.shape_21.setTransform(54.8,9.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F2F2F2").s().p("Ag8gzIAZgCIAlBTIAYhZIAYgCIALBxIgQACIgJhgIAAAAIgbBjIgJABIgqhdIgBAAIAJBgIgPABg");
	this.shape_22.setTransform(43.8,10.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F2F2F2").s().p("AgLg3IANgCIAKByIgNABg");
	this.shape_23.setTransform(34.9,11.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F2F2F2").s().p("AgQA1QgMgKgCgRIAQgBQAAAFADAGQAFAJAIgBQAIAAAEgHQAFgFgBgJQgBgIgGgFQgDgCgIgCQgRgGgFgDQgIgHgBgPQgCgLAHgKQAHgLAOgCQALAAAKAHQAJAJABAOIgPACQgBgJgFgFQgFgCgDAAQgHABgDAFQgEAFABAGQAAAHAGAEIAJAEQAQAFAEADQAMAGACATQABAPgIAKQgIALgOACIgDAAQgJAAgIgHg");
	this.shape_24.setTransform(29.1,11.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F2F2F2").s().p("Agtg1IARgBIA4BSIgHhWIAPgCIAKBxIgPACIg7hTIAJBXIgQACg");
	this.shape_25.setTransform(15.5,13);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F2F2F2").s().p("AgRA0QgMgKgBgTIgHhMIAPgBIAHBMQABANAIAGQAGAEAFgBQAHAAAFgFQAHgHgBgOIgHhMIAPgBIAHBMQACASgKANQgKAKgOACIgDAAQgJAAgLgIg");
	this.shape_26.setTransform(5.1,13.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F2F2F2").s().p("AgxAyIAMgBIgJhdIgMABIgEgqIA+gFIACApIgKABIAIBeIAVgCIgBgOIAmgDIAFA3IhtAJg");
	this.shape_27.setTransform(119.5,48.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F2F2F2").s().p("AhCA0IAOgBIAFhfIgLABIgDgpIBfgJIADAqIgKABIAVBcIAPgBIADApIg9AGIgDgqIAJgBIgDgOIgVACIgBAPIAJgBIAEApIg9AGgAgMAFIANgBIgKgzg");
	this.shape_28.setTransform(106.5,49.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F2F2F2").s().p("AgxA0IAMAAIgJheIgMABIgEgpIAzgFIAaBEIgGhGIAygEIADApIgLABIAMCHIgpAEIgXg8IADA9IgwAFg");
	this.shape_29.setTransform(92,51.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F2F2F2").s().p("AgYAyIALgBIgJhdIgLABIgEgqIA7gFIAEApIgMABIAJBeIALgBIAEApIg7AGg");
	this.shape_30.setTransform(81.5,52);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F2F2F2").s().p("AhKA2IAMgBIgIhdIgNABIgEgqIAzgEIAkBVIABAAIAUhaIAzgFIAEAqIgNABIAJBdIAMgBIAEApIgyAFIgGg+IgOBAIgTACIgZg8IAFA9IgyAFg");
	this.shape_31.setTransform(68.6,53.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2F2F2").s().p("AgqBHIgLiAIAVgcIAxgFIAaAYIALB+IgVAaIgwAFgAgPgtIAJBdIAVgCIgIhdg");
	this.shape_32.setTransform(53.9,54.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F2F2F2").s().p("AgwAzIAMgBIgJheIgLACIgFgqIBWgIIAZAYIAMB+IgWAbIhUAIgAgHgvIAHBdIAWgCIgIhdg");
	this.shape_33.setTransform(41.4,55.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F2F2F2").s().p("AgwAzIAMgBIgJhdIgMABIgDgqIBPgHIAfAWIAEAsIgVAXIAZAQIADArIgVAcIhVAHgAgBAUIABAaIAWgCIgCgagAgHgvIADAbIAUgCIgCgbg");
	this.shape_34.setTransform(28.9,56.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F2F2F2").s().p("AhCA0IAOgBIAFhfIgKABIgEgpIBegJIAEAqIgKABIAWBcIAOgBIAEApIg9AGIgEgqIAJgBIgEgOIgUACIgBAPIAJgBIAEAqIg9AFgAgMAFIANgBIgKgzg");
	this.shape_35.setTransform(16.3,57.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F2F2F2").s().p("AgqBHIgMiAIAXgdIAwgEIAaAYIALB/IgVAZIgxAFgAgOgtIAIBdIAVgBIgIheg");
	this.shape_36.setTransform(135.8,23.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F2F2F2").s().p("AgxAzIANgBIgJheIgMABIgEgpIBVgHIAaAXIAMB/IgWAaIhUAHgAgHguIAHBcIAWgCIgIhdg");
	this.shape_37.setTransform(123.3,24.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F2F2F2").s().p("AgZAyIAMgBIgJheIgLABIgEgpIA7gGIAEAqIgLABIAIBeIAMgBIADApIg7AGg");
	this.shape_38.setTransform(113,25.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F2F2F2").s().p("AgyA1IANgBIgIheIgNABIgDgpIAxgFIAcBFIgHhHIAygEIAEApIgNABIANCIIgpADIgXg8IADA9IgwAFg");
	this.shape_39.setTransform(101.5,26.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F2F2F2").s().p("AgqBHIgMiAIAXgdIAwgEIAaAYIALB+IgVAbIgxAEgAgPgtIAJBdIAVgCIgIhdg");
	this.shape_40.setTransform(89.3,27.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F2F2F2").s().p("AgqBHIgDggIAmgEIABANIAVgCIgCgaIgcABIgigXIgEg3IAWgcIAwgFIAaAXIACAdIglAEIgBgNIgVACIACAbIAhgDIAcAYIAFA5IgVAaIgwAFg");
	this.shape_41.setTransform(77.5,28.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F2F2F2").s().p("AhBA1IANgCIAFheIgLAAIgDgpIBfgJIADApIgKABIAVBdIAPgCIADAqIg8AGIgEgqIAJgBIgDgOIgWADIAAANIAJAAIAEAqIg9AFgAgLAGIAMgCIgKgzg");
	this.shape_42.setTransform(65.3,30.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F2F2F2").s().p("Ag4AzIAMgBIgIheIgMACIgEgqIBPgHIAgAWIAEAsIgVAXIAYAQIADAbIANgBIADApIgyAFIgHhEIgUACIAGBEIgyAEgAgOgvIACAbIAVgCIgDgbg");
	this.shape_43.setTransform(50.5,31.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F2F2F2").s().p("AgUAzIAMgBIgIhdIgJAAIACAVIgcADIgGg/IBtgJIAFA9IgbADIgCgVIgJABIAJBdIALgBIAEAqIg7AFg");
	this.shape_44.setTransform(36.7,32.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F2F2F2").s().p("AgxAyIAMgCIgJhcIgMABIgEgqIA+gFIACApIgKABIAIBeIAVgCIgBgOIAmgDIAFA3IhtAKg");
	this.shape_45.setTransform(27.1,33.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F2F2F2").s().p("AgpBIIgKhvIgMABIgDgqIA9gFIADApIgLABIAIBdIAegDIgIhdIgLABIgEgpIA9gFIAEApIgMABIAKBuIgWAaIg5AFg");
	this.shape_46.setTransform(12.9,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,2.2,142.5,80.2);


(lib.YHASFUMADOMÁSDE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AgkhAIBFgCIAAAXIgsABIABAhIArgBIAAAUIgqACIABAfIAsgBIABAWIhFADg");
	this.shape.setTransform(64.2,28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("Ag1hAIAegBQAMgBAJACIAOADQAIADAKAGQAFAEAEAGQAEAFADAHQAEAGABAIQACAHAAAIQABAHgCAIIgGARQgEAIgFAGQgGAGgHAEIgKAFIgLADQgIACgNAAIgeABgAgZAqIAFAAIARgBQAGgCAHgEQAFgDAEgEIAGgJIADgLQABgFAAgEQAAgJgFgIQgEgJgGgGIgJgFIgHgDQgIgCgNABIgFAAg");
	this.shape_1.setTransform(52.9,29.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AgLBDQgHgDgGgEQgIgFgEgIQgCgDgBgFIgDgKIAagBIADAJIAEAFQAFAEAFAAQAHgBAFgFQADgCABgDQABgDAAgEQAAgFgCgDQgBgDgEgCQgEgDgNgFQgggHgBgcQAAgIADgHQADgHAEgFQAGgGAHgDQAGgDAJAAQAEgBAHACQAGACAGAEQAGAFAEAHQAEAHABAKIgZABIgCgHQgBgDgDgCQgDgDgEABQgGAAgEADQgDAFAAAGQAAAEACADQABACADACQAEACAKAEIALADQAGADAFAEQAGADAEAHQAEALAAAHQABAFgBAFIgCAIQgEAIgGAGQgGAFgIADQgHADgIAAIgMgBg");
	this.shape_2.setTransform(35.8,29.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AgNgoIARgBIA9CBIgbABIgQgiIgtACIgNAiIgcABgAgQAhIAcgBIgOgmIgBAAgAgZhCIAlgZIAKARIglAYg");
	this.shape_3.setTransform(24.4,27.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AhGg+IAigBIAlBhIAAAAIAfhkIAigBIAFCCIgZABIgDhhIgBAAIgeBjIgTAAIglhgIADBhIgYABg");
	this.shape_4.setTransform(9,30.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgKBEIgNgEIgMgGQgGgDgFgFIgJgKIgGgLIgFgNIgCgOIABgMQABgHADgGQACgHAEgFQADgGAFgFIAKgJIAMgGQAGgDAHgBQAGgCAHAAQAFgBAHACQAHAAAGADQAGACAGAEIALAIIAJAKIAGALQADAGACAHQACAHAAAHQAAAFgBAHIgEANQgCAGgEAGIgIAKQgEAGgGADIgLAHIgNAFIgOABIgMAAgAAAgsQgJAAgJAEQgHADgGAHQgGAHgDAIQgDAJAAAHQAAAJAEAJQADAHAHAHQAGAGAIADQAJAEAHAAQAKgBAIgEQAIgEAGgHQAFgGAEgIQADgJgBgHQAAgJgEgJQgEgIgGgGQgGgGgJgEQgHgCgIAAIAAAAg");
	this.shape_5.setTransform(130.8,9.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("Ag1hAIAegBQAMgBAJACIAOADQAIADAKAGQAFAEAEAGQAEAFADAHQAEAGABAIQACAHAAAIQABAHgCAIIgGARQgEAIgFAGQgGAGgHAEIgKAFIgLADQgIACgNAAIgeABgAgZAqIAFAAIARgBQAGgCAHgEQAFgDAEgEIAGgJIADgLQABgFAAgEQAAgJgFgIQgEgJgGgGIgJgFIgHgDQgIgCgNABIgFAAg");
	this.shape_6.setTransform(116.6,9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AgNhCIARAAIA8CBIgbABIgPgiIgtABIgNAjIgbABgAgQAIIAcgBIgOgmIgBAAg");
	this.shape_7.setTransform(103.4,10.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AhGg+IAigBIAlBhIAAAAIAfhkIAigBIAFCCIgZABIgDhhIgBAAIgeBjIgTAAIglhgIADBhIgYABg");
	this.shape_8.setTransform(88.1,10.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AgJBDIgLgFQgIgDgHgIQgEgFgCgIQgDgIAAgMIgDhSIAYAAIADBSQABAcAVgBQAXgBgBgcIgDhSIAYgBIADBSIgBARQgCAJgDAGIgHAIIgJAGQgFADgGACIgMACIgMgBg");
	this.shape_9.setTransform(73.7,11.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AgghAIBBgCIAAAXIgpACIACAgIAngBIAAAVIgmABIACA2IgZABg");
	this.shape_10.setTransform(63.3,11.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("AgLBDQgHgDgGgEQgIgFgEgIQgCgDgBgFIgDgKIAagBIADAJIAEAFQAFAEAFAAQAHgBAFgFQADgCABgDQABgDAAgEQAAgFgCgDQgBgDgEgCQgEgDgNgFQgggHgBgcQAAgIADgHQADgHAEgFQAGgGAHgDQAGgDAJAAQAEgBAHACQAGACAGAEQAGAFAEAHQAEAHABAKIgZABIgCgHQgBgDgDgCQgDgDgEABQgGAAgEADQgDAFAAAGQAAAEACADQABACADACQAEACAKAEIALADQAGADAFAEQAGADAEAHQAEALAAAHQABAFgBAFIgCAIQgEAIgGAGQgGAFgIADQgHADgIAAIgMgBg");
	this.shape_11.setTransform(48.3,12.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AgMhCIAQAAIA9CBIgbABIgQgiIgtABIgNAjIgcABgAgQAIIAdgBIgPgnIAAAAg");
	this.shape_12.setTransform(36.9,12.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("Agxg/IAZgBIABA2IAtgCIgBg2IAZgBIAECDIgZABIgCg3IgtABIACA3IgZABg");
	this.shape_13.setTransform(23.5,13.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AgIASIgvhQIAbgBIAeA8IAbg+IAbgBIgqBTIACAxIgXABg");
	this.shape_14.setTransform(5.7,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.2,-0.5,194.6,44.4);


(lib.ENTUVIDA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AgWhKIAWgCIBICNIgeADIgTglIgzAEIgNAoIgeACgAgWAJIAhgDIgSgqIgBAAg");
	this.shape.setTransform(105.5,10.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("Ag9hHIAigDQAMgBALABQAIABAIACQAJACAMAHIAKALQAFAFAEAIQAEAHADAIQACAIABAJQABAHgCALQgCAJgEAJQgEAJgFAHQgHAIgIAFQgEADgGACIgMAEQgKADgOABIgiADgAgYAvIAGAAQAMgBAGgCQAHgCAJgFIAIgJQAEgFADgFQACgGABgGQABgGgBgEQgBgLgEgJQgGgKgHgFQgFgEgFgCIgJgDQgJgBgOABIgGAAg");
	this.shape_1.setTransform(89.8,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AgShHIAZgDIAMCTIgZACg");
	this.shape_2.setTransform(79.5,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AhDhBIAdgCIAuBsIABAAIAfhzIAcgCIgtCYIgWABg");
	this.shape_3.setTransform(68.5,13.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AgFBNQgIgCgGgDQgHgDgKgJQgEgFgDgIQgEgKgBgMIgIhdIAcgCIAHBdQADAfAXgCQAagCgCggIgIhcIAbgCIAIBcQABALgBAIQgBAJgFAIIgHAJIgJAIIgMAGIgOACIgHAAIgGAAg");
	this.shape_4.setTransform(48.7,15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgLgtIgcADIgCgaIBRgHIACAaIgcACIAKB5IgZACg");
	this.shape_5.setTransform(37.2,16.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AhBhEIAggCIBDBlIABgBIgJhqIAcgCIAMCTIgfACIhFhlIAAAAIAJBqIgcADg");
	this.shape_6.setTransform(19.3,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AgshGIBOgGIACAaIgzAEIADAkIAwgEIACAYIgwAFIADAjIAzgFIACAZIhOAHg");
	this.shape_7.setTransform(6.1,18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.2,-1.8,174.6,36.8);


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
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E1163A").s().p("AgTAYIABgvIAmABIgUAug");
	this.shape_12.setTransform(12.2,8);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.2,5.5,4,4.9);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F4F4").s().p("AA4AdIABgBIAAAAIAAABIgBAAgAA8AbIgBgBIgBgCIgBACIAAACQgFAAgDABIABgCIgGACQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIgJABQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIAAgCIgCABQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAgBgBIgBAAIgEgBQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAgBgBIABAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBIAAgBQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBIgCgBIABAAIgFgCIgGgCIACgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAgBAAIgCABQgFgKgEgCIgBABIAAgBIAAAAQAAAAAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgCgDgDgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIgDAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAgBgBAAIAAACIgEgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgCABIgDgCIgBACIgEABIAAgBQAAABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBIAAgBIgBABIAAgCIAAgBIAAACIgBgBIAAABIAAABIgFABIAAgBQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBIAAACIAAAAIgBgBIAAgBIgCACQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAABgBAAIABABIgBAAIgBgBIAAABIgBgBIgBACIgEgCQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgBABQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAIgFABIgBABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAgBQgCgBgDAEIgBgBIAAABQABABgBAAIAAgBIgBACQgGAAgBABIgBgBIgEADIgBgBQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIAAgCQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgBABIAAgBIgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIABABIgDACIgCgCIACAAIAAgBIAAAAIgDABQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIABACIAAAAIgBABIgCACIAAgBIgBADIgCgBIAAABIgBAAIgBgBIAAABIAAABIgCgBQAAABAAAAQAAAAAAABQABAAgBABQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAIAAAEIgBgBIgCABQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAIgBgBIgBADIgBgBIgBAAIgBACIgBgBIgBAAIAAABIAAAAIAAACIgBgBIAAABIgBgBIgBACQgBAAgDgEIAAgBIgBgBQAAAAgBAAQAAAAAAAAQABgBAAgBQAAAAAAgBIACAAQAAABABAAQAAAAAAAAQAAABAAAAQABAAAAgBIAAgCIABABQAAAAAAgBIADgBIgBAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQABABAAAAQABAAAAAAQABAAAAgBQAAAAAAAAIAAgCIABABQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQADAAADgDIAGgBQAAABABAAQABAAAAgBQABAAAAgBQAAAAABgBQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIABABQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIACgEIAAABQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIADgFIAEADIAAgCQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgBAAIAAAAIAAABIgBgDIADAAIAAAAIAAAAIABAAQAAABAAgBQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIgCAAIABABQAAABAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIACgBIAAABIABgCQABABAAAAQAAAAAAAAQABABAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAAABIABgCIAAABIACgDIAAABQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIACgBIAAABQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIADAAIABACIAAgDIABgCIAAABIAFgBIAAABIACgBQAAAAAAABQABAAAAAAQABAAAAAAQABgBAAAAQABAAABgBQAAAAABAAQABAAAAAAQAAABABAAIAAgDQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAAAIgBAAQAAABABAAQAAABAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIAFAAIAEABIAIgCQABAAABABQAAAAABABQAAAAAAABQAAAAAAABIAEgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIgBAAIADAAIgBABIACAAIgBABQAAAAABABQAAAAAAAAQABAAAAABQABAAABAAIAEACIgBABQABgBAEADIgBAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAAAIAAgCQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAABgBIgBADIgBAAIAAADIABAAIABAAIABgBIACADIABADQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAIgBgBQABAAAAAAQAAAAAAAAQABABAAAAQAAAAABAAIgEABIAEAAIgBACIABAAQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAgBQAAABABAAQAAAAABAAQAAAAABAAQAAAAABgBIgBABIABAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBAAIAAADIABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAgBIAAABQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAgBIAAABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABABgBAAQAAAAAAAAIgBABQAAABABAAQAAAAAAAAQAAAAAAAAQABAAAAgBIABAAIAAAAIADAAQAAABABAAQAAAAAAABQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAIAAAAIABgBQAAABAAAAQABAAAAAAQAAAAAAAAQABAAAAgBIABAAIgBACIACAAIACgBIAAABIABgBIABAAIABACQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIAAAAIACAAQABAAAAAAQAAgBABAAQAAAAAAABQABAAAAAAIgBACQAAABABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABAAIABgCIgCABIABgCIgCABIABgCQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIABAAIABACIABABQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgBABIACgBIgBgBIACAAIABgCIAAABIABgBQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAIABAAIgBABQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAAAIAAgBIADABIAAACIABAAIABACIAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAAgBIADAAIABABIABgBIgBABIAAAAIAAABIABACQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIABgBIACABIAAgBQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIAAACIACgBIgBAAQABAAAAgBQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIgBABIADgBIABACIADgCIAAAAIADAAIACgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAgBIABAAIABAAIAAgBIACABQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIACABIgBAAIABABIAAgBIAAABIABAAIAAACIAAgCIgBgCQABAAAAAAQABAAAAAAQAAAAABgBQAAAAABgBIAAABIAAgBIABAAIAAACIACgCIAAAAIAEAAIACgBQAAAAAAAAQAAAAAAAAQABAAgBAAQAAAAAAgBQABABABAAQAAAAAAAAQABAAAAgBQAAAAAAgBIAAACIABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAABAAIgBgBQAAAAABAAQAAABAAAAQAAAAAAAAQABAAAAgBIABAAIAAgBIABAAIAAgBIACADIAAgCIAAgCIABAAIACgBIAAABIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIABACIAAgCIABACIABgCQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIgBABIACABIgCABIAAgCIgBADIAAgCIgBABIgBgBQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIgDAEQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIABACIgBgBIgBABIgBAAIgBgBIAAgCIgCABQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIgBAAIgCgBIABgBIgBAAIgBABIAAgBIgBABIgBgBIAAABQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAABIgBgCQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAIABACIgCABIABgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAgBgBIAAACIgDAAIAAgBIgFADIAAgBIgCgBQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAAAIgGADIAAgBIAAgBIgFABIAAABIgBgBIAAgBQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIAAgCQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCgBQgBAAABABIgBABIABABIgBABIAAgBIgDABIABABIgBAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIgGACIABgBQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIAAgBIgCACg");
	this.shape.setTransform(92,58.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F4F4").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAAAIAAABIAAgBg");
	this.shape_1.setTransform(106.5,59.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F4F4").s().p("AiDA1IAAAAIgBgBIAAgCIAAgBIACAAIACABIABgCIAAABIAAgBQAAAAABAAQAAABAAgBQAAAAABAAQAAAAAAAAIAAgBQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABIADAAIAAgDIABACQAAgBAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQACABADgDQAEgDACAAIgBAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABgBQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABABIAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABgBIABgBIAAABIABAAIADgFIAEADIgBgDQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgBABIAAAAIgBgCIABAAIAAABIAAgBIABAAIABAAIAAAAQABAAAAAAQAAAAAAgBQABAAAAgBQAAgBAAgBIACADIgDABIABABQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAABIABgBQAAAAAAABQABAAAAAAQAAAAABAAQAAgBAAAAIABgCIAAABQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIABABIAAgDIABABQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAABQAAgBgBAAQAAAAAAAAQAAgBABAAQAAAAAAAAIACgBIAAABIACgCIADgBIABACQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAEgBIAAABIABgCQABAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAQABAAAAAAQABgBAAABQABAAAAAAIgBgCIADAAQAAAAAAABQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAIAEgBQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAIAFgEIAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIACgCIACgCIAAABQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIABABIABgBIAAABQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABgBIADgCIAAABQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIACgCIAAABQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIgCgBQABAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIACACIAAABIACABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIADgBIADgCQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAIAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAIgCADIADgDIABACIAAgBIABAAIAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBIAAABIABgBIABAAIgBABIACACIAAgDIABACIADgEIAAABIABgCIABAAIACgBIACABIAAACQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAIAAgBIADgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABIgBgCIABgBQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIABgBIAAADIABgCQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAABAAIABABQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIABgBIABACQAAgBABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAAAIACgBIACgBIABADIABgBQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIAAgCIgBABIAAgCIgBACIgBgCIACgBIABAAIABACIACAAQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAABIABgBIgBAAIABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABABIgBgCIABABIABgCIABgBIAAABIABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAABAAQAAAAAAAAQAAABABgBQAAAAAAAAIAAgDIAAABIAAgBIABgBIgBABIACAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIABACIABgBIAAACIABgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABABIgBgBIAEgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIACABIAAABIAAgBIAAACIABABQAAgBABAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIABgBIABgBIACABIAAgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAABIAAACIACgBIgBgBIABAAIABABIACgBIgBABIACAAIABABIADgCIAAAAIADAAIADgBIgBAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAIABgBIABABIAAgBIACABIAAgBIABABIAAAAIABABIAAAAIABACIgBgEQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIAAABIABgBIABAAIAAACIABgCIAEABQABgBAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAgBIAAACIABgBIABABIABgBQAAABAAAAQAAAAABAAQAAAAAAgBQABAAAAAAIAAgBIABAAIAAgBIABADIABgDQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIACgBIAAACIAAgBIAAAAQAAAAABAAQAAABAAAAQAAAAAAgBQABAAAAAAIAAACIABgCIAAACQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgCAEQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABIgBABIgBAAIgBgBQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgBABQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAABIAAAAIgBAAIgCgBIABgBIgBAAIgBACQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgBABIAAAAQgBgBAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAABgBgBIABABIgBgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIABACIgCABIAAgBQAAgBgBAAQAAAAAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgBABIgDABIAAgBIgEADIAAgCIgCAAIAAABIAAAAIgFADIAAgBIgFABIAAABIgBgBIAAABIAAgBQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgBgCQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIgCAAQgBAAABAAIgBACIACAAIgCABIAAgBIgCACIABAAIgBABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABgBAAIgCACIAAgBQAAAAAAAAQgBAAAAABQAAAAAAAAQgBABAAABIAAgCIgBACQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIAAABIgBgCQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAAEIgGADIAAgCQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABIgCACQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgGAFQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBgBQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgBgBIgBABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgBABIgDABQABAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBABIAAgBIgBABIgBAAIgBgBIAAACIgCAAIABgBQgBABgEABQgDABgBACIAAgCQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgBADIgHABIgEACIAAABIgBAAIABAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIgCACIgCACQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgBACQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAIgEAEQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgBgBIAAACIgEABIAAACIgEADQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIgBgBIAAABIgBgCIAAABIgBgBIAAACIABABIgFADIAAgBQgBAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIAAABQAAABAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIAAgBIgCACIgBgBIgCABIABAAIAAABIgBgBIgBACIAAgCIgBADIgEgBQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgBACIgEAAIgDACIAAAAIgBABIgBACIAAgBQgCgBgCAEIgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBgBIAAACQgEAAgDACIAAgBIgEAEIgBgBQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIABgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgBACIgBgCIAAADQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABIABACIgDACIgBgDIABAAQgBAAABAAIAAgCIgCACIAAgBIgBABIAAgBIgBAAIACACIgBAAIgBACIgBACIAAgBIgBADIgCgCIAAACIAAAAIgCgBIAAACIgCgBQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAAEIgCAAIgBABQgBAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQgBAAAAABIgBgBIgBACIgBgBIgBAAIgBADIgBgBIgBgBIAAABIgBAAIABACIgCAAIAAAAIAAgBIgBACQgBAAgDgFgAhTAfIAAgBIgBAAgACDg2IgBACIAAgCIACgBQAAgBAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIAAAAIgCACgACFg2IAAABIgBABg");
	this.shape_2.setTransform(96.8,50.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4F4F4").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABIAAgBg");
	this.shape_3.setTransform(110.6,44.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4F4F4").s().p("AAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(99.6,36);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4F4F4").s().p("AAAAAIAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_5.setTransform(102.6,31.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4F4F4").s().p("AAAAAIAAAAIAAAAg");
	this.shape_6.setTransform(103.7,31.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4F4F4").s().p("AhpBwQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABAAIAAgCIgDgCIABAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBIgBABQgBgBAAgBQAAAAAAgBQAAAAAAgBQABAAABgBIACgCIgBgCIACAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQACgCACgEQADgFACgCQACgBABgEQAAgEADAAIAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAABABIABgEIAAABIABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIACgEIAFACIgBgDQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIgBABIgBABIgBgCIACgBIABgBIABAAIAAAAIACgFQAAABAAAAQAAABABAAQAAAAAAAAQABABAAAAIgCABIAAABQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIACgCIAAABIABgBIAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBIABgCIAAABIABgBIABgBIAAABIABgEIABACQAAgCAAAAQABgBAAAAQAAgBABAAQAAABABAAIAAAAIAAAAQgBAAAAgBQABAAAAAAQAAgBABAAQABgBABAAIAAABIADgCIAEgBIABABQAAAAAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgDIAAABIAGgCIAAACIACgCQAAAAABAAQAAAAABAAQAAAAABAAQABAAABAAQADgCACABIAAgCQABgBAAAAQABAAAAAAQABAAAAAAQAAABABAAIgBAAIABABIABgBIABgBIAAgBIAFAAQAEAAABACIAIgEIAAABQABAAAAAAQABAAABAAQAAABAAAAQABABAAAAIACgCIAAgBIAAAAIABgBIAAABIAAgBIABAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIgBgCIACAAIgEgCIABAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIAAABIAAAAIAAAAIAAgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgDIAAgBIgBABIgBABQgDgFgDgCQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIgEgCIABABQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAEADIgEgEIACgBIAAgBIgBgBIAAAAQgCgDAAgDIABABIACgDIgBABIADAAIAAgBIACgGIABAAIACgCQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIADgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIAAAAIAAABQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIAAABIAEgCQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAIAAgBIABgCQAAAAAAABQABAAAAAAQAAAAAAgBQABAAAAAAIABgBIAAACIACgBQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIABABQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAIACACQAAAAABgBQAAAAAAAAQAAAAABAAQAAgBAAAAIgBAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIACACIABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIgBACIAAgDIgCACIAAgCIABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABgBAAAAIABACIACgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAAABIABgCIgBAAIABgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAABQAAAAABABIAAgCQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAAAAIAAgBIABACQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAIgCgDIABAAIgBAAIABgBIgBABIADgCIACABQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABABIAAgCIAAgBIgBAAIADgDIgBgBIACgBIAAAAIABABIgBAAIABABIACAAQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAIAAgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIADgBQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAABIgBgBQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIABABIABgBIgBAAIAAgBIABAAIACgDIAAACIABgDQABABAAAAQAAAAAAAAQAAAAABAAQAAAAAAgBIABgEIAAAAQAEgDAAgDIAAAAIAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgCIABAAIAAgCIACAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIACgBQABABgBAAIABAAIAAgBIABABIAAgBIACACQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIgDgBQACgBABgDIABABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIABgBIABACIAAgDIABAAIAEgCQABAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBIABACIABgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAIgBgCQABABAAAAQAAAAABAAQABAAAAAAQABAAABgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABAAIAAgBIACADIAAgDIABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAIACgBIAAABIAAgBIAAABQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAACIACgCIgBACIADgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIAAAAIAAAAIgDACIABgCIgBAAIgBABIAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAABAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgDAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgCACIABABIgBgBIgBABIgBABIgCgBIgBgCIgBACQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABIABAAIgCAAIgCABIABgCQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgBABIAAgBIgBACIgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQABABgBAAIAAABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIAAACIACABIgCACIAAgBQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAABQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAIABABIgDADIAAAAIgCAGIgBgBIgCABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIABAAIgCAEIgBAEQAAAAAAAAQAAAAAAAAQgBAAAAAAQABgBAAAAIgBgBIgDAFIAAAAIAAABIAAABIgBAAIABABIgCgBQAAAAABABQAAAAAAAAQAAABAAABQgBAAAAABIgCgBIAAACIgCABIgBABIABABIACgBIgBACIAAgBIgCADIABABIAAABQgBAAAAABQAAAAgBgBQAAAAAAAAQgBAAAAgBIgCADIgBAEIAAgBIgBADIgBgBIgBADIgBgBQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIAAADQAAAAgBAAQAAABABAAQAAAAAAAAQAAABAAAAIgHAFQAAAAABAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgHAFQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIgJAFQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAQgBgBAAAAQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgBgBIgCABQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIgBABIgBABIgEABIAAABIgCAAIABAAIgBAAIgCABIAAgBIgBABIgBABIAAgBIgCADQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgCAAQAAAAAAAAQgBAAABAAQAAAAAAAAQAAABABAAIABABIAAAFQABADACACIAAgBIAAABIAAAAQAAAAADACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIADACIAEADIgBABIgBABIADACQAEACgDAGIgEAHIAAAAIgCAAIACABQgDADgEACIgBgBIgBACIgFAAIgBACIgGABIgBAAIgBAAIgBAAIAAgBIgBAAIAAgBIgBgBIAAACIAAgCQgBABAAAAQAAAAAAABQAAAAAAAAQABAAAAABIgHABIAAgBQgBAAAAABQgBAAAAAAQgBAAAAAAQgBgBAAAAIAAACIAAAAQAAgBgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAgCIgCACQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAIABABIgBABIgBgCIgBACIAAgBIgBACIgFgBQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgCABQgBAAgIADIAAAAIgBABQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAIAAgBQgDAAgDAFQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIABABIgBAAIAAACQgFABgDADIgBgBIgEAFIgBgBQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIAAgBQAAAAAAAAQAAAAAAAAQgBABAAAAQABAAAAAAIgBACIgBgCQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAIABACIgCADIgCgBIABgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQABgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgBADIgBgBIAAABIAAgBIgBABIACABIgBAAQAAABAAAAQABABgBAAQAAABAAABQAAAAgBABIgBgBIABAEIgCgBIgBABIABABIAAAAQAAABgBgBIgBAAIgBABIABABIgCAAQAAAAAAABQABAAAAAAQAAABAAAAQABABAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBAAIACAEIgCAAIAAAAIgBADQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAIgCABQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQABAAAAAAIgCAAIACABIgBAAIgBABIADgBIgCABIACAAIgBAAIAAAAIAAAAIgBAFIgBABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIAAAAg");
	this.shape_7.setTransform(93,42.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4F4F4").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_8.setTransform(97.6,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4F4F4").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_9.setTransform(108.9,5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F4F4F4").s().p("AiJD6QgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgFgCIAAgBIgBAAIgGgDIABABQgEgBgDgDIgFgEIgEAAIAAgBIgGgCQgIgLACgIQACgKALgEIgCAAQAGAAAGgFQAHgEAEgBIAAABQABAAABgBQAAAAABAAQAAAAAAAAQAAABAAAAIAFgDIADAAQABgCAEgCIAHgDIAHACIABgDQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAIgDABIgBAAIgBABIgBgBIAAgBIAFgBIADgBIABgBIAAABIABAAIAIgFQgBAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIgGACIABABQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIAGgCIgBABQABAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAIADgBIAEgCIgBABIACgBIADgBQgBABABgBIAEgEIAAABQAHgFABABQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAABAAIAFgCIAAACIAHgEIACAAIACAAIADABIgBgBIgDgCIgCgCIgCgEIABgBIgEgCQAAgDgHgEQgHgEgBgEIgCACQgFgEAAgCIABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgCgCQgBgBgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgHgLQgDgGACgFQgDgNAFgJQAGgHACACIAEgHQACgEAEgCIgBABQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQABgBAAABIADgDIAAABQACAAAGgFIAJgGQgBAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQABgBAKgGIgBABQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBABAAQAAAAABAAQAAgBABAAIgDAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAgBgBIACABIADgBIgBACIAFAAIADgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAIAJgEIAHgEQACAAAFgCQAFgCABACQAFgCABgEIgCACQABgCAFgCIgGAGIAIgGIACABIACgBIACgBIgBgBQAFgCADgDIAAAAIACAAIADAAIgCAAIAEAAIABAAQAGgEABgEIAAAAQACgCABgFIAAABQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIABABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgCgCIAAAAIgBgEIgDgDQAAgDgFgDQgEgEgBgDQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIAAgBIgCAAIgFgDIgCgBQAAAAABAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgDAAgCgCIgBgDQAAAAAAABQgBAAAAAAQAAAAgBgBQAAAAgBAAIgCgBIAAgDQgCgEgCAAIABACQgIgHgBgFIADgBIgBgEQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAABgBIgBABIgBgBIABAFIgCgEIABADIABAEIgBgCIgBABIgBgFIABgFQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAABgBIACgEQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIACgDIgCABIAEgEQACgFgDADIABgBIABAAQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAIAAABIACgCQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQABABgBAAQAAAAAAAAQgBAAAAABQABABAEgDQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAgBAAIACAAIgBgBIADgBIgCABIAEgBIAFgBIgBABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAIACAAIABABIACgCIAEgBQAAgBAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAIAJgCQgBAAAAAAQAAAAgBgBQAAAAABAAQAAAAAAAAIAFAAIAAgBQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgBAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAAAAABAAIACgCIgBgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBIADgCIAHAAIgBgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQADAAADgDQAFgEADAAIAAABIADgCIgCAAIADgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQACgCAEgBIgCACIAFgEQAAABAAAAQAAAAAAAAQABAAAAAAQABAAAAgBIAGgGIABAAIAGgFIAFgFQAAAAAAAAQgBgBAAAAQAAAAABAAQAAgBAAAAIADgDIACgBIAAgDIACAAIABgBQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIAEgDIgBACIABAAIABgCIAAACIABgCQAAAAAAABQAAAAAAAAQAAAAAAABQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgCgBQADgCACgGIABABIAAgCIACgCQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIACgGIAHgHQAEgHgCgBIADgDQAAAAAAgBQABAAAAgBQAAAAAAAAQgBgBAAAAIABAAIABABIABgDQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIAAgBIgCABQADAAACgHQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAABQAAAAAAgBQABAAAAAAQAAAAAAgBIgBgBIAEgBIgBgDQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAgBIAAABQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgFIABACIAAgDQABAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAABAAIgCAFQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAABIABAKQAAADgCAFQgDAEAAACIABgBQABAAAAABIgCABQAAADgCADQAAgBAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIgBABIgBgDIgCAFQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAIABAAIgDADIAAAAIgDADIABgDIgBADIgBADQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIgCAEIAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIABABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIgBADIADgBIgDAGIAAgCQgDACgEAGQgDAGgFACQABAAAAABIgBABIgGAGIAAgBQgGAIgEACIAAgBQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQAAAAAAAAIABAAIgHAGIgHAGQgBAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIgLAGIAAgBQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABABAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIAAACIgBgBIgDACQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAAAABIgBgDIgEADIgFAAIgBABIgBACIADAAIgFACIACgCIgHADIABABIgDABQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIgHADIgGADIABgBIgGAEIABgCIgCACIgCACQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAgBQAAAAAAAAIgBADQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQgEAIABAFIgBgBQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAABQABAEAGAGQAAAAAAAAQgBABAAgBQAAAAgBAAQAAgBAAAAIgDgCQAEAGAKAGQAAACAEACQAEACABACQAAAAAAAAQAAgBABABQAAAAABAAQABABABABIAAABIAAABIAEACQABABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAIADADIADAEIADAEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABABAAIACAEIgBgBIACAIIgBABQACAIgDACIAAgCQAAAIgIAFIgNAJIABgCQgBAAgBABQgBAAAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgeALgGAEIABABQAAgBgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAIAAABQgCAAgGAEQgGAEgDgBIgHAEQgFABgCADQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABgBgBAAIgFAEIAAAAQgCACgIADQgHACgDADQAAgBAAAAQAAgBAAAAQgBAAAAABQgBAAAAABIABAAIgJAJQAAgBgBAAIgCABIAAABIAAACIgIAHIAAAEIgCAKIAAAAQACABgCAEIgBAAIABACQAAgBgBAAQAAAAgBAAQAAABAAAAQAAAAAAABIABAAIgBABQABAAAAABQABAAAAAAQAAAAABgBQAAAAAAgBQABAEAHAHIgBABQAEACACAEIABgBIABABIAAABIgBAAIAHAEIABACIADAEQAAAAABAAQAAAAAAgBQAAAAgBAAQAAAAAAgBIACABIAAACIADABIgBABQACACADAAQACADACAIQACgBACAGIADAGIgCACIgXAIIAAgBQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAIAAAAQgFAAgLAGIgBAAQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQABAAgBAAIgCACQgPADgFADIgBgCIgOAHIgBgBIgBABQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIACgCIgDACQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIAAgCQgCAAgCAEQgBAAAAAAQgBABAAAAQgBAAAAAAQgBgBAAAAQgDgBgDACIAAADIgJADQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIADgBQAAAAgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAIACgBIgGADIgBgCIgDABIABACIAAAAIgFADQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAABIAAgBIgDAEQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgBABIgCAAIAAACIABABIgCABIABABQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAABAAIgCAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAIAAADQAHAEACAAQgBAAAAAAQAAABABAAQAAAAAAAAQABABABAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQACACADgBQAAAAAAAAQAAABAAAAQAAAAAAAAQABABAAAAIADACQAAAAABAAQAAAAABAAQAAAAABAAQABABAAAAIAAABIACABIABACQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIABgBQABABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIAEABIAAACIACAAIAAACIADACQACAEgCACIgDABIgBgCQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAABABIgBAAIgEgDgAhhCzIACgBIgCgBIAAACgAAxAAIAAgCIAAACgACuj0IACACIAAgGQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIABACIABAHIgCgCQgBAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAABg");
	this.shape_10.setTransform(92.3,26.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F4F4F4").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_11.setTransform(77.2,46.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F4F4F4").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_12.setTransform(90.6,29.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F4F4F4").s().p("AAAACIAAgBQgBgBABgDQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIAAAAIAAAAIABAEIgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_13.setTransform(110.3,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F4F4F4").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABg");
	this.shape_14.setTransform(110.4,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F4F4F4").s().p("AAAAAIAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQgBAAAAAAg");
	this.shape_15.setTransform(82.3,57.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F4F4F4").s().p("AAZA2IAAAAIgBgCIABABQAAAAAAAAQABAAAAAAQgBgBAAAAQAAAAAAAAIABABIABABIgBgBIAAABIAAABIgBgBgAAeAQIABAAIAAAAIABAAIABAAIAEgBIgGABgAAbAPIACAAIgEABIACgBgAgUglIgBABIgBAAIAAgBQAAgBAAAAQAAAAAAAAQgBAAAAABQAAAAAAABIAAgDIgCADQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIgDADIAAgCIAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIAAgCIABgBIgDAAQABAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgDAAIACgBQgBAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAgBIgCABIACgBIgDAAIABgBIAAAAIABgBIgCAAIAGgCIAAAAIACAAIACAAQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAABIABAAIAAAAIAAAAIAAABIABAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAACIABgBIAAABQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAAAAAIAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIACgBIACgCQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABIgBABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIADgBIgBABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIADgCIACgBIgBACIgBABIgHAFIAAAAIgDACIAAABIgCABIADgDIgCACQABgBAAAAQAAgBAAAAQAAAAAAAAQAAAAgBABIgCACIABgCIAAABIACgDIgBABIgBABIAAAAIgCACIAAgBIgCACQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAgAgBgwIABgBIgBACg");
	this.shape_16.setTransform(79,52.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F4F4F4").s().p("AAAAAIAAAAIAAAAIAAgBIAAACIAAAAIAAABIAAgCg");
	this.shape_17.setTransform(81.3,58);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F4F4F4").s().p("AAAAAIAAAAIAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQgBAAAAAAIAAAAg");
	this.shape_18.setTransform(76.4,59);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F4F4F4").s().p("AAAACIAAgDIAAADg");
	this.shape_19.setTransform(75.5,59.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F4F4F4").s().p("AAWBGIgFgBIACgBQAAgBAAABIgCgBIABgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQABABAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBQgCgDAAgCQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgBIABAAIABAAIADACQADgBgEgBIgBgBIACAAIABAAIADABQAAAAAAgBQAAAAgBAAQAAAAgBgBQgBAAgBAAIADAAIgDgBIABAAQABAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgBAAIACgBIgCAAIgBABIgBgBIAAAAQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCABIgCgDIABgBIgGgDIACgBQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIABABIgIgGIABAAQABAAAAABQAAAAAAAAQABAAAAAAQAAgBAAAAIgEgFIAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBgBIABAAIgCgBIACABIgGgEIAAAAIAFABQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIABAAQABAAAAgBQAAAAAAAAQAAAAAAgBQgBAAgBAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIgCgBIACgBIACABIABABQAEAAACgEIAAABQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIAAACQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAACIABgCQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIACgBIABgBIAAAAIABABQABAAAAAAQAAAAAAgBQABAAgBAAQAAAAAAAAIABAAIAAAAIgBgBIgBgBIABAAIgBAAQAAAAgBAAIgBAAIAAAAIAAAAIgCgBIABgBIgCgCQAAAAgBgBQAAAAAAAAQAAAAAAgBQABAAAAAAIABAAIgBgBIgBABIABgCQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABIgBACIgJgDIgJgFIAAACQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAABIgDgEIgDgDIAAgEIgCgEIACgGQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAAAAIACgEIAAgBIgEgBIABABIgBABIgBgCIgCABIABgCIgFABIgDgEQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBIgEAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBgBgBAAIABAAIgBABIgBgBQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAgBABAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgEAEIgCgCIAAAAIgEgBIgEgBQAAAAABgBQAAAAAAAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIgCgDQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAIAAgDIAAgEIAAABQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIgBgBIgBgBQAAgBABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAgDIABAAQABAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIgCABIACAAIABgCQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABIAAADIAAAAIABACIAAABQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAIAAACIAAgBIAAABIgBACIABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAIABgBIAAACIACgBQABACAEgCIAGgCIgBgBQADABACgDQACgEACAAIAAABQAAgBABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAEgDIgBABIAAABIABgBIAAAAQABgCAGgBIACACIABAAIAAgBIAAgBIACACIAAAAIACABIABABIAKAHIgPACIAAAAIAAAAIAAAAIgBACIAAgDIABAAIAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCABIAAgBIAAAAIAAABIgCgBIAAAAIgBAAIAAACIAAgBQgBAAAAABIAAAAIgBAAIADACIgCgBIABABIAAABIACAAIgBAAIgCAAIABABIgBAAIgDACIAIgDIgBABIAAAAIgCACIACgBQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAABgBQABAAAAABQAAAAAAAAQAAABAAAAIAAgCQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIgBAAQAAAAABABQAAAAAAAAQAAAAABAAQAAAAABgBIAAgBIAAgBIAEABIACAAIAAAAIAEgBIADgCIAAABIAAgBIABAAIAEANIgBAAIAAAAIgFACIAAgBQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBAAIAAAAIgCAAIAAgBIgBACIgBgBIAAABIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABIgCADIgBgBQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAAIgBABIgCAAIgBABIAAABIAEgCIABADIACABQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAAAgBABIAEAAIgCABQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBIAAACIAAAAIABAAIAAgBQADAAAEgDIAAABIABgBQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgCABIAAADIAEgEIgDADIAFgCQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAIgBAAQABAFgBACQgBABAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAgBAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAIABABQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIAAAAIABABIADABIABABQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAABABIAAABIAEAAIABgBIAEAAIAAABIAAAAIgCABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgCAAIgBABQgBAAABAAIABAAIgBACIgEACIgDgCIgCAAQgBAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIABABIACgBIgBACIADgCIABACIgCABIgDAAIgDgBIgCABIgCAAIAAgBIgBACIABAAQAAAAgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAAAABAAQAAAAABAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIAAACQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAAAIgBAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAgBAAQAAgBABAAIgDAAIABADIgBAAIABAAIgCABIABgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAIAAAAIgBgBIAAAAIgCgBQABAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIABAAIgCAAIABABIgCAAIABAAIgCgBIABAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIADABQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAIAAABIgDAAIACABIABAAQABAAABAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgCAAIABABIAAAAQABAAAAAAQABAAAAAAQAAAAgBAAQAAABgBAAIACABIgCAAIACACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIAEACIAAABIABACIADADIAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABIAAABIACAAIgBACIACgBQgBABAAAAQAAAAAAABQAAAAAAAAQAAAAABABIgBgBIgBABIACABIgCAAIABAAIgCACQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAIABgCQABABAEACIgCABIADAAIABABIgDAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQABABAAABQAAABABAAQAAABAAAAQAAAAAAAAIAAABQgBAAAAABQgBAAAAAAQAAAAAAAAQAAABABAAIgDAAQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgCAAIAAgBQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAAAIgBABIgCABIABABIgBAAIABABIgEgBIACABQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAIgBABIABABIgBAAIgBAAIAAAAIAAABIAAABIgCABIADAAIgCABIADABQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABg");
	this.shape_20.setTransform(73.9,53.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F4F4F4").s().p("AAAAAIAAAAIAAAAg");
	this.shape_21.setTransform(72.3,47.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F4F4F4").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIgBAAIgBAAIgBABIABgBg");
	this.shape_22.setTransform(76.7,60.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F4F4F4").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQABAAgBAAQAAAAAAAAg");
	this.shape_23.setTransform(70,59.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F4F4F4").s().p("AgEBFIgBAAIABAAgAgEBEIgBABIgBgBIABAAIgBgBIACABIgBgBIABgBQAAAAAAAAQgBAAAAAAQAAAAABAAQAAAAAAgBIACABIgDgCQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIgBgBIACgBIACABQABgBgBAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIAAgBIAAAAIABgBIABABIgBgBIACAAIgBgBIAAAAQABAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBgBIACAAIgBAAIgCAAIAAgBIAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAIgBAAIABgCIAAAAIgBgCIABAAQABAAAAAAQABgBAAAAQAAAAgBAAQAAAAgBAAIgCgDQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIABABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAIgCgCIADAAIgBgBIABgBIgCAAIgBAAIAAgBIABABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIgBAAIAAAAIACgBIAAgBIgBgBIABAAIgCgBIABAAIgBgCQABABAAAAQABAAABAAQAAAAABgBQAAAAAAAAIgEgBIABAAIgBgDIABAAIgCgCIABAAIgBgDQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIACAAQgBAAAAAAQgBAAAAgBQAAAAABAAQAAAAABAAQgBAAABAAIgBgBIAAgBIgBgBIABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBgBIACAAIgBgBIABAAIgBgCIgBgCIACAAQAAAAABAAQAAgBgBAAQAAAAAAAAQgBAAgBAAQADgEgBgCIgCAAIABgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIgBgCIAAgCIACAAIgCgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIABgCIABAAIgBAAIgBgDIACAAIgCgBIABgCIgCAAIgBgCIABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIADAAIgCgBIgBAAIAAgDIABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBIgBgBQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAAAIgCAAIACAAIgCgBIACAAIgCgBIADgBIgCgBQABgBgBAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIAAgBIABAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBgBAAgBQgBAAAAAAIABAAIgBgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBgBAAIACAAIgCgCIACAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAIABABQABgBAAAAQAAAAAAAAQgBAAAAAAQgBgBgBAAQgBAAACAAIABgBIgCgBIAAgBIACAAIAAAAIABAAIgBAAIgBgCIAAAAIgCgBIADgBIgDAAIABAAIACgBIgCgBIACAAIgDgBIAEAAIgDgBIABAAIABAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIABAAIABAAIgBgBQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAAAIgCgBIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIgCgBIACAAIgCgBIABAAIABAAIgCgBIAFAAIAAAAIABAAIADABQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIABABIgBAAIAAABIABAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgBAAIABABIgBAAIABABQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIAAADIABAAQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAgBAAIAAAAIAAABIABABIgBAAIgBAAQAAABABAAQAAAAAAAAQABABAAAAQABAAAAABIgEABIAEAAIAAABIAAAAIgBAAIAAAAIACACIgDAAIAAAAIAAAAIAAAAIAAABIgBAAIABAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAIACABIgBAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAgBAAIAAAAIACABIgBAAIACABIAAABIAAABIAAABIgBABIgCAAIADACIAAACIgCAAIABABQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAABABQAAAAgBAAQAAABAAAAQAAAAgBAAIADAAQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgBAAIABABIACAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABIADADIgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAIACABIABACIgBAAIABABIgBAAIAAAAIAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAABABIABABIgCAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIgBABQgBAAABAAIABAAQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIgCABIgBgBIgCABIAAABIADAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIgDABIABABIgBAAIACACIgCAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAAAIACABIgBAAIABABIgBAAIAAAAIgCAAIAAAAQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAAAIAAgBIgBABIgBABIgBAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAgBAAIABACIgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAIABAAIgBAAIACABIAAABIABAAIgDAAQABAAAAAAQABABAAAAQABAAAAAAQAAAAgBAAIgBABIACABIgCAAIABABIAAAAIABABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgDAAQAAAAAAAAQABAAAAAAQAAABgBAAQAAAAAAAAIABAAIAAgBIACABIgBgBIACAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgCAAIAAABIAAABIgBAAIABAAQABAAAAABIACAAIgCAAQABABABAAQAAAAAAAAQABAAAAAAQAAAAgBABIAAAAIAAAAIgCAAIgBAAIADABIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABQABAAAAAAIgCAAIgBABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIABAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIACAAIgCABIAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIABABIAAAAIgCACIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAgBIAAABIAAABIAAABIAAAAIAAABQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAABIAAAAIAAABIAAAAIAAABIAAAAIAAAAIgBAAIAAAAIAAABIABAAIAAABIAAAAIAAAAIAAABIAAgBIAAABIAAAAIAAACIAAACIAAABQgBgBABABIgBAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAAAAAABIgBAAIAAAAIAAABIACAAIgBAAIABAAIgDABIADAAQAAABgBAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAABIgCgBIABABIAAAAQAAAAgBAAIgCAAIACABIgCAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAABgBAAgAgFgZIACAAIAAAAgAgChDQAAgBABAAIAAABg");
	this.shape_24.setTransform(70.1,53.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F4F4F4").s().p("AAAAAIAAAAIAAAAg");
	this.shape_25.setTransform(10.2,61.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F4F4F4").s().p("AAIBfIgBABIAAgBIABgBQAAAAABgBQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIgCACgAAABfIAAgBIAAABIAAgBIgBAAIgBgBIAAgBIACgCIgCAAIgCAAIAAABIAAgBIAAgCIgBAAIABgBIgBAAIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQgBABABgBIgBABIACgCIgCAAIgBABIgBgBIAAAAQAAAAABAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBAAIgBgCIABAAIgDgDIABgBIAAgBQABgBgBABIgDgEIACAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgBgBIABAAIAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAIACgBIgBgBIABgBIgCAAIAAAAIgBgBIABABIgBgCIgBAAIgBgBIADAAIgBgCIgBgCIABAAIgCgCIABABIgCgCIACAAIABgBIACAAIgEgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgBgCIACAAIgCgEIABABIABABIgCgGQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBABAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIACAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIABAAIAAgBIAAgBIAAgCIgBgBIAAgBIABABQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIABAAIgBgBIABgBIAAAAIAAgDQAAgBABAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIACABQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIgBgCQAEgGgBgDIgBAAIABgBIgBAAIABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAAgCQAAAAABAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIACABIgBgCQgBAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAIgBgBIAAgDIACAAIgCgCIACgCIgBgCIAAgDIAAAAQgBAAABgBIABgBIABABIAAgBIABABIABAAIgCgBIACAAIgBAAIgCAAIABgFIABABQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIgBgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIABAAIAAgCQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIgBAAIAAgBIABAAIgBgBIACABIgCgCIADgCIgBgBIAAgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBIABgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAgBAAgEIAAABIAAgBIAAgBQABgCAAgDIABABIAAgEIABAAIgBgBQAAAAABAAIAAABQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIgBgCIACABQABAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgCgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBIACABIgBABIACAAIgBgCIACABIAAAAIAAAAQABABAAgBIgCgBIgBgDIABAAIgCgCQABAAAAAAQABABAAAAQAAAAABAAQAAAAAAgBQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIACABIABAAQAAAAABAAQAAgBgBAAQAAAAAAAAQgBAAAAgBIACABIgCgCIAEABIgDgCIABgBIABABQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIACAAIgBgCIABAAIABAAIgBgCIABAAIABAAIgCgBIACAAIgCgBIABAAIAAgBIABABIAAAAIgBgCQACAAAEACIABABIABAAIACACQAAAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAIAAACIAAgBIAAABIgBABIABAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgCABIACACIgCgBIABACQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIgCAEIABAAQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAIAAgBQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIABABIAAABIgBAAIgBAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgFAAIACABIAAACIABgBIAAgBIACABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAIAAgBIAAAAIAAABIgBAAIAAABIAAAAQAAAAgBAAQAAAAABABQAAAAAAABQABAAAAABIgDgBIABgCIgBAAIAAABQAAABAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAIAAgBQgBAAAAAAQAAAAAAABQAAAAABAAQAAAAABABQgBAAgBgBQAAAAAAAAQgBAAAAABQAAAAABAAIABACIgBgBQAAAAgBABQAAAAAAAAQAAAAABAAQAAABAAAAIgBgBIACADIgBgBQAAABABAAQAAABAAAAQAAAAAAAAQgBAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIgBgBIAAADIgBABIgCAAQAAAAAAAAQAAABABAAQAAAAABABQAAAAABABIgBgBIgBADIgBAAIABABQgBAAAAAAQAAABAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIADABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgBAAIAAABIACABIgBACIgCACIABAFQgBABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIABADQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIAAgBIAAABIAAAAIAAABIgBAAQgBABABAEIgBAAIACACIAAABIgBAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBABIACgBQgBABAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIgDABIgBgBIgCABIAAAAIADAAIgBACQgBABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAABABQAAAAABAAIAAAAIAAACIgCgDIACADIgCAAIgBABIABAAIAAAAQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABABIgBAAQAAAAABAAQAAAAAAABQAAAAgBAAQAAAAAAAAIAAgBIgDABIAAAAIACADIAAAAIABACIgBABIAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAABAAIABABIgBAAIABACQgBAAAAABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIABAAIAAAAIABABIAAACIABAAIgDgBQAAABAAAAQAAAAABABQAAAAAAAAQABABAAAAIgBABQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAIgCAAIAAABIABAAIAAACQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgDAAIAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIACAAIgBgBIACABIgBgCIACABQAAAAABAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgCABIgBABIAAABIAAgBIABABIAAAAIAAABIACAAIgBABIABABQACAAgBAAIgBAAIAAABQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIAAABIAAAAIADAAIgBABIABgBIAAABIAAAAIgBACIgCAAIgBABIABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIABAAIAAACQAAAAAAAAQAAgBABAAQAAAAAAAAQAAABAAAAIgBABIgBAAIABAAIgCAAIgBABIADAAQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAABAAIgCACIABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAQgBAAAAAAIgBAAIAAABIABAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIABABIgBAAIAAABQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAIACACIAAAAIAAACIABACIAAgBIABAAIABABIgBABIACAAIgBABIABgBIAAACIAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAIgBABIABAAIABAAIgCABIACAAIAAADIACABIAAgBQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAgBIAAACIAAAAIAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIABgBIAAABIABgCIgBAEIABgCIABgBQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIgBABIABgBIAAABIABABIgBABIABgBIAAACIAAgBIgCAAIABgCIgEADIgBABIgBgBgAgHBRIABAAIgBAAIAAAAg");
	this.shape_26.setTransform(9.7,51.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F4F4F4").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAIAAABg");
	this.shape_27.setTransform(10.9,61.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F4F4F4").s().p("AALBxIgCABIABgCIgBABIAAgCIABgBIgBACIACgBQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABIgBAAIAAABIgBAAIABgBgAAHBuIACgBIgFABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBIgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIAAgCIAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABIAAAAIgBgBIAAgCIABAAIgCAAIACgBIgCAAIABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAgBIAAAAIABgCIgBAAIgBACIgCgBIABAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAgBIgCABIgBgDIABAAIgDgDIABAAIAAgCQABAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIAAAAIgEgFQAAAAAAABQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBABAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIABAAIgCAAIACgBQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIADgBIgBgBIAAgCIgCAAIgBABIAAgCIAAABIgBgCIgBAAIAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgBgCIAAAAQABAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIABABIgCgCIABAAIgBgBQABAAABAAQABAAAAAAQABAAAAAAQAAgBAAAAIgDgBQgBABAAgBIABAAIgCgFIACAAQAAgCgDgDQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIACABIgDgGQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgBIgBgBQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAAgBIAAgDQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAABQAAgBAAAAQgBAAAAgBQAAAAABAAQAAAAAAAAIABAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBIABABIgBgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIACABQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIgCgBIADgGQACgDgBgDIgBAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAAgDQAAAAAAAAQABgBAAAAQAAAAgBgBQAAAAAAAAIABAAIgBgCIABAAQAAAAgBAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAIABgBIgBAAIAAgEIACAAIgCgBIACgDIgCgCIABgEIAAAAQAAAAAAAAQgBgBAAAAQAAAAABAAQAAAAAAAAIABgBIABABIAAgBQAAAAAAAAQABABAAAAQAAAAAAAAQABgBAAAAIgCAAIABAAIgBgBIAAAAIAAgFIABAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIgBAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIABABIgBgCIADAAIAAgCIgBAAIgBAAIADAAIgBgBIABAAIgCgCIAEgCQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIACgCIACgEIAAABQAAAAABgBQAAAAAAAAQAAAAgBgBQAAAAgBgBQADAAgCgFQABABAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBIgCgBIABABIgBgCQADgBAAgEIABABIAAgFIABAAIABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAgBgBIABABQABAAAAAAQAAAAAAAAQAAgBAAAAQgBAAgBgBQAAAAAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBgBIgCgBIABgDIADABIgBABIACAAIAAgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAABIAAgDIABABQAAAAABgBIgCgBIABABIAAgBIABAAQABAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBIACABIgCgDIADADIgCgEIACAAIAAAAQAAAAABgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQABAAAAABQAAAAABAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgBgCQAAAAABABQAAAAABAAQAAAAAAgBQAAAAABAAIgBgCIABAAIABAAIgBgCIABABIgBgCIABABIAAgBIABABIgBgCIAHACIAAABIABAAIABADQAAAAAAABQAAAAAAAAQAAAAgBAAQAAgBAAAAIgCAAIAAACIAAgBIAAABIgCABIABABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAAAABIABABIgCAAIABACQgCABgBADIgDAEIABAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAABQABAAAAABQAAABAAAAQAAABgBAAQAAAAgBAAIAAAAQAAAAAAAAQAAAAgBABQAAAAAAgBQAAAAAAAAIAAACIgCAAQABABAAAEIgEAAIACACIABAAIAAAAIgBgBIACABIgBABIAAAAIAAABIAAAAIgBAAIABAEIgDgBIABgCIgBAAIAAABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAIgBgBQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAABQAAgBgBAAQAAAAAAAAQgBABAAAAQAAAAAAABIABABIgBAAQAAAAAAAAQABAAAAABQAAAAgBAAQAAAAAAAAIgBAAIACADIgBgBQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgBACIgBgBQABAAAAABQAAABgBAAQAAABAAAAQgBABgBAAIgBAAIADADIgBAAIgBADIgBgBIAAACQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIACAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAABIADABQgCAFgDAAIABAGIAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAgBAAAAIABADQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgBAAQAAAAgBAAQAAABAAAAQAAAAABAAQAAAAAAAAIAAAAIAAABIAAAAQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABIAAADQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABIACACIAAACIgBgBIgBABQgBAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIACgBQgBAAAAABQAAAAAAAAQAAAAABAAQAAAAABAAIgDABIgBgBIgCABIgBABIACABIABAAIgBABIAAADQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABABAAQAAAAABABIAAgBIAAACIgCgDIABAEIgCgBIAAABIABABIAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIAAgBIgDAAIAAABIACADIABADQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBAAQgBAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAIABABIAAAAIAAADIgBACQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIACAAIABABIABABIAAABIgCgBIABACIABABIgBABQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIgCABIABABIAAAAIABACIAAABIgDAAIAAACQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIACAAIgBgCIACABIgBgBIACAAIAAABQAAAAAAABQgBAAAAAAQAAAAABAAQAAAAAAAAIgCABIAAABQgBAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAIgBAAIABABIAAgBIABACIACAAIgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAgBABIAAAAIAAAAIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAABAAIACAAIAAABIABgBIAAABIAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAAAIgBABIgCABIABAAIABABIABAAIAAADQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgBACIAAAAIgBAAIAAgBIgBAAIgBABQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAABABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABABIgCADIABgBIABACQABAAAAAAQAAABAAAAQABAAAAAAQAAAAAAABIgDAAIABABIABgBQAAABAAAAQABAAgBAAQAAABAAAAQAAAAgBAAIABACIgBgBIAAACIgBABIADACIAAAAIABACIABACIAAAAIABAAIABAAIgBABIACAAIgBACIABgBIgBACIAAAAIgBABIABAAIgBAAIABAAIgCABQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIgCABIACAAIABAAIgDABIADAAIAAABIAAADQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAgBQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIgBABIABAAIAAABIABgBQAAABAAAAQgBABABAAQAAAAAAABQAAAAABAAIABgBIAAABIABgBIgCADIAEgCIAAABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAAABIAAAAQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgBACIgCgBgAAKhIIAAAAIAAAAg");
	this.shape_28.setTransform(3,50.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F4F4F4").s().p("AAAAAIAAAAIAAAAg");
	this.shape_29.setTransform(46.2,58.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4F4F4").s().p("AAAAAIAAAAIAAAAg");
	this.shape_30.setTransform(59.8,60.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F4F4F4").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAABAAg");
	this.shape_31.setTransform(70,59.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F4F4F4").s().p("AEuARQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgDAAIgCgCIABgBIgEAAQgBAAAAAAQgBAAgBAAQAAABAAAAQgBAAAAABIABAAIgEgBIgDgBIADgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgDABIABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIgEABIAAAAQAAgBgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBIAAABQAAAAgBAAQAAgBAAAAQgBAAABgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAIACACIgFAAIABAAQgDgCgGABQgGABgEgCIgBABIgHgBIAAAAIgMABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQgBAAAAABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgPACQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIABgBIgLgBIABAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBgBIgBABIAAgCQgBACgGAAIAAgCQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgDgBIgCAAIgBACIACABIgEAAIACgBIgHABIABAAIgCABQgBAAgBgBQAAAAAAAAQgBAAAAgBQAAAAABgBIgHAAIgGABIABAAQgDgBgDACIABgBIgGABQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIgBABQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgDABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAABAAQgKAAgGABIABgCIgHAAIgHACQAAgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIgTABQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgEABgCgBQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAgBAAIAAgBIgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgDABIgIgBQAAABAAAAQAAAAgBAAQAAAAgBAAQgBAAgBAAIAAAAQgDABgCgBIgBgBQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgEgBIABgBIgMABQgIgBgEABIABgCQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgagEgGAAIABACIgCgBIAAABQgCgBgIAAQgGAAgCgCIgGAAQgFgBgDABQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIgFABQgDABgGgCQgIgCgDABQABgBAAAAQAAAAgBAAQAAgBAAAAQgBAAgBAAIABACIgLABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIgCgCIgBABIgBABIgLgCIgDADIgMAAIAAgBQgBACgEgCIAAgBIgCAAQABAAAAAAQABgBAAAAQAAAAgBgBQAAAAgBAAIgBABIAAABIAAgCIgCABIACACIgPgBIAAgBQgFABgCgBIgBABIgBAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIACgBIgHABIgCgBIgEAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIgBABIgCgBIgCAAIAAAAQgBAAAAAAQgBAAgBABQAAAAAAAAQgBAAAAAAIgIgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAIgTgBIABAAQgBAAAAgBQAAAAgBAAQAAAAgBABQAAAAAAAAIgEABIABAAQgFgCgKACIAAgBIgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAgBIgDABQgNgCgEABQAAAAgBgBQAAAAAAAAQAAAAAAAAQABAAAAgBIgOACIAAgCQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIACgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDABIABgCQAAAAgBAAQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgBACQgEABgEgBQAAAAgBAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIADABQgBgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIACgBIgIABIACgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIgDgBIABADIgBAAQAAAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAIgFAAIAAgBIgFACIgBgCQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAABAAAAQAAAAgBABQAAAAgBAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAgBAAIgCAAIgBgCIgCABIgBABIgDgCQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgCACIABgCIABgBIgCgBIgEADIgDgCIABAAIgBAAIAAAAIgFABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAABQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgBAAIABgJIADgCQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAABAAIADABIADgBIABABIACABQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgCIABABIAAACIADgCIABABIABgBIABACIADgCQAAAAABABQAAAAABAAQAAABAAAAQAAABAAABQAKgBAFABIgBAAQAEACAHgCQAGgCAEACIgBAAQABAAABAAQAAAAABABQAAAAAAAAQAAAAAAAAIADgBIAEAAIgCAAIACACQABgCAEAAIAHgBQAAABAFADIACgCIAEAAIgFAAIAAgBIAAgBIAEAAIADABIABAAIAAAAQACABAHgDQgBABAAAAQAAAAAAABQgBAAABABQAAAAABABIgGgBIABABIAEAAIAFAAQgBAAAAABQABAAAAAAQAAAAABAAQAAAAABgBQAAAAAAAAQACACADgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIgBABIACAAIACAAQgBAAABAAQADAAACgCIAAABQAHgCAAABQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAFABIgBABQACgBAMABIABACQABAAAAAAQAAAAABAAQAAgBAAAAQABAAAAgBIADgCIgBABIALABIAAABIAEgBQACACAGgBQAIAAADACIAAgDQAFAAABACIAAAAQAAABAAAAQAAAAAAAAQABAAABAAQAAAAABAAQABAAAAgBQABAAAAAAQAAAAAAgBQAAAAgBAAIAKABQAHAAACACIAIgCIAJAAIAAAAQAGACAAACIAGgCQAEgBADABIgBAAIAEAAIAAAAIADAAIAAABQACABAGgBIAJgBIgBACQACgCAEAAIAGAAIgCABIAEAAQABABAAAAQABAAAAAAQABAAABAAQAAAAABAAIgDgCQABABABAAQAAAAABAAQAAgBAAAAQAAAAAAgBIABACIACABIAAAAQgBAAAAABIAFACIACAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAIAJABQAGABADgBQABABAFABQABAAABAAQAAAAABABQABAAAAAAQAAAAAAAAQADAAACgBIAAAAIAEAAIgGABIAIAAIAAAAIADAAIACAAIgBAAQAFAAAEgBIAAABIACgBIADABIgDAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQABAAAAgBQAAAAAAAAQAAAAAAAAIAAABQAHgBACAAIAAAAIAFAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIAAAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQABABAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAAAAAIAAAAIAIAAQACABAFAAQAFAAACACIAAgBIABgBIAAABIACgCQABAAAAABQAAAAABAAQAAAAABAAQABgBABAAIACAAIgBABIgBABIAEgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIACABIADgBIABAAQABAAAAAAQAAABABAAQAAAAAAAAQAAAAAAABQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBIgBAAIAGgBIAFAAIAAADIAEAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAIgFAAIAEgBIgGAAIACgBIAAAAIADAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAIABACIAEABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIgBABQABAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAIgBgBIADAAQABAAAAgBQABAAAAAAQAAgBgBAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQgBAAAAABQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAIACABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAQABAAABAAIABgBIAAgCIACABIgBgBIADAAIgCAAIAHABQAAABAAAAQgBAAAAABQAAAAAAAAQABAAAAAAIACAAIABACIACgBIADAAIgBgBIAJABQgBgBAAAAQgBAAAAAAQAAAAAAAAQABgBAAAAQAAABAAAAQAAAAABAAQAAABABAAQABAAABAAIgBAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQACACADABQAAAAABgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBgBQACACAEgCQAFgBADABIgBACIAEAAIgCgBQABAAABAAQABAAAAAAQABAAAAABQAAAAgBAAIADAAIADAAIgCABQACABADgBQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIAIgBIAAABIAHAAIAGABIABAAIgBgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIADAAIABABIABgBIACAAIAAABIACABIABgCIAEACIgCAAIABABIABAAIABgBIgCABIACAAIgBACQAEAAgCgEQADABAFgBIAAABIACgBIACAAIgCACIAGgBIAIACIAHgBIADABQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIABABIgBABIADAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABIABgBQABABAFAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAgBIABABIABgBIACAEQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBIADgBIAAABIACAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABIgBABIACgBIAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIADgBIgBAAIABAAIgBACIABAAIAAAAIgCABIAAgBQgDABgDgCQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAgBAAIgIADQgDABgEgBIgGgBQABABAAAAQABAAAAAAQAAABgBAAQAAAAAAAAIgCgBgAFLAQgAFOANIAMABIgPACgAFOANIgDgBIgEABIgCgBIgBgBIABAAIAAgCIADAAIgCACIAFgBIgCACIACAAIAKgGIgHAHgAlKgFg");
	this.shape_32.setTransform(39.2,58.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F4F4F4").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_33.setTransform(35.7,58.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F4F4F4").s().p("AgEAAIgLgBIAPgCIgEADIAVAAIghAFg");
	this.shape_34.setTransform(74.1,60.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F4F4F4").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAg");
	this.shape_35.setTransform(69,49.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F4F4F4").s().p("AElAfIAAgCIgBABIAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQABgBAAAAQABAAAAAAQAAgBgBAAQAAAAgBAAIgCACIABgCQgHADgBgCIABgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAIAFgBIgCACIAFgCIgBACQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBIABACQACgBADAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAHgDIgFAAQgHABgDgDQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAIgHgCIAAAAIgLAAIAAgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABIgPAAIABAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAIgLgBIAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgBgCIgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAIgDABIgEAAIAAgCIgEAAIgDgBIgCAAIgBABIACABIgEAAIACAAIgHAAIABABIgCAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgDgBgDAAIgHABIABAAQgDgBgDACIABgCIgFACQABgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgBABQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBABAAIgDABQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAIgNgBIgBAAIgOABQAAgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIgSABQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAgBABQgEAAgBgBQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgCABIgDAAIgIgBQAAABAAAAQAAAAgBAAQAAAAgBAAQgBAAgBAAIAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgDABQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgEAAIABgBIgMAAIgMgBIACgBQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAIgEACQgWgFgKAAIAAABQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIAAABQgCgBgHAAQgHAAgBgCIgFAAQgEgBgDABQABgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgFABQgDABgGgCQgHgCgDAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIAAABIgLAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAIgCAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgKgBIgDABIgMgBIAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgCAAIAAAAIgCAAIABAAIgBgCIAAABIgBgBIgBACIABAAIgPAAIABgBQgGAAgCgBIAAABIgCAAQAAAAAAAAQAAAAAAAAQAAgBgBABQAAAAgBAAIACgBIgGABIgCgCIgEgBIABABIgCABIgBgCIgCABIAAgBQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAIgIgDQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBgBAAABQgBAAAAAAQgBAAAAAAQgCgBgGgBIgLgBIABAAQgBgBAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAIABAAQgFgDgJADQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgCABIgRgDQAAAAgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAIgNABIgBgCQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAgBAAQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABIgDABIABgCQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBACIgIAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIADABQAAAAgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAIgGABIAAgBIgBAAIABgBIgDAAIAAACQgDACgGgBIAAgBIgFACIgBgCQAAAAAAAAQAAAAAAAAQAAgBgBABQAAAAgBAAIAAACQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAgBAAIgBAAIgCgCIgCAAIgBACIgCgDQAAAAAAABQAAAAAAAAQgBAAAAAAQAAABgBAAIgCABIABgCQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgEADIgDgCIgBAAIgEAAQgBAAgBAAQgBAAAAABQgBAAAAAAQAAAAgBABQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBAAABAAQAAgBAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAgBAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAIgDAAQgBABgEAAIABgBIgCgCQgBAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABIAAABIgBgBIAAgBIgDACIgBgCIgBAAIAAABIAAAAIAAgBIgBgBIgDACQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgEIACAAIgCgCIABgBIAEgBQABAAAAAAQABABAAAAQAAAAABAAQAAAAAAABIABACIAEgBIAAAAQABAAAAABQAAAAAAAAQAAAAABAAQAAgBAAAAQgBABAGAAIAAgBQACgBAEACQAEACACgBIACgBIABABIAFgBQAFACAJAAIAPACIgBgBQAEACAHgBQAGgCAEACIgBAAQABAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIACgBIAFAAIgCABIACABIAMgCQAAABAFADIACgCQAAAAABABQAAAAAAAAQABAAAAAAQABgBAAAAIgDAAIAAAAIgBAAIgBgBIABgBQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAABIACAAIABAAIABABIAIgCQgBABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIgFAAIAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIAFAAIgBABQABAAABAAQAAAAABAAQAAAAAAgBQAAAAAAAAIACABIADABQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAIgBAAIACAAIACAAQgBABABAAQADAAACgCIAAABQAHgCAAABQAAgBAIABIgBABQAFgCAJADIABACQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBIADgCIgBABIAKABIAAACIAEgBQACACAGAAQAIgBACACIABgCQAFABABABIgBAAQAAAAABAAQAAABAAAAQABAAAAAAQABAAABgBQAEAAgDgBIAKABQAGABACABIARgBQAGACAAACIAGgBQAEgBADABIgBAAQAAAAABABQABAAAAAAQABgBAAAAQAAAAABAAIAAABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABgBIgBABQADABAFgBIAJAAIAAACQABgCAEAAIAGAAIgCABQABAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAAAIgCgCQABAAABAAQAAABAAAAQAAgBAAAAQAAAAAAgBIADACIgBABQgBAAAAABIAFACIACAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBgBIAJABIAIABQABABAFABQAFAAgBABQAFAAADgBIgCAAQABAAAFAAIgHABIAIgBIABABIACABIACgBIAAAAQAEAAAEgBIAAAAIACAAIACABIgCAAIADADIACgCIAAgBQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAQAJgBABgBIAAABIAIgBIgBABQABAAAAAAQAAAAABAAQAAAAABAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABIAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIAAAAIAIAAIAHACQAFAAACACQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIABAAIAAAAIACgBQABAAAAABQAAAAABAAQAAAAABAAQABgBABAAIACAAIgBABIgBABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBIAEgBIACACIACgBIACgBIACACIACAAIACAAIgBgBQACABAEAAIAFAAIAAACIADABQABAAAAAAQABgBAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIgEAAIADgCIgFABIACgBIgBgBIADAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIAAABIABABIADAAQABABAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIgBABIAEgBIgCgBIAEAAIACgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAAABIACAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAABAAQAAABAAAAQABAAABAAQAAAAABAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBIABABIgBgBIABAAIAHABQAAABAAAAQgBAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAgBABIACgBIAEAAIgBgBIAIABQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAABAAIAEACIAAgBQAAAAAAABQABAAAAAAQgBAAAAAAQAAAAgBAAIgBAAIgBABQAAAAAAABQABAAAAAAQAAAAAAAAQABABAAAAIACgBIAAgCIAEAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAIAGADQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgBgBQACACAEgBQAFgBADABIgBABIAEABIgCgBQABAAABAAQABAAAAAAQABAAAAABQAAAAgBAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAIgBABQABAAAAABQABAAABAAQAAAAABAAQABgBAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQABAAAAAAIAIgBIAAABIAHABQAEABADgBQAAgBAAAAQgBAAABAAQAAAAAAAAQABAAAAAAIAEgBQAAABAAAAQAAAAAAAAQAAAAAAABQABAAAAAAIACgCIABACIABAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIADACIgCAAIABABIACAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQAEAAgCgEQADABAFgBIAAABIACgBIACABIgCABQAGAAAAgBIADABIACAAIACABIAAAAIABABIAFAAIAAADIgBACIAAgBIgEAAIgCABIAAgBIABgBIgBAAIgCABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIABABQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgEAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgBAAIgBABIgCgDIgBAAIgBACIgCABIgCAAIgDABIgBAAgAjGgLIACAAIgCgBg");
	this.shape_36.setTransform(38,46.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F4F4F4").s().p("AAAAAIAAAAIAAAAg");
	this.shape_37.setTransform(13.2,45.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F4F4F4").s().p("AAAAAIAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_38.setTransform(38.6,46.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F4F4F4").s().p("AABABQgBABgCgBIACgBQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIADgCQAAABAAAAQAAAAAAAAQAAAAgBAAQAAABgBABg");
	this.shape_39.setTransform(65.1,49.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,110.6,61.7);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AjIEPIgWn6IBmhsIDYgKIBqBhIAVH2IhiBiIjYAKgAg5i3IAQF0IBigFIgQlzg");
	this.shape_1.setTransform(106.6,35.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AjJEPIgVn6IBmhsIDZgKIBpBhIAVH2IhiBjIjYAJgAg4i3IAPFzIBigDIgPl1g");
	this.shape_2.setTransform(56.5,37.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("Ah6DAIAygDIgQl0IgyACIgHijIDVgJIAVIYIAygDIAHCjIkFAMg");
	this.shape_3.setTransform(14.6,39.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,74.9);


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


(lib.ultrasonido = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(-0.4,-0.5,1,1,0,0,0,72.5,42.2);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",2,2,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.7,-54.6,175,113);


(lib.min65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAQQgHgHAAgJQAAgIAHgHQAHgGAHAAQAJAAAGAHQAHAGAAAIQAAAIgHAIQgGAGgJAAQgHAAgHgGgAgKgLQgGAFABAGQAAAHAEAGQAFAEAGAAQAHAAAEgEQAGgGgBgHQABgGgGgFQgFgFgGAAQgFAAgFAFg");
	this.shape.setTransform(85.6,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAPIAFAAQAFAKAKAAQAQAAAAgQIAAgDIgBAAQgEAIgMAAQgIAAgGgGQgHgGAAgIQAAgKAHgHQAGgGAIAAQALAAAFAJIABAAIAAgIIAFAAIAAAjQAAAKgEAFQgFAIgMAAQgQAAgEgPgAgKgTQgGAGAAAGQAAAHAGAEQAEAFAGAAQAIAAAEgGQAFgDAAgHQgBgHgEgFQgFgFgHAAQgGAAgEAFg");
	this.shape_1.setTransform(80.3,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIAAQAMAAAGALQAEAGAAAEIAAABIgmAAQABAHAFAFQAFAEAFAAQAMAAADgKIAGAAQgGAPgPAAQgHAAgHgGgAgJgMQgFADgCAIIAgAAQgBgIgGgDQgEgEgFAAQgEAAgFAEg");
	this.shape_2.setTransform(75.2,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAPQgDgEAAgJIAAgXIAFAAIAAAXQAAAHADADQAEAEAFABQAFgBADgDQAFgEAAgIIAAgWIAFAAIAAApIgFAAIAAgGIAAAAQgEAHgJAAQgIABgGgHg");
	this.shape_3.setTransform(70.2,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAfQAHgBAAgMIAAgmIAGAAIAAAmQAAAKgFAFQgDADgFAAgAABgZIAAgKIAGAAIAAAKg");
	this.shape_4.setTransform(66.6,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANAVIAAgVQAAgIgEgEQgEgEgFABQgFgBgDAEQgEAFAAAGIAAAWIgFAAIAAgpIAFAAIAAAGIAAAAQAFgGAHgBQAHAAAGAGQAFAFABAKIAAAVg");
	this.shape_5.setTransform(61.6,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAQQgHgHAAgJQAAgIAGgGQAHgHAIAAQANAAAGALQADAFAAAFIAAABIglAAQABAHAEAFQAFAEAFAAQALAAAEgKIAGAAQgCAHgGADQgGAFgHAAQgHAAgHgGgAgJgMQgFADgBAIIAfAAQgBgIgFgDQgEgEgGAAQgEAAgFAEg");
	this.shape_6.setTransform(56.6,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAQQgGgHAAgJQAAgIAHgHQAGgGAIAAQAJAAAHAHQAGAGAAAIQAAAIgGAIQgHAGgJAAQgIAAgHgGgAgKgLQgFAFgBAGQAAAHAGAGQAFAEAFAAQAHAAAEgEQAFgGAAgHQAAgGgFgFQgFgFgGAAQgFAAgFAFg");
	this.shape_7.setTransform(49.3,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AANAcIAAgXQAAgFgEgFQgDgEgGABQgFgBgDAEQgEAFAAAEIAAAYIgGAAIAAg3IAGAAIAAAUQAFgGAHgBQAHAAAGAGQAGAFAAAIIAAAXg");
	this.shape_8.setTransform(44.3,15.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAQQgHgIAAgIQAAgIAHgHQAHgGAHAAQAQAAAGAOIgGAAQgFgJgLAAQgFAAgFAFQgFAFAAAGQAAAHAFAFQAFAFAFAAQALAAAFgJIAGAAQgIAOgOAAQgIAAgGgGg");
	this.shape_9.setTransform(39.4,16.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNAPQgEgEgBgJIAAgXIAGAAIAAAXQAAAHADADQAEAEAFABQAFgBAEgDQAEgEAAgIIAAgWIAGAAIAAApIgGAAIAAgGQgEAHgJAAQgJABgEgHg");
	this.shape_10.setTransform(34.4,16.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAaAVIAAgXQAAgNgMAAQgMAAAAANIAAAXIgDAAIAAgXQAAgNgMAAQgMAAAAANIAAAXIgFAAIAAgpIAFAAIAAAGQAEgHAIAAQAJAAAEAIQAFgIAJAAQAIAAAEAGQAFAEAAAJIAAAXg");
	this.shape_11.setTransform(28.3,16.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJAdIAHgRIgRgoIAGAAIANAhIAOghIAGAAIgXA5g");
	this.shape_12.setTransform(20.3,17.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPAQQgGgHAAgJQAAgIAGgGQAHgHAIAAQALAAAGAJIAAgIIAFAAIAAApIgFAAIAAgHQgGAIgLAAQgIAAgHgGgAgLgLQgFAFAAAGQAAAHAFAFQAFAFAGAAQAHAAAFgFQAFgFAAgHQAAgFgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_13.setTransform(15.4,16.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AANAcIAAgXQAAgFgEgFQgEgEgFABQgEgBgEAEQgEAEAAAFIAAAYIgFAAIAAg3IAFAAIAAAUQAFgGAHgBQAHAAAGAGQAFAFAAAIIAAAXg");
	this.shape_14.setTransform(10.4,15.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AANAVIAAgVQAAgIgEgEQgEgEgFABQgEgBgEAEQgEAEAAAHIAAAWIgFAAIAAgpIAFAAIAAAGQAEgGAIgBQAIAAAFAGQAFAFAAAKIAAAVg");
	this.shape_15.setTransform(3.4,16.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAZQgDgFAAgJIAAgWIAFAAIAAAWQAAAHADAEQADAEAGAAQAFAAAEgDQAEgFAAgIIAAgVIAGAAIAAApIgGAAIAAgGQgDAHgKAAQgHAAgHgGgAgFgVIAOgJIACAFIgOAIg");
	this.shape_16.setTransform(-1.4,15.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAQQgGgHgBgJQABgIAGgGQAHgHAIAAQALAAAFAJIABAAIAAgIIAFAAIAAApIgFAAIAAgHIgBAAQgFAIgLAAQgIAAgHgGgAgLgLQgFAFAAAGQAAAHAFAFQAFAFAGAAQAHAAAFgFQAFgFAAgHQAAgGgFgFQgEgFgIAAQgFAAgGAFg");
	this.shape_17.setTransform(-6.5,16.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FC0D1B").s().p("AgcAjIgFgFIAAgHQgHgJgBgMQgBgBAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAIABgIQACgKAHgJIAAABQAHgGAKgFIACgDIAIgCQAIgBAJACIADACQAIADAIAGIAAgBQANAMABANQABADgDACQAAAIgFAKIABAIQgGALgMAFIgHgCQgNACgGAAIgHADQgIgDgHgGgAgHAKIgIAQQAFAJAEAEQAIABALgCIAHgPIgLgPgAgoADQACAKAFAJIARADIAIgQIgIgOIgOgDgAAPgIIgFAQIALAPIAPgGQAEgHABgLIgLgLgAgggZIACAPIAPADIAOgMIgBgNQgHgDgHAAQgKAFgGAFgAgBghIABAOIAOAKIAPgEIABgQIAAAAQgJgHgIgCg");
	this.shape_18.setTransform(65.7,0.1);

	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(65.8,0.1,1,1,0,0,0,8,7.9);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",1,1,4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhFCVQgHgFgCgJQgCgJAFgIQAGgJAKgBQgUgTgDgdQgDgdAQgYIAvhEIASAMIAEgJIgQgMIA1hSIAvAeQgTAWgPAYQgfAxAUAOQAbASAHAgQAGAggSAbQgQAYgcAIQgaAIgagMQADALgGAIQgFAIgJABIgEABQgHAAgGgEgAg7B2QgFABgDAEQgDAFABAFQABAFAEADQAFAEAFgCQAGgBADgEQADgFgBgFQgBgFgFgEQgDgCgDAAIgEABgAgNAGQgSAEgLAQQgLAQAEATQADATAQALQAQALARgEQATgEALgQQALgQgEgTQgEgTgQgLQgMgHgLAAIgKAAg");
	this.shape_19.setTransform(66.3,-5);

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75.3,3.3,1,1,0,0,0,3.8,3.6);
	this.instance_1.alpha = 0.5;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgnBjQgdgSgFgrIAVAAQADAZAPAPQAPAOATAAQAWAAAQgSQAOgRABgWQAAgYgQgPQgPgRgWAAQgYAAgUAXIgRgEIAUhtIBhAAIAAAUIhQAAIgLA9QATgKARAAQAfAAAVAWQAWAUgBAhQAAAfgUAWQgWAYggAAQgVAAgSgNg");
	this.shape_20.setTransform(79,-4.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhgBRQgIgKgDgKQgCgIAAgRIAAhWIAsAAIAABPQAAANADAGQAFALAPAAQAaAAAAgeIAAhPIA9AAIAAgxIAsAAIAAAxIAVAAIAAAiIgVAAIAABvIgsAAIAAhvIgTAAIAABvIgoAAIAAgPIgBAAQgJAUgdAAQgdAAgOgTg");
	this.shape_21.setTransform(47.2,-1.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAYBLIAAhOQAAgMgDgHQgFgLgQAAQgXAAAAAeIAABOIgsAAIAAiQIApAAIAAAPIABAAQANgVAZAAQAWAAAQANQARAPAAAhIAABZg");
	this.shape_22.setTransform(28.4,0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVAQIAAgfIAqAAIAAAfg");
	this.shape_23.setTransform(18.3,-9.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVBJIAAiRIAqAAIAACRg");
	this.shape_24.setTransform(18.3,0.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ABEBLIAAhMQAAgOgCgGQgFgMgPAAQgZAAAAAeIAABOIgqAAIAAhOQAAgegVAAQgZAAAAAgIAABMIgsAAIAAiQIApAAIAAAPIAAAAQAMgVAdAAQAcAAAMAaQARgaAeAAQAYABAOAPQALAKADALQADAKgBAZIAABOg");
	this.shape_25.setTransform(3.8,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_1},{t:this.shape_19},{t:this.instance},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-20.4,96.7,40.8);


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


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F2F2F2").s().p("AgOBLQgJgDgGgFQgIgGgFgIQgCgFgBgFIgCgMIAdAAQAAAGACAEIAFAGQAFAFAGAAQAIgBAGgFQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgEgCQgEgDgPgGQgkgKAAggQAAgJADgIQAEgHAGgHQAGgFAIgEQAIgDAHAAQAHAAAHACQAIADAGAFQAHAFAFAJQAEAIABALIgdAAIgCgIQgBgEgDgCQgEgDgGAAQgFAAgFAEQgEAFAAAHQAAAEACAEQABACAEADQAEADAMAFIALADQAIAEAFAFQAHADAEAIQAEANAAAHIgBAMIgDAKQgEAJgHAGQgHAFgJADQgIADgJAAQgGAAgIgCg");
	this.shape_47.setTransform(146.6,169.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F2F2F2").s().p("AAqBnIgPgnIg0AAIgQAnIgfAAIA+iUIAUAAIA/CUgAARAmIgRgsIAAAAIgQAsIAhAAgAgXhLIArgbIALAVIgrAZg");
	this.shape_48.setTransform(133.4,167);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F2F2F2").s().p("AAyBLIAAhvIgBAAIgmBvIgWAAIgmhvIAAAAIAABvIgcAAIAAiVIAmAAIAnBwIAAAAIAohwIAmAAIAACVg");
	this.shape_49.setTransform(116.2,169.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F2F2F2").s().p("AgOBMIgPgEIgNgIIgMgJIgKgLIgHgOQgDgHgBgHQgCgIAAgIQAAgGACgIIAEgQQADgHAFgFQAEgHAFgFIAMgJQAGgFAHgCIAPgGIAOgBIAPABIAPAGQAHACAGAFIAMAJQAFAFAEAHQAFAFADAHIAEAQQACAIAAAGQAAAIgBAIIgFAOIgHAOIgKALIgMAJIgNAIIgPAEQgHABgIAAQgHAAgHgBgAgSgvQgJAFgHAHQgHAHgEAJQgEAKAAAJQAAAKAEAJQADAKAHAHQAHAIAJADQAKAEAJABQAKgBAKgEQAJgDAHgIQAHgHADgKQAEgJAAgKQAAgJgEgKQgEgJgHgHQgHgHgJgFQgJgEgKAAQgJAAgJAEg");
	this.shape_50.setTransform(91.6,169.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F2F2F2").s().p("AgYB9QgOgFgLgJQgNgJgIgOQgEgHgCgJQgDgJAAgKIAwAAQABAJADAGQADAGAFAFQAJAHAKAAQAOgBAKgIQAFgEACgGQADgGAAgHQAAgJgDgGQgDgGgGgFQgHgFgbgKQg7gRAAg0QAAgPAFgNQAFgNAKgKQAKgKANgFQAOgFAOAAQALgBAMAEQAMAEALAIQALAKAHAMQAIAOABASIgvABQgBgIgCgGQgDgFgEgEQgHgFgJAAQgLAAgHAHQgHAIAAALQAAAHADAGQACAFAGAEQAHAEAVAIIATAHQANAFAJAIQALAHAGANQAIAUAAAOQAAAKgCAIIgFARQgGAOgMALQgLAJgPAFQgOAFgPABQgLAAgNgEg");
	this.shape_51.setTransform(133.3,16.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F2F2F2").s().p("AhCh6ICDgCIAAAsIhVABIABA8IBRgBIAAAqIhRABIAAA6IBWgBIAAArIiDABg");
	this.shape_52.setTransform(115.1,16.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F2F2F2").s().p("Ahkh6IA0AAIBmCxIABAAIgCiyIAugBIACD3IgzAAIhnixIgBAAIACCyIguABg");
	this.shape_53.setTransform(93,16.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F2F2F2").s().p("AhCh6ICDgBIAAArIhVABIABA9IBRgCIAAApIhRABIAAA7IBWgBIAAArIiDACg");
	this.shape_54.setTransform(70.9,16.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F2F2F2").s().p("AgWh6IAsgBIACD2IgsABg");
	this.shape_55.setTransform(56.6,17.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F2F2F2").s().p("AgWhPIguAAIAAgrICIgBIAAArIguAAIACDMIgsAAg");
	this.shape_56.setTransform(43.8,17.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F2F2F2").s().p("AgXh7IAtAAIACD3IgsAAg");
	this.shape_57.setTransform(20.8,17.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F2F2F2").s().p("AgYB9QgOgFgLgJQgNgJgIgOQgEgHgCgJQgDgJAAgKIAwAAQABAJADAGQADAGAFAFQAJAHAKAAQAOgBAKgIQAFgEACgGQADgGAAgHQAAgJgDgGQgDgGgGgFQgHgFgbgKQg7gRAAg0QAAgPAFgNQAFgNAKgKQAKgKANgFQAOgFAOAAQALgBAMAEQAMAEALAIQALAKAHAMQAIAOABASIgvABQgBgIgCgGQgDgFgEgEQgHgFgJAAQgLAAgHAHQgHAIAAALQAAAHADAGQACAFAGAEQAHAEAVAIIATAHQANAFAJAIQALAHAGANQAIAUAAAOQAAAKgCAIIgFARQgGAOgMALQgLAJgPAFQgOAFgPABQgLAAgNgEg");
	this.shape_58.setTransform(6.3,17.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F2F2F2").s().p("AgYB+QgOgFgLgJQgNgJgJgOQgEgIgCgIQgCgJgBgKIAxgBQABAJADAHQADAGAFAEQAIAIALAAQAOgBAKgJQAFgEACgGQADgGAAgGQAAgKgDgGQgDgGgGgFQgHgFgbgKQg7gRgBg1QAAgPAFgNQAGgNAKgKQAJgKAOgFQAOgGAOAAQALAAALAEQAOAEAKAIQAMAKAHAMQAIAOABATIgwAAQgBgIgCgGQgDgFgEgDQgHgGgJABQgLAAgIAHQgGAHgBALQABAIADAFQADAGAFADQAHAFAVAHIATAHQANAGAKAIQAKAHAHANQAIAUAAAOQAAAKgCAJIgFAQQgGAPgMALQgMAJgOAFQgOAFgQABQgLAAgNgEg");
	this.shape_59.setTransform(151.2,141.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F2F2F2").s().p("AgYB/QgNgCgMgFQgLgFgKgHQgLgHgJgJQgJgIgIgLQgHgKgEgLQgGgMgCgNQgDgMgBgOQAAgMADgNQACgNAGgMQAFgLAHgLQAHgLAJgJQAJgIAKgHQAKgHAMgGQAMgFANgCQANgDAMAAQAMAAANACQANADALAFQAMAEALAHQAKAHAJAJQAJAJAHAKQAIALAEALQAGAMACANQADANABANQAAAMgDANQgCAMgFAMQgFAMgIALQgGAKgKAJQgHAJgLAHQgKAHgMAFQgNAFgMADQgNACgOABQgLAAgNgDgAAAhVQgRAAgQAGQgOAHgMANQgMAMgGAPQgGARAAAPQAAARAGARQAIAPALAMQAMAMAOAGQARAIAPAAQASgBAQgHQAPgHAMgMQALgMAGgQQAGgQAAgQQAAgRgHgQQgGgQgMgLQgMgMgPgHQgPgGgQAAIgBAAg");
	this.shape_60.setTransform(127.4,141.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F2F2F2").s().p("AhlhaIA1AAIBnCzIABAAIgCi1IAuAAIACD4IgzABIhpizIAAAAIABC0IguAAgAgEh4QgJgCgIgBQgJAAgIADIgKAFIgSgbQARgOAWgCQAIABATAFQANAEAIgBQANAAAMgHIATAaQgWAQgRAAIgBAAQgIAAgVgGg");
	this.shape_61.setTransform(99.7,138.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F2F2F2").s().p("AgTh8IAiAAIBrD3IgzABIgbhBIhYABIgaBBIgzAAgAgdAQIA4gBIgbhKIgBAAg");
	this.shape_62.setTransform(73.8,141.9);

	this.instance = new lib._65();
	this.instance.parent = this;
	this.instance.setTransform(70.2,84.3,1,1,0,0,0,56.9,77.9);
	this.instance.shadow = new cjs.Shadow("rgba(33,57,67,0.149)",0,5,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,1.6,245,181.8);


(lib._65años = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_3();
	this.instance.parent = this;
	this.instance.setTransform(39.5,0.5,1,1,0,0,0,120.5,92.4);
	this.instance.shadow = new cjs.Shadow("rgba(28,40,7,0.498)",0,3,9);

	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.3,-12,1,1,0,0,0,75.2,73);
	this.instance_1.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143,-97.3,269,205);


(lib._100cigarros = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ENTUVIDA();
	this.instance.parent = this;
	this.instance.setTransform(2.2,49.6,1,1,0,0,0,57.1,16.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,0,0);

	this.instance_1 = new lib.YHASFUMADOMÁSDE();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.5,-94.6,1,1,0,0,0,70,21.7);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,0,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AgrBaQgSgSgBgeIAigCQAFAlAZgBQAMgBAIgJQAIgIgBgNQAAgQgOgIQgFgDgZgIQgtgNgCgsQgBgaARgQQAQgQAZgBQAagCAQARQAPAPADAdIghABQgGgdgVAAQgMABgGAIQgGAHABAMQAAAOAOAHIAeALQAtAOACAqQABAdgQASQgRASgdABIgCAAQgbAAgQgRg");
	this.shape.setTransform(58.6,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AgzBRQgXgcgCgyQgCgwAUgeQAUgeAigCQAhgBAXAcQAXAdACAxQACAwgUAeQgUAegiABIgEABQgfAAgVgbgAgChLQgSABgLATQgLAUACAkQACAnANATQAMASAQgBQASgCAKgSQAMgVgCgkQgCglgNgUQgLgRgPAAIgCAAg");
	this.shape_1.setTransform(41.6,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AhIhlIA/gDQAegCASAUQARARABAcQABAYgLAQQgMAPgYAFIA+BQIgqACIg9hZIgBAAIAEBcIgkACgAgRhIIgSABIADBCIAVgBQAPgBAIgHQAJgIAAgRQgBgigiAAIgDABg");
	this.shape_2.setTransform(24.6,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AhIhlIA/gDQAdgCATAUQAQASABAbQABAZgLAQQgLAOgYAFIA+BRIgqABIg+hZIAAAAIAFBcIglACgAgQhIIgTABIADBCIAUgBQAjgCgCgeQgBgUgLgIQgIgGgNAAIgEAAg");
	this.shape_3.setTransform(7.7,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AgYhoIAdgBIBLDMIglABIgUg2IgyACIgPA5IglABgAgWAQIAjgBIgThBIgBAAg");
	this.shape_4.setTransform(-9.5,23.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgyBUQgXgbgCg2QgDgvAUgeQAUgeAmgCQAegCAUAVQATATADAgIgkACQgKgqgaACQgrABAEBLQADBMArgCQAkgCgCgyIgyACIgBgeIBVgEIABAaQACAogQAXQgSAZgkACIgEAAQghAAgVgYg");
	this.shape_5.setTransform(-27.8,24.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AgVhmIAigCIAJDPIgiACg");
	this.shape_6.setTransform(-41.4,24.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AhKADQgCgxAVgeQAUgdAigCQAhgBAVAYQATAWABAkIgkABQgCgbgJgMQgJgLgRAAQgRABgLASQgMAUACAlQADBNAngCQARgBAIgLQAIgLADgcIAkgCQAAAkgRAXQgSAYgiABIgGABQhGAAgFhpg");
	this.shape_7.setTransform(-55.3,25.5);

	this.instance_2 = new lib.Group_1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.4,-34,1,1,0,0,0,64.5,37.4);
	this.instance_2.shadow = new cjs.Shadow("rgba(33,57,67,0.149)",0,4,2);

	this.instance_3 = new lib.Group_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.7,87.1,1,1,0,0,0,55.4,30.8);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,0,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.8,-118.9,201,244.1);


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
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

	// Layer 10
	this.instance = new lib.webpage("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(281.2,251.3,1.53,1.53,0,0,0,39.5,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73).to({_off:false},0).to({x:82.3},3).wait(1).to({startPosition:0},0).wait(22).to({startPosition:0},0).wait(1));

	// Layer 9
	this.instance_1 = new lib.min65("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-107.6,208,1.4,1.4,0,0,0,40,0.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71).to({_off:false},0).to({x:80.9},3).wait(1).to({startPosition:0},0).wait(25));

	// Layer 8
	this.instance_2 = new lib.AAA("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(273,121.1,1.25,1.25,0,0,0,39.5,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(68).to({_off:false},0).to({x:80,y:124.1},2).wait(1).to({startPosition:0},0).wait(29));

	// Layer 7
	this.instance_3 = new lib.INFORMATE("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(82,-59.8,1.12,1.12,0,0,0,39.6,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(67).to({_off:false},0).to({x:85.3,y:55.3},2).wait(1).to({startPosition:0},0).wait(30));

	// Layer 6
	this.instance_4 = new lib.ultrasonido("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-101.6,134.6,1,1,0,0,0,-0.5,-0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(43).to({_off:false},0).to({x:82.3},3).wait(1).to({startPosition:0},0).wait(18).to({startPosition:0},0).to({x:287.2},3).to({_off:true},1).wait(31));

	// Layer 5
	this.instance_5 = new lib._100cigarros("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-116.7,146.6,1,1,0,0,0,4.5,0.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).to({x:83.7},2).to({startPosition:0},1).wait(17).to({startPosition:0},0).to({x:266.2},3).wait(1).to({startPosition:0},0).to({_off:true},1).wait(54));

	// Layer 4
	this.instance_6 = new lib._65años("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(118.7,-155.5,0.9,0.9,0,0,0,39.6,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:133.5},3).to({startPosition:0},1).wait(16).to({startPosition:0},0).to({x:362.5},3).to({_off:true},1).wait(76));

	// Layer 3
	this.instance_7 = new lib.Tween1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(95,817);

	this.instance_8 = new lib.Tween2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(95,474);
	this.instance_8._off = true;

	this.instance_9 = new lib.SRGORE();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-45,298);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},1).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true,y:474},3).wait(97));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:false},3).to({_off:true,x:-45,y:298},1).wait(96));

	// Layer 1
	this.instance_10 = new lib.FONDO160X600();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.4,55.7,251.7,1199.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;