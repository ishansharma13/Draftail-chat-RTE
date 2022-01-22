import React, { Component } from "react";

import { EditorState } from "draft-js";


import Icon from "../components/Icon";

import Tooltip from "../components/Tooltip";

import Portal from "../components/Portal";

// Constraints the maximum size of the tooltip.
const OPTIONS_MAX_WIDTH = 300;
const OPTIONS_SPACING = 70;
const TOOLTIP_MAX_WIDTH = OPTIONS_MAX_WIDTH + OPTIONS_SPACING;


/**
 * Editor block to preview and edit images.
 */
class MediaBlock extends Component{
  constructor(props) {
    super(props);

    this.state = {
      tooltip: null,
    };

    this.openTooltip = this.openTooltip.bind(this);
    this.closeTooltip = this.closeTooltip.bind(this);
    this.renderTooltip = this.renderTooltip.bind(this);
  }

  /* :: openTooltip: (e: Event) => void; */
  openTooltip(e) {
    const trigger = e.target;

    if (
      trigger instanceof Element &&
      trigger.parentNode instanceof HTMLElement
    ) {
      const containerWidth = trigger.parentNode.offsetWidth;

      this.setState({
        tooltip: {
          target: trigger.getBoundingClientRect(),
          containerWidth,
        },
      });
    }
  }

  /* :: closeTooltip: () => void; */
  closeTooltip() {
    this.setState({ tooltip: null });
  }

  /* :: renderTooltip: () => ?Node; */
  renderTooltip() {
    const { children } = this.props;
    const { tooltip } = this.state;

    if (!tooltip) {
      return null;
    }

    const maxWidth = tooltip.containerWidth - tooltip.target.width;
    const direction = maxWidth >= TOOLTIP_MAX_WIDTH ? "left" : "top-left";

    return (
      <Portal
        onClose={this.closeTooltip}
        closeOnClick
        closeOnType
        closeOnResize
      >
        <Tooltip target={tooltip.target} direction={direction}>
          <div style={{ maxWidth: OPTIONS_MAX_WIDTH }}>{children}</div>
        </Tooltip>
      </Portal>
    );
  }

  render() {
    const { blockProps, src, type, label, isLoading } = this.props;
    const { entityType } = blockProps;
    let x;
    if (type.includes('image')){
        x = <img className="MediaBlock__img" src={src} alt={label} width="256" />;
    }
    else{
        x = <span className="MediaBlock__img"><img hidden={true} src={src} alt={label} width="256"/><span className="file-upload">{label}</span></span>;
    }
    return (
      <button
        type="button"
        tabIndex={-1}
        className={`MediaBlock${isLoading ? " MediaBlock--loading" : ""}`}
        aria-label={`${entityType.description}${label ? ": " : ""}${label}`}
        onMouseUp={this.openTooltip}
      >
        <span className="MediaBlock__icon-wrapper" aria-hidden>
          <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg>} className="MediaBlock__icon" />
        </span>
        
        {x}

        {this.renderTooltip()}
      </button>
    );
  }
}

export default MediaBlock;