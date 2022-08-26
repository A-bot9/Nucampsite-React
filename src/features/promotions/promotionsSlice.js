import { PROMOTIONS } from '../../app/shared/PROMOTIONS';

// Checks if featured is true otherwise its false
export const selectFeaturedPromotion = () => {
	return PROMOTIONS.find((promotion) => promotion.featured);
};
