# Full Stack Note Taking Application

## Deployed Vercel Link: 
https://develop-proj-f432tny2o-khadija-siddiquis-projects.vercel.app/ 

Note - this link's vercel root file was the frontend 

if not connected to the backend using steps provided under section "Steps to Run the Application" then:
- you will only see the notes provided in the notes.js file from the frontend folder
- you will not be able to delete the notes 
- when you edit a note it will not update
- you will not be able to add additional notes

However, if connected to the backend:
- you will not see the notes from notes.js file from the frontend folder
- and the functionalities of the app are as follows in the next section

## Description of Note-Taking App Functionalities 

### Adding a Note
- When adding a note, you will receive a reminder if you fail to provide either the title or content.
- When connected to the backend, the added note will be stored in the database and remain available even after refreshing.

### Deleting a Note
- When you delete a note, it will no longer be visible to users on the frontend.
- When connected to the backend, the note will also be removed from the database.

### Editing a Note
- You can edit either the title, content, or both and save your changes by clicking the "Save" button.
- When connected to the backend, the note will be updated to reflect the edited version.



## Steps to Run the Application

### Backend
Move to the backend directory
```
cd backend
```
Create a .env file and add MONGO_DB_URI to the file
```
touch .env
```
Install all the dependencies
```
npm install
```
Run the backend Node.js server
```
npm run start
```

### Frontend
Move to the frontend directory
```
cd frontend
```
Install all the dependencies
```
npm install
```
Run the React Server
```
npm run start
```


