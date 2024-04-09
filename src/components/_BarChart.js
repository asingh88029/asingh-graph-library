import React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Label} from 'recharts';


/******************************************************************************************************************
 * BarChart React Component that displays a bar chart with customizable options.
 * 
 * @param {Array<string>} labels - An array of labels for the data points on the x-axis.
 * @param {Array<number>} data - An array of numerical data values corresponding to the labels.
 * @param {string} barColor -  The color code in hex of the bars in the chart.
 * @param {boolean} showCartesianGrid - Whether to show the Cartesian grid lines.
 * @param {boolean} showTooltip - Whether to show tooltips on hover.
 * @param {number} width -  The width of the chart container.
 * @param {number} height - The height of the chart container.
 * 
 * @returns {JSX.Element} A React component that renders a bar chart with the provided data and options.
 *****************************************************************************************************************/
const _BarChart = ({labels, data, barColor, showCartesianGrid, showTooltip, width, height}) => {

  const GRAPH_DATA = labels.map((lable, index)=>{

    const data_length = data.length;

    return {
      "name" : lable,
      "value" : index <= data_length-1 ? data[index] : 0 // return 0, if value is not present in corresponding to respected label
    }
  })

  return (
    <BarChart width={width} height={height} data={GRAPH_DATA}>
      {showCartesianGrid && <CartesianGrid strokeDasharray="3 3" />}
      <XAxis dataKey="name"/>
      <YAxis/>
      {showTooltip && <Tooltip />}
      <Bar dataKey="value" fill={barColor} />   
    </BarChart>
  )

}

_BarChart.defaultProps = {
  labels : ['Label1', 'Label2', 'Label3', 'Label4', 'Label5'],
  data : [67, 98, 24, 99, 53],
  barColor : "#0000FF",
  showCartesianGrid : false,
  showTooltip : false,
  width : 730,
  height : 250
}

module.exports = _BarChart;