import Run from './scripts/main';

Run();



//App Splash Screen

const Header = document.getElementById('AppTitle-TextBox');
const FormContainer = document.getElementById('FormContainer');
const SplashContainer = document.getElementById('SplashContainer');


    const SplashTL = new TimelineMax();


SplashTL

        .to(SplashContainer, .7, {opacity: 0, delay: 2.5, ease: Expo.easeInOut})
        .set(SplashContainer, {className: 'HideContainer'})
        .add('Wave1')
        .to(Header, .5, {opacity: 1, ease: Expo.easeInOut}, 'Wave1')
        .to(FormContainer, .5, {opacity: 1, ease: Expo.easeInOut}, 'Wave1')
        ;






