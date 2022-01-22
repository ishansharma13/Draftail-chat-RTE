import React, { Component } from "react";

import { AtomicBlockUtils, EditorState } from "draft-js";
import Modal from "../components/Modal";

const fileToBase64 = (file) => {
    return new Promise((resolve) => {
      var reader = new FileReader();
      // Read file content on file loaded event
      reader.onload = function (event) {
        resolve(event.target.result);
      };
  
      // Convert data to base64
      reader.readAsDataURL(file);
    });
  };

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
    // console.log(src);
    e.preventDefault();

    if (entity && entityKey) {
     
      const nextContent = content.mergeEntityData(entityKey, { src: src.src, alt:src.alt,type:src.type });
      nextState = EditorState.push(editorState, nextContent, "apply-entity");
    } else {
        const contentWithEntity = content.createEntity(
        // Fixed in https://github.com/facebook/draft-js/commit/6ba124cf663b78c41afd6c361a67bd29724fa617, to be released.
        // $FlowFixMe
        entityType.type,
        "MUTABLE",
        {
        //   entityKey: entityKey,
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
  async onChangeSource(e) {
    if (e.target instanceof HTMLInputElement) {
      let src = e.target.files[0];
      console.log(src);
      let tmp = {};
      tmp.alt = src.name;
      tmp.src = await fileToBase64(src).then((result) => {
        return result;
      });
      tmp.type = src.type;

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
            <span className="form-field__label">File Upload</span>
            <input
              ref={(inputRef) => {
                this.inputRef = inputRef;
              }}
              type="file"
              onChange={this.onChangeSource}
              value={src.name || undefined}
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