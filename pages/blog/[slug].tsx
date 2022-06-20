import { MDXRemote } from "next-mdx-remote";
import { MDXData, MDXPage } from "../../interfaces";
import Layout from "../../components/Layout";
import { getMDX, getMDXData, getMDXPaths } from "../../functions/MDX";
import Link from "next/link";

export default function PostPage({ data, content, others }: MDXPage) {
  return (
    <Layout title={data.title} description={data.description} keywords={data.tags?.toString()} top={<h1>{data.title}</h1>}>
      <div className="flex flex-col md:flex-row md:space-x-6 items-start w-full">
        <div className="basis-3/4 mdx w-full">
          <MDXRemote {...content} />
        </div>
        <div className="basis-1/4 bg-gradient-primary w-full flex flex-col items-center rounded-lg overflow-hidden">
          <h2 className="text-xl uppercase font-bold m-4">Postitused</h2>
          <div className="text-lg flex flex-col items-center w-full">
            {others.map((teenus, i) => {
              const selected = data.title === teenus.title;
              return (
                <Link key={i} href={`/blog/${teenus.slug}`} passHref>
                  <p className={`border-t w-full py-2 px-4 border-black ${selected ? "font-bold" : "font-normal"} cursor-pointer hover:bg-green-400`}>
                    {teenus.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const paths = getMDXPaths("posts/blog").map((p) => ({ params: { slug: p } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }): Promise<{ props: MDXPage }> => {
  const { data, content } = await getMDX(`posts/blog/${slug}.mdx`);

  const teenusedPaths = getMDXPaths(`posts/blog`);
  const teenused = teenusedPaths
    .map((filename) => {
      const { data } = getMDXData(`posts/blog/${filename}.mdx`);
      return data;
    })
    .sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
  return {
    props: {
      data,
      content,
      others: teenused,
    },
  };
};
