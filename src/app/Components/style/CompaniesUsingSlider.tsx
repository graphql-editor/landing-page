import { style, keyframes } from "typestyle";
import { colors } from "../../style/vars";
import { trustedList } from "../../text_data";

export const PartnersSection = style({
  textAlign: "center",
  margin: `-75px auto 100px`, //65,
  overflow: "hidden",

  background: "white",
  boxShadow: "1px 1px 22px rgba(157, 184, 209, 0.17)",
  borderRadius: 7,

  $nest: {
    h5: {
      margin: "20px 0",
      padding: "0 10px",
      fontSize: 15,
      letterSpacing: 1,
      textTransform: "uppercase",

      color: colors.signup
    }
  }
});


const AnimationSpeed = "30s";

const Scroll = keyframes({
  "0%": { transform: `translateX(0)` },
  "100%": { transform: `translateX(calc(-300px * ${trustedList.length / 2}))` }
});

export const PartnersSlider = style({
  padding: "10px 0",
  //width: "100%",

  background: colors.white,
  height: 100,
  margin: "auto",
  overflow: "hidden",
  position: "relative",
  width: '100%',

  $nest: {
    "&::before, &::after": {
      background: 'linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%)',
      content: '""',
      height: 100,
      position: "absolute",
      width: 200,
      zIndex: 2
    },

    "&::before": {
      left: 0,
      top: 0
    },

    "&::after": {
      right: 0,
      top: 0,
      transform: "rotateZ(180deg)"
    },

    ".content": {
      animation: `${Scroll} ${AnimationSpeed} linear infinite`,
      display: `flex`,
      width: `calc(300px * ${trustedList.length})`,
    },

    ".item": {
      height: 100,
      width: 300,

      $nest: {
        img: {
          height: 60,
          borderRadius: 6
        }
      }
    },
    "@media screen and (max-width: 480px)": {
      // paddingBottom: 20,
      marginBottom: 30
    },

    "@media screen and (max-width: 768px)": {
      // paddingBottom: 40,
      marginBottom: 0
    }
  }
});



// cssRaw(`
// @keyframes slide {
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(calc(-300px * ${trustedList.length / 2}));
//   }
// }

// .slider {
//   background: white;
//   box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
//   height: 100px;
//   margin: auto;
//   overflow: hidden;
//   position: relative;
//   width: 100%;
// }

// .slider::before, .slider::after {
//   background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
//   content: "";
//   height: 100px;
//   position: absolute;
//   width: 200px;
//   z-index: 2;
// }

// .slider::after {
//   right: 0;
//   top: 0;
//   transform: rotateZ(180deg);
// }

// .slider::before {
//   left: 0;
//   top: 0;
// }

// .slider .content {
//   animation: slide 30s linear infinite;
//   display: flex;
//   width: calc(300px * ${trustedList.length});
// }

// .slider .item {
//   height: 100px;
//   width: 300px;
// }

// .slider .item img {
//   height: 60px;
// }

// .slider .item a {
//   display: inline-block
// }
// `);
