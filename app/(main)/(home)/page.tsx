import { Paths } from "@/config/router";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: Paths.newfeed.title,
};

export default function Home() {
  return <div>HOME</div>;
}
