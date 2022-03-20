import { Component } from 'react/cjs/react.production.min';
import Menu from './MenuComponent';
import DishDetails from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
  constructor (props) {
    super (props);

    this.state = {
        dishes: DISHES,
        selectedDish:null
    };
    }
    onDishSelect (dishId){
        this.setState({selectedDish: dishId}); //tao ra trang thai mới cho selectedish null thành cái mình đang chọn
            
     }
  render () {
    return (
      <div className='App'>
            <Header />
            <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
            <DishDetails dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]} />
            <Footer />
      </div>
    );
  }
}

export default Main;
