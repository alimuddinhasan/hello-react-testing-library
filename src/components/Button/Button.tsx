interface IButtonProps {
  label: string;
  color?: 'primary' | 'secondary' | 'default' | undefined
  disabled?: boolean | undefined
  onClick?: () => void;
}

export default function Button({label, color = 'default', disabled, onClick}: IButtonProps) {
  const getColorClassName = () => {
    if (color === 'primary') {
      return 'button-primary'
    } else if (color === 'secondary') {
      return 'button-secondary'
    } else {
      return 'button-default'
    }
  }

  return <button className={getColorClassName()} disabled={disabled} onClick={onClick}>{label}</button>
}
