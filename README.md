### flot
---
https://github.com/flot/flot

http://www.flotcharts.org/

https://github.com/flot/flot/blob/master/API.md

.jq

```
<div id="placeholder" style="width:600px;height:300px"></div>
```

```js
$.plot($(), data, options);
$.plot($("#placeholder"), [ [0, 0], [1, 1] ], { yaxis: { max: 1 } });

sorted: function(a, b){
  return a.label == b.label ? 0 : (
    a.label > b.label ? 1 : -1
  )
}
```

```js
function(plot, eventHolder){
  eventHolder.mousedown(functin(e){
    alert("You pressed the mouse at " + e.pageX + " " + e.pageY);
  });
}

function multiply(plot, series, datapoints){
  var points = datapoints.points, ps = datapoints.pointsize;
  for(var i = 0; i < points.length; i += ps)
    points[i + 1] *= 2;
}

function hellohook(plot, canvascontext) { alert("hello!"); };
var plot = $.plot(placeholder, data, { hooks: { draw: [hellohook] } });

var series = plot.getData();
for(var i = 0; i < series.length; ++i)
  alert(series[i].color);

o = pointOffset({ x: xpos, y: ypos, xaxis: 2, yaxis: 3 })

bars: {
  show: true,
  lineWidth: 0,
  fill: true,
  fillColor: { colors: [ { opacity: 0.8 }, { opacity: 0.1 } ] }
}

$.plot($("#placeholder"), [ { label: "Foo", data: [[0, 10], [7, 3]] } ], ...);

item: {
  datapoint: the point, e.g. [0, 2]
  dataIndex: the index of the point in the data array
  series: the series object
  seriesIndex: the index of the series
  pageX, pageY: the global screen coordinates of the point
}

$.plot($("#placeholder"), [ d ], { grid: { clickable: true } });
$("#placeholder").bind("plotclick", function(event, pos, item){
  alert("You clicked at " + pos.x + ", " + pos.y);
  if(item){
    highlight(item.series, item.datapoint);
    alert("You clicked a point!");
  }
});

markings: function(axes){
  var markings = [];
  for(var x = Math.floor(axes.xaxis.min); x < axes.xaxis.max; x += 2)
    markings.push({ xaxis: { from: x, to: x + 1 } });
  return markings;
}

function cross(ctx, x, y, radius, shadow){
  var size = radius * Math.sqrt(Math.PI) / 2;
  ctx.moveTo(x - size, y - size);
  ctx.lineTo(x + size, y + size);
  ctx.moveTo(x - size, y + size);
  ctx.lineTo(x + size, y = size);
}

var options = {
  series: {
    lines: { show: true, fill: true, fillColor: "rgba(255, 255, 255, 0.8)" },
    points: { show: true, fill: false }
  }
};

tickFormatter: function(val, axis){
  var d = new Data(val);
  return d.getUTCDate() + "/" + (d.getUTCMonth() + 1);
}
```

