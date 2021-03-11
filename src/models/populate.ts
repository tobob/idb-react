import { db } from "./db";

export async function populate() {
  await db.receipts.bulkAdd([
    {
      name: "Jajecznica",
      desc:
        "Na patelni rozpuścić łyżkę masła. Gdy stanie się płynne, wbić bezpośrednio trzy jajka. Delikatnie i bardzo wolno mieszam. Lekko solę. Gdy zaczną się ścinać dolewam 2-3 łyżki mleka lub śmietanki i smażę jeszcze przez chwilę. Przekładam na talerz i jajecznica gotowa!",
      kcal: 500,
    },
    {
      name: "Placki ziemniaczane",
      kcal: 1200,
      desc:
        "Ziemniaki obrać i zetrzeć na tarce o małych oczkach bezpośrednio do większej i płaskiej miski. Zostawić je w misce bez mieszania, miskę delikatnie przechylić i odstawić tak na ok. 5 minut. W międzyczasie odlewać zbierający się sok, delikatnie przytrzymując ziemniaki, nadal ich nie mieszać. Na koniec docisnąć dłonią do miski i odlać jeszcze więcej soku. Dodać mąkę, drobno startą cebulę, jajko oraz dwie szczypty soli. Rozgrzać patelnię, wlać olej. Masę ziemniaczaną wymieszać. Nakładać porcje masy (1 pełna łyżka) na rozgrzany olej i rozprowadzać ją na dość cienki placek. Smażyć na średnim ogniu przez ok. 2 - 3 minuty na złoty kolor, przewrócić na drugą stronę i powtórzyć smażenie.",
    },
    {
      name: "Kanapka z serem",
      kcal: 100,
      desc: "Pokrój ser, dodaj chleb",
    },
  ]);
}
