import { ShoppingCartIcon } from "@heroicons/react/outline";
import React, { ReactElement } from "react";

interface Props {
  children: React.ReactNode;
}

function BaseLayout({ children }: Props): ReactElement {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <header className="w-full bg-gray-500 text-gray-50 py-3 px-2 h-12">
        <div className="flex">
          <ShoppingCartIcon className="w-5 mr-1" />
          Grocery List App
        </div>
      </header>
      <main className="my-2 px-2 flex-1">{children}</main>
    </div>
  );
}

export default BaseLayout;
