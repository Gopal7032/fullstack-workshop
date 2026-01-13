import java.util.*;
import java.util.stream.*;

public class StreamProcessor {

    public static OptionalDouble averageOfEvens(List<Integer> numbers) {
        return numbers.stream()
                .filter(n -> n % 2 == 0)
                .mapToInt(Integer::intValue)
                .average();
    }
}