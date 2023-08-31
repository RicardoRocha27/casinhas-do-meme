import React from "react";
import { Link, NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
  scroll.scrollToTop({ duration: 200, smooth: "smooth" });
};

export const LinkWithScroll = (props) => (
  <Link {...props} onClick={scrollToTop} />
);

export const NavLinkWithScroll = (props) => (
  <NavLink {...props} onClick={scrollToTop} />
);
