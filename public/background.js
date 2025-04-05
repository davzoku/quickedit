const MENU_EDIT_PG = "menuEditPage";
const COMMAND_EDIT_PG = "commandEditPage";
const ACTION_EDIT_PG = "actionEditPage";

// Create context menu on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_EDIT_PG,
    title: "Toggle Page Edit",
    contexts: ["all"]
  });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener(() => {
  sendEditMessage();
});

// Handle keyboard shortcuts
chrome.commands.onCommand.addListener((command) => {
  if (command === COMMAND_EDIT_PG) {
    sendEditMessage();
  }
});

// Send message to toggle contentEditable on the active tab
function sendEditMessage() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs && tabs.length > 0) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: ACTION_EDIT_PG
      });
    }
  });
}