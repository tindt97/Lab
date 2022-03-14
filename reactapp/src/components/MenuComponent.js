import React,{Component } from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";


class Menu extends Component {
    
        constructor(props) {
            super(props);
            this.state ={
             
            }
        }

       
        
        render() {
            
            const menu=this.props.dishes.map((dish)=>{
                return( // onclick tạo ra sự kiện nhấn để lấy giá trị dish
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <Card onClick={() => this.props.onClick(dish.id)}> 
                            <CardImg width="100%" src ={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                );
            });
            return (
                <div className="container">
                    <div className="row">
                            {menu}
                    </div>
                    
                </div>
            );// ở trên lấy hàm renderdish đưa dữ kiện this state selected vào trong hàm render dish
        }
    
}

export default Menu;