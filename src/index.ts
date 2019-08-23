import { getWhatsAppBaseUrl, urlEncodeText } from './util';

export const shareTextToWhatsApp = (text: string): void => {
  window.location.href = `${getWhatsAppBaseUrl()}?text=${urlEncodeText(text)}`;
};

export const getWhatsAppClickToChatLink = (text: string): string => {
  return `${getWhatsAppBaseUrl()}?text=${urlEncodeText(text)}`;
};

export const hasNativeSharingSupport = (): boolean => {
  if (navigator.share) {
    return true;
  }
  return false;
};

interface ShareData {
  text: string;
  title?: string;
  url?: string;
}

type Fallback = () => void; // fallback function if native sharing is not supported
export const shareTextViaNativeSharing = (data: ShareData, fallbackFunction?: Fallback): void => {
  if (hasNativeSharingSupport()) {
    navigator.share!(data);
  } else {
    if (typeof fallbackFunction === 'function') {
      fallbackFunction();
    }
  }
};
