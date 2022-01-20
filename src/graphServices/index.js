import { request, gql } from "graphql-request";

const graphAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            createdAt
            excerpt
            slug
            title
            featuredPost
            id
            author {
              bio
              role
              name
              id
              photo {
                url
              }
            }
            categories {
              name
              slug
            }
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;

  const results = await request(graphAPI, query);
  return results.postsConnection.edges;
};

//GET POST DETAILS
export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphAPI, query, { slug });

  return result.post;
};

//GET SIMILAR POSTS
export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        author {
          name
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphAPI, query, { categories, slug });

  return result.posts;
};
