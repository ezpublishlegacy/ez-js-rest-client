/* global define, describe, it, expect, beforeEach, jasmine, spyOn */
define(function (require) {

    // Declaring dependencies
    var ContentTypeService = require("services/ContentTypeService"),
        DiscoveryService = require("services/DiscoveryService"),
        CAPIError = require("structures/CAPIError"),

        ContentTypeGroupInputStruct = require("structures/ContentTypeGroupInputStruct"),
        ContentTypeCreateStruct = require("structures/ContentTypeCreateStruct"),
        ContentTypeUpdateStruct = require("structures/ContentTypeUpdateStruct"),
        FieldDefinitionCreateStruct = require("structures/FieldDefinitionCreateStruct"),
        FieldDefinitionUpdateStruct = require("structures/FieldDefinitionUpdateStruct");

    describe("ContentType Service", function () {

        var mockConnectionManager,
            mockDiscoveryService,
            mockFaultyDiscoveryService,
            mockCallback,
            contentTypeService,
            discoveryService,
            testContentTypeGroups = "/api/ezp/v2/content/typegroups",
            testContentTypeGroupId = "/api/ezp/v2/content/typegroups/1",
            testContentTypeGroupTypes = "/api/ezp/v2/content/typegroups/1/types",
            testContentTypeGroupIdentifier = "Media",
            testContentTypeId = "/api/ezp/v2/content/types/18",
            testContentTypes = "/api/ezp/v2/content/types",
            testContentTypeByIdentifierTemplate = "/api/ezp/v2/content/types{?identifier}",
            testContentTypeIdentifier = "blog_post",
            testContentTypeAssignedGroupId = "/api/ezp/v2/content/types/101/groups/1",
            testContentTypeDraftId = "/api/ezp/v2/content/types/18/draft",
            testContentTypeDraftFieldDefinitions = "/api/ezp/v2/content/types/18/draft/fieldDefinitions",
            testFieldDefintionId = "/api/ezp/v2/content/types/42/fieldDefinitions/311",
            testTrue = true,
            testFalse = false,
            testStructure,
            testLanguage = "eng_US",
            testArray = ["one", "two", "three"],
            testFieldDefintionType = "ezstring",
            testFieldDefintionGroup = "content";


        beforeEach(function (){

            mockConnectionManager = jasmine.createSpyObj('mockConnectionManager', ['request']);
            mockCallback = jasmine.createSpy('mockCallback');

        });


    // ******************************
    // Cases without errors
    // ******************************
        describe("is calling injected objects with right arguments while performing", function () {

            // ******************************
            // Faked internal service calls
            // ******************************
            var fakedLoadContentTypeGroup = function(ContentTypeGroupId, callback){
                    var mockContentTypeGroupResponse = {};
                    mockContentTypeGroupResponse.document = {
                        "ContentTypeGroup" : {
                            "_href" : testContentTypeGroupId,
                            "_media-type" : "application/vnd.ez.api.ContentTypeGroup+json",
                            ContentTypes : {
                                "_href" : testContentTypeGroupTypes,
                                "_media-type" : "application/vnd.ez.api.ContentTypeInfoList+json"
                            }
                        }
                    };
                    callback(false, mockContentTypeGroupResponse);
                },
                fakedLoadContentTypeDraft = function(ContentTypeId, callback){
                    var mockContentTypeDraftResponse = {};
                    mockContentTypeDraftResponse.document = {
                        "ContentType" : {
                            "_href" : testContentTypeId,
                            "_media-type" : "application/vnd.ez.api.ContentType+json",
                            FieldDefinitions : {
                                "_href" : testContentTypeDraftFieldDefinitions,
                                "_media-type" : "application/vnd.ez.api.FieldDefinitionList+json"
                            }
                        }
                    };
                    callback(false, mockContentTypeDraftResponse);
                };

            // ******************************
            // beforeEach for positive cases
            // ******************************
            beforeEach(function (){

                mockDiscoveryService = {
                    getInfoObject : function(name, callback){

                        if (name === "contentTypeByIdentifier") {
                            callback(false, {"_href" : testContentTypeByIdentifierTemplate});
                        } else if (name === 'contentTypeGroups') {
                            callback(false, {"_href": testContentTypeGroups});
                        }
                    }
                };

                spyOn(mockDiscoveryService, 'getInfoObject').andCallThrough();

                contentTypeService = new ContentTypeService(mockConnectionManager, mockDiscoveryService);

            });

            // ******************************
            // Content Type groups Management
            // ******************************
            it("createContentTypeGroup", function () {

                var contentTypeGroupCreateStruct = contentTypeService.newContentTypeGroupInputStruct(
                    "some-group-id"
                );

                contentTypeService.createContentTypeGroup(
                    testContentTypeGroups,
                    contentTypeGroupCreateStruct,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "POST",
                    testContentTypeGroups,
                    JSON.stringify(contentTypeGroupCreateStruct.body),
                    contentTypeGroupCreateStruct.headers,
                    mockCallback
                );
            });

            it("loadContentTypeGroups", function () {
                contentTypeService.loadContentTypeGroups(
                    mockCallback
                );

                expect(mockDiscoveryService.getInfoObject).toHaveBeenCalledWith(
                    'contentTypeGroups',
                    jasmine.any(Function)
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "GET",
                    testContentTypeGroups,
                    "",
                    {Accept: "application/vnd.ez.api.ContentTypeGroupList+json"},
                    mockCallback
                );
            });

            it("loadContentTypeGroups should allow to overwrite Accept header", function () {
                contentTypeService.loadContentTypeGroups(
                    'application/vnd.acme.ContentTypeGroupList+json',
                    mockCallback
                );

                expect(mockDiscoveryService.getInfoObject).toHaveBeenCalledWith(
                    'contentTypeGroups',
                    jasmine.any(Function)
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "GET",
                    testContentTypeGroups,
                    "",
                    {Accept: "application/vnd.acme.ContentTypeGroupList+json"},
                    mockCallback
                );
            });

            it("loadContentTypeGroup", function () {
                contentTypeService.loadContentTypeGroup(
                    testContentTypeGroupId,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "GET",
                    testContentTypeGroupId,
                    "",
                    {Accept: "application/vnd.ez.api.ContentTypeGroup+json"},
                    mockCallback
                );
            });

            it("loadContentTypeGroup should allow to overwrite Accept header", function () {
                contentTypeService.loadContentTypeGroup(
                    testContentTypeGroupId,
                    "application/vnd.ez.acme.ContentTypeGroup+json",
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "GET",
                    testContentTypeGroupId,
                    "",
                    {Accept: "application/vnd.ez.acme.ContentTypeGroup+json"},
                    mockCallback
                );
            });

            it("loadContentTypeGroupByIdentifier", function () {
                contentTypeService.loadContentTypeGroupByIdentifier(
                    testContentTypeGroups,
                    testContentTypeGroupIdentifier,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "GET",
                    testContentTypeGroups + '?identifier=' + testContentTypeGroupIdentifier,
                    "",
                    {Accept: "application/vnd.ez.api.ContentTypeGroup+json"},
                    mockCallback
                );
            });

            it("loadContentTypeGroupByIdentifier should allow to overwrite Accept header", function () {
                contentTypeService.loadContentTypeGroupByIdentifier(
                    testContentTypeGroups,
                    testContentTypeGroupIdentifier,
                    "application/vnd.acme.ContentTypeGroup+json",
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "GET",
                    testContentTypeGroups + '?identifier=' + testContentTypeGroupIdentifier,
                    "",
                    {Accept: "application/vnd.acme.ContentTypeGroup+json"},
                    mockCallback
                );
            });

            it("updateContentTypeGroup", function () {

                var contentTypeGroupUpdateStruct = contentTypeService.newContentTypeGroupInputStruct(
                    "some-group-id"
                );

                contentTypeService.updateContentTypeGroup(
                    testContentTypeGroupId,
                    contentTypeGroupUpdateStruct,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "PATCH",
                    testContentTypeGroupId,
                    JSON.stringify(contentTypeGroupUpdateStruct.body),
                    contentTypeGroupUpdateStruct.headers,
                    mockCallback
                );
            });

            it("deleteContentTypeGroup", function () {
                contentTypeService.deleteContentTypeGroup(
                    testContentTypeGroupId,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "DELETE",
                    testContentTypeGroupId,
                    "",
                    {},
                    mockCallback
                );
            });

            it("loadContentTypes", function () {

                spyOn(contentTypeService, 'loadContentTypeGroup').andCallFake(fakedLoadContentTypeGroup);

                contentTypeService.loadContentTypes(
                    testContentTypeGroupId,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "GET",
                    testContentTypeGroupTypes,
                    "",
                    {Accept: "application/vnd.ez.api.ContentTypeInfoList+json"},
                    mockCallback
                );
            });

            it("loadContentTypes should allow to overwrite Accept header", function () {
                spyOn(contentTypeService, 'loadContentTypeGroup').andCallFake(fakedLoadContentTypeGroup);

                contentTypeService.loadContentTypes(
                    testContentTypeGroupId,
                    "application/vnd.acme.ContentTypeInfoList+json",
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "GET",
                    testContentTypeGroupTypes,
                    "",
                    {Accept: "application/vnd.acme.ContentTypeInfoList+json"},
                    mockCallback
                );
            });

            // ******************************
            // Content Type Management
            // ******************************
            it("createContentType (and publish)", function () {

                spyOn(contentTypeService, 'loadContentTypeGroup').andCallFake(fakedLoadContentTypeGroup);

                var contentTypeCreateStruct,
                    fieldDefinition;

                contentTypeCreateStruct = contentTypeService.newContentTypeCreateStruct(
                    "content-type-id",
                    "eng-US",
                    [
                        {
                            "_languageCode":"eng-US",
                            "#text":"Some Name"
                        }
                    ]
                );

                fieldDefinition = contentTypeService.newFieldDefinitionCreateStruct(
                    "fd-id",
                    "ezstring",
                    "content",
                    [
                        {
                            "_languageCode":"eng-US",
                            "#text":"Some FD Name"
                        }
                    ]
                );

                contentTypeCreateStruct.body.ContentTypeCreate.FieldDefinitions.FieldDefinition.push(fieldDefinition.body.FieldDefinitionCreate);

                contentTypeService.createContentType(
                    testContentTypeGroupId,
                    contentTypeCreateStruct,
                    testTrue,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "POST",
                    testContentTypeGroupTypes + "?publish=" + testTrue,
                    JSON.stringify(contentTypeCreateStruct.body),
                    contentTypeCreateStruct.headers,
                    mockCallback
                );
            });

            it("createContentType (and do not publish)", function () {

                spyOn(contentTypeService, 'loadContentTypeGroup').andCallFake(fakedLoadContentTypeGroup);

                var contentTypeCreateStruct,
                    fieldDefinition;

                contentTypeCreateStruct = contentTypeService.newContentTypeCreateStruct(
                    "content-type-id",
                    "eng-US",
                    [
                        {
                            "_languageCode":"eng-US",
                            "#text":"Some Name"
                        }
                    ]
                );

                fieldDefinition = contentTypeService.newFieldDefinitionCreateStruct(
                    "fd-id",
                    "ezstring",
                    "content",
                    [
                        {
                            "_languageCode":"eng-US",
                            "#text":"Some FD Name"
                        }
                    ]
                );

                contentTypeCreateStruct.body.ContentTypeCreate.FieldDefinitions.FieldDefinition.push(fieldDefinition.body.FieldDefinitionCreate);

                contentTypeService.createContentType(
                    testContentTypeGroupId,
                    contentTypeCreateStruct,
                    testFalse,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "POST",
                    testContentTypeGroupTypes,
                    JSON.stringify(contentTypeCreateStruct.body),
                    contentTypeCreateStruct.headers,
                    mockCallback
                );
            });

            it("copyContentType", function () {
                contentTypeService.copyContentType(
                    testContentTypeId,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "COPY",
                    testContentTypeId,
                    "",
                    {},
                    mockCallback
                );
            });

            it("loadContentType", function () {
                contentTypeService.loadContentType(
                    testContentTypeId,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "GET",
                    testContentTypeId,
                    "",
                    {Accept: "application/vnd.ez.api.ContentType+json"},
                    mockCallback
                );
            });

            it("loadContentType should allow to overwrite Accept header", function () {
                contentTypeService.loadContentType(
                    testContentTypeId,
                    "application/vnd.acme.ContentType+json",
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "GET",
                    testContentTypeId,
                    "",
                    {Accept: "application/vnd.acme.ContentType+json"},
                    mockCallback
                );
            });

            it("loadContentTypeByIdentifier", function () {
                contentTypeService.loadContentTypeByIdentifier(
                    testContentTypeIdentifier,
                    mockCallback
                );

                expect(mockDiscoveryService.getInfoObject).toHaveBeenCalledWith(
                    "contentTypeByIdentifier",
                    jasmine.any(Function)
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "GET",
                    testContentTypes + "?identifier=" + testContentTypeIdentifier,
                    "",
                    {Accept: "application/vnd.ez.api.ContentTypeInfoList+json"},
                    mockCallback
                );
            });

            it("loadContentTypeByIdentifier should allow to overwrite Accept header", function () {
                contentTypeService.loadContentTypeByIdentifier(
                    testContentTypeIdentifier,
                    "application/vnd.acme.ContentTypeInfoList+json",
                    mockCallback
                );

                expect(mockDiscoveryService.getInfoObject).toHaveBeenCalledWith(
                    "contentTypeByIdentifier",
                    jasmine.any(Function)
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "GET",
                    testContentTypes + "?identifier=" + testContentTypeIdentifier,
                    "",
                    {Accept: "application/vnd.acme.ContentTypeInfoList+json"},
                    mockCallback
                );
            });

            it("deleteContentType", function () {
                contentTypeService.deleteContentType(
                    testContentTypeId,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "DELETE",
                    testContentTypeId,
                    "",
                    {},
                    mockCallback
                );
            });

            it("loadGroupsOfContentType", function () {
                contentTypeService.loadGroupsOfContentType(
                    testContentTypeId,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "GET",
                    testContentTypeId + "/groups",
                    "",
                    {Accept: "application/vnd.ez.api.ContentTypeGroupRefList+json"},
                    mockCallback
                );
            });

            it("loadGroupsOfContentType", function () {
                contentTypeService.loadGroupsOfContentType(
                    testContentTypeId,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "GET",
                    testContentTypeId + "/groups",
                    "",
                    {Accept: "application/vnd.ez.api.ContentTypeGroupRefList+json"},
                    mockCallback
                );
            });

            it("assignContentTypeGroup", function () {
                contentTypeService.assignContentTypeGroup(
                    testContentTypeId,
                    testContentTypeGroupId,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "POST",
                    testContentTypeId + "/groups" + "?group=" + testContentTypeGroupId,
                    "",
                    {},
                    mockCallback
                );
            });

            it("unassignContentTypeGroup", function () {
                contentTypeService.unassignContentTypeGroup(
                    testContentTypeAssignedGroupId,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "DELETE",
                    testContentTypeAssignedGroupId,
                    "",
                    {},
                    mockCallback
                );
            });

            // ******************************
            // Drafts Management
            // ******************************
            it("createContentTypeDraft", function () {

                var contentTypeUpdateStruct = contentTypeService.newContentTypeUpdateStruct();

                contentTypeUpdateStruct.names = {};
                contentTypeUpdateStruct.names.value = [
                    {
                        "_languageCode":"eng-US",
                        "#text":"Some new FD Name"
                    }
                ];

                contentTypeService.createContentTypeDraft(
                    testContentTypeId,
                    contentTypeUpdateStruct,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "POST",
                    testContentTypeId,
                    JSON.stringify(contentTypeUpdateStruct.body),
                    contentTypeUpdateStruct.headers,
                    mockCallback
                );
            });

            it("loadContentTypeDraft", function () {
                contentTypeService.loadContentTypeDraft(
                    testContentTypeId,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "GET",
                    testContentTypeId + "/draft",
                    "",
                    {Accept: "application/vnd.ez.api.ContentType+json"},
                    mockCallback
                );
            });

            it("loadContentTypeDraft should allow to overwrite Accept header", function () {
                contentTypeService.loadContentTypeDraft(
                    testContentTypeId,
                    "application/vnd.acme.ContentType+json",
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "GET",
                    testContentTypeId + "/draft",
                    "",
                    {Accept: "application/vnd.acme.ContentType+json"},
                    mockCallback
                );
            });

            it("updateContentTypeDraftMetadata", function () {

                var contentTypeUpdateStruct = contentTypeService.newContentTypeUpdateStruct();

                contentTypeUpdateStruct.names = {};
                contentTypeUpdateStruct.names.value = [
                    {
                        "_languageCode":"eng-US",
                        "#text":"Some new FD Name"
                    }
                ];

                contentTypeService.updateContentTypeDraftMetadata(
                    testContentTypeDraftId,
                    contentTypeUpdateStruct,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "PATCH",
                    testContentTypeDraftId,
                    JSON.stringify(contentTypeUpdateStruct.body),
                    contentTypeUpdateStruct.headers,
                    mockCallback
                );
            });

            it("publishContentTypeDraft", function () {
                contentTypeService.publishContentTypeDraft(
                    testContentTypeDraftId,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "PUBLISH",
                    testContentTypeDraftId,
                    "",
                    {},
                    mockCallback
                );
            });

            it("deleteContentTypeDraft", function () {
                contentTypeService.deleteContentTypeDraft(
                    testContentTypeDraftId,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "DELETE",
                    testContentTypeDraftId,
                    "",
                    {},
                    mockCallback
                );
            });

            // ******************************
            // Fields Definition Management
            // ******************************

            it("addFieldDefinition", function () {

                spyOn(contentTypeService, 'loadContentTypeDraft').andCallFake(fakedLoadContentTypeDraft);

                var fieldDefinitionCreateStruct = contentTypeService.newFieldDefinitionCreateStruct(
                    "fd-id",
                    "ezstring",
                    "content",
                    [
                        {
                            "_languageCode":"eng-US",
                            "#text":"Some FD Name"
                        }
                    ]
                );

                contentTypeService.addFieldDefinition(
                    testContentTypeId,
                    fieldDefinitionCreateStruct,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "POST",
                    testContentTypeDraftFieldDefinitions,
                    JSON.stringify(fieldDefinitionCreateStruct.body),
                    fieldDefinitionCreateStruct.headers,
                    mockCallback
                );
            });

            it("loadFieldDefinition", function () {
                contentTypeService.loadFieldDefinition(
                    testFieldDefintionId,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "GET",
                    testFieldDefintionId,
                    "",
                    {Accept: "application/vnd.ez.api.FieldDefinition+json"},
                    mockCallback
                );
            });

            it("loadFieldDefinition should allow to overwrite Accept header", function () {
                contentTypeService.loadFieldDefinition(
                    testFieldDefintionId,
                    "application/vnd.acme.FieldDefinition+json",
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "GET",
                    testFieldDefintionId,
                    "",
                    {Accept: "application/vnd.acme.FieldDefinition+json"},
                    mockCallback
                );
            });

            it("updateFieldDefinition", function () {

                var fieldDefinitionUpdateStruct = contentTypeService.newFieldDefinitionUpdateStruct(
                    "dummy",
                    "dummy",
                    "dummy",
                    "dummy"
                );

                contentTypeService.updateFieldDefinition(
                    testFieldDefintionId,
                    fieldDefinitionUpdateStruct,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "PATCH",
                    testFieldDefintionId,
                    JSON.stringify(fieldDefinitionUpdateStruct.body),
                    fieldDefinitionUpdateStruct.headers,
                    mockCallback
                );
            });

            it("deleteFieldDefinition", function () {
                contentTypeService.deleteFieldDefinition(
                    testFieldDefintionId,
                    mockCallback
                );

                expect(mockConnectionManager.request).toHaveBeenCalledWith(
                    "DELETE",
                    testFieldDefintionId,
                    "",
                    {},
                    mockCallback
                );
            });

            // ******************************
            // Structures
            // ******************************
            describe("structures creation", function () {

                it("newContentTypeGroupInputStruct", function (){

                    testStructure = contentTypeService.newContentTypeGroupInputStruct(
                        testContentTypeGroupIdentifier
                    );

                    expect(testStructure).toEqual(jasmine.any(ContentTypeGroupInputStruct));
                    expect(testStructure.body.ContentTypeGroupInput.identifier).toEqual(testContentTypeGroupIdentifier);
                });

                it("newContentTypeCreateStruct", function (){

                    testStructure = contentTypeService.newContentTypeCreateStruct(
                        testContentTypeIdentifier,
                        testLanguage,
                        testArray
                    );

                    expect(testStructure).toEqual(jasmine.any(ContentTypeCreateStruct));
                    expect(testStructure.body.ContentTypeCreate.identifier).toEqual(testContentTypeIdentifier);
                    expect(testStructure.body.ContentTypeCreate.mainLanguageCode).toEqual(testLanguage);
                    expect(testStructure.body.ContentTypeCreate.names.value).toEqual(testArray);
                });

                it("newContentTypeUpdateStruct", function (){

                    testStructure = contentTypeService.newContentTypeUpdateStruct();

                    expect(testStructure).toEqual(jasmine.any(ContentTypeUpdateStruct));
                });

                it("newFieldDefinitionCreateStruct", function (){

                    testStructure = contentTypeService.newFieldDefinitionCreateStruct(
                        testContentTypeIdentifier,
                        testFieldDefintionType,
                        testFieldDefintionGroup,
                        testArray
                    );

                    expect(testStructure).toEqual(jasmine.any(FieldDefinitionCreateStruct));
                    expect(testStructure.body.FieldDefinitionCreate.identifier).toEqual(testContentTypeIdentifier);
                    expect(testStructure.body.FieldDefinitionCreate.fieldType).toEqual(testFieldDefintionType);
                    expect(testStructure.body.FieldDefinitionCreate.fieldGroup).toEqual(testFieldDefintionGroup);
                    expect(testStructure.body.FieldDefinitionCreate.names.value).toEqual(testArray);
                });

                it("newFieldDefinitionUpdateStruct", function (){

                    testStructure = contentTypeService.newFieldDefinitionUpdateStruct();

                    expect(testStructure).toEqual(jasmine.any(FieldDefinitionUpdateStruct));
                });

            });

        });

    // ******************************
    // Cases with errors
    // ******************************

        describe("is returning errors correctly, while", function (){

            // ******************************
            // Faked faulty internal service calls
            // ******************************
            var loadTypeErrorResponse = {'status': 401},
                loadTupeDraftErrorResponse = {'status': 403},
                fakedFaultyLoadContentTypeGroup = function(ContentTypeGroupId, callback){
                    callback(
                        new CAPIError("Content type service failed for some reason"),
                        loadTypeErrorResponse
                    );
                },
                fakedFaultyLoadContentTypeDraft = function(ContentTypeId, callback){
                    callback(
                        new CAPIError("Content type service failed for some reason"),
                        loadTupeDraftErrorResponse
                    );
                },
                errorResponse = {'status': 'timeout'};

            // ******************************
            // beforeEach for positive cases
            // ******************************
            beforeEach(function (){

                mockFaultyDiscoveryService = {
                    getInfoObject : function(name, callback){
                        callback(
                            new CAPIError("Discovery service failed for some reason"),
                            errorResponse
                        );
                    }
                };

                spyOn(mockFaultyDiscoveryService, 'getInfoObject').andCallThrough();

                contentTypeService = new ContentTypeService(mockConnectionManager, mockFaultyDiscoveryService);

            });

            it("running loadContentTypeByIdentifier call", function () {
                contentTypeService.loadContentTypeByIdentifier(
                    testContentTypeIdentifier,
                    mockCallback
                );

                expect(mockFaultyDiscoveryService.getInfoObject).toHaveBeenCalled();

                expect(mockCallback).toHaveBeenCalledWith(
                    jasmine.any(CAPIError), errorResponse
                );
            });

            it("running loadContentTypeGroups call", function () {
                contentTypeService.loadContentTypeGroups(
                    mockCallback
                );

                expect(mockFaultyDiscoveryService.getInfoObject).toHaveBeenCalled();
                expect(mockCallback).toHaveBeenCalledWith(jasmine.any(CAPIError));
            });

            describe("dealing with faulty inner calls and performing", function (){

                beforeEach(function (){
                    discoveryService = new DiscoveryService(
                        mockConnectionManager,
                        mockDiscoveryService
                    );
                });

                it("loadContentTypes", function () {

                    spyOn(contentTypeService, 'loadContentTypeGroup').andCallFake(fakedFaultyLoadContentTypeGroup);

                    contentTypeService.loadContentTypes(
                        testContentTypeGroupId,
                        mockCallback
                    );

                    expect(mockCallback).toHaveBeenCalledWith(
                        jasmine.any(CAPIError), loadTypeErrorResponse
                    );
                });

                it("createContentType", function () {

                    spyOn(contentTypeService, 'loadContentTypeGroup').andCallFake(fakedFaultyLoadContentTypeGroup);

                    var contentTypeCreateStruct,
                        fieldDefinition;

                    contentTypeCreateStruct = contentTypeService.newContentTypeCreateStruct(
                        "content-type-id",
                        "eng-US",
                        [
                            {
                                "_languageCode":"eng-US",
                                "#text":"Some Name"
                            }
                        ]
                    );

                    fieldDefinition = contentTypeService.newFieldDefinitionCreateStruct(
                        "fd-id",
                        "ezstring",
                        "content",
                        [
                            {
                                "_languageCode":"eng-US",
                                "#text":"Some FD Name"
                            }
                        ]
                    );

                    contentTypeCreateStruct.body.ContentTypeCreate.FieldDefinitions.FieldDefinition.push(fieldDefinition.body.FieldDefinitionCreate);

                    contentTypeService.createContentType(
                        testContentTypeGroupId,
                        contentTypeCreateStruct,
                        testTrue,
                        mockCallback
                    );

                    expect(mockCallback).toHaveBeenCalledWith(
                        jasmine.any(CAPIError), loadTypeErrorResponse
                    );
                });

                it("addFieldDefinition", function () {

                    spyOn(contentTypeService, 'loadContentTypeDraft').andCallFake(fakedFaultyLoadContentTypeDraft);

                    var fieldDefinitionCreateStruct = contentTypeService.newFieldDefinitionCreateStruct(
                        "fd-id",
                        "ezstring",
                        "content",
                        [
                            {
                                "_languageCode":"eng-US",
                                "#text":"Some FD Name"
                            }
                        ]
                    );

                    contentTypeService.addFieldDefinition(
                        testContentTypeId,
                        fieldDefinitionCreateStruct,
                        mockCallback
                    );

                    expect(mockCallback).toHaveBeenCalledWith(
                        jasmine.any(CAPIError), loadTupeDraftErrorResponse
                    );
                });

            });
        });

    });

});
