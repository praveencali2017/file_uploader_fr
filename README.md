# File Uploader

## Note:
Please run npm install and pip install requirements.txt to install dependencies, without docker

## How to integrate react app to flask app
1. Run npm run eject to generate config.
2. Replace/Add values in path.js (appBuild: resolveApp('build-path ex: ../uploader_back_end/static/react') and webpack.config.js
(HtmlWebpackPlugin- add filename:"path to index.html", replace all static/ with "").
3. Run npm run build.
4. Necessary files is built and pushed to build path along with index.html in templates dir.

## How to run app
1. Run python controller.py

## About App

1. HOST is configured based on Docker usage in Windows, please change accordingly based on the OS (most of the cases it will be localhost).
2. The *.csv file should have Key, Value as the column names.
