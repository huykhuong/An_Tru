import Image from "next/image";

const Author = ({ author }) => {
  return (
    // Author div
    <div className="flex items-start justify-start mb-10 px-4 md:px-16 lg:px-0">
      <Image
        alt={author.name}
        height="130px"
        width="130px"
        objectFit="cover"
        src={author.photo.url}
      />
      <div className="pl-5">
        <p className="text-[#001D38] font-josephin font-medium text-xl flex-grow">
          {author.name}
        </p>
        <p className="paragraph">Tác giả</p>
      </div>
    </div>
  );
};

export default Author;
