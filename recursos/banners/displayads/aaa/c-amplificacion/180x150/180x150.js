(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 180,
	height: 150,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"./FONDO180X150.jpg", id:"FONDO180X150"}
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



(lib.FONDO180X150 = function() {
	this.initialize(img.FONDO180X150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,150);


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


(lib.YSUFRESDE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrhEIBNgFIABATIg3AEIADAqIA3gEIABASIg3AEIADArIA4gEIABAUIhMAFg");
	this.shape.setTransform(111.2,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9hEIAugEQAmgCAVAYQARAVABAYQABANgEAOQgEAPgHAIQgUAXghACIguADgAgNg1IgaACIAIBoIAZgCQAUgCANgMQAQgPgCgZQgBgUgNgOQgPgQgVAAIgEAAg");
	this.shape_1.setTransform(98.2,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZBBQgQgLgCgWIAVgCQABAJAEAGQAHALAMgBQAKgBAGgHQAGgHgBgLQgBgLgIgFQgEgDgKgDQgXgHgJgFQgJgJgCgRQgBgOAJgNQALgOASgBQAQgBANAJQAMALABASIgVACQAAgMgIgFQgFgDgGAAQgJABgFAGQgFAHABAHQAAAJAIAFIANAFQAVAHAHADQAQAJABAXQABASgLANQgLANgUACIgDAAQgOAAgLgJg");
	this.shape_2.setTransform(79.9,12.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrhDIBMgGIACATIg3AEIADArIA2gEIACARIg3AEIAEAsIA2gEIABATIhLAFg");
	this.shape_3.setTransform(69.4,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzhFIAtgDQAXgCAOALQAOANABAUQACAZgQALQgKAIgOACIAsAyIgaACIgyg/IAEBDIgVABgAgGg1IgXACIAEA1IAPgBQAlgCgCgbQAAgLgIgHQgIgHgMAAIgDAAg");
	this.shape_4.setTransform(58.1,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmhEIBHgFIABATIgxAEIADArIAygDIABARIgyADIAFA+IgWACg");
	this.shape_5.setTransform(46.9,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaBBQgQgNgBgXIgHhgIAVgBIAHBfQABARALAHQAIAFAHgBQAJAAAHgGQALgJgCgRIgHhfIAVgCIAHBgQACAXgOAPQgOAOgTAAIgEABQgOAAgOgKg");
	this.shape_6.setTransform(35.2,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZBBQgQgLgCgWIAVgCQABAJAEAGQAHALAMgBQAKgBAGgHQAGgHgBgLQgBgKgIgGQgDgCgLgEQgXgHgJgFQgJgJgCgRQgBgOAJgNQALgOASgBQAQgBANAJQAMALABASIgVACQAAgMgIgEQgFgEgGAAQgJAAgFAIQgFAGABAHQAAAJAIAFIAMAEQAWAIAGADQARAJABAXQABASgLANQgLAOgUABIgDAAQgOAAgLgJg");
	this.shape_7.setTransform(23.8,16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCAWIg0hXIAYgCIAjBCIAbhGIAWgCIglBdIADA0IgUACg");
	this.shape_8.setTransform(6,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,2.7,115.1,22.3);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6EFF3").s().p("AAAAAIgEgCIAJAFg");
	this.shape.setTransform(23.9,122.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6EFF3").s().p("AAAAAQADgEAEgCQgBADgFADIgHAHQACgFAEgCg");
	this.shape_1.setTransform(118.3,106.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6EFF3").s().p("AAAgCQADAAgBAEIgEABQABgFABAAg");
	this.shape_2.setTransform(135.3,73.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6EFF3").s().p("AgBgBIAHABIgLACg");
	this.shape_3.setTransform(97.4,8.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C6EFF3").s().p("AAAgBQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAABg");
	this.shape_4.setTransform(88.6,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C6EFF3").s().p("AAAAAQADgDAAABIgCAEIgCABIgBAAQgBAAADgDg");
	this.shape_5.setTransform(45.5,33.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6EFF3").s().p("AAAAFIgFACIALgQQgGAKADAAQADAAgHAJQABgFAAAAg");
	this.shape_6.setTransform(40.3,39.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6EFF3").s().p("AgFAKQABgFAEgFIAGgKQAAADgGAHQgEAJAAACg");
	this.shape_7.setTransform(33,48.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C6EFF3").s().p("AitKRIgzgHQgEABgKABQgHABgBADIgmgFQgWgCgVgGIAAgBQgHACgNgGQgNgHgEABQAGgCgBgCIgQgDQAHABABgDQACgDgJgDQgIgBADADQABAAAAABQABAAAAABQAAAAgBAAQAAABgBAAIgCgHQgIgDgCADQgCAEAJAEQhAgXgfgVIAFgBQgMgGgNgKQgNgJgFgHIgDAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAABAAAAQgKgFABgDQAAgDgJgFQALAGABgBIgFgEIgegXQACgCgJgOQgHgNgKgLQgDABAFAJIgIgJIAAgLIgOgLIAFgDQgFgGgHgFQgFgEgEgGQgIgWgCgKIgDgYQgGAAgGgVQgFgWgEgDQgBgOgGgwQgGgtABgaIABAEQACgKgFgLQgEgMABgLIABAGQAGgbgDhLQAAABAAABQAAABABAAQAAABAAAAQABAAAAgBQACgCABgGQgBgBAAAAQAAAAgBgBQAAAAgBAAQgBAAAAABQgCABACgIQAAAAAAABQAAAAAAABQAAAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIgDgPQAVhOAIgmQAAgBABgBQAAgBAAAAQABgBAAAAQABAAAAABIACAEQAPhCAHgWIAGAAQACgFgBgHQgBgGAGgIIgBAFQgCAJAAADQAIgNgBgIQAAgJAFgMIADAJQAHgKABgIIgCgMQADgPALgHQANgJAHgSQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgBQAHgKAHgPQAHgNAJgMQAIgDgEAGQgEAFAIgEIgNAQQAHgGgFAJQgGAMADAAQAFgFAHgPIAMgZQACABgFAIQgEAGAFgBIAEgJIAAAEQAAABgBAAQAAABAAAAQAAABgBABQAAAAAAABQADgBADgFIAFgKQgEgDgEAAIACgBQADgKANgRQAPgTACgGQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAIACAAQADgEAGgKQAFgLAFgGQABgBAFACQADACAJgLIgEgFQgCgDAJgIIgEAGQgDAGAFgDQAGgIADAAQAFAAAGgEQACgEAHgGQAFgEgCgFQAFABACgBIAKgEQgEAAAIgKQAIgKgCgCQAEABgEAJQgDAHAJgDIAMgQQAHgJgBgEIAWgKIgCACQAIgHAVgNQAUgNADgHQABAFAUgKQATgKgIAKQAOgIAJgKQABAEAMgEQAPgGAFAAQACgEAKgEIAQgIQgGAEADACQAGgEADAAIAKACQAHgEgDgCQgEgDADgCQAIgBgBACQgBAFABAAIARgNQAGAAADADIAGgDIAHACIATgIQAUAAACAGQACAEgDAJIgLADQABAEANgCQADABgLAGQgMAGgJACQgRAEgCgFQgDgFgKABIgbANIgBgCQgDgBgCACIgDADQABgDgOAFIgWAIIAGACQgNAJgbAHIgSAEQgKAEgHAFIgNAOIgGgCIgJAKQgFAFgKAFQgjAQgtAoQgNAMgWAWIgjAjIAFgDQgaATgRAkIgPAdQgJAQgLAMIAAgEQgGAMAAgDQAAgFgGAHQACADgHAQIgLAaIADgLIgEACQgDACgCAEQABALgJAYIgNApQgDAAgJAMQgLAOgEAEIADAOQgFAIAAAPIAGgVIAAABIABgEIACgHQAEgFAAADQABAEACABIgFAPQgDAKgCABIgGANQAAAFgCAFIAAgCIgCACQgFALAAARIABAaQgCgJgEAFQgFAGgBgBIAJgkQgBABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgFAJgBAQQgCAUgDAMQgBgBAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAQgCAGABAGQABAEACADQgEABgEALQgDALAAAIIADAKQABAEgCAKIgCgHQgDAKACAHQACAHgCAHQABgEgCgBQAAAAAAAAQgBAAAAAAQAAABAAAAQgBABAAABQAAANACAGIAFAQIgEgDIADAeQABAQgDACQAFgBABATIAAAhQAAgEgEgCQAFAQACAdQADAgADANIgGAGQACAIAJAJQAKAIACAIIgFgFQAJAZAPAmIgFACIAJAMQAFAHAEAEQAAAJAHALIAJAMIAiAkQAHAHAMARIAIgFIARANQAKAIABAGIgDgCQgDADAIAEQAMAFACACQAEACAFgBQAEAAgDgDQAVAQAiAOIAcAMQAPAGAGAFQAWAEAfACIA3AEIgBABIAaAFQAQAEgBAFQAKAAAegGQAdgGAQABIgIADQAFABALgCIALgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgBACQAGABAFgCIAJgDIgCADQAKAAAOgDIAbgHIA1gRQgBAAgBABQgBAAAAAAQAAABAAAAQAAABAAAAIAEACQAHgHAZgKIAhgOIgIAGQAMgIAOAAQAOgBAMgJIgRADQAJgDAFgEQAFgDgDgCQAFgCAEACQAEABAKgEQABABgFAEQgFADAEAAIAdgIQACABALgIQgDgEAIgFQAHgEgJgBIAzgdQAbgQAQgQQAKgBAZgUQAWgTADAHQAXgWAHgTIgFAFIgDAGQABgEAJgMIAOgQIgXAoQAHgIALgQIANgVIAIABQADgHAHgEQAGgDACgJIgDABQAJgLAGgNQAGgPAGgJIACACIAIgOQAFgJAGgCIgKAOQADABAHgFIAKgIQAFgJgDgDQgDgDACgDQAAAAABAAQABAAAAAAQABAAAAABQAAAAAAAAIAAAIQAVgnADgUQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAFgJAGgTQAGgQAEgFIgBAEQAGgGAHgUQAFgQAGAAQACgCgCAHQgDAIAGgGQAHgLgCgJQgCgJAFgKIAAADIABABIAIgaIAHgcQAFgGAFgMIAGgWIAGgZQAEgNAGgHQgEAEAAgFIgBgHIAAABIABAAQABgGgBgEIgCgFQADgEAAgMQAAgMABgCQgDAAADgPQAAAJADABQADABABACQADgMgEgOQgDgPACgNIAFgNQgDgCgBgNQAAgLgBAAIADgHQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAIgBgRQABgKgDgCIgBAKQABgRgFgWQgGgXABgLIAKgBQABgHgFgPQgFgOABgHIgCAEIgEgHQAAADADAJIAEAOIgKgTIACAFIAIAbIgGgLIgDAFQgDgJAAgLQAAgKgFgKQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAQADgBAAgEQgFgIgCgPQgCgPgFgFIABACQABABAAAAQABABAAABQABAAAAAAQAAAAABAAIgHgMQgDgGgDgBIADAJIgGgIQgEgFgDgIQgFgFgEgBQgDAAADAGQgCgDgBgEQAAgBAAgBQAAgBAAgBQABAAAAAAQABAAABAAQgGgJgIgDQgFgBgGgLQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAIgGgJQAEAEABgEQABgDAHAKQACgDgHgHIgJgMQgHgEgCADQgCAEgCgBQABgBgHgIIABAHIgMgKIAJAFIgNgPQgKgMgKgEIAIACQAEgBgGgGQgLgFABgBQACgDgDgEQgIgEgGAAQgDAAgQgJQAAgBgBAAQAAAAAAAAQAAABgBAAQAAAAABABIACADIgXgMIgVgKIAFAEQACABgIgBQAEgBgKgFIgQgIIgCACQgGgFAMADQAAABAFACQAIABgBgFQgCgFgLgEQgLgDgDADQgBABAAAAQAAABAAAAQAAABAAABQAAAAABABQgLgEgLACQgLACgKgEIgOgHQgMgHgKgCQgEACAJADQAJADgEABQgOgJgbACQgiADgPgEIAFgFQgLgCgOABIAMADQgIACgIgBQgKgCAEgDQgLAEgJAAIgTgBIAJgBQgDAAAHgCQgMgBgHABIgPADQAAgBAAAAQABAAgBgBQAAAAgBAAQAAgBgBAAIgIgBQgJAEgOACIgbAHIAAgCIgtAJQgaAFgPAJIgBABIACgBQAGACgNAFQgRAHgEADIgDgBIgGAAQABADgFADIgIAFQgEABgCgCQgCgCgJAEQgHAFADADQgJgBgPAHQACgDAIgCQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgEACgBADQAAADgGACIAHgJQgEABgFAEQADgDgEgEQgMAIAGAEIAJAEQgNAFgOAKIgVARIAAgGQgJAIgCAEIgKAHQAHgIgDgEIgRAPQgIAHAAAEQgIAFgVAPQgQAOgBgCIgVAWQgKALACADIgHAHIgIAHQgLAIABAIQgHAFABgDQADgHAAgCQgFADgHANQgFAJgFAAQgEAIADgDQABgBABAAQAAgBABAAQABAAAAAAQAAABAAABQgFgCgJAOQgMATgEADQgBAEADgCQABgBgBAHQgBgCgGAHIADAGIgTAHQgCALAEACQADABgHAPIABgCQgFACgDANQgDAMgHAMQAAgBAAAAQABgBAAAAQAAgBAAAAQgBAAAAAAIgCgCIgDAMQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQgEAFgBAFQgBAFgDAGQABgGgCgBQgDgBgCADIAAAUIgFgKQgCAGgDAYQgCATgHADIAAgEIABgFQgCABgDADQgDAFABAJQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAIABAAIgCAGQgFgGAHgkIAAAKQAAABAAABQABABAAAAQAAABABAAQAAAAABAAQACgaADgMIADAMQAEgHgBgEQgBgGABgEQAFgFABADQACgRALgRQgDAPAGgHIAGgbIACgNIAFgRQADgOASgaQASgVAEgLIgGAEQgBAAgBAAQAAAAAAAAQAAgBABgBQAAgBABgCQAAABABAAQAAAAABAAQAAAAABAAQABgBABgBIAEgEQACgJAHgHQAIgIABgFQAAACAMgIQABABAFgDQACgBgDAKQACgGAFgGIAJgLQAMgNACgLIgFADIASgPIgBABIAJgIQAEgDAJgDQgKALgDAFQAHgDAHgKQAIgNAFgEQABACgFAFQgBABAAABQgBABAAAAQAAABAAAAQABAAABAAQAFgDAFgGIAIgKIABACQALgFAAgGQgBgFAJgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAXgJgMAMQAMgIAEgIIgIACIgFAAIAOgLIAOgKQgCADgEADQAOgEAOgJIAagQQASgLAKgFQASgHAOgBQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBABAAIAGgFQArgNAFgBIgDAEQA0gWAYgDQABADgEABQAIgDARABQAOABACgFIgGAAQAMgBAngGQAigGATAAQAEACgKABQgKABAEADIA3AAIATACIgGACQANADgBgEQgDgEALACQgCADAIACIAHgDQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAABIgBACQAGgCARACQASADAFgCQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBABQgBAAAAABQAAABAAAAQgBABABAAQAAABAAAAQALAEARAAQAEAEALAEIAGADQAKAEABgCQACgDAIABIgQgIIAdAJIgMgCQAGAEAOADQAOAEAHAEIgFgGIARAGQAAADAJAGQAGAEgHABIAmAWIASAKIAKAGIAIAHIgDgCIgCABQANANAUAMQgHgDgBABIANAMQAKAGAFAHQgEgDgBABQAAACADAEQABgDAIAIQgHgDgBAEIADAIQAHAOgHgCIAOAMQAKAKABgDIAAgBIABAAIAAgBIgEgFQABgCADAFIAFAJQgEgFgBgBIgBABQANASAKAcIAQA1QgIgPACAIIALAvQAHAbADAVQgEABgCgVQgCgVgFgBQAKA9ACA/QgHAHABAXQAAAagHANQAEgCAAAJQAAAIgCALQgBgBAAAAQAAAAgBAAQAAAAgBABQAAABgBABQgBABAAABQgBABAAABQAAAAgBAAQAAAAAAgBQACALgFATQgEATgFgCQADACgEAOQgFAPABAFQgDAHgFASQgFASgEAJQAEgDgEAMIgFAQQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQgDADgDAMQgCAOgEAEQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBABQAAAAgBABQACABgEARQgGARgGAFIABgFIAAgEQgLAfgZAsIgrBJIABgLQgOANAAALQgBAMgIAKQgfAmgxAsIhWBJQAAAAgBABQAAAAAAAAQAAABABAAQAAAAABAAIAFgBIgHACQgFABgDAFIAEABQgKAEgQALIgdAUQgPAKgNAHQgOAHgLAAQgOAKgZAKIgUAJIgYANQgGABAFgFQAEgDgHACIggARQgRALgsAGIgiAFQgUACgMAEQAAgCgFAAIgLABQgBABAIACIgpAJIgkADQAHgCgIgBQgMgBgBgCQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAACgKACIgKAAIgJAAgAp9hGIgEAPQAGgMAAABQAAgBAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgBABgApNh6IgDAKQADgBABgHIgCgDgAhdqNQAGgCAGABIgQAEIAEgDg");
	this.shape_8.setTransform(75,73.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C6EFF3").s().p("AgCADIAFgIIgEALg");
	this.shape_9.setTransform(139.3,74);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C6EFF3").s().p("AADgCQgBAEABAAIgFACQAFgIAAACg");
	this.shape_10.setTransform(24.3,35.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C6EFF3").s().p("AgBABQAFgFgFABQAIgDgDAGIgDAFIgDAAQgEAAAFgEg");
	this.shape_11.setTransform(94.3,126.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C6EFF3").s().p("AgBADQABgDAAgDIABADQABAAAAABQAAABAAAAQAAABgBAAQAAABAAAAg");
	this.shape_12.setTransform(46.8,31.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C6EFF3").s().p("AgDAPIAAgHQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIAAgGQAAgFgBgGQgBgGgCgEQAGgFADAUIgBgCQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQABAIgBAIQgBAJgCAFQgCgCABgGg");
	this.shape_13.setTransform(29.9,63);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C6EFF3").s().p("AgBAEIAAgJIADAFQAAAEgCABIAAABIgBgCg");
	this.shape_14.setTransform(29,66.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.6,7.5,135,131.6);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1163A").s().p("AgWAdIAAg5IAtAAIgXA5g");
	this.shape.setTransform(131.6,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AgzAyIAMgCIgIhWIgMABIgEgnIA0gFIAaA/IgFhBIAygFIAEAoIgMABIAMB9IgqAEIgYg4IAEA6IgyAEg");
	this.shape_1.setTransform(142.6,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AgsBCIgLh3IAYgbIAygEIAaAWIALB2IgXAYIgxAFgAgOgqIAIBXIAVgCIgIhXg");
	this.shape_2.setTransform(130.1,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AgaAvIAMgCIgIhXIgMACIgDgnIA8gGIAEAnIgMABIAIBXIAMgBIADAnIg8AGg");
	this.shape_3.setTransform(120,18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AgsBCIgCgeIAmgEIABANIAWgDIgCgYIgcADIgjgXIgEgzIAWgaIAygFIAbAVIACAbIgnAEIgBgMIgWACIADAZIAigDIAdAWIAEA2IgWAZIgyAEg");
	this.shape_4.setTransform(109.9,19);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgzAyIAMgCIgIhWIgMABIgEgnIA0gFIAbA/IgGhBIAzgFIADAoIgMABIAMB9IgrAEIgXg4IADA6IgxAEg");
	this.shape_5.setTransform(96.1,20.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AgzAxIAMgBIgIhXIgMABIgEgmIBwgLIAFAzIgoAEIgBgMIgVACIADAZIAogEIADAlIgMABIgJABIgIAAIgLABIACAZIAVgCIgBgMIAngDIAFAyIhwALg");
	this.shape_6.setTransform(83,21.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AgVAwIAMgBIgIhXIgJAAIACAUIgcACIgGg6IBvgKIAGA6IgcADIgCgUIgJABIAIBXIALgBIAEAnIg9AGg");
	this.shape_7.setTransform(69.6,22.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("Ag6AwIANgBIgIhXIgNABIgDgnIBSgHIAfAUIAEAqIgWAVIAZAPIACAZIAOgBIADAnIgzAEIgGhAIgWACIAGBAIg0AEgAgOgsIACAZIAWgBIgDgag");
	this.shape_8.setTransform(58,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("Ag0AxIAOgCIgIhWIgOACIgDgoIBwgKIAFAzIgnADIgBgLIgWABIACAaIApgEIADAlIgMABIgJAAIgIABIgLABIACAZIAVgCIgBgMIAogEIAEA0IhwAKg");
	this.shape_9.setTransform(44.1,24.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AgvAwIAMgCIgIhWIgMABIgEgnIBSgHIAgAUIAFA1IgbAbIghAEIABAYIANgCIADAnIg9AGgAgFgsIADAZIAWgCIgDgZg");
	this.shape_10.setTransform(30.7,26.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("AgaAvIAMgCIgIhXIgMACIgDgnIA8gGIAEAnIgMABIAIBXIAMgBIADAnIg8AGg");
	this.shape_11.setTransform(20.4,26.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("Ag9AyIAMgBIgIhXIgMABIgEgnIA/gFIAEAmIgNABIADAZIAegDIgDgZIgLABIgCgmIA8gGIAEAnIgMABIAIBXIAMgBIAEAnIg/AFIgDgnIAMgBIgCgZIgfADIACAZIALgBIADAnIg9AGg");
	this.shape_12.setTransform(8.7,27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,0.7,156.1,45.3);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AACEDQgEABgDgEIgFgHIhCheIgIgJIgHgMIgGgFIgKgUQgKgZgBgLIgEgbIAAgCQgFgGgBgKIAAgRIgFgNQgDgKgDgSQgBgMADgfIAFgSQAHgTAAgLQABgOAQgSIATgWQAEgGAFAAQAFgBADgFIACgIIANgmQACgHAIgNIAFgEIAIABIgDAIQgJAKAAALQAAAEAFADQALADADACQAMAJgCAOQAAAEAFALIABAGIgGgDIgJgOIgFACQAPAOAFASIAEgXIACAAIACAFIABAAQACgNAAgGIAAgDQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIACgCQAAgFAEgFIAGgJIADgDQAIgCAFgHQAEgGAAgIIAAgMIACgCIADgCIgBgCIAAgFIAFADIAIASIgJAPIgBAIIAAAIIgDAHQgCAEgGAAQgFAAgCAHQgEANgHABIAFAEIgIADQABABAGAAQAFAAgCAFIALgGQABAAAEACIgEAFIgFAEIgFAEIgNAAQgDAAgCAEQADgEAFABQADAAADADQAIAHgFAHQAIgJAIAIQABACAIAAIAEAEQgEACgBAAIgKgCIABAGIgJAHIAOgBQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgRAEIAAACIAGAAIALgDIABAAIABACQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAIgTAFIABADIARACQAFABgBADIgCAFIAHAEIgBADIgFgBIgJAJIALgEIAEAFIgBABIADgBIABgHIAGAEIAEgFIAEACIAHgFQAQgGAHgQIgHABIAGgLIgEACIgGABIADgGIABgBIgBgLIgFACIgEAAIABgEQAFgFgCgLIABgCIAFAAQgEgGAAgBIAGgIIgEABIgEgDIAEgDQADACADgDIAEgEIAGgFIAAAKIAJADIABgBIgFgEIgBgFQAEgBABABIAKACQAFABAKAKIADAIIgCADIgCADQABAKADAJQADAHgGgCIgIASIgGgCIgDgCQgBABAAAAQgBABAAABQAAAAAAABQAAAAAAAAQABAIgGgCIgEACIgJAKIgCAFQgCACgEgDIgEACIgFAFIgCAGIgFgDIgFAMIgEgFIADAFIgEAFQABACAFgBQAEAAABAEIgDADIAAAAIgPgDIADAFIAAAEQgDADgDgDQgDgFgCABQAOAdAUgLIAJgPIACgEIAAgFIAHABIAIgRIAEgDIACAFIAAAJIgBAFQgKAEgDAKQgCAGgBANIgDAHIgEgIQgCAFAAACIAEAMQAAAFgCAEIgHAMQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIACgFIgIgBIAAgBIAGAAQAGAAAAgEIABgIQAAgKgHgEQgEgEgLgCQgIgBgFgHIgIgOQgDgHgHABQgcAFgMALIgEAHIgNASIAJgBIgCAGQAFADgFAGQgHAIABAGIgCACIgCABQgFgEgGAGQgGAFgCAQQgBAKgEARQAAABgFABIgCgFIAGgYIAAgCQgDgIAGgIQAHgIADgFIABgDIgXAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAIABgBIAEAAQAIAHAHgHQAHABAEgBQAEAAAFgHQgNgJALgLIgCgBIgNANIAGAEQAAAAAAABQAAAAAAABQAAAAAAABQAAABgBABIgDgCQgHgLgJAKQgDAEgEACIgRAGQAAAIgIgFIAAAGIgHgBIADAGQACAEgIgBQAKAMgSAQIAKADQgFgFAGgFIAAgBIADgFQABgDAEABIgEALQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAGgGABgDIACgPIADgDIADACIAEAJIACACQACAEABAJQABAIABADQADAGgCALIABAEIgBAHIAGACQABAAgCAFIADAIIAEAIQADAHAEgBIAHgBIAAAEQgBABgFABQAAABABAAQABAAAAABQABAAAAAAQABAAAAAAIAGgGIAGgBIgBAFIgDAEIAEgBIAFACIgDAEIgHAGIAHAGIAGAFQAFACAAACIgDAEIAJAGIgHAEIAJABQAEABACAEIAAAHIAIAeIAFACIgFAHIAGAEQADADgGAEQALAHABAJIgDAGIAFAKIgHABIgKAIIgCAAQgFAAABgIgAgBDkIAPALIABgBIgPgLgAhvADIgDABIAEADIgFAEIAEADIgBAIIAHgBIgBgCIAAgMIAAgFgAhdgNIgEAEIAIADIADgGQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDABgAhQgjIALAJIgCAGQAAABABAAQABAAAAAAQABAAABAAQAAAAABgBIAEgEIABgBIABgCQgBgEgDAAQgGAAgHgIQgFgFgGAIQAEgDACAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABgAgjggIALgHIgGgHgAg1giIAMACIAAgCIgGgDIAKgDIgMgEgAgNgvIAKgVIgDgCIgEAFQgDAOgKgCgAg7g1IACAFIAHAAIgBgIgAgohBIANACIABgCIgKgGQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAgBABQgDADgBAAIgFgHQgEgDgFAEIgGgPIACgBIgKgHIgGAJQAFABAEAFQADAFgCAEIARAGIgDAFQAFgDAEAAQADAAACACgAAOhDIAIABIgBgCIgEgEIAFgDIAJgDQgBgBgIADQgFABgBgGgAgIhRIgDAEIgBAEIAGgHIADgCIADACIAAAGQAGgFABgHQAAgHgGgEIAAAHIAAAGIgFgDIAAABQgGgBAAgBIgCgKIAHABIAFgFQAHABACgKQABgKgKgDQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBIABgDIAFgGIgEgLQgBgGgGgBIAAAEIADAKIgBAFIgEgDIgCgFQAAAMgJgGIgCACIgGADIAAgGIACgIIgIAHIACAPQAAAAgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAIgDAGIgGALQgDAGAHAFQACACACAGIAGACQACABAEgCIgCAHIAMgEgAg/hyIAAABIARgDIgEgGgAgoi/IACACIAIgGIgBgCg");
	this.shape.setTransform(14.1,42.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AgRAJIAAgDIACgEIAHgGQADgDAFACIgBgGQABgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIADADIAFADIAIAAQAAAAABABQAAAAAAABQABAAgBABQAAAAAAAAIgDADQgDAEgIADIgLAGIgCAAQgDAAgFgEg");
	this.shape_1.setTransform(12.3,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AgDAAIADgCQAAAAAEACIgEADIgDgDg");
	this.shape_2.setTransform(15,52.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AgDAAIADgCIAEACIgEADIgDgDg");
	this.shape_3.setTransform(16.2,51.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AgCAAIACgDIADADIgDAEQgBgCgBgCg");
	this.shape_4.setTransform(26.8,5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgCADIAAAAIACgFIADAFg");
	this.shape_5.setTransform(30,52.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AgDAAIADgCIAEACIgEADg");
	this.shape_6.setTransform(33.2,53.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AgCAAIACgDIADADIgDAEQgCgDAAgBg");
	this.shape_7.setTransform(15,50.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AgDAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAgBABAAIAEACIgEADQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBg");
	this.shape_8.setTransform(34.2,55.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AgCABIACgEIADADIgDAEg");
	this.shape_9.setTransform(21.1,56.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AgCAAIACgDIADADIgDAEQgCgEAAAAg");
	this.shape_10.setTransform(26.9,73.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("AgCAAIAAAAIAFgBIgBADg");
	this.shape_11.setTransform(18,29.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AAAAFIgBgJIACACIABAHIgCAAg");
	this.shape_12.setTransform(21.8,27.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AgDAAIADgCIAEACIgEADIgDgDg");
	this.shape_13.setTransform(30.2,12.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AgCAAIABgCIABgBQADABAAACIgDAEg");
	this.shape_14.setTransform(17.2,64.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2F2F2").s().p("AgCgCIAFAAIgDAFg");
	this.shape_15.setTransform(28.4,22.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2F2F2").s().p("AgDAAIADgCIAEACQgDADgBAAIgDgDg");
	this.shape_16.setTransform(17.8,48.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2F2F2").s().p("AgBADIAAgFIADACIgCADg");
	this.shape_17.setTransform(10.2,50.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2F2F2").s().p("AgDAAIADgCIAEACIgEADg");
	this.shape_18.setTransform(18.3,56.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F2F2F2").s().p("AAAAEIgBgBIgBgCIACgEIADAEIgBACIgCABIAAAAg");
	this.shape_19.setTransform(18.3,5.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2F2F2").s().p("AgCABIACgBIAAgEIADABIgDAIg");
	this.shape_20.setTransform(28.2,26.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F2F2F2").s().p("AAAADQgBAAgCgDIACgBIABgBQAAAAAEACIgEADIAAAAg");
	this.shape_21.setTransform(33.8,54.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F2F2F2").s().p("AgCABIACgEIADAEIgBACIgCABQgBgBgBgCg");
	this.shape_22.setTransform(30.9,62.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F2F2F2").s().p("AgCgBIACgCIAAABIADADIgDADg");
	this.shape_23.setTransform(15.3,69.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F2F2F2").s().p("AgDAAIADgCQAAAAAEACIgEADIgDgDg");
	this.shape_24.setTransform(38.2,49.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F2F2F2").s().p("AgDAAIABAAIACgCIAEACIgEADQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAgBAAAAg");
	this.shape_25.setTransform(28.8,73.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F2F2F2").s().p("AgCACQgDgGAHACIAAgBQAEAFgGACg");
	this.shape_26.setTransform(32.2,51.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F2F2F2").s().p("AgCACIgBgCQABgCACAAIAEACQgEADAAAAIgCgBg");
	this.shape_27.setTransform(15.6,48.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F2F2F2").s().p("AgCAAIACgDIADAEIgBACIgCABQgCgBAAgDg");
	this.shape_28.setTransform(16.4,7.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F2F2F2").s().p("AgBACIAAgGQADACAAABQABABgCAFQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_29.setTransform(44.1,19.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F2F2F2").s().p("AgCAAIACgDIADAEIgBACIgCABQgCgBAAgDg");
	this.shape_30.setTransform(19.2,56.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F2F2F2").s().p("AgCACIgBgCQABgCACAAIAEACIgEADIgCgBg");
	this.shape_31.setTransform(45.8,32);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2F2F2").s().p("AgCAAQABgCABgBIACABIABACIgDAEg");
	this.shape_32.setTransform(22.9,58.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F2F2F2").s().p("AgCABIACgEIADADIgDAEg");
	this.shape_33.setTransform(26.1,72.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F2F2F2").s().p("AgEACIAFgEIAEABIgCACQgCABgEABg");
	this.shape_34.setTransform(23.1,67.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F2F2F2").s().p("AgEACQAAgCADAAIAEgCIACACIgBAAIgHADg");
	this.shape_35.setTransform(21.3,68.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F2F2F2").s().p("AgEAAIAGgCIADACIgGAEg");
	this.shape_36.setTransform(5.2,3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F2F2F2").s().p("AAAABIgBgCQgBgCADgBIABABIgBAIIgBgEg");
	this.shape_37.setTransform(22.4,68.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F2F2F2").s().p("AgHABQAFgEADADIAHACg");
	this.shape_38.setTransform(16.9,39);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F2F2F2").s().p("AgCAAIABgCIABgBQACAAABADQAAAAgDAEIgCgEg");
	this.shape_39.setTransform(26.8,43.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F2F2F2").s().p("AgEAAIACgBIACgBIAFACIgFADQgCAAgCgDg");
	this.shape_40.setTransform(11.3,52.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F2F2F2").s().p("AgCAAIACgCIAEACIgEADg");
	this.shape_41.setTransform(41.2,33.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F2F2F2").s().p("AAAADIgCgBIgBgCIABgBIACgBIAEACIgEADIAAAAg");
	this.shape_42.setTransform(46,34.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F2F2F2").s().p("AgCAAIACgDIADADIgDAFIgCgFg");
	this.shape_43.setTransform(18.7,7.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F2F2F2").s().p("AgCAAQABgDABAAIACABIACACIgEAFIgCgFg");
	this.shape_44.setTransform(24.5,52.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F2F2F2").s().p("AgFAAIABgBIAJAAIgBABIgEACIAAAAQgDAAgCgCg");
	this.shape_45.setTransform(22.3,36.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F2F2F2").s().p("AAAACQgEgCgBAAIACgCIAHACIACABIgCACIgBAAIgDgBg");
	this.shape_46.setTransform(21,70.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F2F2F2").s().p("AgEAAIAEgDIAEADIgEADg");
	this.shape_47.setTransform(43.1,49);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F2F2F2").s().p("AgCABIACgGIADAFIgDAGIgCgFg");
	this.shape_48.setTransform(9.9,19.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F2F2F2").s().p("AgCACIgCgCIACgBQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAEADIgEAEIgCgCg");
	this.shape_49.setTransform(26.2,42.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F2F2F2").s().p("AgDAAIAEgCIAAAAIAEACIgCACIgHACIABgEg");
	this.shape_50.setTransform(21.3,37);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F2F2F2").s().p("AgEAAIAEgDIAFADIgEAEg");
	this.shape_51.setTransform(13.6,1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F2F2F2").s().p("AAAgEIADAAIgCAIIgDABIACgJg");
	this.shape_52.setTransform(20.9,17.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F2F2F2").s().p("AABADIgEgDIgCgCIAKACIABADg");
	this.shape_53.setTransform(19.7,17.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F2F2F2").s().p("AgGAAIAAAAIALgCIACACIgCACIgFABQgFAAgBgDg");
	this.shape_54.setTransform(34.5,74.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F2F2F2").s().p("AgFABIAAgBIAEgCIAHACIgDADg");
	this.shape_55.setTransform(18.3,26);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F2F2F2").s().p("AgCACIACgHIADADIgDAIIgCgEg");
	this.shape_56.setTransform(37.8,68.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F2F2F2").s().p("AgGABIACgEIACgBQAAAEADAAQAGAAgBAFg");
	this.shape_57.setTransform(30.4,37.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F2F2F2").s().p("AgCAAIACgFIADAEIgDAHg");
	this.shape_58.setTransform(24.3,67.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F2F2F2").s().p("AgCAFIgBgCIABgIIAGAFIgEADIAAADIgCgBg");
	this.shape_59.setTransform(45.1,19.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F2F2F2").s().p("AgFACIAHgGIAEADIgHAGg");
	this.shape_60.setTransform(17.4,23.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F2F2F2").s().p("AAAACIAAABIgDAAQgBgBgBgCIAEgCIAHACIgEADIgCgBg");
	this.shape_61.setTransform(31.2,63.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F2F2F2").s().p("AgBAEIgCgEIgBgDIAEACIAEABQACABgCAEg");
	this.shape_62.setTransform(35.4,74.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F2F2F2").s().p("AAAADQgDgGABgBQAAgBABAAQABAAAAAAQAAAAAAABQAAAAAAABQACADABAAIABAAIgBAGIgDgDg");
	this.shape_63.setTransform(29.3,52.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F2F2F2").s().p("AgFABIABgDIAKAAIAAABQgBABgFACIgCABIgDgCg");
	this.shape_64.setTransform(24.4,23.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F2F2F2").s().p("AgDACIAEgIIADADIgEAKIgDgFg");
	this.shape_65.setTransform(26,62.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F2F2F2").s().p("AgEAAIAAgBIAAgCQABAAAAgBQABAAABAAQAAAAAAAAQABAAAAAAIAFAHIgBACg");
	this.shape_66.setTransform(36.4,15.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F2F2F2").s().p("AgFACQAFgDACgDIAEAEIgJAFg");
	this.shape_67.setTransform(24.3,72.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F2F2F2").s().p("AgEAEIAFgLIAEAHIgFAHg");
	this.shape_68.setTransform(36.9,70.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F2F2F2").s().p("AgHAAIgBgDIAQADIACACIgCACg");
	this.shape_69.setTransform(39,3.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F2F2F2").s().p("AgFgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAIAHAIIgCADg");
	this.shape_70.setTransform(14.9,41.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F2F2F2").s().p("AgFACQgBAAAAgBQAAgBAAAAQAAAAABAAQAAAAABAAIAIgDIADADQAAAAAAAAQAAAAAAAAQgBABAAAAQgBABgBAAIgFACQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_71.setTransform(26.6,35.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F2F2F2").s().p("AgEACIAGgHIADADIgGAIg");
	this.shape_72.setTransform(18.5,14.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F2F2F2").s().p("AgCAFQgDgBABgDIADgEIACgBIAFAEQgGAFgCAAIAAAAg");
	this.shape_73.setTransform(14.8,4.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F2F2F2").s().p("AgCADIAAgDIgBgCIADgEIADAGIAAADQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIAAABIgCgEg");
	this.shape_74.setTransform(11.8,47.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F2F2F2").s().p("AAAAEQgGgCgEgCIACgDIADAAIAFAEIALAAQgEADgFAAIgCAAg");
	this.shape_75.setTransform(16.5,42.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F2F2F2").s().p("AgCAIIACgMIABgDIACAEQAAAFgCADIgDADg");
	this.shape_76.setTransform(22.6,70.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F2F2F2").s().p("AgFAEIAFgEIAAgCIAAgEIADADIADAGIgGAEg");
	this.shape_77.setTransform(44.4,53.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F2F2F2").s().p("AgBAHIgDgGQACAAACgEQAAgEADABIABABIABADIgFAJIgBAAg");
	this.shape_78.setTransform(40.3,63.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F2F2F2").s().p("AgEAEIAEgKIABAAQAEADgBABIgEAJIgEgDg");
	this.shape_79.setTransform(45.9,36.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F2F2F2").s().p("AgDAHQAAgBgBgBQAAAAAAgBQgBAAAAAAQAAgBABAAIAHgJIACACQACAEgEABIgDAGg");
	this.shape_80.setTransform(30.9,51.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F2F2F2").s().p("AAAAHIgBgBIgBgNQAFAAgBAHIABADQAAADgCACIAAAAIgBgBg");
	this.shape_81.setTransform(15.3,46);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F2F2F2").s().p("AgFABIAAgGIAFAFIABAAIAFACIgEADIgCABQgEAAgBgFg");
	this.shape_82.setTransform(18.9,20.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F2F2F2").s().p("AgFAFIAGgOQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIABAEIgGAMIgEAFg");
	this.shape_83.setTransform(29.7,58.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F2F2F2").s().p("AgFADIAAgGIACgDIAFABIACAAIACACIgEAEIgEAGIgDgEg");
	this.shape_84.setTransform(35.7,75.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F2F2F2").s().p("AgEAFIgEgFIAFgCIAKgDIABACIgIAIIgBABIgDgBg");
	this.shape_85.setTransform(6,5.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F2F2F2").s().p("AgDAGIgCgCQAAgEACgFIAAgBIAAAAIAAABIAJAFIgCADQgDADgBAAIgBABIgCgBg");
	this.shape_86.setTransform(44.9,39);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F2F2F2").s().p("AgIAFIABgDIAKgIIADAAIADAEIgOAJIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_87.setTransform(35.5,72.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F2F2F2").s().p("AgDAFIgBgFQABgDADgDIADgCIABABIABAGQABACgFAAIgBAIg");
	this.shape_88.setTransform(38.7,70.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F2F2F2").s().p("AgDAAQgCgDACgBIAHgCIABAEIgBAIIgEABIgDgHg");
	this.shape_89.setTransform(14.6,3.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F2F2F2").s().p("AAAAKIgCgCQgCgKADgGQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABIgBAOIADAAIgEADIAAABIAAgBg");
	this.shape_90.setTransform(34,49.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F2F2F2").s().p("AgDAIIACgIQABgCgDgEQAAAAAAAAQAAAAAAAAQAAgBABAAQAAgBABgBQAAAAABAAQAAAAAAAAQAAAAAAABQABAAAAAAQAEAEgBAFQgCAGgDADg");
	this.shape_91.setTransform(17.9,69.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F2F2F2").s().p("AACAJQAAgBgBAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQABgFgEgCQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQADAAAEAHQAEAEgCAEQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgCAAg");
	this.shape_92.setTransform(12.7,55.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F2F2F2").s().p("AgHABIAEgFIAEgBIgBAFIAIAAQABACgDACIgGACIAAAAIgHgFg");
	this.shape_93.setTransform(51.6,31.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F2F2F2").s().p("AgHADIAIgKQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABIgJAKIgFACQgCgEABgBg");
	this.shape_94.setTransform(15.8,40.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F2F2F2").s().p("AgCAGIACgFIAAgBIgFAAIAAgDQAGgDABABQAEACAAADQAAAEgEACg");
	this.shape_95.setTransform(14.2,2.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F2F2F2").s().p("AgCAAIgEgEIAAgFIAGABQADAHADAEIAAAEIgBADg");
	this.shape_96.setTransform(43.9,37.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F2F2F2").s().p("AgHAIQADgKAJgGIADADIgHAIIgBAGg");
	this.shape_97.setTransform(10.6,15.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F2F2F2").s().p("AgCAIIgCgNIABgCIACAAQAGAAABABQAAABgDAFIgCAFQgBAEgCAAg");
	this.shape_98.setTransform(34.1,33.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F2F2F2").s().p("AAAAFIgEgDQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAABgBQABAAAAgFIABgEIADACQACAIAAAEIgFAGIAAABQgGgBAGgFg");
	this.shape_99.setTransform(45,41.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F2F2F2").s().p("AgIAKIAGgKIAEgJQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIACACIAAACIgLASIgDABg");
	this.shape_100.setTransform(37,73.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F2F2F2").s().p("AgFANIAFgXIAEgDQABAAAAABQABAAAAABQAAABAAAAQAAAAAAABIgGAXIgFAAg");
	this.shape_101.setTransform(39.8,68.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F2F2F2").s().p("AgGAHIgBAAIgCgKIAGgEIAAABIAAAHIAIgDQABAAAEACIgCACIgMAFIgBABIgBgBg");
	this.shape_102.setTransform(10.4,51.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F2F2F2").s().p("AgFAGIADgFIACgDQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAQgDgBgBgCIAAgCIABgBIALAAIABABIAAADQAAAJgHACg");
	this.shape_103.setTransform(15.1,44.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F2F2F2").s().p("AAAAGIgIgCQAAgIAIAAIADgBIABgBIAFACIgBAJIgFgFQAAAHgDAAIAAgBg");
	this.shape_104.setTransform(44.6,43.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F2F2F2").s().p("AgDAKIgCgLIABgEIAEACIAAgEIACgFIADAEIABAEQABACgEAGQgDAHgBABg");
	this.shape_105.setTransform(7.2,44.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F2F2F2").s().p("AACAQIgCgHQAAgEgDgEIgFgGIgDgFIgBgFIAFABIADABIAEgBIAAAGIADABQAMAJgDAKIgDACIgGACIgBAAg");
	this.shape_106.setTransform(49.9,29.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F2F2F2").s().p("AAAAMQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQACgCABgCIgLAHIgGAAIAEgFIAFgHQACgHACgCQABgDADgBIAFABIAAAMIABAHIAGAGIgPABg");
	this.shape_107.setTransform(36.5,1.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F2F2F2").s().p("AgPAeIALgiIAEgPIAOgPIACACIgBAGQgOANgBANQAAAAgBAEQgDAEAAACIgFAVIgEAEQgCgEAAgBg");
	this.shape_108.setTransform(30.4,54.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F2F2F2").s().p("AgBAdQgEAAACgFIAAgHIAGgFIABgMIgFAAIACgEIADgDIgBgJIgKgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgBIACgBIAJAAIgBgDIADgFQAEACAAACIACAOQAAAdgDAJIgEAEIgEgBg");
	this.shape_109.setTransform(44.7,52.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F2F2F2").s().p("AgbAWIABgGIABgCIgFgCQgBgBAAAAQAAAAAAgBQgBAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQAIACAIgFIANgIIAOgPQABgBAEABQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAgBIAIAFQABAAAAABQAAAAAAABQABABgBAAQAAABAAAAQgBACgGABQgFABgCgBIgaASIgJAFIgEAGIgDAFIAAABIgDgCg");
	this.shape_110.setTransform(25.7,54.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#F2F2F2").s().p("AAAAIIgKgMIAAAAIgHgLQgFgGAGgBIAGAFIgBABIAIABQAAgKAHAFQADACAIACIAGAEQgHAGgCAAIgMgBIgCAEQAAABAAAAQAAABABAAQAAAAABAAQAAABAAAAIABAAIAJAPQAEAIgIAAQgBgHgFgIg");
	this.shape_111.setTransform(51.8,28.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F2F2F2").s().p("Ag1AXQgBgFAEgDQAGgDAKgLIATgKQAKgFAIACQABAAAAAAQAAgBABAAQAAAAABgBQAAgBABgBQADgCACACIAJAKQAIgKANAHIABAAIAAgHIgCgHIgBgEIADgBQAEACAEAGQAEAFAAAFQAAAEgGAFQgEAEgEgBIgMgBQgIAAgEgCQgKgIgQAGQgTADgQAWIgHAGg");
	this.shape_112.setTransform(36.2,6.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F2F2F2").s().p("AgKArQgJgCABgHQAJgdABgNQABgJAFgIIAJgNQACgDAFgCIADACIACACQgCANgFAFQgGAIgCAKIgEAcIAAAAIgBANQgCAGgEAAIgDgBg");
	this.shape_113.setTransform(17,15.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F2F2F2").s().p("AgJAzIAJgLQAKgIAVgOIADgDQgKgPgHgGIgLgLQgGgGgFgCQgFgCgIgEIgMgIQgCgBgGAAIgOgCIgGgHIAGABIAFABQAEAAADgCIAEgFIACAGIABACIAGgGIADAKIADgEQACgBACAEIADACIADAAQAGgDACAHIAGABIgCAFIAMAHIAGgCIAIAOIAEgIIADAFQAAAGACACQABABAFABIAFADIgFACIgJAAIAOACIAHAAQAEAAABABIAAACIAAACIgSANIAAAGIgGgBIAAAHIgHgDQABAEgCADIgGAEIgMAKIgJAEIgFABg");
	this.shape_114.setTransform(12.2,9.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F2F2F2").s().p("AgqBGQgEgCABgEIAAgBIACgBQgCgGAFgJQAFgKAAgEQACgPAKgQQANgUALgJIAKgJQAGgHAEgCQAGgCACgFIABgLIADgEIAFgFIAIAIQABABgEAEIgFgBIAAACIAEABQADADAAACQABAAgBABQAAAAAAABQAAAAgBABQgBAAgBABIgIAEIAFAGIgGABQgEABgCgCQgGgCABAGQABAGgFAAIgCABQAAAEgFAEIgGAHQgEAIgJAAIAEAEQABAAgEACIgBACQADAFgDABIgGABIAKACIAEACIgEACIgJABQgEACAAACIgCAOIAHAKIgBAEQgEAAgBgBIgHgJIACAFQABABAAABQAAAAAAABQABAAAAABQAAAAgBABIgEAKIgJANIgHgDg");
	this.shape_115.setTransform(30.1,7.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F2F2F2").s().p("AgHBYIgHgEIABAAIgJgBIgEAAIAAgFQAGgOAOABIAJhXIAAgFQAAgBAAgBQABAAAAgBQAAAAABAAQAAgBABAAIgBgGQACgBAEgBQgGgCAEgHIACgQIADgLIACgIQAAgCADgDIADAEIACAIIADAGIgGABIgDABQAGADABAGQABAEgBAHIAAACQgGAEACAGIAFAKIAAADIgCABQgJgCABAKIgCAGIAFgBIADADQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgLAAIAEAFQAAABgGADIAFABIAFADIgEADIgHABQAHAEgDACIgGAEIAIADIgFAFIAGACIADACIgEADIgFABIAQAEQAGACgCAFIgBABQgDAKgLgBIgMABIAEAIIABAFIgFgCIgDgEQADAIgEAAQgGgBgBABIAJAIIAAACIAAABIgDABIgCgBg");
	this.shape_116.setTransform(22.8,8.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F2F2F2").s().p("AAtA2IgEgDQAAAEgHgCQgUgCgKgDQgIgCgNgHQgSgLgKgEQgHgEgHgIIgLgMIgMgQIgCgHIgFgGQgCgEgBgBQgEgCABgGIAAgIIAFgDIACAGQgEAEAFAEIAIABIACACIAQAGIABgIQAAgFAHABIAAgCIgIgCIgFgBIgBgCIABgCIAGAAIAPgCIABAAIAAADIADAEIgFADIgBAGIgCACIgEgBQAAAGACACQABACAFAAQACAAAEACIgHAFIAIACIACgGIAFgEIAAABQAFAFABADQAAADgEAFQgBAAAAABQAAAAAAAAQgBABAAAAQABABAAAAIACAKQAAgBABAAQAAgBABgBQAAAAAAAAQABAAAAAAQAFAAABgHQAAgEADgBIAKAAQABAAAAAAQAAABAAAAQAAAAAAABQAAABAAABIgGACIgCAIIACALIAGgBIAFAAIgFAGIADAEQAFgIAKANQABgFACgCQACgCAFADQACACAEAAIAIAAIgDgJIAGACIAHAAQAEgFACABQACABABAFIACAEIAAgGIACgFIABgBIACABIABAFIAAACIACABIACgOIADgEIAKgCIABAFIAAAAQgCAEADABIAFADIAFADIgEAFIAHACIgEAJIgLALQgHAGgHADQgJADgIAAIgFAAgAhBgEIAMgMQAEgGgGgCIgUgEQANAIgDAQg");
	this.shape_117.setTransform(25.5,74.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F2F2F2").s().p("Ag2BQIgHAIIgCgCIAMgxQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABIgIAkIACACIAEgGIAGgjQABgHgDgUIgFgOIgDABIAGAjQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAIgGgTIAAgIIgEgEIgEgJQgDgFABgGIgIgGIALAAIgGgHIAGgBIAAgEIACgDQADgEADgBIADgIIALgSIAFgCIAAAAIgBAHIgEAPIAHAAQAFgBAAgFQABgBAGgCQAHgCACABIAFgEIABAGIAQgOQACgMAKgBQAKgBADAHIgCACQgDAGgFABQgDAAgEAEIgFAHIgEAFQgDADgEAAQAAgBgEAEIgHAGQgDADgBAAQgFABgCAEIgCAIIALABIAAABIgDAAQgGAAgEAFQgFAEACAGIABACIADABQAQAAAHABIgTAAQgHABgCAEIABAHIAEAKIADAJQACAEADADQADABADADIADAGIAFADQADgCABADIACAGIAVgBQADgBAKgHIAHgGIAKgNIAFgEIAJAHIAIgEIgBAHIgHAWQAAACACAFIACAHIADAFIABAHIgGABIgCAHIgFgEIgDgDQACgGgDgEIgIgGIAAAAIgHAFIgBgIQgKAFgIgDQgCgBgGABIgIABQgNAAgGgMIgOgDIgFAKQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgCgCIACgNIAAgGQAAgEACgCIgEgFIgDABIAAAlIgCAGIgGAOIgFAEIAAAAgAgngCQACgMgOgEg");
	this.shape_118.setTransform(37.7,41.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F2F2F2").s().p("AA8BMIgCgDQgGgFAHgCIgDgEIgGAEIgGgNIgHAAIgFgCIAFgDIADgBIgBgCQgJADgCgBQgCAAgCgDIgDgFQgCADgHABQgGABgEgCQgFgDgIACIgOAIQgFADgHAOQgBACgEACIADAEQAAAAAAAAQAAABgBAAQAAABAAABQgBAAAAABIgFgDIgCgFIAAgDQAEgCAAgEIgBgHQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQABAAABAAQAGABgCgIQgBgHAGACQABgEAIgGQAHgFAFAAIAQgFIAjgJIAZgGQAHgBALgCQAGgBABgEQACgEgBgCQgDgHAHgNIADgJIgOAAIgIADQgFACgEgDIgFgBIgIgEIgJADIgUABIACADIgEAHIgGgGIgBABIgBABIgCAGIgGgDIAAADQAAAEgDADQgDADgCgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIADAAQgFgGgCAHQgCAHgFgEIgEAFIgEgDIgDADIgGACIgFAEIAAgGIgCgBIgFANQgBAFgEgDQgFgDgEABQgDAAgEAFIgEAAIgBgGIgTAEIgCAAQgDgDgFAAIgIgBIgHAAIgDgCIgBAEIgDAEQgDgCgBgDIAAgGIgCAAIACATQgLgFACgJIgEAFQgCACgEgBIAAgBIABgGQABgEgCgDQgCgCAEgGQAFgGACgBIADABIAGABIgCgJIgDgEIAGgBIABAAIAGgBIAAAIIAKgJIAMADIgFgEIgCgFIAFAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAIADgHIAGAGIABgDIAEgEIACAFIgBACIALAFIAJgDIgBAHIgBACQACAHgDAIIgFAOIALgIQAGgEADgFQACgFAEgEQABgBAEABQAKAEALgHIgKAAIABgGIABgHIAAgJIgBgBQgHACADgHIABgEIACgCIAPAQIACAFQAFAJACABQACAAAKgDQAOgEARgCQAKAAAIgKIAIgFQgCgEAEgDIAIgDQAFgEAEABQAFABACAGIABADIgBACQgDACgDgCIgEgDIACAHIgEAJIAQgCIAIAAIgBAIQgGAKgBANIAAAYIANgCQAHgBAFACQAEABABABIgDAEIgDAGIAFACQAHABADACQADACAAAGIgBAEIgEgCQgIgLgOAHQgCACgFAAIgIACIgWAHIgNAAIAEAJIAHADQAEABAEgDIACABIACABIAHAVQABADAEADIABAGIgGABIgJgJQgDgEgFABQgFAAgDAEIgEAHQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBgAhugXQgFACgCAFIABABIAlACIAGgEIgUgJQgBAAAAABQgBAAAAAAQgBABAAgBQgBAAAAAAIgDgCIgKAEg");
	this.shape_119.setTransform(39.3,23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.9,79.7);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C6EFF3").s().p("AAAgDQAAgBACAEIgCAEQgCgGACgBg");
	this.shape_15.setTransform(4.2,74.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C6EFF3").s().p("AgGAAIANAAIgFABg");
	this.shape_16.setTransform(49.6,1.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C6EFF3").s().p("AAAAAIgDgEIAEAEIADAFIgEgFg");
	this.shape_17.setTransform(109.9,26.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C6EFF3").s().p("AAEAKIgKgTQAGALAAgCQAAgCAHAMQgHgKAEAKg");
	this.shape_18.setTransform(115.4,34);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C6EFF3").s().p("ABxLXIAJgBIgSgBIgOAAIgBgBIABgBQgGgCgHAAIgLAAIADgBIg7gKQgtgIgUgHQAJACgHgEIgSgCIg/gVIALADQgSgFgMgIQgOgIgPgGIARALQgagOAEAGQgGgDgCgDIgOgJIAHADQABAAABABQABAAAAAAQABAAgBgBQAAAAgBgBIgcgTIgPgHQAAADgLgGQgHgEAGAGQgagOgggXIgzgkQgEgGgKgJIgVgSQgYgWAEgBQgVgVgXgQQADAEAJAGQgEgBgMgMIgSgTIAVATQANALAHAEIgagYIgUgTIgBgGQgHgGgEgHQgDgGgIgGIABADQgMgQgJgIQgOgQgGgIIABAAIgLgOQgHgKgCgGIAMAQQAAgBgEgJIgGgNQgHgKgCABQgCAAgCgDQAAgBAAgBQAAAAAAAAQAAgBAAAAQAAAAABABIAFAFQgegugLgOIABAAIgRgeQgKgQgDgIIADAEQgDgJgLgVQgJgSADgDIACAEQAEAJgBgJQgFgNgGgIQgFgHgEgMIACADIgWg8QgCgPgKghQgJgggBgWQAAAGgCgGIgDgGQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBgGgCgDIgCgGQAAgGgEgMIgDgQIgDgSQACALABAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQgCgMgFgSQgEgPgBgQIABgQQgDgCgBgOIgBgOQADgMABABIgBgUQABgMgBgDIgCAMIACguQAAgYAEgQIAGABQACgIACgSQABgOAFgJIgCADIAAgJIgGAfIACgZIgGAnIAAgOIgDAFQACgNAEgMQAEgNACgKQABgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQACABACgFQACgLAIgQQAIgQABgGIAAACQgCAGABgBIAGgPIADgKIgFAKQADgLAKgQQAEgIAAgDQAAgDgFAHIAFgHQABgBABgBQABAAAAgBQABAAAAABQAAAAAAABQAJgPABgFQAEgIAIgJIgBADIALgNQgHAJAEgBQACgBgKALQADAAAHgJQAJgMAEgCQAEgHgCAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAABgBIAKgIIgHADIAMgLIgGAHIATgPQAMgIAOgMIgHAHQgCAEAJgGQALgIABAAQABACAFgDQAHgFAFgFQAJgHANgGQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIgEABIAcgOQAMgFAOgFIgIACQgCABAIgFQgCACALgDIAUgGIACgCQAPgDgVAHIgGACQgIAEAEABQAEABANgEQAMgFACgDQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAMgDAMgGQALgFAOgDIARgBIAbgCQAFgCgMABQgLABAFgCQAOABAjgGQAigGAWACIgFADIAeAAIgOgCQAIgBAKABQALABgFABQAOgBAKABIAWADIgKgBQACABgIAAQARACAWABQgEACAPACQAOAAAOACIAfAFIAAABQATADAfAJIAwAPIACABIgDgBQgHgFARAGIAaAIIAIAFQAAgBAHACIAKAEQAFACAAACQABACAKAEQAJAEgBgDQAEAEAOAIIgFgDIACADIACACIAGADQADAAAFADIgKgDIALAGQgGgDAAAEQAPAHgCgEQgEgGABgBIAQAJIAOAIQAUALAHAFIgEAAQAKAGAGACIAMAJQgKgGgCACIAVAOQAKAHAEABIAeAbIARARIAYAYQANANABgBIAPATQAKAOAEACQAFAHgCgCQgGgFgCgBQAEAHALAKQAHAKAAADQAGAIgCgEQgBgBAAgBQAAgBAAgBQAAAAAAAAQAAAAABAAQgBACALARQANAUADAHQABAAAAABQABAAAAAAQAAAAAAgBQAAAAAAgBQgBgCAFAGIADAJIAFABIACATQAHAKACgBQABgBAKAQIgCgCQABAEAIAOQAKAVACAIQgBgFgBAAIgCAAIAFALIABABQABAGACAGQADAFACAHQgDgGgBABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAABIAKATIgGgHIAMAgQAHATgCAHIgDgJQgBABABAEIABAIIgJgaIAFAJQAAABABABQAAABAAAAQABABAAAAQAAAAAAgBIgOgmQACAFAFAEQgCgIgDgEIgEgJQgBgHACACIgPgmQAIAPgCgJQgEgJgLgTIgSgcQgPgWgKgVQgRgdgGgGIADAHQAAABAAAAQABABgBgBQAAAAgBgBQgBgBgCgCQABAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIgDgGQgIgHgFgJQgIgKgDgDQACACgJgOQABAAgDgGQgBgDALAKQgOgNgKgMQgLgOgMgFIAEAFIgRgTQgMgMgGgIIARAOQgFgHgKgIIgTgNIAHAEQABABABAAQABABAAAAQABAAAAAAQAAgBAAAAIgYgSIABAAQgKgKgEAAQgEAAgHgHIgCABIgJgJQgDgEAJAFIgWgMIAGAGQADACAAACIgggUIAIAEQgOgMgOgHIgfgPIgggPQgPgGgRgKQACACgDgBIgIgBQgngOgLgGIAEABIgwgLIgogIIABgBIACgBQgJgBgQgFQgQgDgDACIAHABQglgGhPACQgEgCALAAQALAAgEgCQgWgBgSABIgqADIAGgBQgPAAADACQADACgMABQACgCgKAAIgHADQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIACgCQgFADgUADQgSAEgGADQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQgLACgSAHIgSADIgIACQgMAEAAABQAAACgHADIARgEIgeALIAMgGQgIACgkASIAIgCIgRAJQgBgBgLAFQgHADAEgEQgWAKgSAQIgiAeIACgDIAAgBQgMAKgQAWQAEgGgBgBIgMAPIgLARQAEgIgHAIQACAAgFAJQABgGgCABIgHAHQgJANABgGIgIASQgGASAFgHIADgGQABAAgHAOIADgHQgdBAgHAqIABgJQAAgFgCAGQgGAagCAZIgBA0QgDABACgXQACgXgCgBQgGBBAIBFQgDAJAEAYQAFAdAAAOQABgCAHAdQgBgBAAAAQAAAAAAAAQgBABAAABQAAABAAABQAAACAAABQAAABAAAAQAAABAAAAQAAAAAAgBIAIAgQAEAVgDgBQACACAEAPQAFATACACQACAKAGASIAKAeQgBgFAFANIAIATIgDgFQAAAEAGAMIAJAUQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQgBAAACAFQABAAAJAQQAJATACAHIgGgIIArBQQAaAuAZAfIgJgHQAKASAIAGQALAIAHAJQBRBvBaBBQAEACgDgDIADADIAIAFIgBgCIAaAUIA+AmIAWAPIAsAVIAWALQALAFARAEQAGAEgIgCQgBAAgBAAQAAAAAAAAQAAAAACABQABAAACABIAmALQARAEAvARIAlALQAPADAUADQAAABAFABIALADQABgBgIgCIBVAGQgIAAAKACQAMABABABQAAAAABAAQABAAAAgBQABAAAAAAQAAAAAAgBQAAgBAMAAIBMAAQAWgDAAgDIBWgRIABABQAFgDAPgDQAQgDADgCIgCACQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAABAAIAQgGQgHADAAACQAAACAKgDQABgBACgBQABAAAAgBQABAAgBAAQAAAAgBAAQgEAAACgCIAGACQAIgDAAgCQABgDgKADQAtgQA1ggIgCADIAvgfIABgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAHgIADABQACAAAIgKIgJAMIAQgRIAPgRQACAAAMgKQAPgQAFgIQgBgBgHAHIAHgKIAIgGIAHgRIADABQAEgGACgIIAFgNQAQgbANgaQgCgDAIgWQAHgXgBgEQASgwADhfIABAEQACgMgDgLQgCgQAAgJIABAGQACgVgDgjQgDgfgFgYQAAACAAAAQABABAAAAQAAAAAAAAQABAAAAgBIAAgIQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBABQgBACAAgJQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIAAgEIgFgQQgHhHgRg5QAAgCgBAAQAAgBAAgBQAAAAAAAAQABgBAAABIACADQgFgVgLgbIgRgtIACgEQgCgGgFgFQgDgEgDgLIAIAQQgFgQgEgGQgGgIgFgMIAGAGQgEgOgFgGIgJgJQgIgMgDgNQgDgOgMgTQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgIgPgJgMIgRgaQgDgIAFAGQADAGgCgIIALATQgEgJAGAJQAJAMABgCQgJgPgZgeQABAAAGAIQAFAGgBgFIgHgHIAGAGQAAgCgEgFIgIgKQgCAAAAAFIgBgCIgXgbQgPgSgHgGQABAAAAABQAAAAAAAAQABAAAAAAQAAgBAAAAIgBgBIgNgNIgQgNIAAgFQAAgCgLgKIgDABQgCABgJgIQAOALgGgIQgIgHgBgCQgCgEgFgGQgEgCgHgHQgFgFgDACQgDgGgIgJQACADgLgHQgMgIgBABQgBgCAJAEQAHADgGgIIgSgKQgMgGgCABIgSgQIAEACIgkgVQgVgNgJgBQAFgCgWgLIgMgGQgDgDAGABQgSgHgLgCQACgCgNgFQgRgHgEgDQgDAAgMgDIgTgGQAIACgBgCIgLgDIgIgFQgJgCADADQADACgFAAQgIgDACgBIACgCIgWgBQgGgCgCgCIgGgBIgHgEIgWgBQgUgGgBgDIAEgGIANABQAAgCgPgDQgEgBAPAAQAOAAALACQAVAFAAADQABADALADIAFAAIAdAGIAAACQAEACAFAAQgBABAPAFIAaAJIgEgEQAZAIAUAMIASALIATAKIAVAHIACAFIAOAGQAIADAKAHQA8AsAeAZQAwApAgAnIgFgHQARAYAkAoQAfAlANAbIgDgDIAGALQgEgEAFAKQADABAKARIAQAcIgHgMIABAFIADAIQAQASAbA+IADASIAEAZIAJAMQACAMAHAOIgIgYIABABIgCgEIgDgIQAAgCgBgBQAAgBAAgBQAAAAABAAQAAAAAAAAQADAEABgBQAKAfgBABIAEAQIAEALIgBgBIAAACIAJAgIAKAcQgEgJAAAGIgBAIIgCgLIgHgeIgBAEQABAJAGAUQAGAUACAQQgBgBAAgBQAAgBgBgBQAAAAAAAAQgBAAAAAAQADASAEADQgBACABAOQABAOACAIIAEAKIACAQIgDgHQABALACAIIACAKIgBAAQAAAAAAAAQAAAAgBABQAAAAAAABQAAABAAABQACARAGAWIgCgDQAHAzgEAFQADgBAAAWIgDAnQAAgGgBgCQABAYgFAeIgKA1IgGAFQgCAIABAPQAAAMgDALIABgEIAAgEQgGAUgIAWIgQAjIgCgCIgPAgIgQAVIgiAuIgOAPQgTAQgLAHIABAFQgbAYgMACIADgCQgBgCgIAGIgPAKIgIAHQgDADAFgCQgxAYgVAIIgiAMQgRAFgKABQgpANgTAFQggAIghADIAAgBQgPABgQgBQgSgBAAgCIgvADIgRABQgQAAgTgCgAK5hLIAEARQgCgPABACIgBgEIgBgBIgBABg");
	this.shape_19.setTransform(75.2,73);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C6EFF3").s().p("AgBgDQACADAAAAIACAEQgGgJACACg");
	this.shape_20.setTransform(129.5,32.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C6EFF3").s().p("AACACQgIgCAGACQgKgEAGABIAGABQAIADgDAAIgFgBg");
	this.shape_21.setTransform(51.9,134.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C6EFF3").s().p("AgCgBIACAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAIAAACIgFgDg");
	this.shape_22.setTransform(107.9,24.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C6EFF3").s().p("AADARIgBgIQAEADgEgOIgCgKIgFgKQADgIAFAVIgCgCIgBACQAFALAAAGQABAKgBAHQgCgCAAgGg");
	this.shape_23.setTransform(124.8,61.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C6EFF3").s().p("AAAAFIgBgKIACAFQABADgBACIgBABIAAgBg");
	this.shape_24.setTransform(125.2,65.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

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


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FC0D1B").ss(0.3).p("AAmAZQgLAQgTAEQgRAEgQgLQgQgLgDgTQgEgRALgPQALgQASgEQARgEAQALQAQALAEATQAEAQgLAQg");
	this.shape_25.setTransform(8,8.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgZAmQgQgLgDgTQgEgRALgPQALgQASgEQARgEAQALQAQALAEATQAEAQgLAQQgLAQgTAEIgIABQgNAAgMgIg");
	this.shape_26.setTransform(8,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).wait(1));

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


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F2F2F2").s().p("AgLgpIAKgBIAjBPIgMABIgLgYIgaADIgGAZIgMABgAgMAFIASgCIgKgdIgBAAg");
	this.shape_120.setTransform(140.3,67.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F2F2F2").s().p("AgggnIAZgCQATgCALAOQAJAMABAOQACASgJALQgKANgQACIgZACgAgHgeIgNABIAFA8IAOgCQAJgBAHgHQAJgJgCgOQgBgLgHgIQgHgKgKAAIgEABg");
	this.shape_121.setTransform(132.7,68.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#F2F2F2").s().p("AgIgoIAJgBIAIBSIgJABg");
	this.shape_122.setTransform(127.4,68.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F2F2F2").s().p("AgggkIAMgBIAaA7IAQg/IALgBIgWBVIgHAAg");
	this.shape_123.setTransform(121.8,68.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F2F2F2").s().p("AgLgqIAKAAIAjBPIgNABIgKgYIgaADIgGAZIgMABgAgMAFIASgCIgLgdg");
	this.shape_124.setTransform(112.9,70);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F2F2F2").s().p("AgVgoIALgBIAHBHIAYgCIABALIgkADg");
	this.shape_125.setTransform(106.7,70.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F2F2F2").s().p("AgXgnIAogDIABALIgdADIADAYIAcgCIAAAJIgbADIACAZIAcgDIABAMIgnADg");
	this.shape_126.setTransform(97.9,71.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F2F2F2").s().p("AgEgcIgOABIgBgLIAmgEIABALIgOACIAGBHIgLABg");
	this.shape_127.setTransform(92.4,71.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F2F2F2").s().p("AgcgnIAYgCQAMgCAHAHQAIAGABANQACAOgJAGQgGAFgGABIAYAdIgPACIgaglIAAAAIADAnIgLABgAgDgeIgMABIADAeIAHgBQAFAAAFgBQAIgEAAgLQgCgOgMAAIgCAAg");
	this.shape_128.setTransform(87.3,72.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#F2F2F2").s().p("AgLgpIAKgBIAiBPIgMABIgKgYIgZADIgHAZIgLABgAgMAFIASgCIgKgdg");
	this.shape_129.setTransform(80.6,72.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F2F2F2").s().p("AgggkIALgBIAaA7IARg/IALgBIgWBVIgHAAg");
	this.shape_130.setTransform(73.5,73.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F2F2F2").s().p("AgVgoIALgBIAGBGIAZgCIABALIgkAEg");
	this.shape_131.setTransform(69.3,73.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#F2F2F2").s().p("AgLgpIAKgBIAiBPIgMABIgKgYIgZADIgHAZIgLABgAgMAFIASgCIgLgdg");
	this.shape_132.setTransform(63.2,74.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F2F2F2").s().p("AgMAnQgIgHgBgNIALgBQACAPAKgBQAFgBADgEQAEgEgBgGQgBgGgEgEIgIgDQgKgEgGgCQgFgEgBgLQgBgJAFgHQAFgIAKgBQAIgBAGAGQAHAGABAKIgLABQgCgMgIABQgFABgCAEQgDADABAEQAAAIALADIAOAGQAJAEABAOQABALgGAHQgGAIgKABIgDAAQgGAAgGgEg");
	this.shape_133.setTransform(56.4,74.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F2F2F2").s().p("AgXgnIAngEIABAMIgcADIACAYIAdgDIABAKIgdADIADAZIAcgDIABALIgnAFg");
	this.shape_134.setTransform(47.7,75.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F2F2F2").s().p("AgggoIAYgCQATgCAMAPQAIAKACAQQACARgJAMQgKANgRABIgYADgAgHgeIgNABIAFA7IAOgBQAJgBAHgHQAJgJgCgOQgBgMgHgIQgHgIgKAAIgEAAg");
	this.shape_135.setTransform(40.7,76.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#F2F2F2").s().p("AgXgmIAngFIABAMIgcACIADAaIAcgEIABAKIgcADIACAZIAcgCIABALIgnADg");
	this.shape_136.setTransform(34.1,76.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F2F2F2").s().p("AgMAmQgJgIgBgNIgFg3IALgBIAFA2QABAKAGAFQAEACADAAQAPgCgCgRIgFg3IALgBIAFA3QACANgHAJQgHAIgLABIgBABQgHAAgIgGg");
	this.shape_137.setTransform(27.6,77.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#F2F2F2").s().p("AgYgnIAWgCQAZgCACAZQADAXgcADIgIABIACAhIgLABgAgBgeIgLABIADAcIAJgBQAPgBgBgOQgCgNgMAAIgBAAg");
	this.shape_138.setTransform(21.2,78);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F2F2F2").s().p("Aggg2IA3gFIABAQIgnADIADAiIAngDIABANIgmAEIADAjIAmgEIACAQIg3AFg");
	this.shape_139.setTransform(69.7,8.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#F2F2F2").s().p("Ageg4IAPgBIAJBiIAjgDIABAPIgxAFg");
	this.shape_140.setTransform(62.9,9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#F2F2F2").s().p("Agig3IAegDQAQgBALAJQAKAIACAQQABAQgIAKQgJAJgSABIgNACIAEAtIgQACgAgCgqIgPABIADAnIAOgBQAUgCgBgTQgBgSgSAAIgCAAg");
	this.shape_141.setTransform(54.8,9.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#F2F2F2").s().p("Ag8gzIAZgCIAlBTIAYhZIAYgCIALBxIgQACIgJhgIAAAAIgbBjIgJABIgqhdIgBAAIAJBgIgPABg");
	this.shape_142.setTransform(43.8,10.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F2F2F2").s().p("AgLg3IANgCIAKByIgNABg");
	this.shape_143.setTransform(34.9,11.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F2F2F2").s().p("AgQA1QgMgKgCgRIAQgBQAAAFADAGQAFAJAIgBQAIAAAEgHQAFgFgBgJQgBgIgGgFQgDgCgIgCQgRgGgFgDQgIgHgBgPQgCgLAHgKQAHgLAOgCQALAAAKAHQAJAJABAOIgPACQgBgJgFgFQgFgCgDAAQgHABgDAFQgEAFABAGQAAAHAGAEIAJAEQAQAFAEADQAMAGACATQABAPgIAKQgIALgOACIgDAAQgJAAgIgHg");
	this.shape_144.setTransform(29.1,11.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#F2F2F2").s().p("Agtg1IARgBIA4BSIgHhWIAPgCIAKBxIgPACIg7hTIAJBXIgQACg");
	this.shape_145.setTransform(15.5,13);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#F2F2F2").s().p("AgRA0QgMgKgBgTIgHhMIAPgBIAHBMQABANAIAGQAGAEAFgBQAHAAAFgFQAHgHgBgOIgHhMIAPgBIAHBMQACASgKANQgKAKgOACIgDAAQgJAAgLgIg");
	this.shape_146.setTransform(5.1,13.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F2F2F2").s().p("AgxAyIAMgBIgJhdIgMABIgEgqIA+gFIACApIgKABIAIBeIAVgCIgBgOIAmgDIAFA3IhtAJg");
	this.shape_147.setTransform(119.5,48.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F2F2F2").s().p("AhCA0IAOgBIAFhfIgLABIgDgpIBfgJIADAqIgKABIAVBcIAPgBIADApIg9AGIgDgqIAJgBIgDgOIgVACIgBAPIAJgBIAEApIg9AGgAgMAFIANgBIgKgzg");
	this.shape_148.setTransform(106.5,49.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F2F2F2").s().p("AgxA0IAMAAIgJheIgMABIgEgpIAzgFIAaBEIgGhGIAygEIADApIgLABIAMCHIgpAEIgXg8IADA9IgwAFg");
	this.shape_149.setTransform(92,51.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#F2F2F2").s().p("AgYAyIALgBIgJhdIgLABIgEgqIA7gFIAEApIgMABIAJBeIALgBIAEApIg7AGg");
	this.shape_150.setTransform(81.5,52);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F2F2F2").s().p("AhKA2IAMgBIgIhdIgNABIgEgqIAzgEIAkBVIABAAIAUhaIAzgFIAEAqIgNABIAJBdIAMgBIAEApIgyAFIgGg+IgOBAIgTACIgZg8IAFA9IgyAFg");
	this.shape_151.setTransform(68.6,53.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#F2F2F2").s().p("AgqBHIgLiAIAVgcIAxgFIAaAYIALB+IgVAaIgwAFgAgPgtIAJBdIAVgCIgIhdg");
	this.shape_152.setTransform(53.9,54.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#F2F2F2").s().p("AgwAzIAMgBIgJheIgLACIgFgqIBWgIIAZAYIAMB+IgWAbIhUAIgAgHgvIAHBdIAWgCIgIhdg");
	this.shape_153.setTransform(41.4,55.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#F2F2F2").s().p("AgwAzIAMgBIgJhdIgMABIgDgqIBPgHIAfAWIAEAsIgVAXIAZAQIADArIgVAcIhVAHgAgBAUIABAaIAWgCIgCgagAgHgvIADAbIAUgCIgCgbg");
	this.shape_154.setTransform(28.9,56.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#F2F2F2").s().p("AhCA0IAOgBIAFhfIgKABIgEgpIBegJIAEAqIgKABIAWBcIAOgBIAEApIg9AGIgEgqIAJgBIgEgOIgUACIgBAPIAJgBIAEAqIg9AFgAgMAFIANgBIgKgzg");
	this.shape_155.setTransform(16.3,57.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#F2F2F2").s().p("AgqBHIgMiAIAXgdIAwgEIAaAYIALB/IgVAZIgxAFgAgOgtIAIBdIAVgBIgIheg");
	this.shape_156.setTransform(135.8,23.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#F2F2F2").s().p("AgxAzIANgBIgJheIgMABIgEgpIBVgHIAaAXIAMB/IgWAaIhUAHgAgHguIAHBcIAWgCIgIhdg");
	this.shape_157.setTransform(123.3,24.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F2F2F2").s().p("AgZAyIAMgBIgJheIgLABIgEgpIA7gGIAEAqIgLABIAIBeIAMgBIADApIg7AGg");
	this.shape_158.setTransform(113,25.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F2F2F2").s().p("AgyA1IANgBIgIheIgNABIgDgpIAxgFIAcBFIgHhHIAygEIAEApIgNABIANCIIgpADIgXg8IADA9IgwAFg");
	this.shape_159.setTransform(101.5,26.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#F2F2F2").s().p("AgqBHIgMiAIAXgdIAwgEIAaAYIALB+IgVAbIgxAEgAgPgtIAJBdIAVgCIgIhdg");
	this.shape_160.setTransform(89.3,27.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#F2F2F2").s().p("AgqBHIgDggIAmgEIABANIAVgCIgCgaIgcABIgigXIgEg3IAWgcIAwgFIAaAXIACAdIglAEIgBgNIgVACIACAbIAhgDIAcAYIAFA5IgVAaIgwAFg");
	this.shape_161.setTransform(77.5,28.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#F2F2F2").s().p("AhBA1IANgCIAFheIgLAAIgDgpIBfgJIADApIgKABIAVBdIAPgCIADAqIg8AGIgEgqIAJgBIgDgOIgWADIAAANIAJAAIAEAqIg9AFgAgLAGIAMgCIgKgzg");
	this.shape_162.setTransform(65.3,30.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#F2F2F2").s().p("Ag4AzIAMgBIgIheIgMACIgEgqIBPgHIAgAWIAEAsIgVAXIAYAQIADAbIANgBIADApIgyAFIgHhEIgUACIAGBEIgyAEgAgOgvIACAbIAVgCIgDgbg");
	this.shape_163.setTransform(50.5,31.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#F2F2F2").s().p("AgUAzIAMgBIgIhdIgJAAIACAVIgcADIgGg/IBtgJIAFA9IgbADIgCgVIgJABIAJBdIALgBIAEAqIg7AFg");
	this.shape_164.setTransform(36.7,32.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F2F2F2").s().p("AgxAyIAMgCIgJhcIgMABIgEgqIA+gFIACApIgKABIAIBeIAVgCIgBgOIAmgDIAFA3IhtAKg");
	this.shape_165.setTransform(27.1,33.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F2F2F2").s().p("AgpBIIgKhvIgMABIgDgqIA9gFIADApIgLABIAIBdIAegDIgIhdIgLABIgEgpIA9gFIAEApIgMABIAKBuIgWAaIg5AFg");
	this.shape_166.setTransform(12.9,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,2.2,142.5,80.2);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1163A").s().p("AgTAXIABguIAmABIgUAug");
	this.shape.setTransform(11.6,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.6,5.6,4.1,4.9);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E1163A").s().p("AgTAYIABgvIAmABIgUAug");
	this.shape_27.setTransform(12.2,8);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

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


(lib.ultrasonido = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_2();
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

	this.instance = new lib.Path_2();
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
	this.instance = new lib.Path_3();
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


(lib.hipertension3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.YSUFRESDE();
	this.instance.parent = this;
	this.instance.setTransform(15,-60.7,1,1,0,0,0,58,13.8);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",1,1,9);

	this.instance_1 = new lib.Group_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36.1,-40.3,1,1,0,0,0,76.1,23.4);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",2,2,15);

	this.instance_2 = new lib.Path();
	this.instance_2.parent = this;
	this.instance_2.setTransform(70.1,7.1,1,1,0,0,0,75,73.2);
	this.instance_2.alpha = 0.559;
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",6,6,13);

	this.instance_3 = new lib.Group();
	this.instance_3.parent = this;
	this.instance_3.setTransform(67.7,10.6,1,1,0,0,0,26.9,39.9);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",6,6,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.9,-80.9,218.6,177.3);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#F2F2F2").s().p("AgOBLQgJgDgGgFQgIgGgFgIQgCgFgBgFIgCgMIAdAAQAAAGACAEIAFAGQAFAFAGAAQAIgBAGgFQADgCACgEQACgDAAgFQAAgFgCgEQgCgEgEgCQgEgDgPgGQgkgKAAggQAAgJADgIQAEgHAGgHQAGgFAIgEQAIgDAHAAQAHAAAHACQAIADAGAFQAHAFAFAJQAEAIABALIgdAAIgCgIQgBgEgDgCQgEgDgGAAQgFAAgFAEQgEAFAAAHQAAAEACAEQABACAEADQAEADAMAFIALADQAIAEAFAFQAHADAEAIQAEANAAAHIgBAMIgDAKQgEAJgHAGQgHAFgJADQgIADgJAAQgGAAgIgCg");
	this.shape_167.setTransform(146.6,169.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#F2F2F2").s().p("AAqBnIgPgnIg0AAIgQAnIgfAAIA+iUIAUAAIA/CUgAARAmIgRgsIAAAAIgQAsIAhAAgAgXhLIArgbIALAVIgrAZg");
	this.shape_168.setTransform(133.4,167);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#F2F2F2").s().p("AAyBLIAAhvIgBAAIgmBvIgWAAIgmhvIAAAAIAABvIgcAAIAAiVIAmAAIAnBwIAAAAIAohwIAmAAIAACVg");
	this.shape_169.setTransform(116.2,169.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#F2F2F2").s().p("AgOBMIgPgEIgNgIIgMgJIgKgLIgHgOQgDgHgBgHQgCgIAAgIQAAgGACgIIAEgQQADgHAFgFQAEgHAFgFIAMgJQAGgFAHgCIAPgGIAOgBIAPABIAPAGQAHACAGAFIAMAJQAFAFAEAHQAFAFADAHIAEAQQACAIAAAGQAAAIgBAIIgFAOIgHAOIgKALIgMAJIgNAIIgPAEQgHABgIAAQgHAAgHgBgAgSgvQgJAFgHAHQgHAHgEAJQgEAKAAAJQAAAKAEAJQADAKAHAHQAHAIAJADQAKAEAJABQAKgBAKgEQAJgDAHgIQAHgHADgKQAEgJAAgKQAAgJgEgKQgEgJgHgHQgHgHgJgFQgJgEgKAAQgJAAgJAEg");
	this.shape_170.setTransform(91.6,169.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#F2F2F2").s().p("AgYB9QgOgFgLgJQgNgJgIgOQgEgHgCgJQgDgJAAgKIAwAAQABAJADAGQADAGAFAFQAJAHAKAAQAOgBAKgIQAFgEACgGQADgGAAgHQAAgJgDgGQgDgGgGgFQgHgFgbgKQg7gRAAg0QAAgPAFgNQAFgNAKgKQAKgKANgFQAOgFAOAAQALgBAMAEQAMAEALAIQALAKAHAMQAIAOABASIgvABQgBgIgCgGQgDgFgEgEQgHgFgJAAQgLAAgHAHQgHAIAAALQAAAHADAGQACAFAGAEQAHAEAVAIIATAHQANAFAJAIQALAHAGANQAIAUAAAOQAAAKgCAIIgFARQgGAOgMALQgLAJgPAFQgOAFgPABQgLAAgNgEg");
	this.shape_171.setTransform(133.3,16.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#F2F2F2").s().p("AhCh6ICDgCIAAAsIhVABIABA8IBRgBIAAAqIhRABIAAA6IBWgBIAAArIiDABg");
	this.shape_172.setTransform(115.1,16.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#F2F2F2").s().p("Ahkh6IA0AAIBmCxIABAAIgCiyIAugBIACD3IgzAAIhnixIgBAAIACCyIguABg");
	this.shape_173.setTransform(93,16.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#F2F2F2").s().p("AhCh6ICDgBIAAArIhVABIABA9IBRgCIAAApIhRABIAAA7IBWgBIAAArIiDACg");
	this.shape_174.setTransform(70.9,16.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#F2F2F2").s().p("AgWh6IAsgBIACD2IgsABg");
	this.shape_175.setTransform(56.6,17.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#F2F2F2").s().p("AgWhPIguAAIAAgrICIgBIAAArIguAAIACDMIgsAAg");
	this.shape_176.setTransform(43.8,17.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F2F2F2").s().p("AgXh7IAtAAIACD3IgsAAg");
	this.shape_177.setTransform(20.8,17.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#F2F2F2").s().p("AgYB9QgOgFgLgJQgNgJgIgOQgEgHgCgJQgDgJAAgKIAwAAQABAJADAGQADAGAFAFQAJAHAKAAQAOgBAKgIQAFgEACgGQADgGAAgHQAAgJgDgGQgDgGgGgFQgHgFgbgKQg7gRAAg0QAAgPAFgNQAFgNAKgKQAKgKANgFQAOgFAOAAQALgBAMAEQAMAEALAIQALAKAHAMQAIAOABASIgvABQgBgIgCgGQgDgFgEgEQgHgFgJAAQgLAAgHAHQgHAIAAALQAAAHADAGQACAFAGAEQAHAEAVAIIATAHQANAFAJAIQALAHAGANQAIAUAAAOQAAAKgCAIIgFARQgGAOgMALQgLAJgPAFQgOAFgPABQgLAAgNgEg");
	this.shape_178.setTransform(6.3,17.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#F2F2F2").s().p("AgYB+QgOgFgLgJQgNgJgJgOQgEgIgCgIQgCgJgBgKIAxgBQABAJADAHQADAGAFAEQAIAIALAAQAOgBAKgJQAFgEACgGQADgGAAgGQAAgKgDgGQgDgGgGgFQgHgFgbgKQg7gRgBg1QAAgPAFgNQAGgNAKgKQAJgKAOgFQAOgGAOAAQALAAALAEQAOAEAKAIQAMAKAHAMQAIAOABATIgwAAQgBgIgCgGQgDgFgEgDQgHgGgJABQgLAAgIAHQgGAHgBALQABAIADAFQADAGAFADQAHAFAVAHIATAHQANAGAKAIQAKAHAHANQAIAUAAAOQAAAKgCAJIgFAQQgGAPgMALQgMAJgOAFQgOAFgQABQgLAAgNgEg");
	this.shape_179.setTransform(151.2,141.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#F2F2F2").s().p("AgYB/QgNgCgMgFQgLgFgKgHQgLgHgJgJQgJgIgIgLQgHgKgEgLQgGgMgCgNQgDgMgBgOQAAgMADgNQACgNAGgMQAFgLAHgLQAHgLAJgJQAJgIAKgHQAKgHAMgGQAMgFANgCQANgDAMAAQAMAAANACQANADALAFQAMAEALAHQAKAHAJAJQAJAJAHAKQAIALAEALQAGAMACANQADANABANQAAAMgDANQgCAMgFAMQgFAMgIALQgGAKgKAJQgHAJgLAHQgKAHgMAFQgNAFgMADQgNACgOABQgLAAgNgDgAAAhVQgRAAgQAGQgOAHgMANQgMAMgGAPQgGARAAAPQAAARAGARQAIAPALAMQAMAMAOAGQARAIAPAAQASgBAQgHQAPgHAMgMQALgMAGgQQAGgQAAgQQAAgRgHgQQgGgQgMgLQgMgMgPgHQgPgGgQAAIgBAAg");
	this.shape_180.setTransform(127.4,141.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#F2F2F2").s().p("AhlhaIA1AAIBnCzIABAAIgCi1IAuAAIACD4IgzABIhpizIAAAAIABC0IguAAgAgEh4QgJgCgIgBQgJAAgIADIgKAFIgSgbQARgOAWgCQAIABATAFQANAEAIgBQANAAAMgHIATAaQgWAQgRAAIgBAAQgIAAgVgGg");
	this.shape_181.setTransform(99.7,138.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#F2F2F2").s().p("AgTh8IAiAAIBrD3IgzABIgbhBIhYABIgaBBIgzAAgAgdAQIA4gBIgbhKIgBAAg");
	this.shape_182.setTransform(73.8,141.9);

	this.instance = new lib._65();
	this.instance.parent = this;
	this.instance.setTransform(70.2,84.3,1,1,0,0,0,56.9,77.9);
	this.instance.shadow = new cjs.Shadow("rgba(33,57,67,0.149)",0,5,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,1.6,245,181.8);


(lib._65años = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_3();
	this.instance.parent = this;
	this.instance.setTransform(39.5,0.5,1,1,0,0,0,120.5,92.4);
	this.instance.shadow = new cjs.Shadow("rgba(28,40,7,0.498)",0,3,9);

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.3,-12,1,1,0,0,0,75.2,73);
	this.instance_1.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143,-97.3,269,205);


// stage content:
(lib._180x150 = function(mode,startPosition,loop) {
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

	// Layer 8
	this.instance = new lib.webpage("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-105,114.1,1.68,1.68,0,0,0,39.5,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80).to({_off:false},0).to({x:90},3).wait(16).to({startPosition:0},0).wait(1));

	// Layer 7
	this.instance_1 = new lib.min65("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(314.1,60.2,1.63,1.63,0,0,0,39.5,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80).to({_off:false},0).to({x:91.1},3).wait(17));

	// Layer 6
	this.instance_2 = new lib.AAA("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(90,230.1,1.44,1.44,0,0,0,39.5,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).to({regX:39.6,regY:0.1,scaleX:1.35,scaleY:1.35,x:90.4,y:107.9},3).wait(16).to({startPosition:0},0).to({x:292.4,y:109.2},3).to({_off:true},1).wait(17));

	// Layer 5
	this.instance_3 = new lib.INFORMATE("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(95.3,-59.8,1.26,1.26,0,0,0,39.5,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60).to({_off:false},0).to({scaleX:1.18,scaleY:1.18,x:95,y:43.9},3).wait(16).to({startPosition:0},0).to({x:-122},3).to({_off:true},1).wait(17));

	// Layer 4
	this.instance_4 = new lib.ultrasonido("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(299,77,1.21,1.21,0,0,0,-0.5,-0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40).to({_off:false},0).to({x:90},3).wait(16).to({startPosition:0},0).to({x:93.8,y:233},3).to({_off:true},1).wait(37));

	// Layer 3
	this.instance_5 = new lib.hipertension3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-97.9,77.1,0.88,0.88,0,0,0,47.6,0.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({x:91.1},4).wait(16).to({startPosition:0},0).to({x:-110.9},3).to({_off:true},1).wait(57));

	// Layer 2
	this.instance_6 = new lib._65años("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-105,81,0.76,0.76,0,0,0,-10.5,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:86,y:78.1},3).wait(16).to({startPosition:0},0).to({x:287,y:81},3).to({_off:true},1).wait(77));

	// Layer 1
	this.instance_7 = new lib.FONDO180X150();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-4,-3,1.04,1.04);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.1,72,391.3,170.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;