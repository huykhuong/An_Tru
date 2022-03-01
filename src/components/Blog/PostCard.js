import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      {/* // Overall div of the post card */}
      <div className="cursor-pointer w-full px-4 mb-10 md:w-1/2 lg:w-1/3">
        {/* Image div */}
        <div className="relative h-[270px] w-full">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={post.featuredImage.url}
            alt={post.title}
          />
        </div>

        {/* Date, author div */}
        <div className="paragraph flex items-center justify-between mb-4 mt-4">
          <p>{moment(post.createdAt).format(`DD MM, YYYY`)}</p>
          <p>
            {post.author.name} - {post.author.role}
          </p>
        </div>
        {/* Title */}
        <h1 className="font-prata text-[#001D38] text-2xl mb-4">
          {post.title}
        </h1>
        {/* Exceprt */}
        <p className="paragraph">{post.excerpt}</p>
      </div>
    </Link>
  );
};

export default PostCard;

//{moment(post.createdAt).format(`MMM DD, YYYY`)}
