import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Table from './Components/Table';



function App() {
  const [userName, setUserName] = useState("");
  const [tableData, setTableData] = useState([]);

  function userNameHandler(e) {
    const userName = e.target.value;
    setUserName(userName);
  }

  function fetchApi() {
    userName !== "" && fetch(`https://api.github.com/users/${userName}/repos`).then(response => response.json()).then(data => {
      console.log(data)
      let customArray = [];
      if (data.message === "Not Found") {
        alert("Repo not found!!")
      } else {

        data !== [] && data.map((repo) => {
          let finalObj = {};
          finalObj.userName = repo.owner.login;
          finalObj.projectName = repo.name;
          finalObj.description = repo.description;
          finalObj.createdAt = repo.created_at;
          finalObj.updatedAt = repo.updated_at;
          finalObj.visibility = repo.visibility;
          customArray.push(finalObj);
        })


        setTableData(customArray)
      }
    })


  }
  return (
    <div>
      <Header onFetch={fetchApi} onUname={userNameHandler} />
      <Table tData={tableData} />
    </div>
  );
}

export default App;
