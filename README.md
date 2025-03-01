# Simple Translation Extension

This extension allows you to translate selected English text to Turkish.

## Features

*   **Translation:** Translates selected English text to Turkish using the `mymemory.translated.net` API.
*   **Draggable Result Box:** The translation box can be dragged to any location on the screen.
*   **Close Button:** The result box has a close button to dismiss it.
*   **Timed Disappearance:** The result box automatically disappears after a few seconds.

## Prerequisites

*   None. This extension uses a free translation API and does not require any API keys or accounts.

## Setup

1.  **Install the Extension Locally:**

    *   Create a new directory for your extension (e.g., `simple-translation-extension`).
    *   Create the following files within the directory:
        *   `manifest.json`: This file describes your extension to the browser.
        *   `script.js`: This file contains the JavaScript code for your extension.

2.  **manifest.json:**
    Create a `manifest.json` file in your extension directory with the following content:

    ```
    {
      "manifest_version": 3,
      "name": "Simple Translation Extension",
      "version": "1.0",
      "description": "Translates selected text to Turkish.",
      "permissions": [
        "activeTab",
        "scripting"
      ],
      "host_permissions": [
        "*://*/*"
      ],
      "content_scripts": [
        {
          "matches": ["<all_urls>"],
          "js": ["script.js"],
          "run_at": "document_end"
        }
      ],
      "web_accessible_resources": [
        {
          "resources": ["script.js"],
          "matches": ["<all_urls>"]
        }
      ]
    }
    ```

3.  **script.js:**
    *   Copy and paste the complete JavaScript code into the `script.js` file.

## Loading the Extension in Your Browser (Chrome/Edge):

1.  **Open Chrome/Edge:**
    *   Open the Google Chrome or Microsoft Edge browser.
2.  **Navigate to Extensions Page:**
    *   Type `chrome://extensions` (for Chrome) or `edge://extensions` (for Edge) in the address bar and press Enter.
3.  **Enable Developer Mode:**
    *   In the top right corner of the Extensions page, toggle the "Developer mode" switch to the ON position.
4.  **Load Unpacked Extension:**
    *   Click the "Load unpacked" button that appears in the top left corner.
    *   Browse to the directory where you created your extension files (e.g., `simple-translation-extension`) and select the directory.
5.  **The extension should now be loaded.** You may need to refresh any open web pages for the extension to take effect.

## Usage

1.  Browse to any webpage containing English text.
2.  Double-click to select the text you want to translate.
3.  The translated text will appear in a floating box.
4.  You can drag the box to reposition it.
5.  Click the "X" button to close the box.
6.  The box will automatically disappear after a few seconds.

## Troubleshooting

*   **Extension Not Loading:**
    *   Make sure the `manifest.json` file is correctly formatted.  Check for syntax errors.
    *   Check the browser's Extensions page for any error messages related to your extension.
*   **Translation Not Working:**
    *   Check the browser's console for any error messages.  The free translation API may be temporarily unavailable.

## Important Notes

*   This extension uses a free translation API, which may not be as accurate as paid services.
*   The quality of the translation depends on the `mymemory.translated.net` API.

