# Share Text to WhatsApp

A small JS utility library for sharing text content via WhatsApp or via the native sharing widget of your device.

## Install

```
$ npm install --save share-text-to-whatsapp

// or

$ yarn add share-text-to-whatsapp
```

## **API**

- [shareTextToWhatsApp(text)](#sharetextviawhatsapp)
- [shareTextViaNativeSharing(data, options)](#sharetextvianativesharing)
- [hasNativeSharingSupport()](#hasnativesharingsupport)
- [getWhatsAppClickToChatLink(text)](#getclicktochatlink)

### <a id="sharetextviawhatsapp">shareTextToWhatsApp(text)</a>

This function uses WhatsApp's Click to Chat feature which allows you to begin a chat with someone without having their phone number saved in your phone's address book.

Click to Chat works on both phone and WhatsApp Web.

```js
import { shareTextToWhatsApp } from 'share-text-to-whatsapp';

const message = 'Hello world';
shareTextToWhatsApp(message); // This will open up WhatsApp and you will be shown a list of contacts you can send your message to.
```
#### How to format WhatsApp messages?

WhatsApp allows you to format selected text inside your messages.

- To italicize your message, place an underscore on both sides of the text, like so: `_text_`
- To bold your message, place an asterisk on both sides of the text, like so: `*text*`

For more information on formatting, see this [guide](https://faq.whatsapp.com/en/android/26000002/).

#### How to share multi-line content?

Use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to create multi-line messages like the following below.  

```js
import { shareTextToWhatsApp } from 'share-text-to-whatsapp';

console.log(
  getWhatsAppClickToChatLink(`
  This is a multi-line text
  how will it be handled
  _this is italic_
  *this is bold*
  `)
);
```

### <a id="sharetextvianativesharing">shareTextViaNativeSharing(data, options)</a>

Depending on the device, it invokes the native sharing mechanism of the device as part of the Web Share API.

```js
import { shareTextViaNativeSharing } from 'share-text-to-whatsapp';

const data = {
  message: 'Check out this website', // required
  title: 'Awesome Website', // optional parameter
  url: 'https://www.awesomeexample.com', // optional parameter
};

shareTextViaNativeSharing(data); // This will open up WhatsApp and you will be shown a list of contacts you can send your message to.
```

If the Web Share API is not supported by the users's browser, you can specify a fallback function as the second function argument.

```js
import { shareTextViaNativeSharing } from 'share-text-to-whatsapp';

const data = {
  message: 'Check out this website', // required
  title: 'Awesome Website', // optional parameter
  url: 'https://www.awesomeexample.com', // optional parameter
};

shareTextViaNativeSharing(data, () => {
  // fallback function if native sharing is not supported
  // for example, send the message via the Click to Chat feature instead
  shareTextToWhatsApp(data.message);
});
```

### <a id="hasnativesharingsupport">hasNativeSharingSupport()</a>

Returns `true` if the user's browser supports Web Share API for invoking the device native sharing mechanism.

```js
import { hasNativeSharingSupport } from 'share-text-to-whatsapp';

hasNativeSharingSupport(); // returns true or false
```

As of August 2019, the Web Share API is supported by the following browsers. See [caniuse.com](https://caniuse.com/#search=web%20share) for a more updated information.

![Web Share API Browser Support](https://raw.githubusercontent.com/analizapandac/share-text-to-whatsapp/master/images/web-share-api-support.png)

### <a id="getclicktochatlink">getWhatsAppClickToChatLink(text)</a>

Accepts a `string` message and returns a link with a pre-filled message that will automatically appear in the text field of a chat.

This returned link will have either of the following format:

1. https://wa.me?text=urlencodedtext 
2. whatsapp://send?text=urlencodedtext 

`urlencodedtext` is the URL-encoded pre-filled message.

When clicking on the link, the user will be shown a list of contacts to send the message to.

```js
import { shareTextViaNativeSharing } from 'share-text-to-whatsapp';

const message = 'Hello world';
getWhatsAppClickToChatLink(message); // https://wa.me?text=hello%20there || whatsapp://send?text=hello%20there 
```

## **Library Limitations**

### **Does it detect if WhatsApp is installed on the user's device?**

**No**. If the user does not have WhatsApp installed and native sharing is used, the user will have the other apps to choose from when sending the message either the device messaging app, via email, etc.

If using the Click to Chat feature, the user will be redirected to the WhatsApp download page in order to use it.

## License

MIT © Ana Liza Pandac