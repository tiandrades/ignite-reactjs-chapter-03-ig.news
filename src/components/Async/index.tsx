import { useEffect, useState } from 'react';

export function Async() {
  const [isButtonVisible, setIsButtonInVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonInVisible(true);
    }, 1000)
  })

  return (
    <div>
      <div>Hello World</div>
      { !isButtonVisible && <button>Button</button> }
    </div>
  )
}