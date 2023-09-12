document.getElementById("deletorButton").addEventListener("click", toDelete);
document.getElementById("copyToClipboardButton").addEventListener("click", copyToClipboard);







function toDelete(){
    
    let link = document.getElementById("myInput").value;
    let kelime="";
for(let i=0;i<link.length;i++){
    if(link.charCodeAt(i)>32&&link.charCodeAt(i)<127){
    kelime+=link.charAt(i);
        }
}
let outputLink=document.getElementById("myP")
outputLink.innerHTML = ( kelime );
outputLink.href=(kelime);
  }

function copyToClipboard() {
    
    var copyText = document.getElementById("myP");
    

    navigator.clipboard
    .writeText(copyText)
    .then(() => {
      alert(copyText +" PANOYA KOPYALANDI");
    })
    .catch(() => {
      alert("BIR SEYLER YANLIS GITTI");
    });
}







