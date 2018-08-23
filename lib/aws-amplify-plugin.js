// This file is a template plugin, must be added 
// to .eslintignore to bypass esline test
import Amplify from 'aws-amplify';
const options = <%= JSON.stringify(options) %>
Amplify.configure(options)
