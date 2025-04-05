const ACTION_EDIT_PG = "actionEditPage";

chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
  if (request.action === ACTION_EDIT_PG) {
    toggleContentEditable();
  }
  sendResponse({ value: "ok" });
});

function toggleContentEditable() {
  const html = document.documentElement;
  const isEditable = html.getAttribute("contentEditable") === "true";
  html.setAttribute("contentEditable", isEditable ? "false" : "true");
}