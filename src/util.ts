const isIOSDevice = (): boolean => {
  const iDevices = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];
  if (navigator) {
    return !!navigator.platform && iDevices.indexOf(navigator.platform) !== -1;
  }

  return false;
};

const IPAD_MAX_WIDTH = '1024px';
export const getWhatsAppBaseUrl = (): string => {
  let link = `https://wa.me/`;
  if (isIOSDevice()) {
    try {
      const isIPadOrMobile = window.matchMedia(`(max-width: ${IPAD_MAX_WIDTH})`).matches;
      if (isIPadOrMobile) {
        link = `whatsapp://send`;
      }
    } catch (err) {
      link = `whatsapp://send`;
    }
  }
  return link;
};

export const urlEncodeText = (text: string): string => {
  return encodeURIComponent(text);
};
