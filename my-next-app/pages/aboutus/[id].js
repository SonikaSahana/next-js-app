import { useRouter } from 'next/router';

const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

export default function TeamMember() {
  const router = useRouter();
  const { id } = router.query;

  const member = details.find((dev) => dev.id === Number(id));

  if (!member) {
    return <h2>Developer doesn't exist</h2>;
  }

  return (
    <div>
      <h2>{member.name}</h2>
      <p>{member.role}</p>
    </div>
  );
}
