export function toTitleCase(text) {
  return text
    .split(" ")
    .map((token) => token[0].toUpperCase() + token.slice(1))
    .join(" ");
}
