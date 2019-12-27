export default {
  menu: [
    "Introduction",
    {
      name: "File",
      menu: [
        "Create File",
        "Delete File",
        "Update File",
        "Read File",
        "Rename File"
      ]
    },
    {
      name: "Folder",
      menu: ["Create Folder", "Delete Folder", "Rename Folder"]
    },
    {
      name: "Git",
      menu: ["Add and Commit", "Remove and Commit"]
    },
    {
      name: "Types",
      menu: [
        "File",
        "Folder",
        "Folder With Files",
        "Author",
        "Committer",
        "Commit",
        "Result",
        "Success",
        "Error",
        "Subscription"
      ]
    },
    {
      name: "Queries",
      menu: [
        "Get Folder With Files",
        "Get Nested Folders",
        "Get Files",
        "Get File",
        "Open File",
        "Search Files",
        "Get Commit",
        "Get Commits",
        "Get Commit Log",
        "Get Commit Content"
      ]
    },
    {
      name: "Mutations",
      menu: [
        "Create Folder",
        "Delete Folder",
        "Rename Folder",
        "Create File",
        "Delete File",
        "Update File",
        "Draft File",
        "Rename File",
        "Image Upload",
        "Install App"
      ]
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
      },
      sidebar: {
        bg: "#F5F7F9"
      }
    },
    sidebar: {
      title: {
        height: "40px"
      },
      link: {
        height: "32px"
      }
    },
    fonts: {
      body: "'IBM Plex Sans', sans-serif",
      heading: "'IBM Plex Sans', sans-serif"
    },
    fontWeights: {
      body: 400,
      bold: 500,
      heading: 600
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
          pl: "12px !important",
          border: "1px solid #e0e0e0",
          borderBottom: "none",
          borderRight: "none"
        }
      },
      tr: {
        "&:nth-child(even)": {
          background: "#fbfbfb"
        },
        "&:last-child": {
          [["td"]]: {
            borderBottom: "1px solid #e0e0e0"
          }
        }
      },
      th: {
        fontSize: 14,
        textTransform: "uppercase",
        fontWeight: "600",
        color: "#9bacbd",
        fontWeight: 500,
        "&:last-child": {
          borderRight: "1px solid #e0e0e0"
        }
      },
      td: {
        height: "32px",
        verticalAlign: "middle",
        fontSize: 16,
        "&:last-child": {
          borderRight: "1px solid #e0e0e0"
        }
      },
      blockquote: {
        my: 3,
        py: 3,
        px: 3,
        borderLeft: "3px solid rgba(0,0,0,0.1)"
      }
    }
  }
};
