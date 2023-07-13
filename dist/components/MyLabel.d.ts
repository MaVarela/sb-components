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
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color de la fuente
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
