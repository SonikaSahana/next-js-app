import { MongoClient, ObjectId } from 'mongodb';

export async function getStaticPaths() {
  const client = await MongoClient.connect('your-mongo-uri');
  const db = client.db();
  const meetups = await db.collection('meetups').find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetups.map((m) => ({
      params: { meetupId: m._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const id = context.params.meetupId;

  const client = await MongoClient.connect('your-mongo-uri');
  const db = client.db();
  const meetup = await db.collection('meetups').findOne({ _id: new ObjectId(id) });
  client.close();

  if (!meetup) return { notFound: true };

  return {
    props: {
      meetup: {
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      },
    },
  };
}

export default function MeetupDetail({ meetup }) {
  return (
    <div>
      <h1>{meetup.title}</h1>
      <img src={meetup.image} width="300" />
      <p>{meetup.address}</p>
      <p>{meetup.description}</p>
    </div>
  );
}
