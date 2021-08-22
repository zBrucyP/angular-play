export class Product {

    title: string;
    subtitle: string;
    imageLink: string;
    footer: string;
    categories: string[];

    constructor(title: string, subtitle: string, content: string, imageLink: string, footer: string, categories: string[]) {
        this.title = title;
        this.subtitle = subtitle;
        this.imageLink = imageLink;
        this.footer = footer;
        this.categories = categories;
    }

    productContainsCategory(category: string): boolean {
        return !!this.categories.find((tag: string) => tag === category);
    }
}