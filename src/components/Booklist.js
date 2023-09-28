import Book from "./Book";

const BookList = () => {
  return (
    <div>
      <Book title="boek" author="menno" image="./images/foto.png" />

      <Book title="help" author="menno" />
      <Book title="test" author="menno test" />
    </div>
  );
};

export default BookList;
