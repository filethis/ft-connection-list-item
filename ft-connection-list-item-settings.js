/*
Copyright 2017 FileThis, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Imports */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import './ft-connection-list-item-settings-behavior.js';

Polymer
({
    is: 'ft-connection-list-item-settings',

    behaviors: [
        FileThis.ConnectionListItemSettingsBehavior,
    ],

    ready: function()
    {
        this._storeSettings();
    },

    _storeSettings: function()
    {
        new Polymer.IronMeta({type: "setting", key: "ft-connection-list-item-allow-manual-fetch", value: this.ftConnectionListItemAllowManualFetch});
        new Polymer.IronMeta({type: "setting", key: "ft-connection-list-item-show-document-count", value: this.ftConnectionListItemShowDocumentCount});
    },

});
