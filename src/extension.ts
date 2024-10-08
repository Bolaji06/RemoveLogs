import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {

  const disposable = vscode.commands.registerCommand(
    "extension.removeLogs",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const document = editor.document;
        const text = document.getText();

        const customLogger =
          vscode.workspace
            .getConfiguration("removeLogs")
            .get<string[]>("customLoggers") || [];
        const loggerPattern = customLogger.length ? customLogger.join("|") : "";
        const logRegex = new RegExp(
          `(console\\.(log|warn|error|debug|info)|${loggerPattern})\\s*\\([\\s\\S]*?\\);?`,
          "g"
        );

        const logCount = (text.match(logRegex) || []).length;

        const edit = new vscode.WorkspaceEdit();
        const newText = text.replace(logRegex, "");

        const documentRange = new vscode.Range(
          document.positionAt(0),
          document.positionAt(text.length)
        );

        edit.replace(document.uri, documentRange, newText);
        vscode.workspace.applyEdit(edit);
        vscode.window.showInformationMessage(
          `Removed ${logCount} logging statement!`
        );
      }
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
