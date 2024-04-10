# asingh-graph-library for React

This is a simple and easy-to-use library for creating tailwind powered responsive bar charts in your React applications.

## Installation

1. If you don't already have a React application, you can create one using `npx create-react-app`
2. Install the tailwind css in your React Application [Installation Guide](https://tailwindcss.com/docs/installation)
3. Install the library using `npm i asingh-graph-library`
3. Import the `BarChart` component from the library: `import {BarChart} from "asingh-graph-library"`

## Usage

To use the `BarChart` component, simply pass in the required props and see the chart come to life!

## Props

- `labels`: An array of label for the data points on the x-axis.
- `data`: An array of numerical data value corresponding to the labels.
- `barColor`: The color code in hex of the bars in the chart.
- `showCartesianGrid`: Whether to show the Cartesian grid lines.
- `showTooltip`: Whether to show tooltips on hover.

## Example

```
import {BarChart} from "asingh-graph-library";

const App = ()=>{

    return(
    <>
        <div>
            <BarChart/>
        </div>
    </>
    )
    
}

export default App;
```
![Default Bar Chart](https://res.cloudinary.com/ddbryywjd/image/upload/v1712760668/Screenshot_2024-04-10_at_8.20.57_PM_oqxzx3.png "Default Bar Chart")

```
import {BarChart} from "asingh-graph-library";

const App = ()=>{

    return(
    <>
        <div>
            <BarChart
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May']}
                data={[10, 20, 30, 40, 50]}
                barColor="#4caf50"
                showCartesianGrid
                showTooltip
            />
        </div>
    </>
    )
    
}

export default App;
```

![Bar Chart](https://res.cloudinary.com/ddbryywjd/image/upload/v1712760580/Screenshot_2024-04-10_at_8.19.11_PM_jmw4zs.png "Bar Chart")

This will create a bar chart with the following specifications:

- Labels: Jan, Feb, Mar, Apr, May
- Data: 10, 20, 30, 40, 50
- Bar color: "#4CAF50" (green)
- Cartesian grid lines: Shown
- Tooltips: Shown


```
import {BarChart} from "asingh-graph-library";

const App = ()=>{

    const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const data = [87, 22, 34, 11, 33, 98, 68, 45, 55, 90]
    

    return(
    <>
        <div style={{width: 600, height: 200}}>
          <BarChart labels={Months} data={data}/>
        </div>
    </>
    )
    
}

export default App;
```
![Parent Width And Height - Bar Chart](https://res.cloudinary.com/ddbryywjd/image/upload/v1712760912/Screenshot_2024-04-10_at_8.23.34_PM_uuumgm.png "Parent Width And Height - Bar Chart")


## Enjoy creating beautiful and easy-to-understand bar charts in your React applications with the Asingh Graph Library.

