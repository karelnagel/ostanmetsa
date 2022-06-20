
export interface MDXData {
    title?: string;
    date?: string;
    description?: string;
    thumbnailUrl?: string;
    tags?: string[];
    position?: number;
    slug?: string
}
export interface MDXPage {
    data: MDXData;
    content: any;
    others: MDXData[];
}