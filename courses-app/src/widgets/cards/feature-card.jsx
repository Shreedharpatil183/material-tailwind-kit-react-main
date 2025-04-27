import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function FeatureCard({ image, title, description, price, oldPrice, onViewDetails }) {
  return (
    <Card className="rounded-lg shadow-lg shadow-gray-500/10 overflow-hidden hover:scale-105 transform transition-all duration-300">
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
          <Button
            size="sm"
            variant="text"
            color="indigo"
            className="normal-case font-medium"
            onClick={onViewDetails}
          >
            Learn More →
          </Button>
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
  onViewDetails: PropTypes.func.isRequired, // 🆕 now expects a function, not link
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
