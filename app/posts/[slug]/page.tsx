import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const filePath = path.join(process.cwd(), "content", "${slug}.mdx");
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(fileContent);

  return (
    <article className="prose lg:prose-xl mx-auto py-10">
      <h1>{data.title}</h1>
      <p className="text-gray-500">{data.data}</p>
      <hr />
      {}
      <MDXRemot source={content} />
    </article>
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "content"));
  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}
