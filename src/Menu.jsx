import React from "react";
import PizzaCard from "./PizzaCard";
import "./assets/Menu.css";
import Footer from "./Footer";
import { useState } from "react";

function Menuchat({cartItems, setCartItems, totalQuantity}) {

    const addToCart = (pizza) => {
        const existingPizzaIndex = cartItems.findIndex(item => item.pizzaName === pizza.pizzaName);

        if (existingPizzaIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingPizzaIndex].quantity += 1;
            updatedCartItems[existingPizzaIndex].price = `₹${parseInt(updatedCartItems[existingPizzaIndex].price.replace('₹', '')) + parseInt(pizza.price.replace('₹', ''))}`;
            setCartItems(updatedCartItems);
        } else {
            const updatedCartItems = [...cartItems, { ...pizza, quantity: 1 }];
            setCartItems(updatedCartItems);
        }
    }
    return (
        <div>
            
            <div className="text">
                <span>Our Most Popular Deals</span>
            </div>
            <div className="center-div">
                <div className="details">
                    <PizzaCard
                        src="https://png.pngtree.com/png-clipart/20240308/original/pngtree-pizza-margherita-food-png-image_14543372.png"
                        pizzaName="Classic Pizza"
                        size="Medium"
                        price="₹200"
                        addToCart={addToCart}
                    />
                    <PizzaCard
                        src="https://png.pngtree.com/png-clipart/20240313/original/pngtree-pizza-top-view-stock-illustration-png-image_14580651.png"
                        pizzaName="Mushroom Pizza"
                        size="Medium"
                        price="₹300"
                        addToCart={addToCart}
                    />
                    <PizzaCard
                        src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_13007895.png"
                        pizzaName="Pepperoni Pizza"
                        size="Small"
                        price="₹200"
                        addToCart={addToCart}
                    />
                    <PizzaCard
                        src="https://png.pngtree.com/png-clipart/20230423/original/pngtree-pepperoni-pizza-on-white-png-image_9080661.png"
                        pizzaName="Veggies Pizza"
                        size="Large"
                        price="₹300"
                        addToCart={addToCart}
                    />
                    <PizzaCard
                        src="https://png.pngtree.com/png-clipart/20240619/original/pngtree-pizza-red-food-png-image_15367782.png"
                        pizzaName="Red Pizza"
                        size="Medium"
                        price="₹250"
                        addToCart={addToCart}
                    />
                    <PizzaCard
                        src="https://png.pngtree.com/png-clipart/20220102/original/pngtree-yummy-big-pizza-png-png-image_7003051.png"
                        pizzaName="Italy Pizza"
                        size="Small"
                        price="₹350"
                        addToCart={addToCart}
                    />
                    <PizzaCard
                        src="https://png.pngtree.com/png-clipart/20210418/original/pngtree-pastry-cheese-pizza-png-image_6241241.jpg"
                        pizzaName="Cheese Pizza"
                        size="Medium"
                        price="₹400"
                        addToCart={addToCart}
                    />
                    <PizzaCard
                        src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-pizza-red-food-png-image_9116418.png"
                        pizzaName="Family Pizza"
                        size="Large"
                        price="₹500"
                        addToCart={addToCart}
                    />
                    <PizzaCard
                        src="https://png.pngtree.com/png-clipart/20240308/original/pngtree-pizza-with-corn-bacon-chili-onion-pea-png-image_14541303.png"
                        pizzaName="Corn Pizza"
                        size="Large"
                        price="₹600"
                        addToCart={addToCart}
                    />
                    <PizzaCard
                        src="https://png.pngtree.com/png-clipart/20240314/original/pngtree-greek-salad-pizza-greek-cuisine-caprese-salad-generative-ai-png-image_14591099.png"
                        pizzaName="Greek Pizza"
                        size="Small"
                        price="₹400"
                        addToCart={addToCart}
                    />
                    <PizzaCard
                        src="https://png.pngtree.com/png-clipart/20230421/original/pngtree-delicious-pizza-creative-photography-png-image_9071905.png"
                        pizzaName="French Pizza"
                        size="Medium"
                        price="₹500"
                        addToCart={addToCart}
                    />
                    <PizzaCard
                        src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-italian-pizza-slice-cheese-sausage-three-dimensional-3d-gourmet-fast-food-png-image_13137251.png"
                        pizzaName="Sicilian Pizza"
                        size="Large"
                        price="₹450"
                        addToCart={addToCart}
                    />
                    <PizzaCard src="https://png.pngtree.com/png-clipart/20231015/original/pngtree-pizza-fish-fish-picture-image_13168305.png"
                        pizzaName="Egg Pizza"
                        size="Medium"
                        price="₹350"
                        addToCart={addToCart} 
                    />
                    <PizzaCard src="https://png.pngtree.com/png-clipart/20231104/original/pngtree-birthday-pizza-png-image_13504812.png"
                        pizzaName="BirthDay Pizza"
                        size="Large"
                        price="₹400"
                        addToCart={addToCart}
                    />
                    <PizzaCard src="https://png.pngtree.com/png-clipart/20210808/original/pngtree-big-pizza-png-png-image_6611417.png"
                        pizzaName="Toess Pizza"
                        size="Small"
                        price="₹200"
                        addToCart={addToCart} 
                    />
                    <PizzaCard src="https://png.pngtree.com/png-clipart/20210516/original/pngtree-pepperoni-cheese-pizza-food-clipart-png-image_6296852.png"
                        pizzaName="Chicken Pizza"
                        size="Medium"
                        price="₹300"
                        addToCart={addToCart} 
                    />	
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Menuchat;
