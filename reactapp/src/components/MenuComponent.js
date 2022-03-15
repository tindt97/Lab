import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

function RenderMenuItem({ dish, onClick }) {
    return (
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}
const Menu = (props) => {
            const menu=props.dishes.map((dish)=>{
                return( // onclick tạo ra sự kiện nhấn để lấy giá trị dish
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <RenderMenuItem dish={dish} onClick={props.onClick }/>
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

export default Menu;