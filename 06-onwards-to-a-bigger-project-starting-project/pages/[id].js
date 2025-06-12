const DUMMY_DATA = [
  { id: 'm1', title: 'React Meetup', address: 'Bangalore', image: 'image-url', description: 'A great meetup!' },
  { id: 'm2', title: 'Next.js Meetup', address: 'Delhi', image: 'image-url', description: 'Awesome meetup!' },
  { id: 'm3', title: 'Fullstack Meetup', address: 'Mumbai', image: 'image-url', description: 'Connect with fullstack devs.' },
];

export async function getStaticPaths() {
  const paths = DUMMY_DATA.map((m) => ({ params: { id: m.id } }));
  return { paths, fallback: false }; 
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const meetup = DUMMY_DATA.find((m) => m.id === id);

  if (!meetup) return { notFound: true };

  return {
    props: { meetup },
  };
}

export default function MeetupDetail({ meetup }) {
  return (
    <div>
      <h1>{meetup.title}</h1>
      <img src={meetup.image} alt={meetup.title} width="300" />
      <p>{meetup.address}</p>
      <p>{meetup.description}</p>
    </div>
  );
}
