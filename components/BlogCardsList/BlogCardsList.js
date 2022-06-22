import Link from "next/link";

import BlogCard from "./BlogCard/BlogCard";
const BlogCardsList = () => {
  return (
    <div className="container container--std">
      <ul className="BlogCardsList">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
          return (
            <li className="BlogCardsList__item" key={index}>
              <Link href="/ressources/93478593579532">
                <a>
                  <BlogCard key={index} />
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogCardsList;
