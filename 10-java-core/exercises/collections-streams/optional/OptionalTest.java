public class OptionalTest {
    public static void main(String[] args) {
        UserRepository repo = new UserRepository();

        String apartment = repo.findById(1L)
                .flatMap(User::getAddress)
                .flatMap(Address::getApartment)
                .orElse("N/A");

        System.out.println(apartment);
    }
}