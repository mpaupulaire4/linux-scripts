"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsPlugin = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const vscode_1 = require("vscode");
class TsPlugin {
    constructor(context) {
        this.enabled = this.getEnabledState();
        this.askToEnable(this.enabled);
        this.toggleTsPlugin(this.enabled);
        context.subscriptions.push(vscode_1.workspace.onDidChangeConfiguration(() => {
            const enabled = this.getEnabledState();
            if (enabled !== this.enabled) {
                this.enabled = enabled;
                this.toggleTsPlugin(this.enabled);
            }
        }));
    }
    static create(context) {
        new TsPlugin(context);
    }
    getEnabledState() {
        var _a;
        return (_a = vscode_1.workspace.getConfiguration('svelte').get('enable-ts-plugin')) !== null && _a !== void 0 ? _a : false;
    }
    toggleTsPlugin(enable) {
        const extension = vscode_1.extensions.getExtension('svelte.svelte-vscode');
        if (!extension) {
            // This shouldn't be possible
            return;
        }
        const packageJson = (0, path_1.join)(extension.extensionPath, 'package.json');
        const enabled = '"typescriptServerPlugins"';
        const disabled = '"typescriptServerPlugins-disabled"';
        try {
            const packageText = (0, fs_1.readFileSync)(packageJson, 'utf8');
            if (packageText.includes(disabled) && enable) {
                const newText = packageText.replace(disabled, enabled);
                (0, fs_1.writeFileSync)(packageJson, newText, 'utf8');
                this.showReload(true);
            }
            else if (packageText.includes(enabled) && !enable) {
                const newText = packageText.replace(enabled, disabled);
                (0, fs_1.writeFileSync)(packageJson, newText, 'utf8');
                this.showReload(false);
            }
            else if (!packageText.includes(enabled) && !packageText.includes(disabled)) {
                vscode_1.window.showWarningMessage('Unknown Svelte for VS Code package.json status.');
            }
        }
        catch (err) {
            vscode_1.window.showWarningMessage('Svelte for VS Code package.json update failed, TypeScript plugin could not be toggled.');
        }
    }
    async showReload(enabled) {
        // Restarting the TSServer via a command isn't enough, the whole VS Code window needs to reload
        let message = `TypeScript Svelte Plugin ${enabled ? 'enabled' : 'disabled'}.`;
        if (enabled) {
            message +=
                ' Note that changes of Svelte files are only noticed by TS/JS files after they are saved to disk.';
        }
        message += ' Please reload VS Code to restart the TS Server.';
        const reload = await vscode_1.window.showInformationMessage(message, 'Reload Window');
        if (reload) {
            vscode_1.commands.executeCommand('workbench.action.reloadWindow');
        }
    }
    async askToEnable(enabled) {
        const shouldAsk = vscode_1.workspace
            .getConfiguration('svelte')
            .get('ask-to-enable-ts-plugin');
        if (enabled || !shouldAsk) {
            return;
        }
        const answers = ['Ask again later', "Don't show this message again", 'Enable Plugin'];
        const response = await vscode_1.window.showInformationMessage('The Svelte for VS Code extension now contains a TypeScript plugin. ' +
            'Enabling it will provide intellisense for Svelte files from TS/JS files. ' +
            'Would you like to enable it? ' +
            'You can always enable/disable it later on through the extension settings.', ...answers);
        if (response === answers[2]) {
            vscode_1.workspace.getConfiguration('svelte').update('enable-ts-plugin', true, true);
        }
        else if (response === answers[1]) {
            vscode_1.workspace.getConfiguration('svelte').update('ask-to-enable-ts-plugin', false, true);
        }
    }
}
exports.TsPlugin = TsPlugin;
//# sourceMappingURL=tsplugin.js.map