// (C) 2021 GoodData Corporation
import {
    DashboardContext,
    DashboardPluginV1,
    IDashboardCustomizer,
} from "@gooddata/sdk-ui-dashboard";

import entryPoint from "../dp_workday_poc_entry";

import { spreadJsComponentFactory } from './SpreadJsWidget';

export class Plugin extends DashboardPluginV1 {
    public readonly author = entryPoint.author;
    public readonly displayName = entryPoint.displayName;
    public readonly version = entryPoint.version;
    public readonly minEngineVersion = entryPoint.minEngineVersion;
    public readonly maxEngineVersion = entryPoint.maxEngineVersion;

    public onPluginLoaded(_ctx: DashboardContext, _parameters?: string): Promise<void> | void { }

    public register(
        _ctx: DashboardContext,
        customize: IDashboardCustomizer,
    ): void {
        customize.insightWidgets().withCustomProvider((insight) => {
            // look for insights with name that starts with #spreadjs#, replace them with SpreadJS insight
            if (insight.insight.title.startsWith("#spreadjs#")) {
                return spreadJsComponentFactory();
            }
            return undefined;
        });
    }

    public onPluginUnload(_ctx: DashboardContext): Promise<void> | void { }
}
