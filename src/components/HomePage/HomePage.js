import React from 'react';

import Cards from '../Cards/Cards';
// import getShopHandler from '../Back/GetShop';

import './HomePage.css';


const HomePage = () => {
//     const [data, setData] = useState([]);
//     const slugify =  "mes-fleurs" ;

//   useEffect(() => {
//     const fetchData = async () => {  
//       //const result = await axios.get(`${process.env.REACT_APP_URL_BACK}/online/back`);
//       const result = await getShopHandler(slugify);
//       console.log("Value result : ",result);
//       setData(result.shop);
//     };

//     fetchData();
//   }, []);



    return (
        <div className='home_page'>
                <Cards data={data}/>
        </div>
    );
};

export default HomePage;

  
const data = {
    "user": {
        "id_user": 88,
        "mail": "ajout@2articles.com",
        "password": null,
        "firstname": null,
        "lastname": null,
        "created_at": "2023-01-20T15:12:39.000Z",
        "updated_at": "2023-01-20T15:12:39.000Z"
    },
    "shop": {
        "id_shop": 888,
        "id_user": 88,
        "name_shop": "Mes fleurs",
        "slugify_name": "mes-fleurs",
        "description": null,
        "order_type": "both",
        "order_instruction": null,
        "delivery_fees": null,
        "payment_type": "both",
        "currency": "euro",
        "url_shop": null,
        "created_at": "2023-01-20T15:12:39.000Z",
        "updated_at": "2023-01-20T15:12:39.000Z"
    },
    "articles": [
        {
            "id_article": 99,
            "id_user": 88,
            "id_shop": 888,
            "name_article": "Olympe",
            "picture_url": "https://images-mbm2.s3.us-west-2.amazonaws.com/1674227461931-olympe.png",
            "price": 399.10,
            "description": "Fleur du bonheur",
            "created_at": "2023-01-20T15:12:39.000Z",
            "updated_at": "2023-01-20T15:12:39.000Z"
        },
        {
            "id_article": 100,
            "id_user": 88,
            "id_shop": 888,
            "name_article": "Iris",
            "picture_url": "https://images-mbm2.s3.us-west-2.amazonaws.com/1674227496430-iris.png",
            "price": 33.00,
            "description": "fleur de la gaïté",
            "created_at": "2023-01-20T15:12:39.000Z",
            "updated_at": "2023-01-20T15:12:39.000Z"
        }
    ],
    "address": {
        "id_address": 6,
        "id_shop": 888,
        "street": "c pas la capital",
        "postal_code": "13000",
        "city": "C Marseille BB",
        "hours": "14H - 16H",
        "phone_number": "067333783945",
        "created_at": "2023-01-20T15:12:39.000Z",
        "updated_at": "2023-01-20T15:12:39.000Z"
    }
}