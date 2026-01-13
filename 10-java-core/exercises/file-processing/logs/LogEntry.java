import java.time.LocalDateTime;

public record LogEntry(
    LocalDateTime timestamp,
    String level,
    String source,
    String message
) implements Comparable<LogEntry> {
    public int compareTo(LogEntry o) {
        return timestamp.compareTo(o.timestamp());
    }
}
