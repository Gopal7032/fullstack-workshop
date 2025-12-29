function createLibrary() {
  const books = [];
  const members = [];
  const borrowRecords = [];


  // ADD BOOK
  function addBook(book) {
    books.push({ ...book });
  }

  // ADD MEMBER
  function addMember(member) {
    members.push({ ...member });
  }

  // BORROW BOOK
  function borrowBook(memberId, isbn) {
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
  }

  // RETURN BOOK
  function returnBook(memberId, isbn) {
    const record = borrowRecords.find(
      r => r.memberId === memberId && r.isbn === isbn && r.returnedAt === null
    );

    if (!record) return;

    record.returnedAt = new Date();

    const book = books.find(b => b.isbn === isbn);
    if (book) {
      book.copies++;
    }
  }

  // AVAILABLE COPIES
  function getAvailableCopies(isbn) {
    const book = books.find(b => b.isbn === isbn);
    return book ? book.copies : 0;
  }


  // MEMBER HISTORY
  function getMemberHistory(memberId) {
    return borrowRecords
      .filter(r => r.memberId === memberId)
      .map(r => ({
        isbn: r.isbn,
        title: r.title,
        borrowedAt: r.borrowedAt,
        returnedAt: r.returnedAt
      }));
  }


  // OVERDUE BOOKS (> 14 days)
  function getOverdueBooks() {
    const now = new Date();
    const fourteenDays = 14 * 24 * 60 * 60 * 1000;

    return borrowRecords.filter(r => {
      return (
        r.returnedAt === null &&
        now - r.borrowedAt > fourteenDays
      );
    });
  }


  // SEARCH BOOKS
  function searchBooks(query) {
    const q = query.toLowerCase();
    return books.filter(book =>
      book.title.toLowerCase().includes(q) ||
      book.author.toLowerCase().includes(q)
    );
  }


  // PUBLIC API ENDPOINTS
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

//TEST
const library = createLibrary();

// Add books
library.addBook({ isbn: '123', title: '1984', author: 'Orwell', copies: 3 });
library.addBook({ isbn: '456', title: 'Dune', author: 'Herbert', copies: 2 });

// Add members
library.addMember({ id: 'M1', name: 'John', email: 'john@example.com' });
library.addMember({ id: 'M2', name: 'Jane', email: 'jane@example.com' });

// Borrow books
library.borrowBook('M1', '123');
library.borrowBook('M2', '123');

console.log(library.getAvailableCopies('123')); // 1

library.returnBook('M1', '123');

console.log(library.getMemberHistory('M1'));

console.log(library.searchBooks('orwell'));