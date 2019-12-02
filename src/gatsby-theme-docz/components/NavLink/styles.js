export const link = {
  display: "block",
  color: "sidebar.navGroup",
  textDecoration: "none",
  fontSize: 2,
  paddingLeft: 3,
  borderLeft: "1px solid rgba(0,0,0,0.1)",
  height: t => `${t.sidebar.link.height}`,
  lineHeight: t => `${t.sidebar.link.height}`,
  "&.active": {
    background: "#fff",
    border: "1px solid rgba(0,0,0,0.1)",
    color: "sidebar.navLinkActive",
    "&:hover": {
      background: "#fff"
    }
  },
  "&:hover": {
    background: "#E6ECF1"
  }
};

export const smallLink = {
  ...link,
  ml: 3,
  fontSize: 1,
  position: "relative",
  color: "sidebar.tocLink",
  "&.active": {
    color: "sidebar.tocLinkActive"
  }
};
