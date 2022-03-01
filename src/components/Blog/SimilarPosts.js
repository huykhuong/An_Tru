import { CalendarIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/solid";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const SimilarPosts = ({ similarPosts }) => {
  return (
    <div className="mt-10 cursor-pointer flex flex-col gap-y-8 px-4 md:px-16 lg:px-0">
      {similarPosts.map((post, index) => (
        <Link href={`/blog/${post.slug}`} key={index}>
          <div className="flex">
            {/* Image div */}
            <div className="relative flex-shrink-0 flex items-center">
              <Image
                alt={post.title}
                className="rounded-md"
                unoptimized
                height={80}
                width={80}
                objectFit="cover"
                objectPosition="center"
                src={post.featuredImage.url}
              />
            </div>
            {/* Content div */}
            <div className="ml-5">
              <h1 className="text-[#001D38] text-sm font-bold opacity-70 mb-5">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-x-2">
                <div className="flex items-center gap-x-1">
                  <CalendarIcon className="text-[#001D38] h-4 w-4" />
                  <p className="paragraph text-sm">
                    {moment(post.createdAt).format("DD/MM, YYYY")}
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <UserIcon className="text-[#001D38] h-3 w-3" />
                  <p className="paragraph text-sm">{post.author.name}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SimilarPosts;
