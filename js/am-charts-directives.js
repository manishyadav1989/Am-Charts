/**
 * Am charts angular js directives
 * This directive has many am types of chart
 **/
angular.module('amCharts', [])
.directive('columnChart', function(){
	return{
		restrict	: 'EA',
		template	: '<div id="columnChart"></div>',
		scope		: {
			data        : '=',
			position 	: '=',
			title 		: '=',
			xaxis 		: '=',
			yaxis		: '='
		},
		link		: function(scope, element, attrs){
						scope.$watchGroup(['data','position','title','xaxis','yaxis'], function(newValues, oldValues){
							scope.chart = AmCharts.makeChart("columnChart", {
								  "type": "serial",
								  "theme": "light",
								  "marginRight": 70,
								  "dataProvider": newValues[0],
								  "valueAxes": [{
								    "axisAlpha": 0,
								    "position": newValues[1],
								    "title": newValues[2]
								  }],
								  "startDuration": 1,
								  "graphs": [{
								    "balloonText": "<b>[[category]]: [[value]]</b>",
								    "fillColorsField": "color",
								    "fillAlphas": 0.9,
								    "lineAlpha": 0.2,
								    "type": "column",
								    "valueField": newValues[4]
								  }],
								  "chartCursor": {
								    "categoryBalloonEnabled": false,
								    "cursorAlpha": 0,
								    "zoomable": false
								  },
								  "categoryField": newValues[3],
								  "categoryAxis": {
								    "gridPosition": "start",
								    "labelRotation": 45
								  },
								  "export": {
								    "enabled": true
								  }
							});
						}, true);
		}
	}
}).directive('layeredColumnChart', function(){
	return{
		restrict	: 'EA',
		template	: '<div id="layeredColumnChart"></div>',
		scope		: {
			data        : '=',
			position 	: '=',
			title 		: '=',
			xaxis 		: '=',
			yfirst		: '=',
			ysecond		: '='
		},
		link		: function(scope, element, attrs){
						scope.$watchGroup(['data','position','title','xaxis','yfirst','ysecond'], function(newValues, oldValues){
							scope.chart = AmCharts.makeChart("layeredColumnChart", {
									    "theme": "light",
									    "type": "serial",
									    "dataProvider": newValues[0],
									    "valueAxes": [{
									        "unit": "%",
									        "position": newValues[1],
									        "title": newValues[2],
									    }],
									    "startDuration": 1,
									    "graphs": [{
									        "balloonText": "GDP grow in [[category]] (2004): <b>[[value]]</b>",
									        "fillAlphas": 0.9,
									        "lineAlpha": 0.2,
									        "title": "2004",
									        "type": "column",
									        "valueField": newValues[4]
									    }, {
									        "balloonText": "GDP grow in [[category]] (2005): <b>[[value]]</b>",
									        "fillAlphas": 0.9,
									        "lineAlpha": 0.2,
									        "title": "2005",
									        "type": "column",
									        "clustered":false,
									        "columnWidth":0.5,
									        "valueField": newValues[5]
									    }],
									    "plotAreaFillAlphas": 0.1,
									    "categoryField": newValues[3],
									    "categoryAxis": {
									        "gridPosition": "start"
									    },
									    "export": {
									    	"enabled": true
									     }
									});
						}, true);
		}
	}
}).directive('stackedColumnChart', function(){
	return{
		restrict	: 'EA',
		template	: '<div id="stackedColumnChart"></div>',
		scope		: {
			data        : '=',
			position 	: '=',
			title 		: '=',
			xaxis 		: '=',
			yfirst		: '=',
			ysecond		: '='
		},
		link		: function(scope, element, attrs){
					scope.$watchGroup(['data','position','title','xaxis','yfirst','ysecond'], function(newValues, oldValues){	
						scope.chart = AmCharts.makeChart("stackedColumnChart", {
						    "theme": "light",
						    "type": "serial",
						    "dataProvider": newValues[0],
						    "valueAxes": [{
						        "stackType": "3d",
						        "unit": "%",
						        "position": newValues[1],
						        "title": newValues[2],
						    }],
						    "startDuration": 1,
						    "graphs": [{
						        "balloonText": "GDP grow in [[category]] (2004): <b>[[value]]</b>",
						        "fillAlphas": 0.9,
						        "lineAlpha": 0.2,
						        "title": "2004",
						        "type": "column",
						        "valueField": newValues[4]
						    }, {
						        "balloonText": "GDP grow in [[category]] (2005): <b>[[value]]</b>",
						        "fillAlphas": 0.9,
						        "lineAlpha": 0.2,
						        "title": "2005",
						        "type": "column",
						        "valueField": newValues[5]
						    }],
						    "plotAreaFillAlphas": 0.1,
						    "depth3D": 60,
						    "angle": 30,
						    "categoryField": newValues[3],
						    "categoryAxis": {
						        "gridPosition": "start"
						    },
						    "export": {
						    	"enabled": true
						     }
						});
					}, true);
		}
	}
}).directive('clusteredColumnChart', function(){
	return{
		restrict	: 'EA',
		template	: '<div id="clusteredColumnChart"></div>',
		scope		: {
			data        : '=',
			position 	: '=',
			title 		: '=',
			xaxis 		: '=',
			yfirst		: '=',
			ysecond		: '='
		},
		link		: function(scope, element, attrs){
					scope.$watchGroup(['data','position','title','xaxis','yfirst','ysecond'], function(newValues, oldValues){	
						scope.chart = AmCharts.makeChart("clusteredColumnChart", {
							"type": "serial",
						     "theme": "light",
							"categoryField": "year",
							"rotate": true,
							"startDuration": 1,
							"categoryAxis": {
								"gridPosition": "start",
								"position": newValues[1]
							},
							"trendLines": [],
							"graphs": [
								{
									"balloonText": "Income:[[value]]",
									"fillAlphas": 0.8,
									"id": "AmGraph-1",
									"lineAlpha": 0.2,
									"title": "Income",
									"type": "column",
									"valueField": "income"
								},
								{
									"balloonText": "Expenses:[[value]]",
									"fillAlphas": 0.8,
									"id": "AmGraph-2",
									"lineAlpha": 0.2,
									"title": "Expenses",
									"type": "column",
									"valueField": "expenses"
								}
							],
							"guides": [],
							"valueAxes": [
								{
									"id": "ValueAxis-1",
									"position": "top",
									"axisAlpha": 0
								}
							],
							"allLabels": [],
							"balloon": {},
							"titles": [],
							"dataProvider": newValues[0],
						    "export": {
						    	"enabled": true
						     }
						});
					}, true);
		}
	}
}).directive('lineChart', function(){
	return{
		restrict	: 'EA',
		template	: '<div id="lineChart"></div>',
		scope		: {
			data        : '=',
			position 	: '='
		},
		link		: function(scope, element, attrs){
						scope.$watchGroup(['data', 'position'], function(newValue, oldValues){
							scope.chart = AmCharts.makeChart("lineChart", {
							    "type": "serial",
							    "theme": "light",
							    "dataProvider": newValue[0],
							    "valueAxes": [{
							        "axisAlpha": 0,
							        "dashLength": 4,
							        "position": newValue[1]
							    }],
							    "graphs": [{
							        "bulletSize": 14,
							        "customBullet": "https://www.amcharts.com/lib/3/images/star.png?x",
							        "customBulletField": "customBullet",
							        "valueField": "value",
							         "balloonText":"<div style='margin:10px; text-align:left;'><span style='font-size:13px'>[[category]]</span><br><span style='font-size:18px'>Value:[[value]]</span>",
							    }],
							    "marginTop": 20,
							    "marginRight": 70,
							    "marginLeft": 40,
							    "marginBottom": 20,
							    "chartCursor": {
							        "graphBulletSize": 1.5,
							     	"zoomable":false,
							      	"valueZoomable":true,
							         "cursorAlpha":0,
							         "valueLineEnabled":true,
							         "valueLineBalloonEnabled":true,
							         "valueLineAlpha":0.2
							    },
							    "autoMargins": false,
							    "dataDateFormat": "YYYY-MM-DD",
							    "categoryField": "date",
							    "valueScrollbar":{
							      "offset":30
							    },
							    "categoryAxis": {
							        "parseDates": true,
							        "axisAlpha": 0,
							        "gridAlpha": 0,
							        "inside": true,
							        "tickLength": 0
							    },
							    "export": {
							        "enabled": true
							    }
							});
						}, true);
		}
	}
}).directive('threedPieChart', function(){
	return{
		restrict	: 'EA',
		template	: '<div id="threedPieChart"></div>',
		scope 		: {
				data : '=',
				title: '='
		},
		link		: function(scope, element, attrs){
						scope.$watchGroup(['data', 'title'], function(newValues, oldValues){
							scope.chart = AmCharts.makeChart( "threedPieChart", {
							  "type": "pie",
							  "theme": "light",
							  "dataProvider": newValues[0],
							  "valueField": "value",
							  "titleField": newValues[1],
							  "outlineAlpha": 0.4,
							  "depth3D": 15,
							  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
							  "angle": 30,
							  "export": {
							    "enabled": true
							  }
							});
						}, true);						
		}
	}
}).directive('pieChartWithLegend', function(){
	return{
		restrict	: 'EA',
		template	: '<div id="pieChartWithLegend"></div>',
		scope 		: {
			data 	: '=',
			title 	: '=',
			position: '=' 
		},
		link		: function(scope, element, attrs){
						scope.$watchGroup(['data','title','position'], function(newValues, oldValues){
							var chart = AmCharts.makeChart("pieChartWithLegend", {
							  "type": "pie",
							  "startDuration": 0,
							   "theme": "light",
							  "addClassNames": true,
							  "legend":{
							   	"position": newValues[2],
							    "marginRight":100,
							    "autoMargins":false
							  },
							  "innerRadius": "30%",
							  "defs": {
							    "filter": [{
							      "id": "shadow",
							      "width": "200%",
							      "height": "200%",
							      "feOffset": {
							        "result": "offOut",
							        "in": "SourceAlpha",
							        "dx": 0,
							        "dy": 0
							      },
							      "feGaussianBlur": {
							        "result": "blurOut",
							        "in": "offOut",
							        "stdDeviation": 5
							      },
							      "feBlend": {
							        "in": "SourceGraphic",
							        "in2": "blurOut",
							        "mode": "normal"
							      }
							    }]
							  },
							  "dataProvider": newValues[0],
							  "valueField": "litres",
							  "titleField": newValues[1],
							  "export": {
							    "enabled": true
							  }
							});

							chart.addListener("init", handleInit);

							chart.addListener("rollOverSlice", function(e) {
							  handleRollOver(e);
							});

							function handleInit(){
							  chart.legend.addListener("rollOverItem", handleRollOver);
							}

							function handleRollOver(e){
							  var wedge = e.dataItem.wedge.node;
							  wedge.parentNode.appendChild(wedge);  
							}
						}, true);
		}
	}
}).directive('threeDonutChart', function(){
	return{
		restrict	: 'EA',
		template	: '<div id="threeDonutChart"></div>',
		scope		: {
			data 		: '=',
			title 		: '=',
			titlefield 	: '=',
			valuefield 	: '='
		},
		link		: function(scope, element, attrs){
						scope.$watchGroup(['data', 'title', 'titlefield', 'valuefield'], function(newValues, oldValues){
							scope.chart = AmCharts.makeChart( "threeDonutChart", {
								  "type": "pie",
								  "theme": "light",
								  "titles": [ {
								    "text": newValues[1],
								    "size": 16
								  } ],
								  "dataProvider": newValues[0],
								  "valueField": newValues[3],
								  "titleField": newValues[2],
								  "startEffect": "elastic",
								  "startDuration": 2,
								  "labelRadius": 15,
								  "innerRadius": "50%",
								  "depth3D": 10,
								  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
								  "angle": 15,
								  "export": {
								    "enabled": true
								  }
								});
						}, true);
		}
	}
}).directive('pieChartBrokenSlices', function(){
	return{
		restrict	: 'EA',
		template	: '<div id="pieChartBrokenSlices"></div>',
		scope		: {
			data 		: '=',
			title 		: '='
		},
		link		: function(scope, element, attrs){
						scope.$watchGroup(['data','title'], function(newValues, oldValues){
							var chart;
							var legend;
							var selected;
							var types = newValues[0];

							function generateChartData() {
							  var chartData = [];
							  for (var i = 0; i < types.length; i++) {
							    if (i == selected) {
							      for (var x = 0; x < types[i].subs.length; x++) {
							        chartData.push({
							          type: types[i].subs[x].type,
							          percent: types[i].subs[x].percent,
							          color: types[i].color,
							          pulled: true
							        });
							      }
							    } else {
							      chartData.push({
							        type: types[i].type,
							        percent: types[i].percent,
							        color: types[i].color,
							        id: i
							      });
							    }
							  }
							  return chartData;
							}

							AmCharts.makeChart("pieChartBrokenSlices", {
							  "type": "pie",
							  "dataProvider": generateChartData(),
							  "labelText": "[[title]]: [[value]]",
							  "balloonText": "[[title]]: [[value]]",
							  "titleField": "type",
							  "valueField": "percent",
							  "outlineColor": "#FFFFFF",
							  "outlineAlpha": 0.8,
							  "outlineThickness": 2,
							  "colorField": "color",
							  "pulledField": "pulled",
							  "titles": [{
							    "text": newValues[1]
							  }],
							  "listeners": [{
							    "event": "clickSlice",
							    "method": function(event) {
							      var chart = event.chart;
							      if (event.dataItem.dataContext.id != undefined) {
							        selected = event.dataItem.dataContext.id;
							      } else {
							        selected = undefined;
							      }
							      chart.dataProvider = generateChartData();
							      chart.validateData();
							    }
							  }]
							});

						}, true);							
		}
	}
}).directive('smoothedLineChart', function(){
	return{
		restrict	: 'EA',
		template	: '<div id="smoothedLineChart"></div>',
		scope 		: {
			position 		: '=', 
			valuefield  	: '=',
			categoryfield	: '=',
			data 			: '='
		},
		link		: function(scope, element, attrs){
						scope.$watchGroup(['data', 'position', 'categoryfield', 'valuefield'], function(newValues, oldValues){
							var chart = AmCharts.makeChart("smoothedLineChart", {
							    "type": "serial",
							    "theme": "light",
							    "marginTop":0,
							    "marginRight": 80,
							    "dataProvider": newValues[0],
							    "valueAxes": [{
							        "axisAlpha": 0,
							        "position": newValues[1]
							    }],
							    "graphs": [{
							        "id":"g1",
							        "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
							        "bullet": "round",
							        "bulletSize": 8,         
							        "lineColor": "#d1655d",
							        "lineThickness": 2,
							        "negativeLineColor": "#637bb6",
							        "type": "smoothedLine",
							        "valueField": newValues[3]
							    }],
							    "chartScrollbar": {
							        "graph":"g1",
							        "gridAlpha":0,
							        "color":"#888888",
							        "scrollbarHeight":55,
							        "backgroundAlpha":0,
							        "selectedBackgroundAlpha":0.1,
							        "selectedBackgroundColor":"#888888",
							        "graphFillAlpha":0,
							        "autoGridCount":true,
							        "selectedGraphFillAlpha":0,
							        "graphLineAlpha":0.2,
							        "graphLineColor":"#c2c2c2",
							        "selectedGraphLineColor":"#888888",
							        "selectedGraphLineAlpha":1

							    },
							    "chartCursor": {
							        "categoryBalloonDateFormat": "YYYY",
							        "cursorAlpha": 0,
							        "valueLineEnabled":true,
							        "valueLineBalloonEnabled":true,
							        "valueLineAlpha":0.5,
							        "fullWidth":true
							    },
							    "dataDateFormat": "YYYY",
							    "categoryField": newValues[2],
							    "categoryAxis": {
							        "minPeriod": "YYYY",
							        "parseDates": true,
							        "minorGridAlpha": 0.1,
							        "minorGridEnabled": true
							    },
							    "export": {
							        "enabled": true
							    }
							});

							chart.addListener("rendered", zoomChart);
							if(chart.zoomChart){
								chart.zoomChart();
							}

							function zoomChart(){
							    chart.zoomToIndexes(Math.round(chart.dataProvider.length * 0.4), Math.round(chart.dataProvider.length * 0.55));
							}
						}, true);
		}
	}
}).directive('lineWithChangingColor', function(){
	return{
		restrict	: 'EA',
		template	: '<div id="lineWithChangingColor"></div>',
		scope 		: {
			title 		: '=', 
			valuefield  	: '=',
			categoryfield	: '=',
			data 			: '=',
			linecolor 		: '='
		},
		link		: function(scope, element, attrs){
						scope.$watchGroup(['data','title', 'categoryfield', 'valuefield', 'linecolor'], function(newValues, oldValues){
							var chart = AmCharts.makeChart("lineWithChangingColor", {
							    "type": "serial",
							    "theme": "light",
							    "marginRight": 80,
							    "dataProvider": newValues[0],
							    "balloon": {
							        "cornerRadius": 6,
							        "horizontalPadding": 15,
							        "verticalPadding": 10
							    },
							    "valueAxes": [{
							        "duration": "mm",
							        "durationUnits": {
							            "hh": "h ",
							            "mm": "min"
							        },
							        "axisAlpha": 0
							    }],
							    "graphs": [{
							        "bullet": "square",
							        "bulletBorderAlpha": 1,
							        "bulletBorderThickness": 1,
							        "fillAlphas": 0.3,
							        "fillColorsField": newValues[4],
							        "legendValueText": "[[value]]",
							        "lineColorField": newValues[4],
							        "title": newValues[1],
							        "valueField": newValues[3]
							    }],
							    "chartScrollbar": {

							    },
							    "chartCursor": {
							        "categoryBalloonDateFormat": "YYYY MMM DD",
							        "cursorAlpha": 0,
							        "fullWidth": true
							    },
							    "dataDateFormat": "YYYY-MM-DD",
							    "categoryField": newValues[2],
							    "categoryAxis": {
							        "dateFormats": [{
							            "period": "DD",
							            "format": "DD"
							        }, {
							            "period": "WW",
							            "format": "MMM DD"
							        }, {
							            "period": "MM",
							            "format": "MMM"
							        }, {
							            "period": "YYYY",
							            "format": "YYYY"
							        }],
							        "parseDates": true,
							        "autoGridCount": false,
							        "axisColor": "#555555",
							        "gridAlpha": 0,
							        "gridCount": 50
							    },
							    "export": {
							        "enabled": true        
							    }
							});

							chart.addListener("dataUpdated", zoomChart);

							function zoomChart() {
							    chart.zoomToDates(new Date(2012, 0, 3), new Date(2012, 0, 11));
							}
						}, true);
		}
	}
});