import java.util.*;

public class Bank {
    private List<Account> accounts = new ArrayList<>();

    public void addAccount(Account acc) {
        accounts.add(acc);
    }

    public double getTotalDeposits() {
        return accounts.stream().mapToDouble(Account::getBalance).sum();
    }

    public List<Account> getAllAccounts() {
        return accounts;
    }
}