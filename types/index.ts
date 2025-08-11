import { ReactNode } from 'react';

/
 * Represents a review for CleanSSR.
 */
export interface Review {
    id: string;
    customerName: string;
    rating: number; // Rating out of 5
    comment: string;
}

/
 * Represents the services offered by CleanSSR.
 */
export interface Service {
    id: string;
    title: string;
    description: string;
    price: number; // Price in USD
}

/
 * Represents the overall state of the CleanSSR application.
 */
export interface CleanSSRAppState {
    services: Service[];
    reviews: Review[];
}

/
 * Represents a contact form submission for CleanSSR.
 */
export interface ContactFormSubmission {
    name: string;
    email: string;
    message: string;
}

/
 * Represents the props for the ServiceCard component.
 */
export interface ServiceCardProps {
    service: Service;
}

/
 * Represents the props for the ReviewCard component.
 */
export interface ReviewCardProps {
    review: Review;
}

/
 * Represents the props for the ContactForm component.
 */
export interface ContactFormProps {
    onSubmit: (submission: ContactFormSubmission) => void;
}

/
 * Exports all interfaces and types related to CleanSSR.
 */
export {
    Review,
    Service,
    CleanSSRAppState,
    ContactFormSubmission,
    ServiceCardProps,
    ReviewCardProps,
    ContactFormProps,
};