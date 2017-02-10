(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 320,
	height: 50,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"./FONDO320X50.jpg", id:"FONDO320X50"},
		{src:"./SRGORECH.png", id:"SRGORECH"}
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



(lib.FONDO320X50 = function() {
	this.initialize(img.FONDO320X50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.SRGORECH = function() {
	this.initialize(img.SRGORECH);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,90);


(lib.TÚTAMBIÉNESTÁSENRIESGODEPADECERLO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAUIAGAAIABAKIgGABgAgEgeIAGAAIACAtIgGABg");
	this.shape.setTransform(87.1,-5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAXQgJgJAAgNQgBgLAIgKQAIgKANgBQAKgBAJAKQAJAJABANQABAMgIAJQgJAKgMABIgBAAQgKAAgJgJgAAAgXQgKABgFAIQgFAHAAAHQAAAJAGAHQAGAIAIAAQAKgBAGgIQAFgIAAgHQgBgIgFgHQgGgIgJAAIAAAAg");
	this.shape_1.setTransform(82.5,-5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOgdIAIgBIADA1IARgBIABAIIgaABg");
	this.shape_2.setTransform(77.6,-5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTgdIASgBQAIAAAGAFQAFAFAAAJQABAQgQACIARAXIgLAAIgSgcIABAdIgIAAgAgBgWIgJABIABAWIAGgBQANAAAAgKQgBgMgJAAIgBAAg");
	this.shape_3.setTransform(73.2,-5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPgdIAcgBIABAIIgUABIABASIATgBIABAHIgUABIAAATIAVgBIAAAIIgdABg");
	this.shape_4.setTransform(68.6,-5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAXQgIgJgBgOQgBgLAJgKQAIgJAKgBQAJgBAJAGQAGAFADAGIgKABQgJgJgIAAQgGABgGAHQgGAHAAAIQABAKAGAHQAHAHAGAAQAKgBAFgIIALgBQgIARgSABIgBAAQgJAAgJgJg");
	this.shape_5.setTransform(63.4,-4.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPgdIAdgCIAAAJIgUABIAAASIAVgBIAAAHIgUAAIAAATIAVAAIAAAIIgdABg");
	this.shape_6.setTransform(58.1,-4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXgdIASgBQAPAAAHALQAGAIABALQAAANgHAIQgHAJgMABIgSAAgAgNAXIALgBQASgBAAgVQgBgIgFgGQgFgIgJABIgLAAg");
	this.shape_7.setTransform(53.1,-4.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFgeIAFAAIAZA7IgJABIgHgTIgTABIgFATIgJAAgAgHAEIAMgBIgGgVg");
	this.shape_8.setTransform(47.5,-4.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRgdIAQgBQASgBABATQAAARgSABIgHAAIABAZIgJAAgAAAgWIgJABIABAVIAIgBQAKAAAAgLQAAgKgKAAIAAAAg");
	this.shape_9.setTransform(43.2,-3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPgdIAdgCIAAAJIgVABIABATIAVgCIAAAHIgVABIABATIAVgBIAAAIIgdACg");
	this.shape_10.setTransform(36.4,-3.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXgdIATgBQANgBAIALQAHAJAAALQABANgHAHQgJAKgLAAIgSABgAgEgWIgKABIACArIAKAAQASgBAAgVQgBgIgFgGQgFgIgIAAIgBAAg");
	this.shape_11.setTransform(31.3,-3.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAXQgJgJAAgNQgBgLAIgKQAIgLANAAQALgBAJAKQAJAJAAANQABALgIAKQgJAKgMABIgBAAQgLAAgIgJgAAAgXQgKABgFAIQgFAIAAAGQABAJAFAHQAGAIAIgBQALAAAFgIQAFgIAAgHQgBgJgFgGQgGgIgJAAIAAAAg");
	this.shape_12.setTransform(22.7,-3.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTAXQgIgJgBgNQAAgMAHgKQAIgJANgBQAPgBAJARIgKAAQgIgIgGAAQgIABgGAHQgGAIAAAIQABAKAHAHQAGAGAHAAQANAAAGgRIgZABIAAgIIAiAAQAAANgJAKQgIAIgLABIgBAAQgKAAgJgJg");
	this.shape_13.setTransform(16,-2.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKAcQgGgGAAgJIAIgBQAAAMAIgBQAJAAAAgLQgBgEgDgDIgFgCQgIgDgDgCQgFgDAAgJQAAgFAEgFQAEgHAIAAQAFAAAFAEQAEAEABAJIgJAAQAAgJgGAAQgEAAgCADQgCADABADQAAAGAHADQAIACACACQAGADABAKQAAAJgEAFQgFAGgIAAIAAAAQgFAAgFgEg");
	this.shape_14.setTransform(10.7,-2.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPgdIAdgBIAAAIIgUABIAAATIAVgBIAAAGIgUABIAAATIAVgBIAAAJIgdABg");
	this.shape_15.setTransform(6.5,-2.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEgeIAGAAIADA8IgGABg");
	this.shape_16.setTransform(3.3,-2.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSgeIARAAQAJgBAEAFQAGAFAAAKQABALgHADQgEAEgFAAIAQAXIgKAAIgRgcIgBAAIACAdIgJAAgAgJAAIAGAAQAOAAgBgLQAAgEgDgDQgDgEgFAAIgJAAg");
	this.shape_17.setTransform(-0.1,-2.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUAgIgCg9IAJAAIAcAsIgCgtIAIgBIADA9IgJAAIgcgtIACAvg");
	this.shape_18.setTransform(-7.9,-1.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPgdIAdgBIAAAIIgVABIABASIAVAAIAAAGIgVABIABATIAVgBIAAAIIgcACg");
	this.shape_19.setTransform(-13,-1.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKAcQgGgGAAgJIAIgBQAAAEACADQACAFAEAAQAJAAgBgMQAAgEgDgCIgFgDQgIgDgEgBQgEgGAAgHQAAgGAEgFQAEgFAHgBQAFAAAFAEQAFAFAAAIIgIAAQAAgJgGAAQgIABAAAIQABAGAHACIAKAGQAGADABAJQAAAJgFAFQgEAGgIAAIAAAAQgFAAgFgEg");
	this.shape_20.setTransform(-19.5,-1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYApIATg9IAGAAIAYA7IgJABIgHgSIgTAAIgFATgAgHAOIANgBIgHgVgAgKgdIAPgLIADAGIgPALg");
	this.shape_21.setTransform(-24.2,-2.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAAfIgCg0IgLAAIgBgIIAdgBIAAAIIgLAAIACA1g");
	this.shape_22.setTransform(-28.9,-1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAcQgGgGAAgJIAIAAQAAALAIAAQAJgBAAgKQgBgHgIgDQgIgDgDgCQgFgDAAgIQAAgHAEgFQAEgGAIAAQAFAAAFAEQAEAFABAIIgJAAQAAgJgGAAQgEABgCADQgCACABADQAAAHAHABIAKAGQAGADABAJQAAAJgEAFQgFAGgIAAIAAAAQgFAAgFgEg");
	this.shape_23.setTransform(-32.4,-0.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgPgdIAdgBIAAAIIgUABIAAASIAVgBIAAAHIgUABIAAATIAVgBIAAAIIgdABg");
	this.shape_24.setTransform(-36.6,-0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXgdIAKAAIAcAsIgCgtIAIgBIADA9IgJAAIgdgtIADAuIgJABg");
	this.shape_25.setTransform(-44,-0.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPgTIAdgBIAAAIIgUABIAAAQIAVgBIAAAJIgUABIAAATIAVgBIAAAIIgdABgAgJgdIAPgLIADAGIgPALg");
	this.shape_26.setTransform(-49.1,-1.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgBAfIgDg8IAGgBIADA9g");
	this.shape_27.setTransform(-52.3,-0.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRgdIAOgBQAJAAAFAGQADAFAAAGQAAAHgFAFQAJADAAAKQABAGgEAFQgEAHgLABIgPAAgAgIADIABATIAHAAQAKAAAAgKQgBgFgBgBQgDgEgFAAgAgJgVIABARIAHAAQAHAAAAgJQgBgJgHAAg");
	this.shape_28.setTransform(-55.7,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgegcIANgBIARAtIAPgvIAOAAIACA8IgIABIgCgzIgRAzIgEABIgVgyIACAyIgJABg");
	this.shape_29.setTransform(-61.8,0.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgFgeIAGAAIAYA8IgJAAIgHgSIgSABIgGASIgJABgAgHAEIANgBIgGgWg");
	this.shape_30.setTransform(-68.2,0.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAAAfIgDg0IgLABIAAgJIAcgBIABAIIgLABIACA0g");
	this.shape_31.setTransform(-72.6,0.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgLAlQgGgGAAgKIgBgpIAHAAIADApQAAAMAJAAQALgBgBgMIgBgpIAIAAIABApQAAAKgFAGQgEAFgJABQgFAAgHgFgAgGgeIAOgLIAEAHIgPALg");
	this.shape_32.setTransform(-79,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgDgVIgKAAIgBgIIAcgBIABAIIgLABIACA0IgHAAg");
	this.shape_33.setTransform(-83.3,1.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgBAfIgCgtIAGAAIACAtgAgEgeIAGAAIAAAKIgGABg");
	this.shape_34.setTransform(-86,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-8.8,174.1,14.8);


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
	this.instance = new lib.SRGORECH();
	this.instance.parent = this;
	this.instance.setTransform(-21.9,-27.4,0.61,0.61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-27.4,43.9,54.9);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SRGORECH();
	this.instance.parent = this;
	this.instance.setTransform(-21.9,-27.4,0.61,0.61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-27.4,43.9,54.9);


(lib.SITIENESUNFAMILIARQUEHASUFRIDOUN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AgVAiIgDhAIAKgBIAdAvIgCgwIAJgBIADBBIgKAAIgdgwIACAyg");
	this.shape.setTransform(79.7,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AgLAcQgHgFAAgLIgCgrIAJAAIACAqQAAAOAKAAQALAAAAgPIgCgqIAJgBIABArQABALgGAGQgGAGgIABQgGAAgGgGg");
	this.shape_1.setTransform(73.8,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AgUAZQgJgKgBgOQAAgMAIgKQAJgLANgBQALAAAKAKQAJAJABAOQAAANgIAKQgJAKgNABIgBAAQgMAAgIgJgAAAgYQgKABgGAJQgGAIABAHQAAAJAGAHQAHAJAIgBQALAAAGgJQAFgIAAgIQgBgJgGgHQgGgIgJAAIAAAAg");
	this.shape_2.setTransform(65.1,-2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AgYgfIATgBQAPAAAIAMQAGAIABAMQAAAOgHAIQgIAKgNABIgTAAgAgFgXIgKABIACAuIAKAAQAVgBgCgXQAAgIgFgHQgGgIgJAAIgBAAg");
	this.shape_3.setTransform(58.4,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AgEgfIAGgBIADBAIgHABg");
	this.shape_4.setTransform(54.2,-1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgUgfIATgBQAJAAAFAFQAFAFABAKQABARgRACIARAYIgKABIgTgeIABAeIgJABgAgCgXIgJABIACAXIAFAAQAPAAAAgMQgBgFgCgEQgEgDgEAAIgCAAg");
	this.shape_5.setTransform(50.6,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AgOgfIAcgBIAAAIIgTABIABAVIATgBIAAAHIgTAAIABAdIgJAAg");
	this.shape_6.setTransform(45.9,-1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AgLAcQgHgGAAgKIgCgrIAJgBIACArQAAAOAKAAQALgCAAgNIgCgqIAJgBIABArQABALgGAGQgGAGgIAAIgBABQgFAAgGgGg");
	this.shape_7.setTransform(41,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AgKAdQgHgFAAgKIAIgBQADAMAGAAQAKgBgBgLQAAgGgJgEQgJgDgDgCQgFgEAAgIQAAgHAEgFQAEgGAIgBQAGAAAFAFQAFAFAAAIIgIAAQgBgKgGABQgEAAgCADQgCADAAADQAAAGAIADIALAGQAGADABAKQAAAJgFAGQgFAFgIABIAAAAQgFAAgFgFg");
	this.shape_8.setTransform(36.2,-1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AgFggIAGAAIAZA/IgJAAIgIgTIgTABIgGAUIgJAAgAgIAEIAOgBIgHgXg");
	this.shape_9.setTransform(28.7,-0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AgVgeIAIgBIACAdIAWgBIgBgdIAJgBIADBBIgJAAIgBgcIgXABIABAcIgIABg");
	this.shape_10.setTransform(22.9,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("AgQgfIAfgBIAAAJIgWABIABATIAWgBIAAAHIgWABIABAUIAWgBIAAAJIgfABg");
	this.shape_11.setTransform(15.3,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AgLAcQgGgFgBgLIgBgrIAIAAIACAqQAAAOAKAAQAEAAADgDQAEgEgBgIIgBgqIAIgBIACArQABALgGAGQgGAGgIAAIgBABQgGAAgFgGg");
	this.shape_12.setTransform(10.3,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AgVAZQgJgKgBgOQAAgNAIgKQAJgKANgBQALAAAJAKQAJAJABAOQAAAJgGANQAEACAEAAIABAJQgIAAgIgFQgIAGgIAAIgBAAQgLAAgJgJgAgKAOQgEAAgDACQAHAJAKAAQAEAAAEgDQgIgIgIAAIgCAAgAAPAQIAEgGQACgFgBgFQAAgKgHgHQgGgHgIAAQgJABgGAHQgHAIABAJIABAGQAFgCAGAAIABAAQAJAAAPALg");
	this.shape_13.setTransform(4.2,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AgUgfIATgBQAIAAAGAFQAGAGAAAKQABALgHAEQgFADgFAAIASAZIgLAAIgTgeIgBAAIACAfIgJAAgAgBgXIgKABIABAWIAGAAQAPAAgBgLQAAgFgDgDQgDgEgEAAIgBAAg");
	this.shape_14.setTransform(-4.4,0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2F2F2").s().p("AgFggIAGAAIAZA/IgJAAIgIgTIgTABIgGAUIgJAAgAgHAEIANAAIgHgXg");
	this.shape_15.setTransform(-9.8,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2F2F2").s().p("AgCAhIgChAIAHgBIACBBg");
	this.shape_16.setTransform(-14,0.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2F2F2").s().p("AgOgfIAIgBIADA4IASgBIAAAJIgbABg");
	this.shape_17.setTransform(-16.8,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2F2F2").s().p("AgCAhIgChAIAHgBIACBBg");
	this.shape_18.setTransform(-20.2,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F2F2F2").s().p("AgdAiIgDhAIAOgBIASAwIARgxIANgBIADBAIgJABIgDg2IgSA3IgDAAIgXg1IADA2g");
	this.shape_19.setTransform(-25.3,1.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2F2F2").s().p("AgZAhIAUhBIAGAAIAZA/IgJAAIgIgTIgTABIgGAUgAgIAEIAOgBIgHgXg");
	this.shape_20.setTransform(-32,1.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F2F2F2").s().p("AgPgfIAdgBIAAAJIgUABIABATIAUAAIABAGIgVABIACAdIgJAAg");
	this.shape_21.setTransform(-36.4,1.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F2F2F2").s().p("AgYgfIAKAAIAdAvIABAAIgCgwIAIAAIADA/IgJABIgegwIgBAAIACAxIgIAAg");
	this.shape_22.setTransform(-44.2,2.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F2F2F2").s().p("AgLAdQgHgHAAgKIgCgrIAJAAIACAqQAAAOAKAAQALAAgBgPIgBgqIAJgBIABArQABALgGAGQgFAGgJABQgGAAgGgFg");
	this.shape_23.setTransform(-50.1,2.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F2F2F2").s().p("AgLAdQgGgFAAgKIAIAAQAAADACADQADAFAEAAQAKAAgBgLQAAgHgJgEQgJgDgDgCQgFgFAAgHQAAgHAEgGQAEgFAIgBQAGAAAFAFQAFAEAAAJIgJAAQAAgJgGAAQgIAAAAAJQAAAGAIADIAKAGQAHACABALQAAAJgFAFQgFAHgIAAQgFAAgGgFg");
	this.shape_24.setTransform(-57.4,2.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F2F2F2").s().p("AgQgfIAegBIABAJIgVABIAAATIAVgBIABAHIgVABIAAAUIAWgBIAAAJIgeABg");
	this.shape_25.setTransform(-61.8,2.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F2F2F2").s().p("AgYgfIAKAAIAdAvIgCgwIAJAAIADA/IgJABIgegwIACAxIgJAAg");
	this.shape_26.setTransform(-67.2,3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F2F2F2").s().p("AgQgfIAegBIABAJIgWABIABATIAVgBIABAHIgWABIABAUIAVgBIABAJIgeABg");
	this.shape_27.setTransform(-72.5,3.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F2F2F2").s().p("AgEgfIAHgBIACBAIgHABg");
	this.shape_28.setTransform(-75.9,3.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F2F2F2").s().p("AgBAhIgBg3IgMAAIAAgJIAdgBIAAAJIgLAAIACA4g");
	this.shape_29.setTransform(-79,3.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F2F2F2").s().p("AgBAhIgDhAIAHgBIACBBg");
	this.shape_30.setTransform(-84.1,3.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F2F2F2").s().p("AgLAdQgGgFAAgKIAIgBQADAMAGAAQAKAAgBgMQAAgEgEgDIgFgDQgJgDgDgCQgFgEAAgIQAAgHAEgFQAEgGAIgBQAGAAAFAFQAFAFAAAIIgJAAQAAgKgGABQgIAAAAAJQAAAGAIADIALAGQAGADABAKQAAAJgFAGQgFAFgIABIAAAAQgGAAgFgFg");
	this.shape_31.setTransform(-87.4,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.2,-6.2,171.5,13.4);


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

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E1163A").s().p("AgTAYIABgvIAmABIgUAug");
	this.shape_2.setTransform(12.2,8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.2,5.5,4,4.9);


(lib.aneurismaaortico = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1163A").s().p("AgQgUIAhgBIgQAqIgPABg");
	this.shape.setTransform(32.7,-9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AgnA8IgGhwIAVgYIAqgCIAXAWIAEBvIgTAWIgrACgAgKgoIADBSIASgBIgDhSg");
	this.shape_1.setTransform(82.1,-2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AgnA8IgGhwIAVgYIArgCIAVAWIACAlIghACIgBgYIgTABIAEBSIATgBIgCgYIAigCIACAoIgUAWIgrACg");
	this.shape_2.setTransform(71.8,-2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AgXArIAKgBIgEhSIgLABIgBglIAzgCIACAkIgKABIAEBSIALgBIABAlIgzACg");
	this.shape_3.setTransform(63.1,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AgVArIAKAAIgEhSIgHAAIABASIgZACIgCg3IBfgFIADA3IgZABIgBgSIgIAAIAFBSIAKAAIABAkIg0ADg");
	this.shape_4.setTransform(54,-1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgzArIALAAIgEhSIgLAAIgCgkIBGgEIAbAVIACAnIgTATIAUAPIABAXIAMAAIACAlIgtACIgDg8IgSAAIADA9IgsACgAgLgpIABAYIASgBIgBgYg");
	this.shape_5.setTransform(43.8,-0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AgnA9IgGhwIAVgZIArgCIAVAWIAGBvIgUAWIgrACgAgLgoIAEBSIATgBIgEhSg");
	this.shape_6.setTransform(32.3,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("Ag5AsIAMAAIAIhUIgJABIgCglIBTgDIACAkIgJABIAQBRIAMgBIACAlIg2ADIgCglIAIAAIgCgNIgSABIgCANIAJAAIACAkIg2ADgAgIAFIALgBIgGgtg");
	this.shape_7.setTransform(21.3,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("Ag5ArIAMAAIAJhSIgJAAIgCgkIBTgFIABAlIgJAAIAQBTIAMgBIACAlIg2ACIgCglIAIAAIgCgNIgSABIgBANIAIAAIACAkIg2ACgAgIAFIAMgBIgHgtg");
	this.shape_8.setTransform(5.2,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AhDAtIALgBIgEhSIgLAAIgCgkIAtgCIAcBMIAAAAIAWhOIAtgCIACAlIgLAAIADBSIALgBIABAlIgsACIgCg3IgPA3IgQACIgUg2IADA2IgtACg");
	this.shape_9.setTransform(-9.6,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AgoA9IgBgdIAhgCIABAMIASgBIgBgXIgYAAIgcgWIgCgwIAUgYIArgCIAVAVIABAaIghABIAAgLIgTABIABAYIAegBIAXAVIACAzIgUAWIgqACg");
	this.shape_10.setTransform(-22.4,1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("AgXArIAKgBIgEhSIgKAAIgCgkIA0gCIACAkIgLABIAEBSIAKgBIACAlIg0ACg");
	this.shape_11.setTransform(-31.1,1.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AgzArIALgBIgEhRIgLAAIgBgkIBGgEIAaAVIACAnIgTATIAUAPIABAYIAMAAIABAkIgsACIgDg8IgSAAIADA9IgtABgAgKgoIABAXIARgBIgBgXg");
	this.shape_12.setTransform(-40.4,2.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AgqA9IgDhjIgKABIgCglIA1gCIACAlIgLAAIAEBRIAbgBIgDhRIgKABIgCglIA1gDIACAlIgLABIAFBgIgUAWIgzACg");
	this.shape_13.setTransform(-53.4,2.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AguArIALAAIgDhSIgLAAIgCgkIBggEIACAwIghABIgBgLIgSABIABAXIAigBIACAiIgiACIABAXIASAAIgBgLIAigCIACAwIhgAEg");
	this.shape_14.setTransform(-65.4,3.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2F2F2").s().p("AgwAsIALgBIgEhSIgKABIgCglIAsgCIAVA9IgDg+IAsgBIABAkIgKABIAFB2IgkACIgRg2IACA2IgsACg");
	this.shape_15.setTransform(-77.7,3.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2F2F2").s().p("Ag5AsIAMgBIAIhSIgJAAIgBglIBTgDIABAkIgJABIAQBRIAMAAIACAkIg2ADIgBglIAHAAIgCgNIgSABIgBANIAIAAIABAkIg1ACgAgIAFIAMgBIgHgtg");
	this.shape_16.setTransform(-89.9,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.7,-11.4,182.4,23.8);


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


// stage content:
(lib._320x50 = function(mode,startPosition,loop) {
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

	// Layer 11
	this.instance = new lib.webpage("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(434,25,1,1,0,0,0,39.5,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({x:259},4).wait(21).to({startPosition:0},0).wait(1));

	// Layer 10
	this.instance_1 = new lib.min65("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(149,24.1,1,1,0,0,0,39.5,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).to({alpha:1},4).wait(22));

	// Layer 9
	this.instance_2 = new lib.AAA("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(410,24.3,1,1,0,0,0,39.5,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(47).to({_off:false},0).to({x:243,y:25.7},4).wait(23).to({startPosition:0},0).to({y:105.7},4).to({_off:true},1).wait(21));

	// Layer 8
	this.instance_3 = new lib.INFORMATE("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(403,26.8,0.73,0.73,0,0,0,39.5,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45).to({_off:false},0).to({x:116,y:26.6},4).wait(25).to({startPosition:0},0).to({y:-44.4},4).to({_off:true},1).wait(21));

	// Layer 6
	this.instance_4 = new lib.TÚTAMBIÉNESTÁSENRIESGODEPADECERLO("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(421,26.1,1,1,0,0,0,0.5,-1.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({x:209,y:40.1},9).wait(27).to({startPosition:0},0).to({y:106.1},3).to({_off:true},1).wait(51));

	// Layer 5
	this.instance_5 = new lib.aneurismaaortico("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(443,11.9,1,1,0,0,0,-4.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:180,y:25.1},4).wait(41).to({startPosition:0},0).to({y:91.1},3).to({_off:true},1).wait(51));

	// Layer 4
	this.instance_6 = new lib.SITIENESUNFAMILIARQUEHASUFRIDOUN("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(415,-2.7,1,1,0,0,0,-3.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:157,y:11.1},3).wait(42).to({startPosition:0},0).to({y:77.1},3).to({_off:true},1).wait(51));

	// sr
	this.instance_7 = new lib.Tween1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-39,31.5);

	this.instance_8 = new lib.Tween2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(28,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},3).wait(97));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true,x:28,y:30.5},3).wait(97));

	// Layer 1
	this.instance_9 = new lib.FONDO320X50();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(99,15.6,595.2,68.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;