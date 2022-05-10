import { Component } from "react/cjs/react.production.min";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import StaffDetails from "./StaffDetailComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import React, { useState } from "react";
import StaffList from "./StaffList";
import StaffDetail from "./StaffDetailComponent";
import { DEPARTMENTS, STAFFS } from "../shared/staffs";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Department from "./Department";
import Salary from "./Salary";

// class Main extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       dishes: DISHES,
//       comments: COMMENTS,
//       leaders: LEADERS,
//       promotions: PROMOTIONS,
//       departments: DEPARTMENTS,
//       staffs: STAFFS
//     };
//   }

//   render() {
//     const HomePage = () => {
//       return (
//         <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
//           promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
//           leader={this.state.leaders.filter((leader) => leader.featured)[0]}

//         />

//       )
//     }
//     const StaffWithId = ({ match }) => {
//       console.log("StaffWithId");
//       return (
//         <div>
//           <StaffDetails staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]}
//           />
//         </div>
//       );
//     }
//     return (
//       <div className='App'>
//         <Header />
//         <Switch>
//           <Route path="/home" component={HomePage} />
//           <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
//           <Route path="/staff/:staffId" component={StaffWithId} />
//           <Route exact path="/contactus" component={Contact} />
//           <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
//           <Redirect to="/home" />
//         </Switch>
//         <Footer />
//       </div>
//     );
//   }
// }
function Main() {
  const [nhanvien] = useState({
    staffs: STAFFS,
    department: DEPARTMENTS,
  });
  const StaffWithId = ({ match }) => {
    return (
      <StaffDetail
        nv={
          nhanvien.staffs.filter(
            (item) => item.id === parseInt(match.params.nhanvienId, 10)
          )[0]
        }
      />
    );
  };
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/nhanvien"
          component={() => <StaffList staffs={nhanvien.staffs} />}
        />
        <Route path="/nhanvien/:nhanvienId" component={StaffWithId} />
        <Route
          path="/department"
          component={() => <Department dept={nhanvien.department} />}
        />
        <Route
          path="/salary"
          component={() => <Salary luong={nhanvien.staffs} />}
        />
        <Redirect to="/nhanvien" />
      </Switch>
      <Footer />
    </div>
  );
}
export default Main;
