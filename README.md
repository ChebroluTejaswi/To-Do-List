# To-Do-List
A dynamic and visually appealing To-Do List Website created with Express, EJS and MongoDB.

It's a beautiful and functional to do list. As an intermediate web developer, it was bit challenging for me to create these features, but I learned a lot from this project.

## Built with 🛠️
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"></code>
<code><img height="30" src="https://github.com/tomchen/stack-icons/raw/master/logos/bootstrap.svg"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png"></code>

## Features
<b>Add Task:</b> A task, along with its priority, can be added to the list of To-Do Tasks. Grey is for low, yellow is for medium, and red is for high.<br>
<b>Strike Task:</b> When a task is completed, it can be marked as completed by clicking the checkbox that strikes off the task.<br>
<b>Delete Task:</b> By clicking on the delete icon, tasks can be removed permanently from the database.<br>
<b>Score:</b> The score will be calculated and dynamically displayed to the user based on the priority of the task.<br>
<b>Filter:</b> We can also filter our tasks based on priority by selecting it from the menu.<br>

## Pre-requisites
The data will be stored in Mongo DB (local storage/ Cloud Atlas).<br>
If you want to use local storage then you must first install MongoDB Shell on your laptop/computer before proceeding. The Mongo server should be running while this app is running.<br>
If you want to use cloud service of mongodb, then create an account in atlas and create a cluster.

## Installation
This repository can be downloaded as a zip file or cloned. Launch it in your preferred editor (my choice: VS Code). Proceed to the terminal and follow the steps outlined below.

> To initialize node
```shell
npm init
```
> To install required modules
```shell
npm install express ejs body-parser mongoose
```
> Adding Database link (in .env file)
```shell
DATABASE=<link>
```
> Run the app.py file
```shell
node app.js
```
<b>Open the link in browser</b>
host:localhost port:3000 (http://localhost:3000/)

## Usage
You can use this repository for further developing it and adding your work in it.

## Contact 📞
If you have any doubt feel free to email me or hit me up on LinkedIn