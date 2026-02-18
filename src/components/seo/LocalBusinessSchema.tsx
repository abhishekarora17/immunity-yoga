export default function LocalBusinessSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ExerciseGym',
        name: 'Immunity Yoga and Gym Studio',
        image: 'https://immunity-yoga.vercel.app/images/hero.jpg', // Placeholder image URL
        '@id': 'https://immunity-yoga.vercel.app',
        url: 'https://immunity-yoga.vercel.app',
        telephone: '+919876543210',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'H. No 1134, New Jyoti Colony, Street No. 14, near Dream park, Urban Estate Phase 1, Jamalpur',
            addressLocality: 'Ludhiana',
            addressRegion: 'Punjab',
            postalCode: '141003',
            addressCountry: 'IN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '30.9010', // Approximate lat for Jamalpur, Ludhiana
            longitude: '75.8573', // Approximate lon for Jamalpur, Ludhiana
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                ],
                opens: '06:00',
                closes: '21:00',
            },
        ],
        sameAs: [
            'https://www.instagram.com/immunity_yoga_and_gym/',
            'https://www.youtube.com/@immunityyogaandgymstudio',
            'https://www.facebook.com/immunityyogastudio/',
        ],
        priceRange: '₹50 - ₹10000',
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
