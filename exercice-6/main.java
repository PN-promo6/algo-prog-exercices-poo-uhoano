class Playground {
    public static void main(String[ ] args) {
        Client jack = new Client ("jack",123456789);
        ClientPro pierre = new ClientPro ("jack", 123456789, 9876);
        System.out.println(jack.name + " " + jack.accountNumber);
        System.out.println(pierre.name + " " + pierre.accountNumber + " " + pierre.siret);
    }
}

class Client {
    String name;
    int accountNumber;
    
    Client(String name, int accountNumber) {
        this.name = name;
        this.accountNumber = accountNumber;
    }
}

class ClientPro extends Client {
    int siret;
    
    ClientPro(String name, int accountNumber, int siret) {
        super(name, accountNumber);
        this.siret = siret;
    }
}