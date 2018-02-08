http://bitstopixels.blogspot.in/2017/05/installing-react-native-unsigned-debug.html

react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug

cd android
./gradlew assembleDebug

After this you should be able to find two APK files in the android/app/build/outputs/apk folder:
