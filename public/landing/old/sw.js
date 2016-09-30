/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["app.js","96bd6a3cbc229941b55e1d44212be26a"],["data/home.json","e6837cc5460be1ce71e894db2103260f"],["data/project.json","14eab81f92c8ee3574a0ccdd2b6833a4"],["data/st.json","99d8f346cd49ea1f7b38f60f85efb123"],["dist/app-layout/app-box/app-box.html","2e2ef4f746017791aa55702428602704"],["dist/app-layout/app-drawer-layout/app-drawer-layout.html","a1e8bd4d2d603461b4beaa070b228d0a"],["dist/app-layout/app-drawer/app-drawer.html","fa1a104b20b033ed47c956dda307cc45"],["dist/app-layout/app-header-layout/app-header-layout.html","2358b1725a05922520c5471d06864385"],["dist/app-layout/app-header/app-header.html","7efa8d8d692be4c2422053518eec80a2"],["dist/app-layout/app-layout.html","beb2ef8164dac4f97efb3b9da45b150c"],["dist/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","c4c8982a87491a4cca12cd29675b4906"],["dist/app-layout/app-scroll-effects/app-scroll-effects.html","da190dda2776e7685a6f45935dc7a440"],["dist/app-layout/app-scroll-effects/effects/blend-background.html","aadf4b839410a4036fe81732f3cbece3"],["dist/app-layout/app-scroll-effects/effects/fade-background.html","68d7666141432e4ee0e1c150fbbb5788"],["dist/app-layout/app-scroll-effects/effects/material.html","72ace29391b9efdf7ce9669209efbb5d"],["dist/app-layout/app-scroll-effects/effects/parallax-background.html","2fb9b81a267124681589e39b123d8a99"],["dist/app-layout/app-scroll-effects/effects/resize-snapped-title.html","eac6ff46085b508901e0d35f5e7e1ebe"],["dist/app-layout/app-scroll-effects/effects/resize-title.html","17479e22b3e919ffd1bacbbee9d09bf1"],["dist/app-layout/app-scroll-effects/effects/waterfall.html","783146a443e929a705cbf0af8e9abf67"],["dist/app-layout/app-scrollpos-control/app-scrollpos-control.html","dfdb7f890438819d751d9ef9c427a1ab"],["dist/app-layout/app-toolbar/app-toolbar.html","f3155b673df3b2d10d1db78176c1112f"],["dist/app-layout/helpers/helpers.html","7e5370a5e8c2a8f2da5d6544cf5dbd54"],["dist/app-layout/index.html","393ba53138ce645f8540e711a8cb1140"],["dist/carbon-route/carbon-location.html","32bd890814ee3cd6c90c8dcf59e39f8e"],["dist/carbon-route/carbon-route-converter.html","0fcf27c0616a04a585939339ad3e1a7f"],["dist/carbon-route/carbon-route.html","2023c8d9a449c44d2f35cd7ad3ad93bb"],["dist/font-roboto/roboto.html","3c017dcd17189b99a03dbeffb81bc254"],["dist/iron-a11y-announcer/iron-a11y-announcer.html","3a6d83360cc2c1da7a9122850deb2a3d"],["dist/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","b9c3db9722e1cb5a7e667720c1059294"],["dist/iron-ajax/iron-ajax.html","5ca69e0d797a2b81db7ef4b49bd3c458"],["dist/iron-ajax/iron-request.html","cbdd1e73b3226d818649483635a83a13"],["dist/iron-autogrow-textarea/iron-autogrow-textarea.html","abae93ff232cabbce3990edfd0d7a417"],["dist/iron-behaviors/iron-button-state.html","ad8eca82299ffee5a07c4cd534843c3a"],["dist/iron-behaviors/iron-control-state.html","77847a5245bc5381bfbfb2103fd99e7f"],["dist/iron-checked-element-behavior/iron-checked-element-behavior.html","5ee1c6f714a45b29542a062bce90af04"],["dist/iron-collapse/iron-collapse.html","223a90984180e4f287e5b7586b9b88d4"],["dist/iron-component-page/iron-component-page.html","fbc5a35565be15357034c946291ba9a2"],["dist/iron-demo-helpers/demo-pages-shared-styles.html","b430d1981c250863e7fef8bd8052b690"],["dist/iron-demo-helpers/demo-snippet.html","65e6cffecff4e183c362f005f83b59ee"],["dist/iron-demo-helpers/url-bar.html","d0b4069c9f9787848ad717779bc04db7"],["dist/iron-doc-viewer/iron-doc-property-styles.html","05a07858d2a8d1c4aa057d5870709996"],["dist/iron-doc-viewer/iron-doc-property.html","cee9dd689afd26fc710b44b1713f3d1a"],["dist/iron-doc-viewer/iron-doc-viewer-styles.html","9ed6a7a22124bfd266e755fb5cb44bbe"],["dist/iron-doc-viewer/iron-doc-viewer.html","986c1b2050129c6f047002af4ff07fff"],["dist/iron-dropdown/iron-dropdown-scroll-manager.html","fdfbd9f62a934829adc34491e35df8c4"],["dist/iron-dropdown/iron-dropdown.html","f3350c485c80fc62841e0e22aa02972c"],["dist/iron-elements/iron-elements.html","7d059a24724323964f2a477af8d5cef9"],["dist/iron-fit-behavior/iron-fit-behavior.html","bb9943e858373092617fc021c85c9014"],["dist/iron-flex-layout/classes/iron-flex-layout.html","f4d251909bf801a619fffd51b90e89cd"],["dist/iron-flex-layout/classes/iron-shadow-flex-layout.html","d3324c0cdcff84f453b19c616262ce05"],["dist/iron-flex-layout/iron-flex-layout-classes.html","fd4715b7e49e2b39d705ec0da4b8e0e2"],["dist/iron-flex-layout/iron-flex-layout.html","1297fb6d4dd3c9c662df95436403b945"],["dist/iron-form/iron-form.html","006df87107f1d8c606e5df4717cc038d"],["dist/iron-icon/iron-icon.html","bb61d47865c8fef512916d9a194c41d0"],["dist/iron-icons/av-icons.html","7ddc624b73101033c72e95f2d138fb32"],["dist/iron-icons/communication-icons.html","f5d3567b8b566cd0f4e6044142ec4367"],["dist/iron-icons/device-icons.html","3f45536976ee6acc3511387bc971927c"],["dist/iron-icons/editor-icons.html","966f59875767c28d63e85109f72342b7"],["dist/iron-icons/hardware-icons.html","3a47896ccd2f6001ac02b1af558df06f"],["dist/iron-icons/image-icons.html","f8a35791c75944606e49d9c905630a6b"],["dist/iron-icons/iron-icons.html","4d452f51b8128ca8daa6f19dd5863f89"],["dist/iron-icons/maps-icons.html","6e9b1f0fc963de60dd8ab8d3f35897ce"],["dist/iron-icons/notification-icons.html","17bd1a49aa9ba1e4ee871e38b62a585d"],["dist/iron-icons/places-icons.html","ea613d2a960538ee952d2b34c6ff895a"],["dist/iron-icons/social-icons.html","e368d3300eca0228f9684f7f88d5aaaa"],["dist/iron-iconset-svg/iron-iconset-svg.html","81c4918a38c5bc55587cd7e6b42653c5"],["dist/iron-iconset/iron-iconset.html","8a6ad4ee90c97815ec5008d066245dc1"],["dist/iron-image/iron-image.html","db6f0aaf59c4afe973206e2cd8a3a1f3"],["dist/iron-list/iron-list.html","594b56bf6fd6237ac6b58a7d5ef54692"],["dist/iron-location/iron-location.html","5650dbf16f9997d034266288793f1049"],["dist/iron-location/iron-query-params.html","ceb2fe3a8f3b9ecea173e839ad686727"],["dist/iron-media-query/iron-media-query.html","98dd363e9f1d1fb1624ae515cd21659d"],["dist/iron-menu-behavior/iron-menu-behavior.html","c1c5989b780b0f0100144809ac2c076c"],["dist/iron-menu-behavior/iron-menubar-behavior.html","f2082dc1740cc7a99397100d7afdf858"],["dist/iron-meta/iron-meta.html","41d9a8b2630fabfbb19a71829c37429f"],["dist/iron-overlay-behavior/iron-overlay-backdrop.html","527dbb5d64486e8bec190acab8d558fa"],["dist/iron-overlay-behavior/iron-overlay-behavior.html","741a98d7fa5df81fece5d0e4c586c010"],["dist/iron-overlay-behavior/iron-overlay-manager.html","1cb52e3a57d735ea52b9aacd1ede075b"],["dist/iron-pages/iron-pages.html","cbf7195d747900533c0d8b14bb64365f"],["dist/iron-resizable-behavior/iron-resizable-behavior.html","e4dca63d4a842f1df7f0206dd1d5e7e7"],["dist/iron-scroll-target-behavior/iron-scroll-target-behavior.html","563f667bf57dc9f6e410455673a10cef"],["dist/iron-selector/iron-multi-selectable.html","1157b8d586647fa00b162fbbeb335891"],["dist/iron-selector/iron-selectable.html","a4db5130ca00114a1ecfd53d0ee6af48"],["dist/iron-selector/iron-selection.html","4ec63a1de50d2b93892b3fd951d73dbc"],["dist/iron-selector/iron-selector.html","cdfcdc5685adbfc9d2b1324dd4803c30"],["dist/neon-animation/animations/cascaded-animation.html","057e551d70dcf3e34da57d3da750c822"],["dist/neon-animation/animations/fade-in-animation.html","3c3a01969d020450b7788e13c70e51a0"],["dist/neon-animation/animations/fade-out-animation.html","79f5f1d31e76738b88ef6444e1092f3a"],["dist/neon-animation/animations/hero-animation.html","a764f8ebf0e4291195c23685187c7d00"],["dist/neon-animation/animations/opaque-animation.html","2368ce12b37187e1c49ff29bf39bcb7a"],["dist/neon-animation/animations/reverse-ripple-animation.html","1462c3bf997d3a38538f08823429a78d"],["dist/neon-animation/animations/ripple-animation.html","8235b473d295cf58c5b03a4b905ae786"],["dist/neon-animation/animations/scale-down-animation.html","7f3bd95a8af87505cd47efcc6223af7d"],["dist/neon-animation/animations/scale-up-animation.html","45a43a00e4c4ffe7fab515639b10a36d"],["dist/neon-animation/animations/slide-down-animation.html","30f9769459d606fd2d6eb8ae72fed2f9"],["dist/neon-animation/animations/slide-from-bottom-animation.html","fd8876ffbddfd842c43b1a49934c453b"],["dist/neon-animation/animations/slide-from-left-animation.html","2231f4d714345ee70dd699c5d8876899"],["dist/neon-animation/animations/slide-from-right-animation.html","4d65bc6852612dc6eb77993c0198ebc1"],["dist/neon-animation/animations/slide-from-top-animation.html","0da6aee1dadcffa1fb21500a3e623135"],["dist/neon-animation/animations/slide-left-animation.html","4436586fcc72c09e409179f615b18b5b"],["dist/neon-animation/animations/slide-right-animation.html","776fea340a0830613ebc1e62aea318d4"],["dist/neon-animation/animations/slide-up-animation.html","2e261d648d9fa67c606c8582fc09beca"],["dist/neon-animation/animations/transform-animation.html","f5e56d089324c2b912ac8e5731b3b5f1"],["dist/neon-animation/index.html","52fa103a69d56c6cdb1d8d11d7ace365"],["dist/neon-animation/neon-animatable-behavior.html","32c7ea0fe7890db7001d4e8687069ba1"],["dist/neon-animation/neon-animatable.html","93005a8bc09cc3aa942b54fb7feef3c4"],["dist/neon-animation/neon-animated-pages.html","6944a8ac01be98c5c6de9bde57a1331c"],["dist/neon-animation/neon-animation-behavior.html","bc8a36f87056e93701a9672a4313052b"],["dist/neon-animation/neon-animation-runner-behavior.html","4116f8ffa540a58dbd5e5f9178aa5f5b"],["dist/neon-animation/neon-animation.html","8c20deade545cc26334cd3ab5130c747"],["dist/neon-animation/neon-animations.html","a0171c87c0fe88bdd8e270f1d1f39534"],["dist/neon-animation/neon-shared-element-animatable-behavior.html","41b7fad8a9fa7702b3d3b1bbb615d59f"],["dist/neon-animation/neon-shared-element-animation-behavior.html","67f838dfc8db2e7316cf0f1d1787c8c2"],["dist/neon-animation/web-animations.html","577638b27a2a77c751047a7b77cb49f2"],["dist/paper-behaviors/paper-button-behavior.html","6e442ff9bb6aff0a227108dba24ff898"],["dist/paper-behaviors/paper-checked-element-behavior.html","a020c4260c3868ff9f3bcedddf93c75f"],["dist/paper-behaviors/paper-inky-focus-behavior.html","6543e5da8269544e5e1f3c9cbd18ba08"],["dist/paper-behaviors/paper-ripple-behavior.html","92819a084edd2c1ce8d5e2c0325dcdcb"],["dist/paper-button/paper-button.html","5efb3fa228118f57a14d2ec820804bb1"],["dist/paper-card/paper-card.html","2d555f330dac3acf8bdc9b28068da1ee"],["dist/paper-dialog-behavior/paper-dialog-behavior.html","1fc6f1f9893d3026961ac5854f123266"],["dist/paper-dialog-behavior/paper-dialog-shared-styles.html","1e60f3be3d5ed40c68c42b822adce272"],["dist/paper-dialog/paper-dialog.html","e60872e0b60d4aaadd97defe1e3d0478"],["dist/paper-drawer-panel/paper-drawer-panel.html","90aa93fc929a0eda6ba3c472592058a9"],["dist/paper-elements/paper-elements.html","60fae154f5983e9272066eabd6396223"],["dist/paper-icon-button/paper-icon-button.html","e5ee1b21c4351454a007330fdd13de3d"],["dist/paper-input/all-imports.html","9163c20ddfd457e2918b9a752097c152"],["dist/paper-input/paper-input-addon-behavior.html","3e224c0fefaf1c02cfa31bd238bd5259"],["dist/paper-input/paper-input-behavior.html","23fd57e2d082cd415893691a226586de"],["dist/paper-input/paper-input-char-counter.html","7fc1b9253e4c5ab95f1281e443a9cd07"],["dist/paper-input/paper-input-container.html","de7e769aa7b07c65825d9170cbd0ff73"],["dist/paper-input/paper-input-error.html","849e5889fbbffdc47cab253625f8bde5"],["dist/paper-input/paper-input.html","47ecbf4053d632c7c84b271cbf6b27a0"],["dist/paper-input/paper-textarea.html","48899e48058cb5aec9fb938475730985"],["dist/paper-item/all-imports.html","3e8b391e3231bf46fa6b7e6e1311b3a9"],["dist/paper-item/paper-icon-item.html","5a88cbde8d3a67d32f4bca948506767e"],["dist/paper-item/paper-item-behavior.html","47e1ea2e4239b29630a9bff8337bca70"],["dist/paper-item/paper-item-body.html","fd0f380b851945cad3595d373fc80253"],["dist/paper-item/paper-item-shared-styles.html","274ebb1009bbdda75a74d8872ce17b24"],["dist/paper-item/paper-item.html","f86cade9367909fc342378024e8475e8"],["dist/paper-material/paper-material-shared-styles.html","67bfee37f67e75409147e3b5e92bff54"],["dist/paper-material/paper-material.html","b222f8ea2671904b1c472c61ea1cac1c"],["dist/paper-menu-button/paper-menu-button-animations.html","4096f0b1ed3fa17fb1b32d412e151ff7"],["dist/paper-menu-button/paper-menu-button.html","e160628295812f2af3c5e8644d231c24"],["dist/paper-menu/paper-menu-shared-styles.html","7cb1d82edf2af6ca4a4b30e8ab6dbc78"],["dist/paper-menu/paper-menu.html","3dbdd29e00c224967334f2f560334aa4"],["dist/paper-menu/paper-submenu.html","ff617edcf146e9ac8585223c83473b14"],["dist/paper-radio-button/paper-radio-button.html","79e5862478532dc6d0b2568f1aab6c79"],["dist/paper-ripple/paper-ripple.html","c69ca61e7abbb5c863aaa7d1c26ee04d"],["dist/paper-spinner/paper-spinner-behavior.html","7d8122a11ffc1679545c4764cbcd6547"],["dist/paper-spinner/paper-spinner-lite.html","a9a5cbdddd4c13451f56eb3286436a68"],["dist/paper-spinner/paper-spinner-styles.html","47661ace33ace5ad1cfaa6ce8e92fb6b"],["dist/paper-spinner/paper-spinner.html","2b60f28238250092e8d01bbc96874bec"],["dist/paper-styles/classes/global.html","b34ca0ccd0b319b0827f069d708c7960"],["dist/paper-styles/classes/shadow-layout.html","e173ca9f3df01290eca6015a8f047ed5"],["dist/paper-styles/classes/shadow.html","4af91acc56431fcce199868696affdb0"],["dist/paper-styles/classes/typography.html","383fe20a534fb6f32965e50fcdf0baf2"],["dist/paper-styles/color.html","68d6340845d968495e01abb583045c22"],["dist/paper-styles/default-theme.html","9e2ad101385fe423d30f6818d198bca9"],["dist/paper-styles/demo-pages.html","b85d1141fb548fe7da47522d49f81bd9"],["dist/paper-styles/paper-styles-classes.html","152826dd4271452e7f557b5133a83b95"],["dist/paper-styles/paper-styles.html","116f49145f929f7317e9ab63b5e8f8bd"],["dist/paper-styles/shadow.html","42898cbec32430d8deee852b5fb31434"],["dist/paper-styles/typography.html","09338598742616cc2fbb91e17e3c8d81"],["dist/paper-tabs/paper-tab.html","8cf5fff2bd02b034bd662fc1d209e702"],["dist/paper-tabs/paper-tabs-icons.html","0f4cfe2aab9adc37ad0deea2bbe09a04"],["dist/paper-tabs/paper-tabs.html","20cb61c6a9c9dd62247fec82445acf44"],["dist/paper-toast/paper-toast.html","d02a49b8cc05e618166f1c6e8d941e93"],["dist/paper-toolbar/paper-toolbar.html","bb4761fc9d9acca5e42221fb4c695c15"],["dist/polymer/polymer-micro.html","2f75606c7e6bd71eba4da67ba25589a3"],["dist/polymer/polymer-mini.html","79075bbc52acd3bbcfd9e1e1d8763585"],["dist/polymer/polymer.html","371d934593f10e721b1d9a2865933f02"],["dist/promise-polyfill/Gruntfile.js","c37b184eeb8fb7c88fa1592ddd1fee15"],["dist/promise-polyfill/Promise-Statics.js","324d1ccb13fb25a8846fc19107985f59"],["dist/promise-polyfill/Promise.js","f7d54d1274e01f41b13d3d231311863a"],["dist/promise-polyfill/Promise.min.js","87b461da98e0c115bc1364fae0b29d1c"],["dist/promise-polyfill/promise-polyfill-lite.html","2f8b92d2ea54aa722312abf662ff93a9"],["dist/promise-polyfill/promise-polyfill.html","5a72f703060938cd3e28c8b972ea9595"],["dist/web-animations-js/web-animations-next-lite.min.js","6ed0cce6023aa9b84dd48027b2f18e7e"],["dist/web-animations-js/web-animations-next.min.js","9cee7fbcfbdd81e97be01b700ccd4856"],["dist/web-animations-js/web-animations.html","b9b6f89dc04ee434856a12b110a96bf5"],["dist/web-animations-js/web-animations.min.js","29bb457d48dea43175f21d2f2d97168e"],["dist/webcomponentsjs/CustomElements.min.js","16e1516a97aceb46028a886d3539a5ac"],["dist/webcomponentsjs/HTMLImports.min.js","92bfc5929808d3d81697719df9bac7f5"],["dist/webcomponentsjs/MutationObserver.min.js","9334be9346f82d54a3036925902154a1"],["dist/webcomponentsjs/ShadowDOM.min.js","af286cc0a7569538bcd904fb5908a209"],["dist/webcomponentsjs/webcomponents-lite.min.js","5c4822fccff4ef9cb7d4adee02c37527"],["dist/webcomponentsjs/webcomponents.min.js","42496e67156d0050cd6265d39aa000c1"],["elements/app-page.html","fc64d66ebb7bb1893ddf7b98885f9be2"],["elements/contact-page.html","2097ab59f4b5ce6b3749f2c37ec0535a"],["elements/elements.html","e6e57628d237d7d7adb3b0181315febe"],["elements/footer-page.html","79830b2d4cb3e87e5ef63ed6cade6617"],["elements/home-page.html","b20045d663c4e30dd0cedc54641621b5"],["elements/project-page.html","9c72b02a5430dbbe76ee92bf88ec031c"],["elements/resources-page.html","5ff2b1379e1d5b79ba97d81f98cc07c4"],["img/ami.svg","af5ec524661208d70ad4f6c84c35ac3c"],["img/autowifimmu.png","54a7dec08df2fced0febf104653f8979"],["img/b.svg","4726545e2de743f7ead292877cf1b521"],["img/bulletin.png","52b2381441c8ce84aae29cf7156ce9ef"],["img/c.svg","582e104b6412e00f81d5ca60d78d5be3"],["img/converter.svg","728e252fd407862c72464604e0fe3a10"],["img/earth.png","5a4641d715ff2a3d64fe13dcd972c309"],["img/favicon.ico","fec13ad89a2bbac575be067936ea7940"],["img/fb.svg","76665abc9cba30d60f47ce9845fa5558"],["img/gdg-compressor.png","dfd31760d599e1125f99803dbbe7545d"],["img/gdg.png","26a0b22df99a44e203620373f3769b0e"],["img/gdg.webp","25e6f183ec07c9cb5dc2829efe7bec41"],["img/gdg_icon.svg","067456ec34095179b44628b6bfa66d73"],["img/git_issues_voter.svg","ae5f40481bff9e27e5d0cf336d4e535c"],["img/google_slides_remote.png","77224a5780cc8ab4733e99dcb860f745"],["img/gtav.svg","82b51f5c4beb454081f0142e6d08caf5"],["img/h.svg","e3b232b556241145f543388edc7c0c59"],["img/homescreen144.png","68d2fc9bb5c655670e73d1ee2fc655a0"],["img/homescreen192.png","06d26dc943e3ebe29fe4d4a1e11bc859"],["img/homescreen48.png","394036ca2ee1f9aec14d11323581507c"],["img/homescreen72.png","afcbea8a73ba81762368d97460a297a3"],["img/homescreen96.png","c669d8067fe7cc6c933b08dc27622c3a"],["img/profile-rose.webp","ba008bbe8a21901842ecb043266d2aaa"],["img/profile.webp","b7860542da5249c748d6ac2f57a773b0"],["img/r.svg","8d65390ff570d730ac181020b80aeddb"],["img/tm.svg","e0dff39a78610ab3ec636cb62c8cae95"],["index.html","7723619848eae1024b3f6ee382a58c23"],["manifest.json","f8ba4f1db69c63e83e1dda9f89118e7f"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, now) {
    now = now || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + now;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) === -1;
        }).map(function(cacheName) {
          var urlWithCacheBusting = getCacheBustedUrl(CurrentCacheNamesToAbsoluteUrl[cacheName],
            now);

          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName], response);
              }

              console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) === 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




