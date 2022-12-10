import styles from '../styles/Home.module.css';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = {
    date: new Date().toLocaleDateString(),
    title: 'About Us',
    body: 'About our company text goes here...',
  };

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
