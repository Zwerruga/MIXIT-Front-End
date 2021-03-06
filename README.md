# Welcome Frontend task

An interactive π [main screen](https://www.figma.com/file/zedO0LwkerytSEVWr9ukLj/MIXIT-TEST?node-id=0%3A1&viewport=241%2C48%2C0.07) of an online storeποΈ, a link from which leads to a specific π page where you can start watching a πΉ [video](https://www.youtube.com/watch?v=ReTGM_h52q0). <a href="https://e-commerce-model-f579c.web.app/">:link:Online demo link:link:</a><br/>
`$ npm i && npm start`

![Demonstration of functionality](https://i.ibb.co/JKNbC39/Peek-2021-09-08-07-02.gif)<br/>
:ballot_box_with_check: [< Header />](https://github.com/Zwerruga/MIXIT.-Front-End./blob/main/src/components/Header.jsx) - contains the mainπΆοΈ **< Menu />**, π  **< Logo />** and an element for opening the shopping π **< Cart/>.**<br/>
:ballot_box_with_check: [< Title />](https://github.com/Zwerruga/MIXIT.-Front-End./blob/main/src/components/Title.jsx) - π non-clickable text _`(user-select: none)`_<br/>
:ballot_box_with_check: [< DetailsButton />](https://github.com/Zwerruga/MIXIT.-Front-End./blob/main/src/components/ButtonDetails.jsx)π - a link :link: to any page.<br/>
:ballot_box_with_check: [Image](https://github.com/Zwerruga/MIXIT.-Front-End./blob/main/src/images/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202021-08-18%20%D0%B2%2010.50%201.png) - πΌοΈ is a banner in the default state when you go to the main page of the site;<br/>
:ballot_box_with_check: [Video ](https://github.com/Zwerruga/MIXIT.-Front-End./blob/main/src/components/Player.jsx) πΉ and controls π±οΈ:

- controls:
  - [< PlayButton />](https://github.com/Zwerruga/MIXIT.-Front-End./blob/main/src/components/PlayButton.jsx) - START & PAUSE
  - [< VolumeButton />](https://github.com/Zwerruga/MIXIT.-Front-End./blob/main/src/components/VolumeButton.jsx) - volume π mute or π unmute.
- default state:
  - [ ] Doesn't run, π¬π πΌοΈ hides behind the image. _(by z-index difference)_
  - [ ] Control element - START over the image (follows the pointer π±οΈ).
  - [ ] When you π±οΈfirst click on START, the video starts from 00:01. (youtube api parameter "start" π)
- state started:
  - [ ] played from 00:01.
  - [ ] control element - PAUSE (follows the pointerπ±οΈ).
  - [ ] ποΈz-index of the video player 999.
  - [ ] hides the πΌοΈimage, πtitle, πheader, πdetail button.
  - [ ] when you π±οΈclick on PAUSE - pause the video, change the control to START, z-index below the πΌοΈimage, πtitle, πheader, πdetail button.
- Second π±οΈclick on START:
  - [ ] πstarting the πΉvideo from the moment of pause;
  - [ ] control element - PAUSE;
  - [ ] ποΈz-index of the video player is 999. Hides the πΌοΈimage, πtitle, πheader, πdetail button.

## βοΈ General Info

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![React Hooks](https://img.shields.io/badge/React_Hooks-778899?style=for-the-badge&logo=react&logoColor=61DAFB)![Youtube API](https://img.shields.io/badge/YouTube_Api-ff0000?style=for-the-badge&logo=google&logoColor=white)

- React<br/>
- React hooks<br/>
- Youtube API<br/>

## π? In Future β³

- Add testingβ¨
- Add SSR and video optimizationπ
