import { Link } from "gatsby";
import React from "react";

export interface IListItem {
    url: string;
    title: string;
    items: IListItem[];
}

const ContentsItem = ({ item }: { item: IListItem }) => (
    <li>
        <a className=" text-gray-500 hover:text-gray-700" href={item.url}>
            {item.title}
        </a>
        {item.items && item.items.length && (
            <ContentsList key={`${item.url}-list`} items={item.items} />
        )}
    </li>
);

const ContentsList = ({ items }: { items: IListItem[] }) => {
    return (
        <ul className="pl-3 py-1">
            {items.map((item: IListItem) => {
                return <ContentsItem key={`${item.url}-item`} item={item} />;
            })}
        </ul>
    );
};

const ContentsTable = ({ data }: { data: IListItem[] }) => {
    return (
        <div className=" invisible xl:visible fixed xl:right-64 xl:top-64 h-60 overflow-hidden">
            <h2 className="dark:text-white pb-3">Table of Contents</h2>
            <ContentsList items={data} />
        </div>
    );
};

export default ContentsTable;
