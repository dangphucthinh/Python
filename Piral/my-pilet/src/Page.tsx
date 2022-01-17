import { PageComponentProps } from 'my-app';
import * as React from 'react';

// const Page: React.FC<PageComponentProps & {data: any}> = ({ data, piral }) => (
//   <div>
//     <h1>My page</h1>
//     <p>Example page</p>
//     <piral.Extension name="foo" />
//     <ul>
//       {
//         data.map(post => (
//           <li key={data.id}> {data.title} </li>
//         ))
//       }
//     </ul>
//   </div>
// );

export interface PageProps {
  data: any;
  Foo: React.ComponentType;
}

const Page: React.FC<PageProps> = ({ data, Foo }) => (
  <div>
    <h1> My page </h1>
    <p> This is just some example text...</p>
    <Foo />
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </div>
);

export default Page;