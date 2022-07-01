export type Item = {
    avaliations: number;
    classification: string;
    country: string;
    discount: number;
    flag: string;
    id: number;
    image: string;
    name: string;
    price: number;
    priceMember: number;
    priceNonMember: number;
    rating: number;
    region: string;
    size: string;
    sommelierComment: string;
    type: string;
}

export type Cart = {
    id: number,
    name: string,
    price: number,
    discount: number,
    priceMember: number,
    totalPrice: number,
    totalMemberPrice: number,
    quantity: number,
}

export interface IApiResponse {
    items: Item[];
    itemsPerPage: number;
    page: number;
    totalItems: number;
    totalPages: number;
}
