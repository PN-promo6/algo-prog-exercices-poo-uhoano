 
class Playground {
    public static void main(String[ ] args) {
        Ticket ticketMadonna = new Ticket(1, "Madonna", "22 Février 2019", "20h00", "Le Dome", "95€");
        Ticket ticketTheWeeknd = new Ticket(2, "The Weeknd", "15 Novembre", "21h00", "Accor Arena");
        System.out.println(ticketTheWeeknd.ticketInformations());
    }
}

public class Ticket {
    public int id;
    public String artist;
    public String date;
    public String hour;
    public String location;
    public String price = "";

    public Ticket(int id, String artist, String date, String hour, String location, String price ){
        this.id = id;
        this.artist = artist;
        this.date = date;
        this.hour = hour;
        this.location = location;
        this.price = price;
    }

    public Ticket(int id, String artist, String date, String hour, String location){
        this.id = id;
        this.artist = artist;
        this.date = date;
        this.hour = hour;
        this.location = location;
    }

    String ticketInformations(){
        String details = "<p>Nom de l'artiste " + this.artist + "</p> <p>Id du billet : " + this.id + "</p><p>date du concert : " + this.date + "</p><p> Heure du concert : " + this.hour + " </p> <p>Lieu du concert : " + this.location + "</p>";

        if (this.price != "" ) {
            details = details + "<p> </p> prix du billet : " + this.price;
        }

        return details;
        }
}