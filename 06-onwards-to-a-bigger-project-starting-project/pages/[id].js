import { useRouter } from 'next/router';

const DUMMY_DATA = [
  { id: 'm1', title: 'React Meetup', address: 'Bangalore', image: 'image-url', description: 'A great meetup!' },
  { id: 'm2', title: 'Next.js Meetup', address: 'Delhi', image: 'image-url', description: 'Awesome meetup!' },
];

export default function MeetupDetail() {
  const router = useRouter();
  const { id } = router.query;

  const meetup = DUMMY_DATA.find((m) => m.id === id);

  if (!meetup) return <p>Meetup not found</p>;

  return (
    <div>
      <h1>{meetup.title}</h1>
      <img src={meetup.image} alt={meetup.title} width="300" />
      <p>{meetup.address}</p>
      <p>{meetup.description}</p>
    </div>
  );
}
