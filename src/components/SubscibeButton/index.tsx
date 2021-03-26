import { signIn, useSession } from 'next-auth/client';
import styles from './styles.module.scss';

interface SubscibeButtonProps {
  priceId: string;
}

export function SubscibeButton({ priceId }: SubscibeButtonProps) {
  const [session] = useSession();
  
  function handleSubscribe() {
    if (!session) {
      signIn('github')
      return;
    }    
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
    >
      Subscibe now
    </button>
  )
}