import React, { useState, useEffect } from "react";
import axios from "axios";
// import styles from "@/styles/Filter.module.css";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "@/styles/Charts.module.css";
import { style } from "d3";
import Insights from "./Insights";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Charts({ chartTabArray }) {
  const [lineChartData, setlineChartData] = useState(
    Array.from({ length: 50 }, () => Math.round(Math.random() * 100))
  );
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles.chartWrapper}>
      <Box className={styles.chartTabs}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Relevance" {...a11yProps(0)} />
            <Tab label="Likelihood" {...a11yProps(1)} />
            <Tab label="Intensity" {...a11yProps(2)} />
            <Tab label="Topics" {...a11yProps(3)} />
            <Tab label="Country" {...a11yProps(4)} />
            <Tab label="Region" {...a11yProps(5)} />
          </Tabs>
        </Box>
      </Box>
      <div className={styles.wrapAll}>
        <div className={styles.chartSection}>
          <BarChart
            className={styles.barChart}
            rawData={chartTabArray[value]}
          />
          <PieChart
            rawData={chartTabArray[value]}
            width={400}
            height={400}
            innerRadius={120}
            outerRadius={200}
            className={style.piechart}
          />
        </div>
        <Insights data={chartTabArray[6]} />
      </div>
    </div>
  );
}
