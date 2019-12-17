import React from 'react';
import './MenuItem.styles.scss';

export interface MenuItemProps {
    title: string;
    subtitle: string;
    imageUrl?: string;
    size?: string;
}

export const MenuItem = ({ title, subtitle, imageUrl, size }: MenuItemProps) => (
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{
            backgroundImage: `url("${imageUrl}")`
        }} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">{subtitle}</span>
        </div>
    </div>
);

export default MenuItem;