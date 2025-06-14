import { createClient, groq } from "next-sanity";

import clientConfig from "./config";

async function getServices() {
  try {
    const query = groq`
  *[_type == "services"]{
    description,
      title,
      _id,
    "imageUrl": image.asset->url,
    "altText": image.alt
  }
    `;

    return await createClient(clientConfig).fetch(
      query,
      {},
      { cache: "no-store" }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getFeaturedBlog() {
  const query = groq`
*[_type == 'featuredsection']{
    featuredpost-> {
      _id,
      title,
      publishedAt,
      "slug": slug.current,
      "alt": mainImage.alt,
      "mainImage": mainImage.asset->url,
    }
  }
`;

  return createClient(clientConfig).fetch(query, {}, { cache: "no-store" });
}

async function getBlogs() {
  try {
    const query = groq`
    *[_type == "post"] {
      "slug": slug.current,
      title,
      description,
      _id,
      publishedAt,
      "alt": mainImage.alt,
      "mainImage": mainImage.asset->url
    }
  `;

    return await createClient(clientConfig).fetch(
      query,
      {},
      { cache: "no-store" }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getBlog(slug: string) {
  try {
    const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    _id,
    body,
    description,
    publishedAt,
    "alt": mainImage.alt,
    "mainImage": mainImage.asset->url
  }
    `;

    return await createClient(clientConfig).fetch(
      query,
      {
        slug,
      },
      { cache: "no-store" }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getFrecuenlyQuestions() {
  try {
    const query = groq`
    *[_type == "preguntas-frecuentes"] {
      answer,
        question,
        _id,
        type[]-> {
          title
        }
    }
  `;

    return await createClient(clientConfig).fetch(
      query,
      {},
      { cache: "no-store" }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getTerms() {
  try {
    const query = groq`
    *[_type == "terms"] {
    body
    }
    `;

    return await createClient(clientConfig).fetch(
      query,
      {},
      { cache: "no-store" }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getPolicies() {
  try {
    const query = groq`
    *[_type == "policies"] {
    body
    }
  `;

    return await createClient(clientConfig).fetch(
      query,
      {},
      { cache: "no-store" }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export {
  getServices,
  getPolicies,
  getTerms,
  getFrecuenlyQuestions,
  getBlogs,
  getBlog,
  getFeaturedBlog,
};
