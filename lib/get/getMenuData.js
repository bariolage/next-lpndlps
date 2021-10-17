import { fetchAPI } from "../datocms";

export const getMenuData = async () => {
 const data = await fetchAPI(`
    query MenuQuery {
      menuPage {
        title
        message
        content
        cover {
          url
        }
        gallery {
          url
          alt
        }
      }
      allMenuCategories {
        title
        items {
          name
          price
          image {
            url
            alt
          }
        }
      }
    }`);
 return {
  ...data.menuPage,
  categories: data.allMenuCategories,
 };
};
