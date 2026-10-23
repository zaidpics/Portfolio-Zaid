declare module 'page-flip' {
    export class PageFlip {
        constructor(element: HTMLElement, setting: any);
        destroy(): void;
        loadFromImages(images: string[]): void;
        loadFromHTML(items: NodeListOf<HTMLElement> | HTMLElement[]): void;
        turnToPrevPage(): void;
        turnToNextPage(): void;
        turnToPage(page: number): void;
        flipNext(corner?: 'top' | 'bottom'): void;
        flipPrev(corner?: 'top' | 'bottom'): void;
        flip(page: number, corner?: 'top' | 'bottom'): void;
        getPageCount(): number;
        getCurrentPageIndex(): number;
        getOrientation(): 'portrait' | 'landscape';
        on(event: string, callback: (e: any) => void): PageFlip;
        off(event: string, callback: (e: any) => void): PageFlip;
        update(): void;
    }
}
