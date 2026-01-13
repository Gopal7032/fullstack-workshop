import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class LambdaRefactor {
    public static void main(String[] args) {
        List<String> names = List.of("Alice", "Bob", "Anna");

        names.stream()
                .sorted(Comparator.comparingInt(String::length))
                .forEach(System.out::println);

        List<Integer> numbers = List.of(1,2,3,4,5,6);
        List<Integer> evens = numbers.stream()
                .filter(n -> n % 2 == 0)
                .collect(Collectors.toList());

        evens.forEach(System.out::println);

        new Thread(() -> System.out.println("Running")).start();

        List<String> upper = names.stream()
                .map(String::toUpperCase)
                .collect(Collectors.toList());

        upper.forEach(System.out::println);
    }
}