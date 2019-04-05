// Copyright (C) 2007-2018, GoodData(R) Corporation. All rights reserved.
export const loginMachinery = ({ sdk, projectId, domain }, callback = () => {}) => {
  const redirectToLogin = () => {
    if (domain) {
      window.location.replace(`${domain}/account.html?lastUrl=${encodeURIComponent(window.location)}`);
    } else {
      window.location.replace(`https://${window.location.hostname}:${window.location.port}/account.html?lastUrl=${encodeURIComponent(window.location)}`);
    }
  };

  sdk.user.isLoggedIn().then((isLogged) => {
    if (isLogged) {
      sdk.user.getAccountInfo().then((accountInfo) => {
        const { profileUri } = accountInfo;

        sdk.project.getProjects(profileUri.split('/')[4]).then((projects) => {
          if (projects.find(p => p.links.self === `/gdc/projects/${projectId}`)) {
            callback(accountInfo);
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

export const logout = (e, { sdk, domain }) => {
  e.preventDefault();

  const redirectToLogin = () => {
    if (domain) {
      window.location.replace(`${domain}/account.html?lastUrl=${encodeURIComponent(window.location)}`);
    } else {
      window.location.replace(`https://${window.location.hostname}:${window.location.port}/account.html`);
    }
  };

  sdk.user.logout().then(() => {
    redirectToLogin();
  });
};
