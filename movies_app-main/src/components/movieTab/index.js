import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import ListMovie from "./ListMovie";
import MovieViaGenre from "./DisplayMovieViaGenre";
function MovieTab(props) {
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <>
      <Nav tabs className="py-2 px-2">
        <NavItem>
          <NavLink
            active={selectedItem === 1 ? true : false}
            onClick={() => setSelectedItem(1)}
            style={{ cursor: "pointer" }}
          >
            List
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={selectedItem === 2 ? true : false}
            onClick={() => setSelectedItem(2)}
            style={{ cursor: "pointer" }}
          >
            Group by genre
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={selectedItem}>
        <TabPane tabId={1}>
          <ListMovie />
        </TabPane>
        <TabPane tabId={2}>
          <MovieViaGenre />
        </TabPane>
      </TabContent>
    </>
  );
}

export default MovieTab;
