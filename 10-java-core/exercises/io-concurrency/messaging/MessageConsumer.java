public class MessageConsumer implements Runnable {
    MessageQueue q;
    public MessageConsumer(MessageQueue q){this.q=q;}
    public void run(){
        try{ q.consume(); }catch(Exception e){}
    }
}