// link + bottom buttons
// switch case for misc

import * as React from "react";
import StyledIconButton from "../Buttons/StyledIconButton.jsx";
import { Divider, Popover, Grid, TextField } from "@material-ui/core";

export default function LinkButton({
  editorState,
  handleClick,
  urlVal,
  handleClose,
  setLink,
  removeLink,
  IsLinkActive,
  id,
  open,
  anchorEl,
  handleTextChange
}) {
  const selection = editorState.getSelection();
  return (
    <React.Fragment>
      <Divider orientation="vertical" variant="middle" flexItem />
      <StyledIconButton
        disabled={IsLinkActive === false && !selection.isCollapsed() === false}
        active={IsLinkActive}
        label="add-link"
        handler={handleClick}
      />
      <Popover
        sx={{
          "& .MuiPopover-paper": { bgcolor: "#defff7", borderRadius: 3 },
          "& .MuiPaper-elevation8": {
            width: 300
          }
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <Grid direction="row" spacing={2} sx={{ p: 2 }}>
          <TextField
            onChange={handleTextChange}
            defaultValue={urlVal}
            id="outlined-helperText"
            label="URL"
            size="small"
          />

          <StyledIconButton
            label="add-link-done"
            disabled={
              IsLinkActive === false && !selection.isCollapsed() === false
            }
            handler={(e) => {
              e.preventDefault();
              console.log(urlVal);
              if (urlVal != null) {
                console.log("Here");
                setLink();
              }
              handleClose();
            }}
          />
          <StyledIconButton
            label="remove-link"
            handler={(e) => {
              e.preventDefault();
              removeLink();
              handleClose();
            }}
            type="submit"
          />
        </Grid>
      </Popover>
    </React.Fragment>
  );
}

// change labels so that they match the buttons
// write a map fn that creates each button
// state is being changed here so use class component
// active/not-active (state-var)
// and a function that applies the style which comes from Editor Element
