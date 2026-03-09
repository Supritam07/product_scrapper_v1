import axios from 'axios';

// Replace with your actual RapidAPI Key
const RAPID_API_KEY = '29faeb87c2msh61c353f58b6d498p10b7aejsn6e77e4bdb717';
const RAPID_API_HOST = 'real-time-product-search.p.rapidapi.com';

const apiClient = axios.create({
    baseURL: `https://real-time-product-search.p.rapidapi.com/deals-v2`,
    headers: {
        'X-RapidAPI-Key': RAPID_API_KEY,
        'X-RapidAPI-Host': RAPID_API_HOST,
    },
});

/**
 * Searches for products across Indian e-commerce platforms.
 * @param {string} query - The product name or search term.
 * @returns {Promise<Array>} - A list of product objects.
 */
export const searchProducts = async (query) => {
    try {
        // Note: In a real scenario, you'd use an API that supports multiple stores or aggregate results.
        // For this demonstration, we'll simulate fetching from multiple sources.

        // Example call to a real search API (if configured):
        const response = await apiClient.get('/search-v2', {
            params: { q: `${query} India`, country: 'in' }
        });

        // Map the real API response to our app's product format
        // The real-time-product-search API v2 returns { data: { products: [...] } }
        const products = (response.data.data?.products || []).map(item => ({
            id: item.product_id || Math.random().toString(),
            title: item.product_title,
            image: item.product_photos?.[0] || item.product_photo || 'https://via.placeholder.com/150',
            price: parseFloat(String(item.offer?.price || '0').replace(/[^0-9.]/g, '') || 0),
            currency: 'INR',
            store: item.offer?.store_name || 'Generic Store',
            link: item.offer?.offer_page_url || item.product_page_url,
            rating: item.product_rating || 'N/A',
        }));

        return products.sort((a, b) => a.price - b.price);
    } catch (error) {
        console.error('Error searching products:', error);
        throw error;
    }
};
