import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Search from "../../components/Search/Search";
const Home = () => {
  const [employee, setEmployee] = useState([]);
  const [filteredEmployee, setFilteredEmployee] = useState([]);
  useEffect(() => {
    API.getRandomEmployee().then((results) => {
      console.log("results.data:", results.data);
      setEmployee(results.data.results);
      setFilteredEmployee(results.data.results);
    });
  }, []);