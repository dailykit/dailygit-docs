import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

import { Aside, List, ListHeading, ListItem } from "./styled";

const Sidebar = ({ isVisible }) => {
  let [current, setCurrent] = React.useState("");
  let [panel, togglePanel] = React.useState({});
  const query = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          menu {
            title
            link
            children {
              title
              link
            }
          }
        }
      }
    }
  `);
  const { menu } = query.site.siteMetadata;
  return (
    <Aside isVisible={isVisible}>
      <List>
        {menu.map((navItem, index) => (
          <ListItem key={index} isActive={navItem.link === current}>
            {navItem.link && (
              <Link
                to={navItem.link}
                getProps={props => props.isCurrent && setCurrent(props.href)}
              >
                {navItem.title}
              </Link>
            )}
            {navItem.children && (
              <List>
                <ListHeading
                  isActive={panel[navItem.title]}
                  onClick={() => togglePanel({ [navItem.title]: true })}
                >
                  {navItem.title}
                </ListHeading>
                {panel[navItem.title] &&
                  navItem.children.map(item => (
                    <ListItem key={item.link} isActive={item.link === current}>
                      <Link
                        to={item.link}
                        getProps={props =>
                          props.isCurrent && setCurrent(props.href)
                        }
                      >
                        {item.title}
                      </Link>
                    </ListItem>
                  ))}
              </List>
            )}
          </ListItem>
        ))}
      </List>
    </Aside>
  );
};

export default Sidebar;
