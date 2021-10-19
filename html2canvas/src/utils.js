// Copyright (C) 2007-2018, GoodData(R) Corporation. All rights reserved.
export const loginMachinery = (gooddata, projectId, domain, renderApp) => {
  const redirectToLogin = () => {
    if (domain) {
      window.location.replace(
        `${domain}/account.html?lastUrl=${window.location}`
      );
    } else {
      window.location.replace(
        `https://${window.location.hostname}:${window.location.port}/account.html`
      );
    }

    return null;
  };

  gooddata.user.isLoggedIn().then(isLogged => {
    if (isLogged) {
      gooddata.user.getAccountInfo().then(({ profileUri }) => {
        gooddata.project
          .getProjects(profileUri.split("/")[4])
          .then(projects => {
            if (
              projects.find(p => p.links.self === `/gdc/projects/${projectId}`)
            ) {
              renderApp();
            } else {
              gooddata.user.logout().then(() => {
                redirectToLogin();
              });
            }
          });
      });
    } else {
      redirectToLogin();
    }
  });
};
