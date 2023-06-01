# GoJim

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Installation
**Prequisites**

Before using our website, make sure you have the following:
- A Replit account: If you have not made one yet, go to Replit's official website to create one: Replit Sign-Up
- All of the necessary software and hardware requirements

**Steps**
1. Log in to your Replit account and navigate to our project's repository: GoJim! Repository
2. Navigate to the 'Shell' feature on Replit and proceed to type in "git clone https://replit.com/@JackieCheng/GoJimWebsite-3" in the newly opened Terminal Prompt.
3. Once the project is downloaded, type "cd GoJimwWebsite" to access our repository from the Terminal.
4. Using Git commands, you can edit, navigate, and use all of the necessary files, pages, documentation, and templates that were created by our developers.

## Changing the Codebase on GitLab
1. Clone the repository
- Use "git clone <repository>"

2. Create a New Branch
- Use "cd <repository>"
- Then "git branch <branchName>"
- Finally, "git checkout <branchName>"

3. Make Changes

4. Commit and Push Changes
- First, "git add ."
- Next, "git commit -m "Short description of changes made"
- Finally, "git push origin <branchName>"

5. Create a Merge Request
- Click on "Merge Requests" tab
- Click on the "New merge request" button
- Select branch
- Write short description of merge request
- Click on "Submit merge request" to create the request

6. Review and Merge

## Dependencies and Integrations
1. Dependencies
- Three.js: A Javascript library for making 3D models.

2. Integrations 
- Firebase Authentication: User authentication is handled through Firebase Authentication. Users can sign up, log in, and manage their accounts using Firebase services. Refer to the documentation for setting up Firebase and configuring authentication methods.

## Deployment
1. Hosting Platform
- Heroku

2. Configuration
- Configuring environment variables for sensitive information (e.g., API keys, database credentials)
- Specifying the deployment target (e.g., production, staging)
- Configuring custom domains or SSL certificates, if applicable

3. Build and Deployment Process

4. Deployment Instructions
- Log in to your Heroku account and create a new app.
- Connect your app to your Gitlab repository.
- Configure the deployment options (e.g., automatic deployments on every push).
- Trigger a manual deployment or wait for the automated deployment process to start.

## Testing
1. User Interface (UI) Testing
Manual testing: Test the website manually by interacting with different features, forms, buttons, and links. Pay attention to responsiveness, layout, and usability across different devices and browsers.
Automated testing: Use tools like Selenium to automate UI testing. Write test scripts to simulate user actions and verify expected outcomes.
2. Integration testing:
- Checking the integration between front-end and back-end components
- Testing database connections and data retrieval
