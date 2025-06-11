import Link from 'next/link';

const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

export default function AboutUsList() {
  return (
    <div>
      <h2>Team Members</h2>
      <ul>
        {details.map((dev) => (
          <li key={dev.id}>
            <Link href={`/aboutus/${dev.id}`}>{dev.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
