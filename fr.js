var plot = $.plot(placeholder, data, options)
var plot = $("#placeholder").plot(data, options).data("plot");

//Data
[ series1, series2, ...]
[ [x1, y1], [x2, y2], ...]
[ [1, 3], [2, 14.01], [35, 3.14] ]

{
  color: color or number
  data: rawdata
  label: string
  lines: specific lines options
  bars: specific bars options
  points: specific paints options
  xaxis: number
  yaxis: number
  clickable: boolean
  hoverable: boolean
  shadowSize: number
  highlightColor: color or number
}

{
  label: "y = 3",
  data: [[0, 3], [10, 3]]
}

[ { label: "Foo", data: [ [10, 1], [17, -14],[30, 5] ] },
  { label: "Bar", data: [ [11, 13], [19, 11], [30, -7] ] }
]

//
var options = {
  series: {
    lines: { show: true },
    points: { show: true }
  }
};
$.plot(placeholer, data, options);

//legend
legend: {
	show: boolean
	lebelFormatter: null or (fn: string, series object -> string)
	labelBoxBorderColor: color
	noColumns: number
	position: "ne" or "nw" or "se" or "sw"
	margin: number of pixels or [x margin, y margin]
	backgroundColor: null or color
	backgroundOpacity: number between 0 and 1
	container: null or jQuery object/DOM element/jQuery expression
	sorted: null/false, true, "ascending", "descending", "reverse", or a comparator
}

labelFormatter: function(label, series){
  return '<a href="#' + label + '">' + label + '</a>';
}

sorted: function(a, b){
  return a.label == b.label ? 0 : (
    a.label > b.label ? 1 : -1
  )
}

xaxis, yaxis: {
	show: null or true/false
	position: "bottom" or "top" or "left" or "right"
	mode: null or "time" ("time" requieres jquery.flot.time.js plugin)
	timezone: null, "browser" or timezone (only makes sense for mode: "time")
	color: null or color spec
	tickColor: null or color spec
	font: null or font spec object

	min: null or number
	max: null or number
	autoscalemargin: null or number

	transform: null or fn: number -> number
	inverseTransform: null or fn: number -> number

	ticks: null or number or ticks array or (fn: axis -> ticks array)
	tickSize: number or array
	minTickSize: number or array
	tickFormatter: (fn: number, object -> string) or string
	tickDecimals: null or number

	labelWidth: null or number
	labelHeight: null or number
	reserveSpace: null or true

	ticklength: null or number

	alignTicksWidthAzis: null or number
}

//
//<div class='flot-x-axis flot-x1-axis'>
//  <div class='flot-tick-label'>January 2018</div>
//  ...
//</div>

{
  size: 11,
  lineHeight: 13,
  style: "italic",
  weight: "bold"
  family: "sans-serif",
  variant: "small-caps",
  color: "#545454"
}

xaxis: {
  transform: function(v){ return Math.log(v); },
  inverseTransform: function(v){ return Math.exp(v); }
}

yaxis: {
  transform: function(v){ return -v; },
  inverseTransform: function(v){ return -v; }
}


ticks: [0, 1.2, 2.4]
ticks: [[0, "zero"], [1.2, "one mark"], [2.4, "two marks"]]

function piTickGenerator(axis){
  var res = [], i = Math.floor(axis.min / math.PI);
  do{
    var v = i * Math.PI;
    res.push([v, i + "\u03c0"]);
    ++i;
  } while(v < zxis.max);
  return res;
}

function formatter(val, axis){
  return val.toFixed(axis.tickDecimals);
}

function suffixFormatter(val, axis){
  if(val > 1000000)
    return (val / 1000000).toFixed(azis.tickDecimals) + " MB";
  else
    return (val / 1000).toFixed(axis.tickDecimals) + " kB";
  else
    return val.toFixed(axis.tickDecimals) + " B";
}


xaxes: []
yaxes: []

{
  xaxes: [ { position: "top" } ],
  yaxes: [ { }, { position: "right", min: 20 } ]
}


alert((new Data()).getTime())
//.php
strtotime("2018-02-15 UTC") * 1000
//.py
calendar.timegm(datetime_object.timetuple()) * 1000
//.rb
Time.now.to_i * 1000
DateTime.now.to_i * 1000
ActiveSupport::TimeZone.new('Asis/Shanghai').now.to_i * 1000




