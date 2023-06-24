import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "@/styles/Filter.module.css";
import Charts from "@/components/Charts";


export default function Filter() {
  // filter type and search type states
  const [filterType, setFilterType] = useState("topic");
  const [searchInput, setSearchInput] = useState("oil");

  // chart data states
  const [relevanceData, setRelevanceData] = useState([]);
  const [likelihoodData, setLikelihoodData] = useState([]);
  const [intensityData, setIntensityData] = useState([]);
  const [topicsData, setTopicsData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [regiondata, setRegiondata] = useState([]);
  const [insightData, setInsightData] = useState([]);

  // just an array of all states
  const chartTabArray = [
    relevanceData,
    likelihoodData,
    intensityData,
    topicsData,
    countryData,
    regiondata,
    insightData,
  ];

  // function to fetch data from backend API and set in the data states
  const fetchData = async () => {
    const fetchedData = await axios.get(
      `http://localhost:8080/api/filter/${filterType}?${filterType}Name=${searchInput}`
    );
    console.log(fetchedData)
    setRelevanceData(fetchedData.data.data.relevance);
    setLikelihoodData(fetchedData.data.data.likelihood);
    setIntensityData(fetchedData.data.data.intensity);
    setTopicsData(fetchedData.data.data.topic);
    setCountryData(fetchedData.data.data.country);
    setRegiondata(fetchedData.data.data.region);
    setInsightData(fetchedData.data.data.insight);
  };

  // useEffect to fetch data on page load whenever filterType or searchInput changes
  useEffect(() => {
    fetchData();
  }, [filterType, searchInput]);

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  // ------------------ Form submission ------------------
  const [titleInput, setTitleInput] = useState();
  const [likelihoodInput, setLikelihoodInput] = useState();
  const [relevanceInput, setRelevanceInput] = useState();
  const [topicInput, setTopicInput] = useState();

  const input1ChangeHandler = (event) => {
    setTitleInput(event.target.value)
  };
  const input2ChangeHandler = (event) => {
    setLikelihoodInput(event.target.value)
  };
  const input3ChangeHandler = (event) => {
    setRelevanceInput(event.target.value)
  };
  const input4ChangeHandler = (event) => {
    setTopicInput(event.target.value)
  };

  const responseBody = {titleInput: "", likelihoodInput: "", relevanceInput: "0" , topicInput: ""}
  const onSubmitHandler = (event) => {
      event.preventDefault()
      responseBody.titleInput = titleInput
      responseBody.likelihoodInput = likelihoodInput
      responseBody.relevanceInput = relevanceInput
      responseBody.topicInput = topicInput
      fetch("http://localhost:3000/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        title: titleInput,
        likelihood: likelihoodInput,
        relevance: relevanceInput,
        topic: topicInput,
      }),
    })
      .then(() => {alert("Form submitted successfully")})
  };
	//Form submission happens here
  return (
    <>
      <div className={styles.filterComponentWrapper}>
        <div className={styles.filterWrapper}>
          <FormControl>
            <InputLabel
              id="demo-simple-select-label"
              className={styles.filterLabel}
            >
              Filter
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterType}
              label="filterType"
              onChange={handleFilterChange}
              className={styles.filterSelector}
            >
              <MenuItem value="topic"> Topics </MenuItem>
              <MenuItem value="sector"> Sector </MenuItem>
              <MenuItem value="region"> Region </MenuItem>
              <MenuItem value="pestle"> Pestle </MenuItem>
              <MenuItem value="source"> Source </MenuItem>
              <MenuItem value="country"> Country</MenuItem>
            </Select>
            
          </FormControl>
          <input
            type="text"
            placeholder="Search"
            className={styles.filterSearchInput}
            onChange={handleSearchChange}
          />
        </div>

        <div className={styles.filterInputWrapper} >
        <form action="/" method="post" onSubmit={onSubmitHandler}>
        <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={input1ChangeHandler}            
            className={styles.filterInput}
            required
          />
          <input
            type="number"
            name="likelihood"
            placeholder="Likelihood"
            onChange={input2ChangeHandler}
            className={styles.filterInput}
            required
          />
          <input
            type="number"
            name="relevance"
            placeholder="Relevance"
            onChange={input3ChangeHandler}
            className={styles.filterInput}
            required
          />
          <input
            type="text"
            name="topic"
            placeholder="Topic"
            onChange={input4ChangeHandler}
            className={styles.filterInput}
            required
          />
          <button value="submit" className={styles.filterInput}>Submit</button>
        </form>
        
        </div>
        <Charts chartTabArray={chartTabArray} />
      </div>
    </>
  );
}
