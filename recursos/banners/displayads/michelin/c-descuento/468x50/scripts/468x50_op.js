(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 468,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg_1.jpg", id:"bg_1"},
		{src:"images/bg_2.jpg", id:"bg_2"},
		{src:"images/bg_3.jpg", id:"bg_3"},
		{src:"images/Camioneta120.png", id:"Camioneta120"}
	]
};



// symbols:



(lib.bg_1 = function() {
	this.initialize(img.bg_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,50);


(lib.bg_2 = function() {
	this.initialize(img.bg_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,50);


(lib.bg_3 = function() {
	this.initialize(img.bg_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,50);


(lib.Camioneta120 = function() {
	this.initialize(img.Camioneta120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,464,401);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg_3();
	this.instance.setTransform(-78,-25);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78,-25,156,50);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg_2();
	this.instance.setTransform(-78,-25);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78,-25,156,50);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg_1();
	this.instance.setTransform(-78,-25);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78,-25,156,50);


(lib.obten_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE333").s().p("AgnAXQgJgKAHgQQAGgRAMgHQAMgGATAAQAXAAAJALQAJALgGAPQgGARgNAHQgLAGgTAAQgYAAgJgLgAgEAZQAOAAAKgGIgUAAIgCgKIgCAAIgDAKIgVAAQAHAGARAAgAALgUQALAAAEAFQAEAGgDAHQgCAGgLABIAGANQAHgFADgKQALgbgjAAQgOAAgIAFQgIAFgFAMQgGANAHAHIAPgmgAAAgBIABAAQAFAAABgEQACgEgEAAIgDAAg");
	this.shape.setTransform(145.7,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEE333").s().p("AgYBkIgNiRIg2CRIhEAAIBJjHIBVAAQAZAAAAAeIANB1IA3iTIBEAAIhJDHg");
	this.shape_1.setTransform(124.1,8.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEE333").s().p("AhLBkIBKjHIBNAAIhJDHg");
	this.shape_2.setTransform(103.6,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEE333").s().p("AhjBkIBJjHIBOAAIg1CUIBlAAIgSAzg");
	this.shape_3.setTransform(85.4,8.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEE333").s().p("AiEBkIBJjHIDAAAIgRAuIhzAAIgJAfIBmAAIgSAsIhlAAIgLAgIBwAAIgQAug");
	this.shape_4.setTransform(66.2,8.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEE333").s().p("AgBBkIAahLIhDAAIgbBLIhQAAIBKjHIBNAAIgaBLIBDAAIAchLIBPAAIhJDHg");
	this.shape_5.setTransform(41.1,8.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEE333").s().p("AhrBIQgagfAVg3QASgyArgVQAkgTA3AAQAsAAAmANIgSAyQgcgMgjAAQgeAAgRALQgVAMgKAeQgKAbANAOQANAMAhAAQAiAAAcgHIgTA0QgcAHgkAAQhIAAgaghg");
	this.shape_6.setTransform(17.4,8.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEE333").s().p("AhLBkIBJjHIBOAAIhKDHg");
	this.shape_7.setTransform(-1,8.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEE333").s().p("AAsBkIA1iPIhmCPIhFAAIABiTIg2CTIhFAAIBJjHIBWAAQAQAAAGAIQAGAIAAARIACBWIBRh3IB7AAIhJDHg");
	this.shape_8.setTransform(-25.1,8.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag8AsIAJgXQARAHAUAAQARAAADgHQADgIgJgBIgNgDQgigGAKgaQAKgbArAAQAXAAAWAHIgIAXQgPgHgVAAQgRAAAAAGQgCAHAFABIAPADQAkAGgMAcQgFAPgOAHQgNAFgUAAQgdAAgVgHg");
	this.shape_9.setTransform(-59.2,17.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAbAxIABgRIgnAAIgMARIgoAAIA9hUQAHgNAOAAIAtAAIAABhgAACAIIAaAAIABgmg");
	this.shape_10.setTransform(-72.3,17.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgxAxIAbhIIgeAAIAJgZIBgAAIgJAZIgdAAIgZBIg");
	this.shape_11.setTransform(-79.8,17.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLAxIgHhGIgaBGIghAAIAjhhIAqAAQAMAAAAAPIAGA4IAahHIAiAAIgkBhg");
	this.shape_12.setTransform(-93.4,17.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAbAxIABgRIgnAAIgMARIgoAAIA9hUQAHgNAOAAIAtAAIAABhgAACAIIAaAAIABgmg");
	this.shape_13.setTransform(-108.5,17.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgwAxIAkhhIAlAAIgZBIIAxAAIgJAZg");
	this.shape_14.setTransform(-119.3,17.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgwAxIAkhhIAlAAIgZBIIAxAAIgJAZg");
	this.shape_15.setTransform(-129.4,17.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKAxIAIgWIg5AAIAKgbIAtgnQAIgJAIAAIAwAAIgUA1IAOAAIgIAWIgNAAIgJAWgAgYAFIAcAAIAOgng");
	this.shape_16.setTransform(-143,17.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAjA9IAAgVIgxAAIgPAVIgxAAIBMhpQAJgQAQAAIA5AAIAAB5gAADAKIAhAAIABgwg");
	this.shape_17.setTransform(-63.7,2.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAGA9IgLgjIgPAAIgNAjIgwAAIAsh5IBAAAQBFAAgSAyQgJAYggAFIATAqgAgKgBIAMAAQAOAAAFgCQAHgDADgIQADgJgDgEQgEgEgNgBIgOAAg");
	this.shape_18.setTransform(-77.9,2.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhRA9IAth5IA8AAQAmAAANAQQAMAOgKAaQgIAUgTAJQgQAIgdgBIgbAAIgKAdgAgLAEIALAAQAOAAAHgDQAGgCAEgKQAEgLgEgEQgDgGgOAAIgOAAg");
	this.shape_19.setTransform(-92.9,2.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAbA9IAghWIg+BWIgpAAIAAhZIghBZIgqAAIAth5IA0AAQASAAgBAUIABA0IAxhIIBLAAIgtB5g");
	this.shape_20.setTransform(-111.1,2.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhJAsQgOgTANgfQALgfAVgNQAVgNAjAAQAtAAAPAVQAOATgMAeQgMAegWAOQgVANgiAAQgtAAgPgUgAgMgaQgJAHgHARQgNAkAhAAQAMAAAJgGQAJgIAHgSQANgjghABQgMAAgJAGg");
	this.shape_21.setTransform(-130.4,2.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhBAsQgPgTAMghQAUg3BIAAQAaAAAYAIIgLAfQgSgHgUgBQgTABgJAGQgNAIgGARQgMAhApgBQAVABARgFIgMAgQgPAEgXAAQgrAAgRgUg");
	this.shape_22.setTransform(-144.7,2.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgnAXQgJgKAHgQQAGgRAMgHQAMgGATAAQAXAAAJALQAJALgGAPQgGARgNAHQgLAGgTAAQgYAAgJgLgAgEAZQAOAAAKgGIgUAAIgCgKIgCAAIgDAKIgVAAQAHAGARAAgAALgUQALAAAEAFQAEAGgDAHQgCAGgLABIAGANQAHgFADgKQALgbgjAAQgOAAgIAFQgIAFgFAMQgGANAHAHIAPgmgAAAgBIABAAQAFAAABgEQACgEgEAAIgDAAg");
	this.shape_23.setTransform(147.7,2.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgYBkIgNiRIg2CRIhEAAIBJjHIBVAAQAZAAAAAeIANB1IA3iTIBFAAIhKDHg");
	this.shape_24.setTransform(126.1,9.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AhLBkIBKjHIBNAAIhJDHg");
	this.shape_25.setTransform(105.6,9.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AhjBkIBJjHIBOAAIg1CUIBlAAIgSAzg");
	this.shape_26.setTransform(87.4,9.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AiEBkIBJjHIDAAAIgRAuIhzAAIgJAfIBmAAIgSAsIhlAAIgLAgIBwAAIgQAug");
	this.shape_27.setTransform(68.2,9.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AgBBkIAahLIhDAAIgbBLIhQAAIBKjHIBNAAIgaBLIBDAAIAchLIBPAAIhJDHg");
	this.shape_28.setTransform(43.1,9.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AhrBIQgagfAVg3QASgyArgVQAkgTA3AAQAsAAAmANIgSAyQgcgMgjAAQgeAAgRALQgVAMgKAeQgKAbANAOQANAMAhAAQAiAAAcgHIgTA0QgcAHgkAAQhIAAgaghg");
	this.shape_29.setTransform(19.4,9.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("AhLBkIBJjHIBOAAIhKDHg");
	this.shape_30.setTransform(1,9.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AAsBkIA1iPIhmCPIhFAAIABiTIg2CTIhFAAIBJjHIBWAAQAQAAAGAIQAGAIAAARIACBWIBRh3IB7AAIhJDHg");
	this.shape_31.setTransform(-23.1,9.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("Ag8AsIAJgXQARAHAUAAQARAAADgHQADgIgJgBIgNgDQgigGAKgaQAKgbArAAQAXAAAWAHIgIAXQgPgHgVAAQgRAAAAAGQgCAHAFABIAPADQAkAGgMAcQgFAPgOAHQgNAFgUAAQgdAAgVgHg");
	this.shape_32.setTransform(-57.2,18.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AAbAxIABgRIgnAAIgMARIgoAAIA9hUQAHgNAOAAIAtAAIAABhgAACAIIAaAAIABgmg");
	this.shape_33.setTransform(-70.3,18.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231F20").s().p("AgxAxIAbhIIgeAAIAJgZIBgAAIgJAZIgdAAIgZBIg");
	this.shape_34.setTransform(-77.8,18.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AgLAxIgHhGIgaBGIghAAIAjhhIAqAAQAMAAAAAPIAGA4IAahHIAiAAIgkBhg");
	this.shape_35.setTransform(-91.4,18.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AAbAxIABgRIgnAAIgMARIgoAAIA9hUQAHgNAOAAIAtAAIAABhgAACAIIAaAAIABgmg");
	this.shape_36.setTransform(-106.5,18.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AgwAxIAkhhIAlAAIgZBIIAxAAIgJAZg");
	this.shape_37.setTransform(-117.3,18.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#231F20").s().p("AgwAxIAkhhIAlAAIgZBIIAxAAIgJAZg");
	this.shape_38.setTransform(-127.4,18.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#231F20").s().p("AgLAxIAJgWIg5AAIAKgbIAtgnQAIgJAIAAIAwAAIgUA1IAOAAIgIAWIgOAAIgIAWgAgXAFIAbAAIAPgng");
	this.shape_39.setTransform(-141,18.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#231F20").s().p("AAjA9IAAgVIgxAAIgOAVIgzAAIBNhpQAIgQASAAIA4AAIAAB5gAADAKIAgAAIACgwg");
	this.shape_40.setTransform(-61.7,3.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#231F20").s().p("AAGA9IgLgjIgPAAIgNAjIgwAAIAsh5IBAAAQBFAAgSAzQgJAXggAFIATAqgAgKgBIAMAAQAOAAAFgCQAHgCADgKQADgIgDgEQgEgEgNgBIgOAAg");
	this.shape_41.setTransform(-75.9,3.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#231F20").s().p("AhRA9IAth5IA8AAQAmAAANAQQAMAOgKAaQgIAUgTAJQgQAIgdgBIgbAAIgKAdgAgLAEIALAAQAOAAAHgDQAGgCAEgKQAEgLgEgEQgDgGgOAAIgOAAg");
	this.shape_42.setTransform(-90.9,3.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#231F20").s().p("AAbA9IAghWIg+BWIgpAAIAAhZIghBZIgqAAIAth5IA0AAQASAAgBAUIABA0IAxhIIBLAAIgtB5g");
	this.shape_43.setTransform(-109.1,3.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#231F20").s().p("AhJAsQgOgUANgeQALgeAVgOQAVgNAjAAQAtAAAPAVQAOATgMAeQgMAegWAOQgVANgiAAQgtAAgPgUgAgMgaQgJAHgHARQgNAkAhAAQAMAAAJgGQAJgIAHgSQANgjghAAQgMABgJAGg");
	this.shape_44.setTransform(-128.4,3.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#231F20").s().p("AhBAsQgPgTAMghQAUg3BIAAQAaAAAYAJIgLAeQgSgHgUgBQgTABgJAGQgNAIgGARQgMAhApgBQAVABARgFIgMAgQgPAEgXAAQgrAAgRgUg");
	this.shape_45.setTransform(-142.7,3.6);

	this.addChild(this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-152.2,-3.9,304.5,27.9);


(lib.Logo1_mc = function() {
	this.initialize();

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDABQAAgFADAAQAAgBAAAAQABAAAAAAQAAABAAAAQABAAAAAAQACADAAACIAAAEIAAgCQAAgDgEAAQgCAAAAAEIAAACg");
	this.shape.setTransform(-45.5,-16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgCAHQgDgCAAgFQAAgIAFAAIADABQADADAAAEQAAAJgGAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_1.setTransform(-45.5,-16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADADQAAgFgDABQgCAAgBADIAAgBQAAgBABgCQABgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIABABQACACABACQAAAEgCACg");
	this.shape_2.setTransform(-44,-16.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgBAHQgDgCAAgFQgBgHAFgBIACABQACACABAFQABAIgGABQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBg");
	this.shape_3.setTransform(-44,-16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAAACIgDgCQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBABgBIABgBQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAAAABIAGgBQADgBAGABIABgBQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIgCAAIgDAAIgDADIgCABIgBgCgAgDAAIADABQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABgBIAEgCIgEAAIgGABg");
	this.shape_4.setTransform(-44.8,-14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgEAAIAAgBIAKABIgBACIgJgCg");
	this.shape_5.setTransform(-51.5,8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgEAAIAAgBQAEAAAFABIgBACg");
	this.shape_6.setTransform(-51.7,9.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AAAAAIgCAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIADAAIAAABg");
	this.shape_7.setTransform(-55.1,-15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggAgQgCgKgHgGQANgEAHAEQABAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQABAAABgBIAAgBQgJgEABgHQABgJAHgBQABgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgEAAQgBgJAHgFQAEgFAGAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAgBAAQgBAAAAAAQAAgBAAAAQAAAAABAAQACgCAEAAQABAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAIAAABIAAABQAHABAEAFQAEAFgBAGIAAABQAHAFgBAIQAAAIgGAAQACAFgEACQgBAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAQADAAADgDQAKABAHADQAIADgBAFQgBAGgNAFQgNAEgSAAQgRAAgMgGg");
	this.shape_8.setTransform(-44.6,-14.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAAQAEgGABgFQADADABAHQABAHgGAGQAAgIgEgEg");
	this.shape_9.setTransform(-38.8,-8.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDgFQABgBgCgDQAEABADAFQAEAFgEAIQAAgKgGgFg");
	this.shape_10.setTransform(-39.5,-11.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDAUQgGgCgEgFQgEgFAEgGIAJgJIAGgOQACAFAMAAQgEAKABAEIADAMQAAABAAABQAAABAAAAQgBABAAAAQAAAAgBAAQgFADgGAAQgHgBgGgEIgBAAQAGAJALgBIAAABIgFABIgEgCg");
	this.shape_11.setTransform(-52.2,10);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFAbQgHgGAHgIIADAFQACADAEgDIgBgBQgDAAgBgEQgBgBAAAAQAAgBgBgBQAAAAAAAAQgBgBAAAAQgKgIgCgDQgCgFABgLQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABQABAKACACIACgCIgDgKIgCgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAIgDgFQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABABIAGAKQADAFABAAIABAAIgJgSIgDgCQABgCAEADQAFAFAFAMQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBgBgBIgHgOQAFABADAMIABAIQgBAEAAACIABgBQACgEACAAQgDgHADgGQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQgDAGADAGIACAIIgBAEQgBABAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgBACIACAAQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgGACgBQAHADgBAIQgBAJgKAEQgEADgEAAQgDAAgEgFg");
	this.shape_12.setTransform(-54.5,-15.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTAMQAFgHAAgFQAWAAAMgNQABAOgOAIQgHAFgHAAQgGAAgGgCg");
	this.shape_13.setTransform(-42.5,-1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAHQACgHAAgDIABgBQAJAEAKgCQALgCAIgIQABAQgRAGQgFADgEAAQgJAAgHgGg");
	this.shape_14.setTransform(-42.9,0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAAAKQgFAAgGgEQgHgEgBgFIAEgGQAHAGAJAAQAKABAJgGQACAIgHAFQgGAFgIAAIgBAAg");
	this.shape_15.setTransform(-43.6,2.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAEQgHgJAGgJQADANARABQAOABAJgJQADAHgGAHQgGAJgOAAQgLAAgIgLg");
	this.shape_16.setTransform(-43.7,3.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAALQgIAAgFgGQgGgFACgKQAIAJAKAAQALABAGgGQABAFgDAEQgEAIgMAAIAAAAg");
	this.shape_17.setTransform(-43.9,5.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBASQgEgCgCgEIgEgGQgHgGgBgDQgBgDABgFIAEgHQAIADAHgCIAAACIgGACIABADIAGgBIABADIgFACIABADIAHgBIALAFQAHAFgFAFQgGAFgLgBIAAABQABACAGgBQAHgBAFgDIAAAAQgBADgJACIgGABIgFgBg");
	this.shape_18.setTransform(-43.2,9.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGASQgLgEgEgMQgFgMAJgJQACAPAOAFQALAHANgIQACAGgIAIQgGAGgIAAQgDAAgGgCg");
	this.shape_19.setTransform(-49.8,4.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgFANQgJgDgEgKQgDgJAGgFQALAUAYgFQgCAHgFAEQgFADgFAAQgDAAgFgCg");
	this.shape_20.setTransform(-50.7,6.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHAMQgHgDgDgIQgEgGAEgIQAPARAWgEQAAAGgIAFQgEADgGAAQgDAAgGgCg");
	this.shape_21.setTransform(-49.1,2.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVAIQgLgLAJgPQAHAOAQAEQAOADAOgFQgDAUgYABIgBAAQgMAAgJgLg");
	this.shape_22.setTransform(-48.2,0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEATQgOgEgHgNQgHgLAIgKQAPATAnAAQAAALgLAFQgHAEgIAAIgIgBg");
	this.shape_23.setTransform(-47.5,-1.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgfAKQgUgKADgRQASARAeAAQAfABASgMQACAKgJAHQgMALgZAAIgEABQgRAAgPgIg");
	this.shape_24.setTransform(-45.1,-4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSASQAPAAAFgMQAIgLgKgSQAUAFgCAVQgBARgPAEIgEAAQgJAAgHgGg");
	this.shape_25.setTransform(-50.2,-10.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFATQgLgEgEgKQANAGAJgJQALgHgDgOQAGABADALQAEAKgHAJQgHAIgJAAIgFgBg");
	this.shape_26.setTransform(-52.2,-10.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDAPQgMgDgDgMQAJAFAKgFQALgEACgKIADAEQADAFgBAFQgBAFgGAFQgFAFgHAAIgDAAg");
	this.shape_27.setTransform(-53.4,-12);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHAUQgWgBgNgKQAGgJgBgKQATAHAZgEQAYgEAHgIQANASgSAKQgPALgXAAIgCAAg");
	this.shape_28.setTransform(-44,-9.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgiALQgSgJgBgJQALgCAFgFQASAOAdgDQAegDAMgNQAGAMgKAKQgMAQghABIgCAAQgTAAgQgJg");
	this.shape_29.setTransform(-44.9,-6.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AACAHIgDgEQgCgDgEAAIgDgBIgBgDQAFgBAGgFIAGAGQAEAEACADIgJgHQAAgBgBAAQAAgBAAAAQAAAAAAAAQgBAAAAABQAAADAGAEIAEAEQABABAAAAQAAABAAABQAAAAAAAAQgBABAAAAIgCABQgDAAgEgEg");
	this.shape_30.setTransform(-36.6,-2.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCACQgCgCAFgCIACACIgDACIgBABIgBgBg");
	this.shape_31.setTransform(-36.8,-1.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAAAIACADIgCACIAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAg");
	this.shape_32.setTransform(-37.3,-1.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAIgBACQgBgCABgBg");
	this.shape_33.setTransform(-37.8,-2.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgIALQgHgFACgGQAPAAAEgMQAJAEgBAIQgBAIgHADQgFACgBAAQgFAAgDgCg");
	this.shape_34.setTransform(-38.2,-4.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgIAGQAFgGABgFQADgDADgEQAIAIgFAIQgGAIgJABg");
	this.shape_35.setTransform(-38.7,-6.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("Ag9CdQgMgBgHgKQgEgFAAgDQAAgEAEgEQANgSACgHQgIgIABgKQAAgIAGgFQgCgKACgGQAEgKAHgDIACgFQgHgQALgNQgEgMAJgKQgEgJADgJQgDgFAAgFQgNgBgHgLQgHgBgGgFQgHgGgBgIQgKgJABgMQgCgEABgFQAAgFADgCQgIgHgDgGQgCgGABgNQgDgGAAgCQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgEAEgBQAEgBADADQAIgDAGANQACgDADAAQAEgBADAEQADADgCADIAAAEQAAADABADQACAEAAAFQAHADABAHQAEACADAEQAFABABACQAIgBAFADIABAAQAJgEAIABQgEgFAAgIQAAgHAEgEQgBgHAEgHQAEgHAHgDQABgFAHAAQAJgBACAGQAHACAEAGQAEAFAAAHQAFAEABAIQABAHgEAGQALABAGAFQAJABAHAGQAIAIgCALQAGAFAAAJQABAGgCAFQAHAGgBAJQAHADADAHQADAHgEAIQAAABAEADIAHADQAIAKgDAGQAAAFgFACQgGACgDgDIgGAEQgDACgDgDQgDgDAAgBQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgIgFAEgGIgBgDQgLAAgFgFQADAJgHAJQAFAOgMAMQACAFgCAGQAJALgMAOQAAAGgCAHQgEAIgIAEQADAIACACIAHAEQAKAHAAAIQABABgCAFQgCAGgMACQgKACgGgCQgEgBgDgFIgFgIIgIgKQgCgJAGgMQgGgEgBgHQgEgIAEgIIgDgFIgCgGIgDAGQAEAQgQAJQgBAQgRADQgDAKAAAEIADASQgBAMgSAAIgDAAg");
	this.shape_36.setTransform(-45.9,-3.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgzAmIAchLIBLAAIgHAUIgqAAIgDAJIAoAAIgHARIgmAAIgEAIIAqAAIgIAVg");
	this.shape_37.setTransform(11.8,-1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgOAmIACg0IgUA0IgfAAIAchLIApAAIACABQADAAACACQAEAEgBAIIgCAkIATgzIAfAAIgcBLg");
	this.shape_38.setTransform(36.9,-1.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgoAmIAchLIAiAAIgSAxIAkAAIgJAag");
	this.shape_39.setTransform(20.3,-1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgDAmIAIgaIgRAAIgKAaIgjAAIAchLIAhAAIgIAcIARAAIAKgcIAjAAIgcBLg");
	this.shape_40.setTransform(1.4,-1.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgfAmIAchLIAjAAIgcBLg");
	this.shape_41.setTransform(-16.7,-1.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgfAmIAchLIAjAAIgcBLg");
	this.shape_42.setTransform(27.8,-1.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgkAhQgNgHAAgNQgBgSASgPQAPgMASgEQAZgFAYAFIgLAbQgDgHgMAAQgJAAgLAEQgIAFgDAHQgDAKAKAEQAFADAJgBIARgDIgJAXQgJADgRABIgCAAQgSAAgMgHg");
	this.shape_43.setTransform(-8.5,-1.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AARAmIAUg1IglA1IgcAAIAEg2IgUA2IgiAAIAdhLIArAAQAGAAAAAGQACAEgBAFIgBAYIAagnIA1AAIgcBLg");
	this.shape_44.setTransform(-27.2,-1.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FAE22B").s().p("AmdAFIAAgJIM7AAIgEAJg");
	this.shape_45.setTransform(-13.8,5.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1960A6").s().p("An8BVIAAipIP5AAIAACpg");
	this.shape_46.setTransform(-4.3,-0.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AoBBbIAAi1IQDAAIAAC1g");
	this.shape_47.setTransform(-4.3,-0.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AsPFWID5qsIUmAAIAAKtg");
	this.shape_48.setTransform(-14.7,-3.3);

	this.addChild(this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-93.1,-37.6,156.9,68.7);


(lib.Conoce_btn = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE32B").s().p("AE/AeQgPgDgEgKQgEgJAFgLQALgeAgAAQAUAAAIALQAGAJgGAOQgLAdgeABQgEAJANAAIAIAAIgDAKIgJABQgYAAAHgVgAE9gBQgIAUAWAAQAJAAAGgEQAGgFAEgKQAIgVgWAAQgSAAgHAUgAF/AXQgGgHAEgNIANgiIARAAIgNAjQgGAOARAAQAHAAAEgCQAFgDADgJIANgjIARAAIgNAjQgGAPgJAGQgIAGgQAAQgRAAgGgIgACEAZIAEgLQAMAFANAAQAOAAADgHQACgGgJgCIgKgCQgTgCAFgRQAFgQAaAAQAOAAAOAFIgEAMQgLgFgNAAQgNAAgCAGQgCAFAIACIAKACQAVAEgHAQQgGARgZAAQgSAAgMgGgAi/AVQgHgKAGgPQAKgdAiAAQAKAAANAEIgEANQgIgEgLAAQgWAAgHATQgHATAZAAQAMAAAHgCIgEAMQgIADgMAAQgTAAgIgKgAkRAUQgGgJAGgOQALgeAfAAQAVAAAHALQAGAJgFAOQgLAeggAAQgVAAgHgLgAkBgBQgJAUAWAAQAKAAAGgEQAGgFAEgKQAIgVgWAAQgSAAgHAUgAm2AUQgGgJAGgOQALgeAfAAQAVAAAHALQAGAJgFAOQgLAeggAAQgVAAgHgLgAmcgRQgGAFgEALQgIAUAVAAQAKAAAGgEQAGgFAEgKQAIgVgWAAQgKAAgFAEgAn3AVQgIgKAGgPQALgdAhAAQAKAAAOAEIgFANQgIgEgLAAQgWAAgGATQgHATAYAAQAMAAAHgCIgEAMQgHADgNAAQgTAAgHgKgAHCAdIAWg8IARAAIgXA8gAESAdIgBgNIgeAAIgJANIgRAAIApg2QAEgGAGAAIATAAIACA8gAD7AEIAWAAIgBgcgABvAdIAAgNIgeAAIgJANIgSAAIAqg2QAEgGAGAAIASAAIADA8gABZAEIAWAAIgBgcgAAcAdIASgwIgmAwIgOAAIgCgwIgTAwIgPAAIAXg8IARAAQAFAAAAAIIADAjIAjgrIAaAAIgWA8gAiEAdIAWg8IA3AAIgEALIgmAAIgFAOIAiAAIgEAKIgiAAIgGAOIAnAAIgEALgAlBAdIgMgwIgSAwIgPAAIAWg8IARAAQAHAAAAAGIALAqIATgwIAPAAIgXA8gAHagkIARgOIARAAIgTAOgABqgkIARgOIARAAIgTAOg");
	this.shape.setTransform(2.2,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("ArpB0IAAjnIXTAAIAADngAFDAAQgFAOAEAJQAEAKAPACQgHAWAYgBIAJAAIADgLIgIABQgNAAAEgKQAeAAALgdQAGgOgGgKQgIgKgUAAQggAAgLAbgAGTAJQgEAMAGAIQAGAHARAAQAQAAAIgFQAJgGAGgQIANgjIgRAAIgNAjQgDAKgFACQgEADgHAAQgRAAAGgPIANgjIgRAAgACaAfQAMAFASAAQAZAAAGgQQAHgSgVgCIgKgCQgIgCACgFQACgHANAAQANAAALAGIAEgMQgOgFgOAAQgaAAgFAQQgFAPATAEIAKABQAJACgCAHQgDAHgOAAQgNAAgMgGgAiqAAQgGAQAHALQAIAKATgBQAMABAIgDIAEgNQgHADgMAAQgZAAAHgWQAHgQAWgBQALAAAIAFIAEgNQgNgEgKAAQgiAAgKAbgAj7AAQgGARAGAJQAHAKAVAAQAgABALgeQAFgOgGgKQgHgKgVAAQgfAAgLAbgAmgAAQgGARAGAJQAHAKAVAAQAgABALgeQAFgOgGgKQgHgKgVAAQgfAAgLAbgAnjAAQgGAQAIALQAHAKATgBQANABAHgDIAEgNQgHADgMAAQgYAAAHgWQAGgQAWgBQALAAAIAFIAFgNQgOgEgKAAQghAAgLAbgAHYAjIAQAAIAXg9IgRAAgAEnAWIABANIAPAAIgCg9IgTAAQgGAAgEAHIgpA2IARAAIAJgNgACFAWIAAANIAQAAIgDg9IgSAAQgGAAgEAHIgqA2IASAAIAJgNgAAyAjIARAAIAWg9IgaAAIgjAsIgDgjQAAgJgHAAIgRAAIgVA9IAPAAIARgxIACAxIAQAAIAmgwgAhuAjIA3AAIAEgLIgnAAIAGgPIAiAAIAEgJIgiAAIAFgPIAmAAIAEgLIg3AAgAkrAjIAXAAIAXg9IgPAAIgTAxIgLgqQAAgGgHgBIgRAAIgWA9IAPAAIASgwgAHwgeIAPAAIATgOIgRAAgACAgeIAPAAIATgOIgRAAgAFTACQAHgRASAAQAWAAgIAUQgEALgGAEQgGAFgJAAQgWAAAIgXgAjrACQAHgRASAAQAWAAgIAUQgEALgGAEQgGAFgKAAQgWAAAJgXgAmQACQAEgIAGgFQAFgEAKAAQAWAAgIAUQgEALgGAEQgGAFgKAAQgVAAAIgXgAERAKIAVgcIABAcgABvAKIAVgcIABAcg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.6,-11.6,149.4,23.3);


(lib.Compra = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE333").s().p("AhJAxQgPgWAOgjQANgjATgPQAVgPAjAAQAsAAAQAYQAPAXgOAjQgNAkgUAOQgUAPgjAAQgsAAgQgZgAgGgeQgHAIgIAWQgPAnAaAAQAKAAAHgIQAHgJAIgVQAPgngaAAQgLAAgGAIg");
	this.shape.setTransform(201,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEE333").s().p("AhJAxQgPgWAOgjQANgjATgPQAVgPAjAAQAtAAAPAYQAPAXgOAjQgNAkgUAOQgUAPgjAAQgsAAgQgZgAgGgeQgHAIgIAWQgPAnAaAAQAKAAAHgIQAHgJAIgVQAPgngaAAQgLAAgGAIg");
	this.shape_1.setTransform(184.5,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEE333").s().p("AhJAxQgPgWAOgjQANgkAUgOQAUgPAjAAQAtAAAPAYQAPAXgOAjQgNAkgUAOQgUAPgjAAQgsAAgQgZgAgGgeQgHAIgIAWQgPAnAaAAQAKAAAHgIQAHgJAIgVQAPgngaAAQgLAAgGAIg");
	this.shape_2.setTransform(168.1,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEE333").s().p("AglAbIAfg1IAsAAIgpA1g");
	this.shape_3.setTransform(155,6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEE333").s().p("AhSBIIAIgVQAGgQAMgHIA5gdQAUgLACgJQAHgRgeAAQgUAAgZAHIAMghQAcgHAWAAQApAAAQAOQAPANgJAYQgGAQgPAIQgIAGgcANIgZAPIBEAAIgMAig");
	this.shape_4.setTransform(145.6,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEE333").s().p("AgoBbIAHgSQgegDgYgIIANghQAXAKAeAAIABAAIAKgaIgJgBQgzgGAQgpQAOgnA/AAIACAAIAFgQIARAAIgFARQAZACAVAHIgMAhQgVgJgagBIgIAYIAFABQAbADAJANQAHANgHAVQgJAWgUAJQgTAIgeAAIgGASgAgDAnQAPgCAEgIQAFgLgNgDIgEAAgAgIgfQgEAJAMACIAFABIAHgWQgRACgDAIg");
	this.shape_5.setTransform(131.3,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvAdQgKgNAIgTQAIgVAOgJQAOgIAWgBQAdAAALAOQAJAMgIAUQgHAVgOAJQgOAIgXAAIgCABQgcAAgJgOgAgIgRQgFAFgFALQgIAXAVAAQAIAAAFgEQAHgFAEgMQAJgWgWAAQgHAAgHAEg");
	this.shape_6.setTransform(320.6,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSgTIgZAAIAIgUIBPgBIgIAVIgYAAIgUA7IggABg");
	this.shape_7.setTransform(312.2,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag/ApIAdhQIAiAAQAKAAgBAMIAGAuIAVg7IAcAAIgdBQIgsAAIgFg5IgVA6g");
	this.shape_8.setTransform(300.9,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXgnIBNgBIgHATIgvABIgDAMIApAAIgIARIgnAAIgFANIAtgBIgHATIhMABg");
	this.shape_9.setTransform(290.7,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgxAgQgJgKAGgRIARgtIAgAAIgRAuQgGAPAQAAQAKAAAGgPIARguIAggBIgRAuQgHAUgNAJQgNAHgVABQgYAAgJgKg");
	this.shape_10.setTransform(281.3,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqAdQgLgNAJgVQANglAvAAQARABAQAFIgHAUQgNgFgMAAQgYABgHAUQgIAWAbgBQAPAAAKgDIgIAWQgIACgQABQgdAAgLgOg");
	this.shape_11.setTransform(271.4,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgxAkIAHgTQANAGARAAQAOAAADgGQACgGgHgBIgLgCQgbgFAHgWQAJgXAjABQAVgBAQAHIgGASQgQgFgPgBQgNABAAAFQgCAFAFABIAMADQAeAEgKAYQgEAMgMAGQgKAEgRAAQgZABgQgHg");
	this.shape_12.setTransform(261.9,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXgnIBMgBIgGATIgvABIgCAMIAnAAIgGARIgoAAIgFANIAtgBIgHATIhNABg");
	this.shape_13.setTransform(253.3,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag2ApIAdhQIAmAAQAcgBAKAOQAIAMgHATQgHATgOAJQgOAHgTABgAgPAVIANAAQAIAAAFgFQAGgEAEgMQAIgUgTAAIgKAAg");
	this.shape_14.setTransform(242.9,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag1ApIAehQIBMAAIgGATIgvAAIgCAMIAnAAIgGAQIgoABIgEANIAsAAIgHATg");
	this.shape_15.setTransform(230.5,0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZgnIAmgBQAcAAAKAOQAIALgHATQgMAkgqAAIg0ABgAgPAVIANAAQAIgBAGgEQAGgFADgLQAIgUgTAAIgKAAg");
	this.shape_16.setTransform(220,0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgDgtQAIgQASAAIA5AAIABB7IguAAIAAgWIgyAAIgOAWIgzABgAADAKIAhAAIABgyg");
	this.shape_17.setTransform(105.4,-0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag+A+IAihbIgmAAIALggIB7AAIgMAfIglAAIgfBcg");
	this.shape_18.setTransform(95.8,-0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhMA4IALgdQAUAJAbAAQAWAAAEgKQADgJgLgCIgRgDQgrgIAMgiQANgiA3AAQAhAAAYAJIgKAcQgXgIgXAAQgUAAgCAIQgBAFABACQABACAEABIATAEQAtAHgOAlQgHASgSAJQgQAHgaAAQgmAAgZgJg");
	this.shape_19.setTransform(81.4,-0.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgDgtQAJgQARAAIA5gBIABB8IguAAIAAgWIgxABIgPAVIgzABgAADAKIAhAAIABgxg");
	this.shape_20.setTransform(64.8,-0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Agug9IAuAAIgOAuIAoAAIARgvIAyAAIgtB7IgwABIAPgvIgpAAIgRAvIgwAAg");
	this.shape_21.setTransform(50.5,-0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Agkg9IB2gBIgKAdIhHAAIgFAUIA+AAIgLAbIg9AAIgIATIBFAAIgKAcIh2ABg");
	this.shape_22.setTransform(30.7,-0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgcgeIgmABIALgfIB6gBIgLAfIglAAIgfBcIgyABg");
	this.shape_23.setTransform(18.7,-0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgDgtQAJgQARAAIA5AAIABB7IguAAIAAgWIgxAAIgPAWIgzABgAADAKIAhAAIABgxg");
	this.shape_24.setTransform(1.7,-0.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhQg8IAwgBIAABeIA9heIA0gBIhMBsQgJAQgRAAIg6AAg");
	this.shape_25.setTransform(-8.8,-0.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgkgrIB2AAIgKAdIhHAAIgFARIA+AAIgLAdIg+AAIgHAUIBFgBIgKAdIh2ABgAACg0IAggcIAvAAIgmAcg");
	this.shape_26.setTransform(-25.8,-2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQg9IAvAAIgfBcIA+gBIgLAgIhwAAg");
	this.shape_27.setTransform(-40.7,-0.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQg9IAvAAIggBbIA/AAIgMAfIhvABg");
	this.shape_28.setTransform(-53.5,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhFA+IARguIgdhNIAuAAIARAuIAsguIA4AAIhWBQIgPArg");
	this.shape_29.setTransform(-69.3,0.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#414042").s().p("AhJAxQgPgWAOgjQANgjATgPQAVgPAjAAQAsAAAQAYQAPAXgOAjQgNAkgUAOQgUAPgjAAQgsAAgQgZgAgGgeQgHAIgIAWQgPAnAaAAQAKAAAHgJQAHgHAIgWQAPgngaAAQgLAAgGAIg");
	this.shape_30.setTransform(202,0.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#414042").s().p("AhJAxQgPgWAOgjQANgjATgPQAVgPAjAAQAtAAAPAYQAPAXgOAjQgNAkgUAOQgUAPgjAAQgsAAgQgZgAgGgeQgHAIgIAWQgPAnAaAAQAKAAAHgJQAHgHAIgWQAPgngaAAQgLAAgGAIg");
	this.shape_31.setTransform(185.5,0.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#414042").s().p("AhJAxQgPgWAOgjQANgkAUgOQAUgPAjAAQAtAAAPAYQAPAXgOAjQgNAkgUAOQgUAPgjAAQgsAAgQgZgAgGgeQgHAIgIAWQgPAnAaAAQAKAAAHgJQAHgHAIgWQAPgngaAAQgLAAgGAIg");
	this.shape_32.setTransform(169.1,0.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#414042").s().p("AglAbIAfg1IAsAAIgpA1g");
	this.shape_33.setTransform(156,7.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#414042").s().p("AhSBIIAIgVQAGgQAMgHIA5gdQAUgLACgJQAHgRgeAAQgUAAgZAHIAMghQAcgHAWAAQApAAAQAOQAPANgJAYQgGAQgPAIQgIAGgcANIgZAPIBEAAIgMAig");
	this.shape_34.setTransform(146.6,0.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#414042").s().p("AgnBbIAGgSQgegDgYgIIANghQAXAKAeAAIABAAIAKgaIgJgBQgygGAPgpQAOgnA/AAIACAAIAGgQIAQAAIgFARQAZACAVAIIgMAgQgUgJgbgBIgIAYIAFABQAbADAIANQAJANgJAVQgIAVgUAJQgSAJgfAAIgGASgAgDAnQAPgBAEgJQAFgLgOgCIgDgBgAgIggQgEAKAMACIAFABIAHgWQgRACgDAHg");
	this.shape_35.setTransform(132.3,1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#414042").s().p("AgwAdQgJgNAIgTQAIgVAOgJQANgIAXgBQAdAAALAOQAJAMgIAUQgHAVgOAJQgOAIgXAAIgCABQgcAAgKgOgAgIgRQgFAFgFALQgIAXAVAAQAIAAAFgEQAHgFAEgMQAIgWgVAAQgHAAgHAEg");
	this.shape_36.setTransform(321.6,1.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#414042").s().p("AgSgTIgZAAIAIgUIBPgBIgIAVIgYAAIgUA7IggABg");
	this.shape_37.setTransform(313.2,1.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#414042").s().p("Ag/ApIAdhQIAiAAQAKAAgBAMIAGAuIAVg7IAcAAIgdBQIgsAAIgFg5IgVA6g");
	this.shape_38.setTransform(301.9,1.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#414042").s().p("AgYgnIBOgBIgIATIguABIgDAMIAoAAIgHARIgnAAIgFANIAtgBIgHATIhMABg");
	this.shape_39.setTransform(291.7,1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#414042").s().p("AgxAgQgJgKAGgRIARgtIAgAAIgRAuQgGAPAQAAQAKAAAGgPIARguIAggBIgRAuQgHAUgNAJQgNAHgVABQgYAAgJgKg");
	this.shape_40.setTransform(282.3,1.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#414042").s().p("AgqAdQgLgNAJgVQANglAvAAQARABAQAFIgHAUQgNgFgMAAQgYABgHAUQgIAWAbgBQAPAAAKgDIgIAWQgIACgQABQgdAAgLgOg");
	this.shape_41.setTransform(272.4,1.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#414042").s().p("AgxAkIAHgTQANAGARAAQAPAAACgGQACgGgHgBIgLgCQgbgFAHgWQAJgXAjAAQAVAAAQAHIgGASQgQgFgPgBQgNABAAAFQgCAFAEABIANADQAeAEgKAYQgEAMgMAGQgKAEgRABQgZAAgQgHg");
	this.shape_42.setTransform(262.9,1.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#414042").s().p("AgXgnIBMgBIgGATIgvABIgCAMIAnAAIgGARIgoAAIgEANIAsgBIgHATIhNABg");
	this.shape_43.setTransform(254.3,1.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#414042").s().p("Ag2ApIAdhQIAmAAQAcgBAKAOQAIAMgHATQgHATgOAJQgOAHgTABgAgPAVIANAAQAIAAAFgFQAGgEAEgMQAIgUgTAAIgKAAg");
	this.shape_44.setTransform(243.9,1.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#414042").s().p("Ag1ApIAehQIBMAAIgGASIgvAAIgCANIAoAAIgHAQIgoABIgEANIAsAAIgHATg");
	this.shape_45.setTransform(231.5,1.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#414042").s().p("AgZgnIAmgBQAcAAAKAOQAIALgHATQgMAkgqAAIg0ABgAgPAVIANAAQAIgBAGgEQAGgFADgLQAIgUgTAAIgKAAg");
	this.shape_46.setTransform(221,1.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#414042").s().p("AgDgtQAIgQASAAIA5AAIABB7IguAAIAAgWIgyAAIgOAWIgzABgAADAKIAhAAIABgyg");
	this.shape_47.setTransform(106.4,0.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#414042").s().p("Ag+A+IAihbIgmAAIALggIB7AAIgLAfIgmAAIgfBcg");
	this.shape_48.setTransform(96.8,0.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#414042").s().p("AhMA4IALgdQAUAJAbAAQANAAAFgCQAGgCACgGQADgJgLgCIgRgDQgrgIAMgiQANgiA3AAQAhAAAYAJIgKAcQgXgIgXAAQgUAAgCAIQgBAFABACQABACAEABIATAEQAtAHgOAlQgHASgSAJQgQAHgaAAQgmAAgZgJg");
	this.shape_49.setTransform(82.4,0.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#414042").s().p("AgDgtQAJgQARAAIA5gBIABB7IguABIAAgWIgxABIgPAVIgzAAgAADAKIAhAAIABgxg");
	this.shape_50.setTransform(65.8,0.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#414042").s().p("Agvg9IAvAAIgOAuIAoAAIARgvIAyAAIgtB7IgwABIAPgvIgpAAIgRAvIgxAAg");
	this.shape_51.setTransform(51.5,0.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#414042").s().p("Agkg9IB2gBIgKAeIhIAAIgEATIA+AAIgLAbIg+AAIgHATIBFAAIgKAcIh2ABg");
	this.shape_52.setTransform(31.7,0.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#414042").s().p("AgcgeIgnABIAMgfIB6gBIgLAfIglAAIggBcIgwABg");
	this.shape_53.setTransform(19.7,0.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#414042").s().p("AgDgtQAJgQARAAIA5gBIABB8IguAAIAAgWIgxABIgPAVIgzABgAADAKIAhAAIABgxg");
	this.shape_54.setTransform(2.7,0.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#414042").s().p("AhQg8IAwgBIAABeIA9heIA0AAIhMBrQgJAQgRAAIg6ABg");
	this.shape_55.setTransform(-7.8,0.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#414042").s().p("AgkgrIB2AAIgKAdIhHAAIgFARIA+AAIgLAdIg+AAIgHAUIBFgBIgKAdIh2ABgAACg0IAggcIAvAAIgmAcg");
	this.shape_56.setTransform(-24.8,-1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#414042").s().p("AgQg9IAvAAIgfBcIA+gBIgLAgIhwAAg");
	this.shape_57.setTransform(-39.7,0.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#414042").s().p("AgQg9IAvAAIgfBbIA+AAIgMAfIhvABg");
	this.shape_58.setTransform(-52.5,1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#414042").s().p("AhFA+IARguIgdhNIAuAAIARAuIAsguIA4AAIhWBQIgPArg");
	this.shape_59.setTransform(-68.3,1.1);

	this.addChild(this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.5,-10.1,404.5,20.2);


(lib.CAM_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Camioneta120();
	this.instance.setTransform(-232,-200.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-232,-200.5,464,401);


// stage content:
(lib._468x50_op = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_162 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(162).call(this.frame_162).wait(9));

	// Logo
	this.instance = new lib.Logo1_mc();
	this.instance.setTransform(575.6,27.1,0.804,0.804);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({_off:false},0).wait(1).to({regX:-14.7,regY:-3.3,scaleX:0.81,scaleY:0.81,x:544.1,y:24.4},0).wait(1).to({x:524.5},0).wait(1).to({x:504.8},0).wait(1).to({x:485.2},0).wait(1).to({x:465.5},0).wait(1).to({x:445.9},0).wait(1).to({x:426.2},0).wait(1).to({x:406.6},0).wait(17).to({_off:true},1).wait(6));

	// BTN
	this.instance_1 = new lib.Conoce_btn();
	this.instance_1.setTransform(-113.2,25.8);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(131).to({_off:false},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-79.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-45},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-10.9,y:25.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:23.2},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:57.3},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:91.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:125.5,y:25.6},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:159.6},0).wait(26).to({_off:true},1).wait(5));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoHG1IAAtpMAvsAAAIAANpg");
	mask.setTransform(253.4,30.8);

	// Texto_4
	this.instance_2 = new lib.Compra();
	this.instance_2.setTransform(-399.4,24.7,1.136,1.136);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).wait(1).to({regX:124.7,scaleX:1.13,scaleY:1.13,x:-208.6,y:24.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:-159.4},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-110.3,y:24.9},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-61.2},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-12,y:25},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:37.2,y:25.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:86.3},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:135.4,y:25.2},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:184.5},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:233.7,y:25.3},0).wait(39).to({_off:true},1).wait(42));

	// Texto_1
	this.instance_3 = new lib.obten_mc();
	this.instance_3.setTransform(-155.9,17);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(33).to({_off:false},0).wait(1).to({regY:10,x:-125.1,y:27},0).wait(1).to({x:-94.3},0).wait(1).to({x:-63.5},0).wait(1).to({x:-32.7},0).wait(1).to({x:-1.9},0).wait(1).to({x:28.8},0).wait(1).to({x:59.6},0).wait(1).to({x:90.5},0).wait(1).to({x:121.3},0).wait(1).to({x:152.1},0).wait(1).to({x:182.9},0).wait(32).to({_off:true},1).wait(94));

	// camioneta
	this.instance_4 = new lib.CAM_mc();
	this.instance_4.setTransform(-239.9,183.2,1.083,1.083);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-208.3,y:166.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-176.8,y:149.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-145.2,y:133.1},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-113.7,y:116.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-82.1,y:99.6},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-50.6,y:82.9},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:-19,y:66.2},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:12.6,y:49.5},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:44.1,y:32.8},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:75.7,y:16.1},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:107.2,y:-0.6},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:138.8,y:-17.3},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:170.3,y:-34},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:201.9,y:-50.7},0).wait(142));

	// Layer 14
	this.instance_5 = new lib.Symbol3();
	this.instance_5.setTransform(390,-73.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(2).to({y:-64.8},0).wait(1).to({y:-53.6},0).wait(1).to({y:-42.4},0).wait(1).to({y:-31.2},0).wait(1).to({y:-19.9},0).wait(1).to({y:-8.7},0).wait(1).to({y:2.5},0).wait(1).to({y:13.7},0).wait(1).to({y:25},0).wait(151).to({_off:true},1).wait(5));

	// Layer 13
	this.instance_6 = new lib.Symbol2();
	this.instance_6.setTransform(234,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).wait(2).to({y:110.8},0).wait(1).to({y:96.5},0).wait(1).to({y:82.2},0).wait(1).to({y:67.9},0).wait(1).to({y:53.6},0).wait(1).to({y:39.3},0).wait(1).to({y:25},0).wait(155).to({_off:true},1).wait(5));

	// Layer 12
	this.instance_7 = new lib.Symbol1();
	this.instance_7.setTransform(78,-73.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({y:-57.3},0).wait(1).to({y:-40.9},0).wait(1).to({y:-24.4},0).wait(1).to({y:-7.9},0).wait(1).to({y:8.5},0).wait(1).to({y:25},0).wait(159).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(234,-73.8,156,50);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;