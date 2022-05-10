import React from "react";
import { Link } from "react-router-dom";
function StaffList(props) {
  console.log(props);
  const listNhanvien = props.staffs.map((nv) => {
    return (
      <div className="col-12 col-md-2">
        <Link to={`/nhanvien/${nv.id}`} className="au">
          <img src={nv.image} alt={nv.name} />
          <p>{nv.name}</p>
        </Link>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{listNhanvien}</div>
    </div>
  );
}
export default StaffList;
