import SignupFormDemo from "@/components/example/sign-in";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="m-20 p-30">
        <SignupFormDemo />
      </Card>
    </div>
  );
}
