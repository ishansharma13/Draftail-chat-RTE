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
import { EditorState } from "draft-js";
import createGiphyPlugin from '@davidsemakula/draft-js-giphy-plugin';
const giphyPlugin = createGiphyPlugin({apiKey:'dc6zaTOxFJmzC',selectButtonContent:<SvgButtons.GifBoxOutlinedIcon fontSize="medium" />});
import {Grid,Paper} from '@material-ui/core';
const { GiphySelect } = giphyPlugin;
import StyledIconButton from './Buttons/StyledIconButton.jsx';

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
          source: LinkSource,
          decorator: Link,
          attributes: ["url"],
          whitelist: {
            href: "^(?![#/])"
          }
        }
      ]}
      inlineStyles={[
        
        { type: INLINE_STYLE.BOLD },
        { type: INLINE_STYLE.ITALIC },
        { type: INLINE_STYLE.STRIKETHROUGH }
      ]}
      plugins={[giphyPlugin]}
    />
    <Grid container direction="row" component="div" className="Draftail-Toolbar" justifyContent="space-between" alignItems="center">
    <Grid item component="div" className="gif-picker">
    <GiphySelect editorState={editorState} onChange={editorState=>setEditorState(editorState)}/>
    </Grid>
    <Grid item component="div">
    <StyledIconButton label="send-message"/>
    </Grid>
    </Grid>
    {/* <linkPlugin.LinkButton setEditorState={setEditorState} getEditorState={()=>editorState} /> */}
    </Paper>
  );
}

