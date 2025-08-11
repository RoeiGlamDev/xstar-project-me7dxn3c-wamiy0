export const BRAND_NAME = "CleanSSR";
export const PRIMARY_COLOR = "#800080"; // Purple
export const SECONDARY_COLOR = "#FFFFFF"; // White

/
 * Configuration settings for CleanSSR application
 */
export const CONFIG = {
    siteTitle: "CleanSSR - Technology-Driven Cleaning Solutions",
    slogan: "Revolutionizing Cleanliness with Technology",
    contactEmail: "contact@cleanSSR.com",
    phoneNumber: "+1 (800) 555-0199",
    address: "123 Clean St, Tech City, TX 75001",
};

/
 * Review interface representing customer feedback
 */
export interface Review {
    customerName: string;
    rating: number; // scale from 1 to 5
    comment: string;
}

/
 * Example reviews for display on the website
 */
export const REVIEWS: Review[] = [
    {
        customerName: "Alice Johnson",
        rating: 5,
        comment: "CleanSSR transformed our office! Highly recommend their services.",
    },
    {
        customerName: "Mark Smith",
        rating: 4,
        comment: "Great technology and efficient service. My home has never looked better!",
    },
    {
        customerName: "Linda Garcia",
        rating: 5,
        comment: "Professional team with cutting-edge cleaning solutions. Impressive!",
    },
];

/
 * Service offerings interface representing various cleaning services
 */
export interface Service {
    title: string;
    description: string;
    price: number; // in USD
}

/
 * Example services offered by CleanSSR
 */
export const SERVICES: Service[] = [
    {
        title: "Smart Office Cleaning",
        description: "Optimize your workspace with our innovative cleaning technology.",
        price: 200,
    },
    {
        title: "Eco-Friendly Home Cleaning",
        description: "Safe and effective cleaning solutions for your home.",
        price: 150,
    },
    {
        title: "Post-Construction Cleanup",
        description: "Thorough cleaning services to ensure your new space is move-in ready.",
        price: 300,
    },
];