importScripts("clean.js");

const MENU_ID = "remove-emojis-open-tab";

// The service worker restarts often; create the menu only once per install/update.
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ID,
    title: "Emojileri Silip Yeni Sekmede Aç",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId !== MENU_ID || !info.selectionText) {
    return;
  }

  const text = removeEmojis(info.selectionText);
  if (!text) {
    return;
  }

  // Open links directly; search for anything that isn't a link.
  const url = toUrl(text) || "https://www.google.com/search?q=" + encodeURIComponent(text);
  chrome.tabs.create({ url });
});
