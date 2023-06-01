# Belly Button Biodiversity Dashboard

![Bacteria by filterforge.com](Images/bacteria.jpg)

This interactive dashboard allows you to explore the fascinating world of the Belly Button Biodiversity dataset. The dataset catalogs the microbial species that colonize human navels and provides valuable insights into their diversity.

## Overview

The Belly Button Biodiversity dataset reveals that a small number of microbial species, known as operational taxonomic units (OTUs), are present in more than 70% of people, while the rest are relatively rare. This dashboard provides visualizations and information to help you explore this dataset.

## Instructions

Follow the steps below to interact with the dashboard:

### Step 1: Plotly

1. The dashboard uses the D3 library to read the `samples.json` file.

2. A horizontal bar chart is displayed with a dropdown menu to select an individual. The chart shows the top 10 OTUs found in that individual.

    - The bar chart uses the `sample_values` as the values for the bars.
  
    - The `otu_ids` are used as labels for the bar chart.
  
    - The hovertext for the chart is based on the `otu_labels`.

    ![bar Chart](Images/hw01.png)

3. A bubble chart is displayed to visualize each sample.

    - The x-axis represents the `otu_ids`.
  
    - The y-axis represents the `sample_values`.
  
    - The marker size represents the `sample_values`.
  
    - The marker colors represent the `otu_ids`.
  
    - The text values are based on the `otu_labels`.

    ![Bubble Chart](Images/bubble_chart.png)

4. The dashboard displays the sample metadata, which includes demographic information for an individual.

5. The dashboard also presents each key-value pair from the metadata JSON object.

    ![Sample Metadata](Images/hw03.png)

6. All the plots and information are updated whenever a new sample is selected from the dropdown menu.

## Advanced Challenge Assignment (Optional)

The following task is optional and represents an advanced challenge:

- The dashboard includes a Gauge Chart to plot the weekly washing frequency of the individual.

- The gauge chart is adapted from the [Plotly.js documentation](https://plot.ly/javascript/gauge-charts/) and accounts for values ranging from 0 through 9.

- The chart is updated dynamically whenever a new sample is selected.

    ![Weekly Washing Frequency Gauge](Images/gauge.png)

## Deployment

The dashboard can be deployed to a free static page hosting service such as GitHub Pages. Please submit the links to your deployment and your GitHub repository.

## Hints

Here are some hints to assist you while working on the assignment:

- Use `console.log` inside your JavaScript code to inspect the data at each step.

- Refer to the [Plotly.js documentation](https://plot.ly/javascript/) for guidance on building the plots.

### About the Data

The Belly Button Biodiversity dataset was collected by Hulcr, J. et al. (2012) in their study titled _"A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable"_. You can retrieve more information and the data from [this source](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/).

- - -

© 2019 Trilogy Education Services

