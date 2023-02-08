import { getSubdomain } from 'tldts';

async function GetSubdomain () {
    
    const currentUrl = window.location.href;
    console.log(currentUrl);

    const slugify = getSubdomain(currentUrl);
    console.log(slugify);
}

export default GetSubdomain;