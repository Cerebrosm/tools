(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/1aa.jpg", id:"_1aa"},
		{src:"images/2aa.jpg", id:"_2aa"},
		{src:"images/3aa.jpg", id:"_3aa"},
		{src:"images/camioneta.png", id:"camioneta"}
	]
};



// symbols:



(lib._1aa = function() {
	this.initialize(img._1aa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,250);


(lib._2aa = function() {
	this.initialize(img._2aa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,250);


(lib._3aa = function() {
	this.initialize(img._3aa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,250);


(lib.camioneta = function() {
	this.initialize(img.camioneta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,178);


(lib.SymbolZ = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3aa();
	this.instance.setTransform(-50,-125);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-125,100,250);


(lib.SymbolY = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._2aa();
	this.instance.setTransform(-50,-125);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-125,100,250);


(lib.SymbolQ = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._1aa();
	this.instance.setTransform(-50,-125);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-125,100,250);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkAVIAQgpIA4AAIgPApg");
	this.shape.setTransform(93.8,9.6,0.916,0.916);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhsBOIAPgoQAdANAmAAQASAAAIgDQAIgDADgHQAFgNgQgEIgZgFQg9gKASgxQARgwBPAAQArAAAmANIgOAoQgegMgjABQgQgBgHADQgHACgBAGQgCAHACADQABADAGACIAbAFQBAAKgVA1QgKAagZAMQgXAKglAAQg3AAgigOg");
	this.shape_1.setTransform(82.9,3.4,0.916,0.916);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAxBYIABgfIhHAAIgUAfIhIAAIBtiYQANgXAZAAIBQAAIAACvgAAFAPIAuAAIAChHg");
	this.shape_2.setTransform(61.3,3.4,0.916,0.916);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhZBYIAwiCIg2AAIAQgtICvAAIgQAtIg1AAIguCCg");
	this.shape_3.setTransform(49,3.4,0.916,0.916);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVBYIgLiAIgvCAIg8AAIBAivIBLAAQAVAAAAAbIALBmIAwiBIA8AAIhACvg");
	this.shape_4.setTransform(26.8,3.4,0.916,0.916);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAxBYIABgfIhHAAIgVAfIhHAAIBtiYQAGgNAKgFQAJgFANAAIBQAAIAACvgAAFAPIAuAAIAChHg");
	this.shape_5.setTransform(2,3.4,0.916,0.916);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhXBYIBAivIBEAAIguCCIBZAAIgRAtg");
	this.shape_6.setTransform(-15.7,3.4,0.916,0.916);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhXBYIBAivIBEAAIguCCIBZAAIgRAtg");
	this.shape_7.setTransform(-32.3,3.4,0.916,0.916);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUBYIAPgoIhmAAIASgwIBRhGQAPgRAPAAIBWAAIgkBgIAZAAIgOAnIgZAAIgOAogAgrAJIAxAAIAbhHg");
	this.shape_8.setTransform(-54.5,3.4,0.916,0.916);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhzBYIBAivICnAAIgOApIhlAAIgHAbIBYAAIgPAmIhYAAIgKAcIBiAAIgPApg");
	this.shape_9.setTransform(-78.1,3.4,0.916,0.916);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah3BYIBAivIBTAAQA+AAAUAdQATAagRArQgPApgfATQgdARgtAAgAgjAtIAcAAQATAAANgKQANgKAJgYQAIgWgFgLQgGgMgVAAIgYAAg");
	this.shape_10.setTransform(-98.7,3.4,0.916,0.916);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAxBYIABgfIhHAAIgVAfIhHAAIBtiYQAGgNAKgFQAJgFANAAIBQAAIAACvgAAFAPIAuAAIAChHg");
	this.shape_11.setTransform(99.2,-23.5,0.916,0.916);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAKBYIgRgzIgWAAIgSAzIhGAAIBAivIBdAAQBjAAgaBJQgHASgPAKQgOAJgXADIAbA+gAgOgCIARAAQAUAAAIgDQAJgEAFgMQAFgNgFgGQgFgGgTAAIgVAAg");
	this.shape_12.setTransform(80.6,-23.5,0.916,0.916);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah0BYIBAivIBXAAQA2AAATAXQAQAVgNAlQgMAegbAMQgXALgqAAIgnAAIgPApgAgRAGIARAAQAUAAAKgFQAIgDAGgOQAFgQgEgHQgGgHgTAAIgUAAg");
	this.shape_13.setTransform(60.9,-23.5,0.916,0.916);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAmBYIAvh+IhZB+Ig8AAIAAiBIgvCBIg8AAIBAivIBLAAQAOAAAGAIQAFAGgBAPIACBLIBHhoIBrAAIhACvg");
	this.shape_14.setTransform(37,-23.5,0.916,0.916);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhpA+QgUgbASgtQAQgrAfgUQAegSAzAAQA/AAAWAeQAUAbgRAsQgRAsgfAUQgeASgyAAQhAAAgWgegAgSgmQgNAKgJAZQgTAzAvAAQATAAAMgJQANgKAJgZQATgzguAAQgTAAgNAJg");
	this.shape_15.setTransform(11.7,-23.5,0.916,0.916);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhdA/QgXgcATgvQAdhPBnAAQAmAAAiAMIgQAsQgYgLgfAAQgaAAgOAJQgTAMgJAZQgIAYALAMQALALAcAAQAgAAAXgHIgRAuQgYAGggAAQg+AAgXgdg");
	this.shape_16.setTransform(-7.2,-23.5,0.916,0.916);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAxBYIABgfIhHAAIgVAfIhHAAIBtiYQAGgNAKgFQAJgFANAAIBQAAIAACvgAAFAPIAuAAIAChHg");
	this.shape_17.setTransform(-36.5,-23.5,0.916,0.916);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhXBYIBAivIBEAAIguCCIBZAAIgRAtg");
	this.shape_18.setTransform(-54.3,-23.5,0.916,0.916);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVBYIgLh/IgvB/Ig8AAIBAivIBLAAQAWAAAAAbIALBmIAviBIA8AAIhACvg");
	this.shape_19.setTransform(-78.8,-23.5,0.916,0.916);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhzBYIBAivICnAAIgOApIhlAAIgHAbIBYAAIgPAnIhYAAIgKAbIBiAAIgPApg");
	this.shape_20.setTransform(-99,-23.5,0.916,0.916);

	// Layer 1 copy
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgkAVIAQgpIA4AAIgPApg");
	this.shape_21.setTransform(95.8,11.6,0.916,0.916);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AhsBOIAPgoQAdANAmAAQASAAAIgDQAIgDADgHQAFgNgQgEIgZgFQg9gKASgxQARgwBPAAQArAAAmANIgOAoQgegMgjABQgQgBgHADQgHACgBAGQgCAHACADQABADAGACIAbAFQBAAKgVA1QgKAagZAMQgXAKglAAQg3AAgigOg");
	this.shape_22.setTransform(84.9,5.4,0.916,0.916);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AAxBYIABgfIhHAAIgUAfIhIAAIBtiYQANgXAZAAIBQAAIAACvgAAFAPIAuAAIAChHg");
	this.shape_23.setTransform(63.3,5.4,0.916,0.916);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AhZBYIAwiCIg2AAIAQgtICvAAIgQAtIg1AAIguCCg");
	this.shape_24.setTransform(51,5.4,0.916,0.916);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgVBYIgLiAIgvCAIg8AAIBAivIBLAAQAVAAAAAbIALBmIAwiBIA8AAIhACvg");
	this.shape_25.setTransform(28.8,5.4,0.916,0.916);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AAxBYIABgfIhHAAIgVAfIhHAAIBtiYQAGgNAKgFQAJgFANAAIBQAAIAACvgAAFAPIAuAAIAChHg");
	this.shape_26.setTransform(4,5.4,0.916,0.916);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AhXBYIBAivIBEAAIguCCIBZAAIgRAtg");
	this.shape_27.setTransform(-13.7,5.4,0.916,0.916);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AhXBYIBAivIBEAAIguCCIBZAAIgRAtg");
	this.shape_28.setTransform(-30.3,5.4,0.916,0.916);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgUBYIAPgoIhmAAIASgwIBRhGQAPgRAPAAIBWAAIgkBgIAZAAIgOAnIgZAAIgOAogAgrAJIAxAAIAbhHg");
	this.shape_29.setTransform(-52.5,5.4,0.916,0.916);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AhzBYIBAivICnAAIgOApIhlAAIgHAbIBYAAIgPAmIhYAAIgKAcIBiAAIgPApg");
	this.shape_30.setTransform(-76.1,5.4,0.916,0.916);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("Ah3BYIBAivIBTAAQA+AAAUAdQATAagRArQgPApgfATQgdARgtAAgAgjAtIAcAAQATAAANgKQANgKAJgYQAIgWgFgLQgGgMgVAAIgYAAg");
	this.shape_31.setTransform(-96.7,5.4,0.916,0.916);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AAxBYIABgfIhHAAIgVAfIhHAAIBtiYQAGgNAKgFQAJgFANAAIBQAAIAACvgAAFAPIAuAAIAChHg");
	this.shape_32.setTransform(101.2,-21.5,0.916,0.916);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AAKBYIgRgzIgWAAIgSAzIhGAAIBAivIBdAAQBjAAgaBJQgHASgPAKQgOAJgXADIAbA+gAgOgCIARAAQAUAAAIgDQAJgEAFgMQAFgNgFgGQgFgGgTAAIgVAAg");
	this.shape_33.setTransform(82.6,-21.5,0.916,0.916);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("Ah0BYIBAivIBXAAQA2AAATAXQAQAVgNAlQgMAegbAMQgXALgqAAIgnAAIgPApgAgRAGIARAAQAUAAAKgFQAIgDAGgOQAFgQgEgHQgGgHgTAAIgUAAg");
	this.shape_34.setTransform(62.9,-21.5,0.916,0.916);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AAmBYIAvh+IhZB+Ig8AAIAAiBIgvCBIg8AAIBAivIBLAAQAOAAAGAIQAFAGgBAPIACBLIBHhoIBrAAIhACvg");
	this.shape_35.setTransform(39,-21.5,0.916,0.916);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AhpA+QgUgbASgtQAQgrAfgUQAegSAzAAQA/AAAWAeQAUAbgRAsQgRAsgfAUQgeASgyAAQhAAAgWgegAgSgmQgNAKgJAZQgTAzAvAAQATAAAMgJQANgKAJgZQATgzguAAQgTAAgNAJg");
	this.shape_36.setTransform(13.7,-21.5,0.916,0.916);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AhdA/QgXgcATgvQAdhPBnAAQAmAAAiAMIgQAsQgYgLgfAAQgaAAgOAJQgTAMgJAZQgIAYALAMQALALAcAAQAgAAAXgHIgRAuQgYAGggAAQg+AAgXgdg");
	this.shape_37.setTransform(-5.2,-21.5,0.916,0.916);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AAxBYIABgfIhHAAIgVAfIhHAAIBtiYQAGgNAKgFQAJgFANAAIBQAAIAACvgAAFAPIAuAAIAChHg");
	this.shape_38.setTransform(-34.5,-21.5,0.916,0.916);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AhXBYIBAivIBEAAIguCCIBZAAIgRAtg");
	this.shape_39.setTransform(-52.3,-21.5,0.916,0.916);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgVBYIgLh/IgvB/Ig8AAIBAivIBLAAQAWAAAAAbIALBmIAviBIA8AAIhACvg");
	this.shape_40.setTransform(-76.8,-21.5,0.916,0.916);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AhzBYIBAivICnAAIgOApIhlAAIgHAbIBYAAIgPAnIhYAAIgKAbIBiAAIgPApg");
	this.shape_41.setTransform(-97,-21.5,0.916,0.916);

	this.addChild(this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-109.7,-32,221.5,45.9);


(lib.NEgra = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.camioneta();
	this.instance.setTransform(-105.8,-88.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-105.8,-88.8,212,178);


(lib.LOGOGO = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDAGIgBgEQAAgCABgDQACgDABAAIACABQADACAAAEIgBAEIAAABIAAgCQAAgFgEAAQgDAAAAAFIABACIAAABg");
	this.shape.setTransform(-36.9,-15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgCAJQgDgCgBgHQAAgJAGgBQAAAAAAAAQABAAABABQAAAAABAAQAAABAAAAQAEADAAAFQAAAEgCADQgCAEgDAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_1.setTransform(-36.9,-15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADADQAAgEgDAAQgCABgBACIgBgBQAAgGAEgBIABABQADADAAACQABAFgCACg");
	this.shape_2.setTransform(-35.1,-15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgCAJQgDgDgBgGQAAgCACgEQACgDACAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQADADAAAFQABAKgHAAIAAAAIgCgBg");
	this.shape_3.setTransform(-35.1,-15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAAADIgEgDQgDAAgDAAIgCAAQAAAAAAAAQAAAAAAAAQAAAAABgBQAAgBABAAIABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAIAIgBQAEgBAGABIACAAIABADIgCAAIgEABIgDADIgCAAIgCgBgAgEAAIAEABQAAABAAAAQAAAAABAAQABABAAgBQABAAAAAAIAFgDIgEAAIgIABg");
	this.shape_4.setTransform(-36.1,-13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgGAAIABgCQAFAAAHACIgBADQgGgCgGgBg");
	this.shape_5.setTransform(-44.2,14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgFABIAAgCIALABIAAACQgGgBgFAAg");
	this.shape_6.setTransform(-44.4,15.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AAAAAIgDAAIADgBIADABIABACg");
	this.shape_7.setTransform(-48.4,-14.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnAnQgDgNgIgHQAPgFAKAFQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQgEgCAEgDIABgBQgMgFABgKQABgLAKAAQABgBAAAAQABAAAAAAQAAgBgBAAQAAAAgBAAIgFABQgBgMAIgGQAFgFAHAAQABAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQADgCAFAAQADAAAAACIAAABIAAABQAIACAFAGQAFAFgBAIIgBABIABAAQAIAGgBAKQAAAIgIACQADAGgFACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAQADAAADgDQANABAIADQAJAEgBAGQgBAHgPAGQgRAGgVAAQgVgBgOgGg");
	this.shape_8.setTransform(-35.9,-13.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFAAQAFgHABgGQAEADABAIQACAKgIAGQAAgJgFgFg");
	this.shape_9.setTransform(-28.9,-6.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEgGQABgCgCgEQAFACAEAGQAEAGgEALQgCgOgGgFg");
	this.shape_10.setTransform(-29.7,-9.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAYQgHgCgFgFQgFgHAFgHIAKgLIAIgRQAEAGANAAQgEALABAGIADAPQAAADgCACQgFADgJAAQgIgBgIgGIgBABQAIALANgCIAAABIgFABIgGgCg");
	this.shape_11.setTransform(-44.9,15.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAhQgJgIAJgIIADAFQABAAAAABQAAAAABAAQAAAAABABQAAAAAAAAQACAAADgCIgCgBQgDAAgCgFIgEgFQgLgJgDgEQgCgGABgNIABgBQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQACAMABACIADgCQgCgCgCgLQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgDgGQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAIAIANQADAGACAAQAAAAAAABQABAAAAgBQAAAAAAAAQAAAAAAAAQgIgQgEgFIgDgDQABgDAFAFQAEAEAJAQQABAAAAgBQAAAAAAAAQABgBgBAAQAAgBAAgBIgJgQQAGABAEANIABAKQgBAEAAAEIABAAIABgCQABgFADAAQgEgJAEgGQACgEAEAEQgDAGACAIQAEAHAAADQAAACgCAEQgCADABACQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABIgBADQAFgBAAgDQAAgHACgCQAIAEgBAKQgBAKgMAGQgFACgEAAQgEAAgFgFg");
	this.shape_12.setTransform(-47.8,-14.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXAOQAFgIAAgGQAbAAAPgQQABARgRAKQgIAGgKAAQgGAAgHgDg");
	this.shape_13.setTransform(-33.3,1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAIQACgHAAgFIABgBQAMAFALgDQAOgDAJgJQACAUgUAIQgHADgFAAQgLAAgIgIg");
	this.shape_14.setTransform(-33.9,4.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAHQgIgFgBgHIAEgGQAJAHALAAQAMAAALgGQACAKgIAGQgHAGgLAAQgHAAgHgFg");
	this.shape_15.setTransform(-34.6,6.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXAFQgJgLAHgMQAFARATABQARACALgMQAFAJgHAIQgJAMgQAAQgOAAgJgOg");
	this.shape_16.setTransform(-34.8,8.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAANQgKAAgGgHQgHgGADgNQAJALAMABQANAAAIgHQABAGgDAFQgGALgOAAIAAgBg");
	this.shape_17.setTransform(-35,11);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBAVQgFgCgDgEIgFgIQgIgHgBgEQgBgDABgHQABgDAEgFQAJAEAJgDIAAADIgIACIACAEIAIgCIABAEIgHACIABAEIAKgBQACACALAEQAIAFgGAHQgGAGgPgBIAAABQABACAIgBQAJgBAFgEIABAAQgCAEgKACIgJACIgFgCg");
	this.shape_18.setTransform(-34.2,15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIAVQgNgEgFgPQgFgOALgLQAAARASAHQAEADAIAAQAKAAAIgEQADAHgKAKQgHAHgLAAQgEAAgHgDg");
	this.shape_19.setTransform(-42.1,9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGAQQgLgEgEgMQgEgLAHgGQANAYAdgGQgCAIgHAFQgFAEgHAAQgDAAgGgCg");
	this.shape_20.setTransform(-43.2,11.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgIAOQgJgDgEgJQgEgJAFgJQAIALAMAEQALACANgBQABAHgKAGQgGAEgHAAQgEAAgGgDg");
	this.shape_21.setTransform(-41.3,7.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAJQgNgOALgRQAIARATAFQARAEARgGQgDAXgeACIgBAAQgOAAgLgOg");
	this.shape_22.setTransform(-40.2,4.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgFAXQgRgFgJgPQgIgNAJgNQATAYAvAAQAAAMgNAHQgIAEgKAAIgKgBg");
	this.shape_23.setTransform(-39.4,1.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AglAMQgZgMAEgUQAWAUAkAAQAlACAWgPQACAMgLAIQgOANgeABIgFAAQgUAAgSgJg");
	this.shape_24.setTransform(-36.4,-0.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVAVQASAAAGgOQAKgOgMgWQAXAHgCAaQgBAUgSAEIgGACQgLAAgHgJg");
	this.shape_25.setTransform(-42.6,-8.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGAXQgOgEgEgMQAPAHAMgLQANgJgDgRQAGABAFAOQAEANgJAKQgIAJgLAAIgGgBg");
	this.shape_26.setTransform(-45,-9.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgEASQgOgDgEgPQALAHAMgHQANgEACgNIAEAEQAIANgNANQgHAFgIAAIgEAAg");
	this.shape_27.setTransform(-46.4,-10.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgJAYQgbAAgPgNQAIgLgCgNQAYAJAdgEQAdgFAJgKQAQAVgWANQgSANgbAAIgEAAg");
	this.shape_28.setTransform(-35.1,-7.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgqANQgUgKgCgMQAMgBAIgHQAVAQAjgDQAjgEAPgPQAIAOgNANQgPATgnABIgCAAQgXAAgUgLg");
	this.shape_29.setTransform(-36.2,-3.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AADAIIgFgEQAAgDgDgBIgEAAIgDgBIgCgEQAJgEAEgEQABAEACABIAFADQAFAFACAEIgLgJQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAAAgBABQAAACAHAGIAFAGQADADgDACIgCABQgEAAgEgGg");
	this.shape_30.setTransform(-26.2,1.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCADQgDgDAHgCIACACIgEACIgBABIgBAAg");
	this.shape_31.setTransform(-26.6,2.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQACABAAACIgCAEIAAAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAgBAAAAg");
	this.shape_32.setTransform(-27.1,1.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAAgCQAAAAAAAAQAAAAAAAAQAAAAABABQAAAAABAAIgCAEQgCgDACgCg");
	this.shape_33.setTransform(-27.7,1.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgLANQgHgFACgIQASAAAFgPQALAFgBAKQgBAKgJAEQgGACgCAAQgFAAgFgDg");
	this.shape_34.setTransform(-28.1,-1.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgKAGQAHgGABgHQADgCAEgFQAKAJgHAJQgGAKgLABg");
	this.shape_35.setTransform(-28.8,-3.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AhJC8QgOgBgJgLQgEgGAAgFQAAgDAEgGQAPgSAEgLQgLgKABgMQABgKAHgGQgCgOACgGQAEgLAJgEIADgGQgEgJACgKQABgJAGgHQgFgPAKgLQgEgLAEgLQgEgGgBgGQgOgBgKgNQgIgCgHgGQgIgHgBgKQgNgJACgPQgDgFABgGQABgGADgDQgKgJgDgHQgCgHAAgQQgDgGAAgDQAAgCAEgCQAAgEAFgBQAFgCADADQAJgDAIAPQACgCAEgBQAEgBAFAFQADADgDAEQgCAFAEAHQACAFAAAGQAIAEACAIQAGADACAEIAHADQAKgBAGAEQALgFAKABQgFgGAAgJQAAgIAFgGQgBgIAFgIQAFgJAIgDQABgGAKgBQAKAAADAGQAIADAFAHQAFAHgBAIQAGAFABAJQACAJgFAHQANABAIAGQAKABAIAIQAKAJgDANQAIAGABALQAAAIgDAFQAJAIgBAKQAIAEAEAIQAEAJgFAJIAEAFQAGADACABQAFAFABAGQACAFgCADQABAGgHACQgGADgEgEIgHAFQgEADgDgEQgEgCAAgDQgCgBgBgDQgIgHAEgHIgBgDQgNAAgGgHQADALgIAMQAGARgOANQACAIgDAGQAKAOgNAQQAAAHgDAIQgEAKgJAFIAEAMIAJAFQANAIgBAJQACADgDAFQgDAHgNACQgMADgHgCQgFgCgEgGIgGgKQgIgIgCgEQgDgLAIgNQgIgFgBgJQgEgKAEgKQgGgJAAgDQgBAEgCADQACAJgEAJQgEAHgIAFQgCATgUAEQgFALABAFIADAKQABAJAAAEQgCAOgWAAIgDgBg");
	this.shape_36.setTransform(-37.5,0.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag+AtIAihZIBbAAIgJAYIgzAAIgDAKIAwAAIgIAUIgvAAIgEALIAyAAIgJAYg");
	this.shape_37.setTransform(31.9,2.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgSAtIADg+IgYA+IglAAIAihZIAxAAQAEAAAEADQAFAGgBAIIgCAsIAXg9IAlAAIgiBZg");
	this.shape_38.setTransform(62,2.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgwAtIAihZIAqAAIgXA7IAsAAIgMAeg");
	this.shape_39.setTransform(42,2.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgEAtIAKgeIgVAAIgMAeIgqAAIAhhZIApAAIgKAhIAVAAIAMghIAqAAIgiBZg");
	this.shape_40.setTransform(19.4,2.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgmAtIAihZIArAAIgiBZg");
	this.shape_41.setTransform(-2.4,2.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AglAtIAhhZIAqAAIghBZg");
	this.shape_42.setTransform(51.1,2.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgrAoQgQgJAAgPQgBgXAWgRQARgPAXgFQAegGAdAHIgOAgQgEgJgOAAQgKAAgOAFQgJAGgEAJQgEAMAMAFQAGADALgBIAUgDIgKAcQgOADgSABIgCAAQgVAAgPgIg");
	this.shape_43.setTransform(7.5,2.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAUAtIAYg+IgsA+IgiAAIAFhAIgYBAIgpAAIAjhZIAzAAQAHgBACAIQABAFAAAFIgCAeIAfgvIA/AAIgiBZg");
	this.shape_44.setTransform(-15,2.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FAE22B").s().p("AnwAGIAAgLIPhAAIgEALg");
	this.shape_45.setTransform(1.2,10.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1960A6").s().p("ApiBnIAAjNITFAAIAADNg");
	this.shape_46.setTransform(12.5,3.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AppBtIAAjZITTAAIAADZg");
	this.shape_47.setTransform(12.5,3.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AusGbIErs2IYuAAIAAM3g");

	this.addChild(this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94.1,-41.2,188.3,82.4);


(lib.hasta = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE600").s().p("ApMClIAKgeQgYAAgWgFQgUgEgTgIIATgzQARAHAWAFQAYAFAWAAIAAAAIAQgqIgOgCQgVgDgNgGQgNgHgHgKQgGgLAAgLQAAgMAGgQQAGgPAKgMQALgMAQgHQAQgIAUgDQAUgEAZAAIADAAIAJgZIAbAAIgJAbQAUABASAEQARAEARAGIgSA0QgOgGgSgEQgVgFgUgBIgNAlIAIABQAPADAVAGQANAHAGALQAGALAAAOQAAAOgGAPIgIAQIgKAOQgLALgQAIQgPAHgUACQgUADgYAAIgLAdgAoTBTQAPgBAIgEQAHgEADgHQAEgIgDgGQgEgFgKgCIgGgBgAoQgnQgJADgCAGQgDAJADADQACAFAKACIALABIAMgiQgQABgIAEgAjPCkIAyhXIBJAAIhEBXgAIdCGQgPgDgMgFQgMgFgJgHQgIgHgGgKQgGgIgDgLQgDgKAAgMQAAgMACgNQADgNAFgOQAHgRAQgbQAGgLAHgHQAIgJAIgGIASgKQAKgFALgDQAPgEAkgCQASAAAPADQAPACAMAFQAMAFAJAIQAJAGAGAKQAFAJAEALQADAKAAALQAAANgDALQgCANgFAOQgOAhgJANQgGAKgIAIQgHAIgIAHQgJAFgJAFQgKAFgLADQggAGgTgBQgSAAgQgCgAJWgmQgHACgGAIQgGAHgGALQgGAKgGAQQgGAQgCANQgCALACAJQACAIAHAEQAGAEALAAQAKAAAHgDQAHgDAGgGQAGgIAGgLIAMgdQAGgQACgKQABgMgCgIQgBgIgHgEQgGgEgLAAQgKAAgHADgAEZCGQgOgDgNgFQgLgFgJgHQgJgHgGgKQgGgIgDgLQgDgKAAgMQAAgMADgNQACgNAFgOQAHgRAQgbQAHgLAHgHQAHgJAIgGIASgKQAKgFALgDQAPgEAkgCQASAAAQADQAOACANAFQALAFAKAIQAIAGAGAKQAGAJADALQADAKAAALQAAANgCALQgDANgFAOQgOAhgJANQgGAKgHAIQgHAIgJAHQgIAFgKAFQgKAFgLADQgfAGgUgBQgSAAgQgCgAFTgmQgIACgGAIQgGAHgGALIgMAaQgGAQgCANQgCALACAJQACAIAHAEQAGAEALAAQAKAAAHgDQAHgDAGgGQAGgIAGgLIAMgdQAGgQACgKQACgMgDgIQgBgIgHgEQgGgEgKAAQgKAAgHADgAAWCGQgPgDgKgFQgMgFgJgHQgJgHgGgKQgGgIgDgLQgCgKgBgMQAAgMADgNQACgNAGgOQAGgRAQgbQAHgLAHgHQAFgJAIgGIASgKQAKgFALgDQAPgEAlgCQASAAAPADQAPACAMAFQAMAFAJAIQAIAGAGAKQAGAJADALQADAKAAALQAAANgCALQgDANgFAOQgOAhgJANQgGAKgHAIQgHAIgJAHQgIAFgKAFQgJAFgLADQggAGgUgBQgSAAgPgCgABPgmQgIACgGAIQgGAHgGALQgFAKgHAQQgFAQgDANQgBALABAJQADAIAGAEQAHAEALAAQAJAAAHgDQAIgDAGgGQAFgIAGgLIANgdQAFgQACgKQACgMgCgIQgCgIgHgEQgGgEgKAAQgKAAgHADgAmqCDIAMgiQAGgOAGgHQAGgIAMgHIBcgxQAPgIAHgEQALgHADgKIACgKQgBgGgEgDQgEgEgIgCQgIgCgNAAQgWAAgWAEIggAHIATg1QAWgFARgCQAWgEAWAAQAWAAAiAGIATAHIAPAKQAGAFADAGQAEAHAAAIQABAHgBAIQgBAJgEAJQgFAMgHAJQgIAJgMAIQgJAHgPAJIhMAmIBvAAIgTA2gAmzikIBJAAQgNAEgTAAQgXAAgSgEgAkbikIA+AAQgOADgSAAIgCAAQgQAAgMgDgAieikIAzAAQgMACgOAAQgOABgLgDgArVikIBgAAQgLACgNAAIhJAAgApAikIBuAAIAAABIhvAAg");
	this.shape.setTransform(-43,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(0,-22.7);

	// Layer 1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("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");
	this.shape_2.setTransform(2,-4.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.7,-48.4,233.4,86.6);


(lib.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AxuCcIAAk3MAjdAAAIAAE3g");
	this.shape.setTransform(118.8,20.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5.3,5.3,227.1,31.3);


(lib.AZULLA = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(22,97,167,0)","#1661A7"],[0,0.396],-105.4,0,90.3,0).s().p("AvRDRIAAmhIejAAIjhGhg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.9,-20.9,195.8,42);


(lib.AQQ = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE32B").s().p("AgrA9IAiheIAXAAIggBegAgFgnIAXgVIAaAAIgeAVg");
	this.shape.setTransform(88.9,-1.5,0.904,0.904);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEE32B").s().p("Ag1AlQgJgLAGgTIAUg2IAZAAIgUA2QgIAXAZAAQALAAAEgEQAIgFAFgOIAUg2IAZAAIgUA2QgIAYgOAJQgNAIgWAAQgZAAgKgLg");
	this.shape_1.setTransform(80.6,-0.2,0.904,0.904);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEE32B").s().p("AgaAgQgWgDgGgPQgGgOAHgTQAJgXAPgLQAQgLAXAAQAgAAAKAQQAKAPgJAYQgIAVgPALQgPAKgWABQgDAIADAEQADADAIAAIANgBIgGAQIgLABQglAAALghgAgNgnQgJAHgGAQQgNAgAhAAQANAAAJgHQAJgGAGgPQAMghghAAQgMAAgJAGg");
	this.shape_2.setTransform(69.3,1.1,0.904,0.904);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEE32B").s().p("AAfAvIAAgUIgsAAIgOAUIgbAAIA+hUQAGgJAJAAIAcAAIAEBdgAgBAJIAfAAIgBgrg");
	this.shape_3.setTransform(57.8,-0.3,0.904,0.904);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEE32B").s().p("AAAAvIgShKIgbBKIgXAAIAihdIAaAAQAIAAABAKIARBBIAchLIAXAAIgjBdg");
	this.shape_4.setTransform(44.9,-0.3,0.904,0.904);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEE32B").s().p("AgzAuQgLgOAKgZQAIgVAPgLQAQgLAXAAQAgABALAQQAJAOgIAWQgJAYgQALQgPAKgXAAQggAAgKgQgAgNgKQgJAGgGAOQgNAiAiAAQAMAAAJgHQAKgGAFgQQAMggggAAQgNAAgJAHgAAFgoIAagVIAaAAIgdAVg");
	this.shape_5.setTransform(33.6,-1.4,0.904,0.904);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEE32B").s().p("AgcAvIAghdIAZAAIggBdg");
	this.shape_6.setTransform(25.9,-0.3,0.904,0.904);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEE32B").s().p("AguAiQgLgPAJgYQAQgrAxAAQASAAASAGIgGATQgNgGgRAAQgfAAgKAdQgLAfAjAAQAQAAAOgEIgGATQgLADgSAAQgdAAgMgPg");
	this.shape_7.setTransform(19.3,-0.3,0.904,0.904);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEE32B").s().p("AAfAvIgBgUIgsAAIgOAUIgaAAIA9hUQAGgJAKAAIAcAAIAEBdgAgBAJIAfAAIgBgrg");
	this.shape_8.setTransform(8.2,-0.3,0.904,0.904);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEE32B").s().p("AAYAvIAchKIg5BKIgYAAIgDhLIgcBLIgXAAIAihdIAaAAQALAAAAANIAFA2IAzhDIAoAAIgjBdg");
	this.shape_9.setTransform(-2.6,-0.3,0.904,0.904);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEE32B").s().p("AALAvIgLgeIgVAAIgLAeIgZAAIAjhdIAoAAQAyAAgNAmQgHASgaADIAOAigAgOAAIAPAAQAOAAAGgBQAGgCADgIQAEgKgEgDQgEgFgOAAIgPAAg");
	this.shape_10.setTransform(-15.2,-0.3,0.904,0.904);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEE32B").s().p("Ag0AhQgKgOAJgWQAJgYAPgLQAQgKAYAAQAfAAALAQQAJAOgIAXQgJAXgPALQgQAKgXAAQggAAgLgQgAgNgXQgJAGgGARQgNAfAiAAQAMAAAJgGQAJgHAGgQQAMggghAAQgMAAgJAHg");
	this.shape_11.setTransform(-25.5,-0.3,0.904,0.904);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEE32B").s().p("Ag5AvIAihdIBSAAIgHASIg5AAIgJAaIAyAAIgFAQIgzAAIgNAhg");
	this.shape_12.setTransform(-34.9,-0.3,0.904,0.904);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEE32B").s().p("AAAAvIgShKIgbBKIgWAAIAhhdIAaAAQAIAAABAKIARBBIAchLIAWAAIgiBdg");
	this.shape_13.setTransform(-45.7,-0.3,0.904,0.904);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEE32B").s().p("AgcAvIAghdIAZAAIggBdg");
	this.shape_14.setTransform(-53.7,-0.3,0.904,0.904);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEE32B").s().p("Ag3ApIAGgRQARAIAVAAQAUAAAEgKQAEgKgNgEIgOgDQgegFAJgYQAJgYAkAAQAWAAAUAIIgGARQgRgIgTAAQgSAAgDAJQgCAFACADQABACAGACIAQADQAfAGgKAaQgKAYgkAAQgcAAgSgIg");
	this.shape_15.setTransform(-63.9,-0.3,0.904,0.904);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEE32B").s().p("AAVA9IAAgUIgsAAIgOAUIgbAAIBAhUQAEgKAJAAIAcAAIAEBegAgLAXIAfAAIgBgrgAANgnIAagVIAaAAIgeAVg");
	this.shape_16.setTransform(-73.8,-1.5,0.904,0.904);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEE32B").s().p("AAZAvIAbhKIg5BKIgXAAIgFhLIgcBLIgWAAIAihdIAaAAQAMAAgBANIAFA2IAzhDIAoAAIgjBdg");
	this.shape_17.setTransform(-85.5,-0.3,0.904,0.904);

	this.instance = new lib.Path();
	this.instance.setTransform(-0.2,0.2,0.904,0.904,0,0,0,118.6,21.1);
	this.instance.shadow = new cjs.Shadow("rgba(35,31,32,0.749)",0,0,9);

	this.addChild(this.instance,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-107.7,-19.1,218,42);


// stage content:
(lib._300x250_op = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_189 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(189).call(this.frame_189).wait(1));

	// FlashAICB
	this.instance = new lib.LOGOGO();
	this.instance.setTransform(413.2,172);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(166).to({_off:false},0).wait(1).to({x:387.3},0).wait(1).to({x:361.4},0).wait(1).to({x:335.4},0).wait(1).to({x:309.5},0).wait(1).to({x:283.6},0).wait(1).to({x:257.7},0).wait(1).to({x:231.8},0).wait(1).to({x:205.9},0).wait(16));

	// FlashAICB
	this.instance_1 = new lib.AZULLA();
	this.instance_1.setTransform(-97.8,203.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(166).to({_off:false},0).wait(1).to({x:-79.1},0).wait(1).to({x:-60.4},0).wait(1).to({x:-41.7},0).wait(1).to({x:-23},0).wait(1).to({x:-4.3},0).wait(1).to({x:14.4},0).wait(1).to({x:33.1},0).wait(1).to({x:51.8},0).wait(1).to({x:70.5},0).wait(1).to({x:89.2},0).wait(14));

	// FlashAICB
	this.instance_2 = new lib.AQQ();
	this.instance_2.setTransform(-183.8,76.8);
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({_off:false},0).wait(1).to({x:-147.1},0).wait(1).to({x:-110.3},0).wait(1).to({x:-73.5},0).wait(1).to({x:-36.8},0).wait(1).to({x:0},0).wait(1).to({x:36.8},0).wait(1).to({x:73.6},0).wait(1).to({x:110.3},0).wait(1).to({x:147.1},0).wait(31));

	// FlashAICB
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(-182,74.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(105).to({_off:false},0).wait(1).to({regX:1,regY:-9.1,x:-150.2,y:65.8,alpha:0.091},0).wait(1).to({x:-119.5,alpha:0.182},0).wait(1).to({x:-88.8,alpha:0.273},0).wait(1).to({x:-58.1,alpha:0.364},0).wait(1).to({x:-27.3,alpha:0.455},0).wait(1).to({x:3.3,alpha:0.545},0).wait(1).to({x:34,alpha:0.636},0).wait(1).to({x:64.8,alpha:0.727},0).wait(1).to({x:95.5,alpha:0.818},0).wait(1).to({x:126.2,alpha:0.909},0).wait(1).to({x:157,alpha:1},0).wait(35).to({_off:true},1).wait(38));

	// TEX1
	this.instance_4 = new lib.hasta();
	this.instance_4.setTransform(-185.8,72,0.661,0.661,0,0,0,-0.1,0);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(51).to({_off:false},0).wait(1).to({regX:1,regY:-5.2,scaleX:0.69,scaleY:0.69,x:-154.1,y:68.4,alpha:0.091},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:-123.2,y:68.3,alpha:0.182},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-92.3,y:68.1,alpha:0.273},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-61.3,y:67.9,alpha:0.364},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-30.4,y:67.8,alpha:0.455},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:0.5,y:67.6,alpha:0.545},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:31.4,y:67.5,alpha:0.636},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:62.3,y:67.3,alpha:0.727},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:93.3,y:67.1,alpha:0.818},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:124.2,y:67,alpha:0.909},0).wait(1).to({scaleX:1,scaleY:1,x:155.1,y:66.8,alpha:1},0).wait(42).to({_off:true},1).wait(85));

	// Layer 5
	this.instance_5 = new lib.NEgra();
	this.instance_5.setTransform(-105.5,345,1.439,1.439);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).wait(1).to({regX:0.2,regY:0.1,scaleX:1.38,scaleY:1.38,x:-99.8,y:333.3},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:-94.8,y:321.4},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:-89.8,y:309.5},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:-84.8,y:297.4},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:-79.8,y:285.4},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-74.7,y:273.6},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-69.2,y:261.8},0).wait(1).to({scaleX:1,scaleY:1,x:-63.2,y:250.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-56.6,y:239.2},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-49.2,y:228.5},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-41,y:218.5},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-31.9,y:209.3},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:-21.8,y:201.1},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-11,y:193.9},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:0.3,y:187.8},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:12.2,y:182.7},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:24.5,y:178.4},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:37,y:175},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:49.6,y:172.2},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:62.4,y:170},0).wait(146));

	// 3aa.jpg
	this.instance_6 = new lib.SymbolZ();
	this.instance_6.setTransform(250,-177.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).wait(1).to({y:-152.7},0).wait(1).to({y:-127.5},0).wait(1).to({y:-102.2},0).wait(1).to({y:-77},0).wait(1).to({y:-51.7},0).wait(1).to({y:-26.5},0).wait(1).to({y:-1.2},0).wait(1).to({y:24},0).wait(1).to({y:49.3},0).wait(1).to({y:74.5},0).wait(1).to({y:99.8},0).wait(1).to({y:125},0).wait(170));

	// 2aa.jpg
	this.instance_7 = new lib.SymbolY();
	this.instance_7.setTransform(150,431);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).wait(1).to({y:407.4},0).wait(1).to({y:383.9},0).wait(1).to({y:360.3},0).wait(1).to({y:336.8},0).wait(1).to({y:313.3},0).wait(1).to({y:289.7},0).wait(1).to({y:266.2},0).wait(1).to({y:242.7},0).wait(1).to({y:219.2},0).wait(1).to({y:195.6},0).wait(1).to({y:172.1},0).wait(1).to({y:148.5},0).wait(1).to({y:125},0).wait(174));

	// 1aa.jpg
	this.instance_8 = new lib.SymbolQ();
	this.instance_8.setTransform(50,-177.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({y:-147.7},0).wait(1).to({y:-117.4},0).wait(1).to({y:-87.1},0).wait(1).to({y:-56.8},0).wait(1).to({y:-26.5},0).wait(1).to({y:3.8},0).wait(1).to({y:34.1},0).wait(1).to({y:64.4},0).wait(1).to({y:94.7},0).wait(1).to({y:125},0).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,-177.9,100,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;