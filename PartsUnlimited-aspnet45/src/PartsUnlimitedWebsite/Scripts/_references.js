﻿/// <reference path="jquery-3.5.1.js" />
/// <reference path="jquery-ui-1.12.1.js" />
/// <reference path="modernizr-2.8.3.js" />
/// <reference path="../gruntfile.js" />
/// <reference path="AppInsights.js" />
/// <reference path="NewStoreArrivals.js" />
/// <reference path="../wwwroot/lib/bootstrap/bootstrap.js" />
/// <reference path="../wwwroot/lib/jquery/jquery.js" />
/// <reference path="../wwwroot/lib/jquery-ui/jquery-ui.js" />
/// <reference path="../wwwroot/lib/jquery-validation/jquery.validate.js" />
/// <reference path="../wwwroot/lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive.js" />
/// <reference path="../wwwroot/lib/modernizr/grunt.js" />
/// <reference path="../wwwroot/lib/modernizr/modernizr.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/a-download.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/audio-audiodata-api.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/audio-webaudio-api.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/battery-api.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/battery-level.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/blob-constructor.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/canvas-todataurl-type.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/contenteditable.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/contentsecuritypolicy.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/contextmenu.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/cookies.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/cors.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-backgroundposition-shorthand.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-backgroundposition-xy.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-backgroundrepeat.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-backgroundsizecover.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-boxsizing.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-calc.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-cubicbezierrange.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-displayrunin.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-displaytable.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-filters.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-hyphens.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-lastchild.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-mask.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-mediaqueries.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-objectfit.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-overflow-scrolling.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-pointerevents.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-positionsticky.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-regions.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-remunit.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-resize.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-scrollbars.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-shapes.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-subpixelfont.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-supports.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-userselect.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-vhunit.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-vmaxunit.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-vminunit.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/css-vwunit.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/custom-protocol-handler.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/dart.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/dataview-api.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/dom-classlist.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/dom-createElement-attrs.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/dom-dataset.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/dom-microdata.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/elem-datalist.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/elem-details.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/elem-output.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/elem-progress-meter.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/elem-ruby.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/elem-time.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/elem-track.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/emoji.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/es5-strictmode.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/event-deviceorientation-motion.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/exif-orientation.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/file-api.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/file-filesystem.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/forms-fileinput.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/forms-formattribute.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/forms-inputnumber-l10n.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/forms-placeholder.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/forms-speechinput.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/forms-validation.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/fullscreen-api.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/gamepad.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/getusermedia.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/ie8compat.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/iframe-sandbox.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/iframe-seamless.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/iframe-srcdoc.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/img-apng.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/img-webp.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/json.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/lists-reversed.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/mathml.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/network-connection.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/network-eventsource.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/network-xhr2.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/notification.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/performance.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/pointerlock-api.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/quota-management-api.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/requestanimationframe.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/script-async.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/script-defer.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/style-scoped.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/svg-filters.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/unicode.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/url-data-uri.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/userdata.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/vibration.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/web-intents.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/webgl-extensions.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/websockets-binary.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/window-framed.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/workers-blobworkers.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/workers-dataworkers.js" />
/// <reference path="../wwwroot/lib/modernizr/feature-detects/workers-sharedworkers.js" />
/// <reference path="../wwwroot/lib/modernizr/test/caniuse_files/ga.js" />
/// <reference path="../wwwroot/lib/modernizr/test/caniuse_files/jquery.min.js" />
/// <reference path="../wwwroot/lib/modernizr/test/caniuse_files/modernizr-1.7.min.js" />
/// <reference path="../wwwroot/lib/modernizr/test/js/dumpdata.js" />
/// <reference path="../wwwroot/lib/modernizr/test/js/setup.js" />
/// <reference path="../wwwroot/lib/modernizr/test/js/unit-caniuse.js" />
/// <reference path="../wwwroot/lib/modernizr/test/js/unit.js" />
/// <reference path="../wwwroot/lib/modernizr/test/js/lib/detect-global.js" />
/// <reference path="../wwwroot/lib/modernizr/test/js/lib/jquery-1.7b2.js" />
/// <reference path="../wwwroot/lib/modernizr/test/js/lib/jsonselect.js" />
/// <reference path="../wwwroot/lib/modernizr/test/js/lib/polyfills.js" />
/// <reference path="../wwwroot/lib/modernizr/test/js/lib/uaparser.js" />
/// <reference path="../wwwroot/lib/modernizr/test/qunit/qunit.js" />
/// <reference path="../wwwroot/lib/modernizr/test/qunit/run-qunit.js" />
/// <reference path="../wwwroot/lib/respond/respond.src.js" />
/// <reference path="../wwwroot/lib/signalr/jquery.signalR.js" />
/// <reference path="../wwwroot/Scripts/AppInsights.js" />
/// <reference path="../wwwroot/Scripts/NewStoreArrivals.js" />
/// <reference path="../wwwroot/lib/bootstrap-switch/bootstrap-switch.js" />
/// <reference path="ui-initialization.js" />
