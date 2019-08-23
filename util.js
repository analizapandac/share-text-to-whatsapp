"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isIOSDevice = () => {
    const iDevices = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];
    if (navigator) {
        return !!navigator.platform && iDevices.indexOf(navigator.platform) !== -1;
    }
    return false;
};
const IPAD_MAX_WIDTH = '1024px';
exports.getWhatsAppBaseUrl = () => {
    let link = `https://wa.me/`;
    if (isIOSDevice()) {
        try {
            const isIPadOrMobile = window.matchMedia(`(max-width: ${IPAD_MAX_WIDTH})`).matches;
            if (isIPadOrMobile) {
                link = `whatsapp://send`;
            }
        }
        catch (err) {
            link = `whatsapp://send`;
        }
    }
    return link;
};
exports.urlEncodeText = (text) => {
    return encodeURIComponent(text);
};
