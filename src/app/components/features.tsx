import { Award, Layout, Zap } from "lucide-react";

const features = [
  {
    icon: <Layout className="w-12 h-12 text-blue-600" />,
    title: "Customizable Templates",
    description:
      "Choose from a variety of professional templates and customize them to fit your needs.",
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-600" />,
    title: "Quick Generation",
    description:
      "Generate certificates in seconds with our user-friendly interface.",
  },
  {
    icon: <Award className="w-12 h-12 text-blue-600" />,
    title: "Professional Quality",
    description:
      "Create high-quality certificates that look great both digitally and in print.",
  },
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Certificate Generator?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
