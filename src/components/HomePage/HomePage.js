import React, { useEffect } from 'react';
import Cards from '../Cards/Cards';

import './HomePage.css';

const HomePage = (props) => {

    const shopName = props.name;

    useEffect(() => {
        document.title = `${props.name} | MadeByMe`;
    }, [shopName]);

    return (
        <div className="home_page">
            <Cards
                data={{
                    ...props.data,
                    articles: props.data?.articles?.map((d) => ({ ...d, id: d.id_article })),
                }}
            />
        </div>
    );
};

export default HomePage;

