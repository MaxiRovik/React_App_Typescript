import React, {FC, useState} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
   width?: string;
   height?: string;
   variant: CardVariant;

}

const Card: FC<CardProps> =
    ({width,
         height,
        variant,

         children}) => {

    const [state, setState] = useState(0)
    return (
        <div style = {{
            width,height,
            border: variant === CardVariant.outlined ? '2px solid gray': 'none',
            background: variant === CardVariant.primary ? 'green':'lightblue' }}

        >
            {children}
        </div>
    );
};

export default Card;