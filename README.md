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

