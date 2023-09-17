// import "./_ItemTile.scss";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Add, Remove, ShoppingCart } from "@mui/icons-material";
// import { IconButton, Box, Typography, Button } from "@mui/material";
// import { formatPrice } from "../../utils";
// import { useNavigate } from "react-router-dom";
// import {
//   decreaseCount,
//   increaseCount,
//   removeFromCart,
//   addToCart,
// } from "../../state";
// import { useState } from "react";

// const ItemTile = ({ product, size }) => {
//   const { price, name, image_url, id } = product;
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.state.cart);
//   const totalPrice = (product) => {
//     return count * price;
//   };
//   const formattedTotalPrice = formatPrice(totalPrice);
//   const [count, setCount] = useState(1);
//   const navigate = useNavigate();

//   return (
//     <Box
//       width={size === "small" ? "136px" : "171px"}
//       height={size === "small" ? "166px" : "208px"}
//       sx={{
//         border: "2px solid black",
//         borderRadius: size === "small" ? "12px" : "15px",
//         color: "black",
//         display: "flex",
//         flexDirection: "column",
//         position: "relative",
//         // padding: size === "small" ? "8px" : "12px",
//         backgroundColor: "#E9ECF2",
//         overflow: "hidden",
//       }}
//     >
//       <Box
//         className="item-tile__total-cart-wrapper"
//         display="flex"
//         flexDirection="row"
//         alignItems="center"
//         justifyContent="space-between"
//         sx={{
//           position: "absolute",
//           top: size === "small" ? "8px" : "12px",
//           width: "100%",
//           px: size === "small" ? "8px" : "12px",
//         }}
//       >
//         <Typography variant="p" color="black">
//           {formattedTotalPrice}
//         </Typography>
//         <IconButton
//           aria-label=""
//           onClick={() =>
//             dispatch(addToCart({ product: { ...product, count } }))
//           }
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             height: size === "small" ? 38 : 48,
//             minWidth: size === "small" ? 38 : 48,
//             borderRadius: size === "small" ? 19 : 24,
//             backgroundColor: "black",
//             color: "white",
//           }}
//         >
//           {cart.length}
//           <ShoppingCart
//             sx={{
//               height: size === "small" ? 18 : 22,
//               width: size === "small" ? 18 : 22,
//               fill: "white",
//             }}
//           />
//         </IconButton>
//       </Box>

//       <img
//         className="item-tile__product-image"
//         alt={name}
//         width="100%"
//         height={size === "small" ? "100px" : "125.5px"}
//         src={`${image_url}`}
//         cursor="pointer"
//         onClick={() => navigate(`/products/${id}`)}
//       />
//       <Box
//         className="item-tile__counter-wrapper"
//         sx={{
//           height: size === "small" ? 66 : 82.5,
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundColor: "#FFE8FA",
//         }}
//       >
//         <Typography
//           variant="p"
//           color="initial"
//           sx={{
//             fontSize: size === "small" ? 14 : 18,
//             paddingBottom: size === "small" ? "4px" : "8px",
//             fontWeight: "bold",
//           }}
//         >
//           {name}
//         </Typography>
//         <Box
//           className="item-tile__btns-wrapper"
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             width: "100%",
//             px: size === "small" ? "8px" : "12px",
//           }}
//         >
//           <IconButton
//             aria-label=""
//             onClick={() => setCount(Math.max(count - 1, 1))}
//             sx={{
//               height: size === "small" ? 27 : 34,
//               width: size === "small" ? 50 : 63,
//               borderRadius: size === "small" ? "4.5px" : "5.5px",
//               border:
//                 size === "small" ? "2px solid black" : "2.5px solid black",
//               backgroundColor: "white",
//             }}
//           >
//             <Remove
//               sx={{
//                 height: size === "small" ? 25 : 32,
//                 width: size === "small" ? 25 : 32,
//                 color: "black",
//               }}
//             />
//           </IconButton>

//           <IconButton
//             aria-label=""
//             onClick={() => setCount(count + 1)}
//             sx={{
//               height: size === "small" ? 27 : 34,
//               width: size === "small" ? 50 : 63,
//               borderRadius: size === "small" ? "4.5px" : "5.5px",
//               border:
//                 size === "small" ? "2px solid black" : "2.5px solid black",
//                 backgroundColor: "black",

//             }}
//           >
//             <Add
//               sx={{
//                 height: size === "small" ? 25 : 32,
//                 width: size === "small" ? 25 : 32,
//                 color: "white",
//               }}
//             />
//           </IconButton>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ItemTile;

import "./_ItemTile.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add, Remove, ShoppingCart } from "@mui/icons-material";
import { formatPrice } from "../../utils";
import { useNavigate } from "react-router-dom";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  addToCart,
} from "../../state";
import { useState } from "react";

const ItemTile = ({ product, size }) => {
  const { price, name, image_url, id } = product;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.state.cart);
  const totalPrice = (product) => {
    return count * price;
  };
  const formattedTotalPrice = formatPrice(totalPrice);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  return (
    <div className={`item-tile item-tile--${size}`}>
      <div
        className={`item-tile__total-cart-wrapper item-tile__total-cart-wrapper--${size}`}
      >
        <p className={`item-tile__total-price item-tile__total-price--${size}`}>
          {formattedTotalPrice}
        </p>
        <button
          className={`item-tile__cart-btn cart-btn cart-btn--${size}`}
          aria-label="Add to cart"
          onClick={() =>
            dispatch(addToCart({ product: { ...product, count } }))
          }
        >
          {cart.length}
          <ShoppingCart
            className={`cart-btn__cart-icon cart-btn__cart-icon--${size}`}
          />
        </button>
      </div>

      <img
        className={`item-tile__product-image item-tile__product-image--${size}`}
        alt={name}
        src={image_url}
        // onClick={() => navigate(`/products/${id}`)}
      />

      <div
        className={`item-tile__counter-wrapper item-tile__counter-wrapper--${size}`}
      >
        <h2 className={`item-tile__item-name item-tile__item-name--${size}`}>
          {name}
        </h2>
        <div
          className={`item-tile__btns-wrapper item-tile__btns-wrapper--${size}`}
        >
          <button
            className={`item-tile__decrease-btn decrease-btn decrease-btn--${size}`}
            aria-label="Decrease count"
            onClick={() => setCount(Math.max(count - 1, 1))}
          >
            <Remove
              className={`decrease-btn__decrease-icon decrease-btn__decrease-icon--${size}`}
            />
          </button>

          <button
            className={`item-tile__increase-btn increase-btn increase-btn--${size}`}
            aria-label="Increase count"
            onClick={() => setCount(count + 1)}
          >
            <Add
              className={`increase-btn__increase-icon increase-btn__increase-icon--${size}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemTile;
