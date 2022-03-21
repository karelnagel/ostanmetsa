
export interface Post {
    title?: string;
    date?: string;
    description?: string;
    thumbnailUrl?: string;
    tags?: string[];
    slug: string;
    mdxSource?:any;
}