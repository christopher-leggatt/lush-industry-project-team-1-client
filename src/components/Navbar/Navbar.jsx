import "./_Navbar.scss";
import React from "react";
import { AppBar, IconButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Home } from "../../assets/icons/home_navbar.svg";
import { ReactComponent as Search } from "../../assets/icons/search_navbar.svg";
import { ReactComponent as Category } from "../../assets/icons/categories_navbar.svg";
import { ReactComponent as Profile } from "../../assets/icons/profile_navbar.svg";
import { ReactComponent as Cart } from "../../assets/icons/cart_navbar.svg";
import cartSlice from "../../state/cartSlice";
import { useDispatch, useSelector } from "react-redux";


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cart = useSelector((state) => state.cart);

  const navLinks = [
    { label: "Home", route: "/", icon: Home },
    { label: "Search", route: "/search", icon: Search },
    { label: "Shop", route: "/shop", icon: Category },
    { label: "Profile", route: "/profile", icon: Profile },
    { label: "Cart", route: "/cart", icon: Cart },
  ];

  return (
    <AppBar
      position="fixed"
      className="navbar"
      sx={{
        top: "auto",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        height: "82px",
        width: "390px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        columnGap: "24px",
        paddingTop: "8px",
        borderTop: "1px solid #999999",
        backgroundColor: "white",
      }}
    >
      {navLinks.map((link) => (
        <IconButton
          key={link.route}
          aria-label={`Go to ${link.label}`}
          className={`navbar__item ${
            location.pathname === link.route ? "active" : ""
          }`}
          onClick={() => navigate(link.route)}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: "56px",
            color: location.pathname === link.route ? "#4d4d4d" : "#B9BABB",
            position: link.label === "Cart" ? "relative" : "static",
          }}
        >
          {link.label === "Cart" && location.pathname !== "/cart" && cart.length > 0 && <span className="navbar__cart-badge">            
            <span className="navbar__cart-badge-counter">
            {cart.length || ""}
            </span>
            </span>}
          <link.icon
            className={`navbar__icon ${
              location.pathname === link.route ? "navbar__icon--active" : ""
            }`}
          />
          <p
            className={`navbar__label ${
              location.pathname === link.route ? "navbar__label--active" : ""
            }`}
          >
            {link.label}
          </p>
        </IconButton>
      ))}
    </AppBar>
  );
};

export default Navbar;
