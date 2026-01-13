import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.Serializable;
import java.time.LocalDateTime;

public class AppConfig implements Serializable {
    String appName;
    String version;
    int maxConnections;
    int timeout;
    transient LocalDateTime lastLoaded;

    public AppConfig(String a,String v,int m,int t){
        appName=a;version=v;maxConnections=m;timeout=t;
    }

    private void readObject(ObjectInputStream in)
            throws IOException, ClassNotFoundException {
        in.defaultReadObject();
        lastLoaded = LocalDateTime.now();
    }

    public LocalDateTime getLastLoaded(){ return lastLoaded; }
}