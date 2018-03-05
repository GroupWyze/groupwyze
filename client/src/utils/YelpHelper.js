import YelpStar0 from '../images/yelpIcons/regular/regular_0.png';
import YelpStar1 from '../images/yelpIcons/regular/regular_1.png';
import YelpStar1Half from '../images/yelpIcons/regular/regular_1_half.png';
import YelpStar2 from '../images/yelpIcons/regular/regular_2.png';
import YelpStar2Half from '../images/yelpIcons/regular/regular_2_half.png';
import YelpStar3 from '../images/yelpIcons/regular/regular_3.png';
import YelpStar3Half from '../images/yelpIcons/regular/regular_3_half.png';
import YelpStar4 from '../images/yelpIcons/regular/regular_4.png';
import YelpStar4Half from '../images/yelpIcons/regular/regular_4_half.png';
import YelpStar5 from '../images/yelpIcons/regular/regular_5.png';

export default {
  // set's the yelp star rating image given the rating
  getYelpRatingImage: function (rating) {
    switch (rating) {
      case 0:
        return YelpStar0;
        break;
      case 1:
        return YelpStar1;
        break;
      case 1.5:
        return YelpStar1Half;
        break;
      case 2:
        return YelpStar2;
        break;
      case 2.5:
        return YelpStar2Half;
        break;
      case 3:
        return YelpStar3;
        break;
      case 3.5:
        return YelpStar3Half;
        break;
      case 4:
        return YelpStar4;
        break;
      case 4.5:
        return YelpStar4Half;
        break;
      case 5:
        return YelpStar5;
        break;
      default:
        return YelpStar0;
    }
  }
};