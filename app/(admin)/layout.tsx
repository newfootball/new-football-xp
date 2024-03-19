import { Header } from "@/features/layout/Header";
import { LayoutParams } from "@/lib/next";

export default function RouteLayout(props: LayoutParams<{}>) {
  return (
    <div className="h-full bg-slate-100">
      <Header />
      {props.children}
    </div>
  );
}
