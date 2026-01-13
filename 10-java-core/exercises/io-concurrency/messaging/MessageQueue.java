import java.util.concurrent.*;

public class MessageQueue {
    BlockingQueue<Message> q=new LinkedBlockingQueue<>();
    public void publish(Message m){ q.add(m); }
    public Message consume() throws Exception{ return q.take(); }
}