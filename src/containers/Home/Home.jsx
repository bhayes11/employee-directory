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
  const handleSortName = (event) => {
    const sortEmployee = [...employee];
    const sortedEmployees = sortEmployee.sort((a, b) =>
      a.name.first > b.name.first ? 1 : -1
    );
    setEmployee(sortedEmployees);
  };
  const handleFilterName = (event) => {
    const value = event.target.value;
    console.log(event.target.value);
    if (value === "") {
      setFilteredEmployee(employee);
      return;
    }
    const filterName = [...filteredEmployee].filter((employee) => {
      return employee.name.first.toLowerCase().includes(value.toLowerCase());
    });
    setEmployee(filterName);
  };
  return (
    <>
    </>
  );
};
export default Home;