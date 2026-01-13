import java.io.*;
import java.nio.file.*;

public class ConfigManager {
    public static void saveConfig(AppConfig c, Path p) throws Exception {
        try(ObjectOutputStream o=new ObjectOutputStream(Files.newOutputStream(p))){
            o.writeObject(c);
        }
    }

    public static AppConfig loadConfig(Path p) throws Exception {
        try(ObjectInputStream o=new ObjectInputStream(Files.newInputStream(p))){
            return (AppConfig)o.readObject();
        }
    }
}