async function getShopHandler(slugify) {

    try {
    const response = await fetch(
        `${process.env.REACT_APP_URL_BACK}/online/back?slugify=${slugify}`,
        {
            method: "GET",
            // body: JSON.stringify(slugify),
            headers: {
                "Content-Type": "application/json",
        },
        }
    );

        const data = await response.json();
        console.log("data:", data);
        return data;
    } catch (error) {
        console.log('error: ', error);
        return null;
    }
}


export default getShopHandler;