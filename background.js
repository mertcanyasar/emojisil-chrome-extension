chrome.contextMenus.create({
    id:"1",
    title: " Emojileri Silip Yeni Sekmede Ac",
    contexts: ["selection"],
    
  })
 
  
  chrome.contextMenus.onClicked.addListener((info, tab)=>{
    
    var link = info.selectionText.toString();
    var kelime="";
    for(let i=0;i<link.length;i++){
        if(link.charCodeAt(i)>32&&link.charCodeAt(i)<127){
        kelime+=link.charAt(i);
            }
    }
    
    chrome.tabs.create({
        url: kelime 
      
 });})