import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import posts from "./schemas/posts";
import author from "./schemas/author";
import services from "./schemas/services";
import faq from "./schemas/faq";
import featuredPost from "./schemas/featuredPost";
import terms from "./schemas/terms";
import policies from "./schemas/policies";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    posts,
    author,
    category,
    blockContent,
    services,
    terms,
    faq,
    featuredPost,
    policies,
  ],
};
