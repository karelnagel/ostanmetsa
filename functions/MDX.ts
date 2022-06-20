import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import matter from "gray-matter";
import { MDXData } from "../interfaces";

export const getMDX = async (file: string) => {
    const { data, content } = getMDXData(file)
    const mdxContent = await serialize(content);

    return { data, content: mdxContent };
};
export const getMDXData = (file: string): { data: MDXData, content: string } => {
    const markdownWithMeta = fs.readFileSync(file, "utf-8");
    const { data, content } = matter(markdownWithMeta);

    return { data, content };
};

export const getMDXPaths = (dir: string) => {
    const files = fs.readdirSync(dir);
    const paths = files.map((filename) => filename.replace(".mdx", ""));
    return paths;
};
