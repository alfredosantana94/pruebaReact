import React from "react";
import {Link} from "react-router-dom";
const SideBar = ()=>(
  <div>
    <ul>
      <Link to={"/home"}><li>Ir a home</li></Link>
      <Link to={"/lista"}><li>Ir a lista</li></Link>
    </ul>
</div>
);

export default SideBar;
