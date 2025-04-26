export const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const lowercase = 'abcdefghijklmnopqrstuvwxyz';
export const numbers = '0123456789';
export const alphanumeric = numbers + lowercase + uppercase;
export const hexadecimalUppercase = numbers + 'ABCDEF';
export const hexadecimalLowercase = numbers + 'abcdef';

export const nolookalikes = '346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz';
export const nolookalikesSafe = '6789BCDFGHJKLMNPQRTWbcdfghjkmnpqrtwz';

// conforms to https://www.rfc-editor.org/rfc/rfc6265.txt
export const cookieSafe = alphanumeric  + "!#$%&'*+-.^_`|~";
// actually works in browsers https://stackoverflow.com/a/1969339
export const cookieUnsafe = alphanumeric  + "!#$%&'()*+-./:<=>?@[]^_`{|}~";
