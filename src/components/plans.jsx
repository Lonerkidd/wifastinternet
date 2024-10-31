// src/components/Plans.jsx
import React ,{ useState } from 'react';

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  const plans = [
    { id: 1, name: "12-hours Plan", cost: "Ksh 30" },
    { id: 2, name: "24-Hours Plan", cost: "Ksh 50" },
    { id: 3, name: "7-Days Plan", cost: "Ksh 250" },
    { id: 4, name: "30-Days Plan", cost: "Ksh 800" },
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

return (
    <section className="my-8 p-4">
      <h2 className="text-xl font-semibold text-center mb-4">Choose Your Plan</h2>
      <div className="flex flex-col items-center space-y-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => handleSelectPlan(plan)}
            className={`cursor-pointer bg-white shadow-md p-4 rounded-lg w-64 ${
              selectedPlan?.id === plan.id ? "bg-blue-200" : ""
            }`}
          >
            <h3 className="font-bold text-lg">{plan.name}</h3>
            <p className="text-gray-600">Cost: {plan.cost}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
