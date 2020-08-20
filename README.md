DevC Benin Jobs
--------
DevC Benin Jobs is a web application that helps to connect job seekers to potential employers and employers to job seekers



Technical Features
--------------------
Members of the job portal should be able to do the following. 

* Register/signup as a recruiter or a job seeker. 

* Recruiters should be able to post and close job openings and review applications. 

* Job seekers should be able to filter and search for jobs and gigs. 

* Job seekers should be able to get job recommendations based on their profile and interests. 

* Job seekers should be able to upload their CVs and have a compelling profile. 

* Have an admin panel with site analytics of both job seekers and recruiters. 

* Admins should also have a database of members signups. 

![Image](https://res.cloudinary.com/dkzeltrml/image/upload/v1597847579/Screenshot_117_n45rwo.png)

![Image2](https://res.cloudinary.com/dkzeltrml/image/upload/v1597848546/Screenshot_116_mzegkj.png)

![Signup/signin](https://res.cloudinary.com/dkzeltrml/image/upload/v1597848771/Screenshot_115_ocoey3.png)

![image](https://res.cloudinary.com/dkzeltrml/image/upload/v1597848953/Screenshot_114_lzkjfu.png)

You can check out the full design via this [link](https://www.figma.com/file/AAbNtPk8EFhndeMqWpxfvT/DevC-Jobs?node-id=3%3A694) 






Tech Stack
--------------------
* MongoDB
* Express
* React
* NodeJS


Installation
------------

[![NODE JS](http://img.shields.io/badge/NodeJS-required-teal.svg?logo=node.js)](https://nodejs.org/en/) [![NPM](http://img.shields.io/badge/npm-required-red.svg?logo=npm)](http://npmjs.com/)

To ensure optimal functionality, ensure to use Node.js versions 8.12.0 to 10.20.0

To get this project running locally on your machine follows the steps below in order:

1. fork this repo
2. clone the forked repo from your GitHub 
using the command `git clone https://github.com/username/DevC-benin-jobs.git` don't forget to replace the username in the URL

3. Checkout to the development branch

    ```shell
        git checkout development
    ```

4. Setting up the project locally.

    ```shell
    npm install
    or 
    yarn global add
    ```

5. Setting up the local database instance 
      
      You need to have a MongoDB atlas account to create local database.
      Check out [this link](https://www.youtube.com/watch?v=KKyag6t98g8) to setup MongoDB atlas.
      The mongodb URL should be pasted in `credential.js` files.



6. run this command to run on local

    ```shell
    nodemon server.js
    ```
    or
    ```shell
    node server.js
    ```

HURRAY! you have done it just start contributing to the project.

Now open your browser and type the link `http://localhost:3000` to continue viewing project.

Adding yarn support for the packages just type `yarn`in the cli and hit enter.

Setting Up Database
------------


[![MongoDB](http://img.shields.io/badge/Mongo-DB-green.svg?logo=mongodb)](https://www.mongodb.com/download-center/community)

Make sure you have MongoDB installed on your computer. If not get it here [MongoDB Community Server](https://www.mongodb.com/download-center/community)

## For Unix based OS
1. Open the terminal, locate the "scripts" folder and run the dbcreater.sh

    ```shell
    bash dbcreater.sh
    ```

Note: For windows user, run this command using [git bash](https://git-scm.com/download/win)

## For Windows Users
1. Navigate to the installation folder of MongoDB.

2. Open the bin folder

3. Run mongo.exe

## Contributions Best Practices

**Commits**
* Write clear meaningful git commit messages (Do read [this](http://chris.beams.io/posts/git-commit/)).
* Make sure your PR's description contains GitHub's special keyword references that automatically close the related issue when the PR is merged. (Check [this](https://github.com/blog/1506-closing-issues-via-pull-requests) for more info)
* When you make very very minor changes to a PR of yours (like for example fixing a failing Travis build or some small style corrections or minor changes requested by reviewers) make sure you squash your commits afterward so that you don't have an absurd number of commits for a very small fix. (Learn how to squash at [here](https://davidwalsh.name/squash-commits-git))
* When you're submitting a PR for a UI-related issue, it would be really awesome if you add a screenshot of your change or a link to a deployment where it can be tested out along with your PR. It makes it very easy for the reviewers and you'll also get reviews quicker.

## Community

[Facebook developer circle Benin](https://www.facebook.com/groups/DevCBenin)

