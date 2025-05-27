import { LucideProps } from "lucide-react";
import {
  Check,
  Heart,
  Droplets,
  Zap,
  Eye,
  TrendingDown,
  Pill,
  Apple,
  Phone,
  CircleAlert,
  Activity,
  Target,
  CheckCircle,
  AlertTriangle,
  X,
  Dumbbell,
  Moon,
} from "lucide-react";

const iconMap = {
  Check,
  Heart,
  Droplets,
  Zap,
  Eye,
  TrendingDown,
  Pill,
  Apple,
  Phone,
  CircleAlert,
  Activity,
  Target,
  CheckCircle,
  AlertTriangle,
  X,
  Dumbbell,
  Moon,
};

interface IconProps extends LucideProps {
  name: keyof typeof iconMap;
  fallback?: keyof typeof iconMap;
}

const Icon = ({ name, fallback = "CircleAlert", ...props }: IconProps) => {
  const IconComponent = iconMap[name] || iconMap[fallback];
  return <IconComponent {...props} />;
};

export default Icon;
