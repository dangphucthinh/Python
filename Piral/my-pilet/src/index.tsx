import * as React from "react";
import { ExtensionComponentProps, PiletApi } from "my-app";
import { Link } from "react-router-dom";
import { off } from "process";

//Expected props
interface MyExtensionParams {
  id: string;
  items: Array<number>;
}

const MyPage = React.lazy(() => import("./Page"));
const FooExtension = React.lazy(() => import("./FooExtension"));

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export function setup(app: PiletApi) {
  app.showNotification("Hello from Piral!", {
    autoClose: 2000,
  });
  app.registerMenu(() => (
    <a href="https://docs.piral.io" target="_blank">
      Documentation
    </a>
  ));
  app.registerTile(
    "first-title",
    () => <Link to="/my-page">Welcome to my fist sample!</Link>,
    {
      initialColumns: 2,
      initialRows: 2,
    }
  );

  app.registerExtension("foo", () => FooExtension);

  app.registerExtension("bar", () => <div>Bar extension</div>);

  const connect = app.createConnector(
    () =>
      new Promise((resolve) =>
        setTimeout(() => resolve([{ id: 5, title: "haha" }]), 1000)
      )
  );
  const Foo = () => <app.Extension name="Foo"/>
  app.registerPage("/my-page", connect(({data}) => {
    return <MyPage data={data} Foo={Foo}></MyPage>
  }));
  app.registerPage("/example", () => {
    return (
      <>
        <h1>Example page</h1>
        <p>
          Below we list the extensions registered for "extension-slot-name".
        </p>
        <app.Extension name="extenion-slot-name" />
      </>
    );
  });

  if(process.env.NODE_ENV == "development") {
    app.registerTile(() => <app.Extension name="bar" />, {
      initialColumns: 8,
      initialRows: 8
    })
  }
}
