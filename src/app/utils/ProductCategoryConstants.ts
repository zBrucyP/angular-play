export class productCategories {

    public static readonly BEST_SELLER = new productCategories("bestSeller", "Best Sellers");
    public static readonly SHIRT = new productCategories("shirt", "Shirts");
    public static readonly PANTS = new productCategories("pants", "Pants");
    public static readonly SOCKS = new productCategories("socks", "Socks");

    private constructor(public readonly tag: string, public readonly display: string) {

    }

    public static getCategories(): productCategories[] {
        return [
            productCategories.BEST_SELLER,
            productCategories.SHIRT,
            productCategories.PANTS,
            productCategories.SOCKS
        ];
    }
}
