/* =========================================
   ELEMENTS
========================================= */

const scene =
    document.getElementById("scene");

const intro =
    document.getElementById("intro");

const lightButton =
    document.getElementById("lightButton");

const lampContainer =
    document.getElementById("lampContainer");

const afterLight =
    document.getElementById("afterLight");

const topSymbol =
    document.getElementById("topSymbol");

const courtButton =
    document.getElementById("courtButton");

const courtroom =
    document.getElementById("courtroom");


/* =========================================
   PHASE 2 ELEMENTS
========================================= */

const courtHeading =
    courtroom.querySelector(".court-heading");

const characterGrid =
    courtroom.querySelector(".character-grid");

const caseNumber =
    courtroom.querySelector(".case-number");

const phase3Button =
    document.getElementById("phase3Button");


/* =========================================
   PHASE 3 ELEMENTS
========================================= */

const judgeScene =
    document.getElementById("judgeScene");

const hearingButton =
    document.getElementById("hearingButton");

const openingDialogue =
    document.getElementById("openingDialogue");


/* =========================================
   PHASE 4 ELEMENTS
========================================= */

const hearingPhase =
    document.getElementById("hearingPhase");

const hearingNextButton =
    document.getElementById("hearingNextButton");


/* =========================================
   PHASE 5 ELEMENTS
========================================= */

const verdictPhase =
    document.getElementById("verdictPhase");

const notGuiltyButton =
    document.getElementById("notGuiltyButton");

const guiltyButton =
    document.getElementById("guiltyButton");

const verdictResult =
    document.getElementById("verdictResult");

const resultSymbol =
    document.getElementById("resultSymbol");

const resultTitle =
    document.getElementById("resultTitle");

const resultMessage =
    document.getElementById("resultMessage");

const finishButton =
    document.getElementById("finishButton");


/* =========================================
   STATE
========================================= */

let lightTurnedOn = false;

let courtOpened = false;

let phase3Started = false;

let hearingStarted = false;


/* =========================================
   PHASE 1
   TURN ON THE LIGHT
========================================= */

if (lightButton) {

    lightButton.addEventListener(
        "click",
        () => {

            if (lightTurnedOn) {
                return;
            }

            lightTurnedOn = true;


            /*
                Prevent multiple clicks
            */

            lightButton.disabled = true;


            /*
                Fade button
            */

            lightButton.style.opacity = "0";

            lightButton.style.transform =
                "translateY(10px) scale(0.95)";


            /*
                Hide intro
            */

            setTimeout(() => {

                if (intro) {

                    intro.classList.add(
                        "hide"
                    );

                }

            }, 300);


            /*
                Turn light on
            */

            setTimeout(() => {

                if (scene) {

                    scene.classList.add(
                        "light-on"
                    );

                }

            }, 500);


            /*
                Show lamp
            */

            setTimeout(() => {

                if (lampContainer) {

                    lampContainer.classList.add(
                        "show"
                    );

                }

                if (topSymbol) {

                    topSymbol.classList.add(
                        "show"
                    );

                }

            }, 700);


            /*
                Show next section
            */

            setTimeout(() => {

                if (afterLight) {

                    afterLight.classList.add(
                        "show"
                    );

                }

            }, 2400);

        }
    );

}


/* =========================================
   PHASE 1 → PHASE 2
   ENTER BUGGU'S COURT
========================================= */

if (courtButton) {

    courtButton.addEventListener(
        "click",
        () => {

            if (courtOpened) {
                return;
            }

            courtOpened = true;


            /*
                Prevent multiple clicks
            */

            courtButton.disabled = true;


            /*
                Fade landing scene
            */

            if (scene) {

                scene.style.opacity = "0";

                scene.style.transform =
                    "scale(1.04)";

            }


            /*
                Reveal courtroom
            */

            setTimeout(() => {

                if (scene) {

                    scene.style.display =
                        "none";

                }

                if (courtroom) {

                    courtroom.classList.add(
                        "active"
                    );

                }

            }, 1000);

        }
    );

}


/* =========================================
   PHASE 2 → PHASE 3
   JUDGE SAHAB KO BULAYA JAYE
========================================= */

if (phase3Button) {

    phase3Button.addEventListener(
        "click",
        () => {

            if (phase3Started) {
                return;
            }

            phase3Started = true;


            /*
                Prevent multiple clicks
            */

            phase3Button.disabled = true;


            /*
                Hide Judge button
            */

            phase3Button.classList.add(
                "phase3-hide"
            );


            /*
                Hide Phase 2 heading
            */

            if (courtHeading) {

                courtHeading.classList.add(
                    "phase3-hide"
                );

            }


            /*
                Hide Phase 2 character cards
            */

            if (characterGrid) {

                characterGrid.classList.add(
                    "phase3-hide"
                );

            }


            /*
                Hide case number
            */

            if (caseNumber) {

                caseNumber.classList.add(
                    "phase3-hide"
                );

            }


            /*
                Wait for Phase 2 fade animation
            */

            setTimeout(() => {

                /*
                    Show Judge Buggu
                */

                if (judgeScene) {

                    judgeScene.classList.add(
                        "show"
                    );

                }


                /*
                    Scroll to Judge
                */

                setTimeout(() => {

                    if (judgeScene) {

                        judgeScene.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }

                }, 150);

            }, 1000);

        }
    );

}


/* =========================================
   PHASE 3 → PHASE 4
   START THE HEARING
========================================= */

if (hearingButton) {

    hearingButton.addEventListener(
        "click",
        () => {

            if (hearingStarted) {
                return;
            }

            hearingStarted = true;


            /*
                Prevent multiple clicks
            */

            hearingButton.disabled = true;


            /*
                Hide hearing button
            */

            hearingButton.style.opacity = "0";

            hearingButton.style.transform =
                "translateY(20px)";


            /*
                Show opening dialogue
            */

            setTimeout(() => {

                if (openingDialogue) {

                    openingDialogue.classList.add(
                        "show"
                    );

                }

            }, 500);


            /*
                Start Phase 4
            */

            setTimeout(() => {

                /*
                    Fade Judge scene
                */

                if (judgeScene) {

                    judgeScene.classList.add(
                        "phase4-fade"
                    );

                }


                /*
                    Show hearing
                */

                setTimeout(() => {

                    if (hearingPhase) {

                        hearingPhase.classList.add(
                            "show"
                        );


                        /*
                            Scroll to Phase 4
                        */

                        setTimeout(() => {

                            hearingPhase.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }, 150);

                    }

                }, 700);

            }, 2200);

        }
    );

}


/* =========================================
   PHASE 4 → PHASE 5
   CONTINUE THE CASE
========================================= */

if (hearingNextButton) {

    hearingNextButton.addEventListener(
        "click",
        () => {

            /*
                Prevent multiple clicks
            */

            hearingNextButton.disabled = true;


            /*
                Fade Continue button
            */

            hearingNextButton.style.opacity =
                "0";

            hearingNextButton.style.transform =
                "translateY(20px)";


            /*
                Fade Phase 4
            */

            setTimeout(() => {

                if (hearingPhase) {

                    hearingPhase.style.opacity =
                        "0";

                    hearingPhase.style.transform =
                        "translateY(-40px)";

                }

            }, 100);


            /*
                Show Phase 5
            */

            setTimeout(() => {

                if (verdictPhase) {

                    verdictPhase.classList.add(
                        "show"
                    );


                    /*
                        Scroll to verdict
                    */

                    setTimeout(() => {

                        verdictPhase.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }, 150);

                }

            }, 900);

        }
    );

}


/* =========================================
   PHASE 5
   NOT GUILTY
========================================= */

if (notGuiltyButton) {

    notGuiltyButton.addEventListener(
        "click",
        () => {

            /*
                Disable both buttons
            */

            notGuiltyButton.disabled = true;

            if (guiltyButton) {
                guiltyButton.disabled = true;
            }


            /*
                Hide Not Guilty
            */

            notGuiltyButton.style.opacity =
                "0";

            notGuiltyButton.style.transform =
                "scale(0.8)";


            /*
                Keep Guilty faded
            */

            if (guiltyButton) {

                guiltyButton.style.opacity =
                    "0.35";

            }


            /*
                Show result
            */

            setTimeout(() => {

                if (resultSymbol) {

                    resultSymbol.textContent =
                        "❤️";

                }

                if (resultTitle) {

                    resultTitle.textContent =
                        "NOT GUILTY";

                }

                if (resultMessage) {

                    resultMessage.innerHTML =
                        "Buggu aapse bahut bahut pyaar krti hai." +
                        "<br><br>" +
                        "Court ne aapko ek chance diya hai..." +
                        " kyuki pyaar me kabhi kabhi " +
                        "galti maaf bhi ki jaati hai.";

                }

                if (verdictResult) {

                    verdictResult.classList.add(
                        "show"
                    );


                    /*
                        Scroll to result
                    */

                    verdictResult.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            }, 600);

        }
    );

}


/* =========================================
   PHASE 5
   GUILTY
========================================= */

if (guiltyButton) {

    guiltyButton.addEventListener(
        "click",
        () => {

            /*
                Disable both buttons
            */

            guiltyButton.disabled = true;

            if (notGuiltyButton) {
                notGuiltyButton.disabled = true;
            }


            /*
                Hide Guilty
            */

            guiltyButton.style.opacity =
                "0";

            guiltyButton.style.transform =
                "scale(0.8)";


            /*
                Keep Not Guilty faded
            */

            if (notGuiltyButton) {

                notGuiltyButton.style.opacity =
                    "0.35";

            }


            /*
                Show result
            */

            setTimeout(() => {

                if (resultSymbol) {

                    resultSymbol.textContent =
                        "⚖️";

                }

                if (resultTitle) {

                    resultTitle.textContent =
                        "GUILTY";

                }

                if (resultMessage) {

                    resultMessage.innerHTML =
                        "Court ne Guduu ji ko guilty " +
                        "declare kiya hai." +
                        "<br><br>" +
                        "Saza ye hai ki ab Guduu ko " +
                        "apni Buggu ko kabhi lonely " +
                        "feel nahi karwana hai.";

                }

                if (verdictResult) {

                    verdictResult.classList.add(
                        "show"
                    );


                    /*
                        Scroll to result
                    */

                    verdictResult.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            }, 600);

        }
    );

}


/* =========================================
   PHASE 6 PLACEHOLDER
   CONTINUE BUTTON
========================================= */

/* =========================================
   PHASE 5 → PHASE 6
   FINAL APOLOGY
========================================= */

const apologyPhase =
    document.getElementById("apologyPhase");

const bugguResponse =
    document.getElementById("bugguResponse");

const finalPromise =
    document.getElementById("finalPromise");

const promiseButton =
    document.getElementById("promiseButton");

const loveEnding =
    document.getElementById("loveEnding");


if (finishButton) {

    finishButton.addEventListener(
        "click",
        () => {

            finishButton.disabled = true;

            finishButton.style.opacity =
                "0";

            finishButton.style.transform =
                "translateY(20px)";


            /*
                Fade verdict
            */

            setTimeout(() => {

                if (verdictPhase) {

                    verdictPhase.style.opacity =
                        "0";

                    verdictPhase.style.transform =
                        "translateY(-40px)";

                }

            }, 100);


            /*
                Show apology
            */

            setTimeout(() => {

                if (apologyPhase) {

                    apologyPhase.classList.add(
                        "show"
                    );


                    setTimeout(() => {

                        apologyPhase.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }, 150);

                }

            }, 900);


            /*
                Show Buggu response
            */

            setTimeout(() => {

                if (bugguResponse) {

                    bugguResponse.classList.add(
                        "show"
                    );

                }

            }, 3000);


            /*
                Show promise
            */

            setTimeout(() => {

                if (finalPromise) {

                    finalPromise.classList.add(
                        "show"
                    );

                }

            }, 4500);

        }
    );

}


/* =========================================
   PHASE 6
   PROMISE
========================================= */

if (promiseButton) {

    promiseButton.addEventListener(
        "click",
        () => {

            promiseButton.disabled = true;

            promiseButton.style.opacity =
                "0";

            promiseButton.style.transform =
                "scale(0.8)";


            /*
                Show final ending
            */

            setTimeout(() => {

                if (loveEnding) {

                    loveEnding.classList.add(
                        "show"
                    );


                    setTimeout(() => {

                        loveEnding.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }, 150);

                }

            }, 700);

        }
    );

}
/* =========================================
   CINEMATIC EXTRAS
   MUSIC + FLOATING HEARTS
========================================= */

const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const heartContainer = document.getElementById("heartContainer");

let musicPlaying = false;


/* =========================================
   MUSIC TOGGLE
========================================= */

if (musicToggle && bgMusic) {

    musicToggle.addEventListener("click", () => {

        if (!musicPlaying) {

            bgMusic.volume = 0.35;

            bgMusic.play()
                .then(() => {

                    musicPlaying = true;

                    musicToggle.textContent = "🔊";
                    musicToggle.classList.add("playing");

                })
                .catch(() => {

                    console.log("Music could not be started.");

                });

        } else {

            bgMusic.pause();

            musicPlaying = false;

            musicToggle.textContent = "🎵";
            musicToggle.classList.remove("playing");
        }

    });

}


/* =========================================
   FLOATING HEARTS
========================================= */

function createFloatingHeart() {

    if (!heartContainer) return;

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    const hearts = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "♥"
    ];

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "%";

    const duration =
        7 + Math.random() * 7;

    heart.style.animationDuration =
        duration + "s";

    heart.style.fontSize =
        12 + Math.random() * 12 + "px";

    heartContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, duration * 1000);
}


/* =========================================
   HEART GENERATOR
========================================= */

setInterval(() => {

    createFloatingHeart();

}, 1400);

/* =========================================
   SECRET LOVE LETTER
========================================= */

const loveLetterPhase =
    document.getElementById("loveLetterPhase");

const openLetterButton =
    document.getElementById("openLetterButton");

const letterEnvelope =
    document.getElementById("letterEnvelope");

const loveLetter =
    document.getElementById("loveLetter");

const letterContinueButton =
    document.getElementById("letterContinueButton");


/* =========================================
   PROMISE → LOVE LETTER
========================================= */

if (promiseButton) {

    promiseButton.addEventListener("click", () => {

        promiseButton.disabled = true;

        promiseButton.style.opacity = "0";

        promiseButton.style.transform =
            "scale(0.8)";

        setTimeout(() => {

            if (loveEnding) {
                loveEnding.classList.add("show");
            }

        }, 700);


        /* Show love letter after ending */

        setTimeout(() => {

            if (loveLetterPhase) {

                loveLetterPhase.classList.add("show");

                setTimeout(() => {

                    loveLetterPhase.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }, 150);

            }

        }, 3500);


        /* Show envelope */

        setTimeout(() => {

            if (letterEnvelope) {
                letterEnvelope.classList.add("show");
            }

        }, 4500);

    });

}


/* =========================================
   OPEN LETTER
========================================= */

if (openLetterButton) {

    openLetterButton.addEventListener("click", () => {

        openLetterButton.disabled = true;

        openLetterButton.style.opacity = "0";

        openLetterButton.style.transform =
            "translateY(15px)";

        setTimeout(() => {

            if (letterEnvelope) {

                letterEnvelope.style.opacity = "0";

                letterEnvelope.style.transform =
                    "scale(0.8) translateY(-20px)";

            }

        }, 300);


        setTimeout(() => {

            if (loveLetter) {

                loveLetter.classList.add("show");

                loveLetter.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        }, 1000);

    });

}


/* =========================================
   LETTER → FINAL ENDING
========================================= */

/* =========================================
   LOVE LETTER → FINAL ENDING
========================================= */

const finalEnding =
    document.getElementById("finalEnding");

const replayButton =
    document.getElementById("replayButton");


if (letterContinueButton) {

    letterContinueButton.addEventListener("click", () => {

        letterContinueButton.disabled = true;

        letterContinueButton.style.opacity = "0";

        letterContinueButton.style.transform =
            "translateY(15px)";


        /* Fade out love letter */

        setTimeout(() => {

            if (loveLetterPhase) {

                loveLetterPhase.style.opacity = "0";

                loveLetterPhase.style.transform =
                    "translateY(-50px)";

            }

        }, 300);


        /* Show final cinematic ending */

        setTimeout(() => {

            if (finalEnding) {

                finalEnding.classList.add("show");

                setTimeout(() => {

                    finalEnding.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }, 150);

            }

        }, 1200);

    });

}


/* =========================================
   REPLAY ENTIRE STORY
========================================= */

if (replayButton) {

    replayButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


        setTimeout(() => {

            window.location.reload();

        }, 700);

    });

}