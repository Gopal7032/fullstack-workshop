import java.util.Comparator;
import java.util.List;

public class StreamExercise {

    record Employee(Long id, String name, String department,
                    double salary, int years, List<String> skills) {}

    public static void main(String[] args) {

        List<Employee> employees = List.of(
            new Employee(1L,"Alice","Engineering",85000,5,List.of("Java","Python")),
            new Employee(2L,"Bob","Engineering",75000,3,List.of("Java","JS")),
            new Employee(3L,"Charlie","Sales",65000,7,List.of("CRM")),
            new Employee(4L,"Diana","Engineering",95000,8,List.of("Java","Go")),
            new Employee(5L,"Eve","HR",55000,2,List.of("Recruiting"))
        );

        employees.stream()
                .filter(e -> e.department().equals("Engineering"))
                .sorted(Comparator.comparingDouble(Employee::salary).reversed())
                .forEach(e -> System.out.println(e.name()));
    }
}