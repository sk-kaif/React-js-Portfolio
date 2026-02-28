import { cubicBezier } from 'framer-motion';

// Centralized easing tokens for consistent animations
export const EASE_SMOOTH = cubicBezier(0.25, 0.46, 0.45, 0.94);
export const EASE_FAST = cubicBezier(0.4, 0.0, 0.2, 1);
export const EASE_BOUNCE = cubicBezier(0.68, -0.55, 0.265, 1.55);