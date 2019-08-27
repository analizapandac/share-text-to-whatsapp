# Changelog

### 1.0.2 (27 Aug 2019)
 * Use `try/catch` to handle `navigator.share` Promise rejection.
 * Changed `getWhatsAppBaseUrl` implementation to only use `whatsapp://send` on Android devices.

### 1.0.0 (23 Aug 2019)

Share Text to WhatsApp is released.

The following APIs are included in the first release.
 * `shareTextToWhatsApp`
 * `shareTextViaNativeSharing` 
 * `hasNativeSharingSupport` 
 * `getWhatsAppClickToChatURL` 