public class BankingTest {
    public static void main(String[] args) {
        Bank bank = new Bank();

        bank.addAccount(new SavingsAccount("Alice", 1000));
        bank.addAccount(new CheckingAccount("Bob", 500));
        bank.addAccount(new FixedDepositAccount("Charlie", 10000));

        System.out.println("Total deposits: " + bank.getTotalDeposits());
    }
}