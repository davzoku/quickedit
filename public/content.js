const ACTION_EDIT_PG = "actionEditPage";

chrome.runtime.onMessage.addListener(function (request, _, sendResponse) {
  if (request.action === ACTION_EDIT_PG) {
    toggleContentEditable();
  }
  sendResponse({
    value: "ok",
  });
});

function toggleContentEditable() {
  document.documentElement.toggleAttribute("contentEditable");
}
