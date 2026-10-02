// Shared by the popup (index.html) and the service worker (background.js).

// Emoji pictographs, skin-tone modifiers, flag letters and the invisible
// joiners/selectors that glue multi-part emojis together.
const EMOJI_PATTERN =
  /\p{Extended_Pictographic}|\p{Emoji_Modifier}|\p{Regional_Indicator}|[‍︎️⃣]/gu;

function removeEmojis(text) {
  return text.replace(EMOJI_PATTERN, "").replace(/[ \t]{2,}/g, " ").trim();
}

// Returns an http(s) URL if the cleaned text is a link, otherwise null.
// Whitespace is dropped because links are often split up with emojis and spaces.
function toUrl(text) {
  const compact = text.replace(/\s+/g, "");
  if (!compact) {
    return null;
  }

  const candidates = [compact];
  if (!/^[a-z][a-z0-9+.-]*:/i.test(compact) && compact.includes(".")) {
    candidates.push("https://" + compact);
  }

  for (const candidate of candidates) {
    try {
      const url = new URL(candidate);
      if ((url.protocol === "http:" || url.protocol === "https:") && url.hostname.includes(".")) {
        return url.href;
      }
    } catch (e) {
      // Not a valid URL, try the next candidate.
    }
  }
  return null;
}
