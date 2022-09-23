import { request, gql } from 'graphql-request';

const graphqlAPI1 = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphqlAPI=process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT_2;
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};
export const getRecentPosts=async ()=>{
const query = gql `
  query GetPostDetails(){
    posts(
      orderBy:createdAt_DESC
      last:3
      ){
        title
        featuredImage{
          url
        }
        createdAt
        slug
      }


  }

`
const result = await request(graphqlAPI, query);

return result.posts;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};
// export const getCategories = async ()=>{
//   const query = gql `
//   query GetCategories{

//     categories{
//       name
//       slug
//     }
//   }
  
//   `
//   const result = await request(graphqlAPI, query);

//   return result.categories;
// }
export const getPostDetails = async (slug) => {
  const query = gql`
  query GetPostDetails($slug: String!) {
    post(where:{slug: $slug}) 
{

      author{
        bio
        name
        id
        photo {
          url
        }
      }
      createdAt
      slug
      title
      excerpt
      featuredImage {
        url
      }
      categories {
        name
        slug
      }
content{
  raw
}
}
}
      
    `
      


  const result = await request(graphqlAPI, query,{slug});

  return result.post;
}

// export const getComments = async (slug) => {
//   const query = gql`
//     query GetComments($slug:String!) {
//       comments(where: { post: { slug: $slug } } ) {
//         name
//         createdAt
//         comment
//       }
//     }
//   `;

//   const result = await request(graphqlAPI, query, { slug });

//   return result.comments;
// };
// export const getFeaturedPosts = async () => {
//   const query = gql`
//     query GetCategoryPost() {
//       posts(where: {featuredPost: true}) {
//         author {
//           name
//           photo {
//             url
//           }
//         }
//         featuredImage {
//           url
//         }
//         title
//         slug
//         createdAt
//       }
//     }   
//   `;

//   const result = await request(graphqlAPI, query);

//   return result.posts;
// };
export const GetCategoriesPosts= async (slug)=>{
  const query = gql`
  query GetCategoriesPosts($slug: String!) {
    posts(where: {categories_some: {name_contains: $slug}}) {
      author{
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
    }
  }
  
  
  `

}

export const getSpecialize= async ()=>{
  const query =gql `
  query getSpecialize{
    specializationS{
      name
      slug
      subname
    }
  }
  
  `
  const result = await request(graphqlAPI1, query);

  return result.specializationS;
}
export const getSpecPosts= async (week,term,specialization)=>{

const query = gql`

query getSpecPosts($week: String, $term: String, $specialization:String) {
  posts(
    where: {week: $week, term: $term, specialization: {name_contains: $specialization}}
  ) {
    title
    image {
      url
    }
    createdAt
    week
    term
  }
}




`
const result = await request(graphqlAPI1, query,{week,term,specialization});
return result.posts

}