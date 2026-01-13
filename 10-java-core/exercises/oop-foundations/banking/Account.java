public abstract class Account {
    protected String holderName;
    protected double balance;

    public Account(String holderName, double balance) {
        this.holderName = holderName;
        this.balance = balance;
    }

    public abstract double calculateInterest();

    public void deposit(double amount) {
        balance += amount;
    }

    public double getBalance() {
        return balance;
    }

    public String getHolderName() {
        return holderName;
    }
}