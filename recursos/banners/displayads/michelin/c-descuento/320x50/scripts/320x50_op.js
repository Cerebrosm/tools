(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/as.jpg", id:"as"},
		{src:"images/df.jpg", id:"df"},
		{src:"images/sd.jpg", id:"sd"}
	]
};



// symbols:



(lib.as = function() {
	this.initialize(img.as);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,50);


(lib.df = function() {
	this.initialize(img.df);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,50);


(lib.sd = function() {
	this.initialize(img.sd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,50);


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE32B").s().p("AE/AbQgGgJAFgOQAFgMAIgGQAKgGAOAAQASAAAHAJQAGAJgFAMQgKAagcAAQgTAAgFgJgAFMAGQgHATATAAQAJAAAEgDQAGgEADgKQAIgRgUAAQgQAAgGAPgADmAbQgGgJAFgPQAKgXAdAAQAKAAALAEIgEAKQgHgDgKAAQgTAAgGAPQgGATAVAAQAKAAAHgCIgDALQgHACgLAAQgRAAgHgJgAg6AbQgFgJAFgOQAJgYAcAAQASAAAFAJQAGAJgFAMQgJAagbAAQgTAAgGgJgAgtAGQgGATATAAQAQAAAGgRQAHgRgTAAQgQAAgHAPgAkyAfIAEgKQAIAEANAAQAOAAACgFQACgGgIgCIgJgCQgSgDAGgNQAFgOAWAAQANAAALAFIgDAJQgKgEgLAAQgLAAgDAFQgBAFAGAAIAKACQASADgGAQQgEAPgYAAQgPAAgLgFgAGlAiIgLgqIgQAqIgNAAIAUg1IAPAAQAGAAAAAGIALAlIAPgrIAOAAIgUA1gAEbAiIATg1IAPAAIgUA1gADNAiIgBgLIgaAAIgJALIgOAAIAkgvQAEgGAFAAIARAAIACA1gAC5ANIATAAIgBgZgACDAiIARgqIgjAqIgNAAIgDgqIgQAqIgNAAIAUg1IAPAAQAGAAABAIIACAeIAfgmIAXAAIgUA1gAArAiIgGgRIgNAAIgGARIgPAAIAUg1IAZAAQAcAAgHAUQgFAMgOACIAIATgAAcAHIAKAAQAIAAADgCQAEgBACgEQACgEgCgCQgCgDgJAAIgKAAgAh5AiIATg1IAwAAIgDAKIgiAAIgFAOIAeAAIgDAKIgfAAIgHATgAidAiIgKgqIgRAqIgMAAIATg1IAPAAQAGAAAAAGIAKAlIAQgrIANAAIgUA1gAjiAiIAVg1IAOAAIgUA1gAlEAiIAAgLIgbAAIgIALIgPAAIAlgvQADgGAGAAIAQAAIACA1gAlYANIATAAIAAgZgAmNAiIAQgqIgiAqIgOAAIgCgqIgQAqIgOAAIAUg1IAPAAQAHAAAAAIIACAeIAfgmIAXAAIgTA1gAFhgXIAOgMIAPAAIgRAMgAlIgXIAPgMIAOAAIgRAMg");
	this.shape.setTransform(-1.3,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AoZBJIAAiRIQzAAIAACRgAE/gTQgJAGgFANQgFANAGAIQAGAJASAAQAcAAAKgZQAFgNgGgIQgGgJgSAAQgPAAgJAGgADZAAQgGANAHAIQAGAJARAAQALAAAHgCIAEgLQgIACgJAAQgWABAGgUQAGgOATgBQAKABAHADIAEgLQgKgDgLAAQgdAAgJAZgAhHAAQgFANAFAIQAHAJASAAQAcAAAKgZQAFgNgGgIQgGgJgSAAQgdAAgJAZgAk/AaQALAFAQgBQAXAAAEgOQAHgQgTgBIgJgDQgHAAACgGQACgFALAAQALAAAKAEIADgJQgKgFgOAAQgWAAgFAOQgFANARADIAJACQAIABgCAHQgCAFgNAAQgNAAgJgEgAGYAdIAVAAIAUg1IgNAAIgQAqIgLgkQAAgGgGAAIgOAAIgUA1IANAAIAQgqgAEOAdIAOAAIAUg1IgPAAgADAARIAAAMIAOAAIgCg1IgRAAQgFAAgEAGIgkAvIAPAAIAIgMgAB3AdIAOAAIAUg1IgXAAIgfAmIgCgfQAAgHgHAAIgPAAIgUA1IANAAIARgrIACArIAOAAIAigqgAAYALIAHASIAPAAIgJgUQAPgBAEgKQAIgWgdAAIgZAAIgSA1IANAAIAGgSgAiGAdIAOAAIAHgUIAfAAIADgJIgeAAIAFgOIAiAAIAEgKIgwAAgAiqAdIAVAAIAUg1IgNAAIgQAqIgLgkQAAgGgGAAIgPAAIgTA1IANAAIAQgqgAjuAdIAPAAIATg1IgOAAgAlRARIAAAMIAOAAIgCg1IgQAAQgGAAgDAGIglAvIAPAAIAIgMgAmaAdIAPAAIAUg1IgYAAIgeAmIgDgfQAAgHgGAAIgPAAIgUA1IANAAIAQgrIACArIAOAAIAigqgAFUgcIANAAIARgMIgPAAgAlVgcIANAAIARgMIgPAAgAE/AAQAGgOAQgBQAUABgHAQQgEALgFAEQgFADgJAAQgTAAAHgUgAg5AAQAGgOAQgBQATABgHAQQgGASgQAAQgTAAAHgUgACsAIIATgZIAAAZgAlkAIIASgZIABAZgAAPABIAGgPIAKAAQAJAAACADQACABgCAGQgCAEgEAAQgDACgIgBg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.8,-7.3,107.7,14.7);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCABQAAgEACAAIABAAQACACAAABIgBAEIAAgCQAAgDgCABQgCAAABADIAAABg");
	this.shape.setTransform(-23.6,-10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgBAGQgBgCgCgEQAAgFAEgBIACABQABACACADQgBAHgEAAg");
	this.shape_1.setTransform(-23.6,-10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AACACQAAgDgCABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgDACAAIABAAQAAABAAAAQABABAAAAQAAABAAAAQABAAAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAg");
	this.shape_2.setTransform(-22.5,-10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAAAFQgDgBAAgEQgBgFAEgBIABABQADADAAACQABAHgFAAg");
	this.shape_3.setTransform(-22.5,-10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAAACIgCgCIgEAAIgBAAIABgBIAAgBIABABIAFgBQACAAAEABIABgBIABACIgBAAIgFADIgBAAIgBgBgAgCAAIACAAIACABIADgBIgEAAIgDAAg");
	this.shape_4.setTransform(-23.1,-8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgDAAIAAgBIAHABIgBACg");
	this.shape_5.setTransform(-28.3,9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgDAAIAAgBIAHABIgBACIgGgCg");
	this.shape_6.setTransform(-28.4,9.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AAAAAIgBAAIABAAIACAAIAAABg");
	this.shape_7.setTransform(-31,-9.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAZQgCgJgFgEQAJgDAGADQABAAAAAAQABABAAAAQAAAAAAgBQABAAAAAAIgBgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAAAAQgHgEABgFQAAgHAGgBQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAIgDAAQAAgGAEgFQAEgDAEAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAIgBAAQABgCAEAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAAAIAAABQAMACgBAKIAAACQAFAEgBAFQAAAGgFAAQACAFgDABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQABgBAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAUABgBAHQgBAFgKAEQgKADgNAAQgNAAgJgEg");
	this.shape_8.setTransform(-23,-8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAAIADgIQADACABAGQABAFgFAEQAAgHgDgCg");
	this.shape_9.setTransform(-18.5,-4.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgCgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQADACACAEQAEADgEAGQgCgIgCgDg");
	this.shape_10.setTransform(-19,-6.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKAKQgDgEADgEIAHgHIAEgKQADADAIAAQgDAIABADIACAJQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQgEACgFAAQgFAAgFgEIAAAAQAEAHAIgBIAAABIgEAAQgFAAgFgGg");
	this.shape_11.setTransform(-28.8,10);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEAVQgFgFAFgFIACADQACADACgDIAAgBQgCAAgBgDIgCgDQgIgGgBgCQgCgDABgJIAAgBQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAGACADIACgBIgCgIIgCgCQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIgCgEQAAgBABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAGAIQABAEACAAIAAAAIgHgOIgCgBQAAgBABAAQAAAAAAAAQABAAABAAQAAABABABQADADAFAKQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgGgKQADAAADAJQAAAFAAABQAAADAAACIAAAAIABgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQgDgFACgFQABAAAAAAQAAgBABAAQAAAAABABQABAAAAAAQgCAGACADIACAGIgBADIgBAEQABADgBACIABAAIACgCQAAgFABgBQAFACAAAHQgBAGgIAEIgGABQgCAAgDgDg");
	this.shape_12.setTransform(-30.6,-9.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAJQADgFAAgEQAQAAAKgJQABAKgLAGQgFADgGAAIgIgBg");
	this.shape_13.setTransform(-21.3,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAFIABgHIABAAQAIACAGgBQAJgCAGgGQABAMgNAFQgEACgCAAQgHAAgGgFg");
	this.shape_14.setTransform(-21.7,2.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAFQgFgEAAgDIACgFQAMAJAPgIQACAGgGADQgEAFgHAAQgEAAgFgDg");
	this.shape_15.setTransform(-22.2,4.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOADQgGgGAEgIQADALANAAQAKABAHgHQADAGgFAEQgFAIgKAAQgJAAgFgJg");
	this.shape_16.setTransform(-22.3,5.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAAIQgGAAgEgFQgEgDABgIQAGAHAIABQAIAAAFgFQAAAOgOAAIAAgBg");
	this.shape_17.setTransform(-22.4,6.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAOQgDgCgCgDIgDgEQgGgFgBgCIABgGIADgFQAFACAGgCIAAACIgFABIABADIAFgBIABADIgEABIABACIAFgBIAJADQAFAEgEAEQgEAEgJgBIgBABQABABAFAAQAGgBADgCIABAAQgBACgHACIgGAAIgCAAg");
	this.shape_18.setTransform(-21.9,9.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgFAOQgIgDgDgKQgEgIAHgHQABAKALAFQAKAFAJgGQABAFgGAGQgEAEgHAAQgCAAgFgBg");
	this.shape_19.setTransform(-27,5.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEAKQgHgCgCgIQgDgGAFgEQAIAOASgDQgBAFgFADQgDACgEAAIgGgBg");
	this.shape_20.setTransform(-27.7,7.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFAJQgFgCgDgGQgDgFAEgGQALANAQgDQABAEgGAEQgEADgEAAQgCAAgFgCg");
	this.shape_21.setTransform(-26.5,4.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgQAGQgIgIAHgMQAFALAMADQALADAKgEQgCAPgTABIAAAAQgJAAgHgJg");
	this.shape_22.setTransform(-25.7,2.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgDAOQgLgDgFgJQgFgIAGgIQANAQAcgCQAAAIgIAEQgGADgGAAIgGgBg");
	this.shape_23.setTransform(-25.2,1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXAIQgQgIADgNQANANAXAAQAYABAOgJQABAIgHAEQgJAJgTAAIgCABQgNAAgMgGg");
	this.shape_24.setTransform(-23.4,-0.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNANQALAAAEgJQAGgIgIgOQAPAEgBAQQgBANgLADIgDABQgHAAgFgGg");
	this.shape_25.setTransform(-27.3,-5.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAPQgIgDgDgHQAKAEAGgHQAJgFgCgLQAEABADAIQADAIgGAHQgFAFgHAAIgEAAg");
	this.shape_26.setTransform(-28.8,-6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCALQgJgCgDgJQAHAEAHgEQAJgDABgIIACADQAGAIgJAIQgEAEgFAAIgCgBg");
	this.shape_27.setTransform(-29.7,-6.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgFAPQgSAAgJgIQAEgHAAgIQAPAGASgDQASgDAGgGQAKAOgNAHQgMAIgRAAIgCAAg");
	this.shape_28.setTransform(-22.5,-4.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgaAIQgNgGgBgHQAHgBAFgFQAOALAWgCQAWgCAKgKQAEAJgHAIQgKAMgZAAQgPAAgNgHg");
	this.shape_29.setTransform(-23.2,-2.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AACAFIgDgCIgCgDIgCAAIgDAAIAAgDQAFgCADgDIABADIADADQAEACABADIgHgGQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAABQgBABAFADIADAEQABAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgBABQgCAAgDgEg");
	this.shape_30.setTransform(-16.8,0.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgBACQgCgCADgBIACABIgCABIgBABIAAAAg");
	this.shape_31.setTransform(-17,1.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIABABIgBACIAAAAIAAgCg");
	this.shape_32.setTransform(-17.3,1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIABAAIgBABIAAgBg");
	this.shape_33.setTransform(-17.7,0.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgGAIQgFgDABgFQALAAAEgJQAHADgBAGQgBAGgGACIgEACQgDAAgDgCg");
	this.shape_34.setTransform(-18,-1.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgGAEQAFgEAAgEQABgBADgEQAHAGgFAFQgEAHgGABg");
	this.shape_35.setTransform(-18.5,-2.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AgvB5QgIAAgGgIQgDgEAAgDQAAgCADgEQAKgOACgFQgHgGABgIQAAgGAFgEQgCgHACgFQADgIAFgCIACgEQgGgNAJgJQgDgJAHgHQgDgHACgIIgDgHQgJgBgGgIQgOgEgCgMQgIgFABgLQgCgDABgEQABgEACgCQgHgFgBgFQgCgEAAgKQgCgFAAgBIADgDQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAQADgBACACQAFgCAGAKQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQADgBACADQADABgCAEIAAADIABAEIABAHQAGADABAFIAFAEIAEACQAGAAAFACQAGgCAHAAQgDgEAAgGQAAgFADgEQAAgFADgFQADgGAFgCQAAgEAGAAQAHAAABAEQAMAEAAALQAEAEAAAFQABAGgDAFQAJABAEADQAHABAFAFQAGAGgBAIQAEAEABAHQAAAFgBADQAFAGgBAGQAGACACAFQACAGgDAGIADADIAFACQAHAIgDAEQABAEgEACQgFACgCgDIgFADQAAAAgBAAQgBABAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgCgDQgEgDABgFIAAgCQgIAAgEgEQACAHgFAHQADAKgJAJQACAFgCAEQAGAJgIALQAAAEgCAFQgCAHgHACQACAHACABIAFAEQAIAEAAAHQAAAAABAAQAAABgBAAQAAABAAABQAAAAgBABQgCAFgIACQgIABgFgBQgDgBgCgEIgEgGQgFgGgBgCQgCgHAFgJQgFgDAAgFQgDgHADgGIgEgIIgCAEQADANgMAHQgBAMgNACQgDAJABACIACAOQgCAJgNAAIgDAAg");
	this.shape_36.setTransform(-24,-0.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgnAdIAWg5IA5AAIgFAPIghAAIgCAHIAeAAIgFANIgdAAIgCAGIAfAAIgGAQg");
	this.shape_37.setTransform(20.5,1.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgLAdIACgnIgPAnIgYAAIAVg5IAgAAIACABIADABQACADAAAGIgBAbIAPgmIAXAAIgVA5g");
	this.shape_38.setTransform(39.7,1.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgeAdIAWg5IAZAAIgOAlIAcAAIgHAUg");
	this.shape_39.setTransform(27,1.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgCAdIAFgUIgMAAIgIAUIgbAAIAWg5IAZAAIgGAVIANAAIAIgVIAbAAIgWA5g");
	this.shape_40.setTransform(12.4,1.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgYAdIAWg5IAbAAIgWA5g");
	this.shape_41.setTransform(-1.5,1.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgYAdIAWg5IAbAAIgWA5g");
	this.shape_42.setTransform(32.8,1.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgbAZQgKgFgBgKQAAgOAOgLQALgJAOgEQAUgDASAEIgJAVQgDgGgJAAQgJAAgGADQgFAEgDAFQgCAHAHAEQAEACAUgDIgHASIgUACIgCAAQgNAAgJgFg");
	this.shape_43.setTransform(4.8,1.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AANAdIAPgoIgcAoIgVAAIADgoIgQAoIgaAAIAXg5IAgAAQAGAAAAALIgBATIAUgeIApAAIgWA5g");
	this.shape_44.setTransform(-9.6,1.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FAE22B").s().p("Ak+AEIAAgHIJ9AAIgDAHg");
	this.shape_45.setTransform(0.8,6.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1960A6").s().p("AmGBCIAAiDIMOAAIAACDg");
	this.shape_46.setTransform(8.1,2.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AmLBFIAAiJIMWAAIAACJg");
	this.shape_47.setTransform(8.1,2.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("ApaEHIDAoNIP1AAIAAIOg");
	this.shape_48.setTransform(0,-0.1);

	this.addChild(this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.3,-26.5,120.7,52.8);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5AkQgLgQAKgZQAJgZARgLQAQgLAbAAQAjAAAMARQALAQgKAZQgJAZgRAMQgQAKgbAAQgjAAgMgRgAgJgVQgIAGgEAOQgLAdAaAAQAJAAAHgFQAHgHAFgOQALgcgaAAQgJAAgHAFg");
	this.shape.setTransform(139.1,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwAyIAbhKIgfAAIAJgZIBfAAIgJAZIgcAAIgZBKg");
	this.shape_1.setTransform(129.1,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAyIgGhIIgaBIIghAAIAjhjIApAAQALAAAAAPIAHA6IAahJIAhAAIgjBjg");
	this.shape_2.setTransform(115.8,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/AyIAjhjIBcAAIgIAXIg4AAIgDAQIAwAAIgJAVIgvAAIgGAQIA2AAIgJAXg");
	this.shape_3.setTransform(103.6,10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7AnQgKgMAHgVIAUg4IAmAAIgUA5QgHATASAAQAIAAAFgEQADgEAEgLIAVg5IAmAAIgUA4QgJAZgQALQgOAKgaAAQgcAAgMgNg");
	this.shape_4.setTransform(92.4,10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzAkQgMgQAKgbQAQgtA4AAQAVAAASAHIgIAaQgOgHgQAAQgcAAgJAaQgJAbAfAAQASAAAMgEIgJAbQgMADgSAAQgiAAgNgRg");
	this.shape_5.setTransform(80.7,10.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7AtIAJgXQAPAHAVAAQALAAADgCQAEgBACgEQADgIgJgCIgNgDQghgFAKgcQAKgcAqAAQAYAAAUAIIgIAXQgPgHgUAAQgRAAAAAHQgCAGAFACIAPADQAjAFgLAeQgFAQgOAGQgNAGgUAAQgdAAgUgIg");
	this.shape_6.setTransform(69.4,10.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag/AyIAkhjIBbAAIgJAXIg3AAIgDAQIAwAAIgJAVIgvAAIgGAQIA1AAIgIAXg");
	this.shape_7.setTransform(59.3,10.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhBAyIAjhjIAtAAQAiAAALAQQALAPgJAYQgQAsgxAAgAgSAaIAPAAQAKAAAGgGQAHgGAFgOQAJgZgWAAIgMAAg");
	this.shape_8.setTransform(46.9,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag/AyIAkhjIBbAAIgIAXIg3AAIgEAQIAwAAIgIAVIgwAAIgFAQIA1AAIgIAXg");
	this.shape_9.setTransform(32.1,10.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhBAyIAjhjIAtAAQAiAAALAQQALAPgJAYQgJAYgRAKQgQAKgYAAgAgSAaIAPAAQAKAAAGgGQAHgGAFgOQAJgZgWAAIgMAAg");
	this.shape_10.setTransform(19.8,10.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEE433").s().p("AhDAvQgNgVAMgiQANghARgOQATgPAfAAQApAAAPAXQANAWgMAiQgMAhgSAOQgTAPgfAAQgpAAgPgYgAgGgcQgGAHgHAVQgOAlAYAAQAJAAAHgHQAGgIAIgVQANglgYAAQgKAAgGAIg");
	this.shape_11.setTransform(90.7,-7.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEE433").s().p("AhDAvQgOgVANgiQAMghASgOQATgPAfAAQApAAAPAXQANAWgMAiQgMAhgSAOQgTAPgfAAQgpAAgPgYgAgGgcQgGAHgHAVQgOAlAYAAQAJAAAHgHQAGgIAHgVQAOglgYAAQgKAAgGAIg");
	this.shape_12.setTransform(75.7,-7.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEE433").s().p("AhDAvQgOgVANgiQAMghASgOQATgPAgAAQApAAAOAXQANAWgMAiQgMAhgSAOQgTAPgfAAQgpAAgPgYgAgGgcQgGAHgHAVQgOAlAYAAQAJAAAGgHQAHgIAIgVQANglgYAAQgKAAgGAIg");
	this.shape_13.setTransform(60.6,-7.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEE433").s().p("AgiAaIAdgzIAoAAIglAzg");
	this.shape_14.setTransform(48.7,-1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEE433").s().p("AhLBFIAHgUQAGgQALgGIA0gcQASgKADgJQAFgQgaAAQgTAAgXAGIALggQAZgGAVAAQAlAAAPANQANANgIAXQgFAPgNAIQgIAGgaAMIgXAOIA/AAIgLAhg");
	this.shape_15.setTransform(40,-8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEE433").s().p("AgkBXIAGgRQgcgCgVgJIALgfQAWAKAbAAIAAAAIAJgaIgIgBQgtgGANgnQAOglA5AAIACAAIAEgPIAQAAIgGAQQAYACATAHIgKAfQgWgIgVgBIgIAXIAFAAQAYADAIANQAHAMgHAVQgIAUgSAJQgRAIgbAAIgGARgAgDAlQAOgBAEgIQAEgLgMgCIgEAAgAgIgeQgDAJALACIAEABIAHgVQgPABgEAIg");
	this.shape_16.setTransform(21.8,-7.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCglQAGgMANAAIAtgBIABBkIgkAAIAAgRIgmAAIgLASIgoAAgAACAIIAZAAIABgng");
	this.shape_17.setTransform(0,-9.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWgYIgdABIAIgaIBfgBIgJAaIgcAAIgYBKIgmABg");
	this.shape_18.setTransform(-7.5,-9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag6AtIAIgXQAPAHAVAAQARAAADgIQADgHgJgCIgNgDQgigFAKgcQAJgbArgBQAaAAASAHIgIAYQgQgHgTAAQgQAAAAAGQgDAHAGACIAPACQAkAGgMAeQgGAPgNAHQgNAGgUAAQgdAAgTgIg");
	this.shape_19.setTransform(-18.7,-8.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgCglQAGgNAOABIAsgBIABBjIgkABIAAgSIgmABIgLARIgoABgAACAIIAaAAIAAgng");
	this.shape_20.setTransform(-31.6,-8.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgkgxIAkAAIgLAlIAgAAIAMglIAmgBIgiBkIglAAIAMgmIggAAIgMAmIgnABg");
	this.shape_21.setTransform(-42.7,-8.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgcgxIBbgBIgIAXIg3ABIgDAQIAwgBIgIAWIgwAAIgFAQIA1gBIgIAYIhbABg");
	this.shape_22.setTransform(-58,-8.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgegxIBCgBQASAAAHAJQAHAJgEAMQgGATgWABQALABAEAIQAFAIgEALQgIAWgiAAIhKABgAgMAJIgGASIAUAAQANAAACgIQADgLgNAAgAgGgJIAPAAQANAAADgIQADgJgMAAIgQAAg");
	this.shape_23.setTransform(-70.3,-8.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAAgxIAkgBIgjBkIgkABg");
	this.shape_24.setTransform(-79,-8.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgyAlQgMgQAJgbQAQgtA4gBQAVAAASAGIgIAaQgNgGgRAAQgcAAgJAaQgJAbAgAAQASgBAMgDIgJAaQgOAEgQAAIgCAAQghAAgMgQg");
	this.shape_25.setTransform(-86.9,-8.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgcgxIBbgBIgHAXIg4ABIgDAQIAwAAIgIAVIgwABIgFAPIA1gBIgIAYIhbABg");
	this.shape_26.setTransform(-97.9,-8.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag/AzIAihkIAygBQA3AAgOAqQgIATgYAEIAPAjIgnAAIgJgdIgMAAIgKAegAAAgaIgHAaIAJgBQALAAAEgBQAFgDACgHQADgHgDgDQgDgEgKAAg");
	this.shape_27.setTransform(-110,-8.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("Ag5AkQgLgQAKgYQAJgaARgLQAQgLAbAAQAjAAAMARQALAQgKAZQgJAZgRAMQgQAKgbAAQgjAAgMgRgAgJgVQgIAGgEAOQgLAdAaAAQAJAAAHgFQAHgHAFgOQALgcgagBQgJABgHAFg");
	this.shape_28.setTransform(140.1,11.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AgwAyIAbhKIgeAAIAJgZIBeAAIgJAZIgdAAIgYBKg");
	this.shape_29.setTransform(130.1,11.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("AgLAyIgGhIIgaBIIghAAIAjhjIApAAQALAAAAAPIAGA6IAbhJIAhAAIgjBjg");
	this.shape_30.setTransform(116.8,11.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("Ag/AyIAjhjIBcAAIgIAXIg4AAIgDAQIAwAAIgJAVIgvAAIgGAQIA2AAIgJAXg");
	this.shape_31.setTransform(104.6,11.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("Ag7AnQgKgMAHgVIAUg5IAmAAIgUA6QgHATASAAQAIAAAFgEQADgEAEgLIAVg6IAmAAIgUA5QgJAZgQALQgOAKgaAAQgcAAgMgNg");
	this.shape_32.setTransform(93.4,11.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AgzAkQgMgQAKgbQAQgtA4AAQAVAAASAHIgIAaQgOgHgQAAQgcAAgJAaQgJAbAfAAQASAAAMgEIgJAbQgMADgSAAQgiAAgNgRg");
	this.shape_33.setTransform(81.7,11.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231F20").s().p("Ag7AtIAJgXQAPAHAVAAQALAAADgCQAEgBACgEQADgIgJgCIgNgDQghgFAKgcQAKgcAqAAQAYAAAUAIIgIAXQgPgHgUAAQgRAAAAAHQgCAGAFACIAPADQAjAFgLAeQgFAQgOAGQgNAGgUAAQgdAAgUgIg");
	this.shape_34.setTransform(70.4,11.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("Ag/AyIAjhjIBcAAIgIAXIg4AAIgDAQIAwAAIgJAVIgvAAIgGAQIA1AAIgHAXg");
	this.shape_35.setTransform(60.3,11.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AhBAyIAjhjIAtAAQAiAAALAQQALAPgJAYQgQAsgxAAgAgSAaIAPAAQAKAAAGgGQAHgGAFgOQAJgZgWAAIgMAAg");
	this.shape_36.setTransform(47.9,11.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("Ag/AyIAkhjIBbAAIgIAXIg3AAIgEAQIAwAAIgIAVIgwAAIgFAQIA1AAIgIAXg");
	this.shape_37.setTransform(33.1,11.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#231F20").s().p("AhBAyIAjhjIAtAAQAiAAALAQQALAPgJAYQgQAsgyAAgAgSAaIAPAAQAKAAAGgGQAHgGAFgOQAJgZgWAAIgMAAg");
	this.shape_38.setTransform(20.8,11.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#231F20").s().p("AhDAvQgNgVAMgiQANghARgOQATgPAfAAQApAAAPAXQANAWgMAiQgMAhgSAOQgTAPgfAAQgpAAgPgYgAgGgcQgGAHgHAVQgOAlAYAAQAJAAAHgHQAGgIAIgVQANglgYAAQgKAAgGAIg");
	this.shape_39.setTransform(91.7,-6.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#231F20").s().p("AhDAvQgOgVANgiQAMghASgOQATgPAfAAQApAAAPAXQANAWgMAiQgMAhgSAOQgTAPgfAAQgpAAgPgYgAgGgcQgGAHgHAVQgOAlAYAAQAJAAAHgHQAGgIAHgVQAOglgYAAQgKAAgGAIg");
	this.shape_40.setTransform(76.7,-6.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#231F20").s().p("AhDAvQgOgVANgiQAMghASgOQATgPAgAAQAoAAAPAXQANAWgMAiQgMAhgSAOQgTAPgfAAQgqAAgOgYgAgFgcQgHAHgHAVQgOAlAYAAQAJAAAGgHQAHgIAIgVQANglgYAAQgKAAgFAIg");
	this.shape_41.setTransform(61.6,-6.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#231F20").s().p("AgiAaIAdgzIAoAAIglAzg");
	this.shape_42.setTransform(49.7,-0.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#231F20").s().p("AhLBFIAHgUQAGgQALgGIA0gcQASgKADgJQAFgQgaAAQgTAAgXAGIALggQAZgGAVAAQAlAAAPANQANANgIAXQgFAPgNAIQgIAGgaAMIgXAOIA/AAIgLAhg");
	this.shape_43.setTransform(41,-7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#231F20").s().p("AgkBXIAGgRQgcgCgVgJIALgfQAWAKAbAAIAAAAIAJgaIgIgBQgtgGAOgnQANglA5AAIACAAIAEgPIAQAAIgGAQQAYACATAHIgKAfQgWgIgVgBIgIAXIAFAAQAYADAIANQAHAMgHAVQgIAUgSAJQgRAIgbAAIgGARgAgDAlQAOgBAEgIQADgLgMgCIgDAAgAgIgeQgDAJALACIAEABIAHgVQgQABgDAIg");
	this.shape_44.setTransform(22.8,-6.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#231F20").s().p("AgCglQAGgMANAAIAtgBIABBkIgkAAIAAgSIgmABIgLASIgoAAgAACAIIAZAAIABgng");
	this.shape_45.setTransform(1,-8.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#231F20").s().p("AgWgYIgdABIAIgaIBfgBIgJAaIgcAAIgYBKIgmABg");
	this.shape_46.setTransform(-6.5,-8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#231F20").s().p("Ag6AtIAIgXQAPAHAVAAQARAAADgIQADgHgJgCIgNgDQgigFAKgcQAJgbArgBQAaAAASAHIgIAYQgQgHgTAAQgQAAAAAGQgDAHAGACIAPACQAkAGgMAeQgGAPgNAHQgNAGgUAAQgdAAgTgIg");
	this.shape_47.setTransform(-17.7,-7.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#231F20").s().p("AgCglQAGgNAOAAIAsAAIABBjIgkABIAAgSIgmABIgLARIgoABgAACAIIAaAAIAAgng");
	this.shape_48.setTransform(-30.6,-7.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#231F20").s().p("AgkgxIAkgBIgLAmIAgAAIAMgmIAnAAIgjBkIglAAIAMgmIggAAIgMAmIgmABg");
	this.shape_49.setTransform(-41.7,-7.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#231F20").s().p("AgcgxIBbgBIgIAXIg3ABIgDAPIAwAAIgIAWIgwAAIgFAQIA1gBIgIAYIhbABg");
	this.shape_50.setTransform(-57,-7.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#231F20").s().p("AgegxIBCgBQASAAAHAJQAHAJgEAMQgGATgWABQALABAEAIQAFAIgEALQgEAMgKAFQgJAFgTAAIhKABgAgMAJIgGASIAUAAQANAAACgIQADgLgNAAgAgGgJIAPAAQANAAADgIQADgJgMAAIgQAAg");
	this.shape_51.setTransform(-69.3,-7.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#231F20").s().p("AAAgxIAkgBIgjBkIgkABg");
	this.shape_52.setTransform(-78,-7.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#231F20").s().p("AgyAlQgMgQAJgbQAQgtA4gBQAVAAASAGIgIAaQgNgGgRAAQgcAAgJAaQgJAbAgAAQASgBAMgDIgJAaQgOAEgQAAIgCAAQghAAgMgQg");
	this.shape_53.setTransform(-85.9,-7.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#231F20").s().p("AgcgxIBbgBIgHAXIg4ABIgDAQIAwgBIgIAWIgwABIgFAPIA1gBIgIAYIhbABg");
	this.shape_54.setTransform(-96.9,-7.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#231F20").s().p("Ag/AzIAihkIAygBQA3AAgOAqQgIATgYAEIAPAjIgnAAIgJgdIgMAAIgKAegAAAgaIgHAaIAJgBQALAAAEgBQAFgDACgHQADgHgDgDQgDgEgKAAg");
	this.shape_55.setTransform(-109,-7.1);

	this.addChild(this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.4,-16.5,263,33);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4A2IANgoIgXhCIAmAAIANAnIAlgoIAtAAIhGBGIgNAlg");
	this.shape.setTransform(106.4,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag+AwIAIgZQASAIAVAAQASAAADgIQADgIgJgCIgOgDQgjgGAKgeQAKgdAtAAQAaAAAVAIIgIAYQgRgHgVAAQgRAAAAAHQgDAHAGACIAQADQAmAGgNAfQgFARgPAHQgNAGgVAAQggAAgUgIg");
	this.shape_1.setTransform(88.3,-1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCgnQAHgOAOABIAvgBIAABqIglABIAAgTIgpAAIgLATIgrAAgAADAJIAbAAIAAgrg");
	this.shape_2.setTransform(74.6,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXgZIggAAIAKgbIBlgBIgKAbIgfAAIgZBPIgoABg");
	this.shape_3.setTransform(66.8,-1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Agsg0IAsAAQAMAAAAAPIAHA+IAbhOIAjAAIglBqIg3ABIgIhNIgaBNIgkAAg");
	this.shape_4.setTransform(52.6,-1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhBA2IA/hdQAHgOAOAAIAvAAIABBqIgnAAIABgSIgpAAIgMATgAADAJIAbAAIAAgrg");
	this.shape_5.setTransform(36.9,-1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNg0IAngBIgaBPIAzAAIgKAbIhbABg");
	this.shape_6.setTransform(25.6,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNg1IAmAAIgZBPIAzAAIgJAbIhcABg");
	this.shape_7.setTransform(15,-1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDAdIg6ABIAKgeIAugqQAJgLAIAAIAzAAIgVA6IAPAAIgJAYIgOAAIgIAYIglABgAgYAGIAbAAIAQgrg");
	this.shape_8.setTransform(0.8,-1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhBA2IA/hdQAHgOAOAAIAvAAIAABqIglAAIAAgSIgpAAIgMATgAACAJIAbAAIABgrg");
	this.shape_9.setTransform(-17.1,-0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ageg1IA1AAQA5AAgOAsQgHAUgbAFIAQAlIgqAAIgJgfIgNAAIgLAfIgoABgAgHgBIAJAAQAMAAAEgCQAFgCADgIQADgIgDgDQgDgEgLAAIgMAAg");
	this.shape_10.setTransform(-29,-0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhDA2IAlhqIAygBQA9AAgRAxQgGASgQAIQgOAGgYAAIgWAAIgJAagAgKADIAKAAQAMAAAFgDQAFgBADgJQADgJgCgEQgDgFgMAAIgLAAg");
	this.shape_11.setTransform(-41.5,-0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhjA2IAlhqIArgBQAJABADAEQADAEAAAJIABAtIAog/IA/AAIglBqIgoAAIAahMIgyBMIgjAAIAAhNIgcBOg");
	this.shape_12.setTransform(-56.7,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag8AmQgMgQAKgbQAJgbASgLQARgMAdAAQAlAAANASQAMAQgKAbQgKAbgRAMQgSALgdAAIgBAAQgkAAgMgSgAgKgXQgIAHgFAPQgLAfAbAAQALAAAHgGQAHgGAGgQQAKgegbAAQgKAAgHAFg");
	this.shape_13.setTransform(-72.9,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag1AnQgOgRALgdQARgwA7AAQAWgBAUAIIgJAbQgOgHgSAAQgeAAgJAcQgJAcAhAAQAQAAAQgEIgKAcQgOAEgSAAQgkAAgNgRg");
	this.shape_14.setTransform(-84.9,-0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("Ag4A2IANgoIgXhCIAmAAIANAnIAlgoIAtAAIhGBGIgNAlg");
	this.shape_15.setTransform(108.4,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("Ag+AwIAIgZQASAIAVAAQASAAADgIQADgIgJgCIgOgDQgjgGAKgeQAKgdAtAAQAaAAAVAIIgIAYQgRgHgVAAQgRAAAAAHQgDAHAGACIAQADQAmAGgNAfQgFARgPAHQgNAGgVAAQggAAgUgIg");
	this.shape_16.setTransform(90.3,0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgCgmQAHgOAOgBIAvAAIAABqIglAAIAAgSIgpAAIgMASIgqABgAACAJIAbgBIABgqg");
	this.shape_17.setTransform(76.6,0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgXgZIggAAIAKgbIBlgBIgKAcIgfAAIgZBPIgoAAg");
	this.shape_18.setTransform(68.8,0.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("Agsg0IAsAAQAMgBAAARIAHA9IAbhOIAkAAIgmBqIg4ABIgHhNIgbBNIgjAAg");
	this.shape_19.setTransform(54.6,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AhCA2IBAhdQAHgOAOAAIAvAAIABBqIgmAAIAAgSIgpAAIgLATgAADAJIAbAAIAAgrg");
	this.shape_20.setTransform(38.9,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgNg0IAngBIgaBPIAzAAIgJAbIhcABg");
	this.shape_21.setTransform(27.6,0.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgNg1IAmAAIgZBPIAzAAIgJAbIhcABg");
	this.shape_22.setTransform(17,1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgDAdIg6ABIAKgeIAugqQAJgLAIAAIAzAAIgVA6IAOAAIgIAYIgOAAIgIAYIglABgAgZAGIAcAAIAQgrg");
	this.shape_23.setTransform(2.8,1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AhBA2IA/hdQAHgOAOAAIAvAAIAABqIglAAIAAgSIgpAAIgMATgAACAJIAbAAIABgrg");
	this.shape_24.setTransform(-15.1,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("Ageg1IA1AAQA5AAgOAsQgHAUgbAFIAQAlIgqAAIgJgfIgNAAIgLAfIgoABgAgHgBIAJAAQAMAAAEgCQAFgCADgIQADgIgDgDQgDgEgLAAIgMAAg");
	this.shape_25.setTransform(-27,1.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AhDA2IAlhqIAygBQA9AAgRAxQgGASgQAIQgOAGgYAAIgWAAIgJAagAgKADIAKAAQAMAAAFgDQAFgBADgJQADgJgCgEQgDgFgMAAIgLAAg");
	this.shape_26.setTransform(-39.5,1.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AhjA2IAlhqIArgBQAJAAADAFQADAEAAAJIABAuIAphAIA+AAIgkBqIgpAAIAahMIgzBMIgjAAIAAhNIgbBOg");
	this.shape_27.setTransform(-54.7,1.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("Ag8AmQgMgQAKgbQAJgbASgLQARgMAdAAQAlAAANASQAMAQgKAbQgKAbgRAMQgSALgdAAIgBAAQgkAAgMgSgAgKgXQgIAHgFAPQgLAfAbAAQALAAAHgGQAHgGAGgQQAKgegbAAQgKAAgHAFg");
	this.shape_28.setTransform(-70.9,1.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("Ag1AnQgOgRALgdQARgwA7AAQAWgBAUAIIgJAbQgOgHgSAAQgeAAgJAcQgJAcAhAAQAQAAAQgEIgKAcQgOAEgSAAQgkAAgNgRg");
	this.shape_29.setTransform(-82.9,1.5);

	this.addChild(this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.1,-7.1,206.4,14.4);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.df();
	this.instance.setTransform(-54,-25,1.013,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54,-25,107.4,50);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sd();
	this.instance.setTransform(-53.6,-25,1.013,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.6,-25,107.4,50);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.as();
	this.instance.setTransform(-53.6,-25,1.013,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.6,-25,107.4,50);


// stage content:
(lib._320x50_op = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_168 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(168).call(this.frame_168).wait(1));

	// FlashAICB
	this.instance = new lib.Symbol8();
	this.instance.setTransform(404.9,26.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(133).to({_off:false},0).wait(1).to({regY:-0.2,x:388.8,y:26.2},0).wait(1).to({x:372.6},0).wait(1).to({x:356.5},0).wait(1).to({x:340.3},0).wait(1).to({x:324.2},0).wait(1).to({x:308.1},0).wait(1).to({x:291.9},0).wait(1).to({x:275.8},0).wait(1).to({x:259.7},0).wait(27));

	// FlashAICB
	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(-65,24.4);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(129).to({_off:false},0).wait(1).to({x:-47.9},0).wait(1).to({x:-30.9},0).wait(1).to({x:-13.8},0).wait(1).to({x:3.2},0).wait(1).to({x:20.3},0).wait(1).to({x:37.3},0).wait(1).to({x:54.4},0).wait(1).to({x:71.4},0).wait(1).to({x:88.5},0).wait(31));

	// en la compra de 4 llantas
	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(-177.7,25);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({_off:false},0).wait(1).to({regX:15,x:-130.8},0).wait(1).to({x:-98.8},0).wait(1).to({x:-66.9},0).wait(1).to({x:-34.9},0).wait(1).to({x:-3},0).wait(1).to({x:28.9},0).wait(1).to({x:60.9},0).wait(1).to({x:92.8},0).wait(1).to({x:124.8},0).wait(1).to({x:156.7},0).wait(47).to({_off:true},1).wait(40));

	// Layer 6
	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(-174.8,25);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).wait(1).to({regX:12,x:-136.1},0).wait(1).to({x:-109.3},0).wait(1).to({x:-82.6},0).wait(1).to({x:-55.8},0).wait(1).to({x:-29.1},0).wait(1).to({x:-2.3},0).wait(1).to({x:24.4},0).wait(1).to({x:51.1},0).wait(1).to({x:77.9},0).wait(1).to({x:104.6},0).wait(1).to({x:131.4},0).wait(1).to({x:158.1},0).wait(37).to({_off:true},1).wait(97));

	// Symbol 3
	this.instance_4 = new lib.Symbol3();
	this.instance_4.setTransform(266.9,-77.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(1).to({regX:-0.4,x:266.5,y:-64.6},0).wait(1).to({y:-51.8},0).wait(1).to({y:-39},0).wait(1).to({y:-26.2},0).wait(1).to({y:-13.4},0).wait(1).to({y:-0.6},0).wait(1).to({y:12.2},0).wait(1).to({y:25},0).wait(152));

	// Symbol 2
	this.instance_5 = new lib.Symbol2();
	this.instance_5.setTransform(159.5,130);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1).to({y:120.5},0).wait(1).to({y:110.9},0).wait(1).to({y:101.4},0).wait(1).to({y:91.8},0).wait(1).to({y:82.3},0).wait(1).to({y:72.7},0).wait(1).to({y:63.2},0).wait(1).to({y:53.6},0).wait(1).to({y:44.1},0).wait(1).to({y:34.5},0).wait(1).to({y:25},0).wait(7).to({scaleX:1},0).wait(12).to({scaleX:1},0).wait(13).to({scaleX:1},0).wait(13).to({scaleX:1},0).wait(12).to({scaleX:1},0).wait(13).to({scaleX:1.01},0).wait(13).to({scaleX:1.01},0).wait(12).to({scaleX:1.01},0).wait(13).to({scaleX:1.01},0).wait(13).to({scaleX:1.01},0).wait(12).to({scaleX:1.01},0).wait(13).to({scaleX:1.01},0).wait(8));

	// Symbol 1
	this.instance_6 = new lib.Symbol1();
	this.instance_6.setTransform(52.2,-81);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({y:-73.4},0).wait(1).to({y:-65.9},0).wait(1).to({y:-58.3},0).wait(1).to({y:-50.7},0).wait(1).to({y:-43.1},0).wait(1).to({y:-35.6},0).wait(1).to({y:-28},0).wait(1).to({y:-20.4},0).wait(1).to({y:-12.9},0).wait(1).to({y:-5.3},0).wait(1).to({y:2.3},0).wait(1).to({y:9.9},0).wait(1).to({y:17.4},0).wait(1).to({y:25},0).wait(155));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(158.5,-81,107.4,50);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;