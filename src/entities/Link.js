import React from "react";
import TooltipEntity from "./tooltip/TooltipEntity";
import { Link } from "@material-ui/core";
const CUSTOM_ICON_URLS = {
  "://www.youtube.com/": "#icon-media",
  "://one.npr.org/": "#icon-media",
  "://twitter.com/": "#icon-twitter"
};

const getLinkIcon = (url, linkType) => {
  const isEmailLink = linkType === "email" || url.startsWith("mailto:");

  if (isEmailLink) {
    return "#icon-mail";
  }

  const customIcon = Object.keys(CUSTOM_ICON_URLS).find(key =>
    url.includes(key)
  );

  if (customIcon) {
    return CUSTOM_ICON_URLS[customIcon];
  }

  return "#icon-link";
};

const openTooltip = e => {
  const trigger = e.target;
  if (trigger instanceof Element) {
    let rect = trigger.getBoundingClientRect();
    this.setState({ showTooltipAt: rect });
  }
};

const closeTooltip = () => {
  this.setState({ showTooltipAt: null });
};

export default function ({ entityKey, contentState, children, onEdit, onRemove }) {
  const { url, linkType } = contentState.getEntity(entityKey).getData();
  const icon = "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z";
  const label = url.replace(/(^\w+:|^)\/\//, "").split("/")[0];
  
  return (
    <TooltipEntity
      entityKey={entityKey}
      contentState={contentState}
      onEdit={onEdit}
      onRemove={onRemove}
      icon={icon}
      label={label}
    >
      {children}
    </TooltipEntity>
  );
};


