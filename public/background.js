const MENU_EDIT_PG = "menuEditPage";
const COMMAND_EDIT_PG = "commandEditPage";
const ACTION_EDIT_PG = "actionEditPage";

// context menus
chrome.contextMenus.create({
  id: MENU_EDIT_PG,
  title: "Toggle Page Edit",
  contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(() => {
  sendEditMessage();
});

// shortcuts commands
chrome.commands.onCommand.addListener(function (command) {
  if (command === COMMAND_EDIT_PG) {
    sendEditMessage();
  }
});

function sendEditMessage() {
  chrome.tabs.getSelected(undefined, (tab) => {
    chrome.tabs.sendMessage(tab.id, {
      action: ACTION_EDIT_PG,
    });
  });
}
