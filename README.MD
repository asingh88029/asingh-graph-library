# asingh-graph-library for React

This is a simple and easy-to-use library for creating bar charts in your React applications.

## Installation

1. If you don't already have a React application, you can create one using `npx create-react-app`
2. Install the library using `npm i asingh-graph-library`
3. Import the `BarChart` component from the library: `import {BarChart} from "asingh-graph-library"`

## Usage

To use the `BarChart` component, simply pass in the required props and see the chart come to life!

## Props

- `labels`: An array of label for the data points on the x-axis.
- `data`: An array of numerical data value corresponding to the labels.
- `barColor`: The color code in hex of the bars in the chart.
- `showCartesianGrid`: Whether to show the Cartesian grid lines.
- `showTooltip`: Whether to show tooltips on hover.
- `width`: The width of the chart container.
- `height`: The height of the chart container.

## Example

```
import {BarChart} from "asingh-graph-library";

const App = ()=>{

    return(
    <>
        <BarChart/>
    </>
    )
    
}

export default App;
```
![Default Bar Chart](https://res.cloudinary.com/ddbryywjd/image/upload/v1712685575/Screenshot_2024-04-09_at_11.29.11_PM_yyanyl.png "Default Bar Chart")

```
import {BarChart} from "asingh-graph-library";

const App = ()=>{

    return(
    <>
        <BarChart
            labels={['Jan', 'Feb', 'Mar', 'Apr', 'May']}
            data={[10, 20, 30, 40, 50]}
            barColor="#4caf50"
            showCartesianGrid
            showTooltip
            width={500}
            height={300}
        />
    </>
    )
    
}

export default App;
```

![Default Bar Chart](https://res.cloudinary.com/ddbryywjd/image/upload/v1712685963/Screenshot_2024-04-09_at_11.35.51_PM_r8tml3.png "Default Bar Chart")

This will create a bar chart with the following specifications:

- Labels: Jan, Feb, Mar, Apr, May
- Data: 10, 20, 30, 40, 50
- Bar color: "#4CAF50" (green)
- Cartesian grid lines: Shown
- Tooltips: Shown
- Width: 500px
- Height: 300px

## Enjoy creating beautiful and easy-to-understand bar charts in your React applications with the Asingh Graph Library.

