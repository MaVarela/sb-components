import './mylabel.css';

export interface MyLabelProps {
  /**
   * Texto de la etiqueta
   */
  label?: string;
  /**
   * Tamaño de la etiqueta
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * ¿Texto en mayúsculas?
   */
  allCaps?: boolean;
  /**
   * Tipo de color del texto
   */
  color?: 'primary'|'secondary'|'tertiary';
  /**
   * Color de la fuente
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = 'No label', 
  size = 'normal',
  color = 'primary',
  allCaps = false,
  fontColor
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}