import styles from '../../styles/Home.module.css';
import { GetServerSideProps } from 'next';

const fetchPost = async (slug: string | null | undefined) => {
  const baseUrl = 'http://localhost:3000/api';
  const res = await fetch(`${baseUrl}/post/${slug}`);
  const data = await res.json();
  return data;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetchPost((context?.params?.slug as string) ?? '');
  return { props: { data } };
};

export default function Page({ data }: any) {
  return (
    <article className={styles.container}>
      <h1>{data.title}</h1>
      <p>
        <small>Published on {data.date}</small>
      </p>
      <p>{data.body}</p>
    </article>
  );
}
