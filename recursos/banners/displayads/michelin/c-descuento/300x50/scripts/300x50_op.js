(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/20.jpg", id:"_20"},
		{src:"images/30.jpg", id:"_30"},
		{src:"images/40.jpg", id:"_40"}
	]
};



// symbols:



(lib._20 = function() {
	this.initialize(img._20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,50);


(lib._30 = function() {
	this.initialize(img._30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,50);


(lib._40 = function() {
	this.initialize(img._40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,50);


(lib.we = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._30();
	this.instance.setTransform(-50,-25);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-25,100,50);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE433").s().p("Ag+AsQgNgUAMgfQALggARgNQARgNAeAAQAmAAANAWQANAUgMAfQgLAggRANQgRANgdAAQgnAAgNgWgAgFgaQgGAHgHATQgMAjAWAAQAIAAAGgHQAGgIAHgTQAMgjgWAAQgJAAgFAIg");
	this.shape.setTransform(97.3,-0.5,0.914,0.914);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEE433").s().p("Ag+AsQgNgUAMgfQALggARgNQARgNAeAAQAmAAANAWQANAUgMAfQgLAggRANQgRANgeAAQgmAAgNgWgAgFgaQgGAHgHATQgMAjAWAAQAIAAAGgHQAGgIAHgTQAMgjgWAAQgJAAgFAIg");
	this.shape_1.setTransform(84.5,-0.5,0.914,0.914);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEE433").s().p("Ag+AsQgNgUAMgfQALggARgNQARgNAdAAQAnAAANAWQANAUgMAfQgLAggRANQgRANgeAAQgmAAgNgWgAgFgaQgGAHgHATQgMAjAWAAQAIAAAGgHQAGgIAHgTQAMgjgWAAQgJAAgFAIg");
	this.shape_2.setTransform(71.6,-0.5,0.914,0.914);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEE433").s().p("AggAYIAbgvIAmAAIgjAvg");
	this.shape_3.setTransform(61.4,4.8,0.914,0.914);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEE433").s().p("AhGBBIAHgTQAGgPAKgGIAwgaQARgKACgHQAGgQgaAAQgSAAgUAHIAKgfQAXgGAUAAQAjAAANANQANAMgIAWQgFANgMAHQgHAGgYAMIgWANIA7AAIgLAfg");
	this.shape_4.setTransform(54.1,-0.7,0.914,0.914);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEE433").s().p("AgiBRIAHgQQgagCgUgIIAKgdQAUAJAZAAIABAAIAIgXIgIgBQgqgGANgkQAMgjA1AAIACAAIAFgOIAPAAIgGAPQAVABASAIIgKAdQgSgJgVAAIgHAVIAFABQAWADAHALQAHAMgHATQgHATgRAIQgPAHgaAAIgFAQgAgCAjQAMgCAEgHQADgKgLgCIgDAAgAgHgcQgCAIAJACIAEABIAGgTQgPABgCAHg");
	this.shape_5.setTransform(38.5,-0.4,0.914,0.914);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtAlIAsg/QAEgKAKAAIAhAAIAABJIgaAAIAAgNIgcAAIgIANgAABAGIATAAIABgdg");
	this.shape_6.setTransform(21.7,-1.2,0.914,0.914);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjAlIAUg2IgWAAIAGgTIBFAAIgGATIgVAAIgSA2g");
	this.shape_7.setTransform(16.8,-1.2,0.914,0.914);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgrAhIAGgRQANAGAOAAQAMgBACgGQACgFgGgCIgJgCQgZgDAIgVQAGgUAfAAQASAAAPAFIgGARQgMgEgOAAQgMAAAAAEQgCAFAEABIALACQAaAFgJAVQgGAVgfAAQgVAAgPgGg");
	this.shape_8.setTransform(9.2,-1.1,0.914,0.914);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgBgbQAEgJAKAAIAhAAIAABIIgaABIAAgNIgcAAIgIANIgdAAgAACAGIASAAIABgdg");
	this.shape_9.setTransform(0.6,-1.1,0.914,0.914);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgagkIAaAAIgIAcIAXAAIAJgcIAcgBIgZBKIgbAAIAIgcIgWAAIgJAcIgdABg");
	this.shape_10.setTransform(-6.9,-1,0.914,0.914);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUgkIBDAAIgGARIgpAAIgCAMIAjgBIgGAQIgjAAIgEAMIAngBIgGASIhDAAg");
	this.shape_11.setTransform(-17.2,-1,0.914,0.914);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWgkIAwAAQAOAAAFAHQAFAGgDAJQgFANgQABQAIABADAGQAEAGgDAIQgFAQgaAAIg2AAgAgNAUIAOAAQAJAAACgGQADgIgKAAIgOAAgAgEgGIALAAQAJAAACgGQACgHgIAAIgMAAg");
	this.shape_12.setTransform(-25.5,-0.9,0.914,0.914);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZAlIAZhJIAbAAIgaBJg");
	this.shape_13.setTransform(-31.3,-0.9,0.914,0.914);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AglAbQgJgMAHgTQAMgiAoAAQAQAAAOAFIgHATQgKgFgMAAQgUAAgGATQgHAUAXAAQALAAALgDIgHATQgJADgMAAIgCAAQgYAAgJgMg");
	this.shape_14.setTransform(-36.6,-0.9,0.914,0.914);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUgkIBDAAIgGARIgpAAIgCAMIAjAAIgGAPIgiAAIgFAMIAnAAIgGARIhDAAg");
	this.shape_15.setTransform(-44.1,-0.8,0.914,0.914);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguAlIAZhJIAlAAQAoAAgLAfQgFANgSADIALAaIgdAAIgGgWIgJAAIgHAWgAgFAAIAGAAQAIAAADgBQAEgCACgFQAEgLgOAAIgIAAg");
	this.shape_16.setTransform(-52.2,-0.8,0.914,0.914);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgpAaQgJgLAHgSQAHgTAMgHQANgJATAAQAaAAAIAMQAJAMgHASQgHASgMAJQgMAHgUABQgaAAgIgNgAgPAAQgIAVATgBQAOABAGgUQAIgUgTAAQgOgBgGAUg");
	this.shape_17.setTransform(192.4,-1.2,0.914,0.914);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgjAlIAUg2IgWAAIAGgTIBFAAIgGATIgVAAIgSA2g");
	this.shape_18.setTransform(185.7,-1.2,0.914,0.914);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMgQIgTA1IgYAAIAahJIAdAAQAJAAgBAMIAFAqIATg2IAYAAIgZBJIgnAAg");
	this.shape_19.setTransform(176.7,-1.2,0.914,0.914);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AguAlIAahJIBDAAIgGARIgpABIgCALIAjAAIgGAPIgjAAIgEAMIAnAAIgGARg");
	this.shape_20.setTransform(168.5,-1.1,0.914,0.914);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgrAdQgIgJAGgPIAPgqIAcAAIgPAqQgFAOANAAQAJAAAFgOIAPgqIAcAAIgPApQgGATgLAIQgLAHgSAAQgVAAgJgJg");
	this.shape_21.setTransform(161,-1,0.914,0.914);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AglAbQgJgMAHgTQAMgiAoAAQAQAAAOAFIgHASQgKgEgMAAQgUAAgGATQgHAUAXgBQALAAALgCIgHATQgHACgOABQgZAAgKgMg");
	this.shape_22.setTransform(153.1,-1,0.914,0.914);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgrAhIAGgSQAMAHAPgBQAMAAACgGQACgFgGgCIgJgCQgZgDAHgVQAHgUAfAAQASAAAPAGIgGARQgMgGgOABQgMgBAAAGQgCAEAEABIALACQAaAFgIAVQgEAMgLAEQgJAFgOAAQgVAAgPgGg");
	this.shape_23.setTransform(145.6,-1,0.914,0.914);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUgkIBCAAIgFARIgpAAIgCAMIAjAAIgGAPIgiAAIgFAMIAnAAIgGARIhCAAg");
	this.shape_24.setTransform(138.7,-0.9,0.914,0.914);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgvAlIAZhJIAhAAQAZAAAIAMQAIALgHARQgKAgglABgAgNATIALAAQAPAAAGgTQAHgSgRAAIgJAAg");
	this.shape_25.setTransform(130.4,-0.9,0.914,0.914);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AguAlIAahJIBDAAIgGARIgpAAIgCAMIAjAAIgGAPIgjAAIgEAMIAnAAIgGARg");
	this.shape_26.setTransform(120.4,-0.8,0.914,0.914);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgvAlIAZhJIAhAAQAZAAAIAMQAIALgHARQgLAhgkAAgAgNATIALAAQAHAAAFgEQAFgEAEgLQAGgSgQAAIgJAAg");
	this.shape_27.setTransform(112.1,-0.8,0.914,0.914);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#414042").s().p("Ag+AsQgNgUAMgfQALggARgNQARgNAeAAQAmAAANAWQANAUgMAfQgLAggRANQgRANgdAAQgnAAgNgWgAgFgaQgGAHgHATQgMAjAWAAQAIAAAGgHQAGgIAHgTQAMgjgWAAQgJAAgFAIg");
	this.shape_28.setTransform(98.2,0.4,0.914,0.914);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#414042").s().p("Ag+AsQgNgUAMgfQALggARgNQARgNAeAAQAmAAANAWQANAUgMAfQgLAggRANQgRANgeAAQgmAAgNgWgAgFgaQgGAHgHATQgMAjAWAAQAIAAAGgHQAGgIAHgTQAMgjgWAAQgJAAgFAIg");
	this.shape_29.setTransform(85.4,0.4,0.914,0.914);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#414042").s().p("Ag+AsQgNgUAMgfQALggARgNQARgNAdAAQAnAAANAWQANAUgMAfQgLAggRANQgRANgeAAQgmAAgNgWgAgFgaQgGAHgHATQgMAjAWAAQAIAAAGgHQAGgIAHgTQAMgjgWAAQgJAAgFAIg");
	this.shape_30.setTransform(72.5,0.4,0.914,0.914);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#414042").s().p("AggAYIAbgvIAmAAIgjAvg");
	this.shape_31.setTransform(62.4,5.7,0.914,0.914);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#414042").s().p("AhGBBIAHgTQAGgPAKgGIAwgaQARgKACgHQAGgQgaAAQgSAAgUAHIAKgfQAXgGAUAAQAjAAANANQANAMgIAWQgFANgMAHQgHAGgYAMIgWANIA7AAIgLAfg");
	this.shape_32.setTransform(55,0.3,0.914,0.914);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#414042").s().p("AgiBRIAHgQQgagCgUgIIAJgdQAUAJAaAAIAAAAIAJgXIgIgBQgqgGANgkQAMgjA1AAIACAAIAFgOIAPAAIgGAPQAVABATAIIgLAdQgSgJgVAAIgHAVIAFABQAWADAHALQAHAMgHATQgGATgSAIQgPAHgaAAIgGAQgAgCAjQANgCADgHQADgKgLgCIgDAAgAgHgcQgDAIAKACIAEABIAGgTQgPABgCAHg");
	this.shape_33.setTransform(39.4,0.5,0.914,0.914);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#414042").s().p("AgtAlIAsg/QAEgKAKAAIAhAAIAABJIgaAAIAAgNIgcAAIgIANgAABAGIATAAIABgdg");
	this.shape_34.setTransform(22.7,-0.3,0.914,0.914);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#414042").s().p("AgjAlIAUg2IgWAAIAGgTIBFAAIgGATIgVAAIgSA2g");
	this.shape_35.setTransform(17.7,-0.3,0.914,0.914);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#414042").s().p("AgrAhIAGgRQANAFAOABQAMgBACgGQACgFgGgCIgJgCQgZgDAHgVQAHgUAfAAQASAAAPAGIgGAQQgMgEgOAAQgMAAAAAEQgCAFAEABIALACQAaAFgIAVQgIAVgeAAQgVAAgPgGg");
	this.shape_36.setTransform(10.2,-0.2,0.914,0.914);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#414042").s().p("AgBgbQAEgJAKAAIAhAAIAABIIgaABIAAgNIgcAAIgIANIgdAAgAACAGIASAAIABgdg");
	this.shape_37.setTransform(1.5,-0.2,0.914,0.914);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#414042").s().p("AgagkIAaAAIgIAcIAXAAIAJgcIAcgBIgZBKIgbAAIAIgcIgWAAIgJAcIgcABg");
	this.shape_38.setTransform(-6,-0.1,0.914,0.914);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#414042").s().p("AgUgkIBDAAIgGARIgpAAIgCAMIAjgBIgGAQIgjAAIgEAMIAngBIgGASIhDAAg");
	this.shape_39.setTransform(-16.3,-0.1,0.914,0.914);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#414042").s().p("AgWgkIAwAAQAOAAAFAHQAFAGgDAJQgFANgQABQAIABADAGQAEAGgDAIQgFAQgaAAIg2AAgAgNAUIAOAAQAJAAACgGQADgIgKAAIgOAAgAgEgGIALAAQAJAAACgGQACgHgIAAIgMAAg");
	this.shape_40.setTransform(-24.6,0,0.914,0.914);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#414042").s().p("AgZAlIAZhJIAbAAIgaBJg");
	this.shape_41.setTransform(-30.4,0,0.914,0.914);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#414042").s().p("AglAbQgJgMAHgTQAMgiAoAAQAQAAAOAFIgHATQgKgFgMAAQgUAAgGATQgHAUAXAAQALAAALgDIgHATQgJADgMAAIgCAAQgYAAgJgMg");
	this.shape_42.setTransform(-35.7,0,0.914,0.914);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#414042").s().p("AgUgkIBDAAIgGARIgpAAIgCAMIAjAAIgGAPIgiAAIgFAMIAnAAIgGARIhCAAg");
	this.shape_43.setTransform(-43.2,0.1,0.914,0.914);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#414042").s().p("AguAlIAZhJIAlAAQAoAAgLAfQgFANgSADIALAaIgdAAIgGgWIgJAAIgHAWgAgFAAIAGAAQAIAAADgBQAEgCACgFQAEgLgOAAIgIAAg");
	this.shape_44.setTransform(-51.3,0.1,0.914,0.914);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#414042").s().p("AgpAaQgJgLAHgSQAHgTAMgHQANgJATAAQAaAAAIAMQAJAMgHASQgHATgMAIQgMAHgUABQgaAAgIgNgAgPgBQgIAWATAAQAOAAAGgUQAIgUgTAAQgOAAgGASg");
	this.shape_45.setTransform(193.3,-0.3,0.914,0.914);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#414042").s().p("AgjAlIAUg2IgWAAIAGgTIBFAAIgGATIgVAAIgSA2g");
	this.shape_46.setTransform(186.6,-0.3,0.914,0.914);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#414042").s().p("AgMgQIgTA1IgYAAIAahJIAdAAQAJAAgBAMIAFAqIATg2IAZAAIgaBJIgnAAg");
	this.shape_47.setTransform(177.6,-0.2,0.914,0.914);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#414042").s().p("AguAlIAahJIBDAAIgGARIgpABIgCALIAjAAIgGAPIgjAAIgEAMIAnAAIgGARg");
	this.shape_48.setTransform(169.5,-0.2,0.914,0.914);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#414042").s().p("AgrAdQgIgJAGgPIAPgqIAcAAIgPAqQgFAOANAAQAJAAAFgOIAPgqIAcAAIgPApQgGATgLAIQgLAHgSAAQgVAAgJgJg");
	this.shape_49.setTransform(161.9,-0.1,0.914,0.914);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#414042").s().p("AglAbQgJgMAHgTQAMgiAoAAQAQAAAOAFIgHASQgKgEgMAAQgUAAgGATQgHAUAXgBQALAAALgCIgHATQgHACgOABQgZAAgKgMg");
	this.shape_50.setTransform(154.1,-0.1,0.914,0.914);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#414042").s().p("AgrAhIAGgSQAMAHAPgBQAMAAACgGQACgFgGgBIgJgDQgZgDAHgVQAHgUAfAAQASAAAPAGIgGARQgMgGgOAAQgMAAAAAGQgCAEAEABIALADQAaADgIAWQgHAUgfABQgVAAgPgGg");
	this.shape_51.setTransform(146.5,0,0.914,0.914);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#414042").s().p("AgUgkIBCAAIgFARIgpAAIgCAMIAjAAIgHAPIghAAIgFAMIAnAAIgGARIhCAAg");
	this.shape_52.setTransform(139.6,0,0.914,0.914);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#414042").s().p("AgvAlIAZhJIAhAAQAZAAAIAMQAIALgHARQgKAgglABgAgNATIALAAQAHAAAFgEQAFgEAEgLQAHgSgRAAIgJAAg");
	this.shape_53.setTransform(131.3,0,0.914,0.914);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#414042").s().p("AguAlIAahJIBDAAIgGARIgpAAIgCAMIAjAAIgGAPIgjAAIgEAMIAnAAIgGARg");
	this.shape_54.setTransform(121.3,0.1,0.914,0.914);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#414042").s().p("AgvAlIAZhJIAhAAQAZAAAIAMQAIALgHARQgLAhgkAAgAgNATIALAAQAHAAAFgEQAFgEAEgLQAGgSgQAAIgJAAg");
	this.shape_55.setTransform(113,0.1,0.914,0.914);

	this.addChild(this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.5,-7.9,254.2,15.9);


(lib.qw = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._20();
	this.instance.setTransform(-50,-25);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-25,100,50);


(lib.PORID = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCABQAAgEACAAIABAAQACACAAABIgBAEIAAgCQAAgBAAgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgCAAABADIAAABg");
	this.shape.setTransform(-23.6,-9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgBAGQgBgCgCgEQAAgFAEgBIACABQABACACADQgBAHgEAAg");
	this.shape_1.setTransform(-23.6,-9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AACACQAAgDgCABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgDACAAIABAAQAAABAAAAQABABAAAAQAAABAAAAQABAAAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAg");
	this.shape_2.setTransform(-22.5,-9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAAAGQgDgCAAgEQgBgGAEAAIABABQADACAAADQABAHgFAAg");
	this.shape_3.setTransform(-22.5,-9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAAACIgCgCIgEAAIgBAAIABgBIAAgBIABABIAFgBIAGABIABgBIABACIgBAAIgFADIgBAAIgBgBgAgCAAIACABIACAAIADgBIgEAAIgDAAg");
	this.shape_4.setTransform(-23.1,-8.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgDAAIAAgBIAHABIgBACg");
	this.shape_5.setTransform(-28.3,9.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgDAAIAAAAIAHAAIgBABIgGgBg");
	this.shape_6.setTransform(-28.4,9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AAAAAIgBAAIABAAIACAAIAAABg");
	this.shape_7.setTransform(-31,-9.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAZQgCgIgFgFQAJgDAGADQABAAAAAAQABABAAAAQAAAAAAgBQABAAAAAAIgBgCQgBAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAAAAQgHgEABgFQAAgHAGgBQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAIgDABQAAgHAEgFQAEgDAEAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAIgBAAQABgCAEAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAAAIAAAAQAMAEgBAJIAAACQAFAEgBAGQAAAFgFABQACADgDABQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAUACgBAHQgBAFgKAEQgKADgNAAQgNAAgJgEg");
	this.shape_8.setTransform(-23,-8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAAIADgIQADACABAGQABAFgFAEQAAgHgDgCg");
	this.shape_9.setTransform(-18.5,-4.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgCgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQADABACAFQAEADgEAGQgCgIgCgDg");
	this.shape_10.setTransform(-19,-6.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKAKQgDgEADgEIAHgHIAEgKQADADAIAAQgDAIABADIACAJQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQgEACgFAAQgFAAgFgEIAAAAQAEAHAIgBIAAABIgEAAQgFAAgFgGg");
	this.shape_11.setTransform(-28.8,10.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEAVQgFgFAFgFIACADQACADACgDIAAgBQgCAAgBgDIgCgDQgIgGgBgCQgCgDABgJIAAgBQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAGACADIACgBIgCgIIgCgCQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIgCgEQAAgBABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAGAIQABAEACAAIAAAAIgHgOIgCgBQAAgBABAAQAAAAAAAAQABAAABAAQAAABABABQADADAFAKQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgGgKQADAAADAJQAAAFAAABQAAADAAACIAAAAIABgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQgDgFACgFQABAAAAAAQAAgBABAAQAAAAABABQABAAAAAAQgCAGACADIACAGIgBADIgBAEIAAADIAAACIABAAIACgCQAAgFABgBQAFACAAAHQgBAGgIAEIgGABQgCAAgDgDg");
	this.shape_12.setTransform(-30.6,-9.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAJQADgFAAgEQAQAAAKgJQABAKgLAGQgFADgGAAIgIgBg");
	this.shape_13.setTransform(-21.3,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAFIABgHIABAAQAIACAGgBQAJgCAGgGQABAMgNAFQgEACgCAAQgHAAgGgFg");
	this.shape_14.setTransform(-21.7,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAFQgFgEAAgDIACgFQAMAJAPgIQACAGgGAEQgEADgHAAQgEAAgFgCg");
	this.shape_15.setTransform(-22.2,4.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOADQgGgGAEgIQADALANAAQAKABAHgHQADAGgFAEQgFAIgKAAQgJAAgFgJg");
	this.shape_16.setTransform(-22.3,5.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAAIQgGAAgEgFQgEgDABgIQAGAHAIABQAIAAAFgFQAAAOgOAAIAAgBg");
	this.shape_17.setTransform(-22.4,7.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAOQgDgCgCgDIgDgEQgGgFgBgCIABgGIADgFQAFACAGgCIAAACIgFABIABADIAFgBIABADIgEABIABACIAFgBIAJADQAFAEgEAEQgEAEgJgBIgBABQABABAFAAQAGgBADgCIABAAQgBACgHACIgGAAIgCAAg");
	this.shape_18.setTransform(-21.9,9.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgFAOQgIgDgDgKQgEgIAHgHQABAKALAFQAKAFAJgGQABAFgGAGQgEAEgHAAQgCAAgFgBg");
	this.shape_19.setTransform(-27,5.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEAKQgHgCgCgIQgDgGAFgEQAIAOASgDQgBAFgFADQgDACgEAAIgGgBg");
	this.shape_20.setTransform(-27.7,7.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFAJQgFgCgDgGQgDgFAEgGQALANAQgDQABAEgGAEQgEADgEAAQgCAAgFgCg");
	this.shape_21.setTransform(-26.5,4.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgQAGQgIgIAHgMQAFALAMADQALADAKgEQgCAPgTABIAAAAQgJAAgHgJg");
	this.shape_22.setTransform(-25.7,2.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgDAOQgLgDgFgJQgFgIAGgIQANAQAcgCQAAAIgIAEQgGADgGAAIgGgBg");
	this.shape_23.setTransform(-25.2,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXAIQgQgIADgNQANANAXAAQAYABAOgJQABAIgHAEQgJAJgTAAIgCABQgNAAgMgGg");
	this.shape_24.setTransform(-23.4,-0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNANQALAAAEgJQAGgIgIgOQAPAEgBAQQgBANgLADIgDABQgHAAgFgGg");
	this.shape_25.setTransform(-27.3,-5.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAPQgIgDgDgHQAKAEAGgHQAJgFgCgLQAEABADAIQADAIgGAHQgFAFgHAAIgEAAg");
	this.shape_26.setTransform(-28.8,-5.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCALQgJgCgDgJQAHAEAHgEQAJgDABgIIACADQAGAIgJAIQgEAEgFAAIgCgBg");
	this.shape_27.setTransform(-29.7,-6.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgFAPQgSAAgJgIQAEgHAAgIQAPAGASgDQASgDAGgGQAKAOgNAHQgMAIgRAAIgCAAg");
	this.shape_28.setTransform(-22.5,-4.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgaAIQgNgGgBgHQAHgBAFgFQAOALAWgCQAWgCAKgKQAEAJgHAIQgKAMgZAAQgPAAgNgHg");
	this.shape_29.setTransform(-23.2,-2.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AACAFIgDgCIgCgDIgCAAIgDAAIAAgDQAFgCADgDIABADIADADQAEACABADIgHgGQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAABQgBABAFADIADAEQABAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgBABQgCAAgDgEg");
	this.shape_30.setTransform(-16.8,0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgBACQgCgCADgBIACABIgCABIgBABIAAAAg");
	this.shape_31.setTransform(-17,1.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIABABIgBACIAAAAIAAgCg");
	this.shape_32.setTransform(-17.3,1.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAAAAIAAgBIABABIgBACIAAgCg");
	this.shape_33.setTransform(-17.7,0.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgGAIQgFgDABgFQALAAAEgJQAHADgBAGQgBAGgGACIgEACQgDAAgDgCg");
	this.shape_34.setTransform(-18,-1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgGAEQAFgEAAgEQABgBADgEQAHAGgFAFQgEAHgGABg");
	this.shape_35.setTransform(-18.5,-2.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AgvB5QgIAAgGgIQgDgEAAgDQAAgCADgEQAKgOACgFQgHgGABgIQAAgGAFgEQgCgHACgFQADgIAFgCIACgEQgGgNAJgJQgDgJAHgHQgDgHACgIIgDgHQgJgBgGgIQgOgEgCgMQgIgFABgLQgCgDABgEQABgEACgCQgHgFgBgFQgCgEAAgKQgCgFAAgBIADgDQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAQADgBACACQAFgCAGAKQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQADgBACADQADABgCAEQgCACADAFIABAHQAGADABAFIAFAEIAEACQAGAAAFACQAGgCAHAAQgDgEAAgGQAAgFADgEQAAgFADgFQADgGAFgCQAAgEAGAAQAHAAABAEQAMAEAAALQAEAEAAAFQABAGgDAFQAJABAEADQAHABAFAFQAGAGgBAIQAEAEABAHQAAAFgBADQAFAGgBAGQAGACACAFQACAGgDAGIADADIAFACQAHAIgDAEQABAEgEACQgFACgCgDIgFADQAAAAgBAAQgBABAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgCgDQgEgDABgFIAAgCQgIAAgEgEQACAHgFAHQADAKgJAJQACAFgCAEQAGAJgIALQAAAEgCAFQgCAHgHACQACAHACABIAFAEQAIAEAAAHQAAAAABAAQAAABgBAAQAAABAAABQAAAAgBABQgCAFgIACQgIABgFgBQgDgBgCgEIgEgGQgFgGgBgCQgCgHAFgJQgFgDAAgFQgDgHADgGIgEgIIgCAEQADANgMAHQgBAMgNACQgDAJABACIACAOQgCAJgNAAIgDAAg");
	this.shape_36.setTransform(-24,0.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgnAdIAWg5IA5AAIgFAQIghAAIgCAGIAeAAIgFAMIgdAAIgCAHIAfAAIgGAQg");
	this.shape_37.setTransform(20.5,1.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgLAdIACgnIgPAnIgYAAIAVg5IAgAAIACABIADABQACADAAAGIgBAbIAPgmIAXAAIgVA5g");
	this.shape_38.setTransform(39.7,1.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgeAdIAWg5IAZAAIgOAlIAcAAIgHAUg");
	this.shape_39.setTransform(27,1.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgCAdIAFgUIgMAAIgIAUIgbAAIAWg5IAZAAIgGAVIANAAIAIgVIAbAAIgWA5g");
	this.shape_40.setTransform(12.4,1.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgYAdIAWg5IAbAAIgWA5g");
	this.shape_41.setTransform(-1.5,1.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgYAdIAWg5IAbAAIgWA5g");
	this.shape_42.setTransform(32.8,1.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgbAZQgKgFgBgKQAAgOAOgLQALgJAOgEQAUgDASAEIgJAVQgDgGgJAAQgJAAgGADQgFAEgDAFQgCAHAHAEQAEACAUgDIgHASIgUACIgCAAQgNAAgJgFg");
	this.shape_43.setTransform(4.8,1.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AANAdIAPgoIgcAoIgVAAIADgoIgQAoIgaAAIAXg5IAgAAQAGAAAAALIgBATIAUgeIApAAIgWA5g");
	this.shape_44.setTransform(-9.6,1.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FAE22B").s().p("Ak+AEIAAgHIJ9AAIgDAHg");
	this.shape_45.setTransform(0.8,6.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1960A6").s().p("AmGBBIAAiBIMOAAIAACBg");
	this.shape_46.setTransform(8.1,2.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AmLBGIAAiLIMWAAIAACLg");
	this.shape_47.setTransform(8.1,2.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("ApaEHIDAoOIP1AAIAAIPg");

	this.addChild(this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.3,-26.4,120.7,52.8);


(lib.er = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._40();
	this.instance.setTransform(-52.1,-25,1.043,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.1,-25,104.3,50);


(lib.COSI = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6AsIAIgXQAPAIAVAAQARgBADgGQADgJgJgBIgMgDQgigFAKgbQAJgcAqAAQAXAAAVAHIgIAYQgPgIgUAAQgQABAAAGQgCAHAFABIAPADQAiAFgLAeQgFAPgOAHQgMAFgUAAQgcAAgUgIg");
	this.shape.setTransform(120.8,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaAyIAAgRIglAAIgLARIgnAAIA7hWQAHgNANABIArAAIAABigAACAIIAZAAIABgmg");
	this.shape_1.setTransform(108.1,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvAyIAahJIgdAAIAIgZIBeAAIgJAZIgdAAIgXBJg");
	this.shape_2.setTransform(100.9,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAyIgGhHIgZBHIghAAIAjhiIAoAAQALAAAAAPIAGA5IAahIIAhAAIgjBig");
	this.shape_3.setTransform(87.7,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaAyIAAgRIglAAIgLARIgnAAIA8hWQAFgNAOABIAsAAIAABigAACAIIAZAAIABgmg");
	this.shape_4.setTransform(73.2,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AguAyIAihiIAkAAIgYBIIAvAAIgJAag");
	this.shape_5.setTransform(62.7,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguAyIAjhiIAjAAIgYBIIAvAAIgJAag");
	this.shape_6.setTransform(52.9,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKAyIAIgXIg3AAIAKgbIArgnQAIgJAIAAIAuAAIgTA1IANAAIgIAWIgNAAIgIAXgAgXAFIAaAAIAOgng");
	this.shape_7.setTransform(39.8,-0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag+AyIAjhiIBZAAIgIAXIg2AAIgDAPIAvAAIgIAVIgvAAIgGAPIA1AAIgIAYg");
	this.shape_8.setTransform(25.9,-0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhAAyIAjhiIAsAAQAhAAAMAQQAKAPgJAXQgIAYgRAKQgQAKgXAAgAgSAZIAPAAQAKABAGgGQAHgGAFgOQAKgZgXAAIgMAAg");
	this.shape_9.setTransform(13.7,-0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAaAyIAAgRIglAAIgLARIgmAAIA6hWQAHgNANABIArAAIAABigAACAIIAZAAIABgmg");
	this.shape_10.setTransform(-3.4,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAFAyIgIgdIgMAAIgKAdIglAAIAihiIAxAAQA2AAgOApQgIASgYAEIAPAjgAgHgBIAJAAQALABAEgCQAFgCACgHQACgHgCgDQgDgEgKAAIgLAAg");
	this.shape_11.setTransform(-14.4,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag+AyIAihiIAuAAQAegBAKANQAJANgHAUQgHARgOAHQgNAFgXAAIgUAAIgIAYgAgJAEIAJAAQALAAAFgEQAFAAACgJQADgIgCgEQgDgEgKAAIgLAAg");
	this.shape_12.setTransform(-26,-0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVAyIAZhGIgvBGIghAAIABhIIgaBIIghAAIAjhiIAoAAQAOAAAAAQIAAAqIAmg6IA6AAIgjBig");
	this.shape_13.setTransform(-40.1,-0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag4AjQgLgPAKgYQAIgaARgKQAQgLAbAAQAiAAAMARQAKAQgJAYQgJAZgQAKQgRALgaAAQgiAAgMgRgAgJgVQgHAGgFAOQgKAcAZAAQAJAAAHgEQAHgHAFgOQALgcgaAAQgJAAgHAFg");
	this.shape_14.setTransform(-55,-0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgyAkQgMgQAKgaQAQgtA3AAQAUAAASAHIgIAZQgNgGgRAAQgOAAgHAFQgKAGgFAOQgJAaAfAAQARABANgEIgJAaQgMADgSAAQghAAgNgQg");
	this.shape_15.setTransform(-66.2,-0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAaAyIABgRIgmAAIgLARIgmAAIA7hWQAGgNANABIArAAIAABigAACAIIAZAAIABgmg");
	this.shape_16.setTransform(-83.5,-0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AguAyIAihiIAkAAIgYBIIAvAAIgJAag");
	this.shape_17.setTransform(-93.9,-0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLAyIgGhHIgZBHIghAAIAjhiIAoAAQAMAAgBAPIAGA5IAahIIAgAAIgiBig");
	this.shape_18.setTransform(-108.4,-0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag+AyIAjhiIBaAAIgIAXIg3AAIgDAPIAvAAIgIAVIgvAAIgFAPIA0AAIgIAYg");
	this.shape_19.setTransform(-120.3,-0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#414042").s().p("Ag6AsIAIgXQAPAIAVAAQARgBADgGQADgJgJgBIgMgCQgigHAKgaQAJgcAqAAQAXAAAVAHIgIAXQgPgHgUAAQgQABAAAGQgCAHAFABIAPADQAiAFgLAeQgFAPgOAHQgMAFgUAAQgcAAgUgIg");
	this.shape_20.setTransform(120.8,0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#414042").s().p("AAaAyIAAgSIglAAIgLASIgmAAIA6hWQAHgNANABIArAAIAABigAACAIIAZAAIABgmg");
	this.shape_21.setTransform(108.1,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#414042").s().p("AgvAyIAahJIgeAAIAJgZIBeAAIgJAZIgcAAIgYBJg");
	this.shape_22.setTransform(100.9,0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#414042").s().p("AgLAyIgGhHIgZBHIghAAIAjhiIAoAAQALAAAAAPIAGA4IAahHIAhAAIgjBig");
	this.shape_23.setTransform(87.7,0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#414042").s().p("AAaAyIAAgSIglAAIgLASIgnAAIA8hWQAFgNAOABIArAAIAABigAACAIIAZAAIABgmg");
	this.shape_24.setTransform(73.2,0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#414042").s().p("AguAyIAihiIAkAAIgYBIIAvAAIgJAag");
	this.shape_25.setTransform(62.7,0.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#414042").s().p("AguAyIAjhiIAjAAIgYBIIAvAAIgJAag");
	this.shape_26.setTransform(52.9,0.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#414042").s().p("AgKAyIAHgWIg2AAIAJgcIAsgnQAIgJAIAAIAuAAIgTA1IANAAIgHAXIgOAAIgIAWgAgXAFIAaAAIAPgng");
	this.shape_27.setTransform(39.8,0.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#414042").s().p("Ag+AyIAjhiIBZAAIgIAXIg2AAIgDAPIAvAAIgIAVIgvAAIgGAPIA1AAIgIAYg");
	this.shape_28.setTransform(25.9,0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#414042").s().p("AhAAyIAjhiIAsAAQAhAAAMAQQAKAOgJAYQgIAXgRALQgQAKgXAAgAgSAZIAPAAQAKABAGgGQAHgFAFgOQAKgZgXAAIgMAAg");
	this.shape_29.setTransform(13.7,0.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#414042").s().p("AAbAyIAAgSIgmAAIgLASIgmAAIA6hWQAHgNANABIArAAIAABigAACAIIAZAAIABgmg");
	this.shape_30.setTransform(-3.4,0.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#414042").s().p("AAFAyIgIgdIgMAAIgKAdIglAAIAihiIAxAAQA2AAgOApQgIASgYAEIAPAjgAgHgBIAJAAQALABAEgCQAFgCACgHQACgIgCgCQgDgEgKAAIgLAAg");
	this.shape_31.setTransform(-14.4,0.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#414042").s().p("Ag+AyIAihiIAuAAQAegBAKANQAJANgHAUQgHAQgOAIQgNAFgXAAIgUAAIgIAYgAgJAEIAJAAQALAAAFgDQAFgCACgIQADgIgCgEQgDgEgKAAIgLAAg");
	this.shape_32.setTransform(-26,0.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#414042").s().p("AAVAyIAZhHIgvBHIghAAIABhIIgaBIIghAAIAjhiIAoAAQAOAAAAAQIAAAqIAmg6IA6AAIgjBig");
	this.shape_33.setTransform(-40.1,0.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#414042").s().p("Ag4AjQgLgPAKgYQAIgZARgLQAQgLAbAAQAiAAAMARQAKAQgJAYQgJAZgQAKQgRALgaAAQgiAAgMgRgAgJgVQgHAGgFAOQgKAdAZAAQAJgBAHgEQAHgGAFgPQALgcgaAAQgJAAgHAFg");
	this.shape_34.setTransform(-55,0.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#414042").s().p("AgyAkQgMgQAKgaQAQgtA3AAQAUAAASAHIgIAZQgNgGgRAAQgbAAgJAZQgJAaAfAAQARAAANgDIgJAaQgMADgSAAQghAAgNgQg");
	this.shape_35.setTransform(-66.2,0.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#414042").s().p("AAaAyIABgSIgmAAIgLASIgmAAIA7hWQAGgNANABIArAAIAABigAACAIIAZAAIABgmg");
	this.shape_36.setTransform(-83.5,0.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#414042").s().p("AguAyIAihiIAkAAIgYBIIAvAAIgJAag");
	this.shape_37.setTransform(-93.9,0.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#414042").s().p("AgLAyIgGhHIgaBHIggAAIAjhiIAoAAQAMAAgBAPIAGA4IAahHIAgAAIgiBig");
	this.shape_38.setTransform(-108.4,0.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#414042").s().p("Ag+AyIAjhiIBaAAIgIAXIg3AAIgDAPIAvAAIgIAVIgvAAIgFAPIA0AAIgIAYg");
	this.shape_39.setTransform(-120.3,0.5);

	this.addChild(this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.6,-5.8,253.4,11.5);


(lib.BTTT = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE32B").s().p("AgYAjIAUg1IAMAAIgSA1gAgDgWIANgMIAPAAIgRAMg");
	this.shape.setTransform(43.6,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEE32B").s().p("AgeAVQgFgHAEgLIALgdIAPAAIgMAeQgFANAPAAQAKAAAFgNIAMgeIAOAAIgMAeQgEAOgIAEQgIAGgLAAQgPgBgGgGg");
	this.shape_1.setTransform(38.3,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEE32B").s().p("AgOASQgZgEAJgZQAJgZAbAAQASAAAGAJQAGAIgFAPQgJAXgZAAQgEAJAJgBIAHAAIgDAJIgGABQgVAAAHgTgAgQgJQgHARATAAQAHABAFgEQAFgEAEgIQAHgTgTAAQgOAAgHARg");
	this.shape_2.setTransform(31.1,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEE32B").s().p("AASAbIgBgMIgYAAIgIAMIgPAAIAigwQAEgFAFAAIAQAAIACA1gAAAAFIARAAIAAgZg");
	this.shape_3.setTransform(23.7,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEE32B").s().p("AgfAXIAEgJQALAEAKAAQALAAACgGQADgGgIgBIgHgCQgRgDAFgNQAEgOAVAAQANAAALAFIgDAJQgKgEgLAAQgKAAgBAFQgDAFAGACIAJACQASADgGAOQgFAOgUAAQgQAAgLgFg");
	this.shape_4.setTransform(16.3,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEE32B").s().p("AAMAjIgBgMIgYAAIgIAMIgPAAIAkgwQACgFAFAAIAQAAIADA1gAgGANIARAAIAAgZgAAHgWIAPgMIAPAAIgRAMg");
	this.shape_5.setTransform(10.1,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEE32B").s().p("AAOAbIAQgqIggAqIgOAAIgCgrIgQArIgNAAIAUg1IAOAAQAHAAAAAHIACAfIAdgmIAXAAIgUA1g");
	this.shape_6.setTransform(2.6,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEE32B").s().p("AghAbIAUg1IAvAAIgEAKIggAAIgFANIAdAAIgEAIIgcAAIgFAMIAgAAIgDAKg");
	this.shape_7.setTransform(-6.8,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEE32B").s().p("AgaAUQgGgKAFgMQAJgZAcAAQAKAAAKAEIgDAKQgIgEgKAAQgRAAgFARQgHARAUAAQAKAAAHgCIgEALQgHACgIAAQgRAAgHgIg");
	this.shape_8.setTransform(-12.7,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEE32B").s().p("AgdATQgGgJAFgMQAJgZAbAAQASAAAGAJQAGAIgFANQgKAZgaAAQgSAAgGgJgAgQAAQgHARATAAQAOABAHgSQAHgRgTAAQgOAAgHARg");
	this.shape_9.setTransform(-19.5,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEE32B").s().p("AAAAbIgKgqIgQAqIgMAAIATg1IAPAAQAEAAAAAGIAKAkIAQgqIAOAAIgUA1g");
	this.shape_10.setTransform(-26.8,0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEE32B").s().p("AgdATQgFgJAFgMQAIgZAbAAQASAAAGAJQAGAIgFANQgKAZgaAAQgSAAgGgJgAgQAAQgHARAUAAQANABAGgSQAHgRgSAAQgOAAgHARg");
	this.shape_11.setTransform(-34,0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEE32B").s().p("AgaAUQgGgKAFgMQAJgZAcAAQALAAAJAEIgDAKQgIgEgJAAQgSAAgFARQgHARAUAAQAKAAAHgCIgEALQgHACgIAAQgRAAgHgIg");
	this.shape_12.setTransform(-40.1,0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("An4BOIAAicIPxAAIAACcg");

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.6,-7.9,101.2,15.8);


// stage content:
(lib._300x50_op = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_143 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(143).call(this.frame_143).wait(2));

	// FlashAICB
	this.instance = new lib.PORID();
	this.instance.setTransform(373.4,26.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(126).to({_off:false},0).wait(1).to({x:356.7},0).wait(1).to({x:340},0).wait(1).to({x:323.2},0).wait(1).to({x:306.5},0).wait(1).to({x:289.8},0).wait(1).to({x:273.1},0).wait(1).to({x:256.4},0).wait(1).to({x:239.7},0).wait(9).to({_off:true},1).wait(1));

	// FlashAICB
	this.instance_1 = new lib.BTTT();
	this.instance_1.setTransform(-69.5,23.9);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(125).to({_off:false},0).wait(1).to({x:-36.9},0).wait(1).to({x:-4.3},0).wait(1).to({x:28.3},0).wait(1).to({x:60.9},0).wait(1).to({x:93.5},0).wait(13).to({_off:true},1).wait(1));

	// Layer 9
	this.instance_2 = new lib.COSI();
	this.instance_2.setTransform(-187.4,25);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(77).to({_off:false},0).wait(1).to({x:-156.8},0).wait(1).to({x:-126.1},0).wait(1).to({x:-95.4},0).wait(1).to({x:-64.7},0).wait(1).to({x:-34.1},0).wait(1).to({x:-3.4},0).wait(1).to({x:27.3},0).wait(1).to({x:58},0).wait(1).to({x:88.6},0).wait(1).to({x:119.3},0).wait(1).to({x:150},0).wait(37).to({_off:true},1).wait(19));

	// Layer 7
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(-261.2,25,1.088,1.088);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off:false},0).wait(1).to({regX:70.5,x:-147.2},0).wait(1).to({x:-109.8},0).wait(1).to({x:-72.5},0).wait(1).to({x:-35.2},0).wait(1).to({x:2.2},0).wait(1).to({x:39.5},0).wait(1).to({x:76.8},0).wait(1).to({x:114.1},0).wait(1).to({x:151.5},0).wait(48).to({_off:true},1).wait(67));

	// er
	this.instance_4 = new lib.er();
	this.instance_4.setTransform(250,-92);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).wait(1).to({y:-77.4},0).wait(1).to({y:-62.7},0).wait(1).to({y:-48.1},0).wait(1).to({y:-33.5},0).wait(1).to({y:-18.9},0).wait(1).to({y:-4.2},0).wait(1).to({y:10.4},0).wait(1).to({y:25},0).wait(129).to({_off:true},1).wait(1));

	// we
	this.instance_5 = new lib.we();
	this.instance_5.setTransform(150,130);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1).to({y:118.3},0).wait(1).to({y:106.7},0).wait(1).to({y:95},0).wait(1).to({y:83.3},0).wait(1).to({y:71.7},0).wait(1).to({y:60},0).wait(1).to({y:48.3},0).wait(1).to({y:36.7},0).wait(1).to({y:25},0).wait(130).to({_off:true},1).wait(1));

	// qw
	this.instance_6 = new lib.qw();
	this.instance_6.setTransform(50,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({y:-79.1},0).wait(1).to({y:-64.2},0).wait(1).to({y:-49.4},0).wait(1).to({y:-34.5},0).wait(1).to({y:-19.6},0).wait(1).to({y:-4.7},0).wait(1).to({y:10.1},0).wait(1).to({y:25},0).wait(137));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,-94,100,50);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;