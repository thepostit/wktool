import { app, BrowserWindow } from 'electron';
import { fetchAssignments, fetchReviews, fetchStudyMaterials, fetchSubjects } from './requests.ts';

const token = "0d475dc9-36ea-4cef-ad3a-30f5ddb37a6a";

function createWindow() {
  const win = new BrowserWindow();
  win.loadFile('index.html');
  fetchSubjects(token, [500,600])
    .then((res) => res.json())
    .then((body) => console.dir(body, { depth: null }));
}

app.whenReady().then(createWindow);
