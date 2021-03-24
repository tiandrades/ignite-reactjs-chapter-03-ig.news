import styles from './styles.module.scss';

interface SubscibeButtonProps {
  priceId: string;
}

export function SubscibeButton({ priceId }: SubscibeButtonProps) {
  return (
    <button
      type="button"
      className={styles.subscribeButton}
    >
      Subscibe now
    </button>
  )
}