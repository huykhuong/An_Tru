const CategoryOptions = ({ selectedCategory, selectCategory }) => {
  return (
    // {/* Categories options */}
    <section className="bg-white flex flex-wrap justify-start gap-x-5 gap-y-5 pt-10 px-3 md:px-10 2xl:px-24">
      <h1
        onClick={() => selectCategory(0)}
        className={`${
          selectedCategory === 0
            ? "menuPageSelectedCategory"
            : "menuPageUnselectedCategory"
        } `}
      >
        Cơm
      </h1>
      <h1
        onClick={() => selectCategory(1)}
        className={`${
          selectedCategory === 1
            ? "menuPageSelectedCategory"
            : "menuPageUnselectedCategory"
        } `}
      >
        Mỳ
      </h1>
      <h1
        onClick={() => selectCategory(2)}
        className={`${
          selectedCategory === 2
            ? "menuPageSelectedCategory"
            : "menuPageUnselectedCategory"
        } `}
      >
        Tráng Miệng
      </h1>
      <h1
        onClick={() => selectCategory(3)}
        className={`${
          selectedCategory === 3
            ? "menuPageSelectedCategory"
            : "menuPageUnselectedCategory"
        } `}
      >
        Thức Uống
      </h1>
    </section>
  );
};

export default CategoryOptions;
