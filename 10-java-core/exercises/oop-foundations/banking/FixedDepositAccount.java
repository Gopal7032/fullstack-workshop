public class FixedDepositAccount extends Account {
    public FixedDepositAccount(String name, double balance) {
        super(name, balance);
    }

    public double calculateInterest() {
        return balance * 0.07;
    }
}