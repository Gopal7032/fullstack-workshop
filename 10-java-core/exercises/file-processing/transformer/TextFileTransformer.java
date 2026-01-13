import java.io.*;
import java.nio.file.*;
import java.util.*;
import java.util.function.Predicate;

public class TextFileTransformer {
    private final List<LineTransformer> list = new ArrayList<>();

    public TextFileTransformer addTransformer(LineTransformer t) {
        list.add(t); return this;
    }

    public void transform(Path src, Path dest) {
        try {
            List<String> lines = Files.readAllLines(src);
            for (int i = 0; i < list.size(); i++) {
                LineTransformer t = list.get(i);
                lines = lines.stream().map(t::transform).toList();
            }
            Files.write(dest, lines);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}