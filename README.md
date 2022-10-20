# Spotify-Clone-Media-Player

<p float="left">
<img src="https://raw.githubusercontent.com/Guelguin/Spotify-Clone-Media-Player/main/screenshots/lg/lg%20(6).png" height="320"/>

<img style="display:inline" src="https://raw.githubusercontent.com/Guelguin/Spotify-Clone-Media-Player/main/screenshots/sm/sm%20(1).png" height="320"/>
<img src="https://api.qrserver.com/v1/create-qr-code/?size=300&data=https://guelguin.github.io/Spotify-Clone-Media-Player " height="150"/>
</p>

In this example, i'll try to make a better version of Shotgun technical case.

## ▶️ Demo
> https://guelguin.github.io/Spotify-Clone-Media-Player/

## 📄 Test description
> https://shotguntheapp.notion.site/Case-Study-Spotify-Player-7f8417391b9e43ba9f351870949a0559

## ‍💻 Advancement

The initial version was released as a proof of work, while the expected outcome was to have an almost finished and clean version.

At the time of doing, most of the time was spent trying to figure out how Apollo Client can work as a State aware Cache middleware ; however, after several hours and multiple headaches, i couldn't find a serious / efficient approache of handeling this case with Apollo Client v2/v3.

Lately, I came back to the initial challenge with the classic way. But with a cleaner and more serious approach.

## 📖 TODO

- Recycle knowledge and refresh mind
- < code />

## 🧠 Tech considerations:

- No backend, use the provided API:
  > https://spotify-graphql.shotgun.live/api
- ZeroConfig and out-of-the-box dependencies (Parcel instead of Webpack)
- try to be aligned with Shotgun Stack [
  - React / Next.JS / React Native / Apollo
  - Node.js / GraphQL
  - PostgreSQL
  - ~~Github Actions / Cypress / Detox
  - Vercel (serverless) / Heroku ]
  - ECMA or TS ? whatever, interperability is ok
- Graphic lib (but with a minimal footprint)
- Stay agnostic, unopinionated as much as possible

## 🎁 Expected outcome

✅ Your project must be hosted on GitHub. (you can use the gh-pages to have a running version online or vercel)
✅ Your project must contain a README that explains how to run it.
If some user stories are not clear enough, you can take arbitrary decisions.
If you don't have time to finish all the user stories, describe the way you'd do them.
✅ Describe the edges you don't handle.
✅ This project is a real use case at Shotgun, put the same attention to this project that you would in your real work.

## 📝 Local State management

Some context data is saved in the local storage, like the theme and favorite tracks.

## 📱 Responsiveness

Responsiveness is achieved using flexbox and NextJS Layouts.
It comes with densities: laptop, tablet and phone.

Some elements are hidden in phone view to leave place to UX/UI clarity.

## 💃 Animations

Animations are mostly done with:

- CSS transitions
- Framer Motion Animate Presence
- CSS 3D transformations with transitions
- Lottie SVG animations
- Some hacked usage of NextUI animations

## 🌐 GraphQL and unavailability

Some songs are grayed out because they do not feature a preview_url.

## 🤔 What could have been better ?

Organising the CSS is one effort to be done in this project. Although the stylesheets are organised by component, the class naming can take another run

Saving the favorites in cookies is not working using gh-pages for the moment, because of the static nature of gh-pages. It is working on other servers.

Some rules of the linter were suppressed. In order to be compliant, some components need a little check (line <img> tags).

Factorize gssp to run once for every page.

## 📸 Screenshots

<p float="left">
<img style="display:inline" src="https://raw.githubusercontent.com/Guelguin/Spotify-Clone-Media-Player/main/screenshots/sm/sm%20(1).png" width="400"/>
<img style="display:inline" src="https://raw.githubusercontent.com/Guelguin/Spotify-Clone-Media-Player/main/screenshots/sm/sm%20(2).png" width="400"/>
</p>
<p float="left">
<img src="https://raw.githubusercontent.com/Guelguin/Spotify-Clone-Media-Player/main/screenshots/md/md%20(1).png" width="400"/>
<img src="https://raw.githubusercontent.com/Guelguin/Spotify-Clone-Media-Player/main/screenshots/md/md%20(2).png" width="400"/>
</p>
<p float="left">
<img src="https://raw.githubusercontent.com/Guelguin/Spotify-Clone-Media-Player/main/screenshots/lg/lg%20(6).png" width="1000"/>

<img src="https://raw.githubusercontent.com/Guelguin/Spotify-Clone-Media-Player/main/screenshots/lg/lg%20(5).png" width="1000"/>
<img src="https://raw.githubusercontent.com/Guelguin/Spotify-Clone-Media-Player/main/screenshots/lg/lg%20(4).png" width="1000"/>

<img src="https://raw.githubusercontent.com/Guelguin/Spotify-Clone-Media-Player/main/screenshots/lg/lg%20(1).png" width="1000"/>
<img src="https://raw.githubusercontent.com/Guelguin/Spotify-Clone-Media-Player/main/screenshots/lg/lg%20(3).png" width="1000"/>

<img src="https://raw.githubusercontent.com/Guelguin/Spotify-Clone-Media-Player/main/screenshots/lg/lg%20(2).png" width="1000"/>
</p>

## 📖 Further infos about mutations with data persistance

Reactive vars and persistant cache doesn't seem to have a straight through implementation for now, and may be coming in the next release, see:

apollographql/apollo-cache-persist#361
apollographql/apollo-client#5601
apollographql/apollo-client#7148
Another solution:

https://github.com/TallerWebSolutions/apollo-cache-instorage
