---
title: "GraphQl: How Not To Repeat Queries"
date: 2022-01-13
published: true
featured: false
---

In this post, I am going to write about what a fragment is in GraphQL. A GraphQL fragment is a reusable part of the query. In GraphQL, you may run into situations where you need to query for the same fields in different queries. If you notice that your query has many repetitive fields in multiple areas, you can consolidate them into a reusable unit called a fragment.

**I am still learning about GraphQl and the information that I am currently providing in this post might not inclue all the use cases of a fragment in GraphQl**

## The structure of a GraphQl Fragment

```
fragment Name on TypeName {
  field_key_1
  field_key_2
  field_key_3
}
```

A fragment consists of three unique components:

* **Name**: This the name of the fragment it should be unique otherwise you might see some errors
* **Type Name**: The type of object where the fragment gonna be used on
* **Body**: This is the part that you are repeating much in your queries

## Example of using a GraphQl Fragment

Before using the GraphQl Fragment on of my site query looked like the following:

```
    query HomePageQuery {
        rioThereImage: file(relativePath: {eq: "projects/riothere.com.png"}) {
            childImageSharp {
                gatsbyImageData(
                    formats: WEBP
                    placeholder: BLURRED
                    quality: 100
                    webpOptions: {quality: 100}
                    breakpoints: [500, 767, 1200]
                )
            }
        }
        concertForAfghanistanImage: file(
            relativePath: {eq: "projects/concertforafghanistan.com.png"}
        ) {
            childImageSharp {
                gatsbyImageData(
                    formats: WEBP
                    placeholder: BLURRED
                    quality: 100
                    webpOptions: {quality: 100}
                    breakpoints: [500, 767, 1200]
                )
            }
        }
        abouHannaImage: file(relativePath: {eq: "projects/abouhanna.com.png"}) {
            childImageSharp {
                gatsbyImageData(
                    formats: WEBP
                    placeholder: BLURRED
                    quality: 100
                    webpOptions: {quality: 100}
                    breakpoints: [500, 767, 1200]
                )
            }
        }
        MMFDImage: file(relativePath: {eq: "projects/mmfidawla.com.png"}) {
            childImageSharp {
                gatsbyImageData(
                    formats: WEBP
                    placeholder: BLURRED
                    quality: 100
                    webpOptions: {quality: 100}
                    breakpoints: [500, 767, 1200]
                )
            }
        }
        CodeBraveTutorsImage: file(relativePath: {eq: "projects/codebravetutors.org.png"}) {
            childImageSharp {
                gatsbyImageData(
                    formats: WEBP
                    placeholder: BLURRED
                    quality: 100
                    webpOptions: {quality: 100}
                    breakpoints: [500, 767, 1200]
                )
            }
        }
        GarderLeCapImage: file(relativePath: {eq: "projects/garderlecap.global.png"}) {
                       childImageSharp {
                gatsbyImageData(
                    formats: WEBP
                    placeholder: BLURRED
                    quality: 100
                    webpOptions: {quality: 100}
                    breakpoints: [500, 767, 1200]
                )
            }
        }
        ...
    }

```


And after implementing GraphQl Fragment my query looked like the following:

```
    fragment FileChildImageSharp on File {
        childImageSharp {
            gatsbyImageData(
                formats: WEBP
                placeholder: BLURRED
                quality: 100
                webpOptions: {quality: 100}
                breakpoints: [500, 767, 1200]
            )
        }
    }

    query HomePageQuery {
        rioThereImage: file(relativePath: {eq: "projects/riothere.com.png"}) {
            ...FileChildImageSharp
        }
        concertForAfghanistanImage: file(
            relativePath: {eq: "projects/concertforafghanistan.com.png"}
        ) {
            ...FileChildImageSharp
        }
        abouHannaImage: file(relativePath: {eq: "projects/abouhanna.com.png"}) {
            ...FileChildImageSharp
        }
        MMFDImage: file(relativePath: {eq: "projects/mmfidawla.com.png"}) {
            ...FileChildImageSharp
        }
        CodeBraveTutorsImage: file(relativePath: {eq: "projects/codebravetutors.org.png"}) {
            ...FileChildImageSharp
        }
        GarderLeCapImage: file(relativePath: {eq: "projects/garderlecap.global.png"}) {
            ...FileChildImageSharp
        }
        CodiTechImage: file(relativePath: {eq: "projects/codi.tech.png"}) {
            ...FileChildImageSharp
        }
        SummerOfInnovationImage: file(relativePath: {eq: "projects/summerofinnovation.io.png"}) {
            ...FileChildImageSharp
        }
        NextgenLondonImage: file(relativePath: {eq: "projects/nextgenlondon.com.png"}) {
            ...FileChildImageSharp
        }
    }
```

As you can see the code got a lot shorter and if later on I want to modify a field inside the body fragment I would not have the need to change every query code.
