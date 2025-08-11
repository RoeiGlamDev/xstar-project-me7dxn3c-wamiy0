import { cleanSSRConfig } from './config';

/
 * Utility functions for CleanSSR application
 * This module contains helper functions that are tailored for CleanSSR's technology-focused cleaning services.
 * 
 * @module utils
 */

/
 * Class representing the structure of a review.
 * @interface Review
 * @property {string} reviewer - The name of the reviewer.
 * @property {number} rating - The rating given by the reviewer, from 1 to 5.
 * @property {string} comment - The review comment from the reviewer.
 */
export interface Review {
    reviewer: string;
    rating: number;
    comment: string;
}

/
 * Function to concatenate class names for styling.
 * 
 * @param {...string} classes - Any number of class name strings.
 * @returns {string} - A single string with all class names concatenated.
 * 
 * @example
 * cn('btn', 'btn-primary', 'active') // returns 'btn btn-primary active'
 */
export function cn(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

/
 * Function to format a review for display on the CleanSSR website.
 * 
 * @param {Review} review - The review object to format.
 * @returns {string} - A formatted string representing the review.
 * 
 * @example
 * formatReview({ reviewer: 'John Doe', rating: 5, comment: 'Excellent service!' }) // returns 'John Doe (5 stars): Excellent service!'
 */
export function formatReview(review: Review): string {
    return ${review.reviewer} (${review.rating} stars): ${review.comment};
}

/
 * Function to fetch reviews from the CleanSSR database or API.
 * 
 * This function simulates fetching data and can be replaced with real API calls.
 * 
 * @returns {Promise<Review[]>} - A promise that resolves to an array of reviews.
 */
export async function fetchReviews(): Promise<Review[]> {
    // Simulated fetching of reviews, replace with actual API call as needed.
    return [
        { reviewer: 'Alice Johnson', rating: 5, comment: 'CleanSSR transformed my office space!' },
        { reviewer: 'Bob Smith', rating: 4, comment: 'Great service, will use again!' },
        { reviewer: 'Charlie Brown', rating: 5, comment: 'Highly recommend CleanSSR for tech cleaning needs!' },
    ];
}