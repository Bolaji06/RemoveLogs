# Remove Logging Statements - VSCode Extension
![Extension Icon](./assets/icon.png)
This VSCode extension helps you quickly remove all logging statements (like console.log, console.warn, and custom logger methods) from your code. It works across any open file or files within a workspace.

## Features
- Remove All Console Loggers: Automatically finds and removes statements like console.log(), console.warn(), console.error(), and others.
- Custom Logger Support: Define and remove custom logging statements (e.g., myLogger.log(), logger.debug()) by configuring the extension settings.
- Works Across Multiple Files: Run the command on individual files or across the entire workspace.
- Supports JavaScript and TypeScript Files. The extension works with JavaScript and TypeScript files by default, but you can customize the configuration.
  
## Installation
1. Download or clone this repository.
2. Open the project in Visual Studio Code.
3. Press F5 to run the extension in a new VSCode instance (for development).
4. To install it permanently, follow the instructions for packaging a VSCode extension.
   
## Usage
Once the extension is installed, you can remove logging statements from your files with a single command:

1. Open the command palette by pressing Ctrl + Shift + P (or Cmd + Shift + P on macOS).
2. Type and select Remove All Logging Statements.
3. The extension will remove all logging statements like console.log, console.warn, console.error, and other console methods from the current file.

## Custom Logger Configuration
By default, this extension only removes standard console log statements. However, you can configure it to remove custom loggers that are specific to your project.

### How to Specify Custom Loggers
You can define custom logger methods in your VSCode settings to be removed by the extension. Follow these steps:

1. Open the command palette and type Preferences: Open Settings (JSON).
2. In the JSON settings file, add a new entry for "removeLogs.customLoggers" and provide an array of logger methods.
   
*For example:
```json
{
    "removeLogs.customLoggers": ["myCustomLogger.log", "customLogger.debug", "anotherLogger.warn"]
}
```

- The extension will now remove any instance of myCustomLogger.log(), customLogger.debug(), or anotherLogger.warn() when you run the command.
  
*Default Loggers Removed
Out of the box, the extension removes the following standard logging methods:

- `console.log()`
- `console.warn()`
- `console.error()`
- `console.info()`
- `console.debug()`
- `console.trace()`
You can extend this with your custom logger configuration.

## Keyboard Shortcut
For convenience, you can also set up a keyboard shortcut to quickly trigger the log removal:

1. Open Keyboard Shortcuts by pressing Ctrl + K, Ctrl + S.
2. Search for Remove All Logging Statements.
3. Assign your preferred keybinding (e.g., Ctrl + Shift + L).


## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests on GitHub if you'd like to improve this extension.

## Release Notes
*1.0.0
- Initial release of Remove Logging Statements extension.
- Supports custom logger configuration and standard log removal.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

