import React, { useState, useEffect } from "react";
// import Card from "./Card";
import Pagination from "@mui/material/Pagination";
import styles from "@/styles/Charts.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Link from "next/link";

function uniqBy(a, key) {
  var seen = {};
  return a.filter(function(item) {
      var k = key(item);
      return seen.hasOwnProperty(k) ? false : (seen[k] = true);
  })
}

export default function Insights({ data }) {
  // checking if data is not empty and rendering the component conditionally
  if (data.length) {
    data = uniqBy(data, JSON.stringify);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const handlePagination = (event, value) => {
      setCurrentPage(value);
    };

    const [pagedata, setPagedata] = useState(
      data.slice(0, Math.min(5, data.length))
    );

    useEffect(() => {
      setPagedata(
        data.slice(
          (currentPage - 1) * itemsPerPage,
          (currentPage - 1) * itemsPerPage + itemsPerPage
        )
      );
    }, [currentPage]);

    return (
      <div className={styles.insightContainer}>
        {pagedata.map((val, index) => (
          <Card key={index} className={styles.insightContainerCard}>
            <Link href={val.url}>
              <CardContent>
                <h3>{val.item}</h3>
              </CardContent>
            </Link>
          </Card>
        ))}
        <Pagination
          className={styles.insightContainerPagination}
          count={pageCount}
          color="primary"
          page={currentPage}
          onChange={handlePagination}
        />
      </div>
    );
  } else return null;
}
