export interface Menu {
    title: string;
    iconClass: string;
    items: Menuitem[];
    itemsChild?: Menuitem[];
};

interface Menuitem {
    title: string;
    href: string | null;
}