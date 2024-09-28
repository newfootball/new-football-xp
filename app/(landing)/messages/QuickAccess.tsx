import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

function QuickAccess() {
  const users = [
    {
      id: 1,
      name: "marilio5",
      image:
        "https://loremflickr.com/cache/resized/65535_53847699290_e61659f9ce_320_240_nofilter.jpg",
    },
    {
      id: 2,
      name: "lea.98",
      image:
        "https://loremflickr.com/cache/resized/5061_5689239842_011f2bc909_320_240_g.jpg",
    },
    { id: 3, name: "loco_cafe", image: "/images/default-user.png" },
    {
      id: 4,
      name: "gabriel.g",
      image:
        "https://www.thefinance360.com/wp-content/uploads/2024/08/Screenshot-2024-08-29-at-5.40.14-PM.png",
    },
  ];

  return (
    <div className="flex space-x-4 px-4 mb-4 overflow-x-auto">
      <Button variant="outline" className="rounded-full flex-shrink-0">
        <PlusCircle className="h-6 w-6" />
        <span className="ml-2">New</span>
      </Button>
      {users.map((user) => (
        <Image
          key={user.id}
          src={user.image ?? "/images/default-user.png"}
          alt={user.name ?? "-"}
          className="w-12 h-12 rounded-full flex-shrink-0"
          width={48}
          height={48}
        />
      ))}
    </div>
  );
}

export default QuickAccess;
