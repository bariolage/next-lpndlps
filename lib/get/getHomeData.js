import { fetchAPI } from "../datocms";

export const getHomeData = async () => {
 const data = await fetchAPI(`
    query HomeQuery {
      homePage {
        title
        message
        sections {
          title
          cover {
            url
          }
          id
          content
        }
      }
    }`);
 return {
  ...data.homePage,
 };
};
