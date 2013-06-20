var ContentCreateStruct = (function() {
    "use strict";

    var ContentCreateStruct = function(contentTypeId, locationCreateStruct, languageCode, user){

        var now = JSON.parse(JSON.stringify(new Date()));

        this.body = {};
        this.body.ContentCreate = {};

        this.body.ContentCreate.ContentType = {
                "_href" : contentTypeId
            };

        this.body.ContentCreate.mainLanguageCode = languageCode;
        this.body.ContentCreate.LocationCreate = locationCreateStruct.body.LocationCreate;

        this.body.ContentCreate.Section = null;
        this.body.ContentCreate.User = user;
        this.body.ContentCreate.alwaysAvailable = "true";
        this.body.ContentCreate.remoteId = null;
        this.body.ContentCreate.modificationDate = now;
        this.body.ContentCreate.fields = {};
        this.body.ContentCreate.fields.field = [];

        this.headers = {
            "Accept" : "application/vnd.ez.api.Content+json",
            "Content-Type" : "application/vnd.ez.api.ContentCreate+json"
        }

        return this;
    }

    return ContentCreateStruct;

}());;var ContentUpdateStruct = (function() {
    "use strict";

    var ContentUpdateStruct = function(languageCode, user){

        var now = JSON.parse(JSON.stringify(new Date()));

        this.body = {};
        this.body.VersionUpdate = {};

        this.body.VersionUpdate.user = user;
        this.body.VersionUpdate.modificationDate = now;
        this.body.VersionUpdate.initialLanguageCode = languageCode;
        this.body.VersionUpdate.fields = {
            "field": []
        };

        this.headers = {
            "Accept" : "application/vnd.ez.api.Version+json",
            "Content-Type" : "application/vnd.ez.api.VersionUpdate+json"
        }

        return this;

    }

    return ContentUpdateStruct;

}());;var ContentMetadataUpdateStruct = (function() {
    "use strict";

    var ContentMetadataUpdateStruct = function(languageCode, user){

        var now = JSON.parse(JSON.stringify(new Date()));

        this.body = {};
        this.body.ContentUpdate = {};

        this.body.ContentUpdate.MainLanguageCode = languageCode;
        this.body.ContentUpdate.Section = null;
        this.body.ContentUpdate.Owner = user;
        this.body.ContentUpdate.alwaysAvailable = "true";
        this.body.ContentUpdate.remoteId = null;
        this.body.ContentUpdate.modificationDate = now;
        this.body.ContentUpdate.publishDate = null;

        this.headers = {
            "Accept" : "application/vnd.ez.api.ContentInfo+json",
            "Content-Type" : "application/vnd.ez.api.ContentUpdate+json"
        }

        return this;

    }

    return ContentMetadataUpdateStruct;

}());;var LocationCreateStruct = (function() {
    "use strict";

    var LocationCreateStruct = function(parentLocationId){

        this.body = {};
        this.body.LocationCreate = {};

        this.body.LocationCreate.ParentLocation = {
            "_href": parentLocationId
        };

        this.body.LocationCreate.sortField = "PATH";
        this.body.LocationCreate.sortOrder = "ASC";

        this.headers = {
            "Accept" : "application/vnd.ez.api.Location+json",
            "Content-Type" : "application/vnd.ez.api.LocationCreate+json"
        }

        return this;

    }

    return LocationCreateStruct;

}());;var LocationUpdateStruct = (function() {
    "use strict";

    var LocationUpdateStruct = function(){

        this.body = {};
        this.body.LocationUpdate = {};

        this.body.LocationUpdate.sortField = "PATH";
        this.body.LocationUpdate.sortOrder = "ASC";

        this.headers = {
            "Accept" : "application/vnd.ez.api.Location+json",
            "Content-Type" : "application/vnd.ez.api.LocationUpdate+json"
        };

        return this;

    }

    return LocationUpdateStruct;

}());;var SessionCreateStruct = (function() {
    "use strict";

    var SessionCreateStruct = function(login, password){

        this.body = {};
        this.body.SessionInput = {};

        this.body.SessionInput.login = login;
        this.body.SessionInput.password = password;

        this.headers = {
            "Accept" : "application/vnd.ez.api.Session+json",
            "Content-Type" : "application/vnd.ez.api.SessionInput+json"
        };

        return this;

    }

    return SessionCreateStruct;

}());;var ViewCreateStruct = (function() {
    "use strict";

    var ViewCreateStruct = function(identifier){

        this.body = {};
        this.body.ViewInput = {};

        this.body.ViewInput.identifier = identifier;
        this.body.ViewInput.public = false;
        this.body.ViewInput.Query = {};

        this.body.ViewInput.Query.Criteria = {};
        this.body.ViewInput.Query.offset = 0;
        this.body.ViewInput.Query.FacetBuilders = {};
        this.body.ViewInput.Query.SortClauses = {};
        this.body.ViewInput.Query.spellcheck = false;

        this.headers = {
            "Accept" : "application/vnd.ez.api.View+json",
            "Content-Type" : "application/vnd.ez.api.ViewInput+json"
        };

        return this;

    }

    return ViewCreateStruct;

}());;var RelationCreateStruct = (function() {
    "use strict";

    var RelationCreateStruct = function(destination){

        this.body = {};
        this.body.RelationCreate = {};
        this.body.RelationCreate.Destination = {
            _href: destination
        };

        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.Relation+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.RelationCreate+json";

        return this;
    }

    return RelationCreateStruct;

}());;var ObjectStateGroupCreateStruct = (function() {
    "use strict";

    /**
     *  Creates a create structure for ObjectStateGroup
     *
     * @constructor
     * @param identifier {string}
     * @param languageCode {string}
     * @param names {Array} multiLanguageValuesType in JSON format
     */
    var ObjectStateGroupCreateStruct = function(identifier, languageCode, names){

        this.body = {};
        this.body.ObjectStateGroupCreate = {};

        this.body.ObjectStateGroupCreate.identifier = identifier;
        this.body.ObjectStateGroupCreate.defaultLanguageCode = languageCode;

        this.body.ObjectStateGroupCreate.names = {};
        this.body.ObjectStateGroupCreate.names.value = names;

        this.body.ObjectStateGroupCreate.descriptions = {};
        this.body.ObjectStateGroupCreate.descriptions.value = [];


        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.ObjectStateGroup+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.ObjectStateGroupCreate+json";

        return this;

    }

    return ObjectStateGroupCreateStruct;

}());;var ObjectStateGroupUpdateStruct = (function() {
    "use strict";

    /**
     *  Creates an update structure for ObjectStateGroup
     *
     * @constructor
     * @param identifier {string}
     * @param languageCode {string}
     * @param names {Array} multiLanguageValuesType in JSON format
     * @param descriptions {Array} multiLanguageValuesType in JSON format
     */
    var ObjectStateGroupUpdateStruct = function(){

        this.body = {};
        this.body.ObjectStateGroupUpdate = {};

        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.ObjectStateGroup+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.ObjectStateGroupUpdate+json";

        return this;

    }

    return ObjectStateGroupUpdateStruct;

}());;var ObjectStateUpdateStruct = (function() {
    "use strict";

    /**
     *  Creates an update structure for ObjectState
     *
     * @constructor
     */
    var ObjectStateUpdateStruct = function(){

        this.body = {};
        this.body.ObjectStateUpdate = {};

        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.ObjectState+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.ObjectStateUpdate+json";

        return this;

    }

    return ObjectStateUpdateStruct;

}());;var ObjectStateCreateStruct = (function() {
    "use strict";

    /**
     *  Creates a create structure for ObjectState
     *
     * @constructor
     * @param identifier {string}
     * @param languageCode {string}
     * @param priority {int}
     * @param names {Array} multiLanguageValuesType in JSON format
     * @param descriptions {Array} multiLanguageValuesType in JSON format
     */
    var ObjectStateCreateStruct = function(identifier, languageCode, priority, names, descriptions){

        this.body = {};
        this.body.ObjectStateCreate = {};

        this.body.ObjectStateCreate.identifier = identifier;
        this.body.ObjectStateCreate.defaultLanguageCode = languageCode;
        this.body.ObjectStateCreate.priority = priority;        
        this.body.ObjectStateCreate.names = {};
        this.body.ObjectStateCreate.names.value = names;
        this.body.ObjectStateCreate.descriptions = {};
        this.body.ObjectStateCreate.descriptions.value = descriptions;

        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.ObjectState+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.ObjectStateCreate+json";

        return this;

    }

    return ObjectStateCreateStruct;

}());;var UrlAliasCreateStruct = (function() {
    "use strict";

    var UrlAliasCreateStruct = function(languageCode, resource, path){

        this.body = {};
        this.body.UrlAliasCreate = {};

        this.body.UrlAliasCreate._type = "RESOURCE";

        this.body.UrlAliasCreate.resource = resource;
        this.body.UrlAliasCreate.path = path;

        this.body.UrlAliasCreate.alwaysAvailable = "false";
        this.body.UrlAliasCreate.forward = "false";
        this.body.UrlAliasCreate.languageCode = languageCode;

        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.UrlAlias+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.UrlAliasCreate+json";

        return this;
    }

    return UrlAliasCreateStruct;

}());;var UrlWildcardCreateStruct = (function() {
    "use strict";

    var UrlWildcardCreateStruct = function(sourceUrl, destinationUrl, forward){

        this.body = {};
        this.body.UrlWildcardCreate = {};

        this.body.UrlWildcardCreate.sourceUrl = sourceUrl;
        this.body.UrlWildcardCreate.destinationUrl = destinationUrl;
        this.body.UrlWildcardCreate.forward = forward;

        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.UrlWildcard+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.UrlWildcardCreate+json";

        return this;
    }

    return UrlWildcardCreateStruct;

}());;var ContentTypeGroupInputStruct = (function() {
    "use strict";

    var ContentTypeGroupInputStruct = function(identifier){

        this.body = {};
        this.body.ContentTypeGroupInput = {};

        this.body.ContentTypeGroupInput.identifier = identifier;

        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.ContentTypeGroup+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.ContentTypeGroupInput+json";

        return this;
    }

    return ContentTypeGroupInputStruct;

}());;var ContentTypeCreateStruct = (function() {
    "use strict";

    var ContentTypeCreateStruct = function(identifier, languageCode, names){

        var now = JSON.parse(JSON.stringify(new Date()));

        this.body = {};
        this.body.ContentTypeCreate = {};

        this.body.ContentTypeCreate.identifier = identifier;

        this.body.ContentTypeCreate.names = {};
        this.body.ContentTypeCreate.names.value = names;

        this.body.ContentTypeCreate.nameSchema = "&lt;title&gt;";
        this.body.ContentTypeCreate.urlAliasSchema = "&lt;title&gt;";

        this.body.ContentTypeCreate.remoteId = null;
        this.body.ContentTypeCreate.mainLanguageCode = languageCode;
        this.body.ContentTypeCreate.isContainer = "true";
        this.body.ContentTypeCreate.modificationDate = now;

        this.body.ContentTypeCreate.defalutAlwaysAvailable = "true";
        this.body.ContentTypeCreate.defalutSortField = "PATH";
        this.body.ContentTypeCreate.defalutSortOrder = "ASC";

        this.body.ContentTypeCreate.FieldDefinitions = {};
        this.body.ContentTypeCreate.FieldDefinitions.FieldDefinition = [];

        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.ContentType+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.ContentTypeCreate+json";

        return this;
    }

    return ContentTypeCreateStruct;

}());;var ContentTypeUpdateStruct = (function() {
    "use strict";

    var ContentTypeUpdateStruct = function(){

        var now = JSON.parse(JSON.stringify(new Date()));

        this.body = {};
        this.body.ContentTypeUpdate = {};

        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.ContentType+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.ContentTypeUpdate+json";

        return this;
    }

    return ContentTypeUpdateStruct;

}());;var FieldDefinitionCreateStruct = (function() {
    "use strict";

    var FieldDefinitionCreateStruct = function(identifier, fieldType, fieldGroup, names){

        this.body = {};
        this.body.FieldDefinitionCreate = {};

        this.body.FieldDefinitionCreate.identifier = identifier;
        this.body.FieldDefinitionCreate.fieldType = fieldType;
        this.body.FieldDefinitionCreate.fieldGroup = fieldGroup;
        this.body.FieldDefinitionCreate.position = 1;

        this.body.FieldDefinitionCreate.isTranslatable = "true";
        this.body.FieldDefinitionCreate.isRequired = "false";
        this.body.FieldDefinitionCreate.isInfoCollector = "false";
        this.body.FieldDefinitionCreate.isSearchable = "false";

        this.body.FieldDefinitionCreate.defaultValue = "false";
        //TODO: find out which can be commented out

        this.body.FieldDefinitionCreate.names = {};
        this.body.FieldDefinitionCreate.names.value = names;

        this.body.FieldDefinitionCreate.descriptions = {}
        this.body.FieldDefinitionCreate.descriptions.value = [];

        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.FieldDefinition+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.FieldDefinitionCreate+json";

        return this;
    }

    return FieldDefinitionCreateStruct;

}());;var FieldDefinitionUpdateStruct = (function() {
    "use strict";

    var FieldDefinitionUpdateStruct = function(identifier, fieldType, fieldGroup, names){

        this.body = {};
        this.body.FieldDefinitionUpdate = {};

        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.FieldDefinition+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.FieldDefinitionUpdate+json";

        return this;
    }

    return FieldDefinitionUpdateStruct;

}());;var UserGroupCreateStruct = (function() {
    "use strict";

    /**
     *  Creates a create structure for UserGroup
     *
     * @constructor
     * @param identifier {string}
     * @param languageCode {string}
     * @param names {Array} multiLanguageValuesType in JSON format
     */
    var UserGroupCreateStruct = function(languageCode, fields){

        this.body = {};
        this.body.UserGroupCreate = {};

        this.body.UserGroupCreate.mainLanguageCode = languageCode;

        this.body.UserGroupCreate.fields = {};
        this.body.UserGroupCreate.fields.field = fields;

        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.UserGroup+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.UserGroupCreate+json";

        return this;

    }

    return UserGroupCreateStruct;

}());;var UserGroupUpdateStruct = (function() {
    "use strict";

    /**
     *  Creates an update structure for UserGroup
     *
     * @constructor
     * @param identifier {string}
     * @param languageCode {string}
     * @param names {Array} multiLanguageValuesType in JSON format
     */
    var UserGroupUpdateStruct = function(languageCode, fields){

        this.body = {};
        this.body.UserGroupUpdate = {};

        this.body.UserGroupUpdate.fields = {};
        this.body.UserGroupUpdate.fields.field = [];

        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.UserGroup+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.UserGroupUpdate+json";

        return this;

    }

    return UserGroupUpdateStruct;

}());;var UserCreateStruct = (function() {
    "use strict";

    /**
     *  Returns a create structure for User
     *
     * @constructor
     * @param languageCode {string}
     * @param login {string}
     * @param email {string}
     * @param password {string}
     * @param fields {Array}
     */
    var UserCreateStruct = function(languageCode, login, email, password, fields){

        this.body = {};
        this.body.UserCreate = {};

        this.body.UserCreate.mainLanguageCode = languageCode;
        this.body.UserCreate.login = login;
        this.body.UserCreate.email = email;
        this.body.UserCreate.password = password;

        this.body.UserCreate.fields = {};
        this.body.UserCreate.fields.field = fields;

        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.User+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.UserCreate+json";

        return this;

    }

    return UserCreateStruct;

}());;var UserUpdateStruct = (function() {
    "use strict";

    /**
     *  Returns an update structure for User
     *
     * @constructor
     */
    var UserUpdateStruct = function(){

        this.body = {};
        this.body.UserUpdate = {};

        this.body.UserUpdate.fields = {};
        this.body.UserUpdate.fields.field = [];

        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.User+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.UserUpdate+json";

        return this;

    }

    return UserUpdateStruct;

}());;var RoleInputStruct = (function() {
    "use strict";

    var RoleInputStruct = function(identifier){

        this.body = {};
        this.body.RoleInput = {};

        this.body.RoleInput.identifier = identifier;

        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.Role+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.RoleInput+json";

        return this;
    }

    return RoleInputStruct;

}());;var RoleAssignInputStruct = (function() {
    "use strict";

    var RoleAssignInputStruct = function(role, limitation){

        this.body = {};
        this.body.RoleAssignInput = {};

        this.body.RoleAssignInput.Role = role;

        this.body.RoleAssignInput.limitation = limitation;

        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.RoleAssignmentList+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.RoleAssignInput+json";

        return this;
    }

    return RoleAssignInputStruct;

}());;var PolicyCreateStruct = (function() {
    "use strict";

    var PolicyCreateStruct = function(module, theFunction, limitations){

        this.body = {};
        this.body.PolicyCreate = {};

        this.body.PolicyCreate.module = module;
        this.body.PolicyCreate.function = theFunction;

        this.body.PolicyCreate.limitations = {}
        this.body.PolicyCreate.limitations.limitation = limitations;

        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.Policy+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.PolicyCreate+json";

        return this;
    }

    return PolicyCreateStruct;

}());;var PolicyUpdateStruct = (function() {
    "use strict";

    var PolicyUpdateStruct = function(limitations){

        this.body = {};
        this.body.PolicyUpdate = {};

        this.body.PolicyUpdate.limitations = {}
        this.body.PolicyUpdate.limitations.limitation = limitations;

        this.headers = {};
        this.headers["Accept"] = "application/vnd.ez.api.Policy+json";
        this.headers["Content-Type"] = "application/vnd.ez.api.PolicyUpdate+json";

        return this;
    }

    return PolicyUpdateStruct;

}());;var Request = (function() {
    "use strict";

    var Request = function(valuesContainer){

        for (var property in valuesContainer) {
            if (valuesContainer.hasOwnProperty(property)) {
                this[property] = valuesContainer[property];
            }
        }

        return this;
    }


    return Request;

}());;var Response = (function() {
    "use strict";

    var Response = function(valuesContainer){

        for (var property in valuesContainer) {
            if (valuesContainer.hasOwnProperty(property)) {
                this[property] = valuesContainer[property];
            }
        }

        return this;
    }


    return Response;

}());;var Error = (function() {
    "use strict";

    var Error = function(valuesContainer){

        for (var property in valuesContainer) {
            if (valuesContainer.hasOwnProperty(property)) {
                this[property] = valuesContainer[property];
            }
        }

        return this;
    }


    return Error;

}());;var DiscoveryService = (function() {
    "use strict";

    /**
     * Creates an instance of discovery service
     *
     * @constructor
     * @param connectionManager {ConnectionManager}
     */
    var DiscoveryService = function(rootPath, connectionManager){

        this.connectionManager = connectionManager;
        this.rootPath = rootPath;

        this.cacheObject = {};

        /**
         * discover Root object
         *
         * @method discoverRoot
         * @param rootPath {href}
         * @param callback {Function}
         */
        this.discoverRoot = function(rootPath, callback) {

            if (!this.cacheObject.Root) {
                var that = this;
                this.connectionManager.request(
                    "GET",
                    rootPath,
                    {},
                    { "Accept" : "application/vnd.ez.api.Root+json" },
                    function(error, rootJSON) {
                        if (!error) {

                            that.copyToCache(JSON.parse(rootJSON.body));
                            callback(false, true);

                        } else {
                            callback(
                                new Error({
                                    errorText : "Discover service failed to retrieve root object."
                                }),
                                false
                            )
                        }
                    }
                );
            }
        };

        /**
         * Copy all the properties of a argument object into cache object
         *
         * @method addToCache
         * @param object {Object}
         */
        this.copyToCache = function(object) {
            for (var property in object) {
                if (object.hasOwnProperty(property)) {
                    this.cacheObject[property] = object[property];
                }
            }
        }

        /**
         * Try to get object from cacheObject by given 'name'
         *
         * @method getObjectFromCache
         * @param name {String}
         * @param callback {Function}
         */
        this.getObjectFromCache = function(name, callback) {
            var object = null;
            var that = this;
            // Discovering root, if not yet discovered
            // on discovery running the request for same 'name' again
            if (!this.cacheObject.Root) {
                this.discoverRoot(this.rootPath, function() {
                    that.getObjectFromCache(name, callback);
                });
                return;
            }

            // Checking most obvious places for now
            // "Root" object (retrieved during root discovery request) and
            // root of a cache object in case we have cached value from some other request
            if (this.cacheObject.Root.hasOwnProperty(name)) {
                object = this.cacheObject.Root[name];
            } else if (this.cacheObject.hasOwnProperty(name)) {
                object = this.cacheObject[name];
            }

            if (object) {
                callback(
                    false,
                    object
                );
            } else {
                callback(
                    new Error({
                        errorText : "Discover service failed to find cached object with name '" + name + "'"
                    }),
                    false
                )
            }
        }
    }

    /**
     * Get url for given 'name'
     *
     * @method getUrl
     * @param name {String}
     * @param callback {Function}
     */
    DiscoveryService.prototype.getUrl = function(name, callback) {
        this.getObjectFromCache(
            name,
            function(error, cachedObject){
                if (!error) {
                    callback(
                        false,
                        cachedObject["_href"]
                    );
                } else {
                    callback(
                        error,
                        new Response({
                            status : "error",
                            body : ""
                        })
                    );
                }
            }
        );
    };

    /**
     * Get media type for given 'name'
     *
     * @method getMediaType
     * @param name {String}
     * @param callback {Function}
     */
    DiscoveryService.prototype.getMediaType = function(name, callback) {
        this.getObjectFromCache(
            name,
            function(error, cachedObject){
                if (!error) {
                    if (cachedObject) {
                        callback(
                            false,
                            cachedObject["_media-type"]
                        );
                    } else {
                        callback(
                            error,
                            new Response({
                                status : "error",
                                body : ""
                            })
                        );
                    }
                } else {
                    callback(error, false)
                }
            }
        );
    };

    /**
     * Get the whole information object for given 'name'
     *
     * @method getInfoObject
     * @param name {String}
     * @param callback {Function}
     */
    DiscoveryService.prototype.getInfoObject = function(name, callback) {
        this.getObjectFromCache(
            name,
            function(error, cachedObject){
                if (!error) {
                    if (cachedObject) {
                        callback(
                            false,
                            cachedObject
                        );
                    } else {
                        callback(
                            error,
                            new Response({
                                status : "error",
                                body : ""
                            })
                        );
                    }
                } else {
                    callback(error, false)
                }
            }
        );
    };

    return DiscoveryService;

}());;var ContentService = (function() {
    "use strict";

    /**
     * Creates an instance of content service object
     *
     * @constructor
     * @param connectionManager {object} connection manager that will be used to send requests to REST service
     */
    var ContentService = function(connectionManager, discoveryService) {

        this.connectionManager_ = connectionManager;
        this.discoveryService_ = discoveryService;

    };

    /**
     * list Root resources
     *
     * @method root
     * @param root {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadRoot = function loadRoot(root, callback) {
        this.connectionManager_.request(
            "GET",
            root,
            {},
            { "Accept" : "application/vnd.ez.api.Root+json" },
            callback
        );
    };

// ******************************
// Structures
// ******************************

    /**
     * Returns update structure for Content
     *
     * @method newContentUpdateStruct
     * @param language {string}
     * @param user {string}
     */
    ContentService.prototype.newContentUpdateStruct = function newContentUpdateStruct(language, user) {

        return new ContentUpdateStruct(language, user);

    };

    /**
     * Returns update structure for Content metadata
     *
     * @method newContentMetadataUpdateStruct
     * @param language {string}
     * @param user {string}
     */
    ContentService.prototype.newContentMetadataUpdateStruct = function newContentMetadataUpdateStruct(language, user) {

        return new ContentMetadataUpdateStruct(language, user);

    };

    /**
     * Returns create structure for Content
     *
     * @method newContentCreateStruct
     * @param contentTypeId {href}
     * @param locationCreateStruct {object}
     * @param language {string}
     * @param user {string}
     */
    ContentService.prototype.newContentCreateStruct = function newContentCreateStruct(contentTypeId, locationCreateStruct, language, user) {

        return new ContentCreateStruct(contentTypeId, locationCreateStruct, language, user);

    };

    /**
     * Returns create structure for Location
     *
     * @method newLocationCreateStruct
     * @param parentLocationId {href}

     */
    ContentService.prototype.newLocationCreateStruct = function newLocationCreateStruct(parentLocationId) {

        return new LocationCreateStruct(parentLocationId);

    };

    /**
     * Returns update structure for Location
     *
     * @method newLocationUpdateStruct
     * @param parentLocationId {href}

     */
    ContentService.prototype.newLocationUpdateStruct = function newLocationUpdateStruct(parentLocationId) {

        return new LocationUpdateStruct();

    };

    /**
     * Returns create structure for View
     *
     * @method newViewCreateStruct
     * @param identifier {string}

     */
    ContentService.prototype.newViewCreateStruct = function newViewCreateStruct(identifier) {

        return new ViewCreateStruct(identifier);

    };

    /**
     * Returns create structure for Relation
     *
     * @method newRelationCreateStruct
     * @param destination {href}

     */
    ContentService.prototype.newRelationCreateStruct = function newRelationCreateStruct(destination) {

        return new RelationCreateStruct(destination);

    };

    /**
     * Returns create structure for ObjectStateGroup
     *
     * @method newObjectStateGroupCreateStruct
     * @param identifier {string}
     * @param languageCode {string}
     * @param names {Array} multiLanguageValuesType in JSON format
     */
    ContentService.prototype.newObjectStateGroupCreateStruct = function newObjectStateGroupCreateStruct(identifier, languageCode, names) {

        return new ObjectStateGroupCreateStruct(identifier, languageCode, names);

    };

    /**
     * Returns update structure for ObjectStateGroup
     *
     * @method newObjectStateGroupUpdateStruct
     */
    ContentService.prototype.newObjectStateGroupUpdateStruct = function newObjectStateGroupUpdateStruct() {

        return new ObjectStateGroupUpdateStruct();

    };


    /**
     * Returns create structure for ObjectState
     *
     * @method newObjectStateCreateStruct
     * @param identifier {string}
     * @param languageCode {string}
     * @param priority {int}
     * @param names {Array} multiLanguageValuesType in JSON format
     * @param descriptions {Array} multiLanguageValuesType in JSON format
     */
    ContentService.prototype.newObjectStateCreateStruct = function newObjectStateCreateStruct(identifier, languageCode, priority, names, descriptions) {

        return new ObjectStateCreateStruct(identifier, languageCode, priority, names, descriptions);

    };

    /**
     * Returns update structure for ObjectState
     *
     * @method newObjectStateUpdateStruct
     */
    ContentService.prototype.newObjectStateUpdateStruct = function newObjectStateUpdateStruct() {

        return new ObjectStateUpdateStruct();

    };



    /**
     * Returns create structure for UrlAlias
     *
     * @method newUrlAliasCreateStruct
     * @param languageCode {string}
     * @param resource {href}
     * @param path {string}
     */
    ContentService.prototype.newUrlAliasCreateStruct = function newUrlAliasCreateStruct(languageCode, resource, path) {

        return new UrlAliasCreateStruct(languageCode, resource, path);

    };

    /**
     * Returns create structure for UrlWildcard
     *
     * @method newUrlWildcardCreateStruct
     * @param sourceUrl {href}
     * @param destinationUrl {href}
     * @param forward {boolean}
     */
    ContentService.prototype.newUrlWildcardCreateStruct = function newUrlWildcardCreateStruct(sourceUrl, destinationUrl, forward) {

        return new UrlWildcardCreateStruct(sourceUrl, destinationUrl, forward);

    };

// ******************************
// Sections management
// ******************************

    /**
     * List all sections
     *
     * @method loadSections
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadSections = function loadSections(callback) {

        var that = this;

        this.discoveryService_.getInfoObject(
            "sections",
            function(error, sections) {
                if (!error) {

                    that.connectionManager_.request(
                        "GET",
                        sections["_href"],
                        {},
                        { "Accept" : sections["_media-type"] },
                        callback
                    );

                } else {
                    callback(error, false)
                }
            }
        );

    };

    /**
     * Load single section
     *
     * @method loadSection
     * @param sectionId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadSection = function loadSection(sectionId, callback) {
        this.connectionManager_.request(
            "GET",
            sectionId,
            {},
            { "Accept" : "application/vnd.ez.api.Section+json" },
            callback
        );
    };

    /**
     * Create new section
     *
     * @method createSection
     * @param sections {href}
     * @param sectionInput {JSON} json string describing section to be created
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.createSection = function createSection(sections, sectionInput, callback) {
        this.connectionManager_.request(
            "POST",
            sections,
            sectionInput,
            {
                "Accept" : "application/vnd.ez.api.Section+json",
                "Content-Type" : "application/vnd.ez.api.SectionInput+json"
            },
            callback
        );
    };

    /**
     * Update section
     *
     * @method updateSection
     * @param sectionId {href}
     * @param sectionInput {JSON} json string describing section to be created
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.updateSection = function updateSection(sectionId, sectionInput, callback) {
        this.connectionManager_.request(
            "PATCH",
            sectionId,
            sectionInput,
            {
                "Accept" : "application/vnd.ez.api.Section+json",
                "Content-Type" : "application/vnd.ez.api.SectionInput+json"
            },
            callback
        );
    };

    /**
     * Delete section
     *
     * @method deleteSection
     * @param sectionId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.deleteSection = function deleteSection(sectionId, callback) {
        this.connectionManager_.delete(
            sectionId,
            callback
        );
    };

// ******************************
// Content Type groups management
// ******************************


// ******************************
// Content management
// ******************************

    /**
     * Creates a new content draft assigned to the authenticated user.
     *
     * @method createContent
     * @param contentObjects {href} href to contentObjects resource
     * @param contentCreate {JSON} json string describing content to be created
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.createContent = function createContent(contentObjects, contentCreateStruct, callback) {
        this.connectionManager_.request(
            "POST",
            contentObjects,
            JSON.stringify(contentCreateStruct.body),
            contentCreateStruct.headers,
            callback
        );
    };

    /**
     * Update content metadata.
     *
     * @method updateContentMetadata
     * @param content {href} href to content resource
     * @param contentMetadataUpdate {JSON} json string describing update of the content metadata
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.updateContentMetadata = function updateContentMetadata(content, contentMetadataUpdate, callback) {
        this.connectionManager_.request(
            "PATCH",
            content,
            JSON.stringify(contentMetadataUpdate.body),
            contentMetadataUpdate.headers,
            callback
        );
    };

    /**
     * Load single content by remoteId
     *
     * @method loadContentByRemoteId
     * @param remoteId {string}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadContentByRemoteId = function loadContentByRemoteId(remoteId, callback) {

        var that = this;

        this.discoveryService_.getInfoObject(
            "content",
            function(error, contentObjects){
                if (!error) {
                    that.connectionManager_.request(
                        "GET",
                        contentObjects["_href"] + '?remoteId=' + remoteId,
                        { "remoteId" : remoteId },
                        { "Accept" : contentObjects["_media-type"] },
                        callback
                    );
                } else {
                    callback(error, false)
                }
            }
        );


    };

    /**
     * Load single content info
     *
     * @method loadContent
     * @param contentId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadContentInfo = function loadContentInfo(contentId, callback) {
        this.connectionManager_.request(
            "GET",
            contentId,
            {},
            { "Accept" : "application/vnd.ez.api.ContentInfo+json" },
            callback
        );
    };

    /**
     * Load single content info with embedded current version
     *
     * @method loadContentInfoAndCurrentVersion
     * @param contentId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadContentInfoAndCurrentVersion = function loadContentInfoAndCurrentVersion(contentId, callback) {
        this.connectionManager_.request(
            "GET",
            contentId,
            {},
            { "Accept" : "application/vnd.ez.api.Content+json" },
            callback
        );
    };

    /**
     * Delete content
     *
     * @method deleteContent
     * @param contentId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.deleteContent = function deleteContent(contentId, callback) {
        this.connectionManager_.delete(
            contentId,
            callback
        );
    };

    /**
     * Copy content
     *
     * @method copyContent
     * @param contentId {href}
     * @param destinationId {href} A location resource to which the content object should be copied
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.copyContent = function copyContent(contentId, destinationId, callback) {
        this.connectionManager_.request(
            "COPY",
            contentId,
            "",
            { "Destination" : destinationId },
            callback
        );
    };

// ******************************
// Versions management
// ******************************

    /**
     * Load current content version
     *
     * @method loadCurrentVersion
     * @param contentId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadCurrentVersion = function loadCurrentVersion(contentId, callback) {
        var that = this;

        this.loadContentInfo(
            contentId,
            function(error, contentResponse){
                if (!error) {

                    var currentVersion = JSON.parse(contentResponse.body).Content.CurrentVersion;

                    that.connectionManager_.request(
                        "GET",
                        currentVersion["_href"],
                        {},
                        { "Accept" : currentVersion["_media-type"] },
                        callback
                    );

                } else {
                    callback(error, false)
                }
            }
        );
    };


    /**
     * Loads a specific version of a content object. This method returns fields and relations
     *
     * @method loadContent
     * @param versionedContentId {href}
     * @param parameters {JSON} JSON string containing parameters (fields, languages, responseGroups)
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadContent = function loadContent(versionedContentId, parameters, callback) {
        this.connectionManager_.request(
            "GET",
            versionedContentId,
            parameters,
            { "Accept" : "application/vnd.ez.api.Version+json" },
            callback
        );
    };


    /**
     *  Loads all versions for the given content
     *
     * @method loadContentCurrentVersion
     * @param contentId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadVersions = function loadVersions(contentId, callback) {

        var that = this;

        this.loadContentInfo(
            contentId,
            function(error, contentResponse){
                if (!error) {

                    var contentVersions = JSON.parse(contentResponse.body).Content.Versions;

                    that.connectionManager_.request(
                        "GET",
                        contentVersions["_href"],
                        {},
                        { "Accept" : contentVersions["_media-type"] },
                        callback
                    );

                } else {
                    callback(error, false)
                }
            }
        );
    };


    /**
     * Updates the fields of a draft
     *
     * @method updateContent
     * @param versionedContentId {href}
     * @param contentUpdateStruct {JSON} JSON string containing update structure (fields, languages, responseGroups)
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.updateContent = function updateContent(versionedContentId, contentUpdateStruct, callback) {
        this.connectionManager_.request(
            "PATCH",
            versionedContentId,
            JSON.stringify(contentUpdateStruct.body),
            contentUpdateStruct.headers,
            callback
        );
    };


    /**
     * Creates a draft from a published or archived version.
     *
     * @method createContentDraft
     * @param contentId {href}
     * @param versionId {int}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.createContentDraft = function createContentDraft(contentId, versionId, callback) {

        var that = this;


            this.loadContentInfo(
                contentId,
                function(error, contentResponse){
                    if (!error) {

                        if (versionId !== null) {
                            // Version id is declared

                            console.log(versionId);

                            var contentVersions = JSON.parse(contentResponse.body).Content.Versions;

                            that.connectionManager_.request(
                                "COPY",
                                contentVersions["_href"] + "/" + versionId,
                                "",
                                { "Accept" : "application/vnd.ez.api.Version+json" },
                                callback
                            );

                        } else {
                            // Version id is NOT declared

                            var currentVersion = JSON.parse(contentResponse.body).Content.CurrentVersion;

                            that.connectionManager_.request(
                                "COPY",
                                currentVersion["_href"],
                                "",
                                { "Accept" : "application/vnd.ez.api.Version+json" },
                                callback
                            );

                        }
                    } else {
                        callback(error, false)
                    }
                }
            );
    };


    /**
     * Deletes specific version of the content.
     *
     * @method deleteVersion
     * @param versionedContentId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.deleteVersion = function deleteVersion(versionedContentId, callback) {
        this.connectionManager_.delete(
            versionedContentId,
            callback
        );
    };


    /**
     * Publishes specific version of the content.
     *
     * @method publishVersion
     * @param versionedContentId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.publishVersion = function publishVersion(versionedContentId, callback) {
        this.connectionManager_.request(
            "PUBLISH",
            versionedContentId,
            "",
            {},
            callback
        );
    };


// ******************************
// Locations management
// ******************************

    /**
     * Creates a new location for the given content object
     *
     * @method createLocation
     * @param objectLocations {href}
     * @param locationCreateStruct {object}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.createLocation = function createLocation(objectLocations, locationCreateStruct, callback) {
        this.connectionManager_.request(
            "POST",
            objectLocations,
            JSON.stringify(locationCreateStruct.body),
            locationCreateStruct.headers,
            callback
        );
    };

    /**
     *  Loads all locations for the given content object
     *
     * @method loadLocations
     * @param objectLocations {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadLocations = function loadLocations(objectLocations, callback) {
        this.connectionManager_.request(
            "GET",
            objectLocations,
            {},
            { "Accept" : "application/vnd.ez.api.LocationList+json" },
            callback
        );
    };

    /**
     *  Loads a location object according to given locationId
     *
     * @method loadLocation
     * @param locationId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadLocation = function loadLocation(locationId, callback) {
        this.connectionManager_.request(
            "GET",
            locationId,
            {},
            { "Accept" : "application/vnd.ez.api.Location+json" },
            callback
        );
    };

    /**
     *  Loads a location object according to given remoteId
     *
     * @method loadLocationByRemoteId
     * @param locations {href}
     * @param remoteId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadLocationByRemoteId = function loadLocationByRemoteId(locations, remoteId, callback) {
        this.connectionManager_.request(
            "GET",
            locations + '?remoteId=' + remoteId,
            "",
            { Accept : "application/vnd.ez.api.Location+json" },
            callback
        );
    };

    /**
     * Updates location for the given content object
     *
     * @method updateLocation
     * @param locationId {href}
     * @param locationUpdateStruct {object}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.updateLocation = function updateLocation(locationId, locationUpdateStruct, callback) {
        this.connectionManager_.request(
            "PATCH",
            locationId,
            JSON.stringify(locationUpdateStruct.body),
            locationUpdateStruct.headers,
            callback
        );
    };

    /**
     *  Loads a locations children
     *
     * @method loadLocationChildren
     * @param locationId {href}
     * @param offset {int}
     * @param limit {int}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadLocationChildren = function loadLocationChildren(locationId, offset, limit, callback) {

        // default values for all the parameters
        offset = (typeof offset === "undefined") ? 0 : offset;
        limit = (typeof limit === "undefined") ? -1 : limit;

        var that = this;

        this.loadLocation(
            locationId,
            function(error, locationResponse){
                if (!error) {

                    var location = JSON.parse(locationResponse.body).Location;

                    that.connectionManager_.request(
                        "GET",
                        location.Children["_href"] + '?offset=' + offset + '&limit=' + limit,
                        {},
                        { "Accept" : location.Children["_media-type"] },
                        callback
                    );
                } else {
                    callback(error, false)
                }
            }
        );
    };

    /**
     *  Copies the subtree starting from "subtree" as a new subtree of "targetLocation"
     *
     * @method copySubtree
     * @param subtree {href}
     * @param targetLocation {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.copySubtree = function copySubtree(subtree, targetLocation, callback) {
        this.connectionManager_.request(
            "COPY",
            subtree,
            "",
            { "Destination" : targetLocation },
            callback
        );
    };

    /**
     *  Moves the subtree to a new subtree of "targetLocation"
     *  The targetLocation can also be /content/trash where the location is put into the trash.
     *
     * @method moveSubtree
     * @param subtree {href}
     * @param targetLocation {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.moveSubtree = function moveSubtree(subtree, targetLocation, callback) {
        this.connectionManager_.request(
            "MOVE",
            subtree,
            "",
            { "Destination" : targetLocation },
            callback
        );
    };

    /**
     *  Swaps the content of the "subtree" location to a "targetLocation"
     *
     * @method swapLocation
     * @param subtree {href}
     * @param targetLocation {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.swapLocation = function swapLocation(subtree, targetLocation, callback) {
        this.connectionManager_.request(
            "SWAP",
            subtree,
            "",
            { "Destination" : targetLocation },
            callback
        );
    };

    /**
     *  Deletes the location and all it's subtree
     *  Every content object is deleted which does not have any other location.
     *  Otherwise the deleted location is removed from the content object.
     *  The children are recursively deleted.
     *
     * @method deleteLocation
     * @param locationId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.deleteLocation = function deleteLocation(locationId, callback) {
        this.connectionManager_.delete(
            locationId,
            callback
        );
    };

// ******************************
// Views management
// ******************************

    /**
     * Creates a new view
     *
     * @method createView
     * @param viewCreateStruct {object}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.createView = function createView(viewCreateStruct, callback) {

        var that = this;

        this.discoveryService_.getInfoObject(
            "views",
            function(error, views) {
                if (!error) {

                    that.connectionManager_.request(
                        "POST",
                        views["_href"],
                        JSON.stringify(viewCreateStruct.body),
                        viewCreateStruct.headers,
                        callback
                    );

                } else {
                    callback(error, false)
                }
            }
        );
    };


    /**
     * Returns a list of view uris. The list includes public view and private view of the authenticated user.
     *
     * @method loadViews
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadViews = function loadViews(callback) {

        var that = this;

        this.discoveryService_.getInfoObject(
            "views",
            function(error, views) {
                if (!error) {

                    that.connectionManager_.request(
                        "GET",
                        views["_href"],
                        "",
                        {
                            "Accept" : views["_media-type"]
                        },
                        callback
                    );

                } else {
                    callback(error, false)
                }
            }
        );
    };

// ******************************
// Relations management
// ******************************

    /**
     *  Loads the relations of the given version
     *
     * @method loadRelations
     * @param versionedContentId {href}
     * @param offset {int}
     * @param limit {int}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadRelations = function loadRelations(versionedContentId, offset, limit, callback) {

        var that = this;

        this.loadContent(
            versionedContentId,
            {},
            function(error, versionResponse){
                if (!error) {

                    var version = JSON.parse(versionResponse.body).Version;

                    that.connectionManager_.request(
                        "GET",
                        version.Relations["_href"] + '?offset=' + offset + '&limit=' + limit,
                        {},
                        { "Accept" : version.Relations["_media-type"] },
                        callback
                    );
                } else {
                    callback(error, false)
                }
            }
        );
    };

    /**
     *  Loads the relations of the current version
     *
     * @method loadRelations
     * @param contentId {href}
     * @param offset {int}
     * @param limit {int}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadCurrentRelations = function loadCurrentRelations(contentId, offset, limit, callback) {

        var that = this;

        this.loadCurrentVersion(
            contentId,
            {},
            function(error, currentVersionResponse){
                if (!error) {

                    var currentVersion = JSON.parse(currentVersionResponse.body).Version;

                    that.connectionManager_.request(
                        "GET",
                        currentVersion.Relations["_href"] + '?offset=' + offset + '&limit=' + limit,
                        {},
                        { "Accept" : version.Relations["_media-type"] },
                        callback
                    );

                } else {
                    callback(error, false)
                }
            }
        );
    };


    /**
     *  Loads a relation
     *
     * @method loadRelation
     * @param relationId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadRelation = function loadRelation(relationId, callback) {
        this.connectionManager_.request(
            "GET",
            relationId,
            {},
            { "Accept" : "application/vnd.ez.api.Relation+json" },
            callback
        );
    };

    /**
     *  Create a relation
     *
     * @method addRelation
     * @param versionedContentId {href}
     * @param relationCreateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.addRelation = function addRelation(versionedContentId, relationCreateStruct, callback) {

        var that = this;

        this.loadContent(
            versionedContentId,
            {},
            function(error, versionResponse){
                if (!error) {

                    var version = JSON.parse(versionResponse.body).Version;

                    that.connectionManager_.request(
                        "POST",
                        version.Relations["_href"],
                        JSON.stringify(relationCreateStruct.body),
                        relationCreateStruct.headers,
                        callback
                    );
                } else {
                    callback(error, false)
                }
            }
        );
    };

    /**
     *  Delete a relation
     *
     * @method deleteRelation
     * @param relationId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.deleteRelation = function deleteRelation(relationId, callback) {
        this.connectionManager_.delete(
            relationId,
            callback
        );
    };

// ******************************
// Thrash management
// ******************************

    /**
     *  Loads all the thrash can items
     *
     * @method loadThrashItems
     * @param offset {int}
     * @param limit {int}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadThrashItems = function loadThrashItems(offset, limit, callback) {

        var that = this;

        this.discoveryService_.getInfoObject(
            "trash",
            function(error, trash) {
                if (!error) {

                    that.connectionManager_.request(
                        "GET",
                        trash["_href"] + '?offset=' + offset + '&limit=' + limit,
                        {},
                        { "Accept" : trash["_media-type"] },
                        callback
                    );

                } else {
                    callback(error, false)
                }
            }
        );
    };

    /**
     *  Loads one thrash can item
     *
     * @method loadThrashItem
     * @param trashItemId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadThrashItem = function loadThrashItem(trashItemId, callback) {
        this.connectionManager_.request(
            "GET",
            trashItemId,
            {},
            { "Accept" : "application/vnd.ez.api.TrashItem+json" },
            callback
        );
    };

    /**
     *  Restores a trashItem
     *
     * @method recover
     * @param trashItemId {href}
     * @param destination {href} if given the trash item is restored under this location otherwise under its original parent location
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.recover = function recover(trashItemId, destination, callback) {

        var headers = { "Accept" : "application/vnd.ez.api.TrashItem+json" };

        if ((typeof destination !== "undefined") && (destination !== null)) {
            headers["Destination"] = destination;
        }

        this.connectionManager_.request(
            "MOVE",
            trashItemId,
            "",
            headers,
            callback
        );
    };

    /**
     *  Delete a trashItem
     *
     * @method recover
     * @param trashItemId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.deleteTrashItem = function deleteTrashItem(trashItemId, callback) {
        this.connectionManager_.delete(
            trashItemId,
            callback
        );
    };

    /**
     *  Empty the trash can
     *
     * @method emptyThrash
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.emptyThrash = function emptyThrash(callback) {

        var that = this;

        this.discoveryService_.getInfoObject(
            "trash",
            function(error, trash) {
                if (!error) {

                    that.connectionManager_.request(
                        "DELETE",
                        trash["_href"],
                        "",
                        {},
                        callback
                    );

                } else {
                    callback(error, false)
                }
            }
        );
    };

// ******************************
// ObjectStates management
// ******************************

    /**
     *  Loads all the ObjectState groups
     *
     * @method loadObjectStateGroups
     * @param objectStateGroups {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadObjectStateGroups = function loadObjectStateGroups(objectStateGroups, callback) {
        this.connectionManager_.request(
            "GET",
            objectStateGroups,
            {},
            { "Accept" : "application/vnd.ez.api.ObjectStateGroupList+json" },
            callback
        );
    };

    /**
     *  Loads an ObjectState group
     *
     * @method loadObjectStateGroup
     * @param objectStateGroupId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadObjectStateGroup = function loadObjectStateGroup(objectStateGroupId, callback) {
        this.connectionManager_.request(
            "GET",
            objectStateGroupId,
            {},
            { "Accept" : "application/vnd.ez.api.ObjectStateGroup+json" },
            callback
        );
    };


    /**
     *  Create an ObjectState group
     *
     * @method createObjectStateGroup
     * @param objectStateGroups {href}
     * @param objectStateGroupCreateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.createObjectStateGroup = function createObjectStateGroup(objectStateGroups, objectStateGroupCreateStruct, callback) {
        this.connectionManager_.request(
            "POST",
            objectStateGroups,
            JSON.stringify(objectStateGroupCreateStruct.body),
            objectStateGroupCreateStruct.headers,
            callback
        );
    };

    /**
     *  Update an ObjectState group
     *
     * @method updateObjectStateGroup
     * @param objectStateGroupId {href}
     * @param objectStateGroupUpdateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.updateObjectStateGroup = function updateObjectStateGroup(objectStateGroupId, objectStateGroupUpdateStruct, callback) {
        this.connectionManager_.request(
            "PATCH",
            objectStateGroupId,
            JSON.stringify(objectStateGroupUpdateStruct.body),
            objectStateGroupUpdateStruct.headers,
            callback
        );
    };

    /**
     *  Delete an ObjectState group
     *
     * @method deleteObjectStateGroup
     * @param objectStateGroupId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.deleteObjectStateGroup = function deleteObjectStateGroup(objectStateGroupId, callback) {
        this.connectionManager_.delete(
            objectStateGroupId,
            callback
        );
    };

    /**
     *  Creates an ObjectState
     *
     * @method createObjectState
     * @param objectStateGroupId {href}
     * @param objectStateCreateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.createObjectState = function createObjectState(objectStateGroupId, objectStateCreateStruct, callback) {

        this.connectionManager_.request(
            "POST",
            objectStateGroupId + "/objectstates",
            JSON.stringify(objectStateCreateStruct.body),
            objectStateCreateStruct.headers,
            callback
        );

    };

    /**
     *  Load an ObjectState
     *
     * @method loadObjectState
     * @param objectStateId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadObjectState = function loadObjectState(objectStateId, callback) {
        this.connectionManager_.request(
            "GET",
            objectStateId,
            {},
            { "Accept" : "application/vnd.ez.api.ObjectState+json" },
            callback
        );
    };

    /**
     *  Update an ObjectState
     *
     * @method updateObjectState
     * @param objectStateId {href}
     * @param objectStateUpdateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.updateObjectState = function updateObjectState(objectStateId, objectStateUpdateStruct, callback) {
        this.connectionManager_.request(
            "PATCH",
            objectStateId,
            JSON.stringify(objectStateUpdateStruct.body),
            objectStateUpdateStruct.headers,
            callback
        );
    };

    /**
     *  Delete an ObjectState
     *
     * @method deleteObjectState
     * @param objectStateId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.deleteObjectState = function deleteObjectState(objectStateId, callback) {
        this.connectionManager_.delete(
            objectStateId,
            callback
        );
    };

    /**
     *  Get ObjectStates of a content
     *
     * @method getContentState
     * @param contentStatesId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.getContentState = function getContentState(contentStatesId, callback) {
        this.connectionManager_.request(
            "GET",
            contentStatesId,
            {},
            { "Accept" : "application/vnd.ez.api.ContentObjectStates+json" },
            callback
        );
    };

    /**
     *  Set ObjectStates of a content
     *
     * @method setContentState
     * @param contentStatesId {href}
     * @param objectStates {Array}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.setContentState = function setContentState(contentStatesId, objectStates, callback) {
        this.connectionManager_.request(
            "PATCH",
            contentStatesId,
            JSON.stringify(objectStates),
            {
                "Accept" : "application/vnd.ez.api.ContentObjectStates+json",
                "Content-Type" : "application/vnd.ez.api.ContentObjectStates+json"
            },
            callback
        );
    };

// ******************************
// URL Aliases management
// ******************************

    /**
     *  Creates an UrlAlias
     *
     * @method createUrlAlias
     * @param urlAliases {href}
     * @param urlAliasCreateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.createUrlAlias = function createUrlAlias(urlAliases, urlAliasCreateStruct, callback) {
        this.connectionManager_.request(
            "POST",
            urlAliases,
            JSON.stringify(urlAliasCreateStruct.body),
            urlAliasCreateStruct.headers,
            callback
        );
    };

    /**
     *  Loads all the global UrlAliases
     *
     * @method loadUrlAliases
     * @param urlAliases {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.listGlobalAliases = function listGlobalAliases(urlAliases, callback) {
        this.connectionManager_.request(
            "GET",
            urlAliases,
            {},
            { "Accept" : "application/vnd.ez.api.UrlAliasRefList+json" },
            callback
        );
    };

    /**
     *  Loads all the UrlAliases for a location
     *
     * @method listLocationAliases
     * @param locationUrlAliases {href}
     * @param custom {boolean}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.listLocationAliases = function listLocationAliases(locationUrlAliases, custom, callback) {

        custom = (typeof custom === "undefined") ? true : custom;
        var parameters = (custom === true) ? "" : "?custom=false";

        this.connectionManager_.request(
            "GET",
            locationUrlAliases + '/urlaliases' + parameters,
            {},
            { "Accept" : "application/vnd.ez.api.UrlAliasRefList+json" },
            callback
        );
    };

    /**
     *  Load an URL Alias
     *
     * @method loadUrlAlias
     * @param urlAliasId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadUrlAlias = function loadUrlAlias(urlAliasId, callback) {
        this.connectionManager_.request(
            "GET",
            urlAliasId,
            {},
            { "Accept" : "application/vnd.ez.api.UrlAlias+json" },
            callback
        );
    };

    /**
     *  Delete an URL Alias
     *
     * @method deleteUrlAlias
     * @param urlAliasId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.deleteUrlAlias = function deleteUrlAlias(urlAliasId, callback) {
        this.connectionManager_.delete(
            urlAliasId,
            callback
        );
    };

// ******************************
// URL Wildcards management
// ******************************

    /**
     *  Creates an UrlWildcard
     *
     * @method createUrlWildcard
     * @param urlWildcards {href}
     * @param urlWildcardCreateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.createUrlWildcard = function createUrlWildcard(urlWildcards, urlWildcardCreateStruct, callback) {
        this.connectionManager_.request(
            "POST",
            urlWildcards,
            JSON.stringify(urlWildcardCreateStruct.body),
            urlWildcardCreateStruct.headers,
            callback
        );
    };

    /**
     *  Loads all UrlWildcards
     *
     * @method loadUrlWildcards
     * @param urlWildcards {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadUrlWildcards = function loadUrlWildcards(urlWildcards, callback) {
        this.connectionManager_.request(
            "GET",
            urlWildcards,
            "",
            { "Accept" : "application/vnd.ez.api.UrlWildcardList+json" },
            callback
        );
    };

    /**
     *  Loads an UrlWildcard
     *
     * @method loadUrlWildcard
     * @param urlWildcardId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.loadUrlWildcard = function loadUrlWildcard(urlWildcardId, callback) {
        this.connectionManager_.request(
            "GET",
            urlWildcardId,
            "",
            { "Accept" : "application/vnd.ez.api.UrlWildcard+json" },
            callback
        );
    };

    /**
     *  Deletes an UrlWildcard
     *
     * @method deleteUrlWildcard
     * @param urlWildcardId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentService.prototype.deleteUrlWildcard = function deleteUrlWildcard(urlWildcardId, callback) {
        this.connectionManager_.delete(
            urlWildcardId,
            callback
        );
    };


    return ContentService;

}());


;var ContentTypeService = (function() {
    "use strict";

    /**
     * Creates an instance of content type service object
     *
     * @constructor
     * @param connectionManager {Object} connection manager that will be used to send requests to REST service
     * @param discoveryService {Object}
     */
    var ContentTypeService = function(connectionManager, discoveryService) {

        this.connectionManager_ = connectionManager;
        this.discoveryService_ = discoveryService;

    };

// ******************************
// Structures
// ******************************

    /**
     * Returns content type group create structure
     *
     * @method newContentTypeGroupInputStruct
     * @param identifier {string}
     * @param languageCode {string}
     */
    ContentTypeService.prototype.newContentTypeGroupInputStruct = function newContentTypeGroupInputStruct(identifier) {

        return new ContentTypeGroupInputStruct(identifier);

    };

    /**
     * @method newContentTypeCreateStruct
     * @param identifier {string}
     * @param languageCode {string}
     * @param names {Array}
     * @param user {string}
     * @return {ContentTypeCreateStruct}
     */
    ContentTypeService.prototype.newContentTypeCreateStruct = function newContentTypeCreateStruct(identifier, languageCode, names) {

        return new ContentTypeCreateStruct(identifier, languageCode, names);

    };

    /**
     * @method newContentTypeUpdateStruct
     * @return {ContentTypeCreateStruct}
     */
    ContentTypeService.prototype.newContentTypeUpdateStruct = function newContentTypeUpdateStruct() {

        return new ContentTypeUpdateStruct();

    };


    /**
     * @method newFieldDefinitionCreateStruct
     * @param identifier
     * @param fieldType
     * @param fieldGroup
     * @param names
     * @return {FieldDefinitionCreateStruct}
     */
    ContentTypeService.prototype.newFieldDefinitionCreateStruct = function newFieldDefinitionCreateStruct(identifier, fieldType, fieldGroup, names) {

        return new FieldDefinitionCreateStruct(identifier, fieldType, fieldGroup, names);

    };

    /**
     * @method newFieldDefinitionUpdateStruct
     * @param identifier
     * @param fieldType
     * @param fieldGroup
     * @param names
     * @return {FieldDefinitionCreateStruct}
     */
    ContentTypeService.prototype.newFieldDefinitionUpdateStruct = function newFieldDefinitionUpdateStruct(identifier, fieldType, fieldGroup, names) {

        return new FieldDefinitionUpdateStruct(identifier, fieldType, fieldGroup, names);

    };


// ******************************
// Content Types Groups management
// ******************************

    /**
     * Create a content type group
     *
     * @method createContentTypeGroup
     * @param contentTypeGroups {href}
     * @param contentTypeGroupCreateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.createContentTypeGroup = function createContentTypeGroup(contentTypeGroups, contentTypeGroupCreateStruct, callback) {
        this.connectionManager_.request(
            "POST",
            contentTypeGroups,
            JSON.stringify(contentTypeGroupCreateStruct.body),
            contentTypeGroupCreateStruct.headers,
            callback
        );
    };


    /**
     * Load all content type groups
     *
     * @method loadContentTypeGroups
     * @param contentTypeGroups {href} reference to type groups resource
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.loadContentTypeGroups = function loadContentTypeGroups(contentTypeGroups, callback) {
        this.connectionManager_.request(
            "GET",
            contentTypeGroups,
            {},
            { "Accept" : "application/vnd.ez.api.ContentTypeGroupList+json" },
            callback
        );
    };

    /**
     * Load single content type group
     *
     * @method loadContentTypeGroups
     * @param contentTypeGroupId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.loadContentTypeGroup = function loadContentTypeGroup(contentTypeGroupId, callback) {
        this.connectionManager_.request(
            "GET",
            contentTypeGroupId,
            {},
            { "Accept" : "application/vnd.ez.api.ContentTypeGroup+json" },
            callback
        );
    };


    /**
     * Update a content type group
     *
     * @method updateContentTypeGroup
     * @param contentTypeGroupId {href}
     * @param contentTypeGroupUpdateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.updateContentTypeGroup = function updateContentTypeGroup(contentTypeGroupId, contentTypeGroupUpdateStruct, callback) {
        this.connectionManager_.request(
            "PATCH",
            contentTypeGroupId,
            JSON.stringify(contentTypeGroupUpdateStruct.body),
            contentTypeGroupUpdateStruct.headers,
            callback
        );
    };

    /**
     * Delete content type group
     *
     * @method deleteContentTypeGroup
     * @param contentTypeGroupId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.deleteContentTypeGroup = function deleteContentTypeGroup(contentTypeGroupId, callback) {
        this.connectionManager_.delete(
            contentTypeGroupId,
            callback
        );
    };

    /**
     * List content for a content type group
     *
     * @method loadContentTypes
     * @param contentTypeGroupId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.loadContentTypes = function loadContentTypes(contentTypeGroupId, callback) {

        var that = this;

        this.loadContentTypeGroup(
            contentTypeGroupId,
            function(error, contentTypeGroupResponse){
                if (!error) {

                    var contentTypeGroup = JSON.parse(contentTypeGroupResponse.body).ContentTypeGroup;

                    that.connectionManager_.request(
                        "GET",
                         contentTypeGroup.ContentTypes["_href"],
                        "",
                        { "Accept" : contentTypeGroup.ContentTypes["_media-type"] },
                        callback
                    );

                } else {
                    callback(error, false)
                }
            }
        );
    };

    /**
     * @method loadContentTypeGroupByIdentifier
     * @param contentTypeGroups {href}
     * @param identifier {string}
     * @param callback {Function}
     */
    ContentTypeService.prototype.loadContentTypeGroupByIdentifier = function loadContentTypeGroupByIdentifier(contentTypeGroups, identifier, callback) {
        this.connectionManager_.request(
            "GET",
            contentTypeGroups + "?identifier=" + identifier,
            "",
            { "Accept" : "application/vnd.ez.api.ContentTypeGroup+json" },
            callback
        );
    };

// ******************************
// Content Types management
// ******************************


    /**
     * Create a content type
     *
     * @method createContentType
     * @param contentTypeGroupId {href}
     * @param contentTypeCreateStruct {Object}
     * @param publish {boolean}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.createContentType = function createContentType(contentTypeGroupId, contentTypeCreateStruct, publish, callback) {

        var that = this;

        this.loadContentTypeGroup(
            contentTypeGroupId,
            function(error, contentTypeGroupResponse){
                if (!error) {

                    var contentTypeGroup = JSON.parse(contentTypeGroupResponse.body).ContentTypeGroup;
                    var parameters = (publish === true) ? "?publish=true" : "";

                    that.connectionManager_.request(
                        "POST",
                        contentTypeGroup.ContentTypes["_href"] + parameters,
                        JSON.stringify(contentTypeCreateStruct.body),
                        contentTypeCreateStruct.headers,
                        callback
                    );

                } else {
                    callback(error, false)
                }
            }
        );
    };

    /**
     * Copy content type
     *
     * @method copyContentType
     * @param contentTypeId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.copyContentType = function copyContentType(contentTypeId, callback) {
        this.connectionManager_.request(
            "COPY",
            contentTypeId,
            "",
            {},
            callback
        );
    };

    /**
     * Load content type
     *
     * @method loadContentType
     * @param contentTypeId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.loadContentType = function loadContentType(contentTypeId, callback) {
        this.connectionManager_.request(
            "GET",
            contentTypeId,
            "",
            { "Accept" : "application/vnd.ez.api.ContentType+json" },
            callback
        );
    };

    /**
     * @method loadContentTypeByIdentifier
     * @param identifier {string}
     * @param callback {Function}
     */
    ContentTypeService.prototype.loadContentTypeByIdentifier = function loadContentTypeByIdentifier(identifier, callback) {

        var that = this;

        this.discoveryService_.getInfoObject(
            "contentTypes",
            function(error, contentTypes) {
                if (!error) {

                    that.connectionManager_.request(
                        "GET",
                        contentTypes["_href"] + "?identifier=" + identifier,
                        {},
                        { "Accept" : contentTypes["_media-type"] },
                        callback
                    );

                } else {
                    callback(error, false)
                }
            }
        );
    };

    /**
     * Delete content type
     *
     * @method deleteContentType
     * @param contentTypeId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.deleteContentType = function deleteContentType(contentTypeId, callback) {
        this.connectionManager_.delete(
            contentTypeId,
            callback
        );
    };

    /**
     * Load content type groups
     *
     * @method loadContentTypeGroups
     * @param contentTypeId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.loadContentTypeGroups = function loadContentTypeGroups(contentTypeId, callback) {
        this.connectionManager_.request(
            "GET",
            contentTypeId + '/groups',
            "",
            { "Accept" : "application/vnd.ez.api.ContentTypeGroupRefList+json" },
            callback
        );
    };


    /**
     * Assign a content type to a group
     *
     * @method assignContentTypeGroup
     * @param contentTypeId {href}
     * @param groupId{href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.assignContentTypeGroup = function assignContentTypeGroup(contentTypeId, groupId, callback) {
        this.connectionManager_.request(
            "POST",
            contentTypeId + "/groups" + "?group=" + groupId,
            "",
            {},
            callback
        );
    };

    /**
     * Unassign a content type from group
     *
     * @method unassignContentTypeGroup
     * @param contentTypeAssignedGroupId {href} (/content/type/<ID>/groups/<ID>)
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.unassignContentTypeGroup = function unassignContentTypeGroup(contentTypeAssignedGroupId, callback) {
        this.connectionManager_.delete(
            contentTypeAssignedGroupId,
            callback
        );
    };

// ******************************
// Drafts management
// ******************************

    /**
     * Create content type draft
     *
     * @method createContentTypeDraft
     * @param contentTypeId {href}
     * @param contentTypeUpdateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.createContentTypeDraft = function createContentTypeDraft(contentTypeId, contentTypeUpdateStruct, callback) {
        this.connectionManager_.request(
            "POST",
            contentTypeId,
            JSON.stringify(contentTypeUpdateStruct.body),
            contentTypeUpdateStruct.headers,
            callback
        );
    };

    /**
     * Load content type draft
     *
     * @method loadContentTypeDraft
     * @param contentTypeId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.loadContentTypeDraft = function loadContentTypeDraft(contentTypeId, callback) {
        this.connectionManager_.request(
            "GET",
            contentTypeId + "/draft",
            "",
            { "Accept" : "application/vnd.ez.api.ContentType+json" },
            callback
        );
    };

    /**
     * Update content type draft metadata. This method does not handle field definitions
     *
     * @method updateContentTypeDraftMetadata
     * @param contentTypeDraftId {href}
     * @param contentTypeUpdateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.updateContentTypeDraftMetadata = function updateContentTypeDraftMetadata(contentTypeDraftId, contentTypeUpdateStruct, callback) {
        this.connectionManager_.request(
            "PATCH",
            contentTypeDraftId,
            JSON.stringify(contentTypeUpdateStruct.body),
            contentTypeUpdateStruct.headers,
            callback
        );
    };

    /**
     * Publish content type draft
     *
     * @method publishContentTypeDraft
     * @param contentTypeDraftId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.publishContentTypeDraft = function publishContentTypeDraft(contentTypeDraftId, callback) {
        this.connectionManager_.request(
            "PUBLISH",
            contentTypeDraftId,
            "",
            {},
            callback
        );
    };

    /**
     * Delete content type draft
     *
     * @method deleteContentTypeDraft
     * @param contentTypeDraftId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.deleteContentTypeDraft = function deleteContentTypeDraft(contentTypeDraftId, callback) {
        this.connectionManager_.delete(
            contentTypeDraftId,
            callback
        );
    };

// ******************************
// Field Definitions management
// ******************************

    /**
     * Add field definition to exisiting Content Type draft
     *
     * @method addFieldDefinition
     * @param contentTypeId {href}
     * @param fieldDefinitionCreateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.addFieldDefinition = function addFieldDefinition(contentTypeId, fieldDefinitionCreateStruct, callback) {

        var that = this;

        this.loadContentTypeDraft(
            contentTypeId,
            function(error, contentTypeDraftResponse){
                if (!error) {

                    var contentTypeDraftFieldDefinitions = JSON.parse(contentTypeDraftResponse.body).ContentType.FieldDefinitions;

                    that.connectionManager_.request(
                        "POST",
                        contentTypeDraftFieldDefinitions["_href"],
                        JSON.stringify(fieldDefinitionCreateStruct.body),
                        fieldDefinitionCreateStruct.headers,
                        callback
                    );

                } else {
                    callback(error, false)
                }
            }
        );
    };

    /**
     * Load existing field definition
     *
     * @method loadFieldDefinition
     * @param fieldDefinitionId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.loadFieldDefinition = function loadFieldDefinition(fieldDefinitionId, callback) {
        this.connectionManager_.request(
            "GET",
            fieldDefinitionId,
            "",
            {
                "Accept": "application/vnd.ez.api.FieldDefinition+json"
            },
            callback
        );
    };

    /**
     * Update existing field definition
     *
     * @method updateFieldDefinition
     * @param fieldDefinitionId {href}
     * @param fieldDefinitionUpdateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.updateFieldDefinition = function updateFieldDefinition(fieldDefinitionId, fieldDefinitionUpdateStruct, callback) {
        this.connectionManager_.request(
            "PATCH",
            fieldDefinitionId,
            JSON.stringify(fieldDefinitionUpdateStruct.body),
            fieldDefinitionUpdateStruct.headers,
            callback
        );
    };

    /**
     * Delete existing field definition
     *
     * @method deleteFieldDefinition
     * @param fieldDefinitionId {href}
     * @param callback {function} function, which will be executed on request success
     */
    ContentTypeService.prototype.deleteFieldDefinition = function deleteFieldDefinition(fieldDefinitionId, callback) {
        this.connectionManager_.delete(
            fieldDefinitionId,
            callback
        );
    };

    return ContentTypeService;

}());

;var UserService = (function() {
    "use strict";

    /**
     * Creates an instance of user service object
     *
     * @constructor
     * @param connectionManager {object} connection manager that will be used to send requests to REST service
     */
    var UserService = function(connectionManager, discoveryService) {

        this.connectionManager_ = connectionManager;
        this.discoveryService_ = discoveryService;

    };

// ******************************
// Structures
// ******************************

    /**
     * Returns session create structure
     *
     * @method newSessionCreateStruct
     * @param login {string}
     * @param password {string}
     */
    UserService.prototype.newSessionCreateStruct = function newSessionCreateStruct(login, password) {

        return new SessionCreateStruct(login, password);

    };

    /**
     * User group create structure
     *
     * @method newUserGroupCreateStruct
     * @param language {string}
     * @param fields {Array}
     */
    UserService.prototype.newUserGroupCreateStruct = function newUserGroupCreateStruct(language, fields) {

        return new UserGroupCreateStruct(language, fields);

    };

    /**
     * User group update structure
     *
     * @method newUserGroupUpdateStruct
     */
    UserService.prototype.newUserGroupUpdateStruct = function newUserGroupUpdateStruct() {

        return new UserGroupUpdateStruct();

    };

    /**
     * User create structure
     *
     * @method newUserCreateStruct
     * @param languageCode {string}
     * @param login {string}
     * @param email {string}
     * @param password {string}
     * @param fields {Array}
     */
    UserService.prototype.newUserCreateStruct = function newUserCreateStruct(languageCode, login, email, password, fields) {

        return new UserCreateStruct(languageCode, login, email, password, fields);

    };

    /**
     * User update structure
     *
     * @method newUserUpdateStruct
     */
    UserService.prototype.newUserUpdateStruct = function newUserUpdateStruct() {

        return new UserUpdateStruct();

    };

    /**
     * Role input structure
     *
     * @method newRoleInputStruct
     * @param identifier {string}
     */
    UserService.prototype.newRoleInputStruct = function newRoleInputStruct(identifier) {

        return new RoleInputStruct(identifier);

    };

    /**
     * Role assignment input structure
     *
     * @method newRoleAssignmentInputStruct
     * @param role {Object}
     * @param limitation {Object}
     */
    UserService.prototype.newRoleAssignInputStruct = function newRoleAssignInputStruct(role, limitation) {

        return new RoleAssignInputStruct(role, limitation);

    };

    /**
     * Policy create structure
     *
     * @method newPolicyCreateStruct
     * @param module {string}
     * @param theFunction {string}
     * @param limitations {Object}
     */
    UserService.prototype.newPolicyCreateStruct = function newPolicyCreateStruct(module, theFunction, limitations) {

        return new PolicyCreateStruct(module, theFunction, limitations);

    };

    /**
     * Policy update structure
     *
     * @method newPolicyUpdateStruct
     * @param limitations {Object}
     */
    UserService.prototype.newPolicyUpdateStruct = function newPolicyUpdateStruct(limitations) {

        return new PolicyUpdateStruct(limitations);

    };

// ******************************
// User groups management
// ******************************

    /**
     * Load root user group
     *
     * @method loadRootUserGroup
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.loadRootUserGroup = function loadRootUserGroup(callback) {

        var that = this;

        this.discoveryService_.getInfoObject(
            "rootUserGroup",
            function(error, rootUserGroup){
                if (!error) {

                    that.connectionManager_.request(
                        "GET",
                        rootUserGroup["_href"],
                        "",
                        {
                            "Accept" : rootUserGroup["_media-type"]
                        },
                        callback
                    );

                } else {
                    callback(error, false)
                }
            });
    };

    /**
     * Load user group
     *
     * @method loadUserGroup
     * @param userGroupId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.loadUserGroup = function loadUserGroup(userGroupId, callback) {
        this.connectionManager_.request(
            "GET",
            userGroupId,
            "",
            {
                "Accept" : "application/vnd.ez.api.UserGroup+json"
            },
            callback
        );
    };

    /**
     * Load user group by remoteId
     *
     * @method loadUserGroupByRemoteId
     * @param userGroups {href}
     * @param remoteId {string}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.loadUserGroupByRemoteId = function loadUserGroupByRemoteId(userGroups, remoteId, callback) {
        this.connectionManager_.request(
            "GET",
            userGroups + '?remoteId=' + remoteId,
            "",
            {
                "Accept" : "application/vnd.ez.api.UserGroupList+json"
            },
            callback
        );
    };

    /**
     * Delete user group
     *
     * @method deleteUserGroup
     * @param userGroupId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.deleteUserGroup = function deleteUserGroup(userGroupId, callback) {
        this.connectionManager_.delete(
            userGroupId,
            callback
        );
    };

    /**
     * Move user group
     *
     * @method moveUserGroup
     * @param userGroupId {href}
     * @param destination {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.moveUserGroup = function moveUserGroup(userGroupId, destination, callback) {
        this.connectionManager_.request(
            "MOVE",
            userGroupId,
            "",
            {
                "Destination" : destination
            },
            callback
        );
    };


    /**
     * Create user group
     *
     * @method createUserGroup
     * @param parentGroupId {href}
     * @param userGroupCreateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.createUserGroup = function createUserGroup(parentGroupId, userGroupCreateStruct, callback) {

        var that = this;

        this.loadUserGroup(
            parentGroupId,
            function(error, userGroupResponse){
                if (!error) {

                    var subGroups = JSON.parse(userGroupResponse.body).UserGroup.Subgroups;

                    that.connectionManager_.request(
                        "POST",
                        subGroups["_href"],
                        JSON.stringify(userGroupCreateStruct.body),
                        userGroupCreateStruct.headers,
                        callback
                    );

                } else {
                    callback(error, false)
                }
            }
        );
    };

    /**
     * Update user group
     *
     * @method updateUserGroup
     * @param userGroupId {href}
     * @param userGroupUpdateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.updateUserGroup = function updateUserGroup(userGroupId, userGroupUpdateStruct, callback) {
        this.connectionManager_.request(
            "PATCH",
            userGroupId,
            JSON.stringify(userGroupUpdateStruct.body),
            userGroupUpdateStruct.headers,
            callback
        );
    };


    /**
     * Load subgroups for a user group
     *
     * @method loadSubUserGroups
     * @param userGroupId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.loadSubUserGroups = function loadSubUserGroups(userGroupId, callback) {

        var that = this;

        this.loadUserGroup(
            userGroupId,
            function(error, userGroupResponse){
                if (!error) {

                    var subGroups = JSON.parse(userGroupResponse.body).UserGroup.Subgroups;

                    that.connectionManager_.request(
                        "GET",
                        subGroups["_href"],
                        "",
                        {
                            "Accept" : subGroups["_media-type"]
                        },
                        callback
                    );

                } else {
                    callback(error, false)
                }
            }
        )
    };

    /**
     * Load users for a user group
     *
     * @method loadUsersOfUserGroup
     * @param userGroupId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.loadUsersOfUserGroup = function loadUsersOfUserGroup(userGroupId, callback) {

        var that = this;

        this.loadUserGroup(
            userGroupId,
            function(error, userGroupResponse){
                if (!error) {

                    var users = JSON.parse(userGroupResponse.body).UserGroup.Users;

                    that.connectionManager_.request(
                        "GET",
                        users["_href"],
                        "",
                        {
                            "Accept" : users["_media-type"]
                        },
                        callback
                    );

                } else {
                    callback(error, false)
                }
            }
        )

    };

    /**
     * Load user groups for a user
     *
     * @method loadUserGroupsOfUser
     * @param userId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.loadUserGroupsOfUser = function loadUserGroupsOfUser(userId, callback) {
        this.connectionManager_.request(
            "GET",
            userId + '/groups',
            "",
            {
                "Accept" : "application/vnd.ez.api.UserGroupRefList+json"
            },
            callback
        );
    };

// ******************************
// Users management
// ******************************

    /**
     * Create user
     *
     * @method createUser
     * @param userGroupId {href}
     * @param userCreateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.createUser = function createUser(userGroupId, userCreateStruct, callback) {

        var that = this;

        this.loadUserGroup(
            userGroupId,
            function(error, userGroupResponse){
                if (!error) {

                    var users = JSON.parse(userGroupResponse.body).UserGroup.Users;

                    that.connectionManager_.request(
                        "POST",
                        users["_href"],
                        JSON.stringify(userCreateStruct.body),
                        userCreateStruct.headers,
                        callback
                    );

                } else {
                    callback(error, false)
                }
            }
        );
    };

    /**
     * Load users and usergroups according to roleId
     *
     * @method getRoleAssignments
     * @param userList
     * @param roleId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.getRoleAssignments = function getRoleAssignments(userList, roleId, callback) {
        this.connectionManager_.request(
            "GET",
            userList + '?roleId=' + roleId,
            "",
            {
                "Accept" : "application/vnd.ez.api.UserList+json"
            },
            callback
        );
    };

    /**
     * Load user
     *
     * @method loadUser
     * @param userId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.loadUser = function loadUser(userId, callback) {
        this.connectionManager_.request(
            "GET",
            userId,
            "",
            {
                "Accept" : "application/vnd.ez.api.User+json"
            },
            callback
        );
    };

    /**
     * Update user
     *
     * @method updateUser
     * @param userId {href}
     * @param userUpdateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.updateUser = function updateUser(userId, userUpdateStruct, callback) {
        this.connectionManager_.request(
            "PATCH",
            userId,
            JSON.stringify(userUpdateStruct.body),
            userUpdateStruct.headers,
            callback
        );
    };

    /**
     * Delete user
     *
     * @method deleteUser
     * @param userId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.deleteUser = function deleteUser(userId, callback) {
        this.connectionManager_.delete(
            userId,
            callback
        );
    };

// ******************************
// Users and groups relation management
// ******************************

    /**
     * Assign user to a user group
     *
     * @method loadUser
     * @param userId {href}
     * @param userGroupId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.assignUserToUserGroup = function assignUserToUserGroup(userId, userGroupId, callback) {

        var that = this;

        this.loadUser(
            userId,
            function(error, userResponse){
                if (!error) {

                    var userGroups = JSON.parse(userResponse.body).User.UserGroups;

                    that.connectionManager_.request(
                        "POST",
                        userGroups["_href"] + "?group=" + userGroupId,
                        "",
                        {
                            "Accept" : userGroups["_media-type"]
                        },
                        callback
                    );

                } else {
                    callback(error, false)
                }

            }
        )
    };

    /**
     * Unassign user from a user group
     *
     * @method unAssignUserFromUserGroup
     * @param userAssignedGroupId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.unAssignUserFromUserGroup = function unAssignUserFromUserGroup(userAssignedGroupId, callback) {

        this.connectionManager_.request(
            "DELETE",
            userAssignedGroupId,
            "",
            {
                "Accept" : "application/vnd.ez.api.UserGroupRefList+json"
            },
            callback
        );

    };

// ******************************
// Roles management
// ******************************

    /**
     * Create a role
     *
     * @method createRole
     * @param roleCreateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.createRole = function createRole(roleCreateStruct, callback) {

        var that = this;

        this.discoveryService_.getInfoObject(
            "roles",
            function(error, roles){
                if (!error) {

                    that.connectionManager_.request(
                    "POST",
                    roles["_href"],
                    JSON.stringify(roleCreateStruct.body),
                    roleCreateStruct.headers,
                    callback
                    );

                } else {
                    callback(error, false)
                }
        });
    };

    /**
     * Load a role
     *
     * @method loadRole
     * @param roleId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.loadRole = function loadRole(roleId, callback) {
        this.connectionManager_.request(
            "GET",
            roleId,
            "",
            {
                "Accept" : "application/vnd.ez.api.Role+json"
            },
            callback
        );
    };

    /**
     * Load roles
     *
     * @method loadRoles
     * @param identifier {string}
     * @param limit {int}
     * @param offset {int}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.loadRoles = function loadRoles(identifier, limit, offset, callback) {

        var that = this;
        var identifierQuery = (identifier === "") ? "" : "&identifier=" + identifier;

        // default values for some of the parameters
        offset = (typeof offset === "undefined") ? 0 : offset;
        limit = (typeof limit === "undefined") ? -1 : limit;



        this.discoveryService_.getInfoObject(
            "roles",
            function(error, roles){
                if (!error) {

                    that.connectionManager_.request(
                        "GET",
                        roles["_href"] + '?offset=' + offset + '&limit=' + limit + identifierQuery,
                        "",
                        {
                            "Accept" : roles["_media-type"]
                        },
                        callback
                    );

                } else {
                    callback(error, false)
                }
            }
        )
    };



    /**
     * Update a role
     *
     * @method updateRole
     * @param roleId {href}
     * @param roleUpdateStruct
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.updateRole = function updateRole(roleId, roleUpdateStruct, callback) {
        this.connectionManager_.request(
            "PATCH",
            roleId,
            JSON.stringify(roleUpdateStruct.body),
            roleUpdateStruct.headers,
            callback
        );
    };


    /**
     * Delete a role
     *
     * @method deleteRole
     * @param roleId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.deleteRole = function deleteRole(roleId, callback) {
        this.connectionManager_.delete(
            roleId,
            callback
        );
    };


    /**
     * Get role assignments for a user
     *
     * @method getRoleAssignmentsForUser
     * @param userId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.getRoleAssignmentsForUser = function getRoleAssignmentsForUser(userId, callback) {

        var that = this;

        this.loadUser(
            userId,
            function(error, userResponse){
                if (!error) {

                    var userRoles = JSON.parse(userResponse.body).User.Roles;

                    that.connectionManager_.request(
                        "GET",
                        userRoles["_href"],
                        "",
                        {
                            "Accept" : userRoles["_media-type"]
                        },
                        callback
                    );

                } else {
                    callback(error, false)
                }
            }
        );
    };

    /**
     * Get role assignments for a user group
     *
     * @method getRoleAssignmentsForUserGroup
     * @param userGroupId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.getRoleAssignmentsForUserGroup = function getRoleAssignmentsForUserGroup(userGroupId, callback) {

        var that = this;

        this.loadUserGroup(
            userGroupId,
            function(error, userGroupResponse){
                if (!error) {

                    var userGroupRoles = JSON.parse(userGroupResponse.body).UserGroup.Roles;

                    that.connectionManager_.request(
                        "GET",
                        userGroupRoles["_href"],
                        "",
                        {
                            "Accept" : userGroupRoles["_media-type"]
                        },
                        callback
                    );

                } else {
                    callback(error, false)
                }
            }
        );
    };


    /**
     * Get roleassignment object for a user
     *
     * @method getUserAssignmentObject
     * @param userAssignmentId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.getUserAssignmentObject = function getUserAssignmentObject(userAssignmentId, callback) {
        this.connectionManager_.request(
            "GET",
            userAssignmentId,
            "",
            {
                "Accept" : "application/vnd.ez.api.RoleAssignment+json"
            },
            callback
        );
    };

    /**
     * Get roleassignment object for a user group
     *
     * @method getUserGroupAssignmentObject
     * @param userGroupAssignmentId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.getUserGroupAssignmentObject = function getUserGroupAssignmentObject(userGroupAssignmentId, callback) {
        this.connectionManager_.request(
            "GET",
            userGroupAssignmentId,
            "",
            {
                "Accept" : "application/vnd.ez.api.RoleAssignment+json"
            },
            callback
        );
    };


    /**
     * Assign a role to user
     *
     * @method assignRoleToUser
     * @param userId {href}
     * @param roleAssignInputStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.assignRoleToUser = function assignRoleToUser(userId, roleAssignInputStruct, callback) {

        var that = this;

        this.loadUser(
            userId,
            function(error, userResponse){
                if (!error) {

                    var userRoles = JSON.parse(userResponse.body).User.Roles;

                    that.connectionManager_.request(
                        "POST",
                        userRoles["_href"],
                        JSON.stringify(roleAssignInputStruct.body),
                        roleAssignInputStruct.headers,
                        callback
                    );
                } else {
                    callback(error, false)
                }
            }
        );
    };


    /**
     * Assign a role to user group
     *
     * @method assignRoleToUserGroup
     * @param userGroupId {href}
     * @param roleAssignInputStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.assignRoleToUserGroup = function assignRoleToUserGroup(userGroupId, roleAssignInputStruct, callback) {

        var that = this;

        this.loadUserGroup(
            userGroupId,
            function(error, userGroupResponse){
                if (!error) {

                    var userGroupRoles = JSON.parse(userGroupResponse.body).UserGroup.Roles;

                    that.connectionManager_.request(
                        "POST",
                        userGroupRoles["_href"],
                        JSON.stringify(roleAssignInputStruct.body),
                        roleAssignInputStruct.headers,
                        callback
                    );
                } else {
                    callback(error, false)
                }
            }
        );
    };

    /**
     * Unassign the role from user
     *
     * @method unassignRoleFromUser
     * @param userRoleId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.unassignRoleFromUser = function unassignRoleFromUser(userRoleId, callback) {
        this.connectionManager_.delete(
            userRoleId,
            callback
        );
    };

    /**
     * Unassign the role from user group
     *
     * @method unassignRoleFromUserGroup
     * @param userGroupRoleId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.unassignRoleFromUserGroup = function unassignRoleFromUserGroup(userGroupRoleId, callback) {
        this.connectionManager_.delete(
            userGroupRoleId,
            callback
        );
    };

// ******************************
// Policies management
// ******************************

    /**
     * Add new policy to the role
     *
     * @method addPolicy
     * @param roleId {href}
     * @param policyCreateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.addPolicy = function addPolicy(roleId, policyCreateStruct, callback) {

        var that = this;

        this.loadRole(
            roleId,
            function(error, roleResponse){
                if (!error) {

                    var rolePolicies = JSON.parse(roleResponse.body).Role.Policies;

                    that.connectionManager_.request(
                        "POST",
                        rolePolicies["_href"],
                        JSON.stringify(policyCreateStruct.body),
                        policyCreateStruct.headers,
                        callback
                    );
                } else {
                    callback(error, false)
                }
            }
        );
    };

    /**
     * Load policies of the role
     *
     * @method loadPolicies
     * @param roleId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.loadPolicies = function loadPolicies(roleId, callback) {

        var that = this;

        this.loadRole(
            roleId,
            function(error, roleResponse){
                if (!error) {

                    var rolePolicies = JSON.parse(roleResponse.body).Role.Policies;

                    that.connectionManager_.request(
                        "GET",
                        rolePolicies["_href"],
                        "",
                        {
                            "Accept" : rolePolicies["_media-type"]
                        },
                        callback
                    );
                } else {
                    callback(error, false)
                }
            }
        );
    };

    /**
     * Load a policy
     *
     * @method loadPolicy
     * @param policyId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.loadPolicy = function loadPolicy(policyId, callback) {
        this.connectionManager_.request(
            "GET",
            policyId,
            "",
            {
                "Accept" : "application/vnd.ez.api.Policy+json"
            },
            callback
        );
    };

    /**
     * Update a policy
     *
     * @method updatePolicy
     * @param policyId {href}
     * @param policyUpdateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.updatePolicy = function updatePolicy(policyId, policyUpdateStruct, callback) {
        this.connectionManager_.request(
            "PATCH",
            policyId,
            JSON.stringify(policyUpdateStruct.body),
            policyUpdateStruct.headers,
            callback
        );
    };

    /**
     * Delete the policy
     *
     * @method deletePolicy
     * @param policyId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.deletePolicy = function deletePolicy(policyId, callback) {
        this.connectionManager_.delete(
            policyId,
            callback
        );
    };

    /**
     * Load users policies
     *
     * @method loadPoliciesByUserId
     * @param userPolicies
     * @param userId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.loadPoliciesByUserId = function loadPoliciesByUserId(userPolicies, userId, callback) {
        this.connectionManager_.request(
            "GET",
            userPolicies + "?userId=" + userId,
            "",
            {
                "Accept" : "application/vnd.ez.api.PolicyList+json"
            },
            callback
        );
    };

// ******************************
// Sessions management
// ******************************

    /**
     * Create a session (login a user)
     *
     * @method createSession
     * @param sessions {href}
     * @param sessionCreateStruct {Object}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.createSession = function createSession(sessions, sessionCreateStruct, callback) {
        this.connectionManager_.notAuthorizedRequest(
            "POST",
            sessions,
            JSON.stringify(sessionCreateStruct.body),
            sessionCreateStruct.headers,
            callback
        );
    };

    /**
     * Delete the session (without actual client logout)
     *
     * @method deleteSession
     * @param sessionId {href}
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.deleteSession = function deleteSession(sessionId, callback) {
        this.connectionManager_.request(
            "DELETE",
            sessionId,
            "",
            {
                "X-CSRF-Token" : "6245d05aa911d064c3f68fcf6b01aaaf65fca8ca"
            },
            callback
        );
    };

    /**
     * Actual client logout (based on deleteSession)
     * Kills currently active session and resets localStorage params (sessionId, CSRFToken)
     *
     * @method logOut
     * @param callback {function} function, which will be executed on request success
     */
    UserService.prototype.logOut = function logOut(callback) {

        this.connectionManager_.logOut(callback);

    };


    return UserService;

}());

;var XmlHttpRequestConnection = (function() {
    "use strict";

    /**
     * Creates an instance of XmlHttpRequestConnection object
     *
     * @constructor
     */
    var XmlHttpRequestConnection = function () {

        this.xhr_ = new XMLHttpRequest();

        /**
         * Basic request implemented via XHR technique
         *
         * @method execute
         * @param request {Request} structure containing all needed params and data
         * @param callback {function} function, which will be executed on request success
         */
        this.execute = function(request, callback) {

            var XHR = this.xhr_;

            // Create the state change handler:
            XHR.onreadystatechange = function() {
                if (XHR.readyState != 4) return; // Not ready yet
                if (XHR.status >= 400) {
                    callback(
                        new Error({
                            errorText : "Connection error : " + XHR.status,
                            errorCode : XHR.status
                        }),
                        new Response({
                            status : XHR.status,
                            headers : XHR.getAllResponseHeaders(),
                            body : XHR.responseText
                        })
                    );
                    return;
                }
                // Request successful
                callback(
                    false,
                    new Response({
                        status : XHR.status,
                        headers : XHR.getAllResponseHeaders(),
                        body : XHR.responseText
                    })
                );
            };

            if (request.httpBasicAuth) {
                XHR.open(request.method, request.url, true, request.login, request.password);
            } else {
                XHR.open(request.method, request.url, true);
            }


            for (var headerType in request.headers) {
                XHR.setRequestHeader(
                    headerType,
                    request.headers[headerType]
                );
            }
            XHR.send(request.body);
        };
    };

    // static method
    XmlHttpRequestConnection.isCompatible = function(){
        return !!window.XMLHttpRequest;
    }

    return XmlHttpRequestConnection;


}());;var MicrosoftXmlHttpRequestConnection = (function() {
    "use strict";

    /**
     * Creates an instance of MicrosoftXmlHttpRequestConnection object
     *
     * @constructor
     */
    var MicrosoftXmlHttpRequestConnection = function () {

        // Private area
        var user = "admin";
        var password = "admin";
        var authMethod = "HTTPBasicAuth";

        this.xhr_ = new ActiveXObject("Microsoft.XMLHTTP");

        /**
         * Basic request implemented via XHR technique
         *
         * @method execute
         * @param request {Request} structure containing all needed params and data
         * @param callback {function} function, which will be executed on request success
         */
        this.execute = function(request, callback) {

            var XHR = this.xhr_;

            // Create the state change handler:
            XHR.onreadystatechange = function() {
                if (XHR.readyState != 4) return; // Not ready yet
                if (XHR.status >= 400) {
                    callback(
                        new Error({
                            errorText : "Connection error : " + XHR.status,
                            errorCode : XHR.status
                        }),
                        new Response({
                            status : XHR.status,
                            headers : XHR.getAllResponseHeaders(),
                            body : XHR.responseText
                        })
                    );
                    return;
                }
                // Request successful
                callback(
                    false,
                    new Response({
                        status : XHR.status,
                        headers : XHR.getAllResponseHeaders(),
                        body : XHR.responseText
                    })
                );
            };

            if (request.httpBasicAuth) {
                XHR.open(request.method, request.url, true, request.user, request.password);
            } else {
                XHR.open(request.method, request.url, true);
            }


            for (var headerType in request.headers) {
                XHR.setRequestHeader(
                    headerType,
                    request.headers[headerType]
                );
            }
            XHR.send(request.body);
        };
    };

    // static method
    MicrosoftXmlHttpRequestConnection.isCompatible = function(){
        return !!window.ActiveXObject;
    }

    return MicrosoftXmlHttpRequestConnection;

}());;var HttpBasicAuthAgent = (function() {
    "use strict";

    /**
     * Creates an instance of HttpBasicAuthAgent object
     *
     * @constructor
     * @param credentials {object}
     */
    var HttpBasicAuthAgent = function (credentials) {

        this.CAPI = null;

        // Private (should be!) area
        this.login_ = credentials.login;
        this.password_ = credentials.password;

    };

    /**
     * Called every time a new request cycle is started,
     * to ensure those requests are correctly authenticated.
     *
     * A cycle may contain one or more queued up requests
     *
     * @method ensureAuthentication
     * @param done {Function} Callback function, which is to be called by the implementation
     * to signal the authentication has been completed.
     */
    HttpBasicAuthAgent.prototype.ensureAuthentication = function(done) {
        // ... empty for basic auth?
    }

    /**
     * Hook to allow the modification of any request, for authentication purposes, before
     * sending it out to the backend
     *
     * @method authenticateRequest
     * @param request {Request}
     * @param done {function}
     */
    HttpBasicAuthAgent.prototype.authenticateRequest = function(request, done) {

        request.httpBasicAuth = true;
        request.login = this.login_;
        request.password = this.password_;

        done(false, request);

    }

    /**
     * Log out workflow
     * No actual logic for HTTP Basic Auth
     *
     * @method logOut
     * @param done {function}
     */
    HttpBasicAuthAgent.prototype.logOut = function(done) {
        done(false, true);
    }


    return HttpBasicAuthAgent;


}());;var SessionAuthAgent = (function() {
    "use strict";

    /**
     * Creates an instance of SessionAuthAgent object
     *
     * @constructor
     * @param credentials {object}
     */
    var SessionAuthAgent = function (credentials) {

        // for now is initiated inside CAPI constructor
        this.CAPI = null;

        // Private (should be!) area
        this.login_ = credentials.login;
        this.password_ = credentials.password;

        //TODO: implement storage selection mechanism
        this.sessionName = sessionStorage.getItem('ezpRestClient.sessionName');
        this.sessionId = sessionStorage.getItem('ezpRestClient.sessionId');
        this.csrfToken = sessionStorage.getItem('ezpRestClient.csrfToken');

    };

    /**
     * Called every time a new request cycle is started,
     * to ensure those requests are correctly authenticated.
     *
     * A cycle may contain one or more queued up requests
     *
     * @method ensureAuthentication
     * @param done {Function} Callback function, which is to be called by the implementation
     * to signal the authentication has been completed.
     */
    SessionAuthAgent.prototype.ensureAuthentication = function(done) {
        if (this.sessionId === null) {

            var that = this;

            var userService = this.CAPI.getUserService();

            var sessionCreateStruct = userService.newSessionCreateStruct(
                this.login_,
                this.password_
            )

            // TODO: change hardcoded "sessions" path to discovered
            userService.createSession(
                "/api/ezp/v2/user/sessions",
                sessionCreateStruct,
                function(error, sessionResponse){
                    if (!error){

                        console.log(sessionResponse);

                        var session = JSON.parse(sessionResponse.body).Session;

                        that.sessionName = session.name;
                        that.sessionId = session._href;
                        that.csrfToken = session.csrfToken;

                        sessionStorage.setItem('ezpRestClient.sessionName', that.sessionName);
                        sessionStorage.setItem('ezpRestClient.sessionId', that.sessionId);
                        sessionStorage.setItem('ezpRestClient.csrfToken', that.csrfToken);

                        done(false, true);

                    } else {
                        console.log(error, session);
                    }
                }
            );

        } else {
            done(false, true);
        }
    }

    /**
     * Hook to allow the modification of any request, for authentication purposes, before
     * sending it out to the backend
     *
     * @method authenticateRequest
     * @param request {Request}
     * @param done {function}
     */
    SessionAuthAgent.prototype.authenticateRequest = function(request, done) {

        request.headers["X-CSRF-Token"] = this.csrfToken;

        done(false, request);

    }

    /**
     * Log out workflow
     * Kills currently active session and resets sessionStorage params (sessionId, CSRFToken)
     *
     * @method logOut
     * @param done {function}
     */
    SessionAuthAgent.prototype.logOut = function(done) {

        var userService = this.CAPI.getUserService();
        var that = this;

        userService.deleteSession(
            this.sessionId,
            function(error, response){
                if (!error){

                    that.sessionName = null;
                    that.sessionId = null;
                    that.csrfToken = null;

                    sessionStorage.removeItem('ezpRestClient.sessionName');
                    sessionStorage.removeItem('ezpRestClient.sessionId');
                    sessionStorage.removeItem('ezpRestClient.csrfToken');

                    done(false, true);

                } else {
                    done(true, false);
                }
            }
        );
    }



    return SessionAuthAgent;

}());;var ConnectionFeatureFactory = (function() {
    "use strict";

    /**
     * Creates an instance of connection feature factory
     *
     * @constructor
     * @param connectionList {array} Array of connections, should be filled-in in preferred order
     */
    var ConnectionFeatureFactory = function(connectionList) {

        this.connectionList = connectionList;

        this.defaultFactory = function(Connection) {
            return new Connection();
        };

    };

    /**
     * Returns instance of the very first compatible connection from the list
     *
     * @method createConnection
     * @return  {Connection}
     */
    ConnectionFeatureFactory.prototype.createConnection = function(){
        var connection = null;

        // Choosing and creating first compatible connection from connection list
        for (var index = 0; index < this.connectionList.length; ++index) {

            if (this.connectionList[index].connection.isCompatible()) {

                if (this.connectionList[index].factory){
                    connection = this.connectionList[index].factory(this.connectionList[index].connection);
                } else {
                    connection = this.defaultFactory(this.connectionList[index].connection);
                }
                break;

            }
        }

        return connection;
    };


    return ConnectionFeatureFactory;

}());;var ConnectionManager = (function() {
    "use strict";

    /**
     * Creates an instance of connection manager object
     *
     * @constructor
     * @param endPointUrl {string} url to REST root
     * @param authenticationAgent {object} literal object used to maintain authentication to REST server
     */
    var ConnectionManager = function(endPointUrl, authenticationAgent, connectionFactory) {

        this.endPointUrl_ = endPointUrl;
        this.authenticationAgent_ = authenticationAgent;

        this.activeConnection_ = connectionFactory.createConnection();

        this.logRequests = false;

    };

    /**
     * Basic request function
     *
     * @method request
     * @param method {string} request method ("POST", "GET" etc)
     * @param url {string} requested REST resource
     * @param body {JSON}
     * @param headers {object}
     * @param callback {function} function, which will be executed on request success
     */
    ConnectionManager.prototype.request = function(method, url, body, headers, callback) {

        var that = this;

        // default values for all the parameters
        method = (typeof method === "undefined") ? "GET" : method;
        url = (typeof url === "undefined") ? "/" : url;
        body = (typeof body === "undefined") ? "" : body;
        headers = (typeof headers === "undefined") ? {} : headers;
        callback = (typeof callback === "undefined") ? function(){} : callback;

        var request = new Request({
            method : method,
            url : this.endPointUrl_ + url,
            body : body,
            headers : headers
        });

        // Check if we are already authenticated, make it happen if not
        this.authenticationAgent_.ensureAuthentication(
            function(error, success){
                // TODO: Suspend Requests during initial authentication
                // TODO: errors handling

                that.authenticationAgent_.authenticateRequest(
                    request,
                    function(error, authenticatedRequest) {
                        if (!error) {

                            if (that.logRequests) {
                                console.log(request);
                            }
                            // Main goal
                            that.activeConnection_.execute(authenticatedRequest, callback);
                        } else {
                            callback(
                                new Error({
                                    errorText : "An error occured during request authentication!"
                                }),
                                new Response({
                                    status : "error",
                                    body : ""
                                })
                            );
                        }
                    }
                );

            }
        );
    };


    /**
     * Not authorized request function
     * Used mainly for initial requests (e.g. createSession)
     *
     * @method notAuthorizedRequest
     * @param method {string} request method ("POST", "GET" etc)
     * @param url {string} requested REST resource
     * @param body {JSON}
     * @param headers {object}
     * @param callback {function} function, which will be executed on request success
     */
    ConnectionManager.prototype.notAuthorizedRequest = function(method, url, body, headers, callback) {

        // default values for all the parameters
        method = (typeof method === "undefined") ? "GET" : method;
        url = (typeof url === "undefined") ? "/" : url;
        body = (typeof body === "undefined") ? "" : body;
        headers = (typeof headers === "undefined") ? {} : headers;
        callback = (typeof callback === "undefined") ? function(){} : callback;

        var request = new Request({
            method : method,
            url : this.endPointUrl_ + url,
            body : body,
            headers : headers
        });

        if (this.logRequests) {
            console.log(request);
        }

        // Main goal
        this.activeConnection_.execute(request, callback);

    };



    /**
     * Delete - shortcut which handles simple deletion requests in most cases
     *
     * @method delete
     * @param url
     * @param callback
     */
    ConnectionManager.prototype.delete = function(url, callback) {

        var that = this;

        // default values for all the parameters
        url = (typeof url === "undefined") ? "/" : url;
        callback = (typeof callback === "undefined") ? function(){} : callback;

        var request = new Request({
            method : "DELETE",
            url : this.endPointUrl_ + url,
            body : "",
            headers : {}
        });

        this.authenticationAgent_.authenticateRequest(
            request,
            function(error, authenticatedRequest) {
                if (!error) {

                    if (that.logRequests) {
                        console.log(request);
                    }
                    // Main goal
                    that.activeConnection_.execute(authenticatedRequest, callback);
                } else {
                    callback(
                        new Error({
                            errorText : "An error occured during request authentication!"
                        }),
                        new Response({
                            status : "error",
                            body : ""
                        })
                    );
                }
            }
        );


    };

    /**
     * logOut - logout workflow
     * Kills currently active session and resets localStorage params (sessionId, CSRFToken)
     *
     * @method logOut
     * @param callback {function}
     */
    ConnectionManager.prototype.logOut = function(callback) {

        this.authenticationAgent_.logOut(callback);

    }



    return ConnectionManager;

}());;var CAPI = (function() {
    "use strict";

    /**
     * Creates an instance of CAPI object
     *
     * @constructor
     * @param endPointUrl {string} url to REST root
     * @param authenticationAgent {object} literal object used to maintain authentication to REST server
     * @param connectionType {string} string related to one of the special connection objects used to implement exact technique ("XHR", "JSONP" etc.)
     */
    var CAPI = function (endPointUrl, authenticationAgent) {

        this.contentService_ = null;
        this.userService_ = null;

        authenticationAgent.CAPI = this;
        // No other way to use session authorization... or is it?

        // Array of connections, should be filled-in in preferred order
        //TODO: consider moving to some sort of configuration file...
        var connectionStack = [
            {
                connection: XmlHttpRequestConnection
            },
            {
                connection: MicrosoftXmlHttpRequestConnection
            }
        ];
        var connectionFactory = new ConnectionFeatureFactory(connectionStack);

        var connectionManager = new ConnectionManager(endPointUrl, authenticationAgent, connectionFactory);

        //TODO: move logRequests to the same config file as above...
        connectionManager.logRequests = true;

        //TODO: move hardcoded rootPath to the same config file as above...
        var discoveryService = new DiscoveryService('/api/ezp/v2/', connectionManager)

        /**
         * Get instance of Content Service
         *
         * @method getContentService
         * @return {ContentService}
         */
        this.getContentService = function getContentService(){
            if  (!this.contentService_)  {
                this.contentService_  =  new ContentService(
                    connectionManager,
                    discoveryService
                );
            }
            return  this.contentService_;
        };

        /**
         * Get instance of Content Type Service
         *
         * @method getContentTypeService
         * @return {ContentTypeService}
         */
        this.getContentTypeService = function getContentTypeService(){
            if  (!this.contentTypeService_)  {
                this.contentTypeService_  =  new ContentTypeService(
                    connectionManager,
                    discoveryService
                );
            }
            return  this.contentTypeService_;
        };

        /**
         * Get instance of User Service
         *
         * @method getUserService
         * @return {UserService}
         */
        this.getUserService = function getUserService(){
            if  (!this.userService_)  {
                this.userService_  =  new UserService(
                    connectionManager,
                    discoveryService
                );
            }
            return  this.userService_;
        };

    };

    return CAPI;

}());