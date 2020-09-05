#  MovieFinder
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

I developed this mobile application in **react-native** just for learning purpose back in **2018** and released in google play store.
So far, this source code was stored as private in bitbucket but thought to make it **open source** to all, so creating this public repository.
Thought I am not actively working in this repo.

#SharingAndLearning

## QR code to install this app
![MovieFinderPlayStoreLink](https://user-images.githubusercontent.com/6744343/92301398-3b201780-ef81-11ea-8cdd-4be5932fd198.png)

## Play store location
* You can find this app in playstore here [MovieFinder](https://play.google.com/store/apps/details?id=com.moviefinder)

## App Images
<img width="360" alt="Screenshot 2020-09-05 at 1 06 56 PM" src="https://user-images.githubusercontent.com/6744343/92300745-f1343300-ef7a-11ea-92e5-2eb0d13d8caa.png"> <img width="361" alt="Screenshot 2020-09-05 at 1 07 11 PM" src="https://user-images.githubusercontent.com/6744343/92300746-f6917d80-ef7a-11ea-9c3e-17d646424888.png"><img width="359" alt="Screenshot 2020-09-05 at 1 07 23 PM" src="https://user-images.githubusercontent.com/6744343/92300747-f7c2aa80-ef7a-11ea-813b-b1bec5611047.png"><img width="361" alt="Screenshot 2020-09-05 at 1 07 31 PM" src="https://user-images.githubusercontent.com/6744343/92300750-01e4a900-ef7b-11ea-94aa-ff1aeb23621b.png"><img width="360" alt="Screenshot 2020-09-05 at 1 07 40 PM" src="https://user-images.githubusercontent.com/6744343/92300752-04470300-ef7b-11ea-8c7d-2772bb81b2eb.png"><img width="359" alt="Screenshot 2020-09-05 at 1 07 50 PM" src="https://user-images.githubusercontent.com/6744343/92300754-05783000-ef7b-11ea-99ba-361ec5ca7e83.png"><img width="363" alt="Screenshot 2020-09-05 at 1 08 18 PM" src="https://user-images.githubusercontent.com/6744343/92300756-06a95d00-ef7b-11ea-81e5-5dfd3c4ed4d7.png">



## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `yarn` or `npm i`


## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`


## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

### Get started:
1. Copy .env.example to .env
2. Add your config variables
3. Follow instructions at [https://github.com/luggit/react-native-config#setup](https://github.com/luggit/react-native-config#setup)
4. Done!

### Android apk build process.
1. At project root label run the following command 
react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug

2. cd android

3. ./gradlew assembleRelease

apk file will present a this location /Users/dhruva/PERSONEL/PROJECT/GitHub/MovieFinder/android/app/build/outputs/apk/app-debug.apk

### Clean android project
./gradlew clean

### Clean xcode project
xcodebuild clean
