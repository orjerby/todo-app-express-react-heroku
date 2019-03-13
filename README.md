### Instructions

npm install in every folder there is package.json.

make sure to set MONGODB_URL and JWT_SECRET to heroku configs:  
heroku config:set MONGODB_URL=...  
heroku config:set JWT_SECRET=...

run locally:  
npm run dev

deploy:  
git init
add .gitignore with node_modules and config
git add .
git commit -m "Initial commit"
heroku create [name of app]
git push heroku master

### Info

heroku will only install dependencies in the root so make sure to include all the server dependencies in the root package.json.

react dependencies should not be in the root package.json because we will tell heroku to npm install and build react's folder right after the deploy, by adding the script:  
"heroku-postbuild": "cd client && npm install && npm run build"

nested packages(.json) know about outer packages(.json) so no need to include dependencies to nested one's if you already have them in the other one's.

make sure when you deploy to use the current versions of the dependencies by removing the '^' so the app will stay stable
you can even auto do it beforehand by changing the defaults for npm:  
npm config set save=true
npm config set save-exact=true
