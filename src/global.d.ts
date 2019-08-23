interface ShareData {
  text: string;
  title?: string;
  url?: string;
}

interface Navigator {
  share?: (data?: ShareData) => Promise<void>;
}
