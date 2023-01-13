import React, { createContext, useState, useContext, useEffect } from "react";
import last from "lodash/last";
import isEmpty from "lodash/isEmpty";

import { defaultSourceState } from "../utils";
import { workspaceFilter } from "../constants";

import { useBackend, useAuth } from "./Auth";
import { AuthStatus } from "./Auth/state";

const WorkspaceListContext = createContext({
    ...defaultSourceState,
});

const filterWorkspaces = (workspaces, filter) => {
    if (filter) {
        return workspaces.filter((workspace) => workspace.title.match(filter));
    }
    return workspaces;
};

const getFirstWorkspace = (workspaces) => {
    if (workspaces.length) {
        return last(workspaces[0].id.split("/"));
    }
    return undefined;
};

export const WorkspaceListProvider = ({ children }) => {
    const { authStatus } = useAuth();
    const backend = useBackend();
    const [workspaceListState, setWorkspaceListState] = useState({
        ...defaultSourceState,
    });

    const [firstWorkspace, setFirstWorkspace] = useState(undefined);

    useEffect(() => {
        const getWorkspaces = async () => {
            setWorkspaceListState({ isLoading: true });

            try {
                const workspaces = [];
                let page = await backend.workspaces().forCurrentUser().query();

                while (!isEmpty(page.items)) {
                    const allDescriptors = await Promise.all(
                        page.items.map((workspace) => workspace.getDescriptor()),
                    );

                    workspaces.push(...allDescriptors);
                    page = await page.next();
                }

                const filteredWorkspaces = filterWorkspaces(workspaces, workspaceFilter);
                setWorkspaceListState({
                    isLoading: false,
                    data: filteredWorkspaces,
                });

                setFirstWorkspace(getFirstWorkspace(filteredWorkspaces));
            } catch (error) {
                setWorkspaceListState({ isLoading: false, error });
            }
        };

        setWorkspaceListState({ isLoading: false });

        if (authStatus === AuthStatus.AUTHORIZED) {
            getWorkspaces().catch(console.error);
        }
    }, [authStatus, backend]);

    return (
        <WorkspaceListContext.Provider value={{ ...workspaceListState, firstWorkspace }}>
            {children}
        </WorkspaceListContext.Provider>
    );
};

export const useWorkspaceList = () => useContext(WorkspaceListContext);
