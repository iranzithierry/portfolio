import { Button } from "@/components/ui/button";
import About from "./about/page";
import { redirect } from "next/navigation";

export default function Index() {
    return redirect('/about')
  }