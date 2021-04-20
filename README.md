
<p align="center">
<br>
    <a href="" alt="Maintained">
        <img src="https://img.shields.io/maintenance/yes/2021"/>
    </a>
    <a href="" alt="Code Size">
        <img src="https://img.shields.io/github/languages/code-size/HariAcidReign/AutoDoc"/>
    </a>
<br>
    <a href="https://github.com/HariAcidReign/AutoDoc/network/members" alt="Forks">
    <a href="https://github.com/SamDev98/password-manager-py/stargazers" alt="Stars">
        <img src="https://img.shields.io/github/stars/HariAcidReign/AutoDoc.svg"/>
    </a>
    <a href="" alt="Contributors">
        <img src="https://img.shields.io/github/contributors/HariAcidReign/AutoDoc.svg"/>
    </a>
    <a href="https://github.com/SamDev98/password-manager-py/labels/good%20first%20issue" alt="Good First Issues">
        <img src="https://img.shields.io/github/issues-raw/SamDev98/password-manager-py/good%20first%20issue"/>
    </a>
<br>
    <a href="https://www.linkedin.com/in/hariharan-balasubramanian-2a7607187/" alt="Linkedin">
        <img src="https://img.shields.io/badge/-Hariharan B-black.svg?style=for-the-badge&logo=linkedin&colorB=555"/>
    </a>
      <a href="https://www.linkedin.com/in/harish-s-g-31ba96171/" alt="Linkedin">
        <img src="https://img.shields.io/badge/-Harish -black.svg?style=for-the-badge&logo=linkedin&colorB=555"/>
    </a>
</p>
<p align="center">
    <a href="https://github.com/HariAcidReign/AutoDoc/">
        <img style="border-radius:50%" src="https://user-images.githubusercontent.com/58134096/103359731-6bfefc00-4ade-11eb-918f-6fe8896f9f54.png" alt="Logo" width="400" height="200">
    </a>
    <p align="center">
    An awesome voice based prescription maker!
    <br>
    <a href="https://github.com/HariAcidReign/AutoDoc/"><strong>Explore the docs »</strong></a>
    <br>
    <br>
    ·
    <a href="https://github.com/HariAcidReign/AutoDoc/issues/new/choose">Report Bug</a>
    ·
  </p>
</p>
 
## 📌 Introduction 

- AutoDoc is a React Native + Expo app created for making doctor prescriptions easier.  
- The authentication is done using Firebase. Input to the prescription form is given via Voice (**still in beta.** Expo doesn't provide native support for Speech to Text, so the workaround was to host Google Speech-to-Text API on Heroku and then get voice input and send it as a POST request to the cloud. We get back the transcribed text). Input can be given using Keyboard too. 
   <img src="https://user-images.githubusercontent.com/58134096/103369129-580fc600-4aef-11eb-9e1e-4a8679bf5719.png" width="1000" height="150" />

- The form values are extracted and converted into SMS text or PDF using Expo-SMS and Expo-Print respectively, which can be shared to the Patient's mobile directly.

## 📷 Screenshots (zoom in to see better) 

<p float="left">
  <img src="https://user-images.githubusercontent.com/58134096/103357459-41f70b00-4ad9-11eb-9cc3-e5aa75703731.png" width="150" height="250" />
  <img src="https://user-images.githubusercontent.com/58134096/103359259-9d2afc80-4add-11eb-8181-6176fdd6c265.png" width="150" height="250" />
  <img src="https://user-images.githubusercontent.com/58134096/103359329-b764da80-4add-11eb-873b-f00a800212c3.png" width="150" height="250" />
   <img src="https://user-images.githubusercontent.com/58134096/103359359-c8155080-4add-11eb-8597-16e687a9a9bc.png" width="150" height="250" />
  <img src="https://user-images.githubusercontent.com/58134096/103359389-d82d3000-4add-11eb-86ea-4b657ab1e485.png" width="150" height="250" />
  <img src="https://user-images.githubusercontent.com/58134096/103359421-e8dda600-4add-11eb-8495-4c990fb616e0.png" width="150" height="250" />

</p> 

## 🎯 Purpose of the Project

We are all aware of the poor handwriting that is present in most Doctor Prescription forms. This leads to confusion for the patient while deciphering what is written. Also, pen and paper prescriptions get lost easily and can be referenced neither by the doctor nor by the patient during a future visit. Also, some patients do not possess a smartphone, hence the feature of SMS sharing and not PDF alone. This project aims to resolve all of these issues. 

## 💻 Meet the makers

Created with 💖 by Hariharan, along with invaluable help from <a href="https://github.com/harishsg99">Harish</a>

- Check out my Linkedin post for this project <a href="https://www.linkedin.com/posts/hariharan-balasubramanian-2a7607187_we-all-know-how-difficult-it-is-to-understand-activity-6750294083803201536-PxaT">here!</a>



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

**Known Issues**
- Make voice input work for all elements of form
- Fix expo-app-loading bug
- Fix blank space bug in PDF rendering

## License
[MIT](https://choosealicense.com/licenses/mit/)
