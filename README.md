# daciolo-chrome-extension

Extensão do Google Chrome para louvar a honra e glória do senhor Jesus Cristo.

## Features

### **Text Transformation**: changes text rendered in DOM

Original text | Transformed Text
------------- | ----------------
Glória | Glória a deuxxx
Brasil | URSAL

### [(#11)](https://github.com/rudnetto/daciolo-chrome-extension/issues/11) **Image replacement**: change (almost) every image on page with Cabo Daciolo's pictures

Every `<img>` element has it's source image changed by pictures of Cabo Daciolo. We fetch those pictures from Google Image's API.

---

## Getting Started

The extension is not published on Chrome Web Store yet. So we can only run it locally.

First, run `git checkout` to get the source code.

Install depedencies with `npm install` and build the extension running `npm run build`.

Then, open Google Chrome, go to **Extensions** page (Configs -> More Tools -> Extensions), enable **developer mode** and select (Load unpacked) the project folder.

Following these steps you will install the extension locally.

If you make any change on the extension, build it again and click on `Update` button on Extensions page to refresh the extension.

## Contributing

If you want to contribute to daciolo-chrome-extension, check the file CONTRIBUTE.MD to learn how to contribute.
