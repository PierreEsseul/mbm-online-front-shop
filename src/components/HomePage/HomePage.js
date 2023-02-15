import React, { useEffect } from 'react';

import Cards from '../Cards/Cards';

import './HomePage.css';

const HomePage = (props) => {

    useEffect(() => {
        document.title = `${props.data.shop.shop_name} | MadeByMe`;
    }, []);

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
