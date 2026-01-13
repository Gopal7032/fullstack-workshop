public class SavingsAccount extends Account {
    public SavingsAccount(String name, double balance) {
        super(name, balance);
    }

    public double calculateInterest() {
        return balance * 0.04;
    }
}