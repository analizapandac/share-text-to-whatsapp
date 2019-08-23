import { getWhatsAppClickToChatLink, hasNativeSharingSupport } from '../index';

test('hasNativeSharingSupport', () => {
  // since testing on node desktop, it should be falsy since no support yet is added for desktop for the Web Share API
  expect(hasNativeSharingSupport()).toBeFalsy();
});

test('getWhatsAppClickToChatLink', () => {
  expect(getWhatsAppClickToChatLink('hello')).toEqual('https://wa.me/?text=hello');
});
