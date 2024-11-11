//import templates from './local_inventory/templates.json'

browser.contextMenus.create(
    {
        id: "add",
        title: 'Add to template',
        contexts: ["editable"],
    },
    () => void browser.runtime.lastError,
);

browser.contextMenus.create(
    {
        id: "template",
        title: 'templating',
        contexts: ["editable"],
    },
    () => void browser.runtime.lastError,
);

browser.menus.create({
    id: "open-popup",
    title: "open popup",
    contexts: ["all"],
  });

browser.contextMenus.onClicked.addListener(function(info, tab) {
    switch (info.menuItemId) {
        case "add":
            browser.browserAction.openPopup();
            browser.tabs.executeScript({
                file:'./browserAction/script.js'
            }, function(){
                setFormContent("test");
            });
            break;
        default:
            console.log('default');
            browser.tabs.executeScript({
                code : "document.activeElement.value = 'plop';",
            });
                //browser.tabs.executeScript({
                //    code : "document.getElementById(..).value = 'plop';",
                //});
    }
  });
