import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
class RenderDept extends Component {
  render() {
    return (
      //render dung props cua department
      <Card>
        <CardTitle className="m-2">{this.props.dept.name}</CardTitle>
        <CardBody>
          <CardText>
            Số lượng nhân viên : {this.props.dept.numberOfStaff}
          </CardText>
        </CardBody>
      </Card>
    );
  }
}
function Department(props) {
  const departments = props.dept.map((department) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={department.id}>
        <RenderDept dept={department} />
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
          <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row shadow m-3">{departments}</div>
    </div>
  );
}
export default Department;
