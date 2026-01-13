public class RegistrationTest {
    public static void main(String[] args) {
        UserService service = new UserService();
        try {
            service.register(new User("sagar", "s@gmail.com"));
            service.register(new User("sagar", "x@gmail.com"));
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}