import java.util.Optional;

public class SafeExecutor {

    @FunctionalInterface
    interface ThrowingSupplier<T> {
        T get() throws Exception;
    }

    public static <T> Optional<T> safeExecute(ThrowingSupplier<T> supplier) {
        try {
            return Optional.ofNullable(supplier.get());
        } catch (Exception e) {
            return Optional.empty();
        }
    }
}