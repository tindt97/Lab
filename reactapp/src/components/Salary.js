import React, { useState } from "react";
import {
  Card,
  CardText,
  CardTitle,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
const luongCB = 3000000;
const luongGio = 200000 / 8;
function RederSalary({ salary, colorSalary }) {
  return (
    <Card>
      <CardTitle className="p-3 bg-white rounded m-2">{salary.name}</CardTitle>
      <CardBody>
        <CardText>Mã Nhân Viên: {salary.id}</CardText>
        <CardText>Hệ Số Lương: {salary.salaryScale}</CardText>
        <CardText>Số Giờ Làm Thêm: {salary.overTime}</CardText>
        <CardText className="bg-light p-2 shadow">
          Lương:{" "}
          {(salary.salaryScale * luongCB + salary.overTime * luongGio).toFixed(
            0
          )}
        </CardText>
      </CardBody>
    </Card>
  );
}
const Salary = (props) => {
  const salary = props.luong.map((ss) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={ss.id}>
        <RederSalary salary={ss} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row bg-light p-2 shadow">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/nhanvien" className="au">
              Nhân viên
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row shadow mb-3">{salary}</div>
    </div>
  );
};
export default Salary;
