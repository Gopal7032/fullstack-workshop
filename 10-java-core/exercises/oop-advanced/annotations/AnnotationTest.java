import java.util.*;

public class AnnotationTest {
    public static void main(String[] args) {
        User u = new User();
        u.setAge(15);
        System.out.println(Validator.validate(u));
    }
}