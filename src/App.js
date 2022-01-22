// import "draft-js/dist/Draft.css";
// import "draftail/dist/draftail.css";
// import "draftail/dist/normalise.css";
import React from "react";
import LinkSource from "./sources/LinkSource";
import Link from "./entities/Link";
// import { Link } from "@material-ui/core";
import "./styles.css";
import './gif-plugin.css';
import {
  DraftailEditor,
  BLOCK_TYPE,
  INLINE_STYLE,
  ENTITY_TYPE
} from "draftail";
import * as SvgButtons from "./Buttons/SvgIconButtons.jsx";
// import createLinkPlugin from '@draft-js-plugins/anchor';
// import LinkButton from "./Controls/LinkControls.jsx";
import { EditorState,convertToRaw } from "draft-js";
import createGiphyPlugin from '@davidsemakula/draft-js-giphy-plugin';
const giphyPlugin = createGiphyPlugin({apiKey:'dc6zaTOxFJmzC',selectButtonContent:<SvgButtons.GifBoxOutlinedIcon fontSize="medium" />});
import {Grid,Paper} from '@material-ui/core';
const { GiphySelect } = giphyPlugin;
import StyledIconButton from './Buttons/StyledIconButton.jsx';
import ImageBlock from './blocks/ImageBlock';
import ImageSource from "./sources/ImageSource";
export default function App() {
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
  return (
    <Paper component="div" style={{margin:'16px', border: '1px solid #333'}}>
    <DraftailEditor
      rawContentState={null}
      editorState={editorState}
      onChange={setEditorState}
      blockTypes={[
        { type: BLOCK_TYPE.BLOCKQUOTE },
        { type: BLOCK_TYPE.ORDERED_LIST_ITEM },
        { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
        { type: BLOCK_TYPE.CODE }
      ]}
      entityTypes={[
        {
          type: ENTITY_TYPE.LINK,
          icon: <svg class="Draftail-ToolbarButton__label" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>,
          source: LinkSource,
          decorator: Link,
          attributes: ["url"],
          whitelist: {
            href: "^(?![#/])"
          }
        },
        {
          type: ENTITY_TYPE.IMAGE,
          description: "Image",
          icon: <svg class="Draftail-ToolbarButton__label" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16h6v-6h4l-7-7-7 7h4v6zm3-10.17L14.17 8H13v6h-2V8H9.83L12 5.83zM5 18h14v2H5z"/></svg>,
          source: ImageSource,
          block: ImageBlock,
          attributes: ["src", "alt","type"],
          // whitelist: {
          //   src: "^(?!(data:|file:))",
          // },
        },
      ]}
      inlineStyles={[
        
        { type: INLINE_STYLE.BOLD },
        { type: INLINE_STYLE.ITALIC },
        { type: INLINE_STYLE.STRIKETHROUGH }
      ]}
      plugins={[giphyPlugin]}
    />
    {/* <Grid container direction="row" component="div" className="Draftail-Toolbar" justifyContent="space-between" alignItems="center"> */}
    <Grid container direction="row" justifyContent="flex-start" alignItems="center" className="Draftail-Toolbar">
    <Grid item component="div" className="gif-picker">
    <GiphySelect editorState={editorState} onChange={editorState=>setEditorState(editorState)}/>
    </Grid>
    <Grid item component="div" className="gif-picker">
    <button onClick={()=>{console.log(JSON.stringify(convertToRaw(editorState.getCurrentContent())));}}>logState</button>
    </Grid>
    
    <Grid item style={{marginLeft:'auto'}}component="div">
    <StyledIconButton label="send-message"/>
    </Grid>
    </Grid>
    {/* <linkPlugin.LinkButton setEditorState={setEditorState} getEditorState={()=>editorState} /> */}
    </Paper>
  );
}

