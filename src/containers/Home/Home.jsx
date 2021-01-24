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
      <div className="container">
        <Search onChange={handleFilterName} />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">
                <a
                  onClick={handleSortName}
                  style={{
                    color: "green",
                    textAlign: "center",
                  }}
                >
                  First Name
                </a>
              </th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employee) => (
              <tr key={employee.email}>
                <td>
                  <img src={employee.picture.thumbnail} />
                </td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Home;