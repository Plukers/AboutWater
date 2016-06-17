import React, { PropTypes } from 'react'
import Immutable from 'immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'
import ReactFauxDOM from 'react-faux-dom'
import d3 from 'd3'
import { Button } from 'react-bootstrap'

import { propToColumn } from '../util/PropToColumn'

class Chart extends React.Component {

    /**
     * Calculetes the regression for a given regression object and sets the slope and yInterset in the given object as well as the line
     */
    calculateRegression(regressionObject, data) {

        const n = regressionObject.n;
        const sumDate = regressionObject.sumDate;
        const sumValue = regressionObject.sumValue;
        const dateTimesValue = regressionObject.dateTimesValue;
        const dateSquare = regressionObject.dateSquare;
        const valueSquare = regressionObject.valueSquare;

        const denominator = (n * dateSquare) - Math.pow(sumDate, 2);

        regressionObject.yIntercept = (sumValue * dateSquare - sumDate * dateTimesValue)/denominator;
        regressionObject.slope = ((n * dateTimesValue) - (sumDate * sumValue))/denominator;

        const slope = regressionObject.slope;
        const yIntercept = regressionObject.yIntercept;

        regressionObject.line.push({date: data[0].date, value: slope * data[0].date.getTime() + yIntercept});
        regressionObject.line.push({date: data[data.length - 1].date, value: slope * data[data.length - 1].date.getTime() + yIntercept});

        console.log(regressionObject);
    }

    render() {
        const props = this.props;

        const selectionExisting =  (0 !== this.props.selectedG0.size) || (0 !== this.props.selectedG1.size);

        let chartDataMap = Immutable.OrderedMap();
        let chartDataMapGN = Immutable.OrderedMap();
        let chartDataMapG0 = Immutable.OrderedMap();
        let chartDataMapG1 = Immutable.OrderedMap();

        props.data.forEach((e, k) => {
            if(selectionExisting) {
                if(this.props.selectedG0.has(e[propToColumn('Station.Number')])) {
                    if(chartDataMapG0.has(e[0])) {
                        chartDataMapG0 = chartDataMapG0.set(e[propToColumn('TimeStamp')], (chartDataMapG0.get(e[propToColumn('TimeStamp')]) + e[propToColumn(props.property)]) / 2);
                    } else {
                        chartDataMapG0 = chartDataMapG0.set(e[propToColumn('TimeStamp')], e[propToColumn(props.property)]);
                    }
                } else if(this.props.selectedG1.has(e[propToColumn('Station.Number')])) {
                    if(chartDataMapG1.has(e[0])) {
                        chartDataMapG1 = chartDataMapG1.set(e[propToColumn('TimeStamp')], (chartDataMapG1.get(e[propToColumn('TimeStamp')]) + e[propToColumn(props.property)]) / 2);
                    } else {
                        chartDataMapG1 = chartDataMapG1.set(e[propToColumn('TimeStamp')], e[propToColumn(props.property)]);
                    }
                } else {
                    if(chartDataMapGN.has(e[0])) {
                        chartDataMapGN = chartDataMapGN.set(e[propToColumn('TimeStamp')], (chartDataMapGN.get(e[propToColumn('TimeStamp')]) + e[propToColumn(props.property)]) / 2);
                    } else {
                        chartDataMapGN = chartDataMapGN.set(e[propToColumn('TimeStamp')], e[propToColumn(props.property)]);
                    }
                }
            }
            if(chartDataMap.has(e[0])) {
                chartDataMap = chartDataMap.set(e[propToColumn('TimeStamp')], (chartDataMap.get(e[propToColumn('TimeStamp')]) + e[propToColumn(props.property)]) / 2);
            } else {
                chartDataMap = chartDataMap.set(e[propToColumn('TimeStamp')], e[propToColumn(props.property)]);
            }
        });

        const chartDataRegression= { 
            n: 0,
            sumDate: 0,
            sumValue: 0,
            dateTimesValue: 0, 
            dateSquare: 0, 
            valueSquare: 0,
            slope: 0,
            yIntercept: 0,
            line: []
        };

        const chartData = [];
        chartDataMap.forEach((v, k) => {
            chartData.push({date: k, value: v});

            const dateTime = k.getTime();
            
            chartDataRegression.sumDate += dateTime;
            chartDataRegression.sumValue += v;
            chartDataRegression.dateTimesValue += dateTime * v;
            chartDataRegression.dateSquare += Math.pow(dateTime, 2); 
            chartDataRegression.valueSquare += Math.pow(v, 2);
        });

        chartDataRegression.n = chartData.length;
        this.calculateRegression(chartDataRegression, chartData);

        if(selectionExisting) {

            const chartDataGNRegression= { 
                n: 0,
                sumDate: 0,
                sumValue: 0,
                dateTimesValue: 0, 
                dateSquare: 0, 
                valueSquare: 0,
                slope: 0,
                yIntercept: 0,
                line: []
            };

            const chartDataGN = [];
            chartDataMapGN.forEach((v, k) => {
                chartDataGN.push({date: k, value: v});

                const dateTime = k.getTime();

                chartDataGNRegression.sumDate += dateTime;
                chartDataGNRegression.sumValue += v;
                chartDataGNRegression.dateTimesValue += dateTime * v;
                chartDataGNRegression.dateSquare += Math.pow(dateTime, 2); 
                chartDataGNRegression.valueSquare += Math.pow(v, 2);
            });

            chartDataGNRegression.n = chartDataGN.length;

            this.calculateRegression(chartDataGNRegression , chartDataGN);

            const chartDataG0Regression= { 
                n: 0,
                sumDate: 0,
                sumValue: 0,
                dateTimesValue: 0, 
                dateSquare: 0, 
                valueSquare: 0,
                slope: 0,
                yIntercept: 0,
                line: []
            };
        
            const chartDataG0 = [];
            chartDataMapG0.forEach((v, k) => {
                chartDataG0.push({date: k, value: v});

                const dateTime = k.getTime();

                chartDataG0Regression.sumDate += dateTime;
                chartDataG0Regression.sumValue += v;
                chartDataG0Regression.dateTimesValue += dateTime * v;
                chartDataG0Regression.dateSquare += Math.pow(dateTime, 2); 
                chartDataG0Regression.valueSquare += Math.pow(v, 2);
            });

            chartDataG0Regression.n = chartDataG0.length;

            this.calculateRegression(chartDataG0Regression , chartDataG0);

            const chartDataG1Regression= { 
                n: 0,
                sumDate: 0,
                sumValue: 0,
                dateTimesValue: 0, 
                dateSquare: 0, 
                valueSquare: 0,
                slope: 0,
                yIntercept: 0,
                line: []
            };

            const chartDataG1 = [];
            chartDataMapG1.forEach((v, k) => {
                chartDataG1.push({date: k, value: v});

                const dateTime = k.getTime();

                chartDataG1Regression.sumDate += dateTime;
                chartDataG1Regression.sumValue += v;
                chartDataG1Regression.dateTimesValue += dateTime * v;
                chartDataG1Regression.dateSquare += Math.pow(dateTime, 2); 
                chartDataG1Regression.valueSquare += Math.pow(v, 2);
            });

            chartDataG1Regression.n = chartDataG1.length;

            this.calculateRegression(chartDataG1Regression, chartDataG1);

            }

            const margin = {top: 20, right: 20, bottom: 30, left: 50};
            const width = 870 - margin.left - margin.right;
            const height = 200 - margin.top - margin.bottom;

        const x = d3.time.scale()
            .range([0, width]);

        const y = d3.scale.linear()
           .range([height, 0]);
           

        const xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .ticks(7);

        const yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        const line = d3.svg.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.value); });

        const chart = ReactFauxDOM.createElement('div');
        const svg = d3.select(chart).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        x.domain(d3.extent(chartData, function(d) { return d.date; }));
        y.domain(d3.extent(chartData, function(d) { return d.value; }));

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end");

        if(selectionExisting) {

            svg.append("path")
                .datum(chartDataGN)
                .attr("class", "line-blue-bright")
                .attr("d", line);

            svg.append("path")
                .datum(chartDataGNRegression.line)
                .attr("class", "line-blue-bright")
                .style("stroke-dasharray", "10,10")
                .attr("d", line);

            svg.append("path")
                .datum(chartDataG0)
                .attr("class", "line-red")
                .attr("d", line);

            svg.append("path")
                .datum(chartDataG0Regression.line)
                .attr("class", "line-blue-bright")
                .style("stroke-dasharray", "10,10")
                .attr("d", line);

            svg.append("path")
                .datum(chartDataG1)
                .attr("class", "line-yellow")
                .attr("d", line);

            svg.append("path")
                .datum(chartDataG1Regression.line)
                .attr("class", "line-blue-bright")
                .style("stroke-dasharray", "10,10")
                .attr("d", line);

        } else {
            svg.append("path")
                .datum(chartData)
                .attr("class", "line-blue")
                .attr("d", line);

            svg.append("path")
                .datum(chartDataRegression.line)
                .attr("class", "line-blue")
                .style("stroke-dasharray", "10,10")
                .attr("d", line);
        }

        
        return (
            <div className='chart'>
                <div className='row chartTitle'>
                    <div className='col-md-11'>
                        <p className='text-right'>{props.property}</p>
                    </div>
                    <div className='col-md-1'>                        
                        <Button onClick={() => props.toggleProperty(props.property)}><span class="glyphicon glyphicon-star" />close</Button>
                    </div>
                </div>
                <div>
                    {chart.toReact()}
                </div>
                <hr />
            </div>
        )
    }
}

/*

*/

Chart.propTypes = {
  fromDepth: PropTypes.number.isRequired,
  tillDepth: PropTypes.number.isRequired,
  fromTime: PropTypes.object.isRequired,
  tillTime: PropTypes.object.isRequired,
  toggleProperty: PropTypes.func.isRequired,
  selectedG0: ImmutablePropTypes.set,
  selectedG1: ImmutablePropTypes.set
}

export default Chart