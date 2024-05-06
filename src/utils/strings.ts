export function limitText(str: string, limit: number, suffix = "...") {
  return str.length > limit ? str.slice(0, limit) + suffix : str;
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
