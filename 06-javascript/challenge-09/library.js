function createLibrary() {
  const books = [];
  const members = [];
  const borrowRecords = [];

  const addBook = book => {
    books.push({ ...book });
    console.log(`Book added: "${book.title}" (${book.isbn})`);
  };

  const addMember = member => {
    members.push({ ...member });
    console.log(`Member added: ${member.name} (${member.id})`);
  };

  const borrowBook = (memberId, isbn) => {
    const book = books.find(b => b.isbn === isbn);
    const member = members.find(m => m.id === memberId);

    if (!book || !member || book.copies <= 0) return;

    book.copies--;

    borrowRecords.push({
      memberId,
      isbn,
      title: book.title,
      borrowedAt: new Date(),
      returnedAt: null
    });

    console.log(
      `${member.name} borrowed "${book.title}" on ${new Date().toLocaleDateString()}`
    );
  };

  const returnBook = (memberId, isbn) => {
    const record = borrowRecords.find(
      r => r.memberId === memberId && r.isbn === isbn && r.returnedAt === null
    );

    if (!record) return;

    record.returnedAt = new Date();

    const book = books.find(b => b.isbn === isbn);
    if (book) book.copies++;

    console.log(`Book returned: "${record.title}" by member ${memberId}`);
  };

  const getAvailableCopies = isbn => {
    const book = books.find(b => b.isbn === isbn);
    return book ? book.copies : 0;
  };

  const getMemberHistory = memberId =>
    borrowRecords
      .filter(r => r.memberId === memberId)
      .map(r => ({
        isbn: r.isbn,
        title: r.title,
        borrowedAt: r.borrowedAt,
        returnedAt: r.returnedAt
      }));

  const getOverdueBooks = () => {
    const now = new Date();
    const fourteenDays = 14 * 24 * 60 * 60 * 1000;

    return borrowRecords.filter(
      r => r.returnedAt === null && now - r.borrowedAt > fourteenDays
    );
  };

  const searchBooks = query => {
    const q = query.toLowerCase();
    return books.filter(
      book =>
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q)
    );
  };

  return {
    addBook,
    addMember,
    borrowBook,
    returnBook,
    getAvailableCopies,
    getMemberHistory,
    getOverdueBooks,
    searchBooks
  };
}
