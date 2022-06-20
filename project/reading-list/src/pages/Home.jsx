import { BookList } from "../components/booklist/BookList";
import { BookForm } from "../components/bookform/BookForm";
import { useCollection } from "../hooks/useCollection";

// import { db } from "../firebase/config";
// import { collection, getDocs } from "firebase/firestore";

export const Home = () => {
  const { documents: books } = useCollection("books");

  //   useEffect(() => {
  //     const ref = collection(db, "books");

  //     getDocs(ref).then((snapshot) => {
  //       let results = [];
  //       snapshot.docs.forEach((doc) => {
  //         results.push({ id: doc.id, ...doc.data() });
  //       });
  //       setBooks(results);
  //     });
  //   }, []);

  return (
    <div>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
};
