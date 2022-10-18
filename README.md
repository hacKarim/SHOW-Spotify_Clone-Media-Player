# Spotify-Clone-Media-Player

<p float="left">
<img style="display:inline" src="https://raw.githubusercontent.com/Guelguin/Spotify-Clone-Media-Player/main/screenshots/sm/sm%20(1).png" height="350"/>
<img src="https://raw.githubusercontent.com/Guelguin/Spotify-Clone-Media-Player/main/screenshots/lg/lg%20(6).png" height="350"/>
</p>

In this example, i'll try to make a better version of Shotgun technical case.

The initial version was released as a proof of work, while the expected outcome was to have an almost finished and clean version.
At the time of doing, most of the time was spent trying to figure out how Apollo Client can work as a State aware Cache intermediary :
However, after several headaches, i couldn't find a serious / efficient approache of handeling this case with Apollo Client v2.

# Local State management

Some context data is saved in the local storage, like the theme and favorite tracks.

# Mobile responsiveness

Responsiveness is achieved using flexbox and NextJS Layouts.
It comes with densities: laptop, tablet and phone.

Some elements are hidden in phone view to leave place to UX/UI clarity.

# Animations

Animations are mostly done with:

- CSS transitions
- Framer Motion Animate Presence
- CSS 3D transformations with transitions
- Lottie SVG animations
- Some hacked usage of NextUI animations

# GraphQL and unavailability

Some songs are grayed out because they do not feature a preview_url.

# What could have been better ?

Organising the CSS is one effort to be done in this project. Although the stylesheets are organised by component, the class naming can take another run

Saving the favorites in cookies is not working using gh-pages for the moment, because of the static nature of gh-pages. It is working on other servers.

Some rules of the linter were suppressed. In order to be compliant, some components need a little check (line <img> tags).

Factorize gssp to run once for every page.

# Screenshots

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
