import React from "react";
import TagLink from "../../components/TagLink/TagLink";
import { tag_links } from "../../data/tagLinks";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <ul>
        {tag_links.map((tag_link, index) => {
          const { icon, name } = tag_link;

          return (
            <li key={index}>
              <TagLink icon={icon} name={name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
