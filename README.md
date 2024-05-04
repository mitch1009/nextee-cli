# @korena/core

A simple library for generating Gravatar image URLs based on email addresses.

## Installation

```sh
npm install @korena/core
```

## Usage

```javascript
import { generateGravatar } from '@korena/core';

// Generate a Gravatar image URL
const email = 'example@example.com';
const gravatarUrl = generateGravatar(email);

console.log(gravatarUrl);
```

## Parameters

`email`: (string): The email address used to generate the Gravatar image URL.

`d`:  (any, optional): The default image option for the Gravatar image URL. Default is "mp".

## Example
```js
import { generateGravatar } from '@mitch1009/gravatar';

const email = 'example@example.com';
const gravatarUrl = generateGravatar(email);

console.log(gravatarUrl); // Output: https://gravatar.com/avatar/1f71134e4fe036f0d1e19e77397e0e7e?d=mp
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.