export default {
  menu: [
    "Introduction",
    {
      name: "File System",
      menu: ["Create File"]
    }
  ],
  title: "DailyGit Docs",
  description: "Documentation for dailygit",
  public: "/public",
  themeConfig: {
    colors: {
      header: {
        bg: "#8AC03B",
        button: {
          bg: "#6b9a25",
          color: "#fff"
        }
      }
    },
    styles: {
      Container: {
        maxWidth: 980
      },
      table: {
        width: "100%",
        my: 4,
        borderCollapse: "separate",
        borderSpacing: 0,
        [["th", "td"]]: {
          textAlign: "left",
          py: "4px",
          pr: "4px",
          pl: 0,
          borderColor: "muted",
          borderBottomStyle: "solid"
        }
      },
      th: {
        borderBottomWidth: 1,
        borderBottomColor: "#e5eef7",
        fontSize: 14,
        textTransform: "uppercase",
        color: "#9bacbd",
        fontWeight: 500
      },
      td: {
        verticalAlign: "top",
        borderBottomWidth: "1px",
        fontSize: 16
      }
    }
  }
};
