import React from "react";
import SideBar from './comp/SideBar';
const HomePage = ({texto}) =>(
  <div>
    <h1>{texto}</h1>
    <SideBar/>
  </div>
);
export default HomePage;
