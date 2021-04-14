import { fetchAPI } from "../datocms";

export const getLegalData = async () => {
 const data = await fetchAPI(`
    query LegalQuery {
      legal {
        content
        title
      }
    }`);
 return data.legal;
};
