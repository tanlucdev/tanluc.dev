import React from 'react';

type TipProps = {
  children: React.ReactNode;
};

const Tip = ({ children }: TipProps) => {
  return (
    <div className="my-4 p-4 border-l-4 border-blue-500 bg-blue-50 text-sm text-blue-800 rounded">
      💡 <span className="font-medium">Tip:</span> {children}
    </div>
  );
};

export default Tip;
