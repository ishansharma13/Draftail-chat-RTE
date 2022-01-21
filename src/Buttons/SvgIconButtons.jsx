import * as React from "react";
import { createSvgIcon } from "@material-ui/core";

export const FormatBoldIcon = createSvgIcon(
  <React.Fragment>
    <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
  </React.Fragment>,
  "Bold"
);

export const FormatItalicIcon = createSvgIcon(
  <React.Fragment>
    <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z" />
  </React.Fragment>,
  "Italic"
);

export const StrikethroughIcon = createSvgIcon(
  <React.Fragment>
    <path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z" />
  </React.Fragment>,
  "StrikeThrough"
);

export const FormatListBulletedIcon = createSvgIcon(
  <React.Fragment>
    <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" />
  </React.Fragment>,
  "BulletedList"
);

export const FormatListNumberedOutlinedIcon = createSvgIcon(
  <React.Fragment>
    <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z" />
  </React.Fragment>,
  "NumberedList"
);

export const CodeIcon = createSvgIcon(
  <React.Fragment>
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
  </React.Fragment>,
  "CodeIcon"
);

export const LinkIcon = createSvgIcon(
  <React.Fragment>
    <path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z" />
  </React.Fragment>,
  "LinkIcon"
);

export const AddIcon = createSvgIcon(
  <React.Fragment>
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </React.Fragment>,
  "AddIcon"
);

export const SentimentSatisfiedAltOutlinedIcon = createSvgIcon(
  <React.Fragment>
    <path d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </React.Fragment>,
  "SentimentSatisfiedAltOutlinedIcon"
);

export const AlternateEmailOutlinedIcon = createSvgIcon(
  <React.Fragment>
    <path d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
  </React.Fragment>,
  "AlternateEmailOutlinedIcon"
);

export const SendIcon = createSvgIcon(
  <React.Fragment>
    <path d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z" />
  </React.Fragment>,
  "SendIcon"
);

export const GifBoxOutlinedIcon = createSvgIcon(
  <React.Fragment>
    <path d="M19,19H5V5h14V19z M5,3C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H5z M11.5,14h1v-4h-1V14z M13.5,14h1v-1.5H16v-1h-1.5V11h2v-1h-3V14z M9.5,12v1h-1v-2h2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1h1 c0.55,0,1-0.45,1-1v-1H9.5z" />
  </React.Fragment>,
  "GifBoxOutlinedIcon"
);

export const DoneTwoToneIcon = createSvgIcon(
  <React.Fragment>
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </React.Fragment>,
  "DoneTwoToneIcon"
);
export const CloseTwoToneIcon = createSvgIcon(
  <React.Fragment>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
  </React.Fragment>,
  "CloseTwoToneIcon"
);
