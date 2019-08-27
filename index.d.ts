export declare const shareTextToWhatsApp: (text: string) => void;
export declare const getWhatsAppClickToChatLink: (text: string) => string;
export declare const hasNativeSharingSupport: () => boolean;
interface ShareData {
    text: string;
    title?: string;
    url?: string;
}
declare type Fallback = () => void;
export declare const shareTextViaNativeSharing: (data: ShareData, fallbackFunction?: Fallback | undefined) => Promise<void>;
export {};
