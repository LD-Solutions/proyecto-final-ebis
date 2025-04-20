interface Stock {
    stockSymbol: string;
    name: string;
    stocks: number;
    value: number;
}
declare function renderPortfolio(data: Stock[]): void;
declare function renderTableRow(stock: Stock): Node;
