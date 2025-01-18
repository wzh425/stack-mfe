import singleSpaBlazor from 'blazor-wasm-single-spa';

// Build the asset base URL from this JavaScript module's URL. The asset base URL must have a
// trailing slash for Blazor to apply it correctly.
const iLastSlash = import.meta.url.lastIndexOf('/');
const assetBaseUrl = import.meta.url.substring(0, iLastSlash + 1);

export const { bootstrap, mount, unmount } = singleSpaBlazor({
  appTagName: 'mfe-alert-app',
  stylePaths: [
    'css/app.css',
    'css/spinkit.min.css',
    '_content/Masa.Stack.Components/css/standard.css',
    '_content/Masa.Stack.Components/css/app.css',
    'https://cdn.masastack.com/npm/@mdi/font@5.x/css/materialdesignicons.min.css',
    'https://cdn.masastack.com/npm/materialicons/materialicons.css',
    'https://cdn.masastack.com/npm/fontawesome/v5.0.13/css/all.css',
    'https://cdn.masastack.com/stack/fonts/roboto/font-roboto.css',
    '_content/Masa.Alert.Web.Admin/css/alert-admin.css',
    'Masa.Alert.Web.Admin.WebAssembly.styles.css',
    'https://cdn.masastack.com/npm/vditor/3.8.12/dist/index.css'
  ],
  additionalImportPaths: [
    '_content/Masa.Blazor/js/masa-blazor.js',
    '_content/Masa.Stack.Components/js/components.js',
    '_content/Microsoft.AspNetCore.Components.WebAssembly.Authentication/AuthenticationService.js',
    'https://cdn.masastack.com/npm/aliyun/aliyun-oss-sdk.min.js',
    '_content/Masa.Stack.Components/js/oss/upload.js',
    'https://cdn.masastack.com/npm/masonry/masonry.pkgd.min.js',
    '_content/Masa.Alert.Web.Admin/js/util.js',
    'https://cdn.masastack.com/npm/echarts/5.1.1/echarts.min.js',
    // 'https://cdn.masastack.com/npm/vditor/3.8.12/dist/index.min.js'
  ],
  assetBaseUrl,
});
