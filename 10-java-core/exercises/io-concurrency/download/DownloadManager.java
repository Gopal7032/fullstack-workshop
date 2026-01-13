import java.util.*;
import java.util.concurrent.*;

public class DownloadManager {
    ExecutorService ex;
    public DownloadManager(int n){ex=Executors.newFixedThreadPool(n);}

    public void downloadAll(List<String> urls){
        urls.forEach(u -> ex.submit(new DownloadTask(u)));
        ex.shutdown();
    }
}