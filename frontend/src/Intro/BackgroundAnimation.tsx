import React, { useEffect } from "react";
import anime from "animejs";
import "./BackgroundAnimation.css";

const BackgroundAnimation: React.FC = () => {
    useEffect(() => {
        anime({
            targets: ".shape", // Ciblez les éléments avec la classe "shape"
            translateX: [100, 0], // Animation de déplacement sur l'axe X
            opacity: [0, 1], // Animation de l'opacité
            easing: "easeInOutQuad", // Type d'animation
            duration: 2000, // Durée de l'animation en ms
            delay: anime.stagger(200), // Décalage entre les animations de chaque élément
        });
    }, []);

    return (
        <div>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                 viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave"
                          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="100" y="5" fill="rgba(225,225,225,0.7)"/>
                    <use xlinkHref="#gentle-wave" x="100" y="3" fill="rgba(235,235,235,0.8)"/>
                    <use xlinkHref="#gentle-wave" x="100" y="1" fill="rgba(222,222,222,0.3"/>
                    <use xlinkHref="#gentle-wave" x="100" y="0" fill="rgba(245,245,245,0.9"/>
                    {/*<use xlinkHref="#gentle-wave" x="0" y="0" fill="rgba(222,222,222,0.7"/>*/}
                    {/*<use xlinkHref="#gentle-wave" x="0" y="3" fill="rgba(222,222,222,0.5)"/>*/}
                    {/*<use xlinkHref="#gentle-wave" x="0" y="5" fill="rgba(222,222,222,0.3)"/>*/}
                </g>
            </svg>
        </div>
    );
};

export default BackgroundAnimation;
