import * as React from 'react';

export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface MyPageProps {
  data: Array<Post>;
}

export const MyPage: React.FC<MyPageProps> = ({ data }) => (
  <div>
    <h1>Posts</h1>
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <b>{item.title}</b>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  </div>
);