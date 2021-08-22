export class Post {

    title: string;
    subtitle: string;
    content: string;
    imageLink: string;
    footer: string;

    constructor(title: string, subtitle: string, content: string, imageLink: string, footer: string) {
        this.title = title;
        this.subtitle = subtitle;
        this.content = content;
        this.imageLink = imageLink;
        this.footer = footer;
    }
}