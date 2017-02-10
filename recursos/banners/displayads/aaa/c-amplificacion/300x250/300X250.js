(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"./FONDO300X250.jpg", id:"FONDO300X250"}
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



(lib.FONDO300X250 = function() {
	this.initialize(img.FONDO300X250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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


(lib.ROJOENRIESGODEPADECERLOTÚTAMBIÉNESTÁScopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgFA1IATgCIACAaIgSABgAgPhMIASgBIAKBzIgTACg");
	this.shape.setTransform(182,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgvA8QgXgWgDghQgCgeATgaQAUgbAggBQAdgDAXAXQAXAWADAhQACAfgTAaQgTAZggADIgGAAQgZAAgWgVgAgDg7QgZACgNAWQgMASACAUQABAXAOAQQASATAWgCQAagBANgWQAMgTgCgTQgBgXgPgQQgQgSgVAAIgDAAg");
	this.shape_1.setTransform(170.6,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgohMIAVgBIALCFIAvgEIACAVIhFAFg");
	this.shape_2.setTransform(158.4,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ag0hLIAsgDQAXgDAOANQAOAMACAYQADAbgQAMQgLAJgNABIAsA3IgaACIgyhFIgBAAIAHBJIgVABgAgIg5IgVABIAEA6IAPgBQAlgBgCgfQgBgLgIgIQgIgHgLAAIgFAAg");
	this.shape_3.setTransform(147.3,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgrhKIBLgGIABAVIg2AFIAEAuIA2gFIACATIg2AFIADAvIA2gEIACAVIhLAGg");
	this.shape_4.setTransform(135.9,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgrA9QgXgXgDghQgCggAUgZQATgZAegCQAXgCAUANQAMAJAMARIgZACQgUgUgUACQgWABgOATQgOATACAXQACAZARAQQARARATgCQAXgCAPgWIAZgCQgJAXgSAMQgQALgSABIgGAAQgZAAgVgUg");
	this.shape_5.setTransform(122.9,5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgrhKIBLgGIABAVIg1AFIADAuIA2gFIACATIg2AFIAEAvIA1gEIACAVIhKAGg");
	this.shape_6.setTransform(109.7,6.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ag9hLIAugDQAlgEAVAcQARAWACAbQABAOgDAPQgEAQgIAJQgSAYghADIguAEgAgNg5IgaACIAJBwIAZgCQAUgBANgOQAQgQgDgcQgCgVgMgPQgPgRgVAAIgEAAg");
	this.shape_7.setTransform(96.9,7.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgUhOIATgBIBACVIgWACIgUgsIgxADIgMAvIgWADgAgWAKIAjgDIgVg4IgBAAg");
	this.shape_8.setTransform(83.5,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AguhLIApgDQAXgCAOAMQANALACAWQACAWgMANQgMAMgYACIgTACIAFA+IgVABgAgDg5IgVABIAFA1IATgCQAdgCgDgaQgBgLgGgGQgHgHgMAAIgDAAg");
	this.shape_9.setTransform(72.3,9.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgrhKIBLgGIACAVIg2AFIADAuIA2gFIABATIg1AFIAEAvIA2gEIABAVIhKAGg");
	this.shape_10.setTransform(55.5,10.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("Ag9hLIAugDQAlgEAVAcQARAWACAbQABAOgDAPQgEAQgIAJQgSAYghADIguAEgAgNg5IgaACIAJBwIAZgCQAUgBANgOQAQgQgDgcQgCgVgMgPQgPgRgVAAIgEAAg");
	this.shape_11.setTransform(42.7,11.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgvA8QgXgVgCgiQgDgeATgZQATgbAggCQAegDAXAXQAXAVADAiQACAfgTAaQgUAZgfADIgGAAQgaAAgVgVgAgEg7QgYACgOAXQgLASACAUQACAWAOAQQAQAUAXgCQAagCANgWQAMgTgCgTQgCgXgPgQQgPgSgVAAIgEAAg");
	this.shape_12.setTransform(21.2,13.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AguA9QgXgWgDghQgCggATgaQATgZAfgDQARgBARAJQATAKAMAUIgYABQgUgUgTACQgWACgOATQgOATACAXQACAZASAQQARAQATgBQAkgFAKgmIhBAFIgBgVIBYgFQACAjgWAZQgTAWgcADIgFAAQgaAAgVgUg");
	this.shape_13.setTransform(4.6,14.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgYBHQgQgMgCgYIAVgCQABAJAEAHQAHAMALgBQALgBAFgIQAGgIgBgMQgBgLgIgGQgDgCgLgEQgXgIgIgFQgKgKgCgTQgBgQAJgNQAKgPASgCQAQgBANALQAMALACAUIgVABQgBgMgIgFQgFgEgGAAQgJABgFAIQgEAGABAIQAAAKAIAFIAMAFQAWAIAGAEQAQAJACAZQACAVgLAOQgLAOgUACIgEAAQgMAAgMgKg");
	this.shape_14.setTransform(-8.7,15.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgrhKIBLgGIABAVIg1AFIADAuIA2gFIACATIg3AFIAFAvIA1gEIACAVIhLAGg");
	this.shape_15.setTransform(-19.1,16.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgPhMIATgCIAMCbIgTACg");
	this.shape_16.setTransform(-27.2,17.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("Ag0hLIAsgDQAYgDAOANQAOAMABAYQACAbgPAMQgLAJgNABIAsA3IgZACIgzhFIAFBJIgUABgAgHg5IgWABIAEA6IAPgBQAlgBgDgfQgBgLgHgIQgIgHgLAAIgEAAg");
	this.shape_17.setTransform(-35.7,18);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("Ag9hIIAWgCIBNBwIABAAIgKh2IAVgBIAMCbIgWABIhNhxIgBAAIAKB2IgVACg");
	this.shape_18.setTransform(-55.2,19.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgrhKIBLgGIABAVIg1AFIADAuIA2gFIABATIg2AFIAEAvIA2gEIACAVIhLAGg");
	this.shape_19.setTransform(-67.8,20.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgYBHQgQgMgCgYIAVgCQABAJAEAHQAHAMALgBQAKgBAGgIQAGgIgBgMQgBgLgIgGIgOgGIgUgIQgGgBgFgFQgKgIgCgUQgCgQAJgNQALgPASgCQAQgBAMALQANALABAUIgUABQgBgMgIgFQgFgEgGAAQgJABgFAIQgEAGABAIQAAAKAIAFQADADAJACQAWAIAGAEQAQAJACAZQACAUgLAPQgLAOgUACIgEAAQgMAAgMgKg");
	this.shape_20.setTransform(79.1,-15.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgUg1IATgBIBACWIgWACIgTgtIgyAEIgMAvIgWACgAgWAjIAjgDIgVg4IAAAAgAgihKIAngfIAJARIgnAdg");
	this.shape_21.setTransform(67.7,-16.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgIg2IgbADIgCgWIBJgFIACAUIgbACIAKCGIgUACg");
	this.shape_22.setTransform(55.5,-13.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgYBHQgQgMgBgYIAUgCQABAJAEAHQAHAMAMgCQAKgBAFgHQAGgIgBgMQAAgLgJgGQgDgDgLgEIgUgHQgGgBgFgFQgKgJgCgTQgBgQAJgNQAKgPATgCQAQgBAMALQAMALACAUIgVABQgBgMgHgFQgGgFgGABQgIAAgFAIQgFAHABAIQABAJAHAGQAEACAJADQAVAHAGAFQAQAJACAZQACAUgLAOQgLAPgUABIgEABQgNAAgLgKg");
	this.shape_23.setTransform(46.8,-12.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgrhJIBLgGIABAUIg2AFIAEAuIA2gFIACATIg2AEIAEAwIA1gFIACAVIhKAHg");
	this.shape_24.setTransform(36.5,-12);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("Ag9hIIAXgCIBMBvIgJh1IAVgBIAMCaIgVACIhOhxIgBAAIAKB2IgVACg");
	this.shape_25.setTransform(17.8,-10.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgrgxIBKgGIADAVIg3AEIAEAsIA2gEIABAVIg1AEIADAwIA3gFIABAVIhLAGgAgdhKIAngeIAJAQIgnAdg");
	this.shape_26.setTransform(5.3,-12.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgPhMIASgBIANCZIgTACg");
	this.shape_27.setTransform(-2.8,-8.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgwhLIAlgDQAYgCANARQAIAKABAPQABARgLANQAWAKACAZQABAQgIANQgLASgaACIgoADgAAAAGIgUABIAEAyIAUgCQAOgBAGgKQAFgHgBgJQgBgIgFgHQgHgHgOAAIgBAAgAgZg4IADAsIARgBQAWgCgDgWQgBgUgWAAg");
	this.shape_28.setTransform(-11.3,-8.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AhQhHIAggCIAzByIAhh5IAhgCIAMCZIgUACIgLiCIgBABIglCFIgMABIg5h+IgBAAIALCCIgVABg");
	this.shape_29.setTransform(-26.6,-7.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgUhOIASgCIBBCXIgWABIgUgtIgxAFIgMAvIgWABgAgWAKIAigCIgUg5IgBAAg");
	this.shape_30.setTransform(-42.1,-5.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgIg2IgbACIgCgVIBJgGIACAVIgbADIALCFIgVACg");
	this.shape_31.setTransform(-53.8,-5.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgYBfQgQgPgCgYIgIhoIAUgCIAJBnQABATALAIQAIAFAHgBQAJAAAHgHQAKgJgBgTIgJhnIAVgCIAIBoQACAZgNAQQgNAPgTABIgEABQgOAAgOgLgAgVhKIAmgfIAKARIgnAdg");
	this.shape_32.setTransform(-69.6,-6.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgIg2IgcACIgBgVIBJgGIACAVIgbACIAKCGIgUACg");
	this.shape_33.setTransform(-80.5,-3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgMglIASgBIAKBzIgSACgAgPhMIASgCIACAaIgSACg");
	this.shape_34.setTransform(-86.9,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.5,-27.4,272.1,55.8);


(lib.OrticoQUEHASUFRIDOUNSITIENESUNFAMILIARAneurisma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1163A").s().p("AglgqIBLgIIgcBhIglAEg");
	this.shape.setTransform(0.9,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AhPCLIgcj3IAqg4IBfgKIAyAsIAcD0IgoAzIhfAKgAgfhXIAUC1IArgGIgVi0g");
	this.shape_1.setTransform(109.7,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AhPCKIgcj2IAqg4IBfgLIAyAsIAJBSIhIAIIgGgzIgqAFIAUC0IArgFIgGg0IBIgIIAKBVIgoAzIhfALg");
	this.shape_2.setTransform(87.3,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AguBhIAVgCIgUi1IgWADIgJhQIBygNIAJBPIgVADIAUC1IAWgCIAJBPIhyANg");
	this.shape_3.setTransform(68.3,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AgiBkIAWgDIgVi0IgQABIAFAoIg1AGIgOh3IDRgYIAOB3Ig1AGIgEgnIgRACIAUC0IAWgCIAJBQIhyAMg");
	this.shape_4.setTransform(47.8,18.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AhqBjIAXgCIgUi0IgYACIgJhPICagSIA9ApIAKBVIgnAtIAvAgIAGAzIAZgDIAJBPIhhALIgPiCIgpAFIAPCCIhhALgAgfhcIAGA0IApgFIgGgzg");
	this.shape_5.setTransform(26.4,21.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AhPCLIgcj3IAqg4IBfgKIAyAsIAcD0IgoAzIhfAKgAgfhXIAUC1IArgGIgVi0g");
	this.shape_6.setTransform(1.6,24.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AiABnIAagDIAFi3IgUACIgIhQIC3gUIAJBPIgVACIAuCyIAcgDIAJBPIh1AOIgJhQIARgCIgHgaIgpAEIgBAcIASgCIAJBPIh1AOgAgbAKIAbgDIgYhjg");
	this.shape_7.setTransform(-21.5,27.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("Ag5hCIAVgCIBHBmIABAAIgKhsIATgBIANCNIgUACIhJhnIAKBtIgTACg");
	this.shape_8.setTransform(138.6,-61);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AgVBBQgPgNgCgXIgJhfIAUgCIAIBfQACARAKAHQAHAFAHgBQAIAAAGgGQAJgJgBgRIgJhfIATgCIAJBfQACAYgMAOQgMAOgSABIgFABQgMAAgMgKg");
	this.shape_9.setTransform(125.7,-60);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AgqA4QgWgVgCgdQgDgdARgXQASgZAdgCQAbgCAWAUQAVAUADAfQACAcgRAXQgSAYgdADIgGAAQgXAAgTgSgAgDg2QgXACgNAUQgKASACASQABAUAOAPQAQASAVgCQAXgCAMgUQAKgSgBgRQgCgVgOgQQgPgPgSAAIgDAAg");
	this.shape_10.setTransform(106.8,-58.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("Ag5hEIArgEQAhgDAVAYQAPAUACAZQABANgDAOQgDAPgHAIQgRAWgeAEIgqADgAgNg1IgXACIAKBnIAWgCQASgBAMgNQAOgPgCgZQgCgUgMgOQgMgPgTAAIgGAAg");
	this.shape_11.setTransform(92.2,-56.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AgOhGIARgBIAMCNIgRACg");
	this.shape_12.setTransform(83.1,-56.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AgwhFIAogDQAWgCAMALQANAMACAVQACAYgOALQgKAJgMABIAqAyIgYADIgvg/IgBAAIAGBCIgTACgAgIg1IgTACIAEA1IAOgBQAigBgDgdQgBgKgHgHQgHgHgKAAIgFAAg");
	this.shape_13.setTransform(75.3,-55.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AgjhEIBAgFIACATIguAEIAFArIAtgEIABARIgtAEIAGA+IgUACg");
	this.shape_14.setTransform(64.9,-54.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2F2F2").s().p("AgWBBQgOgNgCgXIgJhfIATgCIAJBfQABARALAHQAHAFAGgBQAJAAAGgGQAJgJgCgSIgIheIATgCIAIBfQACAXgMAPQgMAOgRABIgEABQgNAAgNgKg");
	this.shape_15.setTransform(54.3,-53.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2F2F2").s().p("AgVBCQgPgMgBgWIATgBQABAIADAGQAHALAKgBQAJgBAGgHQAFgHgBgLQgBgLgIgFQgDgDgKgDQgVgHgHgFQgKgJgCgRQgBgOAIgNQAJgOASgBQAOgCALAKQAMALACARIgUACQAAgLgHgFQgFgEgGABQgIAAgEAIQgEAGABAHQABAOASAEQATAHAGAEQAPAIACAXQACATgKANQgKANgSACIgFAAQgLAAgKgIg");
	this.shape_16.setTransform(44,-52.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2F2F2").s().p("AgUhIIARgBIA8CJIgUACIgSgpIgtAEIgKAsIgVABgAgVAJIAggDIgTgzIgBAAg");
	this.shape_17.setTransform(28.2,-51);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2F2F2").s().p("AgzhCIATgCIAGA+IA0gFIgGg+IATgCIANCOIgTACIgGg/Ig0AGIAGA+IgTACg");
	this.shape_18.setTransform(15,-50.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F2F2F2").s().p("AgohDIBEgHIACAUIgxAFIAEAqIAxgFIACARIgyAFIAEAsIAxgFIACATIhEAHg");
	this.shape_19.setTransform(-1.4,-48.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2F2F2").s().p("AgWBBQgOgNgCgWIgJhgIATgBIAJBeQABASALAHQAHAEAGAAQAYgEgCgdIgIhfIATgCIAIBgQACAWgMAQQgMANgRACIgEAAQgNAAgNgKg");
	this.shape_20.setTransform(-12.4,-47.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F2F2F2").s().p("AguA4QgWgUgCgfQgDgdARgXQASgYAcgCQAbgDAVAVQAWAUACAeQACAXgNAbQAHAEAMgBIACAUQgSABgQgKQgSAOgTABIgEAAQgYAAgTgSgAgYAgQgJAAgGAEQARAUAWgBQAMgBAIgIQgVgPgSAAIgFABgAAiAiQALgSgCgTQgCgWgPgQQgQgPgSACQgUACgNARQgMASACAWIADANQAJgFAPgBIAGAAQAXAAAdAWg");
	this.shape_21.setTransform(-25.4,-46.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F2F2F2").s().p("AgwhFIAogDQAWgCAMALQAOAMACAVQACAYgPALQgJAJgMABIApAyIgXACIgwg+IAAAAIAGBCIgTACgAgHg1IgUACIAEA1IAOgBQAigDgCgbQgCgKgGgHQgIgHgKAAIgEAAg");
	this.shape_22.setTransform(124.7,-81.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F2F2F2").s().p("AgUhIIARgCIA9CKIgVACIgSgpIgtAEIgLAsIgUABgAgVAJIAggDIgUgzg");
	this.shape_23.setTransform(113.3,-80.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F2F2F2").s().p("AgOhGIARgBIAMCNIgRACg");
	this.shape_24.setTransform(103.8,-80.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F2F2F2").s().p("AglhGIATgBIALB6IArgDIACATIg+AFg");
	this.shape_25.setTransform(97.8,-79.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F2F2F2").s().p("AgPhGIARgBIAOCNIgRACg");
	this.shape_26.setTransform(90.4,-79.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F2F2F2").s().p("AhKhAIAegDIAvBpIAehwIAdgCIANCNIgTACIgLh4IAAAAIgiB8IgLABIg1h0IAKB4IgTABg");
	this.shape_27.setTransform(79.3,-78.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F2F2F2").s().p("AgUhIIARgBIA9CJIgVACIgSgpIgtAEIgLAsIgUABgAgVAJIAggDIgUgzg");
	this.shape_28.setTransform(65.1,-76.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F2F2F2").s().p("AgjhDIBAgGIABATIgtAEIAFArIAtgEIABARIgtAFIAFA+IgTABg");
	this.shape_29.setTransform(54.9,-76);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F2F2F2").s().p("Ag5hCIAVgCIBHBmIgJhrIATgCIANCNIgUADIhJhoIAAAAIAKBtIgTACg");
	this.shape_30.setTransform(38.3,-74.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F2F2F2").s().p("AgWBBQgOgNgCgXIgJhfIATgCIAJBfQABASALAGQAHAFAGgBQAJAAAGgGQAJgJgCgRIgIhfIATgCIAIBgQACAWgMAQQgMANgRACIgEAAQgMAAgOgKg");
	this.shape_31.setTransform(25.3,-73.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2F2F2").s().p("AgVBCQgPgMgCgWIATgBQABAIAEAGQAHALAKgBQAJgBAFgHQAGgHgBgLQgBgLgIgFQgDgDgKgDQgUgGgJgGQgJgIgCgSQgBgOAIgNQAJgNARgCQAPgCALAKQAMALABARIgTACQgBgLgGgFQgGgEgFABQgIAAgEAIQgEAGAAAHQACAOASAEQATAHAGAEQAPAIACAXQACATgKANQgKANgSACIgEAAQgMAAgKgIg");
	this.shape_32.setTransform(9.6,-71.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F2F2F2").s().p("AgohEIBEgGIACATIgxAFIADArIAygFIACARIgyAFIAEAsIAxgFIACATIhEAGg");
	this.shape_33.setTransform(0,-71);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F2F2F2").s().p("Ag5hCIAVgCIBHBmIABAAIgKhsIATgBIANCOIgUABIhJhnIAKBtIgTACg");
	this.shape_34.setTransform(-11.7,-70);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F2F2F2").s().p("AgohDIBFgHIABAUIgyAFIAFApIAxgEIACARIgyAFIAEArIAxgEIACATIhFAHg");
	this.shape_35.setTransform(-23.2,-69);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F2F2F2").s().p("AgPhGIARgBIAOCNIgSACg");
	this.shape_36.setTransform(-30.7,-68.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F2F2F2").s().p("AgHgxIgZACIgCgTIBDgGIACATIgZACIALB7IgTABg");
	this.shape_37.setTransform(-37.7,-67.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F2F2F2").s().p("AgOhFIARgCIAMCNIgRACg");
	this.shape_38.setTransform(-48.5,-66.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F2F2F2").s().p("AgVBCQgPgMgBgWIATgCQABAJADAGQAHALAKgBQAJgBAGgHQAFgHgBgMQgBgKgIgFQgDgDgKgDIgSgHQgGAAgEgFQgKgJgCgRQgBgOAIgNQAJgOASgBQAOgBALAJQAMAKACASIgUACQAAgLgHgFQgFgEgGABQgIAAgEAIQgEAGABAHQAAAJAHAFIAMAEQATAHAGAEQAPAJACAWQACATgKANQgKANgSACIgFAAQgLAAgKgIg");
	this.shape_39.setTransform(-55.6,-66.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F2F2F2").s().p("AhuBZIAWgCIAFifIgRABIgHhEICegRIAHBEIgRACIAnCaIAYgDIAHBFIhlALIgHhEIAPgDIgGgWIgkADIgBAYIAQgBIAHBEIhlAMgAgWAJIAWgCIgThWg");
	this.shape_40.setTransform(149.9,-33.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F2F2F2").s().p("Ah6BcIAUgBIgRicIgVACIgHhFIBTgJIA/CNIADAAIAeiXIBUgJIAHBEIgUADIASCbIAUgCIAIBFIhTAJIgMhnIgWBqIggAEIgshjIAMBnIhTAJg");
	this.shape_41.setTransform(121.5,-30.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F2F2F2").s().p("AhEB3IgGg1IA+gHIADAWIAkgFIgFgsIguAFIg5gnIgLhcIAkgvIBSgJIAsAlIAEAwIg+AHIgCgVIgkAEIAEAsIA5gGIAvAoIAKBfIgiAtIhSAJg");
	this.shape_42.setTransform(97.5,-28.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F2F2F2").s().p("AgoBUIATgCIgRicIgUACIgHhFIBjgLIAHBFIgTACIARCcIATgCIAIBFIhiALg");
	this.shape_43.setTransform(81.2,-26.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F2F2F2").s().p("AhcBVIAUgBIgRicIgUACIgIhFICFgPIA1AkIAIBKIgiAnIApAaIAFAtIAVgCIAIBEIhUAJIgMhwIgkADIAMByIhTAJgAgahPIAFAtIAjgFIgFgsg");
	this.shape_44.setTransform(63.6,-24.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F2F2F2").s().p("AhAB7IgVi6IgTACIgHhGIBlgLIAHBGIgTACIARCZIA0gFIgRibIgTADIgHhFIBkgLIAIBFIgUACIAUC3IgiAsIhiALg");
	this.shape_45.setTransform(38.4,-22.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F2F2F2").s().p("AhRBYIAUgCIgRibIgVACIgHhFIC1gUIAKBbIg+AGIgDgWIgkAFIAFAtIBCgIIAIBDIhCAGIADAtIAmgEIgDgWIA/gGIAJBaIi1AUg");
	this.shape_46.setTransform(16.6,-19.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F2F2F2").s().p("AhRBaIAUgDIgRibIgUABIgIhEIBTgJIAwBwIgNh0IBSgJIAIBFIgUACIAZDgIhEAIIgphjIAJBmIhRAJg");
	this.shape_47.setTransform(-6.9,-17);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F2F2F2").s().p("AhuBZIAWgDIAFieIgRACIgHhFICegSIAHBGIgRABIAnCaIAYgDIAHBFIhlALIgHhFIAPgBIgHgYIgjAFIgBAYIAQgCIAHBEIhlALgAgWAKIAWgEIgThVg");
	this.shape_48.setTransform(-28.6,-14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.7,-89.3,220.9,134.8);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FC0D1B").ss(0.3).p("AAmAZQgLAQgTAEQgRAEgQgLQgQgLgDgTQgEgRALgPQALgQASgEQARgEAQALQAQALAEATQAEAQgLAQg");
	this.shape.setTransform(8,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAmQgQgLgDgTQgEgRALgPQALgQASgEQARgEAQALQAQALAEATQAEAQgLAQQgLAQgTAEIgIABQgNAAgMgIg");
	this.shape_1.setTransform(8,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

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


(lib.Path_1 = function(mode,startPosition,loop) {
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

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ENRIESGODEPADECERLOTÚTAMBIÉNESTÁS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AgFA1IATgCIACAaIgSABgAgPhMIASgBIAKBzIgTACg");
	this.shape.setTransform(182,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AgvA8QgXgWgDghQgCgeATgaQAUgbAggBQAdgDAXAXQAXAWADAhQACAfgTAaQgTAZggADIgGAAQgZAAgWgVgAgDg7QgZACgNAWQgMASACAUQABAXAOAQQASATAWgCQAagBANgWQAMgTgCgTQgBgXgPgQQgQgSgVAAIgDAAg");
	this.shape_1.setTransform(170.6,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AgohMIAVgBIALCFIAvgEIACAVIhFAFg");
	this.shape_2.setTransform(158.4,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("Ag0hLIAsgDQAXgDAOANQAOAMACAYQADAbgQAMQgLAJgNABIAsA3IgaACIgyhFIgBAAIAHBJIgVABgAgIg5IgVABIAEA6IAPgBQAlgBgCgfQgBgLgIgIQgIgHgLAAIgFAAg");
	this.shape_3.setTransform(147.3,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AgrhKIBLgGIABAVIg2AFIAEAuIA2gFIACATIg2AFIADAvIA2gEIACAVIhLAGg");
	this.shape_4.setTransform(135.9,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgrA9QgXgXgDghQgCggAUgZQATgZAegCQAXgCAUANQAMAJAMARIgZACQgUgUgUACQgWABgOATQgOATACAXQACAZARAQQARARATgCQAXgCAPgWIAZgCQgJAXgSAMQgQALgSABIgGAAQgZAAgVgUg");
	this.shape_5.setTransform(122.9,5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AgrhKIBLgGIABAVIg1AFIADAuIA2gFIACATIg2AFIAEAvIA1gEIACAVIhKAGg");
	this.shape_6.setTransform(109.7,6.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("Ag9hLIAugDQAlgEAVAcQARAWACAbQABAOgDAPQgEAQgIAJQgSAYghADIguAEgAgNg5IgaACIAJBwIAZgCQAUgBANgOQAQgQgDgcQgCgVgMgPQgPgRgVAAIgEAAg");
	this.shape_7.setTransform(96.9,7.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AgUhOIATgBIBACVIgWACIgUgsIgxADIgMAvIgWADgAgWAKIAjgDIgVg4IgBAAg");
	this.shape_8.setTransform(83.5,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AguhLIApgDQAXgCAOAMQANALACAWQACAWgMANQgMAMgYACIgTACIAFA+IgVABgAgDg5IgVABIAFA1IATgCQAdgCgDgaQgBgLgGgGQgHgHgMAAIgDAAg");
	this.shape_9.setTransform(72.3,9.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AgrhKIBLgGIACAVIg2AFIADAuIA2gFIABATIg1AFIAEAvIA2gEIABAVIhKAGg");
	this.shape_10.setTransform(55.5,10.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("Ag9hLIAugDQAlgEAVAcQARAWACAbQABAOgDAPQgEAQgIAJQgSAYghADIguAEgAgNg5IgaACIAJBwIAZgCQAUgBANgOQAQgQgDgcQgCgVgMgPQgPgRgVAAIgEAAg");
	this.shape_11.setTransform(42.7,11.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AgvA8QgXgVgCgiQgDgeATgZQATgbAggCQAegDAXAXQAXAVADAiQACAfgTAaQgUAZgfADIgGAAQgaAAgVgVgAgEg7QgYACgOAXQgLASACAUQACAWAOAQQAQAUAXgCQAagCANgWQAMgTgCgTQgCgXgPgQQgPgSgVAAIgEAAg");
	this.shape_12.setTransform(21.2,13.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AguA9QgXgWgDghQgCggATgaQATgZAfgDQARgBARAJQATAKAMAUIgYABQgUgUgTACQgWACgOATQgOATACAXQACAZASAQQARAQATgBQAkgFAKgmIhBAFIgBgVIBYgFQACAjgWAZQgTAWgcADIgFAAQgaAAgVgUg");
	this.shape_13.setTransform(4.6,14.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AgYBHQgQgMgCgYIAVgCQABAJAEAHQAHAMALgBQALgBAFgIQAGgIgBgMQgBgLgIgGQgDgCgLgEQgXgIgIgFQgKgKgCgTQgBgQAJgNQAKgPASgCQAQgBANALQAMALACAUIgVABQgBgMgIgFQgFgEgGAAQgJABgFAIQgEAGABAIQAAAKAIAFIAMAFQAWAIAGAEQAQAJACAZQACAVgLAOQgLAOgUACIgEAAQgMAAgMgKg");
	this.shape_14.setTransform(-8.7,15.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2F2F2").s().p("AgrhKIBLgGIABAVIg1AFIADAuIA2gFIACATIg3AFIAFAvIA1gEIACAVIhLAGg");
	this.shape_15.setTransform(-19.1,16.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2F2F2").s().p("AgPhMIATgCIAMCbIgTACg");
	this.shape_16.setTransform(-27.2,17.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2F2F2").s().p("Ag0hLIAsgDQAYgDAOANQAOAMABAYQACAbgPAMQgLAJgNABIAsA3IgZACIgzhFIAFBJIgUABgAgHg5IgWABIAEA6IAPgBQAlgBgDgfQgBgLgHgIQgIgHgLAAIgEAAg");
	this.shape_17.setTransform(-35.7,18);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2F2F2").s().p("Ag9hIIAWgCIBNBwIABAAIgKh2IAVgBIAMCbIgWABIhNhxIgBAAIAKB2IgVACg");
	this.shape_18.setTransform(-55.2,19.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F2F2F2").s().p("AgrhKIBLgGIABAVIg1AFIADAuIA2gFIABATIg2AFIAEAvIA2gEIACAVIhLAGg");
	this.shape_19.setTransform(-67.8,20.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2F2F2").s().p("AgYBHQgQgMgCgYIAVgCQABAJAEAHQAHAMALgBQAKgBAGgIQAGgIgBgMQgBgLgIgGIgOgGIgUgIQgGgBgFgFQgKgIgCgUQgCgQAJgNQALgPASgCQAQgBAMALQANALABAUIgUABQgBgMgIgFQgFgEgGAAQgJABgFAIQgEAGABAIQAAAKAIAFQADADAJACQAWAIAGAEQAQAJACAZQACAUgLAPQgLAOgUACIgEAAQgMAAgMgKg");
	this.shape_20.setTransform(79.1,-15.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F2F2F2").s().p("AgUg1IATgBIBACWIgWACIgTgtIgyAEIgMAvIgWACgAgWAjIAjgDIgVg4IAAAAgAgihKIAngfIAJARIgnAdg");
	this.shape_21.setTransform(67.7,-16.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F2F2F2").s().p("AgIg2IgbADIgCgWIBJgFIACAUIgbACIAKCGIgUACg");
	this.shape_22.setTransform(55.5,-13.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F2F2F2").s().p("AgYBHQgQgMgBgYIAUgCQABAJAEAHQAHAMAMgCQAKgBAFgHQAGgIgBgMQAAgLgJgGQgDgDgLgEIgUgHQgGgBgFgFQgKgJgCgTQgBgQAJgNQAKgPATgCQAQgBAMALQAMALACAUIgVABQgBgMgHgFQgGgFgGABQgIAAgFAIQgFAHABAIQABAJAHAGQAEACAJADQAVAHAGAFQAQAJACAZQACAUgLAOQgLAPgUABIgEABQgNAAgLgKg");
	this.shape_23.setTransform(46.8,-12.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F2F2F2").s().p("AgrhJIBLgGIABAUIg2AFIAEAuIA2gFIACATIg2AEIAEAwIA1gFIACAVIhKAHg");
	this.shape_24.setTransform(36.5,-12);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F2F2F2").s().p("Ag9hIIAXgCIBMBvIgJh1IAVgBIAMCaIgVACIhOhxIgBAAIAKB2IgVACg");
	this.shape_25.setTransform(17.8,-10.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F2F2F2").s().p("AgrgxIBKgGIADAVIg3AEIAEAsIA2gEIABAVIg1AEIADAwIA3gFIABAVIhLAGgAgdhKIAngeIAJAQIgnAdg");
	this.shape_26.setTransform(5.3,-12.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F2F2F2").s().p("AgPhMIASgBIANCZIgTACg");
	this.shape_27.setTransform(-2.8,-8.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F2F2F2").s().p("AgwhLIAlgDQAYgCANARQAIAKABAPQABARgLANQAWAKACAZQABAQgIANQgLASgaACIgoADgAAAAGIgUABIAEAyIAUgCQAOgBAGgKQAFgHgBgJQgBgIgFgHQgHgHgOAAIgBAAgAgZg4IADAsIARgBQAWgCgDgWQgBgUgWAAg");
	this.shape_28.setTransform(-11.3,-8.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F2F2F2").s().p("AhQhHIAggCIAzByIAhh5IAhgCIAMCZIgUACIgLiCIgBABIglCFIgMABIg5h+IgBAAIALCCIgVABg");
	this.shape_29.setTransform(-26.6,-7.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F2F2F2").s().p("AgUhOIASgCIBBCXIgWABIgUgtIgxAFIgMAvIgWABgAgWAKIAigCIgUg5IgBAAg");
	this.shape_30.setTransform(-42.1,-5.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F2F2F2").s().p("AgIg2IgbACIgCgVIBJgGIACAVIgbADIALCFIgVACg");
	this.shape_31.setTransform(-53.8,-5.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2F2F2").s().p("AgYBfQgQgPgCgYIgIhoIAUgCIAJBnQABATALAIQAIAFAHgBQAJAAAHgHQAKgJgBgTIgJhnIAVgCIAIBoQACAZgNAQQgNAPgTABIgEABQgOAAgOgLgAgVhKIAmgfIAKARIgnAdg");
	this.shape_32.setTransform(-69.6,-6.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F2F2F2").s().p("AgIg2IgcACIgBgVIBJgGIACAVIgbACIAKCGIgUACg");
	this.shape_33.setTransform(-80.5,-3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F2F2F2").s().p("AgMglIASgBIAKBzIgSACgAgPhMIASgCIACAaIgSACg");
	this.shape_34.setTransform(-86.9,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.5,-27.4,272.1,55.8);


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

	this.instance = new lib.Path();
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

	this.instance_1 = new lib.Path_1();
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


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.INFORMATE("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-44.9,1.95,1.95,0,0,0,39.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-105,272.1,123.1);


// stage content:
(lib._300X250 = function(mode,startPosition,loop) {
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

	// Layer 7
	this.instance = new lib.webpage("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(146,275.1,2.49,2.49,0,0,0,39.5,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({_off:false},0).to({y:181.1},3).wait(12).to({startPosition:0},0).wait(1));

	// Layer 6
	this.instance_1 = new lib.min65("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(145,92.1,2.54,2.54,0,0,0,39.5,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80).to({_off:false},0).to({alpha:1},4).wait(16));

	// Layer 8
	this.instance_2 = new lib.AAA("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(151.1,319.1,1.98,1.98,0,0,0,39.6,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({_off:false},0).to({y:179.2},4).wait(6).to({startPosition:0},0).to({y:338.1},3).wait(18));

	// Layer 5
	this.instance_3 = new lib.INFORMATE("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(155,-74.8,1.95,1.95,0,0,0,39.5,0.1);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(155,116.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(69).to({_off:false},0).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,y:116.1},4).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69).to({_off:false},4).wait(6).to({startPosition:0},0).to({y:-66.9},3).wait(18));

	// Layer 4
	this.instance_5 = new lib.ROJOENRIESGODEPADECERLOTÚTAMBIÉNESTÁScopy("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(153,203.1,1,1,0,0,0,47.5,0.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25).to({_off:false},0).wait(37).to({startPosition:0},0).to({regX:82.6,regY:0,scaleX:0,scaleY:0,x:151.9,y:119},6).to({_off:true},1).wait(31));

	// Layer 3
	this.instance_6 = new lib.ENRIESGODEPADECERLOTÚTAMBIÉNESTÁS("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(153,203.1,1,1,0,0,0,47.5,0.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({alpha:1},21).to({_off:true},1).wait(74));

	// Layer 2
	this.instance_7 = new lib.OrticoQUEHASUFRIDOUNSITIENESUNFAMILIARAneurisma("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(145,86.1,0.002,0.003,0,0,0,78.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:50.7,regY:-22,scaleX:1.18,scaleY:1.18,x:145.1},4).wait(58).to({startPosition:0},0).to({regX:46.8,regY:0,scaleX:0,scaleY:0,x:151.8,y:118.7},6).to({_off:true},1).wait(31));

	// Layer 1
	this.instance_8 = new lib.FONDO300X250();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;