import java.util.*;

public class GenericsTest {
    public static void main(String[] args) {
        Pair<String, Integer> pair = new Pair<>("Age", 25);
        System.out.println(pair);

        Box<String> box = new Box<>();
        box.set("Hello");
        System.out.println(box.get());

        List<String> names = List.of("Alice", "Bob", "Anna");
        System.out.println(CollectionUtils.filter(names, n -> n.startsWith("A")));
    }
}