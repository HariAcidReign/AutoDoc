# AutoDoc 👨‍⚕️

Add logo here center

## 📌 Introduction 

AutoDoc is a React Native + Expo app created for making doctor prescriptions easier.  
 The authentication is done using Firebase. Input to the prescription form is given via Voice (**still in beta.** Expo doesn't provide native support for Speech to Text, so the workaround was to host Google Speech-to-Text API on Heroku and then get voice input and send it as a POST request to the cloud. We get back the transcribed text). Input can be given using Keyboard too. The form values are extracted and converted into SMS text or PDF using Expo-SMS and Expo-Print respectively, which can be shared to the Patient's mobile directly. 

## 🎯 Purpose of the Project

We are all aware of the poor handwriting that is present in most Doctor Prescription forms. This leads to confusion for the patient while deciphering what is written. Also, pen and paper prescriptions get lost easily and can be referenced neither by the doctor nor by the patient during a future visit. Also, some patients do not possess a smartphone, hence the feature of SMS sharing and not PDF alone. This project aims to resolve all of these issues. 

## 💻 Meet the makers

Created with 💖 by Hariharan, along with invaluable help from Harish



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

**Known Issues**
- Make voice input work for all elements of form
- Fix expo-app-loading bug
- As the app is an MVP, the PDF details are hardcoded. Change it to dynamically get details from Home Screen and print in HTML template using EJS. 

## License
[MIT](https://choosealicense.com/licenses/mit/)
