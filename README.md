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

This software has the following dependencies:

- Firebase JavaScript SDK 
- three.js 
- HTML 
- CSS 
- JavaScript 

Please make sure to include the following scripts in your HTML file to include the required JavaScript dependencies:

<script src="https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/X.X.X/three.min.js"></script>

2. Integrations
This software integrates with the following services:

Firebase Authentication: This integration allows users to create accounts, log in, and access personalized features. You'll need to set up a Firebase project and configure the authentication service. Make sure to replace the firebaseConfig object in the provided code with your own Firebase project's configuration.

Firebase Realtime Database: This integration enables data storage and retrieval. The code in the provided snippet interacts with the Firebase Realtime Database to retrieve user-specific information. Ensure that you have set up the database in your Firebase project and granted the necessary permissions.

ForumSubmit: This integration enables the submission and management of forum posts. You'll need to include the necessary code and configure the backend for handling forum submissions. Ensure that the backend server for ForumSubmit is set up and functional. Consult the ForumSubmit documentation for details on how to integrate it with your project.

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
User Interface (UI) Testing

Manual Testing:

1. Perform manual testing by interacting with various features, forms, buttons, and links on the website.

2. Pay close attention to responsiveness, layout, and usability across different devices and browsers.

3. Test the website's functionality by simulating user actions and verifying the expected outcomes.

4. Ensure that all UI elements are displaying correctly and that they align with the design specifications.

5. Test different scenarios and edge cases to identify any issues or bugs.

Automated Testing:

1. Utilize tools like Selenium to automate UI testing.

2. Write test scripts that simulate user actions, such as clicking buttons, filling out forms, and navigating through the website.

3. Verify expected outcomes and compare them to the actual results.

4. Automate repetitive tasks and run tests across different browsers and devices.

5. Use assertions to check if the UI elements are present, visible, and have the expected properties.

6. Capture screenshots or videos during automated tests for further analysis and debugging.

Integration Testing:

1. Testing the communication and data exchange between the front-end and back-end systems.

2. Verifying that APIs or service endpoints are correctly integrated and respond appropriately.

3. Checking the data flow between different components and modules.

4. Testing the interaction with databases by performing queries, inserts, updates, and deletions.

5. Validating the accuracy and integrity of retrieved data from the database.

6. Verifying error handling and exception scenarios during integration.

7. Ensuring that the system components work together seamlessly and produce the expected results.
