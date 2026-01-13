import java.io.Externalizable;
import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectOutput;

public class DatabaseConfig implements Externalizable {
    String host,user,pass;
    int port;

    public DatabaseConfig(){}

    public DatabaseConfig(String h,int p,String u,String pa){
        host=h;port=p;user=u;pass=pa;
    }

    public void writeExternal(ObjectOutput out) throws IOException {
        out.writeUTF(host);
        out.writeInt(port);
        out.writeUTF(user);
        out.writeUTF(new StringBuilder(pass).reverse().toString());
    }

    public void readExternal(ObjectInput in) throws IOException {
        host=in.readUTF();
        port=in.readInt();
        user=in.readUTF();
        pass=new StringBuilder(in.readUTF()).reverse().toString();
    }
}