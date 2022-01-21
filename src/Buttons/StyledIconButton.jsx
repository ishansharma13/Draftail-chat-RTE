import { IconButton, Tooltip, Fade } from "@material-ui/core";
import * as SvgButtons from "./SvgIconButtons.jsx";
import styled from "styled-components";

const IconButtonStyled = styled(IconButton)`
  color: ${(props) => (props.selected ? "blue" : "black")};
`;

const SendIconButton = styled(IconButton)`
  margin-left: auto;
  margin-right: 5px;
  &:hover {
    color: blue;
  }
`;

export default function StyledIconButton({
  disabled = null,
  active,
  label,
  handler,
  fontSize = "small"
}) {
  let x;

  switch (label) {
    case "bold":
      x = (
        <IconButtonStyled
          selected={active}
          edge="start"
          disableRipple
          aria-label={label}
          onMouseDown={handler}
        >
          <SvgButtons.FormatBoldIcon fontSize={fontSize} />
        </IconButtonStyled>
      );
      break;
    case "italic":
      x = (
        <IconButtonStyled
          selected={active}
          edge="start"
          disableRipple
          aria-label={label}
          onMouseDown={handler}
        >
          <SvgButtons.FormatItalicIcon fontSize={fontSize} />
        </IconButtonStyled>
      );
      break;
    case "strikethrough":
      x = (
        <IconButtonStyled
          selected={active}
          edge="start"
          disableRipple
          aria-label={label}
          onMouseDown={handler}
        >
          <SvgButtons.StrikethroughIcon fontSize={fontSize} />
        </IconButtonStyled>
      );
      break;
    case "addcode":
      x = (
        <IconButtonStyled
          selected={active}
          disableRipple
          aria-label={label}
          onMouseDown={handler}
        >
          <SvgButtons.CodeIcon fontSize={fontSize} />
        </IconButtonStyled>
      );
      break;
    case "bullet-list":
      x = (
        <IconButtonStyled
          selected={active}
          disableRipple
          aria-label={label}
          onMouseDown={handler}
        >
          <SvgButtons.FormatListBulletedIcon fontSize={fontSize} />
        </IconButtonStyled>
      );
      break;
    case "numbered-list":
      x = (
        <IconButtonStyled
          selected={active}
          disableRipple
          aria-label={label}
          onMouseDown={handler}
        >
          <SvgButtons.FormatListNumberedOutlinedIcon fontSize={fontSize} />
        </IconButtonStyled>
      );
      break;
    case "add-link":
      x = (
        <IconButtonStyled
          disabled={disabled}
          selected={active}
          disableRipple
          aria-label={label}
          onMouseDown={handler}
          type="submit"
        >
          <SvgButtons.LinkIcon fontSize={fontSize} />
        </IconButtonStyled>
      );
      break;
    case "add-attachment":
      x = (
        <IconButtonStyled disableRipple aria-label={label} component="span">
          <SvgButtons.AddIcon fontSize={fontSize} />
        </IconButtonStyled>
      );
      break;
    case "add-mention":
      x = (
        <IconButtonStyled
          selected={active}
          disableRipple
          aria-label={label}
          onMouseDown={handler}
        >
          <SvgButtons.AlternateEmailOutlinedIcon fontSize={fontSize} />
        </IconButtonStyled>
      );
      break;
    case "add-emoji":
      x = (
        <IconButtonStyled
          selected={active}
          disableRipple
          aria-label={label}
          onMouseDown={handler}
        >
          <SvgButtons.SentimentSatisfiedAltOutlinedIcon fontSize={fontSize} />
        </IconButtonStyled>
      );
      break;
    case "add-gif":
      x = (
        <IconButtonStyled
          selected={active}
          disableRipple
          aria-label={label}
          onMouseDown={handler}
        >
          <SvgButtons.GifBoxOutlinedIcon fontSize={fontSize} />
        </IconButtonStyled>
      );
      break;
    case "send-message":
      x = (
        <SendIconButton disableRipple aria-label={label} onMouseDown={handler}>
          <SvgButtons.SendIcon fontSize={fontSize} />
        </SendIconButton>
      );
      break;
    case "add-link-done":
      x = (
        <IconButton
          disableRipple
          aria-label={label}
          onClick={handler}
          type="submit"
        >
          <SvgButtons.DoneTwoToneIcon fontSize={fontSize} />
        </IconButton>
      );
      break;
    case "remove-link":
      x = (
        <IconButton
          disableRipple
          aria-label={label}
          onClick={handler}
          type="submit"
        >
          <SvgButtons.CloseTwoToneIcon fontSize={fontSize} />
        </IconButton>
      );
      break;
    default:
      break;
  }
  let res = (
    <Tooltip key={label} TransitionComponent={Fade} title={label}>
      {x}
    </Tooltip>
  );
  if (label === "add-link") {
    if (disabled) {
      res = x;
    }
  }
  return res;
}
