# GoJim

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

## Deployment Instructions for Heroku:

1. Log in to your Heroku account: If you don't have an account, sign up at https://www.heroku.com/ and create a new account.

2. Create a new app: Once you're logged in, click on the "New" button and select "Create new app". Give your app a unique name and choose the appropriate region.

3. Connect your app to your Git repository: In the "Deployment" tab of your app's dashboard, under "Deployment method", choose "Git" or "GitLab" (depending on the integration availability). Follow the instructions to connect your Git repository to your Heroku app.

4. Configure deployment options: Once your Git repository is connected, you can configure the deployment options. Specify the deployment target, such as production or staging, by creating different branches or environments in your Git repository. Heroku will automatically deploy the respective branch/environment.

5. Set up environment variables: In the "Settings" tab of your app's dashboard, under "Config Vars", you can specify environment variables for sensitive information like API keys or database credentials. Click on the "Reveal Config Vars" button and enter the variable name and its corresponding value.

6. Configure custom domains or SSL certificates (if applicable): In the "Settings" tab, under "Domains and certificates", you can configure custom domains or add SSL certificates. Follow the instructions provided by Heroku to set up your custom domain or SSL certificate.

7. Trigger manual deployment or enable automatic deployments: By default, Heroku can be configured to automatically deploy your app every time you push changes to your Git repository. However, you can also trigger a manual deployment by clicking the "Deploy" button in the "Deploy" tab of your app's dashboard.

8. Monitor the deployment process: During the deployment process, you can monitor the logs and check the progress in the "Activity" tab of your app's dashboard. Any errors or issues encountered during deployment will be displayed here.

9. Once the deployment process is complete, you should be able to access your app using the provided Heroku domain or your custom domain if configured.

## Testing
1. User Interface (UI) Testing
Manual testing: Test the website manually by interacting with different features, forms, buttons, and links. Pay attention to responsiveness, layout, and usability across different devices and browsers.
Automated testing: Use tools like Selenium to automate UI testing. Write test scripts to simulate user actions and verify expected outcomes.
2. Integration testing:
- Checking the integration between front-end and back-end components
- Testing database connections and data retrieval
