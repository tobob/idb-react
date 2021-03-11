import Dexie, { Table } from "dexie";
import { populate } from "./populate";
import { Receipt } from "./Receipt";

export class ReceiptDB extends Dexie {
  receipts!: Table<Receipt, number>;
  constructor() {
    super("ReceiptDB");
    this.version(1).stores({
      receipts: "++id, name, desc, kcal",
    });
  }
}

export const db = new ReceiptDB();

db.on("populate", populate);

export function resetDatabase() {
  return db.transaction("rw", db.receipts, async () => {
    await Promise.all(db.tables.map((table) => table.clear()));
    await populate();
  });
}
