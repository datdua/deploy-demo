export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/maps",
      permanent: false,
    },
  };
}

export default function Home() {
  return null;
}