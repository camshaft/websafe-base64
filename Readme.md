# websafe-base64

Encode/decode websafe base64

## Installation

Install with [component(1)](http://component.io):

```sh
$ component install CamShaft/websafe-base64
```

## API

```js
var websafe = require('websafe-base64');

console.log(websafe('œ∑´®†\¨ˆøπåß∂˚∆˙ååƒ©˙∆˚¬Ω≈ç√∫˜µ¡™£¢∞§∆¬˙å¶•ªº'));
// xZPiiJHCtMKu4oCgwqjLhsO4z4DDpcOf4oiCy5riiIbLmcOlw6XGksKpy5niiIbLmsKszqniiYjDp-KImuKIq8ucwrXCoeKEosKjwqLiiJ7Cp-KIhsKsy5nDpcK24oCiwqrCug

console.log(websafe('xZPiiJHCtMKu4oCgwqjLhsO4z4DDpcOf4oiCy5riiIbLmcOlw6XGksKpy5niiIbLmsKszqniiYjDp-KImuKIq8ucwrXCoeKEosKjwqLiiJ7Cp-KIhsKsy5nDpcK24oCiwqrCug'));
// 'œ∑´®†\¨ˆøπåß∂˚∆˙ååƒ©˙∆˚¬Ω≈ç√∫˜µ¡™£¢∞§∆¬˙å¶•ªº'
```

## License

MIT
