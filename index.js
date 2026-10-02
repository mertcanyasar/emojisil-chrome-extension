const input = document.getElementById("myInput");
const output = document.getElementById("myP");

document.getElementById("deletorButton").addEventListener("click", toDelete);
document.getElementById("copyToClipboardButton").addEventListener("click", copyToClipboard);

function toDelete() {
  const text = removeEmojis(input.value);
  const url = toUrl(text);

  output.textContent = url || text;
  if (url) {
    output.href = url;
  } else {
    output.removeAttribute("href");
  }
}

function copyToClipboard() {
  const text = output.textContent;
  if (!text) {
    alert("ÖNCE EMOJİLERİ SİL");
    return;
  }

  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(text + " PANOYA KOPYALANDI");
    })
    .catch(() => {
      alert("BİR ŞEYLER YANLIŞ GİTTİ");
    });
}
