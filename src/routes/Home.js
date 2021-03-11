import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../models/db";
import { Link } from "react-router-dom";

const Home = () => {
  const receipts = useLiveQuery(() =>
    db.receipts.where("kcal").above(0).sortBy("kcal")
  );

  if (!receipts) return <div>None!</div>;

  return (
    <div>
      {receipts.map((receipt) => (
        <div key={receipt.id}>
          Name: {receipt.name} kcal: {receipt.kcal}{" "}
          <Link to={`/${receipt.id}`}>poka</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
