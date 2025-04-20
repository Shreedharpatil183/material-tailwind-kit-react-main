import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function FeatureCard({ image, title, description, price, oldPrice, link }) {
  return (
    <Card className="rounded-lg shadow-lg shadow-gray-500/10 overflow-hidden">
      {/* Image Section */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Card Body */}
      <CardBody className="px-6 py-4 text-left space-y-3">
        <Typography variant="h6" color="blue-gray" className="font-bold">
          {title}
        </Typography>
        <Typography className="text-sm text-blue-gray-600">
          {description}
        </Typography>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <Typography className="text-lg font-bold text-gray-900">{price}</Typography>
            <Typography className="text-sm line-through text-gray-500">{oldPrice}</Typography>
          </div>
          <a
            href={link}
            className="text-indigo-600 text-sm font-medium hover:underline"
          >
            Learn More →
          </a>
        </div>
      </CardBody>
    </Card>
  );
}

FeatureCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
