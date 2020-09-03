import React, { useState, useEffect, lazy, Suspense } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import Button from "../../components/button/Button.jsx";
import Loading from "../loading/Loading";
import { openSource, socialMediaLinks } from "../../portfolio";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([
    {
      node: {
        name: "web-development",
        description: null,
        forkCount: 3,
        stargazers: { totalCount: 0, __typename: "StargazerConnection" },
        url: "https://github.com/AshikRoyce/web-development",
        id: "MDEwOlJlcG9zaXRvcnkyODc3OTc5NDE=",
        diskUsage: 1301,
        primaryLanguage: {
          name: "JavaScript",
          color: "#f1e05a",
          __typename: "Language",
        },
        __typename: "Repository",
      },
      __typename: "PinnableItemEdge",
    },
  ]);

  useEffect(() => {
    // getRepoData();
  }, []);

  function getRepoData() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: (operation) => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${openSource.githubConvertedToken}`,
          },
        });
      },
    });

    client
      .query({
        query: gql`
        {
        user(login: "${openSource.githubUserName}") {
          pinnedItems(first: 6, types: [REPOSITORY]) {
            totalCount
            edges {
              node {
                ... on Repository {
                  name
                  description
                  forkCount
                  stargazers {
                    totalCount
                  }
                  url
                  id
                  diskUsage
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
        `,
      })
      .then((result) => {
        setrepoFunction(result.data.user.pinnedItems.edges);
        console.log(result.data.user.pinnedItems.edges);
      })
      .catch(function (error) {
        console.log(error);
        setrepoFunction("Error");
        console.log(
          "Because of this Error, nothing is shown in place of Projects section. Projects section not configured"
        );
      });
  }

  function setrepoFunction(array) {
    setrepo(array);
  }
  if (!(typeof repo === "string" || repo instanceof String)) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              return <GithubRepoCard repo={v} key={v.node.id} />;
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}