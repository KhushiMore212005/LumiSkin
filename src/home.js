import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>This is the previous page</h2>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}
