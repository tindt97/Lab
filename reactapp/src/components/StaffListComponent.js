import react, {Component} from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
import dateFormat from 'dateformat'
class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            SelectecStaffs: null,
            DefaultCols: "col-12 col-md-6 col-lg-4 mt-4"
        };
    }
    onSelectStaff(nv) {
        this.setState(
            {
                SelectecStaffs: nv
            }
        );
    }
    renderSelectStaff(nv) {
        if (nv != null) {
            return (
                <div className="col-12 col-md-6 col-lg-4 mt-4">
                    <Card>
                        <CardBody>
                            <CardTitle>Họ và tên: {nv.name}</CardTitle>
                            <CardText>Ngày sinh: {dateFormat(nv.doB,"dd/mm/yyyy")}</CardText>
                            <CardText>Ngày vào công ty: {dateFormat(nv.startDate,"dd/mm/yyyy")}</CardText>
                            <CardText>Phòng ban: {nv.department.name}</CardText>
                            <CardText>Số ngày nghỉ còn lại: {nv.annualLeave}</CardText>
                            <CardText>Số ngày làm thêm: {nv.overTime}</CardText>
                        </CardBody>
                    </Card>
                   
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
    render() {
        const stafflist = this.props.staffs.map((nv) => {
            return (
                <div key={nv.id} className="col-12 col-md-6 col-lg-4 mt-4">
                    <Card onClick={()=> this.onSelectStaff(nv)} >
                        <CardBody>
                            <CardTitle>{nv.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {stafflist}
                </div>
                <div className="row mt-4">
                    {this.renderSelectStaff(this.state.SelectecStaffs)}
                </div>
            </div>
        );
   
    
    }
}
export default StaffList;