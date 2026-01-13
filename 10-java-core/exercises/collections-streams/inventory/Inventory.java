import java.util.*;
import java.util.stream.Collectors;

public class Inventory {
    private List<Product> products = new ArrayList<>();
    private Set<String> categories = new HashSet<>();
    private Map<String, Product> productMap = new HashMap<>();
    private Queue<Product> lowStockQueue = new LinkedList<>();

    public void addProduct(Product p) {
        products.add(p);
        categories.add(p.getCategory());
        productMap.put(p.getId(), p);
        if (p.getQuantity() < 10) lowStockQueue.add(p);
    }

    public Product getById(String id) {
        return productMap.get(id);
    }

    public List<Product> getByCategory(String category) {
        return products.stream()
                .filter(p -> p.getCategory().equals(category))
                .collect(Collectors.toList());
    }

    public List<Product> getAllSortedByPrice() {
        return products.stream()
                .sorted(Comparator.comparingDouble(Product::getPrice))
                .collect(Collectors.toList());
    }

    public Queue<Product> getLowStockAlerts() {
        return lowStockQueue;
    }
}