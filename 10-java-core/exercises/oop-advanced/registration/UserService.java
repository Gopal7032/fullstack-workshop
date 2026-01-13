import java.util.*;

public class UserService {
    private Set<String> users = new HashSet<>();

    public void register(User user) throws ValidationException {
        if (user.getUsername() == null)
            throw new ValidationException("Username required");

        if (users.contains(user.getUsername()))
            throw new DuplicateUserException("User already exists");

        users.add(user.getUsername());
    }
}