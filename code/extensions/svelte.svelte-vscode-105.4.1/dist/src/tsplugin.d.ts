import { ExtensionContext } from 'vscode';
export declare class TsPlugin {
    private enabled;
    static create(context: ExtensionContext): void;
    private constructor();
    private getEnabledState;
    private toggleTsPlugin;
    private showReload;
    private askToEnable;
}
