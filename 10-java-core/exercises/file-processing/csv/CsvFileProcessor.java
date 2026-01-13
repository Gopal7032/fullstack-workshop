import java.io.*;
import java.nio.file.*;
import java.time.LocalDate;
import java.util.*;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class CsvFileProcessor {

    public List<Employee> readEmployees(Path filePath) {
        List<Employee> list = new ArrayList<>();
        if (!Files.exists(filePath)) throw new RuntimeException("File not found");

        try (BufferedReader br = Files.newBufferedReader(filePath)) {
            br.readLine(); // header
            String line;
            while ((line = br.readLine()) != null) {
                try {
                    String[] p = line.split(",");
                    if (p.length < 6) continue;
                    list.add(new Employee(
                        Integer.parseInt(p[0]),
                        p[1], p[2], p[3],
                        Double.parseDouble(p[4]),
                        LocalDate.parse(p[5])
                    ));
                } catch (Exception e) {
                    System.err.println("Invalid row: " + line);
                }
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return list;
    }

    public void writeEmployees(Path path, List<Employee> employees) {
        try (BufferedWriter bw = Files.newBufferedWriter(path)) {
            bw.write("id,firstName,lastName,department,salary,hireDate\n");
            for (Employee e : employees) {
                bw.write(String.format(
                    "%d,%s,%s,%s,%.2f,%s\n",
                    e.id(), e.firstName(), e.lastName(),
                    e.department(), e.salary(), e.hireDate()
                ));
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public void filterAndWrite(Path src, Path dest, Predicate<Employee> filter) {
        writeEmployees(dest,
            readEmployees(src).stream().filter(filter).toList()
        );
    }

    public void generateDepartmentReport(Path src, Path report) {
        var data = readEmployees(src).stream()
            .collect(Collectors.groupingBy(Employee::department));

        try (BufferedWriter bw = Files.newBufferedWriter(report)) {
            bw.write("Department,EmployeeCount,TotalSalary,AverageSalary\n");
            for (var e : data.entrySet()) {
                double total = e.getValue().stream().mapToDouble(Employee::salary).sum();
                bw.write(String.format(
                    "%s,%d,%.2f,%.2f\n",
                    e.getKey(), e.getValue().size(),
                    total, total / e.getValue().size()
                ));
            }
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
    }
}