# PGB-API-Testing #
===============

** G11n API testing **

## 1. Purpose : ##
Testing API related to G11N

## 2. Environment : ##
Node js :http://nodejs.org/

Node js npm libary (easily to test api of Phonegap build) :

Source code: https://github.com/mwbrooks/phonegap-build-api-js

Blog article: http://log.michaelbrooks.ca/post/phonegap-build-api-for-node.js

**Recently** All phonegap-build's Docs and Sources directed to [http://github.com/phonegap](http://github.com/phonegap).

## 3.Test scope :
All possible user scenario by using api related to G11N

## 4.Source code: ##
assets	-- test file

api_list	-- all api we used

testapi_data.json	-- test data

testapi_data.xml -- test data , not used yet

testapi_main.js	-- main approach , contains login

testapi_newapp.js	-- test case of new app

testapi_signin_key.js -- test case of signin key

testapi_build.js -- test case of building apps

testapi_collaborator.js -- test case of adding and changing collaborators

testapi_configuration.js -- test case of changing title, version, package, and description

testapi_configxml.js -- test case of updating app with changed config.xml repo

testapi_editaccount.js -- test case of changing user's email address, username

testapi_settings.js -- test case of updating app with another .zip file

testapi_shareapp.js -- test case of downloading each platform application

testapi_token.js -- test case of authorizing with token

testapi_unlock.js -- test case of unlocking signing keys for different platform

wholeProc/testapi_wholeProcess.js -- main approach for the whole process part

wholeProc/testapi_for_Android.js -- test case for whole process of creating an app of Android

wholeProc/testapi_for_iOS.js -- test case for whole process of creating an app of iOS

wholeProc/testapi_for_BlackBerry.js -- test case for whole process of creating an app of BlackBerry

WindowsRelated/  -- test cases for testing using files of Windows' dir format 

util.js -- Utilities trying to get the latest app ID and its collaborators ID
