import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ProductCard() {
  return (
    <Card className="relative gap-1 mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-transparent">
        <Badge variant="secondary" className="absolute top-0 ml-1 mt-1 left-0 z-auto">
          Featured
        </Badge>
        <Badge variant="secondary" className="absolute bottom-0 mb-1 ml-1 left-0 z-auto">
          Featured
        </Badge>
        <Badge variant="secondary" className="absolute bottom-0 right-0 mb-1 mr-1 z-auto">
          Featured
        </Badge>
      </div>
      <img
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ_Zuz3haRHrSz0f3bnMlUTGa14Qc7Z5LLQ3-l04P98hv9CMXQU"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover"
      />

      <CardHeader>
        {/* <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction> */}
        <CardTitle className="text-[14px]">
          <p>
            $250 <span className="line-through text-[#b7b9bb]">1500 </span>{" "}
            <span className="text-green-500">50 % off</span>
          </p>
        </CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  );
}
