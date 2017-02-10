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
	height: 50,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"./FONDO300X50.jpg", id:"FONDO300X50"},
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



(lib.FONDO300X50 = function() {
	this.initialize(img.FONDO300X50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,50);


(lib.SRGORECH = function() {
	this.initialize(img.SRGORECH);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,90);


(lib.WEB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AgSAkIAZhHIAMAAIgZBHg");
	this.shape.setTransform(101.4,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AAYAYIAAgYQAAgNgJAAIgEABIgEAEIgCAEIAAAEIAAAYIgJAAIAAgYIAAgFIgCgEIgDgDIgFgBQgDAAgCACIgDAEIgBAFIAAACIAAAYIgLAAIAAguIAKAAIAAAEIABAAQADgFAJAAQAJAAADAHQAFgHALAAIAFAAIAFACIAFAFIADAFIABAJIAAAag");
	this.shape_1.setTransform(95.1,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AgDAYIgGgBIgDgCIgFgDIgFgIIgBgGIgBgEIABgEIABgFIAGgHQACgDAGgDIAFgBIADgBIAJACIAIAFQAFAFABADIABAFIABAEIgBAFIgBAFIgCAEIgEAEIgIAFIgJACIgDgBgAgDgNIgFADIgDAFQgCADABACQgBADACACIADAGIAFACIADABQADABADgCIAEgDIADgFIABgFIgBgEIgEgGIgEgDIgFAAIgDAAg");
	this.shape_2.setTransform(88.1,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AgHAXQgFgBgDgEIgDgEIgDgEIgCgFIgBgFIABgEIACgFQABgDAEgFIAIgFIAFgBIADgBIAGABIAGACQAFACACAEIAGAJIgOAAQgEgIgHABIgDAAIgFADIgCAFQgCADAAACIACAFIACAFIAEADIAEABIAHgBIAEgFIAOAAIgFAHIgFAGIgHADIgIABQgDAAgEgCg");
	this.shape_3.setTransform(82.4,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_4.setTransform(78.1,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgDAYIgFgBIgEgCIgFgDIgFgIIgCgGIAAgEIAAgEIACgFIAGgHQACgDAGgDIAFgBIADgBIAJACIAIAFQAFAFABADIACAFIAAAEIAAAFIgCAFIgDAEIgDAEIgIAFIgJACIgDgBgAgDgNIgFADIgDAFQgBADAAACQAAADABACIADAGIAFACIADABQADABADgCIAEgDIADgFIABgFIgBgEIgEgGIgEgDIgFAAIgDAAg");
	this.shape_5.setTransform(73.9,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AgHAXQgEgBgEgEIgDgEIgDgEIgCgFIgBgFIABgEIACgFQABgDAFgFIAIgFIAEgBIADgBIAGABIAGACQAFACACAEIAGAJIgOAAQgEgIgHABIgDAAIgEADIgEAFQgBADAAACIABAFIADAFIAEADIAFABIAGgBIAEgFIAOAAIgFAHIgFAGIgHADIgIABQgCAAgFgCg");
	this.shape_6.setTransform(68.2,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AgEAfIAAgtIAJAAIAAAtgAgEgUIAAgLIAJAAIAAALg");
	this.shape_7.setTransform(64.1,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AgFAfIAAgkIgGAAIAAgJIAGAAIAAgRIAJAAIAAARIAIAAIAAAJIgIAAIAAAkg");
	this.shape_8.setTransform(61.7,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AgJAYIAAguIAJAAIAAAEIADgEQADgBADAAIABAAIAAALQgKAAAAALIAAAZg");
	this.shape_9.setTransform(59,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AgDAYIgGgBIgDgCIgFgDIgFgIIgBgGIgBgEIABgEIABgFIAGgHQACgDAGgDIAFgBIADgBIAJACIAIAFQAFAFABADIABAFIABAEIgBAFIgBAFIgCAEIgEAEIgIAFIgJACIgDgBgAgDgNIgFADIgDAFQgCADABACQgBADACACIADAGIAFACIADABQADABACgCIAFgDIADgFIABgFIgBgEIgEgGIgEgDIgFAAIgDAAg");
	this.shape_10.setTransform(54.3,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("AgJAXQgFgBgDgEIgDgEIgCgEIgBgFIgBgFIACgJIAFgIQADgDAFgCIAEgBIAFgBQAIAAAGAIIAAgGIALAAIAAAtIgLAAIAAgFIgDADIgEACIgIACQgEAAgEgCgAgEgMIgFADIgDAFIAAAEIABAFIADAFIAEADIAEABIAFgBIAFgCIADgGIABgFIgBgFIgEgFIgEgDIgFAAQgCgBgCACg");
	this.shape_11.setTransform(48.4,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AgJAXQgFgBgDgEIgDgEIgCgEIgBgFIgBgFIACgJIAFgIQADgDAFgCIAEgBIAFgBQAIAAAGAIIAAgGIALAAIAAAtIgLAAIAAgFIgDADIgEACIgIACQgEAAgEgCgAgEgMIgFADIgDAFIAAAEIABAFIADAFIAEADIAEABIAFgBIAFgCIADgGIABgFIgBgFIgEgFIgEgDIgFAAQgCgBgCACg");
	this.shape_12.setTransform(42.4,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AAYAYIAAgYQAAgNgJAAIgEABIgEAEIgCAEIAAAEIAAAYIgJAAIAAgYIgBgFIgBgEIgDgDIgFgBQgDAAgCACIgDAEIgBAFIAAACIAAAYIgLAAIAAguIAKAAIAAAEIAAAAQAEgFAJAAQAKAAACAHQAFgHALAAIAFAAIAFACIAFAFIADAFIABAJIAAAag");
	this.shape_13.setTransform(35.4,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AgGAXQgEgCgCgCQgDgEgBgGIAMAAQACAFACAAQABAAAAAAQABAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAIgHgDIgDgCIgEgBIgCgEIgBgGIABgFQABgDADgCIAFgDIAEgBIAGABIAEACIAEAFQACADAAADIgMAAQAAgDgEAAIgBAAIgCADQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABIAEACIAFABIAEADIAEACQABADAAAEIgBAGIgFAGQgCACgDABIgGABQgCAAgEgCg");
	this.shape_14.setTransform(29.2,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2F2F2").s().p("AgEAfIAAgtIAJAAIAAAtgAgEgUIAAgLIAJAAIAAALg");
	this.shape_15.setTransform(26,-0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2F2F2").s().p("AgKAYIAAguIAKAAIAAAEIADgEQACgBAEAAIABAAIAAALQgKAAAAALIAAAZg");
	this.shape_16.setTransform(23.6,0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2F2F2").s().p("AgGAYIgFgCQgDgCgCgDQgEgFAAgMIAAgXIAMAAIAAAXQAAAOAIAAIAEgBIADgEIACgEIAAgFIAAgXIAMAAIAAAuIgLAAIAAgFIgEAEIgEACIgCAAIgGAAg");
	this.shape_17.setTransform(19.1,0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2F2F2").s().p("AgEAYIgEgBIgFgCIgDgDQgDgDgDgFIgBgGIgBgEIACgIIAFgIIAEgEIAEgCIAFgBIAEgBIAFABIAFABIAIAGQADADACAFQACAEAAAEIgBAEIgjAAQAAAEADADIAEACIAEABQAEABACgCQADgCACgCIAMAAIgDAFIgFAGIgHADIgIACIgEgBgAANgDIgCgEIgDgEIgEgCIgEAAQgDAAgDABIgDAEQgCACgBADIAZAAIAAAAg");
	this.shape_18.setTransform(13.6,0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F2F2F2").s().p("AAKAYIAAgXQAAgOgKAAIgDABIgEADIgBAGIAAAEIAAAXIgMAAIAAguIALAAIAAAEIAEgDIAEgCIADAAIAHABIAEACIAEADQAEAGAAALIAAAYg");
	this.shape_19.setTransform(8,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2F2F2").s().p("AgJAXQgFgBgDgEIgDgEIgCgEIgBgFIgBgFIACgJIAFgIQADgDAFgCIAEgBIAFgBQAIAAAGAIIAAgGIALAAIAAAtIgLAAIAAgFIgDADIgEACIgIACQgEAAgEgCgAgEgMIgFADIgDAFIAAAEIABAFIADAFIAEADIAEABIAFgBIAFgCIADgGIABgFIgBgFIgEgFIgEgDIgFAAQgCgBgCACg");
	this.shape_20.setTransform(2.2,0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F2F2F2").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_21.setTransform(-2,2.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F2F2F2").s().p("AAIAXIgIgcIgIAcIgHAAIgRgtIAMAAIAJAbIAIgbIAHAAIAIAbIAJgbIAMAAIgSAtg");
	this.shape_22.setTransform(-6.9,0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F2F2F2").s().p("AAIAXIgIgcIgIAcIgHAAIgRgtIAMAAIAJAbIAIgbIAHAAIAIAbIAJgbIAMAAIgSAtg");
	this.shape_23.setTransform(-14,0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F2F2F2").s().p("AAIAXIgIgcIgIAcIgHAAIgRgtIAMAAIAJAbIAIgbIAHAAIAIAbIAJgbIAMAAIgSAtg");
	this.shape_24.setTransform(-21.2,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.9,-5.5,156.9,12.1);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SRGORECH();
	this.instance.parent = this;
	this.instance.setTransform(-54.3,-67.9,1.51,1.51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.3,-67.9,108.7,135.9);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SRGORECH();
	this.instance.parent = this;
	this.instance.setTransform(-32.4,-40.5,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-40.5,64.8,81);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SRGORECH();
	this.instance.parent = this;
	this.instance.setTransform(-32.4,-40.5,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-40.5,64.8,81);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SRGORECH();
	this.instance.parent = this;
	this.instance.setTransform(-25.2,-31.5,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-31.5,50.4,63);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FC0D1B").ss(0.4).p("AA2AkQgPAXgbAFQgZAFgXgPQgWgPgFgbQgGgZAQgWQAPgXAbgFQAZgFAWAPQAWAPAGAbQAGAYgQAXg");
	this.shape.setTransform(11,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkA2QgWgPgFgbQgFgZAPgWQAPgXAbgFQAYgFAXAPQAWAPAGAbQAFAYgPAXQgPAXgbAFIgMABQgSAAgSgLg");
	this.shape_1.setTransform(11,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.4,4.1,15.2,15.2);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-5.3,0,5.3,0).s().p("AgDAiQgpgbgIg5IAgAAQADAiAUATQAVAUAdAAIAAAcQggAAgYgRg");
	this.shape.setTransform(5.3,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.7,10.4);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1163A").s().p("AggAmIADhMIA+ABIghBMg");
	this.shape.setTransform(18.9,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.6,7.5,6.6,8);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E1163A").s().p("AgfAmIABhMIA+ABIggBMg");
	this.shape_2.setTransform(18.5,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.2,7.8,6.6,8);


(lib.diagnosticoatiempofamiliares = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AgvAhIAKAAIAIhAIgHAAIgBgcIBGgBIABAcIgIAAIALA/IALAAIAAAcIgtABIAAgcIAGgBIgCgKIgPABIgBAKIAHAAIABAcIguABgAgFADIAJAAIgEgig");
	this.shape.setTransform(79.5,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AgnAhIAJgBIgCg/IgIABIgBgcIA/gCIASARIACBVIgRARIg/ACgAgEgfIACA+IAPAAIgCg/g");
	this.shape_1.setTransform(69.2,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AgUAhIAIgBIgBg/IgJABIAAgcIArgBIABAcIgJAAIACA/IAIAAIABAcIgsAAg");
	this.shape_2.setTransform(61.4,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AgdAhIAEAAIgLg/IgLAAIgBgcIAugBIABAcIgHAAIAJA/IAJg/IgHAAIgBgcIAugBIAAAcIgKAAIgIA/IAFAAIAAAcIg/ACg");
	this.shape_3.setTransform(53,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AglAtIgChLIgIABIgBgcIAugBIABAcIgJAAIABA+IAWgBIgBg+IgJABIAAgcIAtgBIAAAcIgIAAIACBJIgRARIgrABg");
	this.shape_4.setTransform(37.7,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgUAhIAIAAIgBg/IgGAAIABAOIgVAAIgBgqIBQgCIABAqIgVABIAAgOIgHAAIACA/IAJAAIAAAcIgrABg");
	this.shape_5.setTransform(27.8,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AgsAhIAJgBIgBg+IgJAAIgBgcIA7gCIAWARIAAAeIgQANIARANIAAASIAKAAIABAcIgmAAIgBguIgPABIABAuIglABgAgIgfIAAASIAPAAIAAgSg");
	this.shape_6.setTransform(13.9,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AgvAhIAKAAIAIg/IgHAAIgBgcIBGgCIABAcIgIAAIALA/IALAAIAAAcIgtABIAAgcIAGAAIgCgKIgPAAIgBAKIAHAAIABAcIguABgAgFAEIAJgBIgEgig");
	this.shape_7.setTransform(3.4,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AgdAhIAEAAIgLg/IgLAAIgBgcIAugBIAAAcIgGAAIAJA/IAJg/IgHAAIgBgcIAugBIAAAcIgKAAIgIA/IAFAAIAAAcIhAACg");
	this.shape_8.setTransform(-6.5,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AgnAhIAJgBIgBg+IgJAAIgBgcIAsgCIABAdIgHAAIABA/IAPgBIAAgJIAcAAIABAlIhQABg");
	this.shape_9.setTransform(-15,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AgvAhIAKAAIAIhAIgHAAIgBgcIBGgBIABAcIgIAAIALA/IALAAIAAAcIgtABIAAgcIAGgBIgCgKIgPABIgBAKIAHAAIABAcIguABgAgFADIAJAAIgEgig");
	this.shape_10.setTransform(-25.2,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("AgiAuIgBgWIAcAAIABAJIAPgBIgBgSIgUAAIgXgQIgBgmIASgTIAjgBIASASIAAATIgcABIAAgIIgPAAIABASIAYgBIATASIABAmIgRARIgkABg");
	this.shape_11.setTransform(-34.9,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AgnAhIAJgBIgCg+IgJAAIAAgcIBQgCIABAlIgcABIAAgJIgQABIABASIAdgBIAAAaIgJAAIgGAAIgGAAIgHAAIAAATIAQgBIgBgJIAcAAIABAlIhQACg");
	this.shape_12.setTransform(-48.6,1.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AgmAhIAIgBIgCg/IgIABIgBgcIA/gCIASARIACBVIgRARIg/ACgAgEgfIACA+IAPAAIgCg/g");
	this.shape_13.setTransform(-58,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AgnAhIAJAAIgCg/IgJAAIAAgcIBQgCIABAlIgcAAIAAgIIgQAAIABASIAdAAIAAAaIgJAAIgGAAIgGAAIgHAAIAAATIAQgBIgBgJIAcAAIABAlIhQACg");
	this.shape_14.setTransform(-67.5,2.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2F2F2").s().p("AglAtIgChLIgIABIgBgcIAugBIABAcIgJAAIABA+IAWgBIgBg+IgJABIAAgcIAtgBIAAAcIgIAAIACBJIgRARIgrABg");
	this.shape_15.setTransform(-77.9,2.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2F2F2").s().p("AglAhIAIgBIAAAAIgCg+IgJAAIAAgcIA7gCIAWARIAAAnIgVARIgVABIAAASIAHAAIAAAcIgrABgAgCgfIAAASIAPAAIAAgSg");
	this.shape_16.setTransform(-87.9,2.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2F2F2").s().p("AgZAdQgMgLgBgSQAAgPALgMQAKgNARgBQAPgBAMANQALAMAAARQABAQgLAMQgLANgQABIgBAAQgOAAgLgNgAAAgeQgNAAgHALQgHAKABAJQAAAMAHAJQAIALALgBQANgBAIgLQAGgJABgKQgBgLgHgJQgIgKgMAAIAAAAg");
	this.shape_17.setTransform(25.5,-13.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2F2F2").s().p("AgVApIgChQIAWgBQAYAAABAYQAAAMgGAFQgHAHgLAAIgLAAIABAhgAgLgBIALAAQAOAAgBgOQAAgOgOAAIgLAAg");
	this.shape_18.setTransform(18.3,-13.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F2F2F2").s().p("AglApIgChQIARAAIAWA8IAVg9IARAAIACBQIgLAAIgChDIAAAAIgYBDIgEABIgahDIgBAAIACBDg");
	this.shape_19.setTransform(10.4,-13.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2F2F2").s().p("AgUgoIAnAAIAAALIgcAAIABAZIAcgBIAAAJIgcAAIABAZIAcAAIAAALIgnABg");
	this.shape_20.setTransform(2.8,-13.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F2F2F2").s().p("AgFgnIAJgBIACBQIgJABg");
	this.shape_21.setTransform(-1.5,-13);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F2F2F2").s().p("AgCApIgBhFIgPAAIgBgLIAmgBIABALIgPABIABBFg");
	this.shape_22.setTransform(-5.2,-13);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F2F2F2").s().p("AggApIAbhRIAIAAIAeBPIgMABIgJgYIgYAAIgIAZgAgJAFIASAAIgJgdg");
	this.shape_23.setTransform(-13.7,-12.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F2F2F2").s().p("AgZAeQgMgMAAgSQgBgPALgNQALgNAQAAQAPgBAMANQALAMAAARQABAQgLANQgLANgQAAIgBAAQgOAAgLgMgAgUgTQgHAKABAJQAAAMAHAJQAIALALgBQAOAAAHgLQAHgJAAgLQgBgLgHgJQgIgKgMAAQgMAAgIALg");
	this.shape_24.setTransform(-24.7,-12.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F2F2F2").s().p("AgXAeQgLgNgBgRQAAgQALgNQALgMAOAAQAOAAAJAHQAHAFAFAJIgNABIgHgHQgHgFgIABQgJAAgIAJQgIAKAAALQABANAIAJQAIAJAKAAQALAAAJgLIANgBQgLAXgWAAIgCAAQgNAAgLgMg");
	this.shape_25.setTransform(-33.2,-12.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F2F2F2").s().p("AgFgnIAJgBIACBQIgJABg");
	this.shape_26.setTransform(-38.7,-12.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F2F2F2").s().p("AgCApIgChFIgOAAIAAgLIAlgBIAAALIgOABIABBFg");
	this.shape_27.setTransform(-42.5,-12.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F2F2F2").s().p("AgNAkQgIgHAAgMIAKgBQADAPAIAAQAMAAAAgOQgBgGgEgDIgHgEQgKgEgFgDQgEgFgBgKQAAgIAFgHQAGgIAJAAQAIAAAGAGQAGAGAAAKIgLAAQAAgLgJAAQgEAAgDAEQgCADAAAEQAAAIAJADQALAFADACQAIAFAAANQABAKgGAIQgHAHgKAAIAAAAQgHAAgGgGg");
	this.shape_28.setTransform(-47.3,-12);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F2F2F2").s().p("AgaAqQgLgMAAgRQgBgPALgNQALgNAQgBQAPAAAMAMQALAMAAAQQABARgLANQgMANgQAAIAAABQgOAAgMgNgAAAgSQgMABgIALQgGAHAAAMQAAALAHAJQAIALALAAQANgBAIgLQAGgJAAgLQAAgMgHgIQgIgKgMAAIAAAAgAgLgnIAUgPIAFAJIgVAOg");
	this.shape_29.setTransform(-54.3,-13.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F2F2F2").s().p("AgbApIgChQIAMAAIAkA8IAAAAIgBg9IAKAAIACBQIgLAAIgkg8IABA9g");
	this.shape_30.setTransform(-62.6,-11.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F2F2F2").s().p("AgZAeQgLgMgBgRQAAgQALgNQAKgNAQAAQAVAAALAVIgMABQgKgLgKAAQgKAAgIAKQgIAJAAALQABANAIAKQAJAIAJAAQAFAAAGgDQAKgFAEgNIghABIAAgLIAtAAQAAASgMANQgLALgPAAIAAAAQgOAAgLgMg");
	this.shape_31.setTransform(-70.8,-11.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2F2F2").s().p("AggApIAbhQIAIgBIAeBQIgMAAIgJgYIgZABIgHAYgAgJAGIARgBIgIgdIAAAAg");
	this.shape_32.setTransform(-78.3,-11.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F2F2F2").s().p("AgDApIgChQIAJAAIACBQg");
	this.shape_33.setTransform(-83.4,-11.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F2F2F2").s().p("AgegoIAYAAQATAAAKAPQAHALABAOQAAARgJALQgKALgRABIgXABgAgGgdIgNABIABA5IANAAQAKAAAHgHQAJgIgBgOQAAgLgGgIQgHgKgLAAIgCAAg");
	this.shape_34.setTransform(-88.7,-11.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F2F2F2").s().p("AgcApIgBhQIALAAIAkA8IgBg9IALAAIACBQIgMAAIgkg8IAAAAIABA9g");
	this.shape_35.setTransform(-99.5,-10.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F2F2F2").s().p("AgPAjQgIgIAAgNIgBg1IALAAIABA1QAAAQAMABQAGAAADgEQAFgEAAgKIgBg1IALAAIABA1QAAANgHAIQgIAHgKAAQgHAAgIgGg");
	this.shape_36.setTransform(-106.8,-10.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F2F2F2").s().p("AgOAkQgHgHgBgNIALAAQAAAFACAEQAEAGAFAAQAFAAADgEQADgEAAgGQAAgGgEgDIgHgEQgLgEgEgDQgFgFAAgLQgBgHAFgIQAGgHAKAAQAHgBAHAHQAGAGAAAKIgLAAQAAgLgJAAQgEAAgDAEQgDADABAEQAAAHAJAEQAKAFAEACQAIAFAAAMQABAMgHAGQgGAIgKAAIAAAAQgHAAgHgGg");
	this.shape_37.setTransform(90.1,13.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F2F2F2").s().p("AgTgnIAmgBIAAALIgbABIAAAYIAbAAIABAJIgcAAIABAZIAbAAIAAAKIglABg");
	this.shape_38.setTransform(84.7,13.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F2F2F2").s().p("AgYgnIAXgBQALAAAHAHQAHAHAAAMQABAOgJAFQgGAEgGAAIAVAfIgOAAIgXgmIAAAAIABAmIgLABgAgMABIAHAAQATAAgBgPQAAgGgDgEQgFgFgGAAIgMAAg");
	this.shape_39.setTransform(78.9,13.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F2F2F2").s().p("AggApIAbhRIAHAAIAfBPIgMABIgJgYIgZABIgHAYgAgJAFIARAAIgIgdg");
	this.shape_40.setTransform(72.1,13.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F2F2F2").s().p("AgDAoIgChQIAJAAIACBQg");
	this.shape_41.setTransform(67,13.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F2F2F2").s().p("AgSgoIALAAIACBFIAYAAIAAALIgjABg");
	this.shape_42.setTransform(63.5,13.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F2F2F2").s().p("AgFgoIAJAAIACBQIgJABg");
	this.shape_43.setTransform(59.3,13.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F2F2F2").s().p("AgngmIARgBIAWA9IAVg+IARAAIACBQIgLAAIgBhDIgBAAIgYBEIgEAAIgahDIgBAAIACBDIgLABg");
	this.shape_44.setTransform(53,14);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F2F2F2").s().p("AggApIAbhQIAIgBIAeBQIgMAAIgJgYIgYAAIgIAZgAgJAFIARAAIgIgdg");
	this.shape_45.setTransform(44.6,14.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F2F2F2").s().p("AgSgnIAkgBIAAALIgZAAIABAZIAZAAIAAAIIgZABIABAjIgLABg");
	this.shape_46.setTransform(39.2,14.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F2F2F2").s().p("AgNAkQgIgGgBgNIALAAQAAAEACAEQAEAGAFAAQAFAAADgEQAEgDgBgHQAAgGgEgDIgHgEQgLgEgEgDQgFgGAAgJQAAgIAFgHQAGgIAJAAQAIAAAGAGQAGAGAAAKIgLABQAAgMgJAAQgEAAgDAEQgCADAAAEQAAAIAJADQALAFADADQAIAEAAANQABALgGAHQgHAHgKAAQgHAAgGgGg");
	this.shape_47.setTransform(30.8,14.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F2F2F2").s().p("AgPAjQgIgIAAgNIgBg2IALAAIABA1QAAAKAGAFQAEADADgBQAFAAADgDQAGgEgBgKIgBg1IALgBIABA2QAAANgHAIQgIAHgJAAIgBABQgHAAgIgHg");
	this.shape_48.setTransform(24.7,14.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F2F2F2").s().p("AgEgcIgPAAIAAgLIAmgBIABALIgPAAIABBFIgJABg");
	this.shape_49.setTransform(19.1,14.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F2F2F2").s().p("AgTgnIAlgBIABALIgbABIAAAYIAbgBIAAAJIgbABIABAZIAbgBIAAALIglABg");
	this.shape_50.setTransform(11.4,14.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F2F2F2").s().p("AgegnIAYgBQATAAAKAPQAHALABAOQAAASgJAKQgKAMgQAAIgYABgAgGgdIgNABIABA6IANgBQAKAAAHgGQAJgIgBgPQAAgKgGgJQgHgKgLAAIgCAAg");
	this.shape_51.setTransform(4.7,15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F2F2F2").s().p("AgFgoIAHAAIAfBPIgMABIgJgYIgZABIgHAXIgMABgAgJAFIARAAIgIgdIAAAAg");
	this.shape_52.setTransform(-5.7,15.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F2F2F2").s().p("AgSgnIALgBIACBFIAYAAIAAALIgjABg");
	this.shape_53.setTransform(-11.4,15.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F2F2F2").s().p("AgCApIgBgdIgYgyIAMgBIAQAmIAPgmIAMgBIgWAzIABAeg");
	this.shape_54.setTransform(-20.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.3,-18.6,201.8,38.3);


(lib.aneurismaaorticolargo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AgNAmQgIgHgBgNIALgBQAAAEADAFQADAGAFAAQANgBgBgOQgBgGgEgEIgHgDQgMgEgEgCQgGgGAAgKQgBgIAFgIQAGgHAKgBQAIgBAGAGQAHAGAAALIgLABQAAgMgJAAQgFABgDADQgCAEAAAEQABAIAKADQALAEADADQAIAEABANQABALgGAIQgGAHgLABIgBAAQgHAAgGgFg");
	this.shape.setTransform(84.9,8.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AgIgpIAIgBIAhBRIgMABIgJgZIgaACIgHAZIgLABgAgLAGIASgCIgKgeg");
	this.shape_1.setTransform(78.7,8.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AgqgmIASgBIAZA9IAThAIASgBIAFBSIgMABIgEhFIAAAAIgWBGIgFABIgehEIAFBFIgLABg");
	this.shape_2.setTransform(69.8,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AgZAgQgMgNgBgRQgBgQAKgNQALgOARgBQAPgBAMAMQAMAMABASQABAQgKANQgLAOgRABIgCAAQgOAAgLgLgAAAgfQgOABgHAMQgHAJABAKQABAMAHAJQAJALALgBQAOgBAHgLQAHgKgBgKQgBgMgHgJQgIgKgMAAIAAAAg");
	this.shape_3.setTransform(60.2,9.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AgEgdIgOABIgBgLIAmgCIABALIgPABIAFBHIgKAAg");
	this.shape_4.setTransform(53.4,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AgfgnIAMAAIAnA7IgEg+IALAAIAFBSIgLAAIgog8IAAAAIAEA/IgLAAg");
	this.shape_5.setTransform(47.4,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AgKgbIAKAAIAFBSIgJABgAgMgnIAUgQIAFAJIgUAQg");
	this.shape_6.setTransform(42.2,9.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AgNAmQgJgHAAgNIALAAQAAAEADAEQADAHAFgBQAGAAADgEQADgEAAgHQgBgGgEgDIgHgEQgMgEgEgDQgFgEgBgLQgBgJAFgGQAGgJAKAAQAIgBAGAGQAHAGAAALIgLAAQgBgLgIAAQgKABAAALQAAAHALAEQAKAFAEACQAIAEABANQABAMgGAHQgGAIgLAAIgBAAQgHAAgGgFg");
	this.shape_7.setTransform(37.8,11);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AgfgnIAMgBIAnA8IAAAAIgEg+IALAAIAFBSIgLAAIgog8IAEA/IgLAAg");
	this.shape_8.setTransform(27.8,11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AgIgpIAIgBIAiBRIgMABIgKgZIgaACIgHAZIgMABgAgKAFIARgBIgJgdIgBAAg");
	this.shape_9.setTransform(20.4,12.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AgEgcIgOABIgBgMIAmgDIABAMIgPABIAFBHIgKABg");
	this.shape_10.setTransform(14.3,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("AgfgnIAMgBIAnA9IgEg+IALgBIAFBSIgLAAIgog9IAAAAIAEA/IgMABg");
	this.shape_11.setTransform(8.3,12.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AgVgnIAmgDIACAMIgdABIABAZIAdgCIABAKIgdABIACAaIAcgCIAAAMIgnACg");
	this.shape_12.setTransform(1.5,13.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AgNAmQgJgHAAgNIALgBQAAAFACAEQAEAGAFAAQANgBgBgOQgBgGgEgDIgHgEQgMgEgEgDQgGgFAAgKQgBgIAFgHQAGgJAKAAQAHgBAHAGQAGAGABALIgLABQgBgHgDgDQgEgCgCAAQgEAAgDAEQgDAEABAEQAAAIALADQAKAFADACQAJAEABANQABALgHAIQgGAIgKAAIgBAAQgHAAgGgFg");
	this.shape_13.setTransform(-4,13.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AgVgnIAngDIABAMIgdABIABAZIAdgCIABAKIgcABIABAaIAcgCIAAAMIgmACg");
	this.shape_14.setTransform(-9.6,13.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2F2F2").s().p("AgagoIAXgBQAMgBAHAHQAHAGABANQABAOgJAGQgFAFgHAAIAXAeIgOABIgZglIACAnIgLAAgAgDgeIgLABIABAeIAIgBQATAAgBgPQAAgGgEgEQgFgFgFAAIgCAAg");
	this.shape_15.setTransform(-15.6,14.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2F2F2").s().p("AgYgoIAWgBQAMgBAHAHQAHAGABAMQABAXgaACIgKAAIACAiIgLAAgAgBgeIgLABIACAcIAKAAQAPgCgBgOQgBgNgNAAIgBAAg");
	this.shape_16.setTransform(-22,14.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2F2F2").s().p("AgVAgIAbg+IgdACIAAgLIAqgDIAAALIgbA+IAggCIAAALIgtADg");
	this.shape_17.setTransform(-30.7,15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2F2F2").s().p("AgWgnIAogDIAAAMIgcABIACAZIAcgCIAAAKIgcABIACAaIAcgCIABALIgoADg");
	this.shape_18.setTransform(-36.1,15.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F2F2F2").s().p("AgggmIALAAIAZA7IASg+IALgBIgZBUIgHABg");
	this.shape_19.setTransform(-42.9,15.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2F2F2").s().p("AgIgpIAIgBIAiBRIgMAAIgKgYIgaACIgHAZIgMABgAgKAFIARgBIgJgeg");
	this.shape_20.setTransform(-52.2,16.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F2F2F2").s().p("AgagoIAYgBQALgCAHAHQAIAHABANQAAAOgIAGQgGAFgHAAIAXAeIgOABIgZgmIACAnIgLABgAgCgeIgMABIACAeIAHgBQATAAgBgPQAAgGgEgFQgEgEgGAAIgBAAg");
	this.shape_21.setTransform(-59.2,16.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F2F2F2").s().p("AgJgpIAJgBIAhBRIgLAAIgKgYIgZACIgIAZIgLABgAgLAFIASgBIgKgeg");
	this.shape_22.setTransform(-66,17.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F2F2F2").s().p("AgagoIAXgBQALgBAIAGQAHAHABANQABAOgJAGQgFAFgHAAIAXAeIgOABIgZgmIACAnIgLABgAgDgeIgLABIABAeIAIgBQATAAgBgPQAAgGgEgFQgFgEgFAAIgCAAg");
	this.shape_23.setTransform(-73,17.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E1163A").s().p("AgMAPIABgeIAYABIgNAeg");
	this.shape_24.setTransform(42.1,-12.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F2F2F2").s().p("AgkAzIgCgXIAggCIAAAKIAQgCIAAgTIgXAAIgagRIgDgpIATgVIAogCIAUASIABAVIgeADIgBgKIgRABIACAUIAagCIAWASIADArIgSATIgoACg");
	this.shape_25.setTransform(95.7,-8.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F2F2F2").s().p("AgkAzIgGheIAUgVIAngCIAUASIAFBeIgRATIgoACgAgKghIAEBFIAQgBIgEhFg");
	this.shape_26.setTransform(86.2,-7.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F2F2F2").s().p("AgkA0IgGhfIATgUIAogDIAUASIACAgIgfABIgBgTIgRABIADBFIARgBIgBgVIAggCIACAiIgSASIgoADg");
	this.shape_27.setTransform(76.6,-7.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F2F2F2").s().p("AgVAkIAJAAIgEhFIgKAAIgBgfIAvgCIACAfIgJAAIAEBFIAJAAIACAfIgvACg");
	this.shape_28.setTransform(68.5,-7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F2F2F2").s().p("AgTAlIAJAAIgEhFIgHAAIABAQIgWABIgDguIBYgGIADAuIgXACIgBgPIgHAAIAEBFIAKAAIACAfIgwACg");
	this.shape_29.setTransform(60,-6.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F2F2F2").s().p("AgvAkIAKAAIgEhFIgKABIgCgfIBBgEIAYARIACAhIgRARIATAMIABAUIALAAIACAeIgqACIgDgyIgQABIADAyIgpADgAgKgjIABAUIARgBIgCgTg");
	this.shape_30.setTransform(50.7,-5.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F2F2F2").s().p("AgkA0IgFhfIATgUIAngDIAUASIAFBdIgSATIgnADgAgKghIAEBEIARAAIgFhFg");
	this.shape_31.setTransform(40.1,-5.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2F2F2").s().p("Ag1AlIALAAIAHhGIgIABIgCgfIBNgEIACAeIgIABIAOBFIAMgBIACAeIgyAEIgCggIAHAAIgCgKIgQAAIgCALIAIAAIACAfIgyADgAgHAEIAKAAIgHgng");
	this.shape_32.setTransform(30,-4.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F2F2F2").s().p("AgkAzIgBgXIAegCIABAKIAQgBIgBgUIgVAAIgbgRIgDgpIATgVIAogCIAUASIABAWIgfACIAAgKIgRABIACAUIAagCIAWASIADArIgSATIgoACg");
	this.shape_33.setTransform(14.1,-3.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F2F2F2").s().p("Ag1AmIALgBIAHhFIgJAAIgBgfIBNgEIACAeIgIABIAOBFIAMgBIACAeIgyAEIgCggIAHAAIgCgLIgQABIgCALIAIAAIACAfIgyACgAgIAEIALAAIgHgng");
	this.shape_34.setTransform(4.1,-3.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F2F2F2").s().p("Ag+AnIAKgBIgEhFIgKABIgCgfIApgCIAbA/IABAAIAThCIApgCIACAeIgKABIAEBEIAKAAIACAfIgpADIgDguIgNAuIgPABIgTgtIADAuIgpACg");
	this.shape_35.setTransform(-9.6,-2.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F2F2F2").s().p("AgkAzIgCgXIAggCIAAAJIAQgBIAAgUIgXABIgagRIgDgpIATgVIAogCIAUASIABAVIgeACIgBgKIgRACIACAUIAbgCIAVASIADArIgSATIgoACg");
	this.shape_36.setTransform(-21.3,-1.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F2F2F2").s().p("AgVAkIAJAAIgEhFIgKAAIgBgfIAwgCIABAfIgJAAIAEBFIAJAAIACAfIgvACg");
	this.shape_37.setTransform(-29.5,-1.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F2F2F2").s().p("AgvAkIAKAAIgEhFIgKABIgCgfIBBgDIAYAQIACAhIgRARIATAMIABAUIALAAIACAeIgqACIgDgyIgQABIADAyIgpADgAgKgjIABAUIARgBIgCgUg");
	this.shape_38.setTransform(-38.2,-0.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F2F2F2").s().p("AglA0IgFhSIgJABIgCgfIAygDIABAfIgKAAIAFBEIAZgBIgFhEIgJAAIgCgfIAzgDIABAfIgKABIAFBRIgSATIgvADg");
	this.shape_39.setTransform(-50.2,-0.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F2F2F2").s().p("AgqAlIAKAAIgEhFIgKABIgCgfIBZgFIADAoIggACIgBgKIgQACIABAUIAggCIABAdIgJAAIgIAAIgHAAIgHABIABAUIAQgBIAAgKIAfgBIACAoIhYAFg");
	this.shape_40.setTransform(-61,0.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F2F2F2").s().p("AgsAlIAKAAIgEhFIgKABIgBgfIApgCIATAyIgDgzIApgDIABAgIgJAAIAGBjIgiACIgQgtIACAvIgpACg");
	this.shape_41.setTransform(-72.3,1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F2F2F2").s().p("Ag1AlIALAAIAHhGIgJABIgBgfIBNgFIABAgIgIAAIAPBFIAMgCIACAgIgyACIgCgeIAHgBIgCgKIgRABIgBALIAIgBIACAfIgyADgAgIAEIALgBIgGglg");
	this.shape_42.setTransform(-83.3,1.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F2F2F2").s().p("AgkAzIgBgYIAegBIABAJIAQgBIgBgTIgVAAIgbgRIgDgpIAUgVIAngCIAUASIACAVIggACIgBgJIgQABIABAUIAbgCIAWASIACAqIgSAUIgnACg");
	this.shape_43.setTransform(-99.2,2.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F2F2F2").s().p("AgkAzIgGheIAUgVIAngCIAUASIAFBeIgSATIgnACgAgKghIAEBEIAQgBIgEhEg");
	this.shape_44.setTransform(-108.7,3.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F2F2F2").s().p("AgqAkIAKAAIgEhFIgKABIgBgfIAwgDIACAfIgIABIAEBEIAQgBIAAgKIAfgBIADAoIhZAFg");
	this.shape_45.setTransform(-118.6,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.4,-20.8,230,42.7);


(lib.MIN65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAVQgJgJAAgMQgBgMALgKQAJgJALAAQANAAAKAKQAJAJAAAMQAAAMgJAJQgKALgNgBQgMABgJgLgAgOgRQgIAIAAAJQgBAKAIAHQAHAHAIAAQAJAAAHgGQAHgIAAgKQABgKgJgHQgGgGgJAAQgHAAgHAGg");
	this.shape.setTransform(104.7,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAUIAIAAQAGAPAPAAQAWAAAAgWIAAgGQgGANgRAAQgLAAgJgIQgKgKAAgMQAAgOAKgJQAJgJALAAQAPAAAIAMIAAgKIAIAAIAAAxQAAAPgFAHQgJAMgQAAQgWAAgHgXgAgPgbQgHAHAAAKQAAAKAHAFQAGAIAJAAQALAAAHgJQAGgFAAgJQAAgKgHgHQgHgIgKAAQgJAAgGAIg");
	this.shape_1.setTransform(97.1,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAWQgKgJAAgNQAAgMAKgJQAJgKAMAAQARAAAKAQQAEAIAAAHIAAACIg2AAQABAJAHAHQAHAGAIAAQAQAAAFgOIAIAAQgDAJgIAHQgIAFgKAAQgLABgKgKgAgNgTQgIAGgCAKIAvAAQgCgKgIgGQgHgEgHAAQgHAAgGAEg");
	this.shape_2.setTransform(89.9,24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAVQgFgGAAgNIAAggIAIAAIAAAgQAAAKAEAGQAFAFAIAAQAHAAAFgEQAGgHAAgMIAAgeIAIAAIAAA7IgHAAIAAgJQgGALgNAAQgNAAgHgKg");
	this.shape_3.setTransform(82.8,24);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAsQALgBAAgRIAAg3IAIAAIAAA3QAAAPgHAGQgEAEgIAAgAACgkIAAgOIAIAAIAAAOg");
	this.shape_4.setTransform(77.7,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASAfIAAggQAAgLgFgGQgGgFgHAAQgHAAgFAFQgGAFAAALIAAAhIgHAAIAAg7IAHAAIAAAHIABAAQAFgJAMAAQAMAAAHAHQAHAIAAAOIAAAgg");
	this.shape_5.setTransform(70.7,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgKAMAAQARAAAKAQQAEAHAAAIIAAACIg1AAQAAAJAHAHQAHAGAIAAQAQAAAFgOIAIAAQgDAJgIAHQgIAFgKAAQgMABgJgKgAgNgTQgIAGgBAKIAtAAQgBgKgIgGQgGgEgIAAQgHAAgGAEg");
	this.shape_6.setTransform(63.7,24);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAVQgJgJAAgMQAAgMAKgKQAJgJALAAQANAAAJAKQAJAJAAAMQAAAMgJAJQgJALgNgBQgMABgJgLgAgPgRQgIAHAAAKQAAAKAIAHQAHAHAIAAQAJAAAHgGQAIgIAAgKQAAgKgIgHQgHgGgJAAQgIAAgHAGg");
	this.shape_7.setTransform(53.3,24);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AATApIAAgiQgBgKgFgFQgFgFgIAAQgGAAgGAFQgGAGAAAIIAAAjIgIAAIAAhRIAIAAIAAAdQAHgJALAAQALAAAIAHQAHAHAAANIAAAig");
	this.shape_8.setTransform(46.3,22.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAWQgJgJAAgNQAAgMAKgJQAJgKAMAAQAJABAIAEQAJAFAEAKIgJAAQgGgMgPAAQgIAAgHAGQgIAHAAAKQAAAKAHAHQAHAHAJAAQAQAAAFgMIAJAAQgKATgUAAQgMAAgKgJg");
	this.shape_9.setTransform(39.3,24);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAVQgFgGAAgNIAAggIAIAAIAAAgQgBALAFAFQAFAFAIAAQAHAAAFgEQAGgIAAgLIAAgeIAIAAIAAA7IgHAAIAAgJIgBAAQgEALgOAAQgMAAgIgKg");
	this.shape_10.setTransform(32.3,24);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAkAfIAAgiQAAgUgQAAQgQAAAAAUIAAAiIgGAAIAAgiQAAgUgRAAQgRAAAAAUIAAAiIgIAAIAAg7IAIAAIAAAHQAGgJALAAQAPAAAEAMQAHgMANAAQALAAAHAHQAGAHAAAMIAAAjg");
	this.shape_11.setTransform(23.7,23.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOApIALgYIgYg4IAIAAIATAuIATguIAJAAIgiBQg");
	this.shape_12.setTransform(12.4,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAWQgKgKAAgMQAAgLAJgKQAKgKAMAAQAQABAIALIAAAAIAAgKIAIAAIAAA7IgIAAIAAgLIAAAAQgIAMgQAAQgMAAgJgJgAgPgRQgIAHAAAKQAAAKAHAHQAHAHAJAAQAKAAAHgHQAIgHAAgKQAAgIgHgIQgHgHgLAAQgIAAgHAGg");
	this.shape_13.setTransform(5.4,24);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AASApIAAgiQAAgKgFgFQgGgFgHAAQgHAAgFAFQgGAFAAAJIAAAjIgHAAIAAhRIAHAAIAAAdIABAAQAGgJALAAQAMAAAHAHQAHAIAAAMIAAAig");
	this.shape_14.setTransform(-1.7,22.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AASAfIAAggQAAgLgFgGQgGgFgHAAQgHAAgFAFQgGAFAAALIAAAhIgHAAIAAg7IAHAAIAAAHIABAAQAFgJAMAAQAMAAAHAHQAHAIAAAOIAAAgg");
	this.shape_15.setTransform(-11.5,23.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAjQgFgGAAgOIAAgfIAIAAIAAAfQgBALAFAFQAFAGAIAAQAHAAAFgFQAGgHABgLIAAgeIAHAAIAAA7IgHAAIAAgKIAAAAQgGALgNAAQgMAAgIgJgAgIgfIAUgMIADAHIgUAMg");
	this.shape_16.setTransform(-18.3,22.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAWQgJgKAAgMQAAgLAJgKQAJgKANAAQAQABAIALIAAgKIAIAAIAAA7IgIAAIAAgLQgJAMgPAAQgMAAgKgJgAgQgRQgHAIAAAJQAAAKAHAHQAHAHAJAAQAKAAAHgHQAHgHAAgKQAAgIgHgIQgHgHgKAAQgIAAgIAGg");
	this.shape_17.setTransform(-25.6,24);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FC0D1B").s().p("AgoAyIgHgIIAAgJQgLgRgCgNIgCgDIABgMQAFgOAJgMIABABQAJgKANgFIAEgFIALgDQALgCAOADIADAEQAMADAMAIIAAAAQARAQADAUQAAACgDAEQgCAPgGAMQADAIgBACQgJAQgRAIIgKgEQgNAEgOgBIgJAEQgMgEgKgIgAgLAOIgKAXQAEAJAIAKQAMABAPgDQAHgMADgJIgPgVgAg5AFQACAMAIAOQAKADAOACIALgXIgLgVIgUgFIgOASgAAUgMIgGAXIAPAVIAWgHQAGgMACgPIgRgQgAgugjIADAVIAVAEIAUgRIgBgTQgNgEgIAAQgLAEgLALgAgBgvIABAUIATAOIAXgHIABgVIgBgBQgMgJgMgDIAAAAIgTAHg");
	this.shape_18.setTransform(76.6,0.6);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(76.4,0.7,1,1,0,0,0,10.8,11.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",2,2,6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhiDTQgLgHgCgNQgDgNAIgLQAIgMAOgBQgdgdgEgoQgEgpAXgiIBChhIAZARIAHgNIgXgRIBMh0IBCAsQgbAegWAiQgrBFAcAVQAmAZAKAtQAJAtgaAnQgXAignALQglALglgQQAEAOgIAMQgHALgNADIgHABQgJAAgIgGgAhUCmQgIACgEAGQgEAHABAHQACAIAGAEQAHAFAHgCQAIgBAEgHQAFgGgCgIQgBgHgHgFQgFgDgFAAIgEAAgAgSAKQgbAFgPAWQgQAXAGAbQAFAaAWAQQAXAPAZgFQAbgGAPgWQAPgXgFgbQgGgagWgQQgRgLgQAAIgOACg");
	this.shape_19.setTransform(77.3,-6.7);

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90,5.3,1,1,0,0,0,5.3,5.2);
	this.instance_1.alpha = 0.5;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag4CNQgpgbgIg8IAgAAQADAjAWAVQAVAUAbAAQAgAAAWgZQAVgYAAgfQAAgjgWgWQgWgXgfAAQgjAAgcAhIgYgHIAciZICLAAIAAAcIhyAAIgPBWQAagPAZAAQAsAAAeAgQAeAeAAAuQAAArgeAgQgfAhgtAAQgeAAgagRg");
	this.shape_20.setTransform(95.3,-5.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiIBzQgMgOgEgPQgDgMAAgXIAAh6IA+AAIAABxQAAARAEAJQAIAPAWAAQAjAAAAgqIAAhwIBYAAIAAhGIA+AAIAABGIAeAAIAAAvIgeAAIAACfIg+AAIAAifIgcAAIAACfIg4AAIAAgWIgBAAQgOAdgoAAQgoAAgVgbg");
	this.shape_21.setTransform(50.4,-1.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAiBrIAAhwQAAgRgEgKQgIgQgVAAQgVAAgIARQgFAJAAASIAABvIg+AAIAAjOIA6AAIAAAWIABAAQASgdAlAAQAOAAAQAFQAOAGAJAHQAYAUAAAvIAACAg");
	this.shape_22.setTransform(23.7,1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgeAXIAAgtIA9AAIAAAtg");
	this.shape_23.setTransform(9.5,-13.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeBnIAAjOIA9AAIAADOg");
	this.shape_24.setTransform(9.5,1.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ABhBrIAAhtQAAgUgEgJQgHgRgVAAQgjAAAAArIAABwIg8AAIAAhvQAAgsgfAAQgjAAAAAuIAABtIg+AAIAAjOIA6AAIAAAWIAAAAQARgdApAAQAoAAASAlQAXglArAAQAjAAAUAVQAOAPAEAQQAEAPAAAiIAABwg");
	this.shape_25.setTransform(-11,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_1},{t:this.shape_19},{t:this.instance},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-28.4,136.7,57.8);


(lib.INFORMATE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_2();
	this.instance.parent = this;
	this.instance.setTransform(13.4,0.9,1,1,0,0,0,18.5,11.7);
	this.instance.shadow = new cjs.Shadow("rgba(33,57,67,0.447)",0,7,15);

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.8,-31.3,1,1,0,0,0,18.9,11.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(33,57,67,0.447)",0,7,15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Agdg2IAUgBIAGBaIAggCIACAUIg2AEg");
	this.shape.setTransform(123.9,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AgOg4IAOgBIA2BsIgWABIgPgcIglADIgLAdIgWACgAgPAHIAYgCIgNggIAAAAg");
	this.shape_1.setTransform(114.3,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("Aggg1IA6gEIABAUIglACIABAcIAkgCIACARIglACIADAbIAlgDIABAUIg6AEg");
	this.shape_2.setTransform(99.3,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("Agdg2IAUgBIAGBbIAhgCIABATIg1ADg");
	this.shape_3.setTransform(92.1,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2F2F2").s().p("AgNg4IANgBIA2BsIgWABIgPgcIglADIgKAdIgYACgAgPAHIAYgCIgMggIgBAAg");
	this.shape_4.setTransform(82.6,19.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("Agwg0IAYgCIAxBNIABAAIgFhPIAVgBIAHBuIgYABIgyhMIAFBPIgVACg");
	this.shape_5.setTransform(70.6,20.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AgOgiIAOgBIA2BrIgXACIgNgcIgnACIgKAeIgWABgAgPAcIAYgBIgNggIAAAAgAgYg4IAegWIAJAPIgfAVg");
	this.shape_6.setTransform(59.3,18.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AgHA5IgLgCQgGgCgEgDIgKgHIgIgIIgGgJQgDgFgBgGQgCgGgBgGQAAgEABgGQABgGACgFIAFgLIAHgJIAIgHIAKgGIALgEIAMgCQAFgBAMADQAJACAIAFQAHAFAGAGQAFAGACAGIgZABQgGgHgGgDQgEgCgEgBIgJgBIgJACIgHADQgHAEgFAGQgEAGgCAHQgCAHAAAFQABAGADAHQADAHAEAFQAGAGAHACIAJADQAEABADgBIAKgCIAJgEIAHgHQAEgFACgFIgtADIgBgSIBHgDIAAACIAAAKIgDAKIgFALIgHAJQgEAEgFADIgJAGIgLAEIgMACIgDAAIgHgBg");
	this.shape_7.setTransform(46.6,21.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AgEAQIgqhDIAXgBIAaAyIAVg1IAXgCIggBIIACApIgTACg");
	this.shape_8.setTransform(30,22.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AgvBPIAUgBIgJiWIgVAAIgEhBIBpgHIAEBCIgUACIAJCWIAVgCIAEBDIhpAGg");
	this.shape_9.setTransform(11.1,16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2F2F2").s().p("AhQBxIgLizIgVABIgEhCIBsgGIADBCIgVABIAKCUIA3gDIgKiVIgTACIgEhCIBrgHIAEBCIgVABIALCwIgmApIhoAHg");
	this.shape_10.setTransform(-9,17.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2F2F2").s().p("AgWB7IgLABIgtghIgNjMIAogtIBXgFIArAmIANDLIgmApIgMAAIACApIhAAEgAgYhdIAKCVIAmgCIgJiWg");
	this.shape_11.setTransform(-31.3,20.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2F2F2").s().p("AhzBSIAYgCIAOiYIgSABIgEhCICngKIAEBCIgSABIAhCVIAZgBIAEBCIhrAHIgEhCIAQgBIgGgYIglADIgDAXIARgBIAEBCIhrAHgAgSAJIAYgCIgQhSg");
	this.shape_12.setTransform(-53.7,20.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AhbBRIAWgBIgJiWIgXABIgDhCIDAgLIAGBXIhDAEIgCgVIgmACIADArIBGgEIAFBAIgWABIgOABIgQABIgSABIACArIAmgCIgCgVIBDgEIAFBXIjAALg");
	this.shape_13.setTransform(123.4,-23.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2F2F2").s().p("AgqBRIAVgCIgKiXIgOACIABAgIgwAEIgGhjIC/gNIAGBjIgwAEIgCghIgPAAIAJCXIAUgBIAFBCIhpAHg");
	this.shape_14.setTransform(100.8,-22);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2F2F2").s().p("AhzBSIAYgBIAOiYIgSABIgEhDICngKIAEBCIgSABIAhCWIAZgCIAEBCIhrAGIgEhCIAQgBIgGgXIglADIgDAXIARgBIAEBCIhrAHgAgSAJIAYgBIgQhUg");
	this.shape_15.setTransform(80.8,-20.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2F2F2").s().p("AiGBUIAVgBIgJiWIgWABIgEhCIBZgFIA6CJIADAAIAoiQIBZgFIAFBCIgXACIAKCWIAWgCIAEBCIhYAGIgGhjIgcBlIgjABIgphgIAHBjIhZAFg");
	this.shape_16.setTransform(51.6,-18.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2F2F2").s().p("AhmBQIAWgCIgKiWIgVACIgFhCICNgJIA2AkIAFBGIgnAkIAqAcIADArIAXgBIADBCIhYAFIgGhtIgnADIAHBsIhYAGgAgYhMIAEArIAlgCIgCgrg");
	this.shape_17.setTransform(24.1,-16.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2F2F2").s().p("AhOBvIgNjMIApgtIBWgFIAsAmIAMDLIgmApIhXAFgAgXhJIAJCWIAngDIgKiWg");
	this.shape_18.setTransform(1.4,-15.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F2F2F2").s().p("AhVBRIAWAAIgKiXIgVABIgEhBIDAgNIAFBXIhCAFIgCgVIgmACIADArIBGgEIAEBAIgVABIgPABIgPABIgTABIABArIAVgBIAEBCIhrAGg");
	this.shape_19.setTransform(-20.1,-14.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2F2F2").s().p("AheBSIAWgBIgKiWIgWABIgEhCIBZgGIAsBuIgHhwIBXgFIAEBCIgVABIAODYIhIAFIgmhhIAGBjIhYAFg");
	this.shape_20.setTransform(-43.7,-13);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F2F2F2").s().p("AgvBPIAUgBIgJiWIgVABIgEhDIBpgGIAEBCIgUABIAJCXIAVgBIAEBBIhpAHg");
	this.shape_21.setTransform(-62.3,-11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.4,-47.9,223.8,97);


// stage content:
(lib._300x50 = function(mode,startPosition,loop) {
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

	// web
	this.instance = new lib.WEB("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.4,42,0.5,0.5,0,0,0,39.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({_off:false},0).to({x:251.4},3).wait(26).to({startPosition:0},0).wait(1));

	// min 65
	this.instance_1 = new lib.MIN65("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(351.8,22,0.57,0.57,0,0,0,39.6,0.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({_off:false},0).to({x:252.2,y:20},5).wait(28));

	// informate
	this.instance_2 = new lib.INFORMATE("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-57.7,27.8,0.46,0.46,0,0,0,39.5,0.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(67).to({_off:false},0).to({x:55.8,y:26.8},3).wait(30));

	// diagnostico
	this.instance_3 = new lib.diagnosticoatiempofamiliares("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(110,-41.5,1,1,0,0,0,-8.5,0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({x:111.1,y:26.3},3).wait(30).to({startPosition:0},0).to({y:91},2).to({_off:true},3).wait(30));

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AsGFuIAhgEIATCjIghAEgAzMmUMAk/gB8IBaCzMglUACng");
	var mask_graphics_1 = new cjs.Graphics().p("ArlFuIAggEIATCjIggAEgAysmUMAlAgB8IBZCzMglTACng");
	var mask_graphics_2 = new cjs.Graphics().p("ArqFuIAggEIATCjIggAEgAyxmUMAlAgB8IBZCzMglTACng");
	var mask_graphics_3 = new cjs.Graphics().p("ArnBRImgAdIhFjcMAlAgB9IBZC0I+TCFIASCZIghAFg");
	var mask_graphics_7 = new cjs.Graphics().p("ArnBRImgAdIhFjcMAlAgB9IBZC0ItpA+IJygfIARCUI6cBjIABAIIghAFg");
	var mask_graphics_9 = new cjs.Graphics().p("ArnBRImgAdIhFjcMAlAgB9IBZC0ItpA+IJygfIARCUI6cBjIABAIIghAFg");
	var mask_graphics_32 = new cjs.Graphics().p("ArnBRImgAdIhFjcMAlAgB9IBZC0ItpA+IJygfIARCUI6cBjIABAIIghAFg");
	var mask_graphics_33 = new cjs.Graphics().p("ArQELImgAdIhGjdMAlAgB7IBZCyItpBAIJzgiIARCXI6dBjIACAIIghAEg");
	var mask_graphics_34 = new cjs.Graphics().p("ArQG3ImgAdIhGjdMAlAgB9IBZCzItpBBIJzgiIARCXI6dBjIACAIIghAEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:130.5,y:-2.8}).wait(1).to({graphics:mask_graphics_1,x:126.2,y:7}).wait(1).to({graphics:mask_graphics_2,x:125.7,y:16.8}).wait(1).to({graphics:mask_graphics_3,x:127.5,y:26.6}).wait(4).to({graphics:mask_graphics_7,x:127.5,y:26.6}).wait(2).to({graphics:mask_graphics_9,x:127.5,y:26.6}).wait(23).to({graphics:mask_graphics_32,x:127.5,y:26.6}).wait(1).to({graphics:mask_graphics_33,x:125.2,y:42.3}).wait(1).to({graphics:mask_graphics_34,x:125.2,y:59.5}).wait(1).to({graphics:null,x:0,y:0}).wait(65));

	// aneurismas Aorticos
	this.instance_4 = new lib.aneurismaaorticolargo("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(124.1,-35.5,1,1,0,0,0,-11.5,0.5);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:23.4},3).wait(6).to({startPosition:0},0).wait(23).to({startPosition:0},0).to({y:92.1},2).to({_off:true},1).wait(65));

	// SR
	this.instance_5 = new lib.SRGORECH();
	this.instance_5.parent = this;
	this.instance_5.setTransform(244,60,0.7,0.7);

	this.instance_6 = new lib.Tween7("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(269.2,33.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween8("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(261.4,25.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween9("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(261.4,25.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween10("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(150.4,25,0.93,0.93);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{y:60,scaleX:0.7,scaleY:0.7,x:244}}]}).to({state:[{t:this.instance_5,p:{y:2,scaleX:0.7,scaleY:0.7,x:244}}]},2).to({state:[{t:this.instance_6}]},30).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_5,p:{y:-15,scaleX:0.9,scaleY:0.9,x:229}}]},1).to({state:[{t:this.instance_8}]},29).to({state:[{t:this.instance_9}]},5).to({state:[{t:this.instance_5,p:{y:-43,scaleX:1.51,scaleY:1.51,x:96}}]},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({_off:false},0).to({_off:true,x:261.4,y:25.5},3).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(32).to({_off:false},3).to({_off:true,scaleX:0.9,scaleY:0.9,x:229,y:-15},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(65).to({_off:false},0).to({_off:true,scaleX:0.93,scaleY:0.93,x:150.4,y:25},5).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65).to({_off:false},5).to({_off:true,scaleX:1.51,scaleY:1.51,x:96,y:-43},1).wait(29));

	// Layer 1
	this.instance_10 = new lib.FONDO300X50();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,-30.7,300,178.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;