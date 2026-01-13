public interface Repository<T, ID> {
    void save(T entity);
    T findById(ID id);
}