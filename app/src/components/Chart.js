import React, { PropTypes } from 'react'
import Immutable from 'immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'
import ReactFauxDOM from 'react-faux-dom'
import d3 from 'd3'
import { Button } from 'react-bootstrap'

import { propToColumn } from '../util/PropToColumn'

class Chart extends React.Component {

    render() {
        const props = this.props;

        const column = propToColumn(props.property);
        let chartDataMap = Immutable.OrderedMap();
        props.data.forEach((e, k) => {
            if(e[0] > props.fromTime && e[0] < props.tillTime && !isNaN(e[column])) {
                        if(chartDataMap.has(e[0])) {
                            chartDataMap = chartDataMap.set(e[0], (chartDataMap.get(e[0]) + e[column]) / 2);
                        } else {
                            chartDataMap = chartDataMap.set(e[0], e[column]);
                        }
                    }
        });


        const chartData = [];
        chartDataMap.forEach((v, k) => {
            chartData.push({date: k, value: v});
        });
        
        console.log(chartData);

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

        svg.append("path")
            .datum(chartData)
            .attr("class", "line")
            .attr("d", line);

        
        return (
            <div className='chart'>
                <div className='row chartTitle'>
                    <div className='col-md-11'>
                        <p className='text-right'><h5>{props.property}</h5></p>
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
  fromTime: PropTypes.object.isRequired,
  tillTime: PropTypes.object.isRequired,
  toggleProperty: PropTypes.func.isRequired
}

export default Chart