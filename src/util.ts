// The client user agent string.
// Lowercase, so we can use the more efficient indexOf(), instead of Regex
const userAgent = window.navigator.userAgent.toLowerCase();

const isWindows = (): boolean => {
  return userAgent.indexOf('windows') !== -1;
};

const isAndroid = (): boolean => {
  return !isWindows() && userAgent.indexOf('android') !== -1;
};

export const getWhatsAppBaseUrl = (): string => {
  let link = `https://wa.me/`;
  if (isAndroid()) {
    // use this link for android devices
    link = `whatsapp://send`;
  }
  return link;
};

export const urlEncodeText = (text: string): string => {
  return encodeURIComponent(text);
};
