public class CheckingAccount extends Account {
    public CheckingAccount(String name, double balance) {
        super(name, balance);
    }

    public double calculateInterest() {
        return 0;
    }
}