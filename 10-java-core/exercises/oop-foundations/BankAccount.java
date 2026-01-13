public class BankAccount {
    private static String bankName = "MyBank";
    private static int totalAccounts = 0;
    private static int counter = 1000;

    private int accountNumber;
    private String holderName;
    private double balance;

    public BankAccount(String holderName, double balance) {
        this.accountNumber = ++counter;
        this.holderName = holderName;
        this.balance = balance;
        totalAccounts++;
    }

    public static String getBankInfo() {
        return bankName + " - Total Accounts: " + totalAccounts;
    }

    public void deposit(double amount) {
        balance += amount;
    }

    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
        }
    }

    public double getBalance() {
        return balance;
    }
}