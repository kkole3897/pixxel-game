export default function UserPage({ params }: { params: { uid: string } }) {
  return <div>user : {params.uid}</div>;
}
