import "./_Navbar.scss";
import React from "react";
import { AppBar, Typography, IconButton } from "@mui/material";
import {
  Home,
  Search,
  Category,
  Person,
  ShoppingCart,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: "Home", route: "/home", icon: Home },
    { label: "Search", route: "/search", icon: Search },
    { label: "Shop", route: "/shop", icon: Category },
    { label: "Profile", route: "/profile", icon: Person },
    { label: "Cart", route: "/cart", icon: ShoppingCart },
  ];

  return (
    <AppBar
      position="fixed"
      color="primary"
      className="navbar"
      sx={{
        top: "auto",
        bottom: 0,
        height: "82px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        columnGap: "24px",
        paddingTop: "8px",
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
            color: location.pathname === link.route ? "black" : "inherit",

          }}
        >
          <link.icon
            className="navbar__icon"
            sx={{
              height: "24px",
              width: "24px",
              color: location.pathname === link.route ? "black" : "inherit",
            }}
          />
          <Typography
            variant="p"
            className={`navbar__label ${
              location.pathname === link.route ? "navbar__label--active" : ""
            }`}
            sx={{
              fontSize: "10px",
              color: "inherit",
              textDecoration:
                location.pathname === link.route ? "underline" : "none",
            }}
          >
            {link.label}
          </Typography>
        </IconButton>
      ))}
    </AppBar>
  );
};

export default Navbar;
