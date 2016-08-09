var test_data = d3.csv("/data/venn_test.csv", function(error, data) {
	if (error) throw error;
	console.log("venn_test.csv loaded");

	var topic1_count = _.map(_.countBy(data, function(item){ return item.topics_1; }), function(count, name) {
		return {
			name: name,
			count: count
		};
	});

	console.log(data);
	console.log(topic1_count);

	var height = 200, width = 720, barWidth = 40, barOffset = 5;
	
	var demo = d3.selectAll("#data-canvas")
		.append('svg')
		.attr('width', width)
		.attr('height', height)
		.attr("style", "overflow: visible");
	var demo_bars = demo.selectAll('rect')
		.data(topic1_count)
		.enter().append('rect')
		.attr('width', barWidth)
		.attr('height', function (item) {
			return item.count;
		})
		.attr('x', function (item, i) {
			return i * (barWidth + barOffset) + barWidth;
		})
		.attr('y', function (item) {
			return height - item.count;
		})

	var demo_legend = demo.selectAll("text")
		.data(topic1_count)
		.enter().append("svg:text")
		.attr("x", function(datum, index) { return index * (barWidth+barOffset) + barWidth })
		.attr("y", height + 20)
		.attr("style", "font-size: 12; font-family: Helvetica, sans-serif")
		.text( function(datum) { return datum.name; })
		.attr("class", "xAxis")
		.attr("transform", "rotate(-65)" );

			
			
			
});