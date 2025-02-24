import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;    
    }
    @keyframes backgroundColorTransition {
        0% {
            background-color: white;
            color: black;
        }
        50% {
            background-color: orange;
            color: white;
        }
        100% {
            background-color: white;
            color: black;
        }
    }
    @keyframes TextColorTransition {
        0% {
            color: black;
        }
        50% {
            color: white;
        }
        100% {
            color: black;
        }
    }


     /* Keyframes for fade-in and fade-out */
  @keyframes overlayFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes overlayFadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes contentFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes contentFadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .home-button-group {
    display: grid;
    justify-content: center;
    width: auto;
  }

  
  /* Modal overlay animation */
  .custom-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
    animation: overlayFadeIn 0.3s ease-out forwards; /* Fade-in */
    transition: opacity 0.3s ease-out;
    z-index: 3;

  }

  /* Modal content animation */
  .custom-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: contentFadeIn 0.3s ease-out forwards; /* Fade-in */
    //width: 80%;
    width: auto;
    max-width: 900px;
    height: auto;
    // max-height: 500px;
  height: auto;
    max-height: 90vh; /* Ensure modal doesn't exceed screen height */
  //max-height: 400px;
    overflow-y: auto; /* Add vertical scrolling when content overflows */
    transition: opacity 0.3s ease-out;
    z-index: 3;
  }

  /* If the modal is closing, apply fade-out animations */
  .custom-overlay.closing {
    animation: overlayFadeOut 0.3s ease-out forwards; /* Fade-out */
  }

  .custom-content.closing {
    animation: contentFadeOut 0.3s ease-out forwards; /* Fade-out */
  }


.close-btn {
  // position: absolute;
  position: fixed;
  // top: 0px;
  top: -30px;
  // top: 10px;
  // right: 0px;
  right: -30px;
  // right: 10px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #333;
  cursor: pointer;
}

.close-btn:hover {
  color: #d9534f; /* Red color on hover */
  background: none;
}

.modal-content {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  padding: 0px;
  // padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  //width: 80%;
  width: auto;
  max-width: 1000px; /* Adjust this as needed */
  color: black;
}

.modal-title {
  font-size: 2rem; /* Make the title large */
  text-align: left; /* Center the title */
  // text-align: center; /* Center the title */
  margin-bottom: 10px;
}

.modal-body {
  display: flex;
  justify-content: flex-start; /* Position GIF on the left */
  align-items: flex-start;
  width: 100%;
}

.modal-gif {
  flex: 1; /* GIF takes up 40% of the modal width */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal-gif img {
  max-width: 100%; /* Ensures the image is responsive */
  max-height: 80vh; /* Limits the height of the GIF */
}

/* Base styles for links */
.modal-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  padding: 5px 7.5px;
  // padding: 10px 15px;
  border: 1px solid #007bff;
  border-radius: 5px;

   display: flex;
  flex-direction: row;
  justify-content: space-between; /* Ensures even spacing between items */
  align-items: center;
  // gap: 5px; /* Optional spacing between buttons */
  // gap: 10px; /* Optional spacing between buttons */
  margin-top: 5px;
  // margin-top: 10px;
  width: 100%; /* Full width of the modal */


  transition: all 0.3s ease;
}

.modal-link:hover {
  background-color: #007bff;
  color: white;
}

/* Specific styles for GIT REPO link */
.git-repo-link {
  /* Add unique styles if needed */
}

/* Specific styles for DEMO LINK */
.demo-link {
  /* Add unique styles if needed */
}



.modal-text {
  flex: 1.5; /* Text section takes up 60% of the modal width */
  padding-left: 20px; /* Space between text and GIF */
}

.modal-text a {
  display: block;
  margin: 10px 0;
  color: black;
  // color: #007bff;
  text-decoration: none;
}

.modal-text a:hover {
  text-decoration: underline;
}

.modal-description {
  margin-top: 0px;
  // margin-top: 15px;
  white-space: pre-wrap;
  overflow-y: auto;
}

body.modal-open {
  overflow: hidden;
}

`
