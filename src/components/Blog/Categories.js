const Categories = ({ categories }) => {
  return (
    <div className="flex flex-wrap gap-x-3 px-4 mb-10 md:px-16 lg:px-0">
      {categories.map((category) => (
        <p
          key={category.name}
          className="px-2 py-2 font-josephin text-[#001D38] text-[12px] border border-[#674c27] rounded-md"
        >
          {category.name}
        </p>
      ))}
    </div>
  );
};

export default Categories;
