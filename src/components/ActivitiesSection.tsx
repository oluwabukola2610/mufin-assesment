
import { useState, useEffect } from "react";

interface Activity {
  id: number;
  title: string;
  description: string;
  image?: string;
}

const ActivitiesSection = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/content.json")
      .then((response) => response.json())
      .then((data) => {
        setActivities(data.activities);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading activities data:", error);
        setLoading(false);
      });
  }, []);


  if (loading) {
    return <div className="text-center py-10">Loading activities...</div>;
  }

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold">
          <span className="text-black">함께하는 일</span>
          <span className="text-[#BBBBBB] ml-2 sm:ml-4 lg:ml-8 block sm:inline">우리의 후원</span>
        </h2>
      </div>
      <div className="space-y-6 sm:space-y-8">
        {activities.map((activity) => (
          <div key={activity.id} className="flex flex-col md:flex-row gap-6 md:gap-0 items-center">
            {activity.id % 2 === 0 && (
              <div className="w-full md:w-1/3 md:text-right md:pr-6 lg:pr-8 order-2 md:order-1">
                <h3 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] font-bold mb-2 sm:mb-3">
                  {activity.title}
                </h3>
                {activity.description.split("\n").map((line, index) => (
                  <p key={index} className="text-base sm:text-lg mb-1">
                    {line}
                  </p>
                ))}
              </div>
            )}
            <div className="w-full md:w-2/3 order-1 md:order-2">
              <div className="relative rounded-md overflow-hidden">
                <img
                  loading="lazy"
                  src={activity.image || `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=150`}
                  alt={activity.title}
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover"
                />
              </div>
            </div>
            {activity.id % 2 !== 0 && (
              <div className="w-full md:w-1/3 md:pl-6 lg:pl-8 order-2 md:order-3">
                <h3 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] font-bold mb-2 sm:mb-3">
                  {activity.title}
                </h3>
                {activity.description.split("\n").map((line, index) => (
                  <p key={index} className="text-base sm:text-lg mb-1">
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesSection;