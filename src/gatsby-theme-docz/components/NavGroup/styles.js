export const wrapper = {
  height: "auto"
};

export const sublinkWrapper = {
  display: "flex",
  flexDirection: "column"
};

export const title = {
  height: t => `${t.sidebar.title.height}`,
  fontSize: 2,
  fontWeight: 500,
  color: "sidebar.navGroup",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

export const chevron = ({ active }) => ({
  ml: 1,
  height: t => `${t.sidebar.title.height}`,
  flexShrink: 0,
  alignSelf: "baseline",
  transform: `rotateX(${active ? 180 : 0}deg)`,
  transformOrigin: "center",
  transition: "transform .3s ease-in-out"
});
