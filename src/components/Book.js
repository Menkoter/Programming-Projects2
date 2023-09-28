
const Book = ({title, author, image}) => {
  return (
    <div>
      <h2>Titel</h2>
      <h3>author</h3>
      <img src={image} alt="{title}" />

    </div>
  );

  
};

export default Book;

