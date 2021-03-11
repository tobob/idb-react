import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../models/db";
import { useParams } from "react-router-dom";

const Show = () => {
  let { id } = useParams();
  const receipt = useLiveQuery(() => db.receipts.get(parseInt(id)));

  if (!receipt) return <div>None!</div>;

  return (
    <div>
      <h3>{receipt.name}</h3>
      <span>kcal: {receipt.kcal}</span>
      <p>description: {receipt.desc}</p>
    </div>
  );
};

export default Show;
