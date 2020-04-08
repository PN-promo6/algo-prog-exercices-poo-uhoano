class ConcertTicket {

  public artistName: string;
  public placeNumber: string;
  public date: string;
  public hour: number;
  public price: string = "";

  constructor(artistName: string, placeNumber: string, date: string, hour: number, price?: string) {

    this.artistName = artistName;
    this.placeNumber = placeNumber;
    this.date = date;
    this.hour = hour;
    if (price) {
      this.price = price
    }
  }


  public htmlDetail(): string {
    let htmlContent: string = `
  <p>Nom de l'artiste : ${this.artistName} </p>
  <p>Numero de place : ${this.placeNumber}</p>
  <p>Jour du concert : ${this.date}</p>
  <p> Heure du concert : ${this.hour}</p> `;
    if (this.price != "") {
      htmlContent = htmlContent + `<p> Prix du concert : ${this.price}</p> `;
    };
    return htmlContent;
  }
}

let ticket01: ConcertTicket = new ConcertTicket("Franky Vincent", "23", "15/10/2008", 21);
console.log(ticket01.htmlDetail())
let ticket02: ConcertTicket = new ConcertTicket("Helene Segara", "01", "01/02/2020", 21, "23.90");
console.log(ticket02.htmlDetail())
