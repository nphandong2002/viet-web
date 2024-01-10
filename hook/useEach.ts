import { Children, ReactNode } from "react";

const useEach = ({ render, of }: { render: any; of: ReactNode[] }) => Children.toArray(of.map((item, index) => render(item, index)));
