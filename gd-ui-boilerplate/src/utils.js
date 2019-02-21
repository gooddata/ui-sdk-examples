// Copyright (C) 2007-2018, GoodData(R) Corporation. All rights reserved.
export const loginMachinery = ({ sdk, projectId, domain }, callback = () => {}) => {
  const redirectToLogin = () => {
    if (domain) {
      window.location.replace(`${domain}/account.html?lastUrl=${window.location}`);
    } else {
      window.location.replace(`https://${window.location.hostname}:${window.location.port}/account.html`);
    }
  };

  sdk.user.isLoggedIn().then((isLogged) => {
    if (isLogged) {
      sdk.user.getAccountInfo().then(({ profileUri }) => {
        sdk.project.getProjects(profileUri.split('/')[4]).then((projects) => {
          if (projects.find(p => p.links.self === `/gdc/projects/${projectId}`)) {
            callback();
          } else {
            sdk.user.logout().then(() => {
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
