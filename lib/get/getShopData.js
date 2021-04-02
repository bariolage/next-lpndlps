import { fetchAPI } from "../datocms";

export const getShopData = async () => {
  const data = await fetchAPI(`
    query ShopQuery {
      shopPage {
        title
        message
        cover {
          url
        }
        content
      }
      categories: allShopCategories {
        title
        items: shopList {
          name
          geo {
            lat: latitude
            lng: longitude
          }
        }
      }
    }`);
  const shops = [];
  data.categories.forEach((e) => e.items.forEach((item) => shops.push(item)));
  return {
    ...data.shopPage,
    categories: data.categories,
    shops,
  };
};
