export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/get-meetups');
  const data = await res.json();

  return {
    props: {
      meetups: data,
    },
    revalidate: 10, 
  };
}

export default function HomePage({ meetups }) {
  return (
    <ul>
      {meetups.map((m) => (
        <li key={m._id}>{m.title} - {m.address}</li>
      ))}
    </ul>
  );
}
