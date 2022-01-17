import 'piral/polyfills';
import { renderInstance } from 'piral'; //to render everything
import { layout, errors } from './layout';

//api-key: ac36fb1ce817971c07fec3eb8d5bdcf7c8d1606d7d8dd87e8c080504f2187c28 - https://feed.piral.cloud/api/v1/pilet/tutorialss
//api-key: 1873ae11f44b8b0c6e525c7d6636bb8ba295af26776a74286a6cfb2d84483b91 - https://feed.piral.cloud/api/v1/pilet/tut0rials
//pilet publish --fresh --url https://feed.piral.cloud/api/v1/pilet/tut0rials --api-key 1873ae11f44b8b0c6e525c7d6636bb8ba295af26776a74286a6cfb2d84483b91

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/tut0rials';

declare module 'piral-core/lib/types/custom' {
  interface PiletCustomApi extends MyPiletApi {}
}

interface MyPiletApi {
  foo(): string;
};

const { root } = renderInstance({
  layout,
  errors,
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
});

setTimeout(() => {
  alert(root.foo());
}, 2000);
