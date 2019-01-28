const db = firebase.database();
const kontaktliste = db.ref("kontaktliste");
const kontakter = db.ref("kontakter");

kontaktliste.remove();
bloggere.remove();

kontaktliste.push(
{
  "navn": "Gard",
  "mellomnavn": "Risøy",
  "etternavn": "Borgheim",
  "telefonnummer": "41394114",
  "hjemadresse": "Bakåsveien 58a",
}
);
kontaktliste.push(
  {
    "navn": "Andreas",
    "mellomnavn": "Tanke",
    "etternavn": "Holm",
    "telefonnummer": "90020069",
    "hjemadresse": "Lesterudkroken 29",
  }
);
kontaktliste.push(
  {
    "navn": "Jakob",
    "mellomnavn": "Winther",
    "etternavn": "Storaas",
    "telefonnummer": "48220970",
    "hjemadresse": "Mellomskarva 4",
  }
);
kontaktliste.push(
  {
    "navn": "Sondre",
    "mellomnavn": "",
    "etternavn": "Moen",
    "telefonnummer": "45283111",
    "hjemadresse": "Guldbranslia 17",
  }
);
const billGates = kontakter.child("90440000");
billGates.set({
  navn: "Bill Gates",
  epost: "bill@microsoft.com"
});
const georgeBush = kontakter.child("90440000");
billGates.set({
  navn: "George Bush",
  epost: "george@us.com"
});
