import java.nio.file.*;
import java.io.IOException;
import java.util.*;
import java.util.stream.*;

public class LogAnalyzer {

    public List<LogEntry> readLogs(Path file) throws IOException {
        return Files.lines(file)
                .map(l -> {
                    String[] p = l.split(" ", 4);
                    return new LogEntry(p[0] + " " + p[1], p[2], p[3]);
                })
                .toList();
    }

    public Map<String, Long> countByLevel(List<LogEntry> logs) {
        return logs.stream()
                .collect(Collectors.groupingBy(LogEntry::level, Collectors.counting()));
    }

    public List<LogEntry> getErrors(List<LogEntry> logs) {
        return logs.stream()
                .filter(l -> l.level().equals("ERROR"))
                .toList();
    }

    public void writeSummary(Path output, List<LogEntry> logs) throws IOException {
        List<String> lines = countByLevel(logs).entrySet().stream()
                .map(e -> e.getKey() + " = " + e.getValue())
                .toList();
        Files.write(output, lines);
    }
}