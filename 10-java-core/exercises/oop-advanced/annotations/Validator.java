import java.lang.reflect.*;
import java.util.*;

public class Validator {
    public static List<String> validate(Object obj) {
        List<String> errors = new ArrayList<>();
        for (Field f : obj.getClass().getDeclaredFields()) {
            f.setAccessible(true);
            try {
                if (f.isAnnotationPresent(NotNull.class) && f.get(obj) == null)
                    errors.add(f.getAnnotation(NotNull.class).message());

                if (f.isAnnotationPresent(Validate.class)) {
                    int v = f.getInt(obj);
                    Validate a = f.getAnnotation(Validate.class);
                    if (v < a.min() || v > a.max()) errors.add(a.message());
                }
            } catch (Exception ignored) {}
        }
        return errors;
    }
}