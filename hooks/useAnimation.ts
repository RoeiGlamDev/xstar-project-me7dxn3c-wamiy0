import { useEffect, useState } from 'react';

/
 * Custom hook for animations in CleanSSR's user experience.
 * This hook manages the animation state for elements within the CleanSSR website.
 * It can be used to create smooth transitions and animated effects to enhance user interaction.
 * 
 * @returns {Object} - An object containing animation state and functions to control animations.
 */
export interface AnimationState {
  isVisible: boolean;
  toggleVisibility: () => void;
  fadeIn: boolean;
}

export const useAnimation = (): AnimationState => {
  const [isVisible, setIsVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
    setFadeIn(true);
  };

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setFadeIn(false), 300); // duration of fade-out
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return {
    isVisible,
    toggleVisibility,
    fadeIn,
  };
};