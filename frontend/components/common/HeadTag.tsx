import Head from "next/head";

interface HeadProps {
  title: string;
}

const HeadTag: React.FC<HeadProps> = ({ title }) => {
  return (
    <Head>
      <meta name="description" content="Free Web tutorials" />
      <meta name="keywords" content="HTML, CSS, JavaScript" />
      <meta name="author" content="John Doe" />
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

export default HeadTag;
