export async function getStaticProps() {
  const client = await MongoClient.connect('your-mongo-uri');
  const db = client.db();
  const meetups = await db.collection('meetups').find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((m) => ({
        title: m.title,
        address: m.address,
        image: m.image,
        id: m._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default function HomePage({ meetups }) {
  return (
    <ul>
      {meetups.map((m) => (
        <li key={m.id}>
          <h2>{m.title}</h2>
          <img src={m.image} width="200" />
          <p>{m.address}</p>
          <Link href={`/${m.id}`}>See Details</Link>
        </li>
      ))}
    </ul>
  );
}
