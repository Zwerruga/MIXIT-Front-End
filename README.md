# Welcome Frontend task

An interactive 🏂 [main screen](https://www.figma.com/file/zedO0LwkerytSEVWr9ukLj/MIXIT-TEST?node-id=0%3A1&viewport=241%2C48%2C0.07) of an online store🛍️, a link from which leads to a specific 📄 page where you can start watching a 📹 [video](https://www.youtube.com/watch?v=ReTGM_h52q0). <a href="https://e-commerce-model-42480.web.app/">:link:Online demo link:link:</a><br/>
`$ npm i && npm start`

![Demonstration of functionality](https://i.ibb.co/JKNbC39/Peek-2021-09-08-07-02.gif)<br/>
:ballot_box_with_check: [< Header />](https://github.com/Zwerruga/MIXIT.-Front-End./blob/main/src/components/Header.jsx) - contains the main🌶️ **< Menu />**, 🌠 **< Logo />** and an element for opening the shopping 🛒 **< Cart/>.**<br/>
:ballot_box_with_check: [< Title />](https://github.com/Zwerruga/MIXIT.-Front-End./blob/main/src/components/Title.jsx) - 📘 non-clickable text _`(user-select: none)`_<br/>
:ballot_box_with_check: [< DetailsButton />](https://github.com/Zwerruga/MIXIT.-Front-End./blob/main/src/components/ButtonDetails.jsx)🔘 - a link :link: to any page.<br/>
:ballot_box_with_check: [Image](https://github.com/Zwerruga/MIXIT.-Front-End./blob/main/src/images/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202021-08-18%20%D0%B2%2010.50%201.png) - 🖼️ is a banner in the default state when you go to the main page of the site;<br/>
:ballot_box_with_check: [Video ](https://github.com/Zwerruga/MIXIT.-Front-End./blob/main/src/components/Player.jsx) 📹 and controls 🖱️:

- controls:
  - [< PlayButton />](https://github.com/Zwerruga/MIXIT.-Front-End./blob/main/src/components/PlayButton.jsx) - START & PAUSE
  - [< VolumeButton />](https://github.com/Zwerruga/MIXIT.-Front-End./blob/main/src/components/VolumeButton.jsx) - volume 🔇 mute or 🔊 unmute.
- default state:
  - [ ] Doesn't run, 🎬🏃 🖼️ hides behind the image. _(by z-index difference)_
  - [ ] Control element - START over the image (follows the pointer 🖱️).
  - [ ] When you 🖱️first click on START, the video starts from 00:01. (youtube api parameter "start" 🏁)
- state started:
  - [ ] played from 00:01.
  - [ ] control element - PAUSE (follows the pointer🖱️).
  - [ ] 👁️z-index of the video player 999.
  - [ ] hides the 🖼️image, 📘title, 📄header, 🔘detail button.
  - [ ] when you 🖱️click on PAUSE - pause the video, change the control to START, z-index below the 🖼️image, 📘title, 📄header, 🔘detail button.
- Second 🖱️click on START:
  - [ ] 🏁starting the 📹video from the moment of pause;
  - [ ] control element - PAUSE;
  - [ ] 👁️z-index of the video player is 999. Hides the 🖼️image, 📘title, 📄header, 🔘detail button.

## ⚙️ General Info

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![React Hooks](https://img.shields.io/badge/React_Hooks-778899?style=for-the-badge&logo=react&logoColor=61DAFB)![Youtube API](https://img.shields.io/badge/YouTube_Api-ff0000?style=for-the-badge&logo=google&logoColor=white)

- React<br/>
- React hooks<br/>
- Youtube API<br/>

## 🔮 In Future ⏳

- Add testing✨
- Add SSR and video optimization📑
