import * as React from "react";
import { useEffect, useState } from "react";
import uniqid from "uniqid";
import shoppingBag from "../assets/images/shopping-bag.svg";
import { motion, useCycle } from "framer-motion";
import CartItem from "./CartItem";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 95% 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 95% 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const staggerItems = {
  open: {
    transition: {
      delay: 5.0,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const formatCurrency = (price) => {
  const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return price.toLocaleString(undefined, currencyOptions);
};

// Takes cart state and returns the total price formatted for currency
const getTotal = (cart) => {
  const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
  return formatCurrency(total);
};

const getCartSummary = (cart) => {
  const cartCopy = cart.slice(0);
  const cartSum = [];

  cartCopy.forEach((item) => {
    let itemId = cartSum.findIndex((itemSum) => itemSum.title === item.title);
    if (itemId === -1) {
      cartSum.push({
        ...item,
        quantity: 1,
        sumPrice: item.price,
      });
    } else {
      cartSum[itemId].quantity = cartSum[itemId].quantity + 1;
      cartSum[itemId].sumPrice += cartSum[itemId].price;
    }
  });

  return cartSum.sort((a, b) => (a.title > b.title ? 1 : -1));
};

const Cart = ({ shopCart }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (shopCart === undefined) {
      setCart([]);
    } else {
      setCart(shopCart.slice(0));
    }
  }, [shopCart]);

  //Adjusts cart when quantity input field is changed
  const handleInputQuantityChange = (e) => {
    if (e.target.value < 0) {
      e.target.value = 1;
    }

    let itemCopy = cart.slice(0).find((item) => item.title === e.target.id);
    removeAllFromCart(e.target.id);
    for (let i = 0; i < e.target.value; i++) {
      itemCopy.addItem();
    }
  };

  const removeAllFromCart = (unwantedItem) => {
    cart.forEach((item) => {
      if (item.title === unwantedItem) {
        item.removeItem();
      }
    });
  };

  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.div
      className="cart"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div className="background cart-elements" variants={sidebar}>
        <div className="cart-header">
          <h1 className="cart-title">My Cart</h1>
          <p className="cart-items-total">{`${cart.length} Items`}</p>
        </div>
        <motion.ul
          variants={staggerItems}
          className="cart-list"
          // eslint-disable-next-line react/jsx-no-duplicate-props
          animate={isOpen ? "open" : "closed"}
        >
          {getCartSummary(cart).map((item) => (
            <CartItem
              key={uniqid()}
              item={item}
              handleInputQuantityChange={(e) => handleInputQuantityChange(e)}
            />
          ))}
        </motion.ul>
        <div className="cart-sum-total">Total: {`$${getTotal(cart)}`}</div>
      </motion.div>

      <div className="toggle-cart-container">
        <img
          src={shoppingBag}
          alt="shopping bag"
          onClick={() => toggleOpen()}
        />
        <div className="cart-counter">{getCartSummary(cart).length}</div>
      </div>
    </motion.div>
  );
};

export default Cart;
