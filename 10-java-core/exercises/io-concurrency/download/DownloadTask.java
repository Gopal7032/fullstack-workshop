public class DownloadTask implements Runnable {
    String url;
    public DownloadTask(String u){url=u;}
    public void run(){
        try{
            for(int p=0;p<=100;p+=25){
                System.out.println(Thread.currentThread().getName()+" "+url+" "+p+"%");
                Thread.sleep(300);
            }
        }catch(Exception e){}
    }
}