// Belly Button Biodiversity - app.js

// Color palette for Gauge Chart
var arrColorsG = ["#5899DA", "#E8743B", "#19A979", "#ED4A7B", "#945ECF", "#13A4B4", "#525DF4", "#BF399E", "#6C8893", "white"];

// Define the data URL
var dataUrl = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Function to fetch data
function fetchData(url) {
  return d3.json(url);
}

// Function to build metadata panel
function buildMetadata(sample) {
  fetchData(dataUrl).then((data) => {
    var metadata = data.metadata;
    var result = metadata.find(sampleobject => sampleobject.id == sample);

    var panel = d3.select("#sample-metadata");
    panel.html(""); // Clear previous content

    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key}: ${value}`);
    });
  }).catch((error) => {
    console.error("Error while fetching metadata:", error);
  });
}

// Function to build gauge chart
function buildGaugeChart(sample) {
  fetchData(dataUrl).then(data => {
    var metadata = data.metadata;
    var matchedSampleObj = metadata.filter(sampleData => sampleData["id"] === parseInt(sample));

    gaugeChart(matchedSampleObj[0]);
  }).catch((error) => {
    console.error("Error while fetching gauge chart data:", error);
  });
}

// Function to build bubble and bar charts
function buildCharts(sample) {
  fetchData(dataUrl).then((data) => {
    var samples = data.samples;
    var result = samples.find(sampleobject => sampleobject.id == sample);

    var ids = result.otu_ids;
    var labels = result.otu_labels;
    var values = result.sample_values;

    // Build a Bubble Chart
    var layoutBubble = {
      margin: { t: 0 },
      xaxis: { title: "OTU ID" },
      hovermode: "closest"
    };

    var dataBubble = [{
      x: ids,
      y: values,
      text: labels,
      mode: "markers",
      marker: {
        color: ids,
        size: values
      }
    }];

    Plotly.newPlot("bubble", dataBubble, layoutBubble);

    // Build a Bar Chart
    var barData = [{
      y: ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
      x: values.slice(0, 10).reverse(),
      text: labels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h"
    }];

    var barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      margin: { t: 30, l: 150 }
    };

    Plotly.newPlot("bar", barData, barLayout);
  }).catch((error) => {
    console.error("Error while fetching bubble and bar chart data:", error);
  });
}

// Initialize the dashboard
function init() {
  var selector = d3.select("#selDataset");

  fetchData(dataUrl).then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector.append("option").text(sample).property("value", sample);
    });

    // Event listener for ID dropdown change
    selector.on("change", function () {
      optionChanged(this.value); // Call the optionChanged function to update the charts and metadata
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    optionChanged(firstSample); // Call the optionChanged function to initialize with the default sample
  }).catch((error) => {
    console.error("Error while initializing:", error);
  });
}

// Function to handle dropdown change
function optionChanged(sample) {
  buildMetadata(sample);
  buildCharts(sample);
  buildGaugeChart(sample);
}

// Call the initialization function
init();
