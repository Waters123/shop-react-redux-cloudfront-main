const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatAsPrice = (price: number) => priceFormatter.format(price);

export enum ErrorCode {
  Forbidden = 403,
  Unauthorized = 401,
}

export interface HttpError {
  message: string;
  statusCode: number;
}
