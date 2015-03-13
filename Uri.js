/*
 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
 * GNU General Public License version 3; see www.hyperweb2.com/terms/
 */

'use strict';

hw2.define([
    "hw2!PATH_JS_LIB:browser/uri/include.js",
    "hw2!PATH_JS_LIB:common/Uri.js"
], function () {
    var $ = this;
    return $.Browser.Uri = $.Class({base: $.Uri, members: [
            {
                attributes: "static",
                name: "instance",
                val: null
            },
            {
                attributes: "static",
                name: "I",
                val: function (make_new, parseFragment) {
                    if (make_new || !this._s.instance) {
                        this._s.instance = new $.Browser.Uri(document.location.href, parseFragment);
                    }

                    return this._s.instance;
                }
            },
            {
                attributes: "public static",
                name: "updateParam",
                val: function (search, key, value, remove) {
                    key = encodeURI(key);
                    value = encodeURI(value);

                    var kvp = search.split('&');

                    var i = kvp.length;
                    var x;
                    while (i--)
                    {
                        x = kvp[i].split('=');

                        if (x[0] == key)
                        {
                            x[1] = value;
                            kvp[i] = x.join('=');
                            break;
                        }
                    }

                    if (i < 0) {
                        kvp[kvp.length] = [key, value].join('=');
                    }

                    return kvp.join('&');
                }
            }
        ]}
    );
});