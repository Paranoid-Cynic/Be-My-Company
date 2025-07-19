import { useParams } from "react-router-dom";
export default function ProfileDetail() {
  const { id } = useParams();
  return (
    <div>
      <h2>Profile Detail</h2>
      <p>Details: {id}</p>
      <button>Book Now</button>
    </div>
  );
}
