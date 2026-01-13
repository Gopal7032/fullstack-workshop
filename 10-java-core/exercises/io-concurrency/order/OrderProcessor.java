import java.util.concurrent.*;

public class OrderProcessor {
    public CompletableFuture<OrderResult> processOrder(){
        return CompletableFuture.supplyAsync(()->"User")
            .thenCombine(CompletableFuture.supplyAsync(()->"Product"),
                (u,p)->u+" "+p)
            .thenApply(x->new OrderResult(true,"Done"))
            .exceptionally(e->new OrderResult(false,"Failed"));
    }
}