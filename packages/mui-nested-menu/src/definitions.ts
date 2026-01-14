import { SxProps } from '@mui/system';
import React from 'react';


export interface MenuItemData {
    uid?: string;
    label?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    callback?: (event: React.MouseEvent<HTMLElement>, item: MenuItemData) => void;
    items?: MenuItemData[];
    disabled?: boolean;
    sx?: SxProps;
    delay?: number;
}
