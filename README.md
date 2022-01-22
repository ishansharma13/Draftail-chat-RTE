# Draftail-chat-RTE
A slack like chat container built using draftail and draft-js plugins

To set it up:
  1. clone this repo
  2. run npm install
  3. npm start


Following Features are Present:
  1. Shortcut detection for Bold, Italic, Underline, Code, etc.
  2. Tooltip for the top Toolbar showing the shortcuts
  3. Draft-js Giphy Plugin
  4. Draft-js Emoji Plugin
 
 Following Bugs which will be fixed in the next commit:
  1. Gif Popover is not closed when clicked outside, need to remedy that
 
 Further Features that may be added:
  1. Send Functionality (where the formatted message can be sent to a server, for this, since the editor state contains all the details needed,
  the most viable option will be store the editorstate or raw content state)
  2. Drag-n-Drop: where blocks can be dragged for placing somehwere else
  3. Drag-n-Drop-file-upload: when user uploads the file by dragging it to the container
  4. Handle Pasting of Formatted Text: So that when formatted text gets copied, the formats applied on the source are also persisted
  
