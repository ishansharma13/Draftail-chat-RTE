import React, { Component } from "react";

import { AtomicBlockUtils, EditorState } from "draft-js";
import Modal from "../components/Modal";


class ImageSource extends Component {
  

  constructor(props) {
    super(props);

    const { entity } = this.props;
    const state = {
      src: {},
    };

    if (entity) {
      const data = entity.getData();
      state.src = data.src;
    }

    this.state = state;

    this.onRequestClose = this.onRequestClose.bind(this);
    this.onAfterOpen = this.onAfterOpen.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.onChangeSource = this.onChangeSource.bind(this);
  }

  /* :: onConfirm: (e: Event) => void; */
  onConfirm(e) {
    const {
      editorState,
      entity,
      entityKey,
      entityType,
      onComplete,
    } = this.props;
    const { src } = this.state;
    const content = editorState.getCurrentContent();
    let nextState;
    console.log(src);
    e.preventDefault();

    if (entity && entityKey) {
      const nextContent = content.mergeEntityData(entityKey, { src });
      nextState = EditorState.push(editorState, nextContent, "apply-entity");
    } else {
      const contentWithEntity = content.createEntity(
        // Fixed in https://github.com/facebook/draft-js/commit/6ba124cf663b78c41afd6c361a67bd29724fa617, to be released.
        // $FlowFixMe
        entityType.type,
        "MUTABLE",
        {
          alt: src.alt,
          src: src.src,
          type: src.type
        },
      );
      nextState = AtomicBlockUtils.insertAtomicBlock(
        editorState,
        contentWithEntity.getLastCreatedEntityKey(),
        " ",
      );
    }

    onComplete(nextState);
  }

  /* :: onRequestClose: (e: SyntheticEvent<>) => void; */
  onRequestClose(e) {
    const { onClose } = this.props;
    e.preventDefault();

    onClose();
  }

  /* :: onAfterOpen: () => void; */
  onAfterOpen() {
    const input = this.inputRef;

    if (input) {
      input.focus();
      input.select();
    }
  }

  /* :: onChangeSource: (e: Event) => void; */
  onChangeSource(e) {
    if (e.target instanceof HTMLInputElement) {
      console.log("here");
      let src = e.target.files[0];
      console.log(src);
    //   for(let i = 0;i<src.length;i++){
      let tmp = {};
      tmp.alt = src.name;
      tmp.src = URL.createObjectURL(src);
      tmp.type = src.type;
    //   src = tmp;
    // //   }
      this.setState({ src:tmp });
    }
  }

  render() {
    const { src } = this.state;
    return (
      <Modal
        onRequestClose={this.onRequestClose}
        onAfterOpen={this.onAfterOpen}
        isOpen
        contentLabel="Image chooser"
      >
        <form className="ImageSource" onSubmit={this.onConfirm}>
          <label className="form-field">
            <span className="form-field__label">Image src</span>
            <input
              ref={(inputRef) => {
                this.inputRef = inputRef;
              }}
              type="file"
              onChange={this.onChangeSource}
              value={src.name || ""}
            //   multiple
            //   placeholder="/media/image.png"
            />
          </label>

          <button type="submit">
            Save
          </button>
        </form>
      </Modal>
    );
  }
}

export default ImageSource;