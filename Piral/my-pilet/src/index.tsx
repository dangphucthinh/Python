import * as React from "react";
import { ExtensionComponentProps, PiletApi } from "my-app";
import { Link } from "react-router-dom";
import { Post, MyPage } from "./Page";
import { MyPageMenu } from "./MyPageMenu";

//Expected props
interface MyExtensionParams {
  id: string;
  items: Array<number>;
}

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const MyExtension: React.FC<ExtensionComponentProps<MyExtensionParams>> = ({ params }) => {
  //Check passed in items
  if (typeof params.id != 'string') {
    return null
  }

  if (!Array.isArray(params.items) || params.items.some(m => typeof m !== 'number')) {
    return null;
  }

  return (
    <>
      <h1>
        This is my first extenson!
      </h1>
    </>
  );
};

export function setup(app: PiletApi) {
  app.showNotification("Hello from Piral!", {
    autoClose: 2000,
  });
  app.registerMenu(() => (
    <a href="https://docs.piral.io" target="_blank">
      Documentation
    </a>
  ));
  //api-key: 1873ae11f44b8b0c6e525c7d6636bb8ba295af26776a74286a6cfb2d84483b91
  app.registerTile(
    "first-title",
    () => <Link to="/sample">Welcome to my fist sample!</Link>,
    {
      initialColumns: 2,
      initialRows: 1,
    }
  );
  app.registerTile(() => (
    <button onClick={() => app.unregisterTile("first-title")}>
      Remove first title
    </button>
  ));
  const connect = app.createConnector<Array<Post>>(() => fetch(apiUrl).then(res => res.json()));
  app.registerMenu(MyPageMenu)
  app.registerPage("/my-page", connect(MyPage));
  app.registerPage("/example", () => {
    return (
      <>
        <h1>Example page</h1>
        <p>Below we list the extensions registered for "extension-slot-name".</p>
        <app.Extension name="extenion-slot-name" />
      </>
    )
  });
}
